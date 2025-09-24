import React from 'react';
import bgImg from "../../assets/bg-shadow.png"
import bannerImg from "../../assets/banner-main.png"

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className='w-10/12 mx-auto bg-cover bg-black flex flex-col justify-center items-center space-y-5 py-16 mt-6'>
      <img src={bannerImg} alt="" className='' />
      <h1 className='font-bold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className='font-medium text-2xl text-gray-400'>Beyond Boundaries Beyond Limits</p>
      <div className='border border-[#E7FE29] p-1 rounded-lg'>
        <button className='font-bold bg-[#E7FE29] px-3 py-2 rounded-lg'>Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;