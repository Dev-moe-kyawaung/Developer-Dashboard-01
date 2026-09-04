export const PROFILE = {
  name: "Moe Kyaw Aung",
  mmName: "မိုးကျော်အောင်",
  role: "Senior Android & Full-Stack Developer",
  location: "Tachileik, Myanmar 🇲🇲  ↔  Bangkok, Thailand 🇹🇭",
  status: "Available for opportunities",
  statusDetail: "Open to senior Android, full-stack, and contract roles",
  avatar:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  portrait:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp",
  github: "https://github.com/Dev-moe-kyawaung/",
  githubOrg: "https://github.com/moekyawaung-tech/",
  gravatar: "https://gravatar.com/moekyawaung2026",
  phones: ["+95 9 889 000 889", "+959 666 000 050"],
  primaryEmail: "moekyawaung@programmer.net",
  languages: ["Burmese", "English", "Kotlin"],
};

export const CURRENT_FOCUS = [
  {
    title: "POS Ultimate Pro Max",
    detail: "Offline-first retail sync, ESC/POS receipts, multi-terminal shifts",
    tag: "Shipping",
    progress: 92,
  },
  {
    title: "Compose Media Pipeline",
    detail: "HLS adaptive player with gesture controls and Media3",
    tag: "Active",
    progress: 78,
  },
  {
    title: "Social Analytics Hub",
    detail: "Modular dashboard widgets, live feed aggregation",
    tag: "Iterate",
    progress: 64,
  },
];

export const ANDROID_EXPERTISE = [
  { name: "Kotlin", level: 95 },
  { name: "Jetpack Compose", level: 90 },
  { name: "Coroutines / Flow", level: 88 },
  { name: "Room / SQLite", level: 89 },
  { name: "Hilt / DI", level: 86 },
  { name: "Media3 / ExoPlayer", level: 84 },
  { name: "Clean Architecture", level: 91 },
  { name: "Firebase", level: 82 },
];

export const WEB_EXPERTISE = [
  { name: "React / TypeScript", level: 86 },
  { name: "Tailwind / Design Systems", level: 88 },
  { name: "Node / REST", level: 80 },
  { name: "PWA / Service Workers", level: 83 },
];

export const TOP_REPOS = [
  {
    name: "POS-Ultimate-Pro-Max",
    desc: "Enterprise POS — offline sync, inventory graph, tax tiers",
    lang: "Kotlin",
    stars: 24,
    url: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
  },
  {
    name: "video-player",
    desc: "Custom HLS player, gesture seek, adaptive bitrate",
    lang: "Kotlin",
    stars: 18,
    url: "https://github.com/moekyawaung-tech/video-player",
  },
  {
    name: "social-dashboard",
    desc: "Realtime analytics console with modular widgets",
    lang: "TypeScript",
    stars: 21,
    url: "https://github.com/moekyawaung-tech/social-dashboard",
  },
  {
    name: "pwa-app",
    desc: "Offline-first shell, cache router, sub-1.2s cold start",
    lang: "TypeScript",
    stars: 15,
    url: "https://github.com/moekyawaung-tech/pwa-app",
  },
  {
    name: "game-collection",
    desc: "Shared 60fps loop, input manager, hi-score store",
    lang: "JavaScript",
    stars: 12,
    url: "https://github.com/moekyawaung-tech/game-collection",
  },
  {
    name: "Weather-app",
    desc: "Hyperlocal forecast, radar overlay, offline cache",
    lang: "Kotlin",
    stars: 11,
    url: "https://github.com/moekyawaung-tech/Weather-app",
  },
];

export const FEATURED_APPS = [
  {
    id: "pos",
    name: "POS Suite",
    emoji: "🧾",
    blurb: "4 generations — Full → Advance → Ultimate → Pro Max",
    impact: "150+ txn/min offline",
    stack: ["Kotlin", "Room", "Compose"],
    mockup:
      "https://res.cloudinary.com/dye5qpwii/video/upload/v1779031596/Javier_Pardina_10_wttux4.mp4",
    type: "video" as const,
    repo: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
  },
  {
    id: "social",
    name: "Social Dashboard",
    emoji: "📊",
    blurb: "Live telemetry, engagement tiles, widget dock",
    impact: "Lighthouse 100",
    stack: ["React", "TS", "Charts"],
    mockup:
      "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795822/preview_dzhqvv.webp",
    type: "image" as const,
    repo: "https://github.com/moekyawaung-tech/social-dashboard",
    live: "https://moekyawaung.lovable.app",
  },
  {
    id: "player",
    name: "Video Player",
    emoji: "▶",
    blurb: "Gesture-driven Media3 pipeline with HLS ABR",
    impact: "−34% freezes",
    stack: ["Kotlin", "Media3", "Compose"],
    mockup:
      "https://res.cloudinary.com/dye5qpwii/video/upload/v1779031566/Javier_Pardina_11_r5y8no.mp4",
    type: "video" as const,
    repo: "https://github.com/moekyawaung-tech/video-player",
  },
  {
    id: "pwa",
    name: "PWA Engine",
    emoji: "⚡",
    blurb: "Installable offline shell with background sync",
    impact: "<1.2s cold start",
    stack: ["Vite", "SW", "IndexedDB"],
    mockup:
      "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763536/preview_ls5ptn.webp",
    type: "image" as const,
    repo: "https://github.com/moekyawaung-tech/pwa-app",
  },
];

export const APP_GRID = [
  { name: "Social Dashboard", emoji: "📱", status: "New", url: "https://github.com/moekyawaung-tech/social-dashboard" },
  { name: "PWA App", emoji: "📱", status: "Stable", url: "https://github.com/moekyawaung-tech/pwa-app" },
  { name: "Admin Dashboard", emoji: "📊", status: "Active", url: "https://github.com/moekyawaung-tech/social-dashboard" },
  { name: "Stock Market", emoji: "📈", status: "Stable", url: "https://moekyawaung-dev.lovable.app" },
  { name: "Game Collection", emoji: "🎮", status: "Legend", url: "https://github.com/moekyawaung-tech/game-collection" },
  { name: "Music Player", emoji: "🎵", status: "Active", url: "https://moekyaw.lovable.app" },
  { name: "Chat App", emoji: "💬", status: "Active", url: "#" },
  { name: "World Cup", emoji: "⚽", status: "Stable", url: "#" },
  { name: "E-commerce", emoji: "🛒", status: "Active", url: "https://moekyawaungmka.lovable.app" },
  { name: "Money Tracker", emoji: "💰", status: "Stable", url: "#" },
  { name: "Weather", emoji: "🌤️", status: "Stable", url: "https://github.com/moekyawaung-tech/Weather-app" },
  { name: "Crypto", emoji: "💸", status: "Active", url: "https://m-moekyaw.lovable.app" },
  { name: "Todo", emoji: "📝", status: "Stable", url: "https://github.com/moekyawaung-tech/javascript-todo" },
  { name: "Video Player", emoji: "🎯", status: "Active", url: "https://github.com/moekyawaung-tech/video-player" },
  { name: "Job Portal", emoji: "💼", status: "Stable", url: "https://github.com/moekyawaung-tech/Job-Portal-App" },
  { name: "LEGEND!", emoji: "👑", status: "Legend", url: "https://github.com/Dev-moe-kyawaung/" },
];

export const DEPLOYMENT_STEPS = [
  { id: "01", title: "Branch & Spec", detail: "Feature branch, issue link, architecture note" },
  { id: "02", title: "Build Pipeline", detail: "Gradle / Vite CI, lint, unit + UI tests" },
  { id: "03", title: "Preview Deploy", detail: "GitHub Pages / Lovable preview environments" },
  { id: "04", title: "Release Gate", detail: "Crash-free rate check, store / domain cutover" },
];

export const CERTIFICATIONS = [
  { title: "Android Architecture Mastery", issuer: "Self · Production Systems", year: "2024–26" },
  { title: "Clean Architecture & SOLID", issuer: "Applied across POS & media apps", year: "Ongoing" },
  { title: "Local-First & Offline Sync", issuer: "Retail POS deployments", year: "2025" },
  { title: "Cybersecurity Practices", issuer: "AES-256 local storage · session audits", year: "2025" },
  { title: "Lovable Partner Builder", issuer: "lovable.dev invite · 38 builds", year: "2026" },
  { title: "Firebase & Cloud Messaging", issuer: "Push, Auth, Analytics", year: "2024" },
];

export const OPEN_SOURCE = [
  { label: "GitHub Pages live sites", value: "43+", href: "https://moekyawaung-tech.github.io/" },
  { label: "Lovable app builds", value: "38", href: "https://moekyawaung.lovable.app" },
  { label: "Public repositories", value: "21+", href: "https://github.com/moekyawaung-tech/" },
  { label: "POS suite generations", value: "4", href: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max" },
];

export const IMPACT_METRICS = [
  { label: "Apps shipped", value: "16", note: "product surface" },
  { label: "Domains live", value: "43", note: "GitHub Pages" },
  { label: "Preview builds", value: "38", note: "Lovable" },
  { label: "POS generations", value: "4", note: "retail stack" },
];

export const CODE_SNIPPET = `// Offline-first sale commit (Kotlin)
suspend fun commitSale(cart: Cart): Result<Receipt> =
  withContext(Dispatchers.IO) {
    db.withTransaction {
      val id = saleDao.insert(cart.toEntity())
      inventoryDao.decrement(cart.lines)
      receiptPrinter.print(Receipt.from(id, cart))
      syncQueue.enqueue(SaleSync(id))
      Result.success(Receipt.from(id, cart))
    }
  }`;

export const ARCHITECTURE_LAYERS = [
  { name: "UI", items: ["Compose Screens", "ViewModels", "Navigation"] },
  { name: "Domain", items: ["Use Cases", "Models", "Validators"] },
  { name: "Data", items: ["Room", "Retrofit", "DataStore"] },
  { name: "Platform", items: ["Workers", "Sensors", "Printers"] },
];

export const EMAILS = [
  "moekyawaung@programmer.net",
  "moekyawaung@engineer.com",
  "moekyawaung@technologist.com",
  "moekyawaung@linuxmail.org",
  "moekyawaung@cybergal.com",
  "moekyawaung@hackermail.com",
  "moekyawaung@techie.com",
  "moekyawaung@contractor.net",
];

export const SOCIALS = [
  { name: "GitHub", url: "https://github.com/Dev-moe-kyawaung/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG" },
  { name: "Gravatar", url: "https://gravatar.com/moekyawaung2026" },
  { name: "Bluesky", url: "https://bsky.app/profile/moekyawaung96.bsky.social" },
  { name: "Vimeo", url: "https://vimeo.com/user252414232" },
];

export const GITHUB_PAGES = [
  "https://moekyawaung-tech.github.io/",
  "https://moekyawaung-developer.github.io/",
  "https://moekyawaung-cyber.github.io/",
  "https://moekyawaung-senior.github.io/",
  "https://moekyawaung-bangkok.github.io/",
  "https://Moekyawaung2026.github.io/",
  "https://moekyawaung.github.io/",
  "https://Moe-KyawAung.github.io/",
];
