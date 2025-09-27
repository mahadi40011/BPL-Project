import React, { Suspense, use } from 'react';
import Player from "../Player/Player"

const AvailablePlayers = ({playersPromise, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers}) => {

  const players = use(playersPromise)

  return (
    <div className='w-10/12 mx-auto grid grid-cols-3 gap-5 mt-8'>
      {
      players.map((player, index) => <Player key={index} player={player} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></Player> )
      }
    </div>
  );
};

export default AvailablePlayers;