import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({ handleSetSlectedPlayer }) => {
      const [players, setPlayers] = useState([])
      useEffect(() => {
            fetch("players.json")
                  .then(res => res.json())
                  .then(data => setPlayers(data))
      }, [])


      return (
            <div className=" container mx-auto mt-12 px-4 xl:px-0 ">
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
                        {players.map(player => <Player
                              handleSetSlectedPlayer={handleSetSlectedPlayer}
                              key={player.id}
                              player={player}
                        ></Player>)}
                  </div>
            </div>
      );
};

Players.propTypes = {
      handleSetSlectedPlayer: PropTypes.func.isRequired
}

export default Players;