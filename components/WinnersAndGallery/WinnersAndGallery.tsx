import AyushKumar from "../assets/WinnersAndGallery/ayush-kumar.png";
import RiaDash from "../assets/WinnersAndGallery/ria-dash.png";
import SilpaMishra from "../assets/WinnersAndGallery/silpa-mishra.png";
import GoldBadge from "../assets/WinnersAndGallery/gold-badge.png";
import SilverBadge from "../assets/WinnersAndGallery/silver-badge.png";
import BronzeBadge from "../assets/WinnersAndGallery/bronze-badge.png";
import GalleryImageOne from "../assets/WinnersAndGallery/gallery-image-one.png";
import GalleryImageTwo from "../assets/WinnersAndGallery/gallery-image-two.png";
import GalleryImageThree from "../assets/WinnersAndGallery/gallery-image-three.png";
import GalleryImageFour from "../assets/WinnersAndGallery/gallery-image-four.png";
import GalleryImageFive from "../assets/WinnersAndGallery/gallery-image-five.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Navigation]);

const WinnersAndGallery = () => {
  return (
    <>
      <section className="winners__and__gallery hidden notepad__screen:block">
        <div className="text-center pt-[10px]">
          <h2 className="text-[46px] leading-[60px] text-[#FFECFF] font-robotoSerif font-[700]">
            Winners for Last Week
          </h2>
        </div>
        <div className="flex justify-around mt-[20px]">
          <div className="ayush_kumar relative w-[250px]">
            <div>
              <Image src={AyushKumar} alt="ayush-kumar" />
            </div>
            <div className="absolute top-0 right-[15px] w-[70px]">
              <Image src={GoldBadge} alt="gold-badge" />
            </div>
            <div className="text-center">
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                Ayush Kumar
              </p>
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                First Prize, Magic Science Contest
              </p>
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                Class 7th, Vikash Public School
              </p>
            </div>
          </div>
          <div className="ria-dash relative w-[250px]">
            <div>
              <Image src={RiaDash} alt="ria-dash" />
            </div>
            <div className="absolute top-0 right-[15px] w-[70px]">
              <Image src={SilverBadge} alt="ria-dash" />
            </div>
            <div className="text-center">
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                Ria Dash
              </p>
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                Second Prize, Magic Science Contest
              </p>
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                Class 9th, Rotary Public School
              </p>
            </div>
          </div>
          <div className="ayush_kumar relative w-[250px]">
            <div>
              <Image src={SilpaMishra} alt="silpa-mishra" />
            </div>
            <div className="absolute top-0 right-[15px] w-[70px]">
              <Image src={BronzeBadge} alt="broze-mishra" />
            </div>
            <div className="text-center">
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                Silpa Mishra
              </p>
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                Third Prize, Magic Science Contest
              </p>
              <p className="text-[14px] font-robotoSerif font-[600] text-[#FFEBFF]">
                Class 6th, Rainbow Public School
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="text-center py-[30px]">
          <h2 className="text-[46px] leading-[60px] text-[#FFECFF] font-robotoSerif font-[700]">
            Gallery
          </h2>
        </div>
        <div className="">
          <Swiper
            className="gallery__slider w-10/12 mx-auto"
            slidesPerView={4}
            autoplay={{ delay: 2000 }}
            speed={1300}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            loop
          >
            <SwiperSlide>
              <div className="w-[240px] mx-auto px-[50px]">
                <Image src={GalleryImageOne} alt="gallery-image-one" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[240px] mx-auto px-[50px]">
                <Image src={GalleryImageTwo} alt="gallery-image-two" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[240px] mx-auto px-[50px]">
                <Image src={GalleryImageThree} alt="gallery-image-three" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[240px] mx-auto px-[50px]">
                <Image src={GalleryImageFour} alt="gallery-image-four" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[240px] mx-auto px-[50px]">
                <Image src={GalleryImageFive} alt="gallery-image-five" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default WinnersAndGallery;
