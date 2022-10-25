import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import avatar from "../assets/Header/avatar.jpg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {
  BsFlower2,
  BsEmojiDizzy,
  BsFillShareFill,
  BsSearch,
} from "react-icons/bs";
import { MdLibraryBooks, MdOutlineLibraryBooks } from "react-icons/md";

const MobileHeader = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <section className="responsive__header flex justify-between items-center px-[16px] py-[10px] notepad__screen:hidden">
        <div>
          <h2>
            <span className="text-[22px] font-greatFredricka font-[400] text-[#4A1E9E]">
              Sci
            </span>
            <span className="text-[16px] font-[500] font-robotoSerif text-[#E2762B]">
              ence Park
            </span>
          </h2>
        </div>
        <div>
          <div>
            <button onClick={() => setOpen(!open)}>
              <span className="text-[#565656]">
                {!open ? <MdClose size={24} /> : <FiMenu size={24} />}
              </span>
            </button>
            <ul
              className={`absolute z-[1] right-0 w-full mr-auto transition-all duration-500 ease-in px-[16px] ${
                !open ? "top-[52px]" : "top-[-590px]"
              }`}
            >
              <div className="bg-[#F8EFA0] rounded-l-[16px] rounded-br-[16px] border-[2px] border-[#ffffff]">
                <div className="w-full h-[195px]">
                  <div className="h-[125px] bg-gradient-to-r from-[#F8EFA0] via-[#E68E51] to-[#8A2BE2] rounded-l-[16px]"></div>
                  <div className="h-[70px] w-full bg-[#fff] rounded-bl-[16px] rounded-br-[16px]">
                    <div className="flex justify-around items-center gap-x-[50px] absolute top-[70px] left-[50px]">
                      <div className="w-[110px]">
                        <Image
                          className="rounded-full"
                          src={avatar}
                          alt="avatar"
                        />
                      </div>
                      <div className="font-robotoSerif text-[16px] font-[500] flex flex-col gap-[15px]">
                        <button className="bg-[#8A2BE2] px-[15px] py-[3px] rounded-full text-white w-[100px]">
                          Sign In
                        </button>
                        <button className="border-[3px] border-[#8A2BE2] px-[14px] py-[2px] rounded-full w-[100px]">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="font-robotoSerif text-[16px] font-[500]">
                  <li className="bg-[#9E41C3] text-[#fff] w-[210px] rounded-r-[16px] py-[10px] px-[10px] mt-[15px] flex items-center gap-x-[10px]">
                    <AiFillHome size={24} />
                    <Link href="/">Home</Link>
                  </li>
                  <li className="py-[10px] px-[10px] my-[10px] flex items-center gap-x-[10px]">
                    <BsFlower2 size={24} />
                    <Link href="/">Science Events</Link>
                  </li>
                  <li className="py-[10px] px-[10px] my-[10px] flex items-center gap-x-[10px]">
                    <MdLibraryBooks size={24} />
                    <Link href="/">Books</Link>
                  </li>
                  <li className="py-[10px] px-[10px] my-[10px] flex items-center gap-x-[10px]">
                    <BsEmojiDizzy size={24} />
                    <Link href="/">About Us</Link>
                  </li>
                  <li className="py-[10px] px-[10px] my-[10px] flex items-center gap-x-[10px]">
                    <MdOutlineLibraryBooks size={24} />
                    <Link href="/">Contact</Link>
                  </li>
                  <li className="py-[10px] px-[10px] my-[10px] flex items-center gap-x-[10px]">
                    <BsFillShareFill size={24} />
                    <Link href="/">Share App Link</Link>
                  </li>
                  <li className="py-[10px] px-[10px] my-[10px] flex items-center gap-x-[10px]">
                    <AiFillSetting size={24} />
                    <Link href="/">Settings</Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileHeader;
