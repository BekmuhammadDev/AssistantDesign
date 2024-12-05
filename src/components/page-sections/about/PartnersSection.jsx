import AboutLogo1 from "../../../assets/icons/AboutLogo1.svg"
import AboutLogo2 from "../../../assets/icons/AboutLogo2.svg"
import AboutLogo3 from "../../../assets/icons/AboutLogo3.svg"
import AboutLogo4 from "../../../assets/icons/AboutLogo4.svg"
import AboutLogo5 from "../../../assets/icons/AboutLogo5.svg"
import AboutLogo6 from "../../../assets/icons/AboutLogo6.svg"
const PartnersSection = () => (
  <section>
    <div className="container mx-auto max-w-[1440px]">
      <div>
        <div className='mt-[78px] mb-[115px]'>
          <h1 className='text-[40px] font-bold text-[#252B42] text-center mb-5 md:mb-0'>Partners</h1>
          <p className='text-2xl text-[#737373] font-medium text-center'>Most calendars are <br className="md:hidden"/> designed for teams. <br />
            Slate is designed for <br className="md:hidden"/> freelancers</p>
        </div>

        <div className='space-y-12 md:space-y-0 px-5 md:px-0  md:flex justify-center  gap-x-[60px] mb-[138px]'>
          <img src={AboutLogo1} alt="#" className="mx-auto" /> 
          <img src={AboutLogo2} alt="#" className="mx-auto" />
          <img src={AboutLogo3} alt="#" className="mx-auto" />
          <img src={AboutLogo4} alt="#" className="mx-auto" />
          <img src={AboutLogo1} alt="#" className="mx-auto" />
          <img src={AboutLogo5} alt="#" className="mx-auto" />
          <img src={AboutLogo6} alt="#" className="mx-auto" />

        </div>

      </div>
    </div>
  </section>
);

export default PartnersSection;