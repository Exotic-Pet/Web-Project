import { Link } from "react-router-dom";
import "../styles/all.css";
import logo from "../assets/layout/LOGO.svg";
import homeWhite from "../assets/layout/home-white.svg";
import calendarWhite from "../assets/layout/calendar-white.svg";
import introWhite from "../assets/layout/intro-white.svg";
import peopleWhite from "../assets/layout/people-white.svg";
import msgWhite from "../assets/layout/msg-white.svg";

export default function Footer() {
  return (
    // Footer
    <footer className="py-[64px] relative bg-yellow-normal">
      <div className="container flex flex-col justify-center mx-auto md:flex-row">
        <nav className="flex flex-col justify-center md:flex-row">
          <h2 className="md:mr-[44px]">
            <strong className="hidden">特寵生活</strong>
            <Link to="/" className="hover:opacity-80">
              <img className="mx-auto" src={logo} alt="logo" />
            </Link>
          </h2>
          <ul className="max-w-[450px] mx-auto flex justify-center flex-wrap mt-8 sm:justify-start sm:mt-0 md:justify-start sm:max-w-[600px]">
            <li className="w-full sm:max-w-[200px]">
              <Link to="/page/store-overview" className="block hover:opacity-80">
                <div className="max-w-[200px] mx-auto flex items-center py-2 md:py-0">
                  <img src={homeWhite} alt="home" />
                  <h2 className="ml-[12px] text-[22px] tracking-wide text-brown-dark font-bold">
                    特寵探店
                    <small className="block text-[10px] text-white">
                      Exotic pet stores
                    </small>
                  </h2>
                </div>
              </Link>
            </li>
            <li className="w-full sm:max-w-[200px]">
              <a href="#" className="block hover:opacity-80">
                <div className="max-w-[200px] mx-auto flex items-center py-2 md:py-0">
                  <img src={calendarWhite} alt="calendar" />
                  <h2 className="ml-[12px] text-[22px] tracking-wide text-brown-dark font-bold">
                    特寵活動
                    <small className="block text-[10px] text-white">
                      Exotic pet event
                    </small>
                  </h2>
                </div>
              </a>
            </li>
            <li className="w-full sm:max-w-[200px]">
              <a href="#" className="block hover:opacity-80">
                <div className="max-w-[200px] mx-auto flex items-center py-2 md:py-0">
                  <img src={introWhite} alt="intro" />
                  <h2 className="ml-[12px] text-[22px] tracking-wide text-brown-dark font-bold">
                    特寵介紹
                    <small className="block text-[10px] text-white">
                      Introduction
                    </small>
                  </h2>
                </div>
              </a>
            </li>
            <li className="w-full sm:max-w-[200px]">
              <a href="#" className="block hover:opacity-80">
                <div className="max-w-[200px] mx-auto flex items-center py-2 md:py-0">
                  <img src={peopleWhite} alt="people" />
                  <h2 className="ml-[12px] text-[22px] tracking-wide text-brown-dark font-bold">
                    聚會揪團
                    <small className="block text-[10px] text-white">
                      Get-together
                    </small>
                  </h2>
                </div>
              </a>
            </li>
            <li className="w-full sm:max-w-[200px]">
              <a href="#" className="block hover:opacity-80">
                <div className="max-w-[200px] mx-auto flex items-center py-2 md:py-0">
                  <img src={msgWhite} alt="msg" />
                  <h2 className="ml-[12px] text-[22px] tracking-wide text-brown-dark font-bold">
                    心得交流
                    <small className="block text-[10px] text-white">
                      Forum
                    </small>
                  </h2>
                </div>
              </a>
            </li>
          </ul>
        </nav>
        {/* Footer Contact */}
        <section className="mt-6 pt-6 border-t border-white text-white sm:py-4 sm:ml-[48px] md:mt-0 md:pl-[64px] md:border-t-0 md:border-l">
          <div className="mx-auto max-w-[320px] pl-8 sm:pl-0">
            <h3 className="text-xl font-bold tracking-wider">
              聯繫我們 Contact us
            </h3>
            <ul className="mt-[16px] text-sm leading-6 font-medium tracking-wide">
              <li>電話 02-22222222</li>
              <li>Email tttt0000@gmail.com</li>
              <li>地址 台北市中山區民權一路145號</li>
            </ul>
          </div>
        </section>
      </div>
      {/* Page Top */}
      <div className="absolute -top-14 right-[7%] hover:scale-110">
        <a
          className="flex justify-center items-center w-24 h-24 border-white border-[3px] bg-green-normal rounded-3xl"
          href="#"
        >
          <p className="text-lg font-bold tracking-wide text-center text-white">
            PAGE
            <br />
            TOP
          </p>
        </a>
      </div>
    </footer>
  );
}
