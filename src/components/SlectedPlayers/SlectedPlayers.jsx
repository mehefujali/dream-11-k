import SlectedPlayer from "../SlectedPlayer/SlectedPlayer";
import PropTypes from "prop-types";
const SlectedPlayers = ({ slectedPlayer, handleRemoveSlectedPlayer, handleAddmore }) => {
      return (
            <div className="mt-8 container mx-auto ">
                  <div className="  flex flex-col min-h-96 gap-4">
                        {slectedPlayer.map(player => <SlectedPlayer
                              handleRemoveSlectedPlayer={handleRemoveSlectedPlayer}
                              key={player.id}
                              player={player}
                        ></SlectedPlayer>)}
                  </div>
                  <div className=" border-yellow-400 border-2 w-fit  p-1 rounded-xl mt-6">
                        <button onClick={handleAddmore} className=" btn btn-sm bg-yellow-400 hover:bg-yellow-500 ">Add More Player</button>
                  </div>
            </div>
      );
};

SlectedPlayers.propTypes = {
      slectedPlayer: PropTypes.array.isRequired,
      handleRemoveSlectedPlayer: PropTypes.func.isRequired,
      handleAddmore: PropTypes.func.isRequired,
}
export default SlectedPlayers;