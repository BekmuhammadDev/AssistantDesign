import React from 'react';
import georgesIcon from "../../../../assets/icons/spoonfork.svg"
import PerfomenceIcon from "../../../../assets/icons/muzzel.svg"
import CotnetIcon from "../../../../assets/icons/message.svg"
const index = () => {
    return (
        <section>

            <div className="container mx-auto max-w-[1440px]">

                <div className='flex justify-center items-center'>
                    <div className='w-[884px] bg-[#E4E4E4] border-[3px] mt-[160px]'></div>
                </div>

                <div className='pt-[160px] px-10'>
                    <h1 className='text-center text-[40px] font-bold text-[#252B42] mb-4'>AMAZING FEATURES</h1>
                    <p className='text-center text-2xl font-medium text-[#737373] mb-20 md:mb-0'>Most calendars are designed for teams. <br className='hidden md:flex'/>
                        Slate is designed for freelancers</p>
                    <div>


                        <div className='flex flex-col md:flex-row md:justify-center  gap-[50px] items-center'>

                            <div className='w-[344px] h-[409px] rounded-[10px] shadow-md px-[51px] py-10 mb-8 md:mb-[160px]  md:mt-[120px]'>

                                <div className='flex items-center justify-center mb-7'>
                                    <img src={georgesIcon} alt="#" />
                                </div>

                                <div>
                                    <h1 className='text-center text-2xl font-bold mb-7'>Gorgeous design</h1>
                                    <p className='text-center text-base font-medium mb-7 text-[#737373]'>Slate helps you see how <br />
                                        many more days you need <br />
                                        to work to reach your <br />
                                        financial goal </p>
                                </div>

                                <div className='flex items-center justify-center text-[#2091F9] text-base font-semibold'><a href="#">Learn more</a></div>
                            </div>

                            <div className='w-[344px] h-[409px] rounded-[10px] shadow-md px-[51px] py-10 mb-8 md:mb-[160px]  md:mt-[120px]'>

                                <div className='flex items-center justify-center mb-7'>
                                    <img src={PerfomenceIcon} alt="#" />
                                </div>

                                <div>
                                    <h1 className='text-center text-2xl font-bold mb-7'>Performance</h1>
                                    <p className='text-center text-base font-medium mb-7 text-[#737373]'>Slate helps you see how <br />
                                        many more days you need <br />
                                        to work to reach your <br />
                                        financial goal </p>
                                </div>

                                <div className='flex items-center justify-center text-[#2091F9] text-base font-semibold'><a href="#">Learn more</a></div>
                            </div>

                            <div className='w-[344px] h-[409px] rounded-[10px] shadow-md px-[51px] py-10 mb-80 md:mb-[160px]  md:mt-[120px]'>

                                <div className='flex items-center justify-center mb-7'>
                                    <img src={CotnetIcon} alt="#" />
                                </div>

                                <div>
                                    <h1 className='text-center text-2xl font-bold mb-7'>Content</h1>
                                    <p className='text-center text-base font-medium mb-7 text-[#737373]'>Slate helps you see how <br />
                                        many more days you need <br />
                                        to work to reach your <br />
                                        financial goal </p>
                                </div>

                                <div className='flex items-center justify-center text-[#2091F9] text-base font-semibold'><a href="#">Learn more</a></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </section>
    );
};

export default index;