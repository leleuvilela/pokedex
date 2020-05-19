import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import typeColors from "../../../styles/typeColors";
import Axios from "axios";

function Move({ url, ...rest }) {
  const [move, setMove] = useState({});
  const [loading, setLoading] = useState(true);

  const getMove = async (url) => {
    const res = await Axios.get(url);
    setMove(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getMove(url);
  }, []);

  return !loading ? (
    <Container {...rest}>
      <div
        className="move"
        style={{ backgroundColor: typeColors[move.type.name] }}
      >
        <div>
          {move.names
            .filter((name) => name.language.name == "en")
            .map((move) => move.name)}
        </div>
      </div>
    </Container>
  ) : null;
}

export default Move;
