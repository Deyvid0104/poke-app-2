'use client';
import React, { useEffect, useState } from 'react';
import { Pokemon } from '@/componentes/Pokemon';
import Cargando from '@/componentes/Cargando';
import styles from '@/styles/gen.module.css';

const GenPage = ({ params }) => {
  const gen = React.use(params).gen; // Desenvuelve los parámetros

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const promises = [];
      const uniqueIds = new Set();
      let startId, endId;

      // Define los rangos de IDs según la generación
      if (gen === 'gen1') {
        startId = 1;
        endId = 151;
      } else if (gen === 'gen2') {
        startId = 152;
        endId = 251;
      } else if (gen === 'gen3') {
        startId = 252;
        endId = 386;
      } else {
        setError('Generación no válida.');
        setLoading(false);
        return;
      }

      // Obtener 10 IDs únicos
      while (uniqueIds.size < 10) {
        const randomId = Math.floor(Math.random() * (endId - startId + 1)) + startId;
        if (!uniqueIds.has(randomId)) {
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

    fetchPokemons();
  }, [gen]);

  if (loading) return <Cargando />;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.pokemoncards}>
      {pokemons.map(pokemon => (
        <div className={styles.card} key={pokemon.id}>
          <Pokemon id={pokemon.id} generation={gen} />
        </div>
      ))}
    </div>
  );
};

export default GenPage;