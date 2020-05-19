import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import typeColors from '../../styles/typeColors'

function PokemonCard({ data }) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const getPokemon = async (url) => {
    const res = await Axios.get(url);
    setPokemon(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon(data.url);
  }, []);

  let result;

  if (!loading) {
    result = (
      <Link to={`/${pokemon.id}`}>
      <Container style={{ backgroundColor: typeColors[pokemon.types[0].type.name] }}>
        <div className="img-container">
          <img src={pokemon.sprites.front_default} alt="Bulbasaur" />
        </div>
        <div className="info">
          <span className="number">
            #
            {pokemon.id}
          </span>
          <h3 className="name">{pokemon.name}</h3>
          <small className="type">
            Type:
            <span>{pokemon.types[0].type.name}</span>
          </small>
        </div>
      </Container>
      </Link>
    );
  } else {
    result = <></>;
  }

  return result;
}

export default PokemonCard;
