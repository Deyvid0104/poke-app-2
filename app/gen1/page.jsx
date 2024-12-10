'use client';
import React, { useEffect, useState } from 'react';
import { Pokemon } from '@/componentes/Pokemon';
// import Navegacion from "@/componentes/Nav";
import styles from '@/styles/gen.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cargando from '@/componentes/Cargando';

const Gen1 = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomPokemons = async () => {
      const promises = [];
      const uniqueIds = new Set(); // Usar un conjunto para almacenar IDs únicos

      while (uniqueIds.size < 10) { // Asegúrate de obtener 10 IDs únicos
        const randomId = Math.floor(Math.random() * 151) + 1; // Cambia el rango según la generación
        if (!uniqueIds.has(randomId)) { // Verifica si el ID ya fue generado
          uniqueIds.add(randomId);
          promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json()));
        }
      }

      try {
        const results = await Promise.all(promises);
        setPokemons(results);
      } catch (err) {
        setError('Error al obtener los Pokémon.');
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPokemons();
  }, []);

  if (loading) return <Cargando/>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {/* <Navegacion /> */}
      <div className={styles.pokemoncards}>
        {pokemons.map(pokemon => (
          <div className={styles.card} key={pokemon.id}> {/* Asegúrate de que pokemon.id sea único */}
            <Pokemon id={pokemon.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gen1;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Pokemon } from '@/componentes/Pokemon';
// import Navegacion from '@/componentes/Nav';
// import styles from '@/styles/gen.module.css'; // Importar el módulo CSS

// const Gen1 = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRandomPokemons = async () => {
//       const promises = [];
//       for (let i = 0; i < 10; i++) {
//         const randomId = Math.floor(Math.random() * 151) + 1;
//         promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json()));
//       }
//       try {
//         const results = await Promise.all(promises);
//         setPokemons(results);
//       } catch (err) {
//         setError('Error al obtener los Pokémon.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRandomPokemons();
//   }, []);

//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <>
//     <Navegacion/>
//     <div className={styles.pokemoncards}>
//       {pokemons.map(pokemon => (
//         <div className={styles.card} key={pokemon.id}>
//           <Pokemon id={pokemon.id} />
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default Gen1;