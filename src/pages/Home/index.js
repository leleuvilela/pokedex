import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import PokemonCard from '../../components/PokemonCard';
import api from '../../services/api';


function Home() {
  const [pokemons, setPokemons] = useState({ results: [] });

  const getPokemons = async () => {
    const res = await api.get('/pokemon');
    setPokemons(res.data);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container>
      {pokemons.results.map((pokemon) => <PokemonCard data={pokemon} />)}
    </Container>
  );
}

export default Home;
