/**
 * Wedding App - Interactive Engine
 * Handles dynamic content rendering, live theme updates, audio player,
 * countdown, guest personalization, RSVP & Wishes management.
 */

let currentData = null;
let audioElement = null;
let isAudioPlaying = false;
let countdownInterval = null;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize data
  initApp();

  // 2. Listen for live updates from CMS (postMessage)
  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "UPDATE_CONFIG") {
      currentData = event.data.payload;
      renderApp(currentData);
    }
  });
});

function initApp() {
  // Check if configuration exists in localStorage, otherwise use default
  currentData = loadWeddingData();
  renderApp(currentData);
  initAudio();
  initUrlGuestParam();
  initCountdown();
  initFormListeners();
  initScrollSpy();
  initThemeSelectorModal();
}

/**
 * Render all components and bind theme variables
 */
function renderApp(data) {
  if (!data) return;

  // 1. Apply Dynamic CSS Variables
  applyThemeColors(data.theme);

  // 2. Update Header Monogram
  const headerMonograms = document.querySelectorAll(".app-monogram");
  headerMonograms.forEach(el => { el.textContent = data.hero.monogram || "A & M"; });

  // 3. Update Hero & Opening Envelope Curtain
  updateHeroSection(data.hero);

  // 4. Update Quote
  updateQuoteSection(data.quote);

  // 5. Update Couple (Groom & Bride)
  updateCoupleSection(data.couple);

  // 6. Update Love Story Timeline
  updateStorySection(data.story);

  // 7. Update Moments of Grace (Gallery)
  updateGallerySection(data.gallery);

  // 8. Update Events (Akad & Resepsi)
  updateEventsSection(data.events);

  // 9. Update Location & Protocols
  updateLocationSection(data.location);

  // 10. Update Digital Gifts & Bank Accounts
  updateGiftsSection(data.gifts);

  // 11. Update Wishes (Guestbook)
  renderWishes();

  // 12. Update Music details
  updateMusicConfig(data.music);

  // 13. Update Footer
  updateFooterSection(data.footer);
}

/**
 * Apply dynamic CSS variables to root
 */
function applyThemeColors(theme) {
  if (!theme || !theme.colors) return;
  const root = document.documentElement;
  const c = theme.colors;

  root.style.setProperty("--color-primary", c.primary);
  root.style.setProperty("--color-on-primary", c.onPrimary || "#FFFFFF");
  root.style.setProperty("--color-secondary", c.secondary);
  root.style.setProperty("--color-tertiary", c.tertiary);
  root.style.setProperty("--color-background", c.background);
  root.style.setProperty("--color-surface", c.surface);
  root.style.setProperty("--color-surface-container", c.surfaceContainer);
  root.style.setProperty("--color-surface-container-low", c.surfaceContainerLow || c.surface);
  root.style.setProperty("--color-surface-container-lowest", c.surfaceContainerLowest || "#FFFFFF");
  root.style.setProperty("--color-outline", c.outline);
  root.style.setProperty("--color-outline-variant", c.outlineVariant);
  root.style.setProperty("--color-on-surface", c.onSurface);
  root.style.setProperty("--color-on-surface-variant", c.onSurfaceVariant);

  if (theme.typography) {
    if (theme.typography.headingFont) {
      root.style.setProperty("--font-heading", `'${theme.typography.headingFont}', serif`);
    }
    if (theme.typography.bodyFont) {
      root.style.setProperty("--font-body", `'${theme.typography.bodyFont}', sans-serif`);
    }
  }

  if (theme.borderRadius) {
    root.style.setProperty("--border-radius", theme.borderRadius);
  }

  // Apply Cultural Motif & Ornaments
  const ornamentStyle = theme.ornamentStyle || "botanical";
  document.body.dataset.ornament = ornamentStyle;
  updateCulturalOrnaments(ornamentStyle);
}

/**
 * Render Dynamic Cultural Ornaments & Motifs
 */
function updateCulturalOrnaments(ornamentStyle) {
  const style = ornamentStyle || "botanical";
  document.body.dataset.ornament = style;

  if (typeof CULTURAL_ORNAMENTS === "undefined" || !CULTURAL_ORNAMENTS[style]) return;
  const ornament = CULTURAL_ORNAMENTS[style];

  // 1. Curtain seal badge
  const sealBadge = document.getElementById("curtain-ornament-badge");
  if (sealBadge) {
    sealBadge.innerHTML = ornament.svg;
  }

  // 2. Curtain cultural title badge
  const culturalBadge = document.getElementById("curtain-cultural-badge");
  if (culturalBadge) {
    culturalBadge.textContent = ornament.subname || ornament.name || "The Sacred Union";
  }

  // 3. Section dividers throughout index.html
  const dividerSlots = document.querySelectorAll(".cultural-ornament-slot");
  dividerSlots.forEach(slot => {
    slot.innerHTML = ornament.svg;
  });

  // 4. Header small cultural icon
  const headerEmblem = document.getElementById("header-cultural-emblem");
  if (headerEmblem) {
    headerEmblem.innerHTML = ornament.svg;
  }
}

/**
 * Hero & Opening Curtain
 */
function updateHeroSection(hero) {
  if (!hero) return;

  setText("curtain-monogram", hero.monogramItalic || hero.monogram || "a&m");
  setText("curtain-title", hero.title);
  setText("curtain-subtitle", hero.dateLocation);
  setText("curtain-welcome-prefix", hero.welcomePrefix || "Kepada Yth. Bapak/Ibu/Saudara/i");
  setText("curtain-welcome-msg", hero.welcomeMessage);
  setText("curtain-btn-text", hero.buttonText || "Buka Undangan");

  setText("hero-superheader", hero.superHeader || "Private Nuptials");
  setText("hero-title", hero.title);
  setText("hero-date-location", hero.dateLocation);
  setText("hero-badge-chapter", hero.badgeChapter || "Chapter One");
  setText("hero-badge-title", hero.badgeTitle || "The Sacred Union");

  const coverImg = document.getElementById("hero-cover-img");
  if (coverImg && hero.coverImage) {
    coverImg.src = hero.coverImage;
  }
}

/**
 * Quote / Ayat Suci
 */
function updateQuoteSection(quote) {
  if (!quote) return;
  setText("quote-bismillah", quote.bismillah || "Bismillahir Rahmanir Rahim");
  setText("quote-title", quote.title || "The Two Souls");
  setText("quote-arabic", quote.arabic || "");
  setText("quote-translation", quote.translation || "");
  setText("quote-source", quote.source || "QS. Ar-Rum: 21");
}

/**
 * Couple profiles (Groom & Bride)
 */
function updateCoupleSection(couple) {
  if (!couple) return;

  if (couple.groom) {
    setText("groom-name", couple.groom.name);
    setText("groom-role", couple.groom.role);
    setText("groom-parents", couple.groom.parents);
    setText("groom-ig-handle", couple.groom.instagram);
    const groomIgLink = document.getElementById("groom-ig-link");
    if (groomIgLink) {
      groomIgLink.href = couple.groom.instagramUrl || `https://instagram.com/${couple.groom.instagram}`;
    }
    const groomImg = document.getElementById("groom-photo");
    if (groomImg && couple.groom.photo) groomImg.src = couple.groom.photo;
  }

  if (couple.bride) {
    setText("bride-name", couple.bride.name);
    setText("bride-role", couple.bride.role);
    setText("bride-parents", couple.bride.parents);
    setText("bride-ig-handle", couple.bride.instagram);
    const brideIgLink = document.getElementById("bride-ig-link");
    if (brideIgLink) {
      brideIgLink.href = couple.bride.instagramUrl || `https://instagram.com/${couple.bride.instagram}`;
    }
    const brideImg = document.getElementById("bride-photo");
    if (brideImg && couple.bride.photo) brideImg.src = couple.bride.photo;
  }
}

/**
 * Love Story Timeline
 */
function updateStorySection(story) {
  if (!story) return;
  setText("story-subtitle", story.subtitle || "Chronicles");
  setText("story-title", story.title || "Our Love Story");
  setText("story-desc", story.description || "");

  const container = document.getElementById("story-milestones-container");
  if (!container || !story.milestones) return;

  container.innerHTML = story.milestones.map((m) => `
    <div class="relative group">
      <div class="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-secondary flex items-center justify-center">
        <div class="w-1.5 h-1.5 rounded-full bg-secondary"></div>
      </div>
      <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/40 paper-shadow">
        <span class="font-label-sm text-label-sm text-tertiary font-semibold uppercase tracking-wider block mb-1">${escapeHtml(m.period)}</span>
        <h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">${escapeHtml(m.title)}</h4>
        <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          ${escapeHtml(m.desc)}
        </p>
      </div>
    </div>
  `).join("");
}

/**
 * Moments of Grace (Gallery)
 */
function updateGallerySection(gallery) {
  if (!gallery) return;
  setText("gallery-subtitle", gallery.subtitle || "Visual Diary");
  setText("gallery-title", gallery.title || "Moments of Grace");

  const container = document.getElementById("gallery-grid-container");
  if (!container || !gallery.items) return;

  container.innerHTML = gallery.items.map((item, index) => {
    const isWide = item.aspect === "wide" || index === 0;
    return `
      <div class="${isWide ? 'col-span-2 aspect-[16/9]' : 'aspect-square'} relative rounded-xl overflow-hidden border border-outline-variant/40 paper-shadow group cursor-pointer" onclick="openLightbox('${item.url}', '${escapeHtml(item.caption)}')">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="${item.url}" alt="${escapeHtml(item.caption)}" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div class="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-label-sm uppercase tracking-wider text-on-surface">
          ${escapeHtml(item.caption)}
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Events (Akad & Resepsi)
 */
function updateEventsSection(events) {
  if (!events) return;

  if (events.event1) {
    const e1 = events.event1;
    setText("e1-tag", e1.tag || "Sesi Pagi");
    setText("e1-title", e1.title || "Akad Nikah");
    setText("e1-subtitle", e1.subtitle || "The Holy Matrimony");
    setText("e1-time", e1.time);
    setText("e1-date", e1.date);
    setText("e1-venue", e1.venueName);
    setText("e1-address", e1.venueAddress);
    setText("e1-dresscode", e1.dresscode);

    const calBtn = document.getElementById("e1-cal-btn");
    if (calBtn && e1.googleCalendarUrl) calBtn.href = e1.googleCalendarUrl;

    const mapBtn = document.getElementById("e1-map-btn");
    if (mapBtn && e1.mapsUrl) mapBtn.href = e1.mapsUrl;
  }

  if (events.event2) {
    const e2 = events.event2;
    setText("e2-tag", e2.tag || "Sesi Senja & Malam");
    setText("e2-title", e2.title || "Resepsi Pernikahan");
    setText("e2-subtitle", e2.subtitle || "Evening Reception & Sunset Soirée");
    setText("e2-time", e2.time);
    setText("e2-date", e2.date || (events.event1 && events.event1.date));
    setText("e2-cocktail", e2.cocktailNote || "Sunset Cocktails & Canapés");
    setText("e2-venue", e2.venueName);
    setText("e2-address", e2.venueAddress);
    setText("e2-dresscode", e2.dresscode);

    const calBtn = document.getElementById("e2-cal-btn");
    if (calBtn && e2.googleCalendarUrl) calBtn.href = e2.googleCalendarUrl;

    const mapBtn = document.getElementById("e2-map-btn");
    if (mapBtn && e2.mapsUrl) mapBtn.href = e2.mapsUrl;
  }
}

/**
 * Location & Protocols
 */
function updateLocationSection(loc) {
  if (!loc) return;
  setText("loc-section-label", loc.sectionLabel || "Lokasi Acara");
  setText("loc-title", loc.title);
  setText("loc-desc", loc.description);
  setText("loc-coordinates", loc.coordinates || "");
  setText("loc-shuttle-title", loc.shuttleTitle || "Layanan Shuttle & Parkir Valet");
  setText("loc-shuttle-desc", loc.shuttleDescription || "");

  const previewImg = document.getElementById("loc-preview-img");
  if (previewImg && loc.previewImage) previewImg.src = loc.previewImage;

  const mapLink = document.getElementById("loc-maps-link");
  if (mapLink && loc.navigationUrl) mapLink.href = loc.navigationUrl;

  // Protocols grid
  const container = document.getElementById("loc-etiquettes-container");
  if (container && loc.etiquettes) {
    container.innerHTML = loc.etiquettes.map(eti => `
      <div class="p-3.5 bg-surface-container-low border border-outline-variant/40 rounded-lg text-center flex flex-col items-center">
        <div class="w-10 h-10 rounded-full bg-surface flex items-center justify-center mb-2 text-secondary border border-outline-variant/40">
          <span class="material-symbols-outlined text-[20px]">${escapeHtml(eti.icon || 'star')}</span>
        </div>
        <span class="font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider">${escapeHtml(eti.title)}</span>
        <p class="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug text-[11px]">
          ${escapeHtml(eti.desc)}
        </p>
      </div>
    `).join("");
  }
}

/**
 * Digital Gifts & Bank Accounts
 */
function updateGiftsSection(gifts) {
  if (!gifts) return;
  setText("gifts-title", gifts.title || "Tanda Kasih & Amplop Digital");
  setText("gifts-intro", gifts.intro);

  // Bank cards
  const bankContainer = document.getElementById("gifts-bank-container");
  if (bankContainer && gifts.banks) {
    bankContainer.innerHTML = gifts.banks.map(bank => `
      <div class="bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-4 flex flex-col justify-between gap-3 shadow-xs">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Transfer Bank</span>
            <p class="font-headline-sm text-headline-sm text-primary tracking-wide mt-0.5">${escapeHtml(bank.bankName)}</p>
          </div>
          <div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary">
            <span class="material-symbols-outlined text-[18px]">account_balance</span>
          </div>
        </div>
        <div class="bg-surface-container-low/70 rounded-lg p-3 flex items-center justify-between">
          <div class="flex flex-col">
            <span class="font-body-sm text-body-sm text-on-surface-variant">Nomor Rekening:</span>
            <span class="font-label-lg text-label-lg font-bold tracking-wider text-on-surface">${escapeHtml(bank.accountNumber)}</span>
            <span class="font-body-sm text-body-sm text-on-surface-variant/80">a/n ${escapeHtml(bank.accountHolder)}</span>
          </div>
          <button class="px-3 py-2 bg-surface-container-highest/80 hover:bg-outline-variant/50 text-on-surface rounded-lg font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-150 active:scale-95" onclick="copyToClipboard('${bank.accountNumber}', 'Nomor rekening ${escapeHtml(bank.bankName)} berhasil disalin!')" type="button">
            <span class="material-symbols-outlined text-[16px]">content_copy</span>
            <span>Salin</span>
          </button>
        </div>
      </div>
    `).join("");
  }

  // QRIS modal image
  const qrisImg = document.getElementById("qris-modal-image");
  if (qrisImg && gifts.qrisImage) qrisImg.src = gifts.qrisImage;

  // Physical Gift Drawer
  if (gifts.physicalGift) {
    setText("gift-recipient", gifts.physicalGift.recipient);
    setText("gift-address", gifts.physicalGift.address);
    setText("gift-contact", gifts.physicalGift.contact);
    const copyAddrBtn = document.getElementById("copy-address-btn");
    if (copyAddrBtn) {
      const fullText = `${gifts.physicalGift.recipient} - ${gifts.physicalGift.address} (${gifts.physicalGift.contact})`;
      copyAddrBtn.setAttribute("onclick", `copyToClipboard('${escapeAttr(fullText)}', 'Alamat pengiriman kado berhasil disalin!')`);
    }
  }
}

/**
 * Footer
 */
function updateFooterSection(footer) {
  if (!footer) return;
  setText("footer-quote", footer.closingQuote || "With endless love,");
  setText("footer-names", footer.names || "Arya & Maya");
  setText("footer-date", footer.date || "");
}

/**
 * Background Audio
 */
function updateMusicConfig(music) {
  if (!music || !audioElement) return;
  setText("music-track-title", music.songTitle || "Wedding Melody");
  if (audioElement.src !== music.audioUrl && music.audioUrl) {
    const wasPlaying = isAudioPlaying;
    audioElement.src = music.audioUrl;
    if (wasPlaying) {
      audioElement.play().catch(() => {});
    }
  }
}

function initAudio() {
  audioElement = document.getElementById("bg-audio");
  const audioBtn = document.getElementById("audio-toggle");
  const discIcon = document.getElementById("disc-icon");

  if (!audioElement || !audioBtn) return;

  if (currentData && currentData.music && currentData.music.audioUrl) {
    audioElement.src = currentData.music.audioUrl;
  }

  audioBtn.addEventListener("click", () => {
    toggleAudio();
  });
}

function toggleAudio() {
  if (!audioElement) return;
  const audioBtn = document.getElementById("audio-toggle");
  const discIcon = document.getElementById("disc-icon");

  if (isAudioPlaying) {
    audioElement.pause();
    isAudioPlaying = false;
    if (discIcon) discIcon.classList.add("music-paused");
    if (audioBtn) {
      const icon = audioBtn.querySelector(".music-icon");
      if (icon) icon.textContent = "volume_off";
    }
  } else {
    audioElement.play().then(() => {
      isAudioPlaying = true;
      if (discIcon) discIcon.classList.remove("music-paused");
      if (audioBtn) {
        const icon = audioBtn.querySelector(".music-icon");
        if (icon) icon.textContent = "music_note";
      }
    }).catch(err => {
      console.warn("Audio autoplay blocked by browser:", err);
    });
  }
}

/**
 * Open Invitation Envelope Action
 */
function openInvitation() {
  const curtain = document.getElementById("envelope-curtain");
  if (curtain) {
    curtain.classList.add("opened");
  }

  // Start music
  if (audioElement && currentData && currentData.music && currentData.music.autoplayOnOpen) {
    audioElement.play().then(() => {
      isAudioPlaying = true;
      const discIcon = document.getElementById("disc-icon");
      if (discIcon) discIcon.classList.remove("music-paused");
    }).catch(e => console.log("User interaction required for audio", e));
  }

  // Scroll smoothly to main
  setTimeout(() => {
    const mainEl = document.getElementById("main-content");
    if (mainEl) {
      mainEl.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);
}

/**
 * Personalized Guest URL parameter (?to=Bapak+Budi)
 */
function initUrlGuestParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("to") || urlParams.get("u") || urlParams.get("nama");

  if (guestName) {
    const decodedName = decodeURIComponent(guestName).replace(/\+/g, " ");
    setText("curtain-guest-name", decodedName);
    setText("welcome-guest-name", decodedName);

    // Pre-fill RSVP form input
    const guestInput = document.getElementById("rsvp-guest-name");
    if (guestInput) guestInput.value = decodedName;
    const wishSenderInput = document.getElementById("wish-sender");
    if (wishSenderInput) wishSenderInput.value = decodedName;
  } else if (currentData && currentData.hero) {
    setText("curtain-guest-name", currentData.hero.defaultGuestName || "Tamu Undangan");
    setText("welcome-guest-name", currentData.hero.defaultGuestName || "Tamu Undangan");
  }
}

/**
 * Countdown Timer
 */
function initCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  function updateTimer() {
    if (!currentData || !currentData.events || !currentData.events.countdownTarget) return;

    const target = new Date(currentData.events.countdownTarget).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      setText("timer-days", "00");
      setText("timer-hours", "00");
      setText("timer-mins", "00");
      setText("timer-secs", "00");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    setText("timer-days", String(days).padStart(2, "0"));
    setText("timer-hours", String(hours).padStart(2, "0"));
    setText("timer-mins", String(mins).padStart(2, "0"));
    setText("timer-secs", String(secs).padStart(2, "0"));
  }

  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}

/**
 * RSVP & Wishes Form Handlers
 */
function initFormListeners() {
  // RSVP Form
  const rsvpForm = document.getElementById("rsvp-form");
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(rsvpForm);
      const name = formData.get("guest_name") || "Tamu";
      const attendance = formData.get("attendance") || "hadir";
      const count = parseInt(formData.get("guest_count") || "1", 10);
      const notes = formData.get("dietary_notes") || "-";

      const newRsvp = {
        id: "rsvp-" + Date.now(),
        guestName: name,
        attendance: attendance,
        guestCount: attendance === "hadir" ? count : 0,
        notes: notes,
        submittedAt: new Date().toISOString()
      };

      const existingRsvps = loadRsvpData();
      existingRsvps.unshift(newRsvp);
      saveRsvpData(existingRsvps);

      const statusMsg = document.getElementById("rsvp-status-msg");
      if (statusMsg) {
        statusMsg.classList.remove("hidden");
        statusMsg.textContent = attendance === "hadir" 
          ? `Terima kasih atas konfirmasinya, ${name}! Kami menantikan kehadiran Anda.`
          : `Terima kasih atas konfirmasinya, ${name}. Doa Anda sangat berarti bagi kami.`;
      }

      showToast("Konfirmasi RSVP Anda berhasil tersimpan!");

      // Notify CMS parent window if embedded
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: "RSVP_SUBMITTED", payload: newRsvp }, "*");
      }
    });
  }

  // Wishes Form
  const wishesForm = document.getElementById("wishes-form");
  if (wishesForm) {
    wishesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const sender = document.getElementById("wish-sender").value.trim();
      const text = document.getElementById("wish-text").value.trim();
      if (!sender || !text) return;

      const initials = sender.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase() || "TU";
      const newWish = {
        id: "w-" + Date.now(),
        sender: sender,
        initials: initials,
        time: "Baru saja",
        text: text,
        likes: 0,
        liked: false
      };

      const wishes = loadWishesData();
      wishes.unshift(newWish);
      saveWishesData(wishes);

      renderWishes();
      document.getElementById("wish-text").value = "";
      showToast("Doa & ucapan Anda berhasil terkirim!");

      // Notify CMS parent
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: "WISH_SUBMITTED", payload: newWish }, "*");
      }
    });
  }
}

/**
 * Render Wishes Feed
 */
function renderWishes() {
  const container = document.getElementById("wishes-feed");
  const countBadge = document.getElementById("wishes-count-badge");
  if (!container) return;

  const wishes = loadWishesData();
  if (countBadge) countBadge.textContent = `${wishes.length} Ucapan`;

  container.innerHTML = wishes.map(w => `
    <article class="pt-3.5 first:pt-0 flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold flex items-center justify-center">
            ${escapeHtml(w.initials || 'A')}
          </div>
          <div class="flex flex-col">
            <span class="font-label-lg text-label-lg text-on-surface font-semibold">${escapeHtml(w.sender)}</span>
            <span class="font-body-sm text-body-sm text-on-surface-variant/60 text-[11px]">${escapeHtml(w.time)}</span>
          </div>
        </div>
        <button class="flex items-center gap-1 ${w.liked ? 'text-error' : 'text-on-surface-variant'} hover:text-error transition-colors" onclick="toggleWishLike('${w.id}')" type="button">
          <span class="material-symbols-outlined text-[18px] ${w.liked ? 'fill-1' : ''}">favorite</span>
          <span class="font-label-sm text-label-sm">${w.likes || 0}</span>
        </button>
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant pl-10.5 leading-relaxed text-[13px]">
        ${escapeHtml(w.text)}
      </p>
    </article>
  `).join("");
}

function toggleWishLike(wishId) {
  const wishes = loadWishesData();
  const wish = wishes.find(w => w.id === wishId);
  if (wish) {
    wish.liked = !wish.liked;
    wish.likes = (wish.likes || 0) + (wish.liked ? 1 : -1);
    if (wish.likes < 0) wish.likes = 0;
    saveWishesData(wishes);
    renderWishes();
  }
}

/**
 * Copy to clipboard with Toast feedback
 */
function copyToClipboard(text, customToastMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(customToastMsg || "Berhasil disalin ke clipboard!");
    }).catch(() => fallbackCopy(text, customToastMsg));
  } else {
    fallbackCopy(text, customToastMsg);
  }
}

function fallbackCopy(text, customToastMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(customToastMsg || "Berhasil disalin ke clipboard!");
  } catch (err) {
    showToast("Gagal menyalin, silakan salin manual.");
  }
  document.body.removeChild(textArea);
}

function showToast(msg) {
  const toast = document.getElementById("toast-notification");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/**
 * Modals & Drawers
 */
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function toggleAddressDrawer() {
  const drawer = document.getElementById("address-drawer");
  if (!drawer) return;
  drawer.classList.toggle("hidden");
}

function openLightbox(imageUrl, caption) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const cap = document.getElementById("lightbox-caption");
  if (!modal || !img) return;

  img.src = imageUrl;
  if (cap) cap.textContent = caption || "";
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

/**
 * Scrollspy for Bottom Nav
 */
function initScrollSpy() {
  const sections = ["cover", "couple", "story", "events", "rsvp"];
  const navLinks = document.querySelectorAll(".bottom-nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = id;
        }
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${current}` || (current === "" && href === "#cover")) {
        link.classList.add("text-primary", "font-semibold");
        link.classList.remove("text-on-surface-variant/70");
      } else {
        link.classList.remove("text-primary", "font-semibold");
        link.classList.add("text-on-surface-variant/70");
      }
    });
  });
}

// Helpers
function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined && text !== null) {
    el.textContent = text;
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(str) {
  if (!str) return "";
  return String(str).replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

/**
 * =========================================================================
 * FLOATING THEME SELECTOR MODAL / DRAWER (19 THEMES)
 * =========================================================================
 */
let currentModalFilter = "all";
let currentModalSearch = "";

function initThemeSelectorModal() {
  const container = document.getElementById("modal-themes-container");
  if (!container) return;
  renderThemeSelectorModalPresets();
}

function filterModalThemes(category) {
  currentModalFilter = category;
  document.querySelectorAll(".modal-theme-filter-btn").forEach(btn => {
    btn.classList.remove("bg-primary", "text-on-primary");
    btn.classList.add("text-on-surface-variant");
  });
  const activeBtn = document.getElementById(`modal-filter-${category}`);
  if (activeBtn) {
    activeBtn.classList.add("bg-primary", "text-on-primary");
    activeBtn.classList.remove("text-on-surface-variant");
  }
  renderThemeSelectorModalPresets();
}

function searchModalThemes(query) {
  currentModalSearch = (query || "").toLowerCase().trim();
  renderThemeSelectorModalPresets();
}

function toggleThemeSelectorModal(show) {
  const modal = document.getElementById("theme-selector-modal");
  if (!modal) return;
  if (show === undefined) {
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
  } else if (show) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    renderThemeSelectorModalPresets();
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function renderThemeSelectorModalPresets() {
  const container = document.getElementById("modal-themes-container");
  if (!container || typeof DEFAULT_WEDDING_DATA === "undefined" || !DEFAULT_WEDDING_DATA.presets) return;

  const filtered = DEFAULT_WEDDING_DATA.presets.filter(p => {
    if (currentModalFilter !== "all" && p.category !== currentModalFilter) return false;
    if (currentModalSearch) {
      const q = currentModalSearch;
      return (p.name || "").toLowerCase().includes(q) ||
             (p.culturalLabel || "").toLowerCase().includes(q) ||
             (p.description || "").toLowerCase().includes(q) ||
             (p.id || "").toLowerCase().includes(q);
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-2 py-8 text-center text-xs text-on-surface-variant">
        <span class="material-symbols-outlined text-[28px] text-secondary mb-1 block">search_off</span>
        Tidak ada tema yang cocok dengan "<strong>${escapeHtml(currentModalSearch)}</strong>".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const isActive = currentData && currentData.theme && currentData.theme.id === p.id;
    let badgeBg = "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30";
    if (p.category === "nusantara") {
      badgeBg = "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30";
    } else if (p.category === "destination") {
      badgeBg = "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30";
    } else if (p.category === "religi") {
      badgeBg = "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30";
    }

    const ornamentSvg = (typeof CULTURAL_ORNAMENTS !== "undefined" && CULTURAL_ORNAMENTS[p.ornamentStyle])
      ? CULTURAL_ORNAMENTS[p.ornamentStyle].svg
      : "";

    return `
      <div onclick="applyThemePreset('${p.id}')" class="cursor-pointer p-3 rounded-xl border ${isActive ? 'border-primary ring-2 ring-primary/40 bg-surface-container shadow-md' : 'border-outline-variant/60 bg-surface-container-low hover:border-primary/50'} transition-all flex flex-col justify-between group">
        <div>
          <div class="flex items-start justify-between gap-1 mb-1.5">
            <div class="flex items-center gap-1.5 min-w-0">
              ${ornamentSvg ? `<div class="w-4 h-4 text-tertiary shrink-0">${ornamentSvg}</div>` : ''}
              <span class="text-xs font-bold text-on-surface group-hover:text-primary transition-colors truncate">${escapeHtml(p.name)}</span>
            </div>
            <span class="text-[9px] font-semibold px-1.5 py-0.5 rounded border ${badgeBg} shrink-0">
              ${escapeHtml(p.culturalLabel || 'Tema')}
            </span>
          </div>

          <div class="flex items-center gap-1 mb-2">
            <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs" title="Primary" style="background-color: ${p.colors.primary}"></span>
            <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs" title="Gold" style="background-color: ${p.colors.tertiary}"></span>
            <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs" title="Secondary" style="background-color: ${p.colors.secondary}"></span>
            <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs" title="Background" style="background-color: ${p.colors.background}"></span>
          </div>

          <p class="text-[11px] text-on-surface-variant leading-tight line-clamp-2">${escapeHtml(p.description)}</p>
        </div>

        <div class="mt-2.5 pt-2 border-t border-outline-variant/40 flex items-center justify-between text-[10px] text-on-surface-variant">
          <span class="italic font-serif">${escapeHtml(p.headingFont)}</span>
          <span class="uppercase tracking-wider font-semibold ${isActive ? 'text-primary font-bold' : 'text-secondary group-hover:text-primary'}">
            ${isActive ? '✓ Aktif' : 'Pilih'}
          </span>
        </div>
      </div>
    `;
  }).join("");
}

function applyThemePreset(presetId) {
  if (typeof DEFAULT_WEDDING_DATA === "undefined" || !DEFAULT_WEDDING_DATA.presets) return;
  const preset = DEFAULT_WEDDING_DATA.presets.find(p => p.id === presetId);
  if (!preset) return;

  if (!currentData) currentData = loadWeddingData();
  currentData.theme.id = preset.id;
  currentData.theme.name = preset.name;
  currentData.theme.colors = JSON.parse(JSON.stringify(preset.colors));
  currentData.theme.typography.headingFont = preset.headingFont;
  currentData.theme.typography.bodyFont = preset.bodyFont;
  if (preset.ornamentStyle) {
    currentData.theme.ornamentStyle = preset.ornamentStyle;
  }

  saveWeddingData(currentData);
  renderApp(currentData);
  renderThemeSelectorModalPresets();

  showToast(`Tema diterapkan: ${preset.name}`);

  // Notify parent window if this preview is inside iframe of admin.html
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({
      type: "THEME_CHANGED_FROM_PREVIEW",
      payload: currentData
    }, "*");
  }
}

