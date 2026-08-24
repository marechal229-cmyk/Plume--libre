
import "../globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Plume Libre",
  description:
    "Plateforme gratuite de publication et de lecture pour auteurs indépendants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
