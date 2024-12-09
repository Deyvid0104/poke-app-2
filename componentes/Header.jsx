import React from "react";
import styles from "@/styles/header.module.css";
import Image from "next/image";
// import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      
      {/* <Link rel="preload" href="/logo_pokemon.png" as="image" /> */}
      
      <Image
        className={styles.logo}
        src="/logo_pokemon.png"
        alt="Logo Pokémon"
        width={1080} 
        height={720}
        priority
      />
    </header>
  );
}

export default Header;
