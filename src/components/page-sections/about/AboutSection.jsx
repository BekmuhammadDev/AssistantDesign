import React from 'react';
import AboutImg from '../../../assets/img/AboutImg.png';
import AboutImgRes from '../../../assets/img/AboutImgRes.png';

const AboutSection = () => (
  <section className='bg-[#FAFAFA]'>
    <div className="container mx-auto max-w-[1440px]">

      <div className='py-[120px]'>
        <h1 className='text-base md:text-2xl font-bold text-center text-[#737373] mb-2'>ABOUT</h1>
        <h1 className=' text-[40px] md:text-[58px] font-extrabold text-center text-[#252B42] '>A feisty <br className='md:hidden'/> group of </h1>
        <h1 className=' text-[40px] md:text-[58px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 mb-5 md:mb-2'>change makers</h1>
        <p className='text-2xl font-medium text-center text-[#737373] mb-10'>Most calendars are <br className='md:hidden'/> designed for teams. <br className='md:hidden'/> Slate is designed <br />
          for freelancers
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <img src={AboutImg} className='hidden md:flex'  alt="#" />
        <img src={AboutImgRes} className='md:hidden' alt="#" />

      </div>
    </div>
  </section>
);

export default AboutSection;
