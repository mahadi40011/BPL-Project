import React from 'react';
import PurchasedPlayer from '../PurchasedPlayer';

const SelectedPlayers = ({purchasedPlayers, setPurchasedPlayers, availableBalance, setAvailableBalance, setToggle}) => {
  return (
    <div className='w-10/12 mx-auto mt-6'>
      <div className='grid grid-cols-2 gap-5'>
        {
          purchasedPlayers.map((purchasedPlayer, ind) => <PurchasedPlayer key={ind} setPurchasedPlayers={setPurchasedPlayers} purchasedPlayer={purchasedPlayer} purchasedPlayers={purchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></PurchasedPlayer>)
        }
      </div>
      <div className='border border-[#E7FE29] p-1 w-fit rounded-lg mt-6'>
        <button onClick={() => setToggle(true)} className='font-bold bg-[#E7FE29] px-3 py-2 rounded-lg'>Add More Players</button>
      </div>
    </div>
  );
};

export default SelectedPlayers;