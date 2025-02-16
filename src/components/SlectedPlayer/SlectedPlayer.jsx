import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
const SlectedPlayer = ({ player, handleRemoveSlectedPlayer }) => {
      const { player_name, image, role, price } = player
      return (
            <div className="border rounded-xl flex justify-between items-center p-4">
                  <div className=" flex items-center gap-4 ">
                        <img className=" w-24 h-24 rounded-lg" src={image} alt="" />
                        <div className=" flex h-full flex-col justify-between">
                              <h1 className=" text-xl font-bold">{player_name}</h1>
                              <h3 className=" text-gray-500">{role}</h3>
                              <h3 className=" text-gray-500">${price}</h3>
                        </div>
                  </div>
                  <RiDeleteBin6Line onClick={() => { handleRemoveSlectedPlayer(player.id) }} className=" text-3xl cursor-pointer mr-3 text-red-500" />
            </div>
      );
};

SlectedPlayer.propTypes = {
      player: PropTypes.object.isRequired,
      handleRemoveSlectedPlayer: PropTypes.func.isRequired,
}

export default SlectedPlayer;