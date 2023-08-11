import DestinationPageProvider from "@/components/Context/DestinationPageContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import type { Metadata } from "next";
import "./globals.css";

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
          <DestinationPageProvider>
            <Header />
            {children}
            <Footer />
          </DestinationPageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
