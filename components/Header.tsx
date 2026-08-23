"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="logo">
          Plume Libre
        </Link>

        <nav className="navigation">
          <Link href="/">Accueil</Link>
          <Link href="/stories">Histoires</Link>
          <Link href="/write">Écrire</Link>
          <Link href="/login">Connexion</Link>
        </nav>
      </div>
    </header>
  );
}
