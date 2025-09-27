import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Banner from "./components/Banner/Banner";
import CommonElement from "./components/CommonElement";
import Loading from "./components/Loading";


const playersPromise = fetch("/Players.json").then(res => res.json())



function App() {

  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(6000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <CommonElement toggle={toggle} setToggle={setToggle} purchasedPlayers={purchasedPlayers}></CommonElement>
      {
        toggle === true ? <Suspense fallback={<Loading></Loading>}>
        <AvailablePlayers playersPromise={playersPromise} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} ></AvailablePlayers>
      </Suspense> : <SelectedPlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} setToggle={setToggle}></SelectedPlayers>
      }
      
      
      
      
    </>
  );
}

export default App;
