import React, { useState, useEffect } from "react";
import Axios from "axios";

import PokemonCard from "../../../components/PokemonCard";

function Evolutions({ url }) {
  const [evolution, setEvolution] = useState({});
  const [loading, setLoading] = useState(true);

  const getEvolution = async (url) => {
    console.log(url)
    const res = await Axios.get(url);
    setEvolution(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getEvolution(url);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {!loading &&
        evolution.chain.evolves_to.map((evolve) => (
          <>
            <PokemonCard
              data={{
                url: `https://pokeapi.co/api/v2/pokemon/${
                  evolve.species.url.split("/").reverse()[1]
                }`,
              }}
            />
            {evolve.evolves_to &&
              evolve.evolves_to.map((ev) => (
                <PokemonCard
                  data={{
                    url: `https://pokeapi.co/api/v2/pokemon/${
                      ev.species.url.split("/").reverse()[1]
                    }`,
                  }}
                />
              ))}
          </>
        ))}
    </div>
  );
}

export default Evolutions;
