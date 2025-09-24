import React from 'react';
import PurchasedPlayer from '../PurchasedPlayer';

const SelectedPlayers = ({purchasedPlayers, setPurchasedPlayers}) => {
  return (
    <div className='w-10/12 mx-auto'>
      {
        purchasedPlayers.map((purchasedPlayer, ind) => <PurchasedPlayer key={ind} setPurchasedPlayers={setPurchasedPlayers} purchasedPlayer={purchasedPlayer} purchasedPlayers={purchasedPlayers}></PurchasedPlayer>)
      }
    </div>
  );
};

export default SelectedPlayers;