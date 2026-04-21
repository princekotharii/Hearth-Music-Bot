export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/documentation", label: "Documentation" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export const quickStats = [
  { label: "Uptime", value: "99.99%" },
  { label: "Average Ping", value: "42ms" },
];

export const coreFeatures = [
  {
    title: "Crystal-Clear Playback",
    description:
      "Stream studio-clean audio in Discord voice channels with stable buffering and punchy output.",
  },
  {
    title: "Smart Queue Tools",
    description:
      "Reorder tracks, run vote-skip, and loop whole setlists so every room keeps the groove going.",
  },
  {
    title: "Platform Flex",
    description:
      "Blend songs from multiple platforms into one queue and keep transitions smooth like a live DJ set.",
  },
  {
    title: "Moderation Friendly",
    description:
      "DJ roles, channel locks, and command permissions keep parties controlled without killing the energy.",
  },
  {
    title: "Custom Themes",
    description:
      "Style command embeds and bot responses so Hearth matches your community's sonic identity.",
  },
  {
    title: "Always Improving",
    description:
      "Frequent tuning updates improve quality, lower latency, and add features requested by real listeners.",
  },
];

export const commandGroups = [
  {
    title: "Deck Controls",
    commands: ["/play", "/pause", "/resume", "/skip", "/stop"],
  },
  {
    title: "Setlist Queue",
    commands: ["/queue", "/remove", "/move", "/shuffle", "/loop"],
  },
  {
    title: "Stage Settings",
    commands: ["/settings", "/djrole", "/bind", "/autoplay", "/voteskip"],
  },
];

export const plans = [
  {
    name: "Starter",
    price: "Free",
    summary: "Perfect for new communities starting daily music sessions.",
    perks: ["Core deck commands", "Queue and loop tools", "Community support"],
  },
  {
    name: "Flame",
    price: "$5 / month",
    summary: "Best for active servers that run constant listening rooms.",
    perks: ["Priority voice nodes", "Advanced EQ filters", "Custom branding"],
  },
  {
    name: "Inferno",
    price: "$12 / month",
    summary: "For large communities that demand peak audio reliability.",
    perks: ["Dedicated performance lane", "Early feature drops", "Direct support line"],
  },
];

export const supportFaq = [
  {
    question: "How do I invite Hearth?",
    answer:
      "Use the invite button, approve permissions, then type .play once you are in a voice channel.",
  },
  {
    question: "Does Hearth use a prefix?",
    answer:
      "Yes. Hearth uses the default prefix . for a faster, familiar Discord music workflow.",
  },
  {
    question: "Can I control who uses music commands?",
    answer:
      "Yes. You can manage DJ roles, restrict channels, and limit who can control playback.",
  },
  {
    question: "How do I make the queue cleaner?",
    answer:
      "Use /shuffle, /remove, and /move to keep the setlist organized during long sessions.",
  },
  {
    question: "Does Hearth work in multiple servers?",
    answer:
      "Yes. Hearth can be invited to multiple Discord servers and configured separately.",
  },
  {
    question: "Where can I report issues?",
    answer:
      "Join the support server and open a help ticket with logs or screenshots for fast assistance.",
  },
  {
    question: "Can I tune the audio quality?",
    answer:
      "Yes. Hearth supports filters, volume controls, and playback settings for a better listening vibe.",
  },
];

export const docsSections = [
  {
    title: "Quick Setup",
    items: ["Invite Hearth", "Set voice permissions", "Run .play in a channel"],
  },
  {
    title: "Playback Guide",
    items: [".pause and .resume", "Queue reorder", ".loop and .shuffle controls"],
  },
  {
    title: "Audio Controls",
    items: ["EQ tuning", "Volume presets", "Auto-DJ and filters"],
  },
  {
    title: "Troubleshooting",
    items: ["Bot not joining", "Permissions missing", "Queue not responding"],
  },
];

export const aboutStats = [
  { label: "Music Rooms Live", value: "6,500+" },
  { label: "Tracks Streamed", value: "1.2M" },
  { label: "Average Response", value: "< 120ms" },
];

export const contactChannels = [
  { title: "Support Server", detail: "Join our Discord help space for fast setup help." },
  { title: "Email", detail: "Reach the team for partnerships and server-specific help." },
  { title: "Feature Requests", detail: "Send ideas for new queue tools, filters, or themes." },
];

export const aboutHighlights = [
  {
    title: "Built for live music rooms",
    description: "Designed to keep community music sessions smooth, warm, and responsive.",
  },
  {
    title: "Visual vibe matters",
    description: "Every screen uses music-inspired cards, glowing accents, and strong hierarchy.",
  },
  {
    title: "Fast commands, clean control",
    description: "Slash-first interactions make it easy to run a server like a live show.",
  },
];
