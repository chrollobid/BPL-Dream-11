

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import { ToastContainer } from 'react-toastify'
const fetchPlayer = async () => {
  const res = await fetch ('/public/playerData.json')
  return res.json();
}



function App() {
  const [ coin, setCoin] = useState(50)
const playersPromise = fetchPlayer()

  return (
    <>
    <Navbar coin={coin}></Navbar>
<Banner/>
<Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>

<Players setCoin={setCoin} playersPromise={playersPromise} coin={coin} ></Players>
</Suspense>
<ToastContainer></ToastContainer>
    </>
  )
}

export default App
