import Link from "next/link";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [openEvents, isOpenEvents] = useState<boolean>(true);
  const [openBook, isOpenBook] = useState<boolean>(true);

  return (
    <>
      {/* BrandLogo & Customer Registration */}
      <div className="header__container">
        <div className="laptop__screen:flex items-center justify-between min-h-[72px] laptop__screen:pl-[98px] laptop__screen:pr-[100px]">
          <section className="brand__logo laptop__screen:flex items-center flex-grow laptop__screen:font-[400]">
            <span className="laptop__screen:font-greatFredricka laptop__screen:text-[38px] laptop__screen:leading-[69px] laptop__screen:text-[#4A1E9E]">
              Sci
            </span>
            <span className="laptop__screen:font-robotoSerif laptop__screen:text-[28px] laptop__screen:leading-[33px] laptop__screen:text-[#E2762B]">
              ence Park
            </span>
          </section>

          <section className="buttons laptop__screen:text-[21px] laptop__screen:leading-[28px] laptop__screen:font-[500] font-robotoSerif flex-grow-0">
            <button className="border-[3px] border-[#8A2BE2] rounded-[12px] text-[#8A2BE2] w-[125px] h-[48px]">
              Sign In
            </button>
            <button className="bg-[#8A2BE2] border-[3px] border-[#8A2BE2] rounded-[12px] text-[#fff] w-[125px] h-[48px] ml-[32px]">
              Sign Up
            </button>
          </section>
        </div>

        <div className="navBar flex justify-between items-center h-[80px] shadow-[0px_4px_12px_rgba(0,0,0,0.25)] laptop__screen:pl-[98px] laptop__screen:pr-[100px]">
          <nav className="flex-grow z-10">
            <ul className="flex text-[21px] gap-x-[20px] font-robotoSerif">
              <li className="w-[65px] font-[800] text-[#500CA8] border-b-[3px] border-b-white cursor-pointer">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="dropdown__container relative inline-block peer-hover:block w-[177px]">
                <button
                  onMouseEnter={() => isOpenEvents(false)}
                  onMouseLeave={() => isOpenEvents(true)}
                  className={`peer flex items-center font-[500] text-[21px] ${
                    openEvents
                      ? "text-[#8A2BE2]"
                      : "text-[#500CA8] border-b-[3px] border-b-[#E2762B]"
                  }`}
                >
                  Science Event
                  <span>
                    {openEvents ? (
                      <IoChevronUpOutline size={24} />
                    ) : (
                      <IoChevronDownOutline size={24} />
                    )}
                  </span>
                </button>
                <div
                  className="dropdown__content hidden peer-hover:flex hover:flex
         w-[194px] flex-col bg-white drop-shadow-lg font-[500] text-[18px] absolute"
                >
                  <Link
                    href="/science-event/[science-magic-show]"
                    className="leading-[21px]"
                  >
                    <a className="border-[1px] border-black pl-[5px] py-[10px]">
                      Science Magic Show
                    </a>
                  </Link>
                  <Link
                    href="/science-event/[science-magic-show]"
                    className="leading-[21px]"
                  >
                    <a className="border-[1px] border-black pl-[5px] py-[10px]">
                      Do it yourself activities
                    </a>
                  </Link>
                  <Link
                    href="/science-event/[crafting-workshop]"
                    className="leading-[21px]"
                  >
                    <a className="border-[1px] border-black pl-[5px] py-[10px]">
                      Crafting Workshop
                    </a>
                  </Link>
                  <Link
                    href="/science-event/[quiz-event]"
                    className="leading-[21px]"
                  >
                    <a className="border-[1px] border-black pl-[5px] py-[10px]">
                      Quiz/Event
                    </a>
                  </Link>
                </div>
              </li>
              <li className="dropdown__container relative inline-block peer-hover:block w-[94px]">
                <button
                  onMouseEnter={() => isOpenBook(false)}
                  onMouseLeave={() => isOpenBook(true)}
                  className={`peer flex items-center font-[500] text-[21px] ${
                    openBook
                      ? "text-[#8A2BE2]"
                      : "text-[#500CA8] border-b-[3px] border-b-[#E2762B]"
                  }`}
                >
                  Books
                  <span>
                    {openBook ? (
                      <IoChevronUpOutline size={24} />
                    ) : (
                      <IoChevronDownOutline size={24} />
                    )}
                  </span>
                </button>
                <div
                  className="dropdown__content hidden peer-hover:flex hover:flex
         w-[194px] flex-col bg-white drop-shadow-lg font-roboto font-[500] text-[18px] absolute"
                >
                  <Link
                    href="/science-event/[science-magic-show]"
                    className="leading-[21px]"
                  >
                    <a className="border-[1px] border-black pl-[5px] py-[10px]">
                      Science Magic Show
                    </a>
                  </Link>
                  <Link
                    href="/science-event/[science-magic-show]"
                    className="leading-[21px]"
                  >
                    <a className="border-[1px] border-black pl-[5px] py-[10px]">
                      Do it yourself activities
                    </a>
                  </Link>
                  <Link
                    href="/science-event/[crafting-workshop]"
                    className="leading-[21px]"
                  >
                    <a className="border-[1px] border-black pl-[5px] py-[10px]">
                      Crafting Workshop
                    </a>
                  </Link>
                  <Link
                    href="/science-event/[quiz-event]"
                    className="leading-[21px]"
                  >
                    <a className="border-[1px] border-black pl-[5px] py-[10px]">
                      Quiz/Event
                    </a>
                  </Link>
                </div>
              </li>
              <li className="w-[99px] font-[500] text-[21px] text-[#8A2BE2] border-b-[3px] border-b-white cursor-pointer">
                <Link href="/about-us">
                  <a>About Us</a>
                </Link>
              </li>
              <li className="w-[85px] font-[500] text-[21px] text-[#8A2BE2] border-b-[3px] border-b-white">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="search__bar flex-grow-0">
            <span className="text-[24px] text-[#8A2BE2] font-[400] font-robotoSerif">
              <FiSearch className="absolute top-[100px] mx-[15px]" size={24} />
              <input
                className="border-[3px] border-[#8A2BE2] rounded-[12px] outline-none pl-[49px] placeholder:text-[#8A2BE2] w-[280px] h-[48px] text-[21px]"
                type="text"
                placeholder="Search"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
