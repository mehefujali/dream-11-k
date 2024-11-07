
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Players from './components/Players/Players';
import SlectedPlayers from './components/SlectedPlayers/SlectedPlayers';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  const [activeToggleBtns, setActiveToggleBtns] = useState(false)
  const [slectedPlayer, setSlectedPlayer] = useState([])
  const [coin, setCoin] = useState(0)
  const handelAddCoin = () => {
    setCoin(coin + 55000)
    toast.success(`congrats! you won 55000 coin`)

  }
  const handleSetSlectedPlayer = (player) => {
    const isExist = slectedPlayer.find(sp => sp.id === player.id)
    if (!isExist && slectedPlayer.length < 6) {
      if (coin >= player.price) {
        setSlectedPlayer([...slectedPlayer, player])
        setCoin(coin - player.price)
        toast.success("Player slected")
      }
      else {
        toast.error("Insufficient funds")
      }
    }
    else {
      if (slectedPlayer.length === 6) {
        toast.error("Maximum player slected")
      }
      else {
        toast.error("Player already slected")
      }
    }
  }
  const handleRemoveSlectedPlayer = (id) => {
    const findPlayer = slectedPlayer.find(player => player.id === id)
    setCoin(coin + findPlayer.price)
    const newFilterPlayer = slectedPlayer.filter(player => player.id !== id)
    setSlectedPlayer(newFilterPlayer)
    toast.warning("Player removed")


  }
  const handleAddmore = () => {
    console.log("hello");
    setActiveToggleBtns(false)
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      {/* header  */}
      <header className=' px-0 sm:px-4 xl:px-0'>
        <Nav coin={coin}></Nav>
        <Hero handelAddCoin={handelAddCoin}></Hero>
      </header>
      <main>
        {/* toggle btns  */}
        <div className=' flex container mx-auto justify-between items-center mt-10 px-4 xl:px-0 '>
          <h1 className='  text-md sm:text-lg md:text-2xl font-bold'>{activeToggleBtns ? `Selected Player (${slectedPlayer.length}/6)` : "Available Players"}</h1>
          <div>
            <button onClick={() => {
              setActiveToggleBtns(false)
            }} className={` btn toggle-btn1 ${activeToggleBtns ? 'bg-transparent hover:bg-transparent text-gray-500' : 'bg-yellow-400 hover:bg-yellow-500'}  btn-sm md:btn-md`}>Available</button>
            <button onClick={() => {
              setActiveToggleBtns(true)
            }} className={` btn toggle-btn2 ${activeToggleBtns ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-transparent hover:bg-transparent text-gray-500'} btn-sm  md:btn-md `}>
              {`Selected (${slectedPlayer.length})`}</button>
          </div>
        </div>
        {/* toggle btns end  */}

        <div>
          {activeToggleBtns ? <SlectedPlayers handleAddmore={handleAddmore} slectedPlayer={slectedPlayer} handleRemoveSlectedPlayer={handleRemoveSlectedPlayer}></SlectedPlayers> : <Players handleSetSlectedPlayer={handleSetSlectedPlayer}></Players>}
        </div>
      </main >
      <footer>
        <div className=' relative top-48'><Newsletter></Newsletter></div>
        <div className=' bg-black min-h-[650px]'>
          <Footer></Footer>
        </div>
      </footer>

    </>
  )
}

export default App
