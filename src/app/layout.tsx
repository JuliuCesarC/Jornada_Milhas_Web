import Header from "@/components/Header";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { DestinationProvider } from "@/components/HomePage/Context/DestinationContext";

export const metadata: Metadata = {
  title: "Jornada Milhas",
  description: "A sua agencia de viagens!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeRegistry>
          <DestinationProvider>
            <Header />
            {children}
            <Footer />
          </DestinationProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
