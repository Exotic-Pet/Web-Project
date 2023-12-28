import "../styles/all.css";
import logo from '../assets/layout/LOGO.svg';
import accountGreen from '../assets/layout/account-green.svg';

export default function Header () {
  return (
    <header className="py-[16px]">
    {/* Navbar */}
    <nav className="container flex items-center justify-between px-2 mx-auto leading-none lg:px-0">
      <h1>
        <strong className="hidden">特寵生活</strong>
        <a href="./home.html" className="hover:opacity-70">
          <img className="max-w-[48px]" src={logo} alt="logo" />
        </a>
      </h1>
      {/* Mobile Menu */}
      <a className="text-4xl text-brown-dark lg:hidden" href="#">
        <i className="fa-solid fa-bars"></i>
      </a>
      {/* PC Menu */}
      <ul className="items-center hidden font-black tracking-wide text-center lg:flex">
        <li className="nav__list min-w-[104px] border-r border-brown-light">
          <a className="nav__list__link py-2 text-brown-dark text-[20px]" href="#">特寵探店</a>
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
            <img className="max-w-[40px]" src={accountGreen} alt="account" />
            <h2 className="ml-2 mr-1 text-[18px] hover:text-green-light">我的帳號</h2>
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}
