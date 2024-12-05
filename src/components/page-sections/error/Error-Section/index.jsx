import React from 'react';
import ErrorIMg from "../../../../assets/img/Error.png"

const index = () => {
    return (
        <section className='bg-[#FAFAFA]'>
            <div className="container mx-auto max-w-[1440px]">

                <div className='py-[120px]'>
                    <h1 className='text-base md:text-2xl font-bold text-center text-[#737373] mb-2'>404</h1>
                    <h1 className='text-[40px] md:text-[58px] font-extrabold text-center text-[#252B42] '>Page <br className='md:hidden'/> Not Found</h1>
                    <p className='text-base font-medium text-center text-[#737373] mt-5'>Sed ut perspiciatis unde omnis iste <br className='md:hidden'/> natus error sit voluptatem accusantium <br />
                        doloremque laudantium, totam rem <br className='md:hidden'/> aperiam, eaque ipsa.
                    </p>

                    <div className='flex justify-center mt-[40px]'>
                        <img src={ErrorIMg} alt="#" />
                    </div>


                </div>
            </div>
        </section>
    );
};

export default index;