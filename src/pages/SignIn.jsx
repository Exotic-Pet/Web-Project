import { useState } from "react";
import "../styles/all.css";
import Swal from "sweetalert2";

import googleIcon from "../assets/signIn/google.svg";
import facebookIcon from "../assets/signIn/facebook.svg";
import lineIcon from "../assets/signIn/line.svg";

export default function SignIn({ isOpenState, setIsOpenState, toggleState }) {
  // Toggle Page
  const [isSignIn, setIsSignIn] = useState(true);

  // User Input Info
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  // Handle Submit 
  const handleSubmit = () => {
    if (isSignIn) {
      const storedAccount = localStorage.getItem("account");
      const storedPassword = localStorage.getItem("password");
      if (account === storedAccount && password === storedPassword) {
        // Login Success
        Swal.fire({
          title: " 登入成功！",
          icon: "success",
          confirmButtonText: "前往探索",
          backdrop: true,
          timer: 2000,
        });
        setIsOpenState(false);
      } else {
        // Login Error
        Swal.fire({
          title: "帳號或密碼錯誤",
          icon: "error",
          confirmButtonText: "重新嘗試",
          backdrop: true,
          timer: 2000,
        });
      }
    } else {
      // Register
      if (account.trim() !== "" && password.trim() !== "") {
        localStorage.setItem("account", account);
        localStorage.setItem("password", password);
        Swal.fire({
          title: " 註冊成功！",
          icon: "success",
          confirmButtonText: "確定",
          backdrop: true,
          timer: 2000,
        }).then(() => {
          // Change to SignIn Page
          setIsSignIn(true);
          // Reset Input Text
          setAccount("");
          setPassword("");
        });
      } else {
        Swal.fire({
          title: "請正確輸入",
          icon: "error",
          confirmButtonText: "重新嘗試",
          backdrop: true,
          timer: 2000,
        });
      }
    }
  };

  return (
    <div
      className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-brown-60 flex justify-center items-center"
      onClick={(e) => toggleState(e, isOpenState, setIsOpenState)}
    >
      <article
        className="lightBox__content lightBox__scrollbar lightBox__scrollbar--green max-w-[90%] lg:max-w-[548px] max-h-[90vh] overflow-y-auto tracking-wide bg-white rounded-[20px] p-7 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-x-3 px-3 md:px-6 py-2 md:py-[14px] bg-gray-dark rounded-full">
          <button
            className={`${
              isSignIn ? "text-green-dark bg-white" : "text-brown-dark"
            } " flex-1 py-3 font-bold text-xl rounded-full tracking-wider hover:opacity-80`}
            onClick={() => setIsSignIn(true)}
          >
            登入
          </button>
          <button
            className={`${
              isSignIn ? "text-brown-dark" : "text-green-dark bg-white"
            } " flex-1 py-3 font-bold text-xl rounded-full tracking-wider hover:opacity-80`}
            onClick={() => setIsSignIn(false)}
          >
            註冊
          </button>
        </div>
        <div className="mt-6 md:mt-12 mb-6 md:mb-10 px-6 text-brown-dark">
          <label htmlFor="account" className="mb-6 block">
            <span className="text-[18px] font-bold mr-5">帳號</span>
            <input
              className="input__style--green outline  outline-[1.5px] outline-brown-normal px-6 py-2 md:py-[10px] mt-2 sm:mt-0 block sm:inline-block sm:min-w-[320px] rounded-full"
              type="email"
              id="account"
              placeholder={`請輸入${isSignIn ? "使用者名稱 / " : ""}Email`}
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="mb-9 block">
            <span className="text-[18px] font-bold mr-5">密碼</span>
            <input
              className="input__style--green outline  outline-[1.5px] outline-brown-normal px-6 py-2 md:py-[10px] mt-2 sm:mt-0 block sm:inline-block sm:min-w-[320px] rounded-full focus:border-green-normal"
              type="password"
              id="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="bg-green-light block rounded-full w-full py-3 md:py-4 tracking-wider font-bold text-xl hover:text-white"
            onClick={() => handleSubmit()}
          >
            {isSignIn ? "登 入" : "註冊會員"}
          </button>
          <div className="mt-6 flex justify-around md:justify-evenly">
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
            <h3 className="text-brown-normal tracking-normal">
              其他{isSignIn ? "登入" : "註冊"}方式
            </h3>
            <hr className=" border-brown-normal flex-1" />
          </div>
          <figure className="flex gap-x-4 justify-center">
            <img
              className="cursor-pointer hover:-translate-y-1"
              src={googleIcon}
              alt="google"
            />
            <img
              className="cursor-pointer hover:-translate-y-1"
              src={facebookIcon}
              alt="facebook"
            />
            <img
              className="cursor-pointer hover:-translate-y-1"
              src={lineIcon}
              alt="line"
            />
          </figure>
        </section>
      </article>
    </div>
  );
}
