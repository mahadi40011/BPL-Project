import React from 'react';

const CommonElement = ({setToggle, toggle, purchasedPlayers}) => {
  return (
    <div className='w-10/12 mx-auto  mt-20'>
      <div className='flex justify-between items-center'>
        {
          toggle === true ? <h1 className='font-bold text-3xl'>Available Players</h1> : <h1 className='font-bold text-3xl'>Selected Players (<span>{purchasedPlayers.length}</span>/6)</h1>
        }
        <div >
          <button onClick={() => setToggle(true)} className={`btn-style !border-r-0 rounded-l-xl ${toggle === true && "btn-toggle-style"}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`btn-style !border-l-0 rounded-r-xl ${toggle === false && "btn-toggle-style"}`}>Selected(<span>{purchasedPlayers.length}</span>)</button>
        </div>
      </div>
    </div>
  );
};

export default CommonElement;