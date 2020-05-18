import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

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
      <Container style={{ backgroundColor: colors[pokemon.types[0].type.name] }}>
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
