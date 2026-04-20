export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/commands", label: "Commands" },
  { href: "/premium", label: "Premium" },
  { href: "/support", label: "Support" },
];

export const quickStats = [
  { label: "Live Servers", value: "6,500+" },
  { label: "Tracks Streamed Daily", value: "1.2M" },
  { label: "Voice Stability", value: "99.99%" },
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
      "Use the invite button, approve permissions, then type /play once you are in a voice channel.",
  },
  {
    question: "Does Hearth support slash commands?",
    answer:
      "Yes. Hearth is fully slash-command-first for a cleaner and faster Discord experience.",
  },
  {
    question: "Where can I report issues?",
    answer:
      "Join the support server and open a help ticket with logs or screenshots for fast assistance.",
  },
];
