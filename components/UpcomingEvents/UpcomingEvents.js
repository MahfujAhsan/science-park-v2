import Image from 'next/image';
import ScienceQuiz from '../assets/UpcomingEvents/left-image.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Autoplay]);

const UpcomingEvents = () => {
    return (
        <>
            <section className="upcoming__events">
                <div className="text-center">
                    <h2 className="text-[60px] font-aladinCursive text-[#565656] font-[400]">Upcoming Events</h2>
                    <p className="text-[32px] font-robotoSerif font-[500] text-[#565656] leading-[35px]">Date:- 24/07/2022 on Sunday</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    autoplay={{ delay: 2000 }}
                    speed={1300}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop
                >
                    <SwiperSlide>
                        <div className='grid grid-cols-12 place-items-center w-10/12 mx-auto mt-[40px]'>
                            <div className='w-[450px] col-span-6'>
                                <Image src={ScienceQuiz} alt="Science-Quiz" />
                            </div>
                            <div className='w-[500px] col-span-6'>
                                <h3 className='font-aladinCursive text-[42px] text-[#565656] text-center'>Science Quiz</h3>
                                <p className='text-[24px] font-[500] text-[#565656] font-robotoSerif text-justify w-[450px]'>Take the challenge of our fun,  exciting and knowledge-boosting activity for kids.we are indroducing science quiz a platform that make the kids learn while enjoying</p>
                                <div className='font-robotoSerif text-[24px] mt-[20px]'>
                                    <p className='text-[#565656]'><span className='font-[700] text-[#565656]'>Venue</span>:- Hyderabad</p>
                                    <p className='text-[#565656]'><span className='font-[700] text-[#565656]'>Contact</span>:- 7978111219</p>
                                </div>
                                <div className='mt-[20px]'>
                                    <button className='text-[28px] font-robotoSerif text-[#8A00F0] font-[700] flex items-center'>
                                        Book Now <MdKeyboardArrowRight className='mt-[4px]' size={28} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid grid-cols-12 place-items-center w-10/12 mx-auto mt-[40px]'>
                            <div className='w-[450px] col-span-6'>
                                <Image src={ScienceQuiz} alt="Science-Quiz" />
                            </div>
                            <div className='w-[500px] col-span-6'>
                                <h3 className='font-aladinCursive text-[42px] text-[#565656] text-center'>Science Quiz</h3>
                                <p className='text-[24px] font-[500] text-[#565656] font-robotoSerif text-justify w-[450px]'>Take the challenge of our fun,  exciting and knowledge-boosting activity for kids.we are indroducing science quiz a platform that make the kids learn while enjoying</p>
                                <div className='font-robotoSerif text-[24px] mt-[20px]'>
                                    <p className='text-[#565656]'><span className='font-[700] text-[#565656]'>Venue</span>:- Hyderabad</p>
                                    <p className='text-[#565656]'><span className='font-[700] text-[#565656]'>Contact</span>:- 7978111219</p>
                                </div>
                                <div className='mt-[20px]'>
                                    <button className='text-[28px] font-robotoSerif text-[#8A00F0] font-[700] flex items-center'>
                                        Book Now <MdKeyboardArrowRight className='mt-[4px]' size={28} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    );
};

export default UpcomingEvents;