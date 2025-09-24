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

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <CommonElement toggle={toggle} setToggle={setToggle}></CommonElement>
      {
        toggle === true ? <Suspense fallback={<Loading></Loading>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayers></SelectedPlayers>
      }
      
      
      
    </>
  );
}

export default App;
