import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AosInit from "./AosInit";
import "../styles/all.css";

import logo from "../assets/layout/LOGO.svg";
import homeGreen from "../assets/index/home-green.svg";
import calendarGreen from "../assets/index/calendar-green.svg";
import introGreen from "../assets/index/intro-green.svg";
import peopleGreen from "../assets/index/people-green.svg";
import msgGreen from "../assets/index/msg-green.svg";
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

  return (
    <>
      <header className="py-[16px] fixed top-0 z-10 w-full shadow-md bg-white xl:hidden">
        <nav className="flex items-center justify-between px-4 mx-auto leading-none lg:px-8 2xl:px-0 2xl:container">
          <h1>
            <strong className="hidden">特寵生活</strong>
            <Link to="/" className="hover:opacity-70">
              <img className="max-w-[48px]" src={logo} alt="logo" />
            </Link>
          </h1>
          <a className="text-4xl text-brown-dark" href="#">
            <FontAwesomeIcon icon={faBars} />
          </a>
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
                <Link to="/page/store-overview"
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
                <Link to="/page/event" className="flex items-center hover:opacity-70">
                  <img
                    src={calendarGreen}
                    alt="calendar"
                  />
                  <h2 className="ml-[12px] text-[20px] text-brown-dark font-bold">
                    特寵活動
                    <span className="block text-[12px] text-brown-normal">
                      Exotic pet event
                    </span>
                  </h2>
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link to="/page/exotic-overview" className="flex items-center cursor-pointer hover:opacity-70">
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
                <Link to="/page/gathering" className="flex items-center hover:opacity-70">
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
                <Link to="/page/community" className="flex items-center hover:opacity-70">
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
            <img data-aos="zoom-in" data-aos-delay="200"
              className="absolute hidden xl:block top-40 left-16"
              src={snakeImg}
              alt="snake"
            />
            <img data-aos="zoom-in" data-aos-delay="600"
              className="absolute hidden xl:block bottom-16 left-24"
              src={hamsterImg}
              alt="hamster"
            />
            <img data-aos="zoom-in" data-aos-delay="1000"
              className="absolute hidden xl:block top-60 left-80"
              src={geckoImg}
              alt="gecko"
            />
            <img data-aos="zoom-in" data-aos-delay="1200"
              className="hidden xl:block absolute top-32 right-[24%]"
              src={parrotImg}
              alt="parrot"
            />
            <img data-aos="zoom-in" data-aos-delay="800"
              className="absolute hidden xl:block bottom-12 right-72"
              src={turtleImg}
              alt="turtle"
            />
            <img data-aos="zoom-in" data-aos-delay="400"
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
