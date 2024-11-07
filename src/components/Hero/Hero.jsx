import './hero.css'
import PropTypes from 'prop-types';
const Hero = ({ handelAddCoin }) => {

      return (
            <div className=' mt-10 heros container mx-auto py-14  bg-cover  md:rounded-xl '>
                  <div className="flex flex-col items-center justify-center gap-3 w-11/12 mx-auto text-center">
                        <img className='' src="https://i.ibb.co/zsbp12n/banner-main.png" alt="" />
                        <h1 className=' text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <h3 className=' text-2xl font-thin text-gray-200'>Beyond Boundaries Beyond Limits</h3>
                        <button className=' btn bg-gradient-to-l  from-yellow-400 to-pink-400 border-double hero-btn rounded-xl border-yellow-300' onClick={handelAddCoin}>Claim Free Credit</button>
                  </div>
            </div>
      );
};
Hero.propTypes = {
      handelAddCoin: PropTypes.func.isRequired
}
export default Hero;