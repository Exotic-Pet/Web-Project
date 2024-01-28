import { Link } from "react-router-dom";
import { useState } from "react";
import LightBox from "../components/LightBox";
import "../styles/all.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/layout/LOGO.svg";
import accountBrown from "../assets/layout/account-brown.svg";
import accountGreen from "../assets/layout/account-green.svg";

export default function Header() {
  const [isSignInLightBoxState, setSignInLightBoxState] = useState(false);

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
      <header className="py-[16px] fixed top-0 z-10 w-full shadow-md bg-white xl:py-[14px]">
        {/* <!-- Navbar --> */}
        <nav className="flex items-center justify-between px-4 mx-auto leading-none lg:px-8 2xl:px-0 2xl:container">
          <h1>
            <strong className="hidden">特寵生活</strong>
            <Link to="/" className="hover:opacity-70">
              <img className="max-w-[48px]" src={logo} alt="logo" />
            </Link>
          </h1>
          {/* <!-- Mobile Menu --> */}
          <a className="text-4xl text-brown-dark lg:hidden" href="#">
            <FontAwesomeIcon icon={faBars} />
          </a>
          {/* <!-- PC Menu --> */}
          <ul className="items-center hidden font-bold tracking-wide text-center gap-x-4 lg:flex">
            <li className="nav__list">
              <Link
                to="/page/store-overview"
                className="nav__list__link py-2 text-brown-dark text-[20px]"
                href="#"
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
                      className="block cursor-pointer py-3 text-white hover:text-yellow-light"
                    >
                      特寵咖啡廳
                    </Link>
                  </li>
                  <li className="text-[16px] font-semibold">
                    <hr className="max-w-[80%] mx-auto border-white" />
                    <Link
                      to="/page/store-search"
                      state={{ category: "specialtyStore" }}
                      className="block cursor-pointer py-3 text-white hover:text-yellow-light"
                    >
                      特寵專賣店
                    </Link>
                  </li>
                  <li className="text-[16px] font-semibold">
                    <hr className="max-w-[80%] mx-auto border-white" />
                    <Link
                      to="/page/store-search"
                      state={{ category: "hospital" }}
                      className="block cursor-pointer py-3 text-white hover:text-yellow-light"
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
                to="/page/event"
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
                className="cursor-pointer flex items-center p-2 text-white rounded-full bg-brown-dark group"
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
