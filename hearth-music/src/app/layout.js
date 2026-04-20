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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <div className="site-shell">
          <Navigation />
          <main className="page-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
