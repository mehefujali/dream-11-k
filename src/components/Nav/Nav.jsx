import PropTypes from "prop-types";
const Nav = ({ coin }) => {
      return (
            <nav className=' container mx-auto '>
                  <div className="navbar ">
                        <div className="navbar-start">

                              <img src="https://i.ibb.co/6gSQB9f/logo.png" alt="" />
                        </div>



                        <div className="navbar-end">
                              <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1 ml-4 text-gray-500">
                                          <li><a>Home</a></li>
                                          <li><a>Fixture</a></li>
                                          <li><a>Teams</a></li>
                                          <li><a>Schedules</a></li>
                                    </ul>
                              </div>
                              <a className="btn bg-transparent border-2 font-semibold">{coin} Coin 🪙</a>
                        </div>
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                              </div>
                              <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  right-0 text-gray-500">
                                    <li><a>Home</a></li>
                                    <li><a>Fixture</a></li>
                                    <li><a>Teams</a></li>
                                    <li><a>Schedules</a></li>

                              </ul>
                        </div>
                  </div>
            </nav>
      );
};
Nav.propTypes = {
      coin: PropTypes.number.isRequired
}
export default Nav;