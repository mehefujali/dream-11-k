import PropTypes from "prop-types";
import { IoPerson } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
const Player = ({ player, handleSetSlectedPlayer }) => {
      const { player_name, image, country, role, rating, batting_style, price } = player
      return (
            <div className=" p-6 rounded-xl border-2 flex flex-col justify-between gap-2">
                  <img className="h-80 object-cover rounded-xl object-center w-full" src={image} alt="" />
                  <h1 className=" text-xl font-bold flex gap-2 items-center"><IoPerson /> {player_name}</h1>
                  <div className=" flex items-center justify-between w-full">
                        <h3 className=" text-md text-gray-400 font-thin flex gap-2 items-center"><FaFlag /> {country}</h3>
                        <button className=" px-2 py-1 rounded-lg bg-gray-200">{role}</button>
                  </div>
                  <div className=" border-b-2 my-3"></div>
                  <h1 className=" font-bold text-md ">Rating : {rating} </h1>
                  <h1 className=" text-md font-bold">{batting_style}</h1>
                  <div className=" flex text-md font-bold justify-between items-center">
                        <h1>Price : ${price}</h1>
                        <button onClick={() => {
                              handleSetSlectedPlayer(player)
                        }} className=" btn btn-outline btn-sm border-gray-400">Choose Player</button>
                  </div>
            </div>
      );
};

Player.propTypes = {
      player: PropTypes.object.isRequired,
      handleSetSlectedPlayer: PropTypes.func.isRequired,
}

export default Player;