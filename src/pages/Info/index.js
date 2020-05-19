import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import { Container, Type } from "./styles";
import typeColors from "../../styles/typeColors";
import Move from "./Move";

function Info() {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getPokemon = async () => {
    const res = await api.get(`/pokemon/${id}`);
    setPokemon(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      {!loading ? (
        <>
          <div className="header">
            <div className="container">
              <div class="preview">
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
              </div>

              <div class="title">
                <h1 class="">{pokemon.name}</h1>
                <h2>#{pokemon.id}</h2>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="info">
              <h2>Tipo do Pokémon</h2>
              <div className="types">
                {pokemon.types.map((type) => (
                  <Type style={{ backgroundColor: typeColors[type.type.name] }}>
                    {type.type.name}
                  </Type>
                ))}
              </div>
            </div>
            <div className="info">
              <h2>Atributos Iniciais</h2>
              <div className="types">
                {pokemon.stats.map((stat) => (
                  <div>
                    {stat.stat.name}: {stat.base_stat}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="info">
              <h2>Primeiros Movimentos</h2>
              <div className="moves">
                {pokemon.moves.slice(0, 6).map((move) => (
                  <Move url={move.move.url} className="grid" />
                ))}
              </div>
            </div>
            <div className="info">
              <h2>Evoluções</h2>
              <div className="types">
                {pokemon.types.map((type) => (
                  <Type style={{ backgroundColor: typeColors[type.type.name] }}>
                    {type.type.name}
                  </Type>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Container>
  );
}

export default Info;
