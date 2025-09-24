import React, { Suspense, use } from 'react';
import Player from "../Player/Player"

const AvailablePlayers = ({playersPromise}) => {

  const players = use(playersPromise)
  console.log(players)

  return (
    <div className='w-10/12 mx-auto grid grid-cols-3 gap-5 mt-8'>
      {
        players.map((player, index) => <Player key={index} player={player}></Player> )
      }
    </div>
  );
};

export default AvailablePlayers;