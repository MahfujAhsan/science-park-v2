import { RiShareFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Autoplay]);

const MobileHero = () => {
  return (
    <>
      <section className="mobile__hero block notepad__screen:hidden bg-[#F8EFA0] px-[16px]">
        <div className="font-robotoSerif">
          <div className="py-[30px]">
            <input className="w-full h-[40px] mx-auto px-[16px] border-[2px] border-[#8A2BE2] outline-none rounded-[12px] text-[16px] placeholder-[#8A2BE2] font-[500]" type="text" placeholder="Search"/>
          </div>
          <div>
            <h2 className="text-[24px] font-[600] text-[#565656]">What we learn by pleasure we never forget</h2>
            <p className="text-[14px] font-[500] my-[8px] text-[#565656]">
              We provide platform for the students to explore STEM (Science,
              Tech, Engineering,Mathematics) so to make them learn while having
              funand provide a competitive environment.
            </p>
            <button className="px-[20px] py-[10px] bg-[#8A2BE2] text-[#fff] font-[600] rounded-[12px]">Book Now</button>
          </div>
        </div>
        <div>
            <div className="hero__right__content">

            </div>
            <div>
                <RiShareFill />
            </div>
        </div>
      </section>
    </>
  );
};

export default MobileHero;
