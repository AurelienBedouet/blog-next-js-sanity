import Footer from "../../components/global/Footer";
import Navbar from "../../components/global/Navbar";
import "../../styles/globals.css";
import { Inter } from "@next/font/google";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "block",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body>
        <Navbar />
        <div className="mt-20">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
