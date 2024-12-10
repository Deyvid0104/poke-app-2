import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/navigation"; // Hook para redirigir rutas dinámicas
import styles from "@/styles/pokemon.module.css";

export const Pokemon = ({ id, generation }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter(); // Hook de navegación

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener el Pokémon");
        }
        const data = await response.json();
        setPokemon({
          id: data.id,
          nombre: data.name,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPokemon();
  }, [id]);

  const handleNavigate = () => {
    router.push(`/pokemon/${generation}/${pokemon.id}`); // Redirige a la ruta dinámica
  };

  if (error) return <div>Error: {error}</div>;
  if (!pokemon) return null;

  return (
    <>
      <Card className={styles.card}>
        <Card.Img
          variant="top"
          src={pokemon.img}
          alt={pokemon.nombre}
          className={styles.img}
        />
        <Card.Body>
          <Card.Title className={styles.nombre}>{pokemon.nombre}</Card.Title>
          <Button
            className={styles.boton}
            variant="primary"
            onClick={handleNavigate}
          >
            Saber más...
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};



// import React, { useState, useEffect } from 'react';
// import { Button, Card } from 'react-bootstrap';
// import styles from '../styles/pokemon.module.css';
// import PokeModal from './Modal';

// export const Pokemon = ({ id }) => {
//     const [pokemon, setPokemon] = useState(null);
//     const [error, setError] = useState(null);
//     const [showModal, setShowModal] = useState(false); // Estado para manejar la visibilidad del modal

//     useEffect(() => {
//         const fetchPokemon = async () => {
//             try {
//                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//                 if (!response.ok) {
//                     throw new Error('Error al obtener el Pokémon');
//                 }
//                 const data = await response.json();
//                 setPokemon({
//                     id: data.id,
//                     nombre: data.name,
//                     hp: data.stats[0].base_stat,
//                     ataque: data.stats[1].base_stat,
//                     defensa: data.stats[2].base_stat,
//                     img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png",
//                 });
//             } catch (err) {
//                 setError(err.message);
//             }
//         };

//         fetchPokemon();
//     }, [id]);

//     const handleShow = () => setShowModal(true); // Función para mostrar el modal
//     const handleClose = () => setShowModal(false); // Función para cerrar el modal

//     if (error) return <div>Error: {error}</div>;
//     if (!pokemon) return null;

//     return (
//         <>
//             <Card className={styles.card}>
//                 <Card.Img variant="top" src={pokemon.img} alt={pokemon.nombre} className={styles.img}/>
//                 <Card.Body>
//                     <Card.Title className={styles.nombre}>{pokemon.nombre}</Card.Title>
//                     {/* <Card.Text className={styles.atributo}>ID: {pokemon.id}</Card.Text>
//                     <Card.Text className={styles.atributo}>HP: {pokemon.hp}</Card.Text>
//                     <Card.Text className={styles.atributo}>Ataque: {pokemon.ataque}</Card.Text>
//                     <Card.Text className={styles.atributo}>Defensa: {pokemon.defensa}</Card.Text> */}
//                     <Button className={styles.boton} variant="primary" onClick={handleShow}>Saber más...</Button>
//                 </Card.Body>
//             </Card>

//             {/* Modal para mostrar más información del Pokémon */}
//             <PokeModal show={showModal} handleClose={handleClose} pokemon={pokemon} />
//         </>
//     );
// };