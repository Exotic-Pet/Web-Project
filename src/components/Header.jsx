import { Link } from "react-router-dom";
import { useState } from "react";
import LightBox from "../components/LightBox";
import "../styles/all.css";

import logo from "../assets/layout/LOGO.svg";
import accountBrown from "../assets/layout/account-brown.svg";
import accountGreen from "../assets/layout/account-green.svg";

import homeGreen from "../assets/index/home-green.svg";
import calendarGreen from "../assets/index/calendar-green.svg";
import introGreen from "../assets/index/intro-green.svg";
import peopleGreen from "../assets/index/people-green.svg";
import msgGreen from "../assets/index/msg-green.svg";

export default function Header() {
  const [isSignInLightBoxState, setSignInLightBoxState] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      {/* LightBox */}
      {isSignInLightBoxState && (
        <LightBox
          isSignInLightBoxState={isSignInLightBoxState}
          setSignInLightBoxState={setSignInLightBoxState}
          type="SIGN UP"
        />
      )}
      <header className="py-[16px] fixed top-0 z-20 w-full shadow-md bg-white xl:py-[14px]">
        {/* <!-- Navbar --> */}
        <nav className="flex items-center justify-between px-4 mx-auto leading-none lg:px-8 2xl:px-0 2xl:container">
          <h1>
            <strong className="hidden">特寵生活</strong>
            <Link to="/" className="hover:opacity-70">
              <img className="max-w-[48px]" src={logo} alt="logo" />
            </Link>
          </h1>
          {/* Mobile Hamburger Menu */}
          <svg
            className={`${isMenuActive ? "active" : ""} ham ham6 lg:hidden`}
            viewBox="0 0 100 100"
            width="60"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
          {/* Expand Menu */}
          <ul
            className={`${
              isMenuActive ? "menu--open" : "menu--close"
            } overflow-hidden absolute top-[92px] left-0 right-0 bg-brown-dark tracking-wide ease-out duration-500 lg:hidden`}
          >
            <li>
              <Link
                to="/page/store-overview"
                className="flex gap-x-2 justify-center items-center py-4 mt-4 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={homeGreen} alt="icon" className="w-10" />
                <h2 className="text-white text-2xl text-center group-hover:text-yellow-light">
                  特寵探店
                </h2>
              </Link>
            </li>
            <li>
              <Link
                to="/page/event"
                className="flex gap-x-2 justify-center items-center py-4 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={calendarGreen} alt="icon" className="w-10" />
                <h2 className="text-white text-2xl text-center group-hover:text-yellow-light">
                  特寵活動
                </h2>
              </Link>
            </li>
            <li>
              <Link
                to="/page/exotic-overview"
                className="flex gap-x-2 justify-center items-center py-4 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={introGreen} alt="icon" className="w-10" />
                <h2 className="text-white text-2xl text-center group-hover:text-yellow-light">
                  特寵介紹
                </h2>
              </Link>
            </li>
            <li>
              <Link
                to="/page/gathering"
                className="flex gap-x-2 justify-center items-center py-4 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={peopleGreen} alt="icon" className="w-10" />
                <h2 className="text-white text-2xl text-center group-hover:text-yellow-light">
                  聚會揪團
                </h2>
              </Link>
            </li>
            <li>
              <Link
                to="/page/community"
                className="flex gap-x-2 justify-center items-center py-4 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={msgGreen} alt="icon" className="w-10" />
                <h2 className="text-white text-2xl text-center group-hover:text-yellow-light">
                  心得交流
                </h2>
              </Link>
            </li>
            <li>
              <div
                className="flex gap-x-2 justify-center items-center cursor-pointer py-4 mb-4 group"
                onClick={() => {
                  setSignInLightBoxState(true);
                  setIsMenuActive(false);
                }}
              >
                <img src={accountGreen} alt="icon" className="w-10" />
                <h2 className="text-white text-2xl text-center group-hover:text-yellow-light">
                  我的帳號
                </h2>
              </div>
            </li>
          </ul>
          {/* <!-- PC Menu --> */}
          <ul className="items-center hidden font-bold tracking-wide text-center gap-x-6 lg:flex">
            <li className="nav__list">
              <Link
                to="/page/store-overview"
                className="nav__list__link py-2 text-brown-dark text-[20px]"
              >
                特寵探店
              </Link>
              {/* <!-- Expand Menu --> */}
              <div className="nav__list__menu">
                <ul className="py-1 bg-brown-dark rounded-bl-xl rounded-br-xl">
                  <li className="text-[16px] font-semibold">
                    <Link
                      to="/page/store-search"
                      state={{ category: "cafe" }}
                      className="block py-3 text-white cursor-pointer hover:text-yellow-light"
                    >
                      特寵咖啡廳
                    </Link>
                  </li>
                  <li className="text-[16px] font-semibold">
                    <hr className="max-w-[80%] mx-auto border-white" />
                    <Link
                      to="/page/store-search"
                      state={{ category: "specialtyStore" }}
                      className="block py-3 text-white cursor-pointer hover:text-yellow-light"
                    >
                      特寵專賣店
                    </Link>
                  </li>
                  <li className="text-[16px] font-semibold">
                    <hr className="max-w-[80%] mx-auto border-white" />
                    <Link
                      to="/page/store-search"
                      state={{ category: "hospital" }}
                      className="block py-3 text-white cursor-pointer hover:text-yellow-light"
                    >
                      特寵醫院
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav__list">
              <Link
                to="/page/event"
                className="nav__list__link py-2 text-brown-dark text-[20px]"
              >
                特寵活動
              </Link>
            </li>
            <li className="nav__list">
              <Link
                to="/page/exotic-overview"
                className="nav__list__link cursor-pointer py-2 text-brown-dark text-[20px]"
              >
                特寵介紹
              </Link>
              {/* <!-- Expand Menu --> */}
              <div className="nav__list__menu">
                <ul className="py-1 bg-brown-dark rounded-bl-xl rounded-br-xl">
                  <li className="text-[16px] font-semibold">
                    <Link
                      className="block py-3 text-white hover:text-yellow-light"
                      to="/page/exotic-overview/amphibiansAndreptile"
                    >
                      兩棲爬蟲類
                    </Link>
                  </li>
                  <li className="text-[16px] font-semibold">
                    <hr className="max-w-[80%] mx-auto border-white" />
                    <Link
                      className="block py-3 text-white hover:text-yellow-light"
                      to="/page/exotic-overview/leporidaeAndmuriodea"
                    >
                      兔、鼠類
                    </Link>
                  </li>
                  <li className="text-[16px] font-semibold">
                    <hr className="max-w-[80%] mx-auto border-white" />
                    <Link
                      className="block py-3 text-white hover:text-yellow-light"
                      to="/page/exotic-overview/aves"
                    >
                      鳥類
                    </Link>
                  </li>
                  <li className="text-[16px] font-semibold">
                    <hr className="max-w-[80%] mx-auto border-white" />
                    <Link
                      className="block py-3 text-white hover:text-yellow-light"
                      to="/page/exotic-overview/arthropoda"
                    >
                      節肢動物類
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav__list">
              <Link
                className="nav__list__link py-2 text-brown-dark text-[20px]"
                to="/page/gathering"
              >
                聚會揪團
              </Link>
            </li>
            <li className="nav__list">
              <Link
                className="nav__list__link py-2 text-brown-dark text-[20px]"
                to="/page/community"
              >
                心得交流
              </Link>
            </li>
            {/* <!-- Account Info --> */}
            <li className="ml-[16px]">
              <div
                className="flex items-center p-2 text-white rounded-full cursor-pointer bg-brown-dark group"
                onClick={() => setSignInLightBoxState(true)}
              >
                <img
                  className="max-w-[40px] group-hover:hidden"
                  src={accountBrown}
                  alt="account-brown"
                />
                <img
                  className="max-w-[40px] hidden group-hover:block"
                  src={accountGreen}
                  alt="account-green"
                />
                <h2 className="ml-2 mr-1 text-[18px]">我的帳號</h2>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
