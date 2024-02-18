import { useState } from "react";
import { Link } from "react-router-dom";

import locationIcon from "../assets/gatheringContent/location.svg";
import calendarIcon from "../assets/gatheringContent/calendar.svg";
import peopleIcon from "../assets/gatheringContent/people.svg";

import starWhite from "../assets/gatheringContent/star-white.svg";
import starWhiteBig from "../assets/gatheringContent/star-white-big.svg";
import gatheringPhoto_1 from "../assets/gathering/card-photo-1.png";
import gatheringPhoto_2 from "../assets/gathering/card-photo-7.png";
import gatheringPhoto_3 from "../assets/gathering/card-photo-9.png";
import gatheringPhoto_4 from "../assets/gathering/card-photo-6.png";
import gatheringPhoto_5 from "../assets/gathering/card-photo-5.png";

import gatheringDemo from "../assets/gatheringContent/gathering-demo.svg";

export default function GatheringContent() {
  // User Follow State
  const [isSignUp, setIsSignUp] = useState(false);
  const [isInterest, setIsInterest] = useState(false);

  // Gathering Data
  const gatheringDataList = [
    {
      id: 1,
      imagePath: gatheringPhoto_1,
      title: "鬆鬆飼主交流聚",
      date: "2024/5/15",
      location: "南港捷運站前空地",
      interest: false,
    },
    {
      id: 2,
      imagePath: gatheringPhoto_2,
      title: "特寵交流小型聚會",
      date: "2024/6/6",
      location: "爬咖啡",
      interest: false,
    },
    {
      id: 3,
      imagePath: gatheringPhoto_3,
      title: "集合！天竺鼠車車！",
      date: "2024/4/6",
      location: "大安森林公園",
      interest: false,
    },
    {
      id: 4,
      imagePath: gatheringPhoto_4,
      title: "東部樹棲守宮小爬聚",
      date: "2024/5/9",
      location: "好時光空間",
      interest: false,
    },
    {
      id: 5,
      imagePath: gatheringPhoto_5,
      title: "台北愛蛇聚會",
      date: "2024/4/16",
      location: "玩蟒人生",
      interest: false,
    },
  ];
  // Gathering List
  const GatheringList = ({ list }) => (
    <li>
      <Link to="/page/gathering" className="flex items-center gap-4 group">
        {/* Photo */}
        <figure className="max-w-[180px] xl:max-w-[204px] relative rounded-xl overflow-hidden">
          <img
            className="group-hover:scale-125"
            src={list.imagePath}
            alt="photo"
          />
          {/* Star Icon */}
          <div className="bg-brown-light absolute bottom-3 right-3 flex justify-center items-center w-7 h-7 rounded-full">
            <img src={starWhite} alt="star" />
          </div>
        </figure>
        {/* Info */}
        <div>
          <h4 className="text-green-dark font-bold mb-2">{list.title}</h4>
          <p className="text-brown-normal">{list.date}</p>
          <h5 className="text-brown-normal">{list.location}</h5>
        </div>
      </Link>
    </li>
  );

  return (
    <main className="flex flex-col lg:flex-row-reverse lg:items-start lg:justify-end gap-x-20 gap-y-14 mt-[70px] mb-[124px]">
      {/* Article */}
      <article className="px-4 lg:px-0 2xl:flex-1">
        <div className="mx-auto max-w-[600px] 2xl:max-w-[960px]">
          <img className="w-full" src={gatheringDemo} alt="demo" />
          <h4 className="mt-6 text-brown-normal tracking-wide text-xl">
            爬蟲兩棲
          </h4>
          <h3 className="mt-1 text-brown-dark text-[30px] tracking-wider font-bold">
            2024爬窩論壇全國大爬聚
          </h3>
          <ul className="mt-[22px] flex flex-col gap-2 py-6 px-[30px] text-xl bg-gray-normal rounded-[20px] tracking-wide">
            <li className="flex gap-4">
              <img src={locationIcon} alt="location" />
              <h5 className="text-brown-dark">地點：台中南屯公園</h5>
            </li>
            <li className="flex gap-4">
              <img src={calendarIcon} alt="calendar" />
              <h5 className="text-brown-dark">日期：2023/4/16</h5>
            </li>
            <li className="flex gap-4">
              <img src={peopleIcon} alt="people" />
              <h5 className="text-brown-dark">主辦人：蔡祥</h5>
            </li>
          </ul>
          <div className="mt-10 flex gap-4 justify-center">
            <button
              className={`${isSignUp ? "bg-yellow-normal" : "bg-green-normal"} py-3 px-7 rounded-full text-2xl text-white font-bold tracking-wider`}
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "已報名！" : "我要報名"}
            </button>
            <figure   
              className={`${isInterest ? "bg-yellow-normal" : "bg-brown-light"} cursor-pointer p-3  rounded-full`}
              onClick={() => setIsInterest(!isInterest)}
              >
              <img src={starWhiteBig} alt="star-big" />
            </figure>
          </div>
          <section className="mt-10">
            <div className="ml-8 flex gap-x-12 items-start">
              <button className="text-green-dark pb-[5px] border-b-2 border-b-green-dark text-xl font-bold tracking-wider">
                詳情資訊
              </button>
              <button className="text-brown-normal pb-[5px] text-xl font-bold tracking-wider">
                討論區
              </button>
            </div>
            {/* Intro */}
            <div className="mt-5 py-8 px-14 border-2 border-brown-light rounded-[20px]">
              <div className="flex gap-x-11 justify-center font-bold tracking-wider leading-tight">
                <div className="text-center">
                  <h4 className="text-[40px] text-green-dark">
                    {isSignUp ? 84 + 1 : 84}
                  </h4>
                  <h5 className="text-xl text-brown-normal">已報名</h5>
                </div>
                <hr className="border border-brown-normal h-[82px] rounded-full" />
                <div className="text-center">
                  <h4 className="text-[40px] text-green-dark">
                    {isInterest ? 489 + 1 : 489}
                  </h4>
                  <h5 className="text-xl text-brown-normal">有興趣</h5>
                </div>
              </div>
              {/* Content */}
              <p className="mt-9 text-brown-dark">
                期待已久的聚會終於來臨！我們誠摯地邀請您參加2023年台中爬蟲寵物飼主聚會，共同分享、學習，並結識更多志同道合的飼主。
                <h6 className="mt-6">📅 活動詳情：</h6>
                <ul>
                  <li>日期：2023年4月16日（星期六）</li>
                  <li>時間：下午一點至五點</li>
                  <li>地點：台中市大墩七街與惠中路三段口的南屯公園</li>
                </ul>
                <h6 className="mt-6">🎟️ 參加方式：</h6>
                <ul className="list-disc list-inside pl-2">
                  <li>
                    活動全程免費，並且提供免費飲料給參與者享用，歡迎所有爬蟲寵物飼主參與。
                  </li>
                </ul>
                <h6 className="mt-6">🔒 注意事項：</h6>
                <ul className="list-disc list-inside pl-2">
                  <li>
                    請確保您的自身安全，主辦方將配備緊急急救箱，以因應任何可能發生的受傷狀況。如有需要，請隨時向主辦方尋求包紮處理。
                  </li>
                  <li>注意維護公共秩序，保持活動現場整潔。</li>
                  <li>如有任何疑問，請隨時向工作人員詢問。</li>
                </ul>
              </p>
            </div>
          </section>
        </div>
      </article>
      {/* Aside Info */}
      <aside className="bg-gray-normal rounded-3xl lg:rounded-tr-[55px] lg:rounded-br-[55px] lg:rounded-tl-none lg:rounded-bl-none">
        <div className="max-w-[400px] lg:max-w-[372px] mt-[60px] mb-[114px] mx-auto px-4 lg:mx-8 xl:ml-[160px] xl:mr-[70px]">
          <h3 className="text-brown-dark text-xl font-bold tracking-wide border-b border-brown-normal pb-4 mb-5">
            推薦揪團
          </h3>
          <ul className="grid grid-cols-1 gap-5">
            {gatheringDataList.map((list) => (
              <GatheringList list={list} key={list.id} />
            ))}
          </ul>
        </div>
      </aside>
    </main>
  );
}
