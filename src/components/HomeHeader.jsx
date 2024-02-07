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
import accountGreen from "../assets/layout/account-green.svg";
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
              isMenuActive ? "menu--open" : "menu--close"
            } overflow-hidden absolute top-[92px] left-0 right-0 bg-brown-dark tracking-wide ease-out duration-500 xl:hidden`}
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
        </nav>
      </header>
      {/* <!-- PC Menu & Banner --> */}
      <div className="mt-28 xl:mt-10">
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
                    特寵探店
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
                    特寵活動
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
                    特寵介紹
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
                    聚會揪團
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
                    心得交流
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
                href="#"
                className="max-w-[200px] mx-auto block hover:opacity-70"
              >
                <img src={googlePlay} alt="google-play" />
              </a>
              <a
                href="#"
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
            <img className="xl:hidden" src={bannerImg} alt="banner" />
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
      </div>
    </>
  );
}
