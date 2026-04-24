import { Oxanium, Sora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const displayFont = Oxanium({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Sora({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Hearth Music Bot",
    template: "%s | Hearth Music Bot",
  },
  description:
    "A multi-page showcase for Hearth, the Discord music bot built for smooth playback and lively communities.",
  icons: {
    icon: "/Hearth-Music.png",
    shortcut: "/Hearth-Music.png",
    apple: "/Hearth-Music.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <div className="site-shell">
          <div className="music-bg" aria-hidden="true">
            <span className="ambient-grid" />
            <span className="ambient-glow ambient-glow-1" />
            <span className="ambient-glow ambient-glow-2" />
            <span className="ambient-glow ambient-glow-3" />
            <span className="ambient-sweep" />
            <span className="music-orb orb-1" />
            <span className="music-orb orb-2" />
            <span className="music-orb orb-3" />
            <span className="music-note note-1">♪</span>
            <span className="music-note note-2">♫</span>
            <span className="music-note note-3">♬</span>
          </div>
          <Navigation />
          <main className="page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
