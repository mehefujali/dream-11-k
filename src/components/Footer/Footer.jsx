
const Footer = () => {
      return (
            <div>
                  <div className=" flex justify-center pt-44">
                        <img src="https://i.ibb.co/jVjprFv/logo-footer.png" alt="" />
                  </div>
                  <div>
                        <footer className="footer  text-gray-400  container mx-auto justify-between mt-8 p-10">

                              <nav>
                                    <h6 className=" font-bold text-white">About Us</h6>
                                    <p className=" max-w-44">
                                          We are a passionate team dedicated to providing the best services to our customers.
                                    </p>
                              </nav>
                              <nav>
                                    <h6 className=" font-bold text-white">Quick Links</h6>
                                    <ul className=" flex flex-col gap-1">
                                          <a className="link link-hover">Home</a>
                                          <a className="link link-hover">Services</a>
                                          <a className="link link-hover">About</a>
                                          <a className="link link-hover">Content</a>
                                    </ul>
                              </nav>
                              <form>
                                    <h6 className="font-bold text-white">Subscribe</h6>
                                    <p className=" max-w-44">Subscribe to our newsletter for the latest updates.</p>
                                    <fieldset className="form-control w-80">

                                          <div className="join w-8/12">
                                                <input
                                                      type="text"
                                                      placeholder="Enter your email"
                                                      className="input input-sm md:input-md text-black input-bordered join-item" />
                                                <button className="btn md:btn-md btn-sm bg-gradient-to-l  from-yellow-400 to-pink-400  join-item">Subscribe</button>
                                          </div>
                                    </fieldset>
                              </form>
                        </footer>
                  </div>
                  <div className=" border-b border-gray-400 border-opacity-30"></div>
                  <footer className="footer footer-center  text-gray-500 p-4">
                        <aside>
                              <p className=" md:text-lg">Copyright © {new Date().getFullYear()} - All right reserved by Mehefuj Ali</p>
                        </aside>
                  </footer>
            </div>
      );
};

export default Footer;