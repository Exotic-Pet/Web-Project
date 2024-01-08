import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/all.css";
import logo from "../assets/layout/LOGO.svg";
import accountBrown from "../assets/layout/account-brown.svg";
import accountGreen from "../assets/layout/account-green.svg";

export default function Header() {
  return (
    <header className="py-[14px] fixed top-0 z-10 w-full shadow-md bg-white">
      {/* <!-- Navbar --> */}
      <nav className="leading-none flex items-center justify-between mx-auto px-4 lg:px-8 2xl:px-0 2xl:container">
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
        <ul className="gap-x-4 items-center hidden font-bold tracking-wide text-center lg:flex">
          <li className="nav__list">
            <Link
              to="/"
              className="nav__list__link py-2 text-brown-dark text-[20px]"
              href="#"
            >
              特寵探店
            </Link>
            {/* <!-- Expand Menu --> */}
            <div className="nav__list__menu">
              <ul className="py-1 bg-brown-dark rounded-bl-xl rounded-br-xl">
                <li className="text-[16px] font-semibold">
                  <a
                    className="block py-3 text-white hover:text-yellow-light"
                    href="#"
                  >
                    特寵咖啡廳
                  </a>
                </li>
                <li className="text-[16px] font-semibold">
                  <hr className="max-w-[80%] mx-auto border-white" />
                  <a
                    className="block py-3 text-white hover:text-yellow-light"
                    href="#"
                  >
                    特寵專賣店
                  </a>
                </li>
                <li className="text-[16px] font-semibold">
                  <hr className="max-w-[80%] mx-auto border-white" />
                  <a
                    className="block py-3 text-white hover:text-yellow-light"
                    href="#"
                  >
                    特寵醫院
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__list">
            <a
              className="nav__list__link py-2 text-brown-dark text-[20px]"
              href="./event.html"
            >
              特寵活動
            </a>
          </li>
          <li className="nav__list">
            <a
              className="nav__list__link py-2 text-brown-dark text-[20px]"
              href="#"
            >
              特寵介紹
            </a>
            {/* <!-- Expand Menu --> */}
            <div className="nav__list__menu">
              <ul className="py-1 bg-brown-dark rounded-bl-xl rounded-br-xl">
                <li className="text-[16px] font-semibold">
                  <a
                    className="block py-3 text-white hover:text-yellow-light"
                    href="#"
                  >
                    兩棲爬蟲類
                  </a>
                </li>
                <li className="text-[16px] font-semibold">
                  <hr className="max-w-[80%] mx-auto border-white" />
                  <a
                    className="block py-3 text-white hover:text-yellow-light"
                    href="#"
                  >
                    兔、鼠類
                  </a>
                </li>
                <li className="text-[16px] font-semibold">
                  <hr className="max-w-[80%] mx-auto border-white" />
                  <a
                    className="block py-3 text-white hover:text-yellow-light"
                    href="#"
                  >
                    鳥類
                  </a>
                </li>
                <li className="text-[16px] font-semibold">
                  <hr className="max-w-[80%] mx-auto border-white" />
                  <a
                    className="block py-3 text-white hover:text-yellow-light"
                    href="#"
                  >
                    節肢動物類
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__list">
            <a
              className="nav__list__link py-2 text-brown-dark text-[20px]"
              href="#"
            >
              聚會揪團
            </a>
          </li>
          <li className="nav__list">
            <a
              className="nav__list__link py-2 text-brown-dark text-[20px]"
              href="#"
            >
              心得交流
            </a>
          </li>
          {/* <!-- Account Info --> */}
          <li className="ml-[16px]">
            <a
              className="flex items-center p-2 text-white rounded-full bg-brown-dark group"
              href="#"
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
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
