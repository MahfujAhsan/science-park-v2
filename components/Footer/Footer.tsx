import Image from "next/image";
import Child from "../assets/Footer/child.png";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillInstagram, AiFillFacebook, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="pt-[100px] w-[95%] mx-auto">
          <Image src={Child} alt="child" />
        </div>
        <div className="bg-white text-black -mt-[5px] w-[89.7%] ml-[80px]">
          <div className="grid grid-cols-12 place-items-center gap-x-[40px]">
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
                <h3>About Us</h3>
                <p>
                  We provide platform for the students to explore STEM( Science,
                  Tech, Engineering, Mathematics) so to make them learn while
                  having fun and provide a competitive environment.
                </p>
              </div>
              <div>
                <h3>News Letter</h3>
                <input
                  type="text"
                  className="border-[2px] border-[#000]"
                />{" "}
                <button>Send</button>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-around">
                <div>
                  <h3>Navigations</h3>
                  <ul>
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
                  <h3>Navigations</h3>
                  <ul>
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
              <h3>Contact</h3>
              <div className="flex items-center">
                <HiLocationMarker />
                <p>
                  Ward no.5,Bhinjal pada District-Bargarh State-Odisha Pin
                  Code-768028
                </p>
              </div>
              <div className="flex items-center">
                <BsTelephoneFill />
                <p>7978111219,7205181669</p>
              </div>
              <div className="flex items-center">
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillMail />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
