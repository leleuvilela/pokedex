import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../services/api";
import { Container, Type } from "./styles";
import typeColors from "../../styles/typeColors";
import Move from "./Move";
import Evolutions from "./Evolutions";

function Info() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonSpecie, setPokemonSpecie] = useState({});
  const [qntMoves, setQntMoves] = useState(6);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getPokemon = async () => {
    const res = await api.get(`/pokemon/${id}`);
    setPokemon(res.data);
    const resSpecie = await api.get(`/pokemon-species/${id}`);
    setPokemonSpecie(resSpecie.data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      {!loading ? (
        <>
          <div style={{width: '100%', display: 'flex'}}>
            <Link to="/" className="link">{'Voltar'}</Link>
          </div>
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
              <div className="stats">
                <table style={{margin: 'auto'}}>
                  <tr>
                    <th>Atributo</th>
                    <th>Nível</th>
                  </tr>
                {pokemon.stats.map((stat) => (
                  <tr>
                    <td>
                      {stat.stat.name}
                    </td>
                    <td>
                      {stat.base_stat}
                    </td>
                  </tr>
                ))}
                </table>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="info">
              <h2>Movimentos</h2>
              <div className="moves">
                {pokemon.moves.slice(0, qntMoves).map((move) => (
                  <Move url={move.move.url} className="grid" />
                ))}
                <div style={{justifyContent: 'center', width: '100%'}}>
                  <button className="link" onClick={() => setQntMoves(999)}>Ver Todos</button>
                </div>
              </div>
            </div>
            <div className="info">
              <h2>Evoluções</h2>
              <div className="types">
                <Evolutions url={pokemonSpecie.evolution_chain.url} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Container>
  );
}

export default Info;
