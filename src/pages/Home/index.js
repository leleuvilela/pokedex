import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import PokemonCard from '../../components/PokemonCard';
import api from '../../services/api';
import Axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';


function Home() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsRes, setPokemonsRes] = useState({ results: [] });
  const [hasMore, setHasMore] = useState(true);

  const getPokemons = async () => {
    setLoading(true)
    const res = await api.get('/pokemon', { limit: 200, offset: 0});
    setPokemonsRes(res.data);
    setPokemons([...pokemons, ...res.data.results])
    setLoading(false)
  };

  const getPokemonsNext = async (url) => {
    setLoading(true)
    if(url){
      console.log(url)
      if(pokemons.length >= pokemonsRes.count){
        setHasMore(false)
        return
      }
      const res = await Axios.get(url);
      setPokemonsRes(res.data);
      setPokemons([...pokemons, ...res.data.results]);
    }
    setLoading(false)
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container>
      <InfiniteScroll
          dataLength={pokemons.length}
          next={() => getPokemonsNext(pokemonsRes.next)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {pokemons.map((pokemon) => <PokemonCard data={pokemon} />)}
        </InfiniteScroll>
    </Container>
  );
}

export default Home;
