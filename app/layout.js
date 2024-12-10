import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "@/componentes/Header";
import  "bootstrap/dist/css/bootstrap.min.css"
import Footer from "@/componentes/Footer";
import Navegacion from "@/componentes/Nav";
import  "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "./AddBootstrap";
// import { LanguageProvider } from "@/context/LanguageContext"; // Asegúrate de importar el contexto
import { getDictionary } from "@/componentes/Diccionario";
// import { Icon } from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Poke API",
  description: "En esta pagina vamos a encontrar una poke API que nos permitira buscar y mostrar los datos de los pokemones",
};

export default function RootLayout({ children, language }) {
  const dictionary = getDictionary(language); // Obtener el diccionario según el idioma

  return (
    // <LanguageProvider>
    <html lang="es">
      <head>
        <link rel="icon" href="/icono1.png" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <AddBootstrap/>
        <Navegacion/>
        {children}
        <Footer/>
      </body>
    </html>
    // </LanguageProvider>
  );
}
