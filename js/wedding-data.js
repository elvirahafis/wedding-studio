/**
 * Wedding Studio - Master Data & Default Configuration
 * Configurable schema for Wedding Invitation Website & CMS
 */

/**
 * Traditional Indonesian Cultural Ornaments & Motifs (SVG Vector Systems)
 */
const CULTURAL_ORNAMENTS = {
  jawa: {
    id: "jawa",
    name: "Adat Jawa Keraton",
    subname: "Gunungan Wayang & Ukiran Keraton",
    motif: "Batik Sogan & Parang Rusak",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M32 4C24 16 12 28 12 44C12 52 18 56 32 58C46 56 52 52 52 44C52 28 40 16 32 4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M26 57V46H38V57" stroke="currentColor" stroke-width="1.6"/>
      <path d="M23 46H41" stroke="currentColor" stroke-width="1.6"/>
      <path d="M25 42H39L32 35L25 42Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M32 35V14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M32 20C27 18 22 21 20 25" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M32 20C37 18 42 21 44 25" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M32 27C26 26 21 29 19 33" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M32 27C38 26 43 29 45 33" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="32" cy="10" r="1.5" fill="currentColor"/>
    </svg>`
  },
  sunda: {
    id: "sunda",
    name: "Adat Sunda Priangan",
    subname: "Mahkota Siger Sunda & Ronce Melati",
    motif: "Megamendung & Untaian Melati",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M8 44C16 46 48 46 56 44" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M10 40C18 42 46 42 54 40" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M32 10L36 28L32 38L28 28L32 10Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M22 18L26 31L23 38L18 30L22 18Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M42 18L46 30L41 38L38 31L42 18Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M13 26L17 34L13 39L9 34L13 26Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M51 26L55 34L51 39L47 34L51 26Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      <circle cx="32" cy="48" r="1.5" fill="currentColor"/>
      <circle cx="26" cy="49" r="1.2" fill="currentColor"/>
      <circle cx="38" cy="49" r="1.2" fill="currentColor"/>
      <circle cx="20" cy="51" r="1.2" fill="currentColor"/>
      <circle cx="44" cy="51" r="1.2" fill="currentColor"/>
      <path d="M32 50V56" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="32" cy="58" r="1.5" fill="currentColor"/>
    </svg>`
  },
  minang: {
    id: "minang",
    name: "Adat Minangkabau",
    subname: "Rumah Gadang & Pucuk Rebung",
    motif: "Songket Pandai Sikek & Silungkang",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M6 24C12 28 20 28 24 33L32 23L40 33C44 28 52 28 58 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M6 24C9 14 14 18 18 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M58 24C55 14 50 18 46 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M32 14L32 23" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M26 23C29 16 32 14 32 14C32 14 35 16 38 23" stroke="currentColor" stroke-width="1.5"/>
      <path d="M16 33L18 48H46L48 33" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M24 48L28 38L32 48L36 38L40 48" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M12 53H52" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="32" cy="11" r="1.5" fill="currentColor"/>
    </svg>`
  },
  batak: {
    id: "batak",
    name: "Adat Batak",
    subname: "Gorga Batak & Ulos Ragi Hotang",
    motif: "Ulos Sirara & Gorga Paung",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M32 10C24 10 16 16 16 26C16 36 28 36 32 46C36 36 48 36 48 26C48 16 40 10 32 10Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M22 26C22 21 26 17 32 17C38 17 42 21 42 26C42 32 36 33 32 38C28 33 22 32 22 26Z" stroke="currentColor" stroke-width="1.3"/>
      <circle cx="32" cy="25" r="2.5" fill="currentColor"/>
      <path d="M12 50C18 45 26 48 32 54C38 48 46 45 52 50" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M16 54H48" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M32 46V54" stroke="currentColor" stroke-width="1.6"/>
    </svg>`
  },
  bali: {
    id: "bali",
    name: "Adat Bali",
    subname: "Payas Agung & Gelungan Kencana",
    motif: "Patra Punggel & Cempaka Prada",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M32 6C34 10 37 14 37 18C37 21 34 23 32 23C30 23 27 21 27 18C27 14 30 10 32 6Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.15"/>
      <path d="M32 23V46" stroke="currentColor" stroke-width="1.6"/>
      <path d="M20 28C24 26 28 28 32 32C36 28 40 26 44 28" stroke="currentColor" stroke-width="1.5"/>
      <path d="M16 36C22 33 28 35 32 40C36 35 42 33 48 36" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 45C19 41 26 43 32 48C38 43 45 41 52 45" stroke="currentColor" stroke-width="1.6"/>
      <path d="M14 52C22 56 42 56 50 52" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="32" cy="34" r="1.8" fill="currentColor"/>
      <circle cx="32" cy="42" r="1.8" fill="currentColor"/>
    </svg>`
  },
  bugis: {
    id: "bugis",
    name: "Adat Bugis - Makassar",
    subname: "Saloko Emas & Sutera Lagosi",
    motif: "Bunga Lagosi & Tenun Sengkang",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M8 32C18 20 28 26 32 30C36 26 46 20 56 32" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M14 38C22 28 28 32 32 36C36 32 42 28 50 38" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M32 10L35 18L43 18L37 23L39 31L32 26L25 31L27 23L21 18L29 18L32 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M20 44L32 38L44 44L32 50L20 44Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M16 52H48" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="32" cy="20" r="1.8" fill="currentColor"/>
    </svg>`
  },
  melayu: {
    id: "melayu",
    name: "Adat Melayu",
    subname: "Selembayung & Songket Deli",
    motif: "Awan Larat & Kuning DiRaja",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M20 10C26 18 32 24 38 32" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M44 10C38 18 32 24 26 32" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M18 10C20 14 26 16 30 18" stroke="currentColor" stroke-width="1.4"/>
      <path d="M46 10C44 14 38 16 34 18" stroke="currentColor" stroke-width="1.4"/>
      <path d="M32 32V52" stroke="currentColor" stroke-width="1.6"/>
      <path d="M32 38C25 36 21 40 21 44C21 48 26 49 32 46" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M32 38C39 36 43 40 43 44C43 48 38 49 32 46" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="32" cy="22" r="2.5" fill="currentColor"/>
      <path d="M16 54H48" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`
  },
  botanical: {
    id: "botanical",
    name: "Modern Botanical",
    subname: "Eucalyptus & Olive Sprig",
    motif: "Fine Foliage & Flora",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M32 54C32 40 32 24 32 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M32 44C24 42 20 36 21 30C27 31 31 36 32 44Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M32 44C40 42 44 36 43 30C37 31 33 36 32 44Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M32 30C26 28 23 23 24 18C29 19 31 23 32 30Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M32 30C38 28 41 23 40 18C35 19 33 23 32 30Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      <circle cx="32" cy="10" r="1.5" fill="currentColor"/>
    </svg>`
  },
  minimal: {
    id: "minimal",
    name: "Minimalist Modern",
    subname: "Haute Couture Rings",
    motif: "Architectural Clean Lines",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="32" cy="32" r="18" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="32" cy="32" r="12" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 2"/>
      <path d="M32 8V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M32 44V56" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8 32H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M44 32H56" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="32" cy="32" r="2.5" fill="currentColor"/>
    </svg>`
  },
  aceh: {
    id: "aceh",
    name: "Adat Aceh Darussalam",
    subname: "Pintu Aceh & Rencong Meukasah",
    motif: "Kupiah Meukeutop & Emas",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M32 8C20 8 16 18 16 26C16 38 32 56 32 56C32 56 48 38 48 26C48 18 44 8 32 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M32 16C24 16 22 22 22 27C22 35 32 46 32 46C32 46 42 35 42 27C42 22 40 16 32 16Z" stroke="currentColor" stroke-width="1.3"/>
      <circle cx="32" cy="27" r="3" fill="currentColor"/>
      <path d="M12 48C18 52 46 52 52 48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="32" cy="8" r="1.5" fill="currentColor"/>
    </svg>`
  },
  palembang: {
    id: "palembang",
    name: "Adat Palembang Aesan",
    subname: "Aesan Gede & Gandik Emas",
    motif: "Songket Lepus & Teratai Emas",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M32 12C32 12 24 24 14 26C24 30 28 40 32 52C36 40 40 30 50 26C40 24 32 12 32 12Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M32 20C32 20 27 28 20 30C27 32 29 38 32 44C35 38 37 32 44 30C37 28 32 20 32 20Z" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="32" cy="30" r="2" fill="currentColor"/>
      <circle cx="32" cy="8" r="1.8" fill="currentColor"/>
      <path d="M16 52H48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  },
  coastal: {
    id: "coastal",
    name: "Coastal Sunset Beach",
    subname: "Ocean Waves & Tropical Breeze",
    motif: "Seashell & Coastal Rays",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="32" cy="28" r="12" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.1"/>
      <path d="M10 40C16 36 22 42 28 38C34 34 40 40 46 36C50 33 54 36 56 38" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M8 48C14 44 20 50 26 46C32 42 38 48 44 44C48 41 52 44 56 46" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M12 55C18 52 46 52 52 55" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M32 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M46 16L43 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M18 16L21 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  },
  garden: {
    id: "garden",
    name: "Garden Party & Lights",
    subname: "Fairy Lights & Twig Garland",
    motif: "Glowing Lantern & Flora",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M8 20C20 28 44 28 56 20" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="20" cy="27" r="3.5" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.2"/>
      <circle cx="32" cy="29" r="3.5" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.2"/>
      <circle cx="44" cy="27" r="3.5" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.2"/>
      <path d="M32 36V52" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M32 44C26 42 22 38 24 34C28 35 30 38 32 44Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M32 44C38 42 42 38 40 34C36 35 34 38 32 44Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <circle cx="32" cy="54" r="1.5" fill="currentColor"/>
    </svg>`
  },
  islamic: {
    id: "islamic",
    name: "Islamic Modern Arabesque",
    subname: "Kubah & Geometris Arabesque",
    motif: "Kufi Geometry & Bintang Delapan",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <path d="M32 6C32 6 22 18 22 28C22 36 26 40 32 40C38 40 42 36 42 28C42 18 32 6 32 6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M16 36C16 36 22 36 26 40L32 40L38 40C42 36 48 36 48 36" stroke="currentColor" stroke-width="1.4"/>
      <path d="M18 40V54H46V40" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M26 54V46H38V54" stroke="currentColor" stroke-width="1.4"/>
      <path d="M32 10L32 18" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="32" cy="4" r="1.5" fill="currentColor"/>
      <circle cx="32" cy="28" r="2" fill="currentColor"/>
    </svg>`
  },
  sangjit: {
    id: "sangjit",
    name: "Oriental Sangjit Chinoiserie",
    subname: "Shuang Xi & Kelopak Peony",
    motif: "Double Happiness & Emas",
    svg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <circle cx="32" cy="32" r="22" stroke="currentColor" stroke-width="1.5"/>
      <path d="M24 20V44M40 20V44" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M18 26H46M18 38H46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M20 32H28M36 32H44" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M20 44H28M36 44H44" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>`
  }
};

const DEFAULT_WEDDING_DATA = {
  theme: {
    id: "botanical-editorial",
    name: "Botanical Editorial",
    colors: {
      primary: "#1C1A17",
      onPrimary: "#FFFFFF",
      secondary: "#8C7A6B",
      tertiary: "#CCA730",
      background: "#F5EFE3",
      surface: "#FCF9F3",
      surfaceContainer: "#ECE2CF",
      surfaceContainerLow: "#FAF7F1",
      surfaceContainerLowest: "#FFFFFF",
      outline: "#CEBC9E",
      outlineVariant: "#E4D9C5",
      onSurface: "#1B1C1A",
      onSurfaceVariant: "#4B463F"
    },
    typography: {
      headingFont: "Playfair Display",
      bodyFont: "Plus Jakarta Sans"
    },
    borderRadius: "0.5rem",
    ornamentStyle: "botanical"
  },

  presets: [
    // =========================================================================
    // 🇮🇩 TEMA ADAT NUSANTARA (TRADISIONAL INDONESIA)
    // =========================================================================
    {
      id: "jawa-keraton",
      name: "Adat Jawa Keraton",
      category: "nusantara",
      culturalLabel: "Jawa",
      description: "Kemegahan Beludru Hitam Keraton, Emas Prada Kencana & Sentuhan Sogan Adiluhung",
      colors: {
        primary: "#1F1916",
        onPrimary: "#FFFFFF",
        secondary: "#754C28",
        tertiary: "#C89938",
        background: "#F7ECDA",
        surface: "#FCF6EC",
        surfaceContainer: "#F2E2C8",
        surfaceContainerLow: "#FAF4EA",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#D8BF9A",
        outlineVariant: "#EBDCC7",
        onSurface: "#1D1917",
        onSurfaceVariant: "#4F433A"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "jawa"
    },
    {
      id: "sunda-siger",
      name: "Adat Sunda Priangan",
      category: "nusantara",
      culturalLabel: "Sunda",
      description: "Keanggunan Mahkota Siger Sunda, Ronce Melati Putih & Nuansa Hijau Asri Parahyangan",
      colors: {
        primary: "#173C2C",
        onPrimary: "#FFFFFF",
        secondary: "#4D7A5E",
        tertiary: "#CCA434",
        background: "#DCF2E4",
        surface: "#EEF9F2",
        surfaceContainer: "#CEEAD8",
        surfaceContainerLow: "#F4FCF7",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#9FD1B0",
        outlineVariant: "#C6E7D2",
        onSurface: "#12251D",
        onSurfaceVariant: "#395244"
      },
      headingFont: "Playfair Display",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "sunda"
    },
    {
      id: "minang-suntiang",
      name: "Adat Minangkabau",
      category: "nusantara",
      culturalLabel: "Minang",
      description: "Kemewahan Songket Silungkang Marun, Kilau Suntiang Gadang Emas & Pucuk Rebung",
      colors: {
        primary: "#7A1624",
        onPrimary: "#FFFFFF",
        secondary: "#9B3442",
        tertiary: "#E2A626",
        background: "#FDE2E6",
        surface: "#FFF0F2",
        surfaceContainer: "#FBD0D7",
        surfaceContainerLow: "#FFF6F7",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#E6A8B3",
        outlineVariant: "#F4CAD1",
        onSurface: "#271015",
        onSurfaceVariant: "#592E35"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "minang"
    },
    {
      id: "batak-gorga",
      name: "Adat Batak Ulos",
      category: "nusantara",
      culturalLabel: "Batak",
      description: "Ketegasan Merah Sirara Ulos, Hitam Tenun Sakral & Filosofi Magis Gorga Batak",
      colors: {
        primary: "#7D1B1B",
        onPrimary: "#FFFFFF",
        secondary: "#5B4744",
        tertiary: "#D48B28",
        background: "#FDE6E0",
        surface: "#FFF2EE",
        surfaceContainer: "#FAD4CC",
        surfaceContainerLow: "#FFF7F5",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#E4B1A7",
        outlineVariant: "#F3D1CA",
        onSurface: "#1D1615",
        onSurfaceVariant: "#4B3D3B"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "batak"
    },
    {
      id: "bali-payas-agung",
      name: "Adat Bali Kencana",
      category: "nusantara",
      culturalLabel: "Bali",
      description: "Kesakralan Payas Agung, Emas Prada Kencana Dewata & Sentuhan Cempaka Suci",
      colors: {
        primary: "#5C1326",
        onPrimary: "#FFFFFF",
        secondary: "#874A59",
        tertiary: "#DCA024",
        background: "#FDF0D5",
        surface: "#FFF9EA",
        surfaceContainer: "#FAE5BA",
        surfaceContainerLow: "#FFFDF2",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#E0C392",
        outlineVariant: "#F1DEC0",
        onSurface: "#201216",
        onSurfaceVariant: "#52373F"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "bali"
    },
    {
      id: "bugis-makassar",
      name: "Adat Bugis - Makassar",
      category: "nusantara",
      culturalLabel: "Bugis",
      description: "Kemegahan Sutera Sengkang, Saloko Emas & Keanggunan Baju Bodo Tokko Khas Bugis",
      colors: {
        primary: "#1C473A",
        onPrimary: "#FFFFFF",
        secondary: "#7C3555",
        tertiary: "#D09C2C",
        background: "#FCE0EC",
        surface: "#FFF0F6",
        surfaceContainer: "#F7C8DD",
        surfaceContainerLow: "#FFF6FA",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#E2A8C4",
        outlineVariant: "#F1CCD0",
        onSurface: "#17201C",
        onSurfaceVariant: "#3C4B44"
      },
      headingFont: "Playfair Display",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "bugis"
    },
    {
      id: "melayu-deli",
      name: "Adat Melayu DiRaja",
      category: "nusantara",
      culturalLabel: "Melayu",
      description: "Kemuliaan Biru DiRaja Kesultanan, Kuning Emas Songket Deli & Selembayung Megah",
      colors: {
        primary: "#1C375B",
        onPrimary: "#FFFFFF",
        secondary: "#4E6B8D",
        tertiary: "#D6A429",
        background: "#DCECFB",
        surface: "#EFF6FE",
        surfaceContainer: "#C6E0F8",
        surfaceContainerLow: "#F6FAFF",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#9ECAEF",
        outlineVariant: "#C8E2FA",
        onSurface: "#111B27",
        onSurfaceVariant: "#35485E"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "melayu"
    },

    // =========================================================================
    // ✨ TEMA MODERN & EDITORIAL
    // =========================================================================
    {
      id: "botanical-editorial",
      name: "Botanical Editorial",
      category: "modern",
      culturalLabel: "Modern",
      description: "Warm Ivory, Deep Charcoal, Muted Taupe & Antique Gold",
      colors: {
        primary: "#1C1A17",
        onPrimary: "#FFFFFF",
        secondary: "#8C7A6B",
        tertiary: "#CCA730",
        background: "#F5EFE3",
        surface: "#FCF9F3",
        surfaceContainer: "#ECE2CF",
        surfaceContainerLow: "#FAF7F1",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#CEBC9E",
        outlineVariant: "#E4D9C5",
        onSurface: "#1B1C1A",
        onSurfaceVariant: "#4B463F"
      },
      headingFont: "Playfair Display",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "botanical"
    },
    {
      id: "emerald-luxury",
      name: "Emerald & Royal Gold",
      category: "modern",
      culturalLabel: "Modern",
      description: "Deep Emerald Green, Champagne Ivory & Gleaming Gold",
      colors: {
        primary: "#143D30",
        onPrimary: "#FFFFFF",
        secondary: "#846B48",
        tertiary: "#D4AF37",
        background: "#D9F3E8",
        surface: "#EDFAF3",
        surfaceContainer: "#C5ECDC",
        surfaceContainerLow: "#F4FCF8",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#9DD7BE",
        outlineVariant: "#C7EADA",
        onSurface: "#11221B",
        onSurfaceVariant: "#3E5349"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "botanical"
    },
    {
      id: "terracotta-warmth",
      name: "Warm Terracotta Autumn",
      category: "modern",
      culturalLabel: "Modern",
      description: "Rustic Terracotta, Earthy Sand & Warm Espresso",
      colors: {
        primary: "#8F3D24",
        onPrimary: "#FFFFFF",
        secondary: "#A36D53",
        tertiary: "#D97736",
        background: "#FDE5D6",
        surface: "#FFF3EC",
        surfaceContainer: "#FAD1BA",
        surfaceContainerLow: "#FFF8F3",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#E3B396",
        outlineVariant: "#F2D2BE",
        onSurface: "#281A14",
        onSurfaceVariant: "#5A4237"
      },
      headingFont: "Cormorant Garamond",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "botanical"
    },
    {
      id: "rose-romance",
      name: "Dusty Rose Romance",
      category: "modern",
      culturalLabel: "Modern",
      description: "Romantic Blush Pink, Soft Taupe & Rose Gold",
      colors: {
        primary: "#7A3E48",
        onPrimary: "#FFFFFF",
        secondary: "#9E6D76",
        tertiary: "#D68C98",
        background: "#FDE2EB",
        surface: "#FFF0F6",
        surfaceContainer: "#FBCEDC",
        surfaceContainerLow: "#FFF6FA",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#E3A8BC",
        outlineVariant: "#F2CBD8",
        onSurface: "#29151A",
        onSurfaceVariant: "#5D4249"
      },
      headingFont: "Playfair Display",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "botanical"
    },
    {
      id: "midnight-celestial",
      name: "Midnight Celestial Navy",
      category: "modern",
      culturalLabel: "Modern",
      description: "Deep Regal Navy, Soft Silver Blue & Golden Accents",
      colors: {
        primary: "#1B2A4A",
        onPrimary: "#FFFFFF",
        secondary: "#5C718E",
        tertiary: "#F59E0B",
        background: "#DDEAF8",
        surface: "#EFF5FC",
        surfaceContainer: "#C8DFF5",
        surfaceContainerLow: "#F7FAFD",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#A4C7EC",
        outlineVariant: "#CCE0F5",
        onSurface: "#0F172A",
        onSurfaceVariant: "#475569"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "minimal"
    },
    {
      id: "minimalist-monochrome",
      name: "Monochrome Haute Couture",
      category: "modern",
      culturalLabel: "Modern",
      description: "Pure Architectural Black, Crisp White & Minimalist Gray",
      colors: {
        primary: "#111111",
        onPrimary: "#FFFFFF",
        secondary: "#666666",
        tertiary: "#888888",
        background: "#EAECEF",
        surface: "#F7F8FA",
        surfaceContainer: "#DFE2E6",
        surfaceContainerLow: "#FAFBFD",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#B8BFC8",
        outlineVariant: "#D9DEE5",
        onSurface: "#111111",
        onSurfaceVariant: "#444444"
      },
      headingFont: "Playfair Display",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "minimal"
    },

    // =========================================================================
    // 🏛️ TEMA ADAT NUSANTARA TAMBAHAN
    // =========================================================================
    {
      id: "aceh-meukasah",
      name: "Adat Aceh Meusyeuhu",
      category: "nusantara",
      culturalLabel: "Aceh",
      description: "Kemegahan Pintu Aceh Kuning Emas Murni, Hijau Meukasah & Aksen Rencong Bersejarah",
      colors: {
        primary: "#133E2B",
        onPrimary: "#FFFFFF",
        secondary: "#695125",
        tertiary: "#D6A329",
        background: "#DCF4E7",
        surface: "#EFF9F3",
        surfaceContainer: "#C9ECD9",
        surfaceContainerLow: "#F5FBF7",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#9ED5B6",
        outlineVariant: "#C6E7D4",
        onSurface: "#13231B",
        onSurfaceVariant: "#394E42"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "aceh"
    },
    {
      id: "palembang-aesan",
      name: "Adat Palembang Aesan",
      category: "nusantara",
      culturalLabel: "Palembang",
      description: "Keagungan Songket Lepus Emas, Merah Sawit Aesan Gede & Kemilau Teratai Bertatah",
      colors: {
        primary: "#781827",
        onPrimary: "#FFFFFF",
        secondary: "#8A492B",
        tertiary: "#DAA520",
        background: "#FDE5DA",
        surface: "#FFF3ED",
        surfaceContainer: "#FBD0BE",
        surfaceContainerLow: "#FFF8F4",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#E3AF96",
        outlineVariant: "#F1CFC0",
        onSurface: "#231114",
        onSurfaceVariant: "#552D26"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "palembang"
    },

    // =========================================================================
    // 🏝️ TEMA DESTINATION & NUANSA ALAM
    // =========================================================================
    {
      id: "coastal-beach",
      name: "Coastal Sunset Beach",
      category: "destination",
      culturalLabel: "Pantai",
      description: "Nuansa Tropis Pesisir Bali & Lombok, Biru Samudera Azure, Pasir Putih & Kilau Senja",
      colors: {
        primary: "#113E53",
        onPrimary: "#FFFFFF",
        secondary: "#3C6B84",
        tertiary: "#E07042",
        background: "#D3F0FC",
        surface: "#E8F8FE",
        surfaceContainer: "#B9E6FA",
        surfaceContainerLow: "#F3FBFF",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#8FD4F5",
        outlineVariant: "#C1E8FB",
        onSurface: "#0E1E26",
        onSurfaceVariant: "#334D5C"
      },
      headingFont: "Playfair Display",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "coastal"
    },
    {
      id: "garden-party",
      name: "Garden Party & Fairy Lights",
      category: "destination",
      culturalLabel: "Garden",
      description: "Suasana Pesta Taman Romantis, Daun Zaitun Asri, Kilau Lampu Fairy Lights & Kayu Alami",
      colors: {
        primary: "#233816",
        onPrimary: "#FFFFFF",
        secondary: "#5E6B47",
        tertiary: "#DDA236",
        background: "#E5F6C8",
        surface: "#F3FBE8",
        surfaceContainer: "#D2EF9E",
        surfaceContainerLow: "#F8FCF2",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#A8DB65",
        outlineVariant: "#CDEC9A",
        onSurface: "#192213",
        onSurfaceVariant: "#414D33"
      },
      headingFont: "Cormorant Garamond",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "garden"
    },

    // =========================================================================
    // 🕌 TEMA RELIGI & KULTURAL
    // =========================================================================
    {
      id: "islamic-arabesque",
      name: "Islamic Modern Arabesque",
      category: "religi",
      culturalLabel: "Islami",
      description: "Keagungan Pola Bintang Arabesque, Hijau Mint Sage Syar'i & Emas Kaligrafi Sakral",
      colors: {
        primary: "#184236",
        onPrimary: "#FFFFFF",
        secondary: "#467062",
        tertiary: "#CCA335",
        background: "#DAF5EA",
        surface: "#EDFAF3",
        surfaceContainer: "#C3EED9",
        surfaceContainerLow: "#F4FCF8",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#98D8BA",
        outlineVariant: "#C4EBD6",
        onSurface: "#11241E",
        onSurfaceVariant: "#365349"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "islamic"
    },
    {
      id: "sangjit-chinoiserie",
      name: "Oriental Sangjit & Chinoiserie",
      category: "religi",
      culturalLabel: "Oriental",
      description: "Merah Keberuntungan Tradisi Tionghoa, Emas Lambang Kemakmuran & Simbol Shuang Xi",
      colors: {
        primary: "#7B1218",
        onPrimary: "#FFFFFF",
        secondary: "#9B2830",
        tertiary: "#DAA520",
        background: "#FDE0E3",
        surface: "#FFF0F2",
        surfaceContainer: "#FBC7CE",
        surfaceContainerLow: "#FFF6F7",
        surfaceContainerLowest: "#FFFFFF",
        outline: "#E59EA8",
        outlineVariant: "#F3C7CE",
        onSurface: "#240E10",
        onSurfaceVariant: "#59282B"
      },
      headingFont: "Cinzel",
      bodyFont: "Plus Jakarta Sans",
      ornamentStyle: "sangjit"
    }
  ],

  hero: {
    monogram: "A & M",
    monogramItalic: "a&m",
    superHeader: "Private Nuptials",
    title: "Arya & Maya",
    dateLocation: "Sabtu, 24 Oktober 2026 • Uluwatu, Bali",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF-Eo0OQoU-J8ClK-3T4foYAVuSZny6_Dgo6FNV7sGWN8_vAYSGOY-BQkT8EzbzWpiNPBHFNhNPKFg9YogKBeCa2WDHedT25mKtGYKVJq9BiDLrSz06Nf5wOvFmM9tPyO-m0ucxdsZGu3utqpaz4q1x3CJCT-Ia7qd_4ugawVaciWzaAKem7BRtFVqlZ0GtERaZZ1tgZl7hdAZPsC0OFza9hrFWKIeMgHZG2OHU4IZoUWeMf6wtNY",
    badgeChapter: "Chapter One",
    badgeTitle: "The Sacred Union",
    welcomePrefix: "Kepada Yth. Bapak/Ibu/Saudara/i",
    defaultGuestName: "Dimas & Partner",
    welcomeMessage: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu bagi langkah awal kami.",
    buttonText: "Buka Undangan"
  },

  quote: {
    bismillah: "Bismillahir Rahmanir Rahim",
    title: "The Two Souls",
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation: "“Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.”",
    source: "QS. Ar-Rum: 21"
  },

  couple: {
    groom: {
      name: "Arya Danendra, S.Ds.",
      nickname: "Arya",
      role: "Creative Director & Designer",
      parents: "Putra pertama dari pasangan terkasih Bpk. Ir. Hendra & Ibu Ratna",
      instagram: "aryadanendra",
      instagramUrl: "https://instagram.com/aryadanendra",
      photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeFonswWNiV_t4y2hTcaSKTX-aD-D-TNjeNULV2HNa_oPIzI56YkOZCsSOgBlrXm6noZIvvntXYq_tMxnRqhxWRFxBqx-1p0RTALfxMJfpkq1_pXWHPX907-HNzhkUs3XoIRDMowcc8pyXNraJfvsPY6i58JbpEYdwX3ZQK7YR_dz6lsJYpdeyvYKlZrBIB_ZZk5La_ajiUoCKd7BOHibJyokW11RMht23HXXB04MMm0uPTif96Ys"
    },
    bride: {
      name: "Maya Kirana, B.Arch.",
      nickname: "Maya",
      role: "Interior Architect",
      parents: "Putri kedua dari pasangan terkasih Bpk. Bambang & Ibu Sri Wahyuni",
      instagram: "mayakirana",
      instagramUrl: "https://instagram.com/mayakirana",
      photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJljqKsAUiRcWyRq5uhkPqUp5Gw2JW7IV0UP644-XFxD3q9tbRvGfqJnqV_7kpm0r7qW7BvLB53gS89CC5G1DUEtIzhP_TjrThEZExBRINitzJvpBy-M63Mpea82OiFN6f9D8CYTdIcVYdtRV-1wjN999X3UzitF9GexeYxp1atEtj5zrIChyH85muuFRzX8mslMin6GvRQNTcjnLUS3a_XrL-t_AXYu1lwWSQrFjGJeg4lBT1MvE"
    }
  },

  events: {
    countdownTarget: "2026-10-24T08:30:00",
    event1: {
      tag: "Sesi Pagi",
      title: "Akad Nikah",
      subtitle: "The Holy Matrimony",
      date: "Sabtu, 24 Oktober 2026",
      time: "08:30 - 10:30 WITA",
      venueName: "The Glass House, Tirtha Uluwatu",
      venueAddress: "Jl. Uluwatu Banjar Dinas Karang Boma, Pecatu, Bali",
      dresscode: "Traditional White / Earthy Taupe",
      googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Arya+%26+Maya&dates=20261024T003000Z/20261024T023000Z&details=Pernikahan+Arya+Danendra+%26+Maya+Kirana&location=Tirtha+Uluwatu+Bali",
      mapsUrl: "https://maps.google.com/?q=Tirtha+Uluwatu+Bali"
    },
    event2: {
      tag: "Sesi Senja & Malam",
      title: "Resepsi Pernikahan",
      subtitle: "Evening Reception & Sunset Soirée",
      date: "Sabtu, 24 Oktober 2026",
      time: "17:30 WITA - Selesai",
      cocktailNote: "Sunset Cocktails & Canapés (17:30 - 19:00)",
      venueName: "Cliffside Amphitheater, Tirtha Uluwatu",
      venueAddress: "Overlooking the Indian Ocean cliff plateau",
      dresscode: "Black Tie Optional / Formal Botanical Pastel",
      adultsOnlyNote: "Adults Only Reception (Untuk kenyamanan & keselamatan tebing)",
      googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Arya+%26+Maya&dates=20261024T093000Z/20261024T140000Z&details=Resepsi+Pernikahan+Arya+Danendra+%26+Maya+Kirana&location=Tirtha+Uluwatu+Bali",
      mapsUrl: "https://maps.google.com/?q=Tirtha+Uluwatu+Bali"
    }
  },

  location: {
    sectionLabel: "Lokasi Acara",
    title: "Tirtha Uluwatu, Bali",
    description: "Kompleks Tirtha Uluwatu bertengger di atas tebing megah dengan pemandangan samudera 180 derajat. Akses melalui gerbang utama Banjar Karang Boma.",
    coordinates: "8.8471° S, 115.1105° E",
    previewImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Av_AdSTqOyDZiD0vGRNhWe_OLSv6Wjnt5W5A9xoKtAO1Po7i69zgSpcXMZNfD8fQgx7Ikcyp3IxcOTfbagJlBOUYd45d08oUBVXwrBrv2GkTFYZn-zMK9JEbko2va0FGcViVp8PltGL-X480M8Vj8qaoPJnf2IxNxr-zdWw1LqxSSIP9XI3Zcz7DW6wWU2GuGroL-ex1bJXaXyqWv11gjpGGfptPPfOaql0gqDrIV4hndJqWITY",
    shuttleTitle: "Layanan Shuttle & Parkir Valet",
    shuttleDescription: "Tersedia buggy shuttle dari area parkir utama menuju The Glass House dan Cliffside Amphitheater tanpa dipungut biaya.",
    mapEmbedUrl: "https://maps.google.com/maps?q=Tirtha+Uluwatu+Bali&t=&z=15&ie=UTF8&iwloc=&output=embed",
    navigationUrl: "https://maps.google.com/?q=Tirtha+Uluwatu+Bali",
    etiquettes: [
      {
        icon: "alarm_on",
        title: "Hadir Tepat Waktu",
        desc: "Tamu diharapkan hadir 30 menit sebelum prosesi dimulai."
      },
      {
        icon: "no_photography",
        title: "Unplugged Ceremony",
        desc: "Simpan ponsel Anda sejenak selama pengucapan janji suci."
      },
      {
        icon: "sanitizer",
        title: "Kesehatan Bersama",
        desc: "Fasilitas sanitasi dan masker elegan disediakan di resepsionis."
      },
      {
        icon: "steps",
        title: "Alas Kaki Nyaman",
        desc: "Area tebing & rumput, disarankan menggunakan block heels."
      }
    ]
  },

  story: {
    subtitle: "Chronicles",
    title: "Our Love Story",
    description: "A serendipitous chapter across blueprints & skylines",
    milestones: [
      {
        period: "Autumn 2018",
        title: "First Encounter",
        desc: "Met unexpectedly during an architectural monograph exhibition in Bandung. A conversation on minimalist spatial typography turned into an endless evening coffee dialogue."
      },
      {
        period: "Spring 2022",
        title: "Building Dreams & Wandering",
        desc: "Co-founded our collaborative design atelier. Navigated endless design projects, shared road trips across East Java, and realized our shared vision of life and craft."
      },
      {
        period: "May 2025",
        title: "She Said Yes at Lake Como",
        desc: "Under the tranquil golden hour overlooking the historic shores of Varenna, Arya knelt, and Maya said yes with tears of gratitude."
      }
    ]
  },

  gallery: {
    subtitle: "Visual Diary",
    title: "Moments of Grace",
    items: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU5aqf-zwfh-QMb7Z9VJzt6IKRl0iKFtgMUkVVrTwawUgYel9y9tFr6DTaYAHmfoDw9uLrKTvwY6lNJgxOPOmq6cYkRBkTvup0JdtNirfWmV8Uzpqn3-VickXdOf7jK5yW7oecbiqwKJLraGo2QFKgLken10aTwjSoWReKQc5GvBCLN9YO5I_bSRkCcDlTXOjrEyat41FHDTu1LW9AwlnAfiQhBDvd0mPlESPovEr_2XxXMr-xzAk",
        caption: "Varenna, Italy — 2025",
        aspect: "wide"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRziPn0ZiRXd7FBFyyWeH_oxEiq2IgJGhW-iSB8Y1s1dfixPsPkeSsuvu4pZk40ovVqWVbAc058G2J7lvucuJkwm9igIdssrWdffGRGw1x3LM6DUYDawt621rwbEY9Km5A8UzjdnxJsYjz4cQc2awzW8RWGkN1QOBKhCE_Fvc9o8qaCO32Orm6NzyDQfCso432EdY2CxuXoGqPmQ7-Fyt5DlmFxeYNd7JyKZPv0LVh6YTRNIRhabQ",
        caption: "Promise",
        aspect: "square"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuClklgsnEiwHrBZu-Jv5pD5YnZQhfkWHuoSrbne298Th85qm7XYsr7rKuRkE2_NeqViRTZxt44bmQjS58i7iW4SabhziM-c9EMakxEAG5jX33nk6INWzjh9XRDzBE4ty3pUP9Ee2Yj3_ikxlz6XpxqPUZ8HrlceBGUB2kz8jC9tEE-xErhkYCUXyuAe0zOg0jNHgSSJq56yISIz88Z3ckiKOwVeScJnVaqhioZ1M-fc4v6W2Ufh-BM",
        caption: "Studio At Work",
        aspect: "square"
      }
    ]
  },

  gifts: {
    title: "Tanda Kasih & Amplop Digital",
    intro: "Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda bermaksud memberikan tanda kasih berupa bingkisan atau amplop digital untuk bekal awal mahligai baru kami, kami menyediakannya dengan penuh kerendahan hati:",
    banks: [
      {
        id: "bank-1",
        bankName: "BCA",
        accountNumber: "8720192881",
        accountHolder: "Arya Danendra"
      },
      {
        id: "bank-2",
        bankName: "Bank Mandiri",
        accountNumber: "137001928331",
        accountHolder: "Maya Kirana"
      }
    ],
    qrisImage: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=WEDDING-ARYA-MAYA-AMPLOP-DIGITAL",
    physicalGift: {
      recipient: "Arya Danendra & Maya Kirana",
      address: "Jl. Dharmawangsa Elok No. 18, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160",
      contact: "0812-8890-1200 (Bpk. Danendra)"
    }
  },

  rsvp: {
    title: "Konfirmasi Kehadiran",
    subtitle: "Mohon konfirmasi kesediaan hadir sebelum 24 September 2026 demi kelancaran reservasi jamuan.",
    deadlineDate: "2026-09-24"
  },

  wishes: [
    {
      id: "w-1",
      sender: "Raditya & Laras",
      initials: "RL",
      time: "2 jam yang lalu",
      text: "Selamat menempuh babak kehidupan baru Arya & Maya! Semoga selalu diberkahi keharmonisan, kesabaran, dan tawa dalam setiap cerita rumah tangga kalian.",
      likes: 14,
      liked: false
    },
    {
      id: "w-2",
      sender: "Anindita Saraswati",
      initials: "AS",
      time: "5 jam yang lalu",
      text: "Maya sayang, cantiknya kamu hari ini! Bahagia luar biasa melihat kalian berdua bersatu. Semoga senantiasa saling mengasihi sampai maut memisahkan.",
      likes: 29,
      liked: true
    },
    {
      id: "w-3",
      sender: "Bramasta Adi",
      initials: "BA",
      time: "Kemarin",
      text: "Happy wedding, brother Arya! Welcome to the married club. Doa terbaik buat kalian berdua dan keluarga besar.",
      likes: 8,
      liked: false
    }
  ],

  music: {
    songTitle: "Clair de Lune",
    artist: "Claude Debussy (Wedding Piano)",
    // High quality royalty-free wedding piano piece
    audioUrl: "https://actions.google.com/sounds/v1/instruments/soft_piano_melody.ogg",
    autoplayOnOpen: true
  },

  footer: {
    closingQuote: "With endless love,",
    names: "Arya & Maya",
    date: "24 • 10 • 2026"
  }
};

// Storage helper functions for client-side persistence
const WEDDING_STORAGE_KEY = "wedding_invitation_config_v2";
const RSVP_STORAGE_KEY = "wedding_invitation_rsvp_list_v1";
const WISHES_STORAGE_KEY = "wedding_invitation_wishes_list_v1";

function loadWeddingData() {
  try {
    let saved = localStorage.getItem(WEDDING_STORAGE_KEY);
    if (!saved) {
      // Check for legacy v1 migration
      const legacySaved = localStorage.getItem("wedding_invitation_config_v1");
      if (legacySaved) {
        try {
          const legacyParsed = JSON.parse(legacySaved);
          if (legacyParsed.theme && legacyParsed.theme.id) {
            const matchedPreset = DEFAULT_WEDDING_DATA.presets.find(p => p.id === legacyParsed.theme.id);
            if (matchedPreset) {
              legacyParsed.theme.colors = JSON.parse(JSON.stringify(matchedPreset.colors));
            }
          }
          saved = JSON.stringify(legacyParsed);
          localStorage.setItem(WEDDING_STORAGE_KEY, saved);
        } catch (err) {}
      }
    }
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure presets always use the latest bright theme palettes
      parsed.presets = DEFAULT_WEDDING_DATA.presets;
      return deepMerge(DEFAULT_WEDDING_DATA, parsed);
    }
  } catch (e) {
    console.error("Failed to load custom wedding config from localStorage:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA));
}

function saveWeddingData(data) {
  try {
    localStorage.setItem(WEDDING_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Failed to save wedding config to localStorage:", e);
    return false;
  }
}

function resetWeddingData() {
  localStorage.removeItem(WEDDING_STORAGE_KEY);
  return JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA));
}

function loadRsvpData() {
  try {
    const saved = localStorage.getItem(RSVP_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to load RSVP data:", e);
  }
  return [
    {
      id: "rsvp-1",
      guestName: "Dimas & Partner",
      attendance: "hadir",
      guestCount: 2,
      notes: "Vegetarian untuk 1 orang",
      submittedAt: "2026-10-01T14:20:00"
    },
    {
      id: "rsvp-2",
      guestName: "Budi Santoso",
      attendance: "hadir",
      guestCount: 1,
      notes: "-",
      submittedAt: "2026-10-02T10:15:00"
    },
    {
      id: "rsvp-3",
      guestName: "Siti Rahma",
      attendance: "absen",
      guestCount: 0,
      notes: "Selamat berbahagia, maaf berhalangan hadir ke Bali.",
      submittedAt: "2026-10-03T09:40:00"
    }
  ];
}

function saveRsvpData(list) {
  try {
    localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Failed to save RSVP data:", e);
  }
}

function loadWishesData() {
  try {
    const saved = localStorage.getItem(WISHES_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to load wishes data:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA.wishes));
}

function saveWishesData(list) {
  try {
    localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Failed to save wishes data:", e);
  }
}

// Deep merge helper
function deepMerge(target, source) {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
