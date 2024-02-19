import { Link } from "react-router-dom";
import { useState } from "react";
import AosInit from "./AosInit";
import LightBox from "../components/LightBox";
import "../styles/all.css";

import logo from "../assets/layout/LOGO.svg";
import homeGreen from "../assets/index/home-green.svg";
import calendarGreen from "../assets/index/calendar-green.svg";
import introGreen from "../assets/index/intro-green.svg";
import peopleGreen from "../assets/index/people-green.svg";
import msgGreen from "../assets/index/msg-green.svg";
import accountBrown from "../assets/layout/account-brown.svg";
import googlePlay from "../assets/index/google-play.png";
import appStore from "../assets/index/app-store.png";

import snakeImg from "../assets/index/snake.svg";
import hamsterImg from "../assets/index/hamster.svg";
import geckoImg from "../assets/index/gecko.svg";
import parrotImg from "../assets/index/parrot.svg";
import turtleImg from "../assets/index/turtle.svg";
import duckImg from "../assets/index/duck.svg";
import bannerBg from "../assets/index/banner-bg.svg";
import bannerImg from "../assets/index/banner.svg";
import phoneBanner from "../assets/index/phone-banner.svg";

export default function HomeHeader() {
  AosInit();
  // State
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
      <header className="py-[16px] fixed top-0 z-10 w-full shadow-md bg-white xl:hidden">
        <nav className="flex items-center justify-between px-4 mx-auto leading-none lg:px-8 2xl:px-0 2xl:container">
          <h1>
            <strong className="hidden">特寵生活</strong>
            <Link to="/" className="hover:opacity-70">
              <img className="max-w-[48px]" src={logo} alt="logo" />
            </Link>
          </h1>
          {/* Mobile Hamburger Menu */}
          <svg
            className={`${isMenuActive ? "active" : ""} ham ham6 xl:hidden`}
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
              isMenuActive ? "menu--open" : "menu--close border-transparent"
            } overflow-hidden absolute top-[92px] right-0 z-10 rounded-bl-[20px] border-2 backdrop-blur-xl tracking-wide ease-out duration-300 xl:hidden`}
          >
            <li>
              <Link
                to="/page/store-overview"
                className="flex gap-x-3 items-center px-10 py-2 mt-2 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={homeGreen} alt="icon" className="max-w-[52px]" />
                <h2 className="text-brown-dark font-bold text-[18px] group-hover:text-green-dark">
                  特寵探店
                  <span className="block text-[12px] text-brown-normal tracking-normal mt-2">
                    Exotic pet stores
                  </span>
                </h2>
              </Link>
            </li>
            <li>
              <Link
                to="/page/event"
                className="flex gap-x-3 items-center py-2 px-10 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={calendarGreen} alt="icon" className="max-w-[52px]" />
                <h2 className="text-brown-dark font-bold text-[18px] group-hover:text-green-dark">
                  特寵活動
                  <span className="block text-[12px] text-brown-normal tracking-normal mt-2">
                    Exotic pet event
                  </span>
                </h2>
              </Link>
            </li>
            <li>
              <Link
                to="/page/exotic-overview"
                className="flex gap-x-3 items-center py-2 px-10 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={introGreen} alt="icon" className="max-w-[52px]" />
                <h2 className="text-brown-dark font-bold text-[18px] group-hover:text-green-dark">
                  特寵介紹
                  <span className="block text-[12px] text-brown-normal tracking-normal mt-2">
                    Introduction
                  </span>
                </h2>
              </Link>
            </li>
            <li>
              <Link
                to="/page/gathering"
                className="flex gap-x-3 items-center py-2 px-10 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={peopleGreen} alt="icon" className="max-w-[52px]" />
                <h2 className="text-brown-dark font-bold text-[18px] group-hover:text-green-dark">
                  聚會揪團
                  <span className="block text-[12px] text-brown-normal tracking-normal mt-2">
                    Get-together
                  </span>
                </h2>
              </Link>
            </li>
            <li>
              <Link
                to="/page/community"
                className="flex gap-x-3 items-center pt-2 pb-5 px-10 group"
                onClick={() => setIsMenuActive(false)}
              >
                <img src={msgGreen} alt="icon" className="max-w-[52px]" />
                <h2 className="text-brown-dark font-bold text-[18px] group-hover:text-green-dark">
                  心得交流
                  <span className="block text-[12px] text-brown-normal tracking-normal mt-2">
                    Forum
                  </span>
                </h2>
              </Link>
            </li>
            <li className="max-w-[168px] mx-auto border-t-[1.5px] border-brown-light">
              <div
                className="flex gap-x-2 items-center cursor-pointer mb-4 px-3 pt-6 pb-2 group"
                onClick={() => {
                  setSignInLightBoxState(true);
                  setIsMenuActive(false);
                }}
              >
                <img src={accountBrown} alt="icon" className="w-[34px] ml-2" />
                <h2 className="text-brown-dark font-semibold group-hover:text-green-dark">
                  我的帳號
                </h2>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      {/* <!-- PC Menu & Banner --> */}
      <div className="mt-32 xl:mt-10">
        <div className="container flex mx-auto justify-evenly">
          {/* <!-- PC Navbar --> */}
          <nav className="max-w-[180px] hidden xl:block">
            <h1>
              <strong className="hidden">特寵生活</strong>
              <Link to="/" className="hover:opacity-70">
                <img className="mx-auto" src={logo} alt="logo" />
              </Link>
            </h1>
            <ul className="mt-[32px]">
              <li className="mt-[16px]">
                <Link
                  to="/page/store-overview"
                  className="flex items-center hover:opacity-70"
                >
                  <img src={homeGreen} alt="home" />
                  <h2 className="ml-[12px] text-[20px] text-brown-dark font-bold">
                    <span className="tracking-wide">特寵探店</span>
                    <span className="block text-[12px] text-brown-normal">
                      Exotic pet stores
                    </span>
                  </h2>
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link
                  to="/page/event"
                  className="flex items-center hover:opacity-70"
                >
                  <img src={calendarGreen} alt="calendar" />
                  <h2 className="ml-[12px] text-[20px] text-brown-dark font-bold">
                    <span className="tracking-wide">特寵活動</span>
                    <span className="block text-[12px] text-brown-normal">
                      Exotic pet event
                    </span>
                  </h2>
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link
                  to="/page/exotic-overview"
                  className="flex items-center cursor-pointer hover:opacity-70"
                >
                  <img src={introGreen} alt="intro" />
                  <h2 className="ml-[12px] text-[20px] text-brown-dark font-bold">
                    <span className="tracking-wide">特寵介紹</span>
                    <span className="block text-[12px] text-brown-normal">
                      Introduction
                    </span>
                  </h2>
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link
                  to="/page/gathering"
                  className="flex items-center hover:opacity-70"
                >
                  <img src={peopleGreen} alt="people" />
                  <h2 className="ml-[12px] text-[20px] text-brown-dark font-bold">
                    <span className="tracking-wide">聚會揪團</span>
                    <span className="block text-[12px] text-brown-normal">
                      Get-together
                    </span>
                  </h2>
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link
                  to="/page/community"
                  className="flex items-center hover:opacity-70"
                >
                  <img src={msgGreen} alt="msg" />
                  <h2 className="ml-[12px] text-[20px] text-brown-dark font-bold">
                    <span className="tracking-wide">心得交流</span>
                    <span className="block text-[12px] text-brown-normal">
                      Forum
                    </span>
                  </h2>
                </Link>
              </li>
            </ul>
            {/* <!-- Download Link --> */}
            <div className="mt-[32px]">
              <a
                href="https://play.google.com"
                className="max-w-[200px] mx-auto block hover:opacity-70"
              >
                <img src={googlePlay} alt="google-play" />
              </a>
              <a
                href="https://www.apple.com/tw/app-store"
                className="max-w-[200px] mx-auto mt-[12px] block hover:opacity-70"
              >
                <img src={appStore} alt="app-store" />
              </a>
            </div>
            {/* <!-- Scroll Animation --> */}
            <div className="mt-[48px] -rotate-90 mx-auto max-w-[80px]">
              <p className="text-[12px] font-bold text-center text-brown-dark">
                Scroll
              </p>
              <div className="scroll my-[4px] pb-2">
                <div className="my-1 border-b-2 scroll__line border-green-normal"></div>
                <div className="scroll__ball bg-brown-dark"></div>
              </div>
            </div>
          </nav>
          {/* <!-- Banner --> */}
          <figure className="relative xl:ml-[24px]">
            <img className="sm:hidden" src={phoneBanner} alt="phone-banner" />
            <img
              className="hidden sm:block xl:hidden"
              src={bannerImg}
              alt="banner"
            />
            <img className="hidden xl:block" src={bannerBg} alt="banner-bg" />
            {/* <!-- Animal --> */}
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              className="absolute hidden xl:block top-40 left-16"
              src={snakeImg}
              alt="snake"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="600"
              className="absolute hidden xl:block bottom-16 left-24"
              src={hamsterImg}
              alt="hamster"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="1000"
              className="absolute hidden xl:block top-60 left-80"
              src={geckoImg}
              alt="gecko"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="1200"
              className="hidden xl:block absolute top-32 right-[24%]"
              src={parrotImg}
              alt="parrot"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="800"
              className="absolute hidden xl:block bottom-12 right-72"
              src={turtleImg}
              alt="turtle"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="400"
              className="absolute hidden xl:block bottom-40 right-16"
              src={duckImg}
              alt="duck"
            />
          </figure>
        </div>
        {/* <!-- Scroll Animation --> */}
        <div className="mt-[48px] -rotate-90 mx-auto max-w-[80px] md:hidden">
          <p className="text-[12px] font-bold text-center text-brown-dark">
            Scroll
          </p>
          <div className="scroll my-[4px] pb-2">
            <div className="my-1 border-b-2 scroll__line border-green-normal"></div>
            <div className="scroll__ball bg-brown-dark"></div>
          </div>
        </div>
      </div>
    </>
  );
}
