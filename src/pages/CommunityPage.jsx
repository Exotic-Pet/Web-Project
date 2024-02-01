import { useState } from "react";
import LightBox from "../components/LightBox";
import AosInit from "../components/AosInit";

import createIcon from "../assets/community/create-icon.svg";
import turtle from "../assets/community/turtle.svg";
import triangle from "../assets/community/triangle.svg";
import unlike from "../assets/community/unlike.svg";
import unselect from "../assets/community/unselect.svg";
import time from "../assets/community/time.svg";
import sample1 from "../assets/community/sample1.png";
import sample2 from "../assets/community/sample2.png";

export default function CommunityPage() {
  // AOS Init
  AosInit();
	// LightBox State
  const [communityLightBoxState, setCommunityLightBoxState] = useState(false);

  return (
    <>
      {/* LightBox */}
      {communityLightBoxState && (
        <LightBox
          communityLightBoxState={communityLightBoxState}
          setCommunityLightBoxState={setCommunityLightBoxState}
          type="COMMUNITY CONTENT"
        />
      )}
      {/* Banner */}
      <div className="bg-cyan-normal bg-no-repeat bg-center bg-[url('../assets/community/banner.svg')] min-h-[133px] mt-20"></div>
      {/*Content Info*/}
      <main className="container justify-center mx-auto mb-32 ">
        <nav className="mt-8">
          <ul className="flex justify-center gap-x-7">
            <li className="pr-6 border-r border-solid border-brown-normal">
              <h2 className="text-2xl font-bold cursor-pointer text-brown-dark hover:text-cyan-dark">
                全部
              </h2>
            </li>
            <li className="flex pr-6 border-r border-solid border-brown-normal">
              <h2 className="mr-3 text-2xl font-bold cursor-pointer text-brown-dark hover:text-cyan-dark">
                兩棲爬蟲版
              </h2>
              <img src={triangle} alt="list" />
            </li>
            <li className="flex pr-6 border-r border-solid border-brown-normal">
              <h2 className="mr-3 text-2xl font-bold cursor-pointer text-brown-dark hover:text-cyan-dark">
                鼠版
              </h2>
              <img src={triangle} alt="list" />
            </li>
            <li className="flex pr-6 border-r border-solid border-brown-normal">
              <h2 className="mr-3 text-2xl font-bold cursor-pointer text-brown-dark hover:text-cyan-dark">
                兔版
              </h2>
              <img src={triangle} alt="list" />
            </li>
            <li className="flex pr-6 border-r border-solid border-brown-normal">
              <h2 className="mr-3 text-2xl font-bold cursor-pointer text-brown-dark hover:text-cyan-dark">
                鳥版
              </h2>
              <img src={triangle} alt="list" />
            </li>
            <li className="flex">
              <h2 className="mr-3 text-2xl font-bold cursor-pointer text-brown-dark hover:text-cyan-dark">
                節肢動物版
              </h2>
              <img src={triangle} alt="list" />
            </li>
          </ul>
        </nav>
        <ul className="mt-4 py-3 flex border border-solid border-brown-light rounded-[41px] bg-white gap-x-5 max-w-[760px] justify-center mx-auto">
          <li>
            <h3 className="text-xl text-brown-dark cursor-pointer hover:text-brown-normal">守宮</h3>
          </li>
          <li>
            <h3 className="text-xl text-brown-dark cursor-pointer hover:text-brown-normal">蜥蜴</h3>
          </li>
          <li>
            <h3 className="text-xl text-brown-dark cursor-pointer hover:text-brown-normal">變色龍</h3>
          </li>
          <li>
            <h3 className="text-xl text-brown-dark cursor-pointer hover:text-brown-normal">烏龜</h3>
          </li>
          <li>
            <h3 className="text-xl text-brown-dark cursor-pointer hover:text-brown-normal">青蛙</h3>
          </li>
          <li>
            <h3 className="text-xl text-brown-dark cursor-pointer hover:text-brown-normal">蛇</h3>
          </li>
          <li>
            <h3 className="text-xl text-brown-dark cursor-pointer hover:text-brown-normal">其他</h3>
          </li>
        </ul>
				<div className="my-4 flex gap-x-4 justify-end text-brown-dark leading-4">
              <h4 className="pr-4 border-r border-brown-normal">排序</h4>
              <button className="hover:text-brown-normal">熱門</button>
              <button className="hover:text-brown-normal">最新</button>
            </div>
        <div className="container mx-auto mt-6">
          {/*容器*/}
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/*格線*/}
            <li className="col-span-1">
              <ul className="flex flex-col gap-4">
                {/*中*/}
                <li data-aos="fade-in" data-aos-duration="1000" className="cursor-pointer py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  onClick={() => setCommunityLightBoxState(true)}
                >
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">鼠</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠飼養
                  </h3>
                  <img src={sample1} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    最近在社團常看到新手分享倉鼠飼養，但似乎沒有接收到正確的飼養資訊，基礎飼養上愛鼠協會官網即可，今天來分享一下大家比較少談到的科養。在一般的環境當中，
                  </p>
                </li>
                {/*大*/}
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">兔子</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    兔子放風聖地推薦
                  </h3>
                  <img src={sample2} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect/" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">兔子</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    兔子放風聖地推薦
                  </h3>
                  <img src={sample2} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
                {/*小*/}
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">守宮</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    想請問大家，要怎麼幫助守宮脫皮？
                  </h3>
                  <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    如題 守宮養一個月 今天食量突然減少 才注意到皮膚的比較白
                    要脫皮了 我有噴一點水在它身上
                    正常脫皮過程要多久？要超過多久沒脫皮完成
                    才需要幫他？看其他人說脫皮完會有好幾天沒食慾
                    超過幾天就算不正常？還是有什麼要注意的 謝謝
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">鼠</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠飼養
                  </h3>
                  <img src={sample1} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    最近在社團常看到新手分享倉鼠飼養，但似乎沒有接收到正確的飼養資訊，基礎飼養上愛鼠協會官網即可，今天來分享一下大家比較少談到的科養。在一般的環境當中，
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">守宮</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    想請問大家，要怎麼幫助守宮脫皮？
                  </h3>
                  <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    如題 守宮養一個月 今天食量突然減少 才注意到皮膚的比較白
                    要脫皮了 我有噴一點水在它身上
                    正常脫皮過程要多久？要超過多久沒脫皮完成
                    才需要幫他？看其他人說脫皮完會有好幾天沒食慾
                    超過幾天就算不正常？還是有什麼要注意的 謝謝
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">守宮</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    想請問大家，要怎麼幫助守宮脫皮？
                  </h3>
                  <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    如題 守宮養一個月 今天食量突然減少 才注意到皮膚的比較白
                    要脫皮了 我有噴一點水在它身上
                    正常脫皮過程要多久？要超過多久沒脫皮完成
                    才需要幫他？看其他人說脫皮完會有好幾天沒食慾
                    超過幾天就算不正常？還是有什麼要注意的 謝謝
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">兔子</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    兔子放風聖地推薦
                  </h3>
                  <img src={sample2} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
              </ul>
            </li>
            <li className="col-span-1">
              <ul className="flex flex-col gap-4">
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">守宮</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    想請問大家，要怎麼幫助守宮脫皮？
                  </h3>
                  <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    如題 守宮養一個月 今天食量突然減少 才注意到皮膚的比較白
                    要脫皮了 我有噴一點水在它身上
                    正常脫皮過程要多久？要超過多久沒脫皮完成
                    才需要幫他？看其他人說脫皮完會有好幾天沒食慾
                    超過幾天就算不正常？還是有什麼要注意的 謝謝
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">鼠</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠飼養
                  </h3>
                  <img src={sample1} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    最近在社團常看到新手分享倉鼠飼養，但似乎沒有接收到正確的飼養資訊，基礎飼養上愛鼠協會官網即可，今天來分享一下大家比較少談到的科養。在一般的環境當中，
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">鼠</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠飼養
                  </h3>
                  <img src={sample1} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    最近在社團常看到新手分享倉鼠飼養，但似乎沒有接收到正確的飼養資訊，基礎飼養上愛鼠協會官網即可，今天來分享一下大家比較少談到的科養。在一般的環境當中，
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">兔子</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    兔子放風聖地推薦
                  </h3>
                  <img src={sample2} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">守宮</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    想請問大家，要怎麼幫助守宮脫皮？
                  </h3>
                  <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    如題 守宮養一個月 今天食量突然減少 才注意到皮膚的比較白
                    要脫皮了 我有噴一點水在它身上
                    正常脫皮過程要多久？要超過多久沒脫皮完成
                    才需要幫他？看其他人說脫皮完會有好幾天沒食慾
                    超過幾天就算不正常？還是有什麼要注意的 謝謝
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">兔子</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    兔子放風聖地推薦
                  </h3>
                  <img src={sample2} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">鼠</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠飼養
                  </h3>
                  <img src={sample1} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    最近在社團常看到新手分享倉鼠飼養，但似乎沒有接收到正確的飼養資訊，基礎飼養上愛鼠協會官網即可，今天來分享一下大家比較少談到的科養。在一般的環境當中，
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">鼠</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠飼養
                  </h3>
                  <img src={sample1} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    最近在社團常看到新手分享倉鼠飼養，但似乎沒有接收到正確的飼養資訊，基礎飼養上愛鼠協會官網即可，今天來分享一下大家比較少談到的科養。在一般的環境當中，
                  </p>
                </li>
              </ul>
            </li>
            <li className="col-span-1">
              <ul className="flex flex-col gap-4">
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">鼠</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠飼養
                  </h3>
                  <img src={sample1} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    最近在社團常看到新手分享倉鼠飼養，但似乎沒有接收到正確的飼養資訊，基礎飼養上愛鼠協會官網即可，今天來分享一下大家比較少談到的科養。在一般的環境當中，
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">守宮</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    想請問大家，要怎麼幫助守宮脫皮？
                  </h3>
                  <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    如題 守宮養一個月 今天食量突然減少 才注意到皮膚的比較白
                    要脫皮了 我有噴一點水在它身上
                    正常脫皮過程要多久？要超過多久沒脫皮完成
                    才需要幫他？看其他人說脫皮完會有好幾天沒食慾
                    超過幾天就算不正常？還是有什麼要注意的 謝謝
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">守宮</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    想請問大家，要怎麼幫助守宮脫皮？
                  </h3>
                  <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    如題 守宮養一個月 今天食量突然減少 才注意到皮膚的比較白
                    要脫皮了 我有噴一點水在它身上
                    正常脫皮過程要多久？要超過多久沒脫皮完成
                    才需要幫他？看其他人說脫皮完會有好幾天沒食慾
                    超過幾天就算不正常？還是有什麼要注意的 謝謝
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">兔子</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    兔子放風聖地推薦
                  </h3>
                  <img src={sample2} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">鼠</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠飼養
                  </h3>
                  <img src={sample1} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    最近在社團常看到新手分享倉鼠飼養，但似乎沒有接收到正確的飼養資訊，基礎飼養上愛鼠協會官網即可，今天來分享一下大家比較少談到的科養。在一般的環境當中，
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">兔子</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    兔子放風聖地推薦
                  </h3>
                  <img src={sample2} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">守宮</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    想請問大家，要怎麼幫助守宮脫皮？
                  </h3>
                  <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    如題 守宮養一個月 今天食量突然減少 才注意到皮膚的比較白
                    要脫皮了 我有噴一點水在它身上
                    正常脫皮過程要多久？要超過多久沒脫皮完成
                    才需要幫他？看其他人說脫皮完會有好幾天沒食慾
                    超過幾天就算不正常？還是有什麼要注意的 謝謝
                  </p>
                </li>
                <li data-aos="fade-in" data-aos-duration="1000" className=" py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9">
                  <div className="flex gap-x-[6px] justify-end">
                    <img src={unlike} alt="unlike" />
                    <img src={unselect} alt="unselect" />
                  </div>
                  <div className="flex mb-1">
                    <h4 className="text-xs text-cyan-dark">兔子</h4>
                    <img src={time} alt="time" className="ml-[6px] mr-[3px]" />
                    <p className="text-xs text-brown-normal">1小時前</p>
                  </div>
                  <h3 className="text-xl font-bold text-brown-dark">
                    兔子放風聖地推薦
                  </h3>
                  <img src={sample2} alt="image" className="my-3" />
                  <p className="text-base text-brown-dark ellipsis-3">
                    自從家裡養了兔子，都在煩惱到底要帶牠們去哪裡放風跑跑，看牠在家都有點無聊，想說這次可以帶牠一起出門（不然都會跟主人一樣變宅宅）
                    不過不太想讓他們待在機車上太久，所以盡量都是找台中市區境內的寵物餐廳，但是要找到適合兔子放風的場域也是難上加難，去勤美草悟道又怕兔子被嚇到（哀）
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
			{/*  */}
			<button className="fixed top-[72%] right-0 block tracking-wide font-bold group scale-75 translate-x-5 md:scale-100 md:translate-x-3">
        <div className="relative flex gap-x-3 items-center py-6 px-5 bg-cyan-dark rounded-tl-3xl rounded-bl-3xl">
          <img
            className="absolute -z-20 -top-24 w-[120px] h-[100px] left-[10%] duration-300 opacity-0 group-hover:opacity-100"
            src={turtle}
            alt="animal"
          />
          <img
            className="duration-300 group-hover:-rotate-180"
            src={createIcon}
            alt="create"
          />
          <h3 className="duration-300 text-xl text-white whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[112px]">
            我要發文
          </h3>
        </div>
      </button>
    </>
  );
}
