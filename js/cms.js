/**
 * Wedding Studio CMS - Editor & Platform Customizer Script
 * Provides live bi-directional preview, real-time color and text updates,
 * file uploads to Base64, guest link generator, and standalone export.
 */

let cmsData = null;
let previewIframe = null;

document.addEventListener("DOMContentLoaded", () => {
  previewIframe = document.getElementById("preview-frame");
  cmsData = loadWeddingData();

  // Initialize UI components
  initTabs();
  initDeviceSwitcher();
  initFormBindings();
  renderPresetThemes();
  renderMilestonesEditor();
  renderGalleryEditor();
  renderBanksEditor();
  renderEtiquettesEditor();
  renderRsvpTable();
  renderWishesModeration();
  initGuestLinkGenerator();
  initExportImport();

  // Listen for iframe readiness or messages from preview
  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "RSVP_SUBMITTED") {
      renderRsvpTable();
      showCmsToast("Data RSVP baru diterima dari undangan!");
    } else if (event.data && event.data.type === "WISH_SUBMITTED") {
      renderWishesModeration();
      showCmsToast("Ucapan baru diterima dari tamu!");
    } else if (event.data && event.data.type === "THEME_CHANGED_FROM_PREVIEW") {
      cmsData = event.data.payload;
      populateFormValues();
      renderPresetThemes();
      showCmsToast(`Tema diganti ke: ${cmsData.theme.name}`);
    }
  });

  // Sync initial config to iframe when loaded
  if (previewIframe) {
    previewIframe.addEventListener("load", () => {
      syncPreview();
    });
  }
});

/**
 * Tab Navigation in Sidebar
 */
function initTabs() {
  const tabs = document.querySelectorAll(".nav-tab-btn");
  const panels = document.querySelectorAll(".cms-panel-section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab");
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      panels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.remove("hidden");
        } else {
          panel.classList.add("hidden");
        }
      });
    });
  });
}

/**
 * Device Mockup Switcher (Mobile, Tablet, Desktop)
 */
function initDeviceSwitcher() {
  const wrapper = document.getElementById("device-container");
  const buttons = document.querySelectorAll(".device-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const device = btn.getAttribute("data-device");
      buttons.forEach(b => b.classList.remove("bg-blue-600", "text-white"));
      btn.classList.add("bg-blue-600", "text-white");

      if (wrapper) {
        wrapper.className = "device-wrapper";
        if (device === "mobile") {
          wrapper.classList.add("device-mobile");
        } else if (device === "tablet") {
          wrapper.classList.add("device-tablet");
        } else if (device === "desktop") {
          wrapper.classList.add("device-desktop");
        }
      }
    });
  });
}

/**
 * Sync Config to Iframe Preview & LocalStorage
 */
function syncPreview() {
  saveWeddingData(cmsData);
  if (previewIframe && previewIframe.contentWindow) {
    previewIframe.contentWindow.postMessage({
      type: "UPDATE_CONFIG",
      payload: cmsData
    }, "*");
  }
  const autoSaveIndicator = document.getElementById("autosave-indicator");
  if (autoSaveIndicator) {
    autoSaveIndicator.textContent = "Tersimpan";
    setTimeout(() => { autoSaveIndicator.textContent = ""; }, 1800);
  }
}

/**
 * Form Bindings (Input listeners for live updates)
 */
function initFormBindings() {
  // Color Pickers
  bindColorPair("color-primary", "hex-primary", (val) => { cmsData.theme.colors.primary = val; });
  bindColorPair("color-on-primary", "hex-on-primary", (val) => { cmsData.theme.colors.onPrimary = val; });
  bindColorPair("color-secondary", "hex-secondary", (val) => { cmsData.theme.colors.secondary = val; });
  bindColorPair("color-tertiary", "hex-tertiary", (val) => { cmsData.theme.colors.tertiary = val; });
  bindColorPair("color-background", "hex-background", (val) => { cmsData.theme.colors.background = val; });
  bindColorPair("color-surface", "hex-surface", (val) => { 
    cmsData.theme.colors.surface = val;
    cmsData.theme.colors.surfaceContainerLow = val;
  });
  bindColorPair("color-surface-container", "hex-surface-container", (val) => { cmsData.theme.colors.surfaceContainer = val; });
  bindColorPair("color-outline", "hex-outline", (val) => { cmsData.theme.colors.outline = val; });

  // Fonts & Cultural Ornaments
  bindInput("font-heading-select", (val) => {
    cmsData.theme.typography.headingFont = val;
  });
  bindInput("font-body-select", (val) => {
    cmsData.theme.typography.bodyFont = val;
  });
  bindInput("ornament-style-select", (val) => {
    cmsData.theme.ornamentStyle = val;
  });

  // Hero & General
  bindInput("hero-monogram-input", (val) => { cmsData.hero.monogram = val; cmsData.hero.monogramItalic = val.toLowerCase(); });
  bindInput("hero-superheader-input", (val) => { cmsData.hero.superHeader = val; });
  bindInput("hero-title-input", (val) => { cmsData.hero.title = val; });
  bindInput("hero-date-location-input", (val) => { cmsData.hero.dateLocation = val; });
  bindInput("hero-cover-url-input", (val) => { cmsData.hero.coverImage = val; });
  bindFileUpload("hero-cover-file-input", (dataUrl) => {
    cmsData.hero.coverImage = dataUrl;
    document.getElementById("hero-cover-url-input").value = dataUrl.substring(0, 40) + "...";
    syncPreview();
  });
  bindInput("hero-welcome-prefix-input", (val) => { cmsData.hero.welcomePrefix = val; });
  bindInput("hero-default-guest-input", (val) => { cmsData.hero.defaultGuestName = val; });
  bindInput("hero-welcome-msg-input", (val) => { cmsData.hero.welcomeMessage = val; });

  // Quote
  bindInput("quote-title-input", (val) => { cmsData.quote.title = val; });
  bindInput("quote-arabic-input", (val) => { cmsData.quote.arabic = val; });
  bindInput("quote-translation-input", (val) => { cmsData.quote.translation = val; });
  bindInput("quote-source-input", (val) => { cmsData.quote.source = val; });

  // Groom
  bindInput("groom-name-input", (val) => { cmsData.couple.groom.name = val; });
  bindInput("groom-role-input", (val) => { cmsData.couple.groom.role = val; });
  bindInput("groom-parents-input", (val) => { cmsData.couple.groom.parents = val; });
  bindInput("groom-ig-input", (val) => { 
    cmsData.couple.groom.instagram = val;
    cmsData.couple.groom.instagramUrl = `https://instagram.com/${val}`;
  });
  bindInput("groom-photo-url-input", (val) => { cmsData.couple.groom.photo = val; });
  bindFileUpload("groom-photo-file-input", (dataUrl) => {
    cmsData.couple.groom.photo = dataUrl;
    document.getElementById("groom-photo-url-input").value = dataUrl.substring(0, 40) + "...";
    syncPreview();
  });

  // Bride
  bindInput("bride-name-input", (val) => { cmsData.couple.bride.name = val; });
  bindInput("bride-role-input", (val) => { cmsData.couple.bride.role = val; });
  bindInput("bride-parents-input", (val) => { cmsData.couple.bride.parents = val; });
  bindInput("bride-ig-input", (val) => { 
    cmsData.couple.bride.instagram = val;
    cmsData.couple.bride.instagramUrl = `https://instagram.com/${val}`;
  });
  bindInput("bride-photo-url-input", (val) => { cmsData.couple.bride.photo = val; });
  bindFileUpload("bride-photo-file-input", (dataUrl) => {
    cmsData.couple.bride.photo = dataUrl;
    document.getElementById("bride-photo-url-input").value = dataUrl.substring(0, 40) + "...";
    syncPreview();
  });

  // Countdown & Events
  bindInput("countdown-target-input", (val) => { cmsData.events.countdownTarget = val; });
  
  // Event 1 (Akad)
  bindInput("e1-tag-input", (val) => { cmsData.events.event1.tag = val; });
  bindInput("e1-title-input", (val) => { cmsData.events.event1.title = val; });
  bindInput("e1-subtitle-input", (val) => { cmsData.events.event1.subtitle = val; });
  bindInput("e1-date-input", (val) => { cmsData.events.event1.date = val; });
  bindInput("e1-time-input", (val) => { cmsData.events.event1.time = val; });
  bindInput("e1-venue-input", (val) => { cmsData.events.event1.venueName = val; });
  bindInput("e1-address-input", (val) => { cmsData.events.event1.venueAddress = val; });
  bindInput("e1-dresscode-input", (val) => { cmsData.events.event1.dresscode = val; });
  bindInput("e1-maps-url-input", (val) => { cmsData.events.event1.mapsUrl = val; });

  // Event 2 (Resepsi)
  bindInput("e2-tag-input", (val) => { cmsData.events.event2.tag = val; });
  bindInput("e2-title-input", (val) => { cmsData.events.event2.title = val; });
  bindInput("e2-subtitle-input", (val) => { cmsData.events.event2.subtitle = val; });
  bindInput("e2-date-input", (val) => { cmsData.events.event2.date = val; });
  bindInput("e2-time-input", (val) => { cmsData.events.event2.time = val; });
  bindInput("e2-venue-input", (val) => { cmsData.events.event2.venueName = val; });
  bindInput("e2-address-input", (val) => { cmsData.events.event2.venueAddress = val; });
  bindInput("e2-cocktail-input", (val) => { cmsData.events.event2.cocktailNote = val; });
  bindInput("e2-dresscode-input", (val) => { cmsData.events.event2.dresscode = val; });
  bindInput("e2-maps-url-input", (val) => { cmsData.events.event2.mapsUrl = val; });

  // Location & Venue
  bindInput("loc-title-input", (val) => { cmsData.location.title = val; });
  bindInput("loc-desc-input", (val) => { cmsData.location.description = val; });
  bindInput("loc-coordinates-input", (val) => { cmsData.location.coordinates = val; });
  bindInput("loc-preview-url-input", (val) => { cmsData.location.previewImage = val; });
  bindFileUpload("loc-preview-file-input", (dataUrl) => {
    cmsData.location.previewImage = dataUrl;
    document.getElementById("loc-preview-url-input").value = dataUrl.substring(0, 40) + "...";
    syncPreview();
  });
  bindInput("loc-shuttle-title-input", (val) => { cmsData.location.shuttleTitle = val; });
  bindInput("loc-shuttle-desc-input", (val) => { cmsData.location.shuttleDescription = val; });
  bindInput("loc-maps-nav-input", (val) => { cmsData.location.navigationUrl = val; });

  // Digital Gifts & QRIS & Physical Address
  bindInput("gifts-title-input", (val) => { cmsData.gifts.title = val; });
  bindInput("gifts-intro-input", (val) => { cmsData.gifts.intro = val; });
  bindInput("qris-url-input", (val) => { cmsData.gifts.qrisImage = val; });
  bindFileUpload("qris-file-input", (dataUrl) => {
    cmsData.gifts.qrisImage = dataUrl;
    document.getElementById("qris-url-input").value = dataUrl.substring(0, 40) + "...";
    syncPreview();
  });
  bindInput("gift-recipient-input", (val) => { cmsData.gifts.physicalGift.recipient = val; });
  bindInput("gift-address-input", (val) => { cmsData.gifts.physicalGift.address = val; });
  bindInput("gift-contact-input", (val) => { cmsData.gifts.physicalGift.contact = val; });

  // Music
  bindInput("music-title-input", (val) => { cmsData.music.songTitle = val; });
  bindInput("music-url-input", (val) => { cmsData.music.audioUrl = val; });
  bindFileUpload("music-file-input", (dataUrl) => {
    cmsData.music.audioUrl = dataUrl;
    document.getElementById("music-url-input").value = dataUrl.substring(0, 40) + "...";
    syncPreview();
  });
  const musicSelect = document.getElementById("music-preset-select");
  if (musicSelect) {
    musicSelect.addEventListener("change", (e) => {
      if (e.target.value) {
        cmsData.music.audioUrl = e.target.value;
        const selectedOption = e.target.options[e.target.selectedIndex];
        cmsData.music.songTitle = selectedOption.text;
        document.getElementById("music-title-input").value = selectedOption.text;
        document.getElementById("music-url-input").value = e.target.value;
        syncPreview();
      }
    });
  }

  // Populate initial values into form inputs
  populateFormValues();
}

function populateFormValues() {
  if (!cmsData) return;
  const c = cmsData.theme.colors;

  setInputValue("color-primary", c.primary);
  setInputValue("hex-primary", c.primary);
  setInputValue("color-on-primary", c.onPrimary || "#FFFFFF");
  setInputValue("hex-on-primary", c.onPrimary || "#FFFFFF");
  setInputValue("color-secondary", c.secondary);
  setInputValue("hex-secondary", c.secondary);
  setInputValue("color-tertiary", c.tertiary);
  setInputValue("hex-tertiary", c.tertiary);
  setInputValue("color-background", c.background);
  setInputValue("hex-background", c.background);
  setInputValue("color-surface", c.surface);
  setInputValue("hex-surface", c.surface);
  setInputValue("color-surface-container", c.surfaceContainer);
  setInputValue("hex-surface-container", c.surfaceContainer);
  setInputValue("color-outline", c.outline);
  setInputValue("hex-outline", c.outline);

  if (cmsData.theme.typography) {
    setInputValue("font-heading-select", cmsData.theme.typography.headingFont);
    setInputValue("font-body-select", cmsData.theme.typography.bodyFont);
  }
  setInputValue("ornament-style-select", cmsData.theme.ornamentStyle || "botanical");

  setInputValue("hero-monogram-input", cmsData.hero.monogram);
  setInputValue("hero-superheader-input", cmsData.hero.superHeader);
  setInputValue("hero-title-input", cmsData.hero.title);
  setInputValue("hero-date-location-input", cmsData.hero.dateLocation);
  setInputValue("hero-cover-url-input", cmsData.hero.coverImage);
  setInputValue("hero-welcome-prefix-input", cmsData.hero.welcomePrefix);
  setInputValue("hero-default-guest-input", cmsData.hero.defaultGuestName);
  setInputValue("hero-welcome-msg-input", cmsData.hero.welcomeMessage);

  setInputValue("quote-title-input", cmsData.quote.title);
  setInputValue("quote-arabic-input", cmsData.quote.arabic);
  setInputValue("quote-translation-input", cmsData.quote.translation);
  setInputValue("quote-source-input", cmsData.quote.source);

  setInputValue("groom-name-input", cmsData.couple.groom.name);
  setInputValue("groom-role-input", cmsData.couple.groom.role);
  setInputValue("groom-parents-input", cmsData.couple.groom.parents);
  setInputValue("groom-ig-input", cmsData.couple.groom.instagram);
  setInputValue("groom-photo-url-input", cmsData.couple.groom.photo);

  setInputValue("bride-name-input", cmsData.couple.bride.name);
  setInputValue("bride-role-input", cmsData.couple.bride.role);
  setInputValue("bride-parents-input", cmsData.couple.bride.parents);
  setInputValue("bride-ig-input", cmsData.couple.bride.instagram);
  setInputValue("bride-photo-url-input", cmsData.couple.bride.photo);

  setInputValue("countdown-target-input", cmsData.events.countdownTarget);

  setInputValue("e1-tag-input", cmsData.events.event1.tag);
  setInputValue("e1-title-input", cmsData.events.event1.title);
  setInputValue("e1-subtitle-input", cmsData.events.event1.subtitle);
  setInputValue("e1-date-input", cmsData.events.event1.date);
  setInputValue("e1-time-input", cmsData.events.event1.time);
  setInputValue("e1-venue-input", cmsData.events.event1.venueName);
  setInputValue("e1-address-input", cmsData.events.event1.venueAddress);
  setInputValue("e1-dresscode-input", cmsData.events.event1.dresscode);
  setInputValue("e1-maps-url-input", cmsData.events.event1.mapsUrl);

  setInputValue("e2-tag-input", cmsData.events.event2.tag);
  setInputValue("e2-title-input", cmsData.events.event2.title);
  setInputValue("e2-subtitle-input", cmsData.events.event2.subtitle);
  setInputValue("e2-date-input", cmsData.events.event2.date);
  setInputValue("e2-time-input", cmsData.events.event2.time);
  setInputValue("e2-venue-input", cmsData.events.event2.venueName);
  setInputValue("e2-address-input", cmsData.events.event2.venueAddress);
  setInputValue("e2-cocktail-input", cmsData.events.event2.cocktailNote);
  setInputValue("e2-dresscode-input", cmsData.events.event2.dresscode);
  setInputValue("e2-maps-url-input", cmsData.events.event2.mapsUrl);

  setInputValue("loc-title-input", cmsData.location.title);
  setInputValue("loc-desc-input", cmsData.location.description);
  setInputValue("loc-coordinates-input", cmsData.location.coordinates);
  setInputValue("loc-preview-url-input", cmsData.location.previewImage);
  setInputValue("loc-shuttle-title-input", cmsData.location.shuttleTitle);
  setInputValue("loc-shuttle-desc-input", cmsData.location.shuttleDescription);
  setInputValue("loc-maps-nav-input", cmsData.location.navigationUrl);

  setInputValue("gifts-title-input", cmsData.gifts.title);
  setInputValue("gifts-intro-input", cmsData.gifts.intro);
  setInputValue("qris-url-input", cmsData.gifts.qrisImage);
  if (cmsData.gifts.physicalGift) {
    setInputValue("gift-recipient-input", cmsData.gifts.physicalGift.recipient);
    setInputValue("gift-address-input", cmsData.gifts.physicalGift.address);
    setInputValue("gift-contact-input", cmsData.gifts.physicalGift.contact);
  }

  setInputValue("music-title-input", cmsData.music.songTitle);
  setInputValue("music-url-input", cmsData.music.audioUrl);
}

let currentPresetFilter = "all";
let currentPresetSearchQuery = "";

function setPresetCategoryFilter(category) {
  currentPresetFilter = category;

  // Update button active states
  document.querySelectorAll(".preset-filter-btn").forEach(btn => {
    btn.classList.remove("bg-blue-600", "text-white", "shadow");
    btn.classList.add("text-slate-300");
  });
  const activeBtn = document.getElementById(`preset-filter-${category}`);
  if (activeBtn) {
    activeBtn.classList.add("bg-blue-600", "text-white", "shadow");
    activeBtn.classList.remove("text-slate-300");
  }

  renderPresetThemes();
}

function searchPresetThemes(query) {
  currentPresetSearchQuery = (query || "").toLowerCase().trim();
  renderPresetThemes();
}

/**
 * 1-Click Preset Themes (19 Nusantara, Modern, Destination & Religi Themes)
 */
function renderPresetThemes() {
  const container = document.getElementById("preset-themes-container");
  if (!container || !DEFAULT_WEDDING_DATA.presets) return;

  const filteredPresets = DEFAULT_WEDDING_DATA.presets.filter(p => {
    // Category match
    const categoryMatch = (currentPresetFilter === "all") || (p.category === currentPresetFilter);
    if (!categoryMatch) return false;

    // Search query match
    if (currentPresetSearchQuery) {
      const q = currentPresetSearchQuery;
      const nameMatch = (p.name || "").toLowerCase().includes(q);
      const labelMatch = (p.culturalLabel || "").toLowerCase().includes(q);
      const descMatch = (p.description || "").toLowerCase().includes(q);
      const idMatch = (p.id || "").toLowerCase().includes(q);
      return nameMatch || labelMatch || descMatch || idMatch;
    }
    return true;
  });

  if (filteredPresets.length === 0) {
    container.innerHTML = `
      <div class="col-span-2 py-8 text-center text-xs text-slate-400">
        <span class="material-symbols-outlined text-[28px] text-slate-500 mb-1 block">search_off</span>
        Tidak ada tema yang cocok dengan pencarian "<strong>${escapeHtml(currentPresetSearchQuery)}</strong>".
      </div>
    `;
    return;
  }

  container.innerHTML = filteredPresets.map(p => {
    const isActive = cmsData.theme.id === p.id;
    let badgeClass = "bg-blue-500/20 text-blue-300 border-blue-500/30";
    if (p.category === "nusantara") {
      badgeClass = "bg-amber-500/20 text-amber-300 border-amber-500/30";
    } else if (p.category === "destination") {
      badgeClass = "bg-teal-500/20 text-teal-300 border-teal-500/30";
    } else if (p.category === "religi") {
      badgeClass = "bg-purple-500/20 text-purple-300 border-purple-500/30";
    }

    const ornamentSvg = (typeof CULTURAL_ORNAMENTS !== "undefined" && CULTURAL_ORNAMENTS[p.ornamentStyle])
      ? CULTURAL_ORNAMENTS[p.ornamentStyle].svg
      : "";

    return `
      <div onclick="applyThemePreset('${p.id}')" class="preset-card cursor-pointer p-3 rounded-lg border ${isActive ? 'active border-amber-500/90 bg-slate-800 shadow-md shadow-amber-500/10 ring-1 ring-amber-500/40' : 'border-slate-700 bg-slate-800/60'} hover:border-amber-400/70 transition-all flex flex-col justify-between group">
        <div>
          <div class="flex items-start justify-between gap-1 mb-1.5">
            <div class="flex items-center gap-1.5 min-w-0">
              ${ornamentSvg ? `<div class="w-4 h-4 text-amber-400 shrink-0">${ornamentSvg}</div>` : ''}
              <span class="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate">${p.name}</span>
            </div>
            <span class="text-[9px] font-semibold px-1.5 py-0.5 rounded border ${badgeClass} shrink-0">
              ${p.culturalLabel || 'Tema'}
            </span>
          </div>

          <div class="flex items-center gap-1 mb-2">
            <span class="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs" title="Primary" style="background-color: ${p.colors.primary}"></span>
            <span class="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs" title="Tertiary / Gold" style="background-color: ${p.colors.tertiary}"></span>
            <span class="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs" title="Secondary" style="background-color: ${p.colors.secondary}"></span>
            <span class="w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs" title="Background" style="background-color: ${p.colors.background}"></span>
          </div>

          <p class="text-[11px] text-slate-400 leading-tight line-clamp-2">${p.description}</p>
        </div>

        <div class="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-400">
          <span class="italic font-serif">${p.headingFont}</span>
          <span class="uppercase tracking-wider font-semibold ${isActive ? 'text-amber-400 font-bold' : 'text-blue-400 group-hover:text-amber-300'}">
            ${isActive ? '✓ Aktif' : 'Gunakan'}
          </span>
        </div>
      </div>
    `;
  }).join("");
}

function applyThemePreset(presetId) {
  const preset = DEFAULT_WEDDING_DATA.presets.find(p => p.id === presetId);
  if (!preset) return;

  cmsData.theme.id = preset.id;
  cmsData.theme.name = preset.name;
  cmsData.theme.colors = JSON.parse(JSON.stringify(preset.colors));
  cmsData.theme.typography.headingFont = preset.headingFont;
  cmsData.theme.typography.bodyFont = preset.bodyFont;
  if (preset.ornamentStyle) {
    cmsData.theme.ornamentStyle = preset.ornamentStyle;
  }

  populateFormValues();
  renderPresetThemes();
  syncPreview();
  showCmsToast(`Tema diubah ke: ${preset.name}`);
}

/**
 * Milestones Editor (Love Story)
 */
function renderMilestonesEditor() {
  const container = document.getElementById("milestones-editor-container");
  if (!container || !cmsData.story || !cmsData.story.milestones) return;

  container.innerHTML = cmsData.story.milestones.map((m, index) => `
    <div class="p-3 bg-slate-800/80 rounded-lg border border-slate-700 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-slate-300">Milestone #${index + 1}</span>
        <button onclick="removeMilestone(${index})" class="text-red-400 hover:text-red-300 text-xs flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">delete</span>
          <span>Hapus</span>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="cms-label">Waktu / Periode</label>
          <input type="text" class="cms-input" value="${escapeAttr(m.period)}" onchange="updateMilestone(${index}, 'period', this.value)" />
        </div>
        <div>
          <label class="cms-label">Judul Kisah</label>
          <input type="text" class="cms-input" value="${escapeAttr(m.title)}" onchange="updateMilestone(${index}, 'title', this.value)" />
        </div>
      </div>
      <div>
        <label class="cms-label">Cerita Singkat</label>
        <textarea class="cms-input resize-none" rows="2" onchange="updateMilestone(${index}, 'desc', this.value)">${m.desc}</textarea>
      </div>
    </div>
  `).join("");
}

function addMilestone() {
  if (!cmsData.story.milestones) cmsData.story.milestones = [];
  cmsData.story.milestones.push({
    period: "Tahun Baru",
    title: "Momen Berkesan",
    desc: "Tuliskan cerita cinta atau kenangan indah Anda di sini."
  });
  renderMilestonesEditor();
  syncPreview();
  showCmsToast("Milestone baru ditambahkan!");
}

function removeMilestone(index) {
  cmsData.story.milestones.splice(index, 1);
  renderMilestonesEditor();
  syncPreview();
}

function updateMilestone(index, field, value) {
  if (cmsData.story.milestones[index]) {
    cmsData.story.milestones[index][field] = value;
    syncPreview();
  }
}

/**
 * Gallery Editor
 */
function renderGalleryEditor() {
  const container = document.getElementById("gallery-editor-container");
  if (!container || !cmsData.gallery || !cmsData.gallery.items) return;

  container.innerHTML = cmsData.gallery.items.map((item, index) => `
    <div class="p-3 bg-slate-800/80 rounded-lg border border-slate-700 flex gap-3 items-center">
      <img src="${item.url}" class="w-16 h-16 object-cover rounded border border-slate-600 bg-slate-900" alt="Thumb" />
      <div class="flex-1 space-y-1.5">
        <input type="text" class="cms-input text-[11px]" placeholder="URL Foto" value="${escapeAttr(item.url)}" onchange="updateGalleryItem(${index}, 'url', this.value)" />
        <div class="flex gap-2">
          <input type="text" class="cms-input text-[11px]" placeholder="Caption Foto" value="${escapeAttr(item.caption)}" onchange="updateGalleryItem(${index}, 'caption', this.value)" />
          <select class="cms-input text-[11px] w-28" onchange="updateGalleryItem(${index}, 'aspect', this.value)">
            <option value="square" ${item.aspect === 'square' ? 'selected' : ''}>Persegi</option>
            <option value="wide" ${item.aspect === 'wide' ? 'selected' : ''}>Lebar</option>
          </select>
        </div>
      </div>
      <button onclick="removeGalleryItem(${index})" class="p-1.5 text-red-400 hover:text-red-300">
        <span class="material-symbols-outlined text-[18px]">delete</span>
      </button>
    </div>
  `).join("");
}

function addGalleryItem() {
  if (!cmsData.gallery.items) cmsData.gallery.items = [];
  cmsData.gallery.items.push({
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU5aqf-zwfh-QMb7Z9VJzt6IKRl0iKFtgMUkVVrTwawUgYel9y9tFr6DTaYAHmfoDw9uLrKTvwY6lNJgxOPOmq6cYkRBkTvup0JdtNirfWmV8Uzpqn3-VickXdOf7jK5yW7oecbiqwKJLraGo2QFKgLken10aTwjSoWReKQc5GvBCLN9YO5I_bSRkCcDlTXOjrEyat41FHDTu1LW9AwlnAfiQhBDvd0mPlESPovEr_2XxXMr-xzAk",
    caption: "Momen Spesial",
    aspect: "square"
  });
  renderGalleryEditor();
  syncPreview();
  showCmsToast("Foto baru ditambahkan ke galeri!");
}

function removeGalleryItem(index) {
  cmsData.gallery.items.splice(index, 1);
  renderGalleryEditor();
  syncPreview();
}

function updateGalleryItem(index, field, value) {
  if (cmsData.gallery.items[index]) {
    cmsData.gallery.items[index][field] = value;
    syncPreview();
  }
}

/**
 * Bank Accounts Editor
 */
function renderBanksEditor() {
  const container = document.getElementById("banks-editor-container");
  if (!container || !cmsData.gifts || !cmsData.gifts.banks) return;

  container.innerHTML = cmsData.gifts.banks.map((b, index) => `
    <div class="p-3 bg-slate-800/80 rounded-lg border border-slate-700 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-slate-300">Rekening #${index + 1}</span>
        <button onclick="removeBank(${index})" class="text-red-400 hover:text-red-300 text-xs flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">delete</span>
          <span>Hapus</span>
        </button>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div>
          <label class="cms-label">Nama Bank</label>
          <input type="text" class="cms-input" value="${escapeAttr(b.bankName)}" onchange="updateBank(${index}, 'bankName', this.value)" placeholder="BCA / Mandiri" />
        </div>
        <div>
          <label class="cms-label">No Rekening</label>
          <input type="text" class="cms-input" value="${escapeAttr(b.accountNumber)}" onchange="updateBank(${index}, 'accountNumber', this.value)" placeholder="123456789" />
        </div>
        <div>
          <label class="cms-label">Atas Nama</label>
          <input type="text" class="cms-input" value="${escapeAttr(b.accountHolder)}" onchange="updateBank(${index}, 'accountHolder', this.value)" placeholder="Nama Lengkap" />
        </div>
      </div>
    </div>
  `).join("");
}

function addBank() {
  if (!cmsData.gifts.banks) cmsData.gifts.banks = [];
  cmsData.gifts.banks.push({
    id: "bank-" + Date.now(),
    bankName: "BCA",
    accountNumber: "1234567890",
    accountHolder: "Nama Pemilik"
  });
  renderBanksEditor();
  syncPreview();
  showCmsToast("Rekening bank baru ditambahkan!");
}

function removeBank(index) {
  cmsData.gifts.banks.splice(index, 1);
  renderBanksEditor();
  syncPreview();
}

function updateBank(index, field, value) {
  if (cmsData.gifts.banks[index]) {
    cmsData.gifts.banks[index][field] = value;
    syncPreview();
  }
}

/**
 * Protocols / Etiquettes Editor
 */
function renderEtiquettesEditor() {
  const container = document.getElementById("etiquettes-editor-container");
  if (!container || !cmsData.location || !cmsData.location.etiquettes) return;

  container.innerHTML = cmsData.location.etiquettes.map((eti, index) => `
    <div class="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 grid grid-cols-3 gap-2">
      <div>
        <label class="cms-label">Ikon Material</label>
        <input type="text" class="cms-input text-xs" value="${escapeAttr(eti.icon)}" onchange="updateEtiquette(${index}, 'icon', this.value)" />
      </div>
      <div class="col-span-2">
        <label class="cms-label">Judul Panduan</label>
        <input type="text" class="cms-input text-xs" value="${escapeAttr(eti.title)}" onchange="updateEtiquette(${index}, 'title', this.value)" />
      </div>
      <div class="col-span-3">
        <label class="cms-label">Keterangan</label>
        <input type="text" class="cms-input text-xs" value="${escapeAttr(eti.desc)}" onchange="updateEtiquette(${index}, 'desc', this.value)" />
      </div>
    </div>
  `).join("");
}

function updateEtiquette(index, field, value) {
  if (cmsData.location.etiquettes[index]) {
    cmsData.location.etiquettes[index][field] = value;
    syncPreview();
  }
}

/**
 * RSVP Table Management
 */
function renderRsvpTable() {
  const tbody = document.getElementById("rsvp-table-body");
  const countBadge = document.getElementById("rsvp-total-badge");
  const hadirBadge = document.getElementById("rsvp-hadir-badge");
  if (!tbody) return;

  const rsvps = loadRsvpData();
  const totalHadir = rsvps.filter(r => r.attendance === "hadir").reduce((sum, r) => sum + (r.guestCount || 1), 0);

  if (countBadge) countBadge.textContent = `${rsvps.length} Responden`;
  if (hadirBadge) hadirBadge.textContent = `${totalHadir} Orang Hadir`;

  if (rsvps.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-xs text-slate-400">Belum ada data RSVP masuk.</td></tr>`;
    return;
  }

  tbody.innerHTML = rsvps.map((r, index) => `
    <tr class="border-b border-slate-700/60 text-xs">
      <td class="py-2.5 px-3 font-medium text-white">${escapeHtml(r.guestName)}</td>
      <td class="py-2.5 px-2">
        <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${r.attendance === 'hadir' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}">
          ${r.attendance === 'hadir' ? 'Hadir' : 'Absen'}
        </span>
      </td>
      <td class="py-2.5 px-2 text-center text-slate-300">${r.guestCount || 0}</td>
      <td class="py-2.5 px-2 text-slate-400 truncate max-w-[140px]">${escapeHtml(r.notes || '-')}</td>
      <td class="py-2.5 px-2 text-right">
        <button onclick="deleteRsvp('${r.id}')" class="text-red-400 hover:text-red-300">
          <span class="material-symbols-outlined text-[16px]">delete</span>
        </button>
      </td>
    </tr>
  `).join("");
}

function deleteRsvp(id) {
  let rsvps = loadRsvpData();
  rsvps = rsvps.filter(r => r.id !== id);
  saveRsvpData(rsvps);
  renderRsvpTable();
  showCmsToast("Data RSVP dihapus");
}

function exportRsvpCsv() {
  const rsvps = loadRsvpData();
  if (rsvps.length === 0) {
    alert("Belum ada data RSVP untuk diexport.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,Nama Tamu,Status Kehadiran,Jumlah Kursi,Catatan Khusus,Waktu Konfirmasi\n";
  rsvps.forEach(r => {
    csvContent += `"${r.guestName}","${r.attendance}","${r.guestCount || 0}","${(r.notes || '').replace(/"/g, '""')}","${r.submittedAt || ''}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Data_RSVP_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Wishes / Guestbook Moderation
 */
function renderWishesModeration() {
  const container = document.getElementById("wishes-moderation-container");
  if (!container) return;

  const wishes = loadWishesData();
  if (wishes.length === 0) {
    container.innerHTML = `<div class="text-xs text-slate-400 py-3 text-center">Belum ada ucapan doa masuk.</div>`;
    return;
  }

  container.innerHTML = wishes.map(w => `
    <div class="p-3 bg-slate-800 rounded-lg border border-slate-700 flex items-start justify-between gap-3 text-xs">
      <div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-white">${escapeHtml(w.sender)}</span>
          <span class="text-[10px] text-slate-400">${escapeHtml(w.time)}</span>
          <span class="text-[10px] text-pink-400">❤ ${w.likes || 0}</span>
        </div>
        <p class="text-slate-300 mt-1 leading-snug">${escapeHtml(w.text)}</p>
      </div>
      <button onclick="deleteWish('${w.id}')" class="text-red-400 hover:text-red-300 p-1">
        <span class="material-symbols-outlined text-[16px]">delete</span>
      </button>
    </div>
  `).join("");
}

function deleteWish(id) {
  let wishes = loadWishesData();
  wishes = wishes.filter(w => w.id !== id);
  saveWishesData(wishes);
  renderWishesModeration();
  syncPreview();
  showCmsToast("Ucapan dihapus");
}

/**
 * Batch Guest Link & WhatsApp Generator
 */
function initGuestLinkGenerator() {
  const generateBtn = document.getElementById("btn-generate-links");
  const guestListInput = document.getElementById("batch-guest-names");
  const waTemplateInput = document.getElementById("wa-template-input");
  const resultsContainer = document.getElementById("generated-links-results");

  if (!generateBtn || !guestListInput || !resultsContainer) return;

  generateBtn.addEventListener("click", () => {
    const rawText = guestListInput.value.trim();
    if (!rawText) {
      alert("Silakan masukkan minimal 1 nama tamu undangan.");
      return;
    }

    const template = waTemplateInput ? waTemplateInput.value : "Halo {nama}, kami mengundang Anda ke pernikahan kami: {link}";
    const names = rawText.split("\n").map(n => n.trim()).filter(n => n.length > 0);
    const baseUrl = window.location.href.replace("admin.html", "index.html");

    resultsContainer.innerHTML = names.map(name => {
      const encodedName = encodeURIComponent(name);
      const guestUrl = `${baseUrl}?to=${encodedName}`;
      const waMessage = template
        .replace(/{nama}/g, name)
        .replace(/{link}/g, guestUrl)
        .replace(/{mempelai}/g, cmsData.hero.title || "Arya & Maya");
      const waSendUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(waMessage)}`;

      return `
        <div class="p-3 bg-slate-800 rounded-lg border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
          <div class="overflow-hidden">
            <span class="text-xs font-bold text-white block">${escapeHtml(name)}</span>
            <span class="text-[11px] text-blue-400 truncate block max-w-sm">${guestUrl}</span>
          </div>
          <div class="flex items-center gap-2 self-end sm:self-auto">
            <button onclick="navigator.clipboard.writeText('${guestUrl}'); showCmsToast('Link untuk ${escapeAttr(name)} disalin!');" class="px-2.5 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded text-[11px] font-semibold flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">content_copy</span>
              <span>Salin</span>
            </button>
            <a href="${waSendUrl}" target="_blank" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-semibold flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">send</span>
              <span>Kirim WA</span>
            </a>
          </div>
        </div>
      `;
    }).join("");

    showCmsToast(`${names.length} Link Tamu berhasil dibuat!`);
  });
}

/**
 * Export & Import Tools
 */
function initExportImport() {
  // Export JSON
  const exportJsonBtn = document.getElementById("btn-export-json");
  if (exportJsonBtn) {
    exportJsonBtn.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cmsData, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `wedding-config-${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showCmsToast("Konfigurasi JSON berhasil didownload!");
    });
  }

  // Import JSON
  const importJsonInput = document.getElementById("import-json-file");
  if (importJsonInput) {
    importJsonInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          cmsData = deepMerge(DEFAULT_WEDDING_DATA, parsed);
          saveWeddingData(cmsData);
          populateFormValues();
          renderMilestonesEditor();
          renderGalleryEditor();
          renderBanksEditor();
          renderEtiquettesEditor();
          renderPresetThemes();
          syncPreview();
          showCmsToast("Konfigurasi JSON berhasil dimuat!");
        } catch (err) {
          alert("Gagal membaca file JSON. Pastikan format valid.");
        }
      };
      reader.readAsText(file);
    });
  }

  // Standalone HTML Export (Deploy ready)
  const exportHtmlBtn = document.getElementById("btn-export-html");
  if (exportHtmlBtn) {
    exportHtmlBtn.addEventListener("click", () => {
      generateStandaloneHtml();
    });
  }

  // Reset to default
  const resetBtn = document.getElementById("btn-reset-default");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Apakah Anda yakin ingin mereset semua pengaturan tema kembali ke default awal?")) {
        cmsData = resetWeddingData();
        populateFormValues();
        renderMilestonesEditor();
        renderGalleryEditor();
        renderBanksEditor();
        renderEtiquettesEditor();
        renderPresetThemes();
        syncPreview();
        showCmsToast("Pengaturan telah direset ke default.");
      }
    });
  }
}

/**
 * Generate Standalone HTML with embedded configuration
 */
async function generateStandaloneHtml() {
  try {
    const response = await fetch("index.html");
    let html = await response.text();

    // Inject active data right before closing head or before script
    const injectionScript = `
  <script>
    // Embedded Standalone Wedding Config
    window.DEFAULT_WEDDING_DATA = ${JSON.stringify(cmsData, null, 2)};
    localStorage.setItem(typeof WEDDING_STORAGE_KEY !== "undefined" ? WEDDING_STORAGE_KEY : "wedding_invitation_config_v2", JSON.stringify(window.DEFAULT_WEDDING_DATA));
  </script>
`;

    html = html.replace("</head>", `${injectionScript}\n</head>`);

    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wedding-invitation-ready.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showCmsToast("Website Mandiri (HTML Siap Publish) berhasil didownload!");
  } catch (err) {
    console.error("Failed to generate standalone HTML:", err);
    alert("Gagal mendownload standalone HTML: " + err.message);
  }
}

/**
 * Helper Bindings
 */
function bindColorPair(colorId, hexId, callback) {
  const colorInput = document.getElementById(colorId);
  const hexInput = document.getElementById(hexId);
  if (!colorInput || !hexInput) return;

  colorInput.addEventListener("input", (e) => {
    hexInput.value = e.target.value;
    callback(e.target.value);
    syncPreview();
  });

  hexInput.addEventListener("input", (e) => {
    if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
      colorInput.value = e.target.value;
      callback(e.target.value);
      syncPreview();
    }
  });
}

function bindInput(id, callback) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("input", (e) => {
    callback(e.target.value);
    syncPreview();
  });
}

function bindFileUpload(id, callback) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      callback(event.target.result);
    };
    reader.readAsDataURL(file);
  });
}

function setInputValue(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined && val !== null) {
    el.value = val;
  }
}

function showCmsToast(msg) {
  const toast = document.getElementById("cms-toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
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
  return String(str).replace(/"/g, "&quot;");
}
