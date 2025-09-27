import React from 'react';
import binImg from "../assets/bin.png"

const PurchasedPlayer = ({purchasedPlayer, setPurchasedPlayers, purchasedPlayers, availableBalance, setAvailableBalance}) => {

  const {playerImage, playerType, playerName, playerPrice} = purchasedPlayer
  const price = parseInt(playerPrice.split("$").join("").split(",").join(""))

  const handleClicked = () => {
    const filteredData = purchasedPlayers.filter(singlePlayer => singlePlayer.playerName !== playerName)
    console.log(filteredData)
    setPurchasedPlayers([...filteredData])
    setAvailableBalance(availableBalance + price)
  }

  return (
    <div className='flex items-center justify-between border border-gray-300 rounded-xl p-6 '>
      <div className='flex items-center justify-center gap-6'>
        <img src={playerImage} alt="" className='w-20 h-20 object-cover rounded-lg'/>
        <div>
          <h1 className='font-bold text-2xl'>{playerName}</h1>
          <p className='text-lg'>{playerType}</p>
        </div>
      </div>
      <img onClick={handleClicked} src={binImg} alt="" className='w-10 h-10 cursor-pointer'/>
    </div>
  );
};

export default PurchasedPlayer;