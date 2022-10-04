import engineeringHat from "../assets/Events/engineering-hat.png";
import roboticsAvatar from "../assets/Events/robotics-avater.png";
import magicianHat from "../assets/Events/magician-hat.png";
import crafting from "../assets/Events/crafting.png";
import rocket from "../assets/Events/rocket-illustration.png";
import painting from "../assets/Events/painting.png";
import Image from "next/image";

const Events = () => {
  return (
    <>
      <section className="events__container overflow-hidden hidden notepad__screen:block">
        <h2 className="font-atma font-[700] text-center text-[60px] leading-[90px] drop-shadow-[42px_20px_6px_rgba(0,0,0,0.10)]">
          <span className="text-[#DD0000]">E</span>
          <span className="text-[#DFE300]">V</span>
          <span className="text-[#13F100]">E</span>
          <span className="text-[#00FCDE]">N</span>
          <span className="text-[#000AF8]">T</span>
          <span className="text-[#F3A100]">S</span>
        </h2>

        <div className="flex flex-col">
          <div className="flex justify-around mt-[60px]">
            <div className="bg-[#FAE1AC] w-[370px] h-[215px] border-b-[7px] border-b-[#B2859E] rounded-[29px] relative rotate-[-33deg]">
              <h2 className="font-robotoSerif text-[26px] leading-[30px] text-[#FFFFDA] font-[700] pt-[2px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-center mb-[10px]">
                Do it yourself activities
              </h2>
              <div className="rotate-[35deg] absolute left-[40px] w-[150px]">
                <Image
                  objectFit="contain"
                  src={engineeringHat}
                  alt="engineering-hat"
                />
              </div>
            </div>
            <div className="bg-[#DC5BA3] w-[370px] h-[215px] border-b-[7px] border-b-[#BC3B83] border-r-[10px] border-r-[#BC3B83] rounded-[21px] rotate-[57deg] relative -left-[250px] top-[30px]">
              <h2 className="font-robotoSerif text-[26px] leading-[30px] text-[#FFBDFF] font-[700] pt-[2px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-center mb-[10px]">
                Science Magic Show
              </h2>
              <div className=" rotate-[-55deg] mt-[15px]">
                <div className="absolute -top-[115px] -left-[20px] z-10 w-[150px]">
                  <Image
                    objectFit="contain"
                    src={roboticsAvatar}
                    alt="engineering-hat"
                  />
                </div>
                <div className="absolute -top-[70px] w-[200px]">
                  <Image
                    objectFit="contain"
                    src={magicianHat}
                    alt="engineering-hat"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-around gap-x-[50px]">
              <div className="bg-[#FE9881] w-[370px] h-[215px] rounded-[21px] relative -rotate-[33.55deg] top-[115px] left-[100px]">
                <h2 className="font-robotoSerif text-[26px] leading-[30px] text-[#FFEAD3] font-[700] pt-[2px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-center mb-[10px] absolute z-50 w-full">
                  Crafting Workshop
                </h2>
                <div className="rotate-[34.55deg] -ml-[30px] -mt-[1px] w-[325px]">
                  <Image
                    objectFit="contain"
                    src={crafting}
                    alt="engineering-hat"
                  />
                </div>
              </div>
              <div className="bg-[#B6F0D6] w-[370px] h-[215px] rounded-[21px] relative rotate-[57deg] -left-[65px] mt-[10px]">
                <h2 className="font-robotoSerif text-[26px] leading-[30px] text-[#FDFFFF] font-[700] pt-[2px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-center mb-[10px] absolute z-50 w-full">
                  Science Quiz
                </h2>
                <div className="rotate-[-55deg] -ml-[40px] w-[270px]">
                  <Image
                    objectFit="contain"
                    src={rocket}
                    alt="engineering-hat"
                  />
                </div>
              </div>
              <div className="bg-[#655BDC] w-[370px] h-[215px] border-b-[10px] border-[#463CBD] border-l-[6px]  rounded-[21px] relative -rotate-[34deg] -left-[120px] top-[50px]">
                <h2 className="font-robotoSerif text-[26px] leading-[30px] text-[#D5CBF4] font-[700] pt-[2px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-center mb-[10px] absolute z-50 w-full">
                  3D Painting
                </h2>
                <div className="rotate-[36deg] -ml-[20px] w-[220px] mt-[10px]">
                  <Image
                    objectFit="contain"
                    src={painting}
                    alt="engineering-hat"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
