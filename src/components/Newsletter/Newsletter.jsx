import './Newsletter.css'
const Newsletter = () => {
      return (
            <div className=" container mx-auto mt-12 mb-12">
                  <div className=' p-6 border-white border-2 rounded-xl w-11/12  md:w-8/12 mx-auto bg-white bg-opacity-20 '>
                        <div className='news-letter  py-20 text-center flex flex-col gap-4 rounded-xl bg-cover '>
                              <h1 className=' text-2xl md:text-4xl font-bold'>Subscribe to our Newsletter</h1>
                              <h3 className=' text-sm md:text-xl font-thin text-gray-500'>Get the latest updates and news right in your inbox!</h3>
                              <div className=' flex flex-col md:flex-row items-center gap-2 justify-center'>
                                    <input className=' input focus:outline-none border-gray-200 focus:shadow-md' placeholder='Enter your email ' type="text" name="" id="" /> <button className=' btn bg-gradient-to-l  from-yellow-400 to-pink-400 hover:shadow-md'>Subscribe</button>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Newsletter;