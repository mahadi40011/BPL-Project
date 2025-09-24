import React from 'react';

const CommonElement = ({setToggle, toggle}) => {
  return (
    <div className='w-10/12 mx-auto  mt-20'>
      <div className='flex justify-between items-center'>
        {
          toggle === true ? <h1 className='font-bold text-3xl'>Available Players</h1> : <h1 className='font-bold text-3xl'>Selected Players (<span>0</span>/6)</h1>
        }
        <div >
          <button onClick={() => setToggle(true)} className={`font-medium cursor-pointer px-7 py-3 border border-r-0 border-gray-300 rounded-l-xl ${toggle === true && "bg-[#E7FE29] !font-bold"}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`font-medium cursor-pointer px-7 py-3 border border-l-0 border-gray-300 rounded-r-xl ${toggle === false && "bg-[#E7FE29] !font-bold"}`}>Selected(<span>0</span>)</button>
        </div>
      </div>
    </div>
  );
};

export default CommonElement;