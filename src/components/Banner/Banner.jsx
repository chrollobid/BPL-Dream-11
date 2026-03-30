import React from 'react';
import banner from '../../assets/BPL-dream-11-resource/assets/banner-main.png'
import bgImg from '../../assets/BPL-dream-11-resource/assets/bg-shadow.png'
const Banner = () => {
    return (
        <div className="min-h-[60vh] w-11/12 mx-auto flex flex-col items-center mt-4 rounded-xl justify-center  space-y-4 bg-gray-900" style={{ backgroundImage: `url(${bgImg})` }}>
            <img src={banner} alt="" />
            <h2 className='font-bold text-center  text-[40px] text-white '>Assemble Your Ultimate Dream 11 Cricket Team </h2>
            <p className='text-lg text-center text-[#dfe6e9] mt-4'>Beyond Boundaries Beyond Limits</p>
            <div className="border border-[#E7FE29] p-2 rounded-2xl inline-block">
  <button className="bg-[#E7FE29] hover:bg-[#d4e905] text-black font-bold py-3 px-6 rounded-xl transition-all">
    Claim Free Credit
  </button>
</div>
        </div>
    );
};

export default Banner;