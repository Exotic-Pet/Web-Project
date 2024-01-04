import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../styles/all.css";
import logo from '../assets/layout/LOGO.svg';
import accountBrown from '../assets/layout/account-brown.svg';

export default function Header() {
  return (
    <header className="py-[16px]">
    {/* Navbar */}
    <nav className="flex items-center justify-between mx-auto leading-none px-4 lg:px-8 2xl:px-0 2xl:container">
      <h1>
        <strong className="hidden">特寵生活</strong>
        <Link to="/" className="hover:opacity-70">
          <img className="max-w-[48px]" src={logo} alt="logo" />
        </Link>
      </h1>
      {/* Mobile Menu */}
      <a className="text-4xl text-brown-dark lg:hidden" href="#">
        <FontAwesomeIcon icon={faBars} />
      </a>
      {/* PC Menu */}
      <ul className="items-center hidden font-black tracking-wide text-center lg:flex">
        <li className="nav__list min-w-[104px] border-r border-brown-light">
          <Link to="/store" className="nav__list__link py-2 text-brown-dark text-[20px]">
            特寵探店
          </Link>
        </li>
        <li className="nav__list min-w-[104px] border-r border-brown-light">
          <a className="nav__list__link py-2 text-brown-dark text-[20px]" href="#">特寵活動</a>
        </li>
        <li className="nav__list min-w-[104px] border-r border-brown-light">
          <a className="nav__list__link py-2 text-brown-dark text-[20px]" href="#">特寵介紹</a>
        </li>
        <li className="nav__list min-w-[104px] border-r border-brown-light">
          <a className="nav__list__link py-2 text-brown-dark text-[20px]" href="#">聚會揪團</a>
        </li>
        <li className="nav__list min-w-[104px]">
          <a className="nav__list__link py-2 text-brown-dark text-[20px]" href="#">心得交流</a>
        </li>
        {/* Account Info */}
        <li className="ml-[16px]">
          <a className="flex items-center p-2 text-white rounded-full bg-brown-dark" href="#">
            <img className="max-w-[40px]" src={accountBrown} alt="account" />
            <h2 className="ml-2 mr-1 text-[18px] hover:text-green-light">我的帳號</h2>
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}
