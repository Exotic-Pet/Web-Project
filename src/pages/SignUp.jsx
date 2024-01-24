import "../styles/all.css";

import googleIcon from "../assets/signUp/google.svg";
import facebookIcon from "../assets/signUp/facebook.svg";
import lineIcon from "../assets/signUp/line.svg";

export default function SignUp({ isOpen, onToggle }) {
  const isOpenLightBox = isOpen ? "block" : "hidden";
  return (
    <div
      className={`${isOpenLightBox} absolute top-0 bottom-0 left-0 right-0 bg-black-65 flex justify-center items-center`}
      onClick={(e) => onToggle(e)}
    >
      <article
        className="lightBox__content max-w-[90%] lg:max-w-[548px] max-h-[90vh] overflow-y-auto tracking-wide bg-white rounded-[20px] p-6 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-x-3 px-6 py-[14px] bg-gray-dark rounded-full">
          <button className="text-green-dark bg-white flex-1 py-3 font-bold text-xl rounded-full tracking-wider hover:opacity-80">
            登入
          </button>
          <button className="text-brown-dark flex-1 py-3 font-bold text-xl rounded-full tracking-wider hover:opacity-80">
            註冊
          </button>
        </div>
        <div className="mt-12 mb-10 px-6 text-brown-dark">
          <label htmlFor="account" className="mb-6 block">
            <span className="text-[18px] font-bold mr-5">帳號</span>
            <input
              className="px-6 py-[10px] mt-2 sm:mt-0 block sm:inline sm:min-w-[320px] border border-[1.5px] border-brown-normal rounded-full"
              type="email"
              id="account"
              placeholder="請輸入使用者名稱 / Email"
            />
          </label>
          <label htmlFor="password" className="mb-9 block">
            <span className="text-[18px] font-bold mr-5">密碼</span>
            <input
              className="px-6 py-[10px] mt-2 sm:mt-0 block sm:inline sm:min-w-[320px] border border-[1.5px] border-brown-normal rounded-full focus:border-green-normal"
              type="password"
              id="password"
              placeholder="請輸入密碼"
            />
          </label>
          <button className="bg-green-light block rounded-full w-full py-4 tracking-widest font-bold text-xl hover:text-white">
            登 入
          </button>
          <div className="mt-6 flex justify-evenly">
            <button className="text-[18px] font-bold tracking-wide hover:text-brown-normal">
              忘記帳號
            </button>
            <button className="text-[18px] font-bold tracking-wide hover:text-brown-normal">
              忘記密碼
            </button>
          </div>
        </div>
        <section className="">
          <div className="mb-6 flex gap-x-6 justify-between items-center">
            <hr className=" border-brown-normal flex-1" />
            <h3 className="text-brown-normal tracking-normal">其他登入方式</h3>
            <hr className=" border-brown-normal flex-1" />
          </div>
          <figure className="flex gap-x-4 justify-center">
            <img className="cursor-pointer hover:-translate-y-1" src={googleIcon} alt="google" />
            <img className="cursor-pointer hover:-translate-y-1" src={facebookIcon} alt="facebook" />
            <img className="cursor-pointer hover:-translate-y-1" src={lineIcon} alt="line" />
          </figure>
        </section>
      </article>
    </div>
  );
}
