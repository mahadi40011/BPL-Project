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
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      {/* <Banner></Banner> */}
      <CommonElement toggle={toggle} setToggle={setToggle} purchasedPlayers={purchasedPlayers}></CommonElement>
      {
        toggle === true ? <Suspense fallback={<Loading></Loading>}>
        <AvailablePlayers playersPromise={playersPromise} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} isSelected={isSelected} setIsSelected={setIsSelected}></AvailablePlayers>
      </Suspense> : <SelectedPlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></SelectedPlayers>
      }
      
      
      
    </>
  );
}

export default App;
