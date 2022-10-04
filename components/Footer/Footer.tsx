import Image from "next/image";
import Child from "../assets/Footer/child.png";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillInstagram, AiFillFacebook, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="pt-[40px] w-[95%] mx-auto">
          <Image src={Child} alt="child" />
        </div>
        <div className="footer__links text-black w-[95%] mx-auto pt-[50px] -mt-[70px] pl-[50px]">
          <div className="grid grid-cols-12 place-items-center gap-x-[60px] border-b-[4px] border-[#F8F1AC] pb-[10px]">
            <div className="col-span-4">
              <h2 className="brand__logo laptop__screen:flex items-center flex-grow laptop__screen:font-[400]">
                <span className="laptop__screen:font-greatFredricka laptop__screen:text-[38px] laptop__screen:leading-[69px] laptop__screen:text-[#4A1E9E]">
                  Sci
                </span>
                <span className="laptop__screen:font-robotoSerif laptop__screen:text-[28px] laptop__screen:leading-[33px] laptop__screen:text-[#E2762B]">
                  ence Park
                </span>
              </h2>
              <div>
                <h3 className="text-[20px] font-[600] font-robotoSerif text-[#8A2BE2]">
                  About Us
                </h3>
                <p className="text-[14px] font-robotoSerif font-[400] w-[250px]">
                  We provide platform for the students to explore STEM( Science,
                  Tech, Engineering, Mathematics) so to make them learn while
                  having fun and provide a competitive environment.
                </p>
              </div>
              <div className="my-[10px]">
                <h3 className="text-[20px] font-[600] font-robotoSerif text-[#8A2BE2]">
                  News Letter
                </h3>
                <div>
                  <input placeholder="Email" type="text" className="border-[3px] border-[#8A2BE2] placeholder:text-[#8A2BE2] text-[16px] font-[600] font-robotoSerif  px-[10px] py-[3px] rounded-[8px] mt-[15px]"  />
                  <button className="bg-[#8A2BE2] text-[#fff] px-[15px] py-[4px] rounded-[8px] ml-[8px] font-robotoSerif font-[600] text-[16px]">Send</button>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-around gap-x-[80px]">
                <div>
                  <h3 className="text-[20px] font-[600] font-robotoSerif text-[#8A2BE2]">Navigations</h3>
                  <ul className="font-robotoSerif">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Science Event</a>
                    </li>
                    <li>
                      <a href="#">Books</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[20px] font-[600] font-robotoSerif text-[#8A2BE2]">Navigations</h3>
                  <ul className="font-robotoSerif">
                    <li>
                      <a href="#">News Letter</a>
                    </li>
                    <li>
                      <a href="#">Upcoming Events</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <a href="#">Staffs</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <h3 className="text-[20px] font-[600] font-robotoSerif text-[#8A2BE2]">Contact</h3>
              <div className="flex items-center text-[#565656]">
                <HiLocationMarker size={20}/>
                <p className="w-[200px] font-robotoSerif text-[14px] px-[10px]">
                  Ward no.5,Bhinjal pada District-Bargarh State-Odisha Pin
                  Code-768028
                </p>
              </div>
              <div className="flex items-center my-[8px] text-[#565656] font-robotoSerif text-[14px]">
                <BsTelephoneFill size={15}/>
                <p className="w-[200px] font-robotoSerif text-[14px] px-[10px]">7978111219,7205181669</p>
              </div>
              <div className="flex items-center gap-[20px] my-[4px]">
                <AiFillInstagram className="bg-[#8A2BE2] rounded-[30px] p-[2px]" fill="#fff" size={22}/>
                <AiFillMail className="bg-[#8A2BE2] rounded-[30px] p-[2px]" fill="#fff" size={22}/>
                <AiFillFacebook className="bg-[#8A2BE2] rounded-[30px] p-[2px]" fill="#fff" size={22}/>
              </div>
            </div>
          </div>
          <div className="text-center text-[14px] font-robotoSerif font-[500] py-[12px] text-[#565656]">
            <p>Copyrights©2022 All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
