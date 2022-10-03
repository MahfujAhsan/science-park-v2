import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { RiShareFill } from "react-icons/ri";
import { MdHelp } from "react-icons/md";
import heroOne from "../assets/Hero/HeroOne.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Autoplay]);

const Hero = () => {
  return (
    <>
      <section className="hero__container grid grid-cols-12">
        <div className="py-[20px] col-span-1">
          <div className="social__icons flex items-center">
            <div className="ml-[8px] text-white">
              <div>
                <AiFillInstagram size={24} />
                <AiFillFacebook className="my-[40px]" size={24} />
                <GrMail size={24} />
              </div>
              <div className="mt-[88px]">
                <RiShareFill size={24} />
                <MdHelp className="my-[40px]" size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-11 grid grid-cols-12">
          <div className="left_content col-span-5 -ml-[94px] -mt-[70px]">
            <div className="font-robotoSerif ml-[60px] mt-[270px]">
              <h2 className="text-[38px] text-[#565656] leading-[42px] w-[544px] font-[700]">
                What we learn by pleasure we never forget
              </h2>
              <p className="text-[17px] text-[#565656] font-[500] w-[512px] tracking-wider my-[20px]">
                We provide platform for the students to explore STEM( Science,
                Tech, Engineering, Mathematics) so to make them learn while
                having fun and provide a competitive environment.
              </p>
              <button className="w-[200px] bg-[#8A2BE2] text-[#fff] text-[23px] text-center rounded-[12px] py-[12px] font-[500]">
                Book Now
              </button>
            </div>
          </div>
          <div className="right__content col-span-7  flex items-center mt-5 relative">
            <div className="slider w-full">
              <div className="absolute w-[78%] mt-[10px] left-[15px]">
                <Swiper
                  slidesPerView={1}
                  autoplay={{ delay: 2000 }}
                  speed={1300}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <Image src={heroOne} alt="hero-one" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image src={heroOne} alt="hero-one" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
