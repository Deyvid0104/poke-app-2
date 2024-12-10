'use client'
import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "@/styles/nav.module.css";
import Image from "next/image";
// import Link from 'next/link';
import { getDictionary } from "@/componentes/Diccionario"; // Asegúrate de importar el diccionario

const Navegacion = () => {
  // const Navegacion = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState('es'); // Estado para el idioma

  const onLanguageChange = (lang) => {
    setLanguage(lang);
    // onLanguageChange(lang); // Llama a la función pasada como prop
  };

  const dictionary = getDictionary(language); // Obtener el diccionario según el idioma


// const Navegacion = ({ onGenerationClick }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className={styles.nav}>
       {dictionary.home} {/* Usar el título del diccionario */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/pokemon/gen1" className={styles.gen}>{dictionary.gen1}</Nav.Link>
          <Nav.Link href="/pokemon/gen2" className={styles.gen}>{dictionary.gen2}</Nav.Link>
          <Nav.Link href="/pokemon/gen3" className={styles.gen}>{dictionary.gen3}</Nav.Link>
        </Nav>
        <div className={styles.languageButtons}>
          <button onClick={() => onLanguageChange('es')}>
            <Image src="/es.png" alt="Español" width={30} height={30} />
          </button>
          <button onClick={() => onLanguageChange('en')}>
            <Image src="/uk.png" alt="English" width={30} height={30} />
          </button>
          <button onClick={() => onLanguageChange('fr')}>
            <Image src="/fr.png" alt="Français" width={30} height={30} />
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
