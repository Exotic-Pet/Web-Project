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
import articleImg1 from "../assets/community/articleImgae/article-1.png"
import articleImg2 from "../assets/community/articleImgae/article-2.png"
import articleImg3 from "../assets/community/articleImgae/article-3.png"
import articleImg4 from "../assets/community/articleImgae/article-4.png"
import articleImg5 from "../assets/community/articleImgae/article-5.png"
import articleImg6 from "../assets/community/articleImgae/article-6.png"
import articleImg7 from "../assets/community/articleImgae/article-7.png"
import articleImg8 from "../assets/community/articleImgae/article-8.png"
import articleImg9 from "../assets/community/articleImgae/article-9.png"
import articleImg10 from "../assets/community/articleImgae/article-10.png"
import articleImg11 from "../assets/community/articleImgae/article-11.png"

export default function CommunityPage() {
  // AOS Init
  AosInit();
  // LightBox State
  const [communityLightBoxState, setCommunityLightBoxState] = useState(false);

  // Animal Data State
  const [animalClassData, setAnimalClassData] = useState([
    {
      title: "全部",
      select: true,
      data: [],
    },
    {
      title: "兩棲爬蟲版",
      select: false,
      data: ["守宮", "蜥蜴", "變色龍", "烏龜", "青蛙", "蛇", "其他"],
    },
    {
      title: "鼠版",
      select: false,
      data: ["倉鼠", "天竺鼠", "花枝鼠", "絲絨鼠", "其他"],
    },
    {
      title: "兔版",
      select: false,
      data: ["長毛兔", "垂耳兔", "白兔", "奶油兔", "其他"],
    },
    {
      title: "鳥版",
      select: false,
      data: ["鸚鵡", "雀科", "金絲雀", "愛情鳥", "其他"],
    },
    {
      title: "節肢動物版",
      select: false,
      data: ["捕鳥蛛", "蠍子", "蜈蚣", "馬陸"],
    },
  ]);

  // Current Animal Category
  const [currentAnimal, setCurrentAnimal] = useState([]);

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
      <div className="bg-gray-normal">
        <main className="container justify-center mx-auto pt-7 pb-32 px-4 lg:px-0">
          <nav className="px-[14px] py-1 overflow-x-auto whitespace-nowrap">
            <ul className="flex lg:justify-center gap-x-8">
              {animalClassData.map((animal, index) => (
                <li
                  key={animal.title}
                  onClick={() => {
                    setCurrentAnimal(animal.data);
                    setAnimalClassData(
                      animalClassData.map(
                        (item, idx) =>
                          idx === index // Check if this is the item we want to change
                            ? { ...item, select: !item.select } // Toggle the 'select' property
                            : { ...item, select: (item.select = false) } // Toggle other object 'select' property is false
                      )
                    );
                  }}
                  className={`${
                    animalClassData.length - 1 === index ? "" : "border-r"
                  } flex pr-6 border-solid border-brown-normal`}
                >
                  <h2
                    className={`${
                      animal.select ? "text-cyan-dark" : ""
                    } mr-3 text-2xl font-bold cursor-pointer text-brown-dark hover:text-cyan-dark`}
                  >
                    {animal.title}
                  </h2>
                  <img src={triangle} alt="list" />
                </li>
              ))}
            </ul>
          </nav>
          {/* Current Animal List */}
          <ul
            className={`${
              currentAnimal[0] ? "flex" : "hidden"
            } mt-4 px-3 border border-solid border-brown-light rounded-[41px] bg-white gap-x-7 max-w-[760px] sm:justify-center mx-auto overflow-x-auto whitespace-nowrap`}
          >
            {currentAnimal?.map((animal) => (
              <li key={animal}>
                <h3 className="py-3 text-2xl text-brown-dark cursor-pointer hover:text-brown-normal">
                  {animal}
                </h3>
              </li>
            ))}
          </ul>
          <div className="my-4 flex gap-x-4 justify-end text-brown-dark leading-4">
            <h4 className="pr-4 border-r border-brown-normal">排序</h4>
            <button className="hover:text-brown-normal">熱門</button>
            <button className="hover:text-brown-normal">最新</button>
          </div>
          <div className="container mx-auto mt-6">
            {/*容器*/}
            <ul className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
              {/*格線*/}
              <li className="col-span-1">
                <ul className="flex flex-col gap-4">
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">鼠</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">1小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    關於倉鼠如何科養
                    </h3>
                    <img src={sample1} alt="image" className="my-3 w-full" />
                    <p className="text-base text-brown-dark ellipsis-3">
                    在寵物飼養的領域中，德國科學飼養標準，俗稱「科養」，已經成為愛護寵物的新趨勢。科養的核心理念在於創造一個能夠滿足寵物天性需求的環境，進而讓牠們在身心層面都能夠維持快樂。
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">絲絨鼠</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">5小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    龍貓的日常
                    </h3>
                    <img src={articleImg3} alt="image" className="my-3 w-full" />
                    <p className="text-base text-brown-dark ellipsis-3">
                    嗨！今天要和大家分享一下我家的龍貓的日常，這群小家伙簡直就是生活中的小歡樂源泉。
                    首先，讓我們談談牠們的活力。牠們通常在黃昏時分變得特別活躍。當夜幕降臨，牠們就像是打開了開關，開始快樂地奔跑、跳躍，彷彿在玩著一場夜晚的派對。這樣的活力總是能夠感染周圍的人，帶給家中一陣歡樂。
                    住宿就像是鸚鵡的五星奢華度假村一樣，有專屬的鳥套房～鸚鵡天堂一直秉持著最高的安全與衛生標準，
                    他們配備了先進的清潔設施，維持房間的衛生狀態，同時也提供安全的食物和水源，讓鳥寶們在這裡獲得全方位的照顧。
                    最炫的是智力遊戲時間，讓你的鸚鵡腦袋也動動，不只是吃吃睡睡，還可以讓牠們過個有挑戰性的小日子。
                    而且，他們還有超棒的鳥類醫療小組，隨時照顧牠們的健康～
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect/" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">捕鳥蛛</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">7小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    為什麼你該養捕鳥蛛！
                    </h3>
                    <p className="text-base text-brown-dark ellipsis-3">
                      自首先，捕鳥蛛相對於其他寵物來說，飼養成本較低。你不需要花費大量金錢購買飼料，因為捕鳥蛛主要以昆蟲為食，例如蟲子、螞蟻等，這些是相對便宜且容易獲得的食物。
                      此外，捕鳥蛛的飼養空間也相對較小，不需要特別大的籠子或飼養箱。你可以選擇一個適中大小的玻璃容器或塑料盒子，然後在底部放置一些底材，例如泥土或木屑，這樣就能提供一個舒適的家給你的捕鳥蛛了。
                      除了低成本和小型空間外，捕鳥蛛還是一種相對容易飼養的寵物。它們不需要太多的特殊照顧，只需確保飼養環境的濕度和溫度適宜，定期清理飼養箱，並提供足夠的食物即可。
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">鸚鵡</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">1小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                      新手養鸚鵡怎麼選?
                    </h3>
                    <img src={articleImg8} alt="image" className="my-3 w-full" />
                    <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    想要養鸚鵡但又不知道該選擇哪種鸚鵡嗎？這裡有一份鸚鵡新手指南，讓你挑選到最合適的鸚鵡！
                    首先，讓我們來看看適合新手的鸚鵡品種。對於初次飼養者，建議選擇馴良且性格穩定的品種，例如文鳥或玄鳳。這些小家伙通常比較容易相處～
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">蛇</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">17小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    大家都帶蛇去哪邊放風？
                    </h3>
                    <img src={articleImg10} alt="image" className="my-3 w-full" />
                    <p className="text-base text-brown-dark ellipsis-3">
                    放風對於蛇來說是非常重要的，它們需要一些時間來伸展身體、探索環境和活動肌肉。無論是在室內還是室外，只要確保安全和受控，放風對於蛇的健康和幸福都是非常有益的。希望這些提示能夠幫助你找到合適的放風方式，讓你的蛇健康快樂地生活！
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">天竺鼠</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">7小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    我家天竺鼠超親人
                    </h3>
                    <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    我家的天竺鼠的個性非常活潑。每當我們走近他的籠子，他就會迫不及待地向我們跑來，用他那可愛的小鼻子蹭著我們的手，表示歡迎和親近。有時候，他還會發出輕輕的咕嚕聲，就像在跟我們交流一樣，讓我們感受到他的愛意。
                    </p>
                  </li>
                </ul>
              </li>
              <li className="col-span-1">
                <ul className="flex flex-col gap-4">
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">鸚鵡</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">3小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                      北部鸚鵡旅館推薦
                    </h3>
                    <img src={articleImg1} alt="image" className="my-3 w-full" />
                    <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    因為全家要出國所以這次就選擇了「鸚鵡天堂」這家鸚鵡旅館寄養我家的鳥寶們，服務真的很不錯！
                    住宿就像是鸚鵡的五星奢華度假村一樣，有專屬的鳥套房～鸚鵡天堂一直秉持著最高的安全與衛生標準，
                    他們配備了先進的清潔設施，維持房間的衛生狀態，同時也提供安全的食物和水源，讓鳥寶們在這裡獲得全方位的照顧。
                    最炫的是智力遊戲時間，讓你的鸚鵡腦袋也動動，不只是吃吃睡睡，還可以讓牠們過個有挑戰性的小日子。
                    而且，他們還有超棒的鳥類醫療小組，隨時照顧牠們的健康～
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">倉鼠</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">19小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    黃金鼠送養
                    </h3>
                    <p className="text-base text-brown-dark ellipsis-3">
                      生太多黃金鼠沒辦法飼養，希望有緣人能夠領養，希望找到是對飼養黃金鼠有經驗且有愛心的人。需要有足夠的時間和精力來照顧黃金鼠，確保牠得到足夠的食物、水和運動。我們也希望新主人能夠給予牠溫暖的家庭和充滿愛的環境，讓牠可以快樂地生活下去。
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">守宮</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">5小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                      (圖多)貪吃的守宮🦖
                    </h3>
                    <img src={articleImg4} alt="image" className="my-3 w-full" />
                    <p className="text-base text-brown-dark ellipsis-3">
                    Yo！來談談我家那位特別的小吃貨守宮。就是這麼一位，喜歡的不是水果也不是蔬菜，而是那些小小的蟲蟲！
                    一旦拿出蟲子，牠的眼睛就亮了起來，立馬進入專注模式。不管是蟋蟀、度比亞還是櫻桃蟑螂，牠通通都吃得津津有味。
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">倉鼠</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">3小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    今天去愛鼠協會領養了！
                    </h3>
                    <img src={articleImg9} alt="image" className="my-3 w-full" />
                    <p className="text-base text-brown-dark ellipsis-3">
                    看到最近愛鼠協會又爆滿了，終於下定決心去領養一隻鼠鼠回家！
                    希望大家也領養代替購買，愛鼠協會也有很多可愛的鼠！
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">其他</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">7小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                      請問哪裏有賣劍尾蠑螈?
                    </h3>
                    <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    最近突然看到劍尾蠑螈，覺得很漂亮，想請問哪裡有賣？
                    順便想問有沒有人可以分享飼養經驗～
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">守宮</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">1小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                      巨人守宮介紹
                    </h3>
                    <img src={articleImg6} alt="image" className="my-3 w-full" />
                    <p className="text-base text-brown-dark ellipsis-3">
                    新喀里多尼亞巨人守宮，是全世界體型最大的壁虎，在1829年由法國動物學家居維葉發表，牠是新喀里多尼亞的特有種。體型厚重，皮膚鬆弛，尾巴短。它的顏色有三種，斑駁的綠色，灰色和棕色。
                    </p>
                  </li>
                </ul>
              </li>
              <li className="col-span-1 block md:hidden xl:block">
                <ul className="flex flex-col gap-4">
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">守宮</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">7小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark ellipsis-1">
                    探討新手飼主常遇到的守宮脫皮問題及解決方法
                    </h3>
                    <p className="text-base text-brown-dark ellipsis-3">
                    新手飼主常見問題
                    擔心守宮的健康狀況： 新手飼主可能會誤解守宮脫皮為疾病，因為在脫皮期間，守宮的行為和外觀都可能有所改變。
                    不清楚應該怎麼協助守宮脫皮： 飼主可能不知道應該如何協助守宮順利完成脫皮，以確保其皮膚能夠完全脫離。
                    解決方法
                    觀察行為和外觀： 新手飼主在守宮脫皮期間應該仔細觀察它的行為和外觀，以確保這只是正常的生理現象。若有其他異常症狀，建議立即尋求獸醫協助。
                    提供足夠的濕度： 在守宮脫皮期間，濕度是非常重要的。飼主應該確保飼養環境的濕度適中，以幫助守宮順利脫皮。可以在飼舍中放置一盆水，或者使用噴霧器定期噴灑水分。
                    提供適當的隱蔽處： 守宮在脫皮期間可能感到更加脆弱，因此飼主應該提供足夠的隱蔽處，讓它感到安全。這可以是一個適當大小的洞穴或其他遮蔽物。
                    總結而言，守宮脫皮是一個正常的生理過程，新手飼主不必過於擔心。通過仔細觀察和提供適當的環境，飼主可以幫助守宮順利完成脫皮，確保其健康。
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">陸龜</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">23小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                      介紹我家超可愛陸龜
                    </h3>
                    <img src={articleImg2} alt="image" className="my-3 w-full" />
                    <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    小陸龜外表真的超討喜，而且動作永遠悠哉悠哉的樣子，簡直是讓人忍不住陪著牠一起放空。我家這幾位都是吃貨。尤其是最喜歡的水果，只要一聞到水果的味道，就立馬把頭伸過來，一副「我要吃、我要吃」的模樣，簡直想讓人把所有水果都給他吃。
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">蜥蜴</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">16小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                      台灣養黃樹巨蜥的人多嗎！？
                    </h3>
                    <img src={articleImg5} alt="image" className="my-3 w-full" />
                    <p className="mt-3 text-base text-brown-dark ellipsis-3">
                    最近才知道黃樹巨蜥這樣的蜥蜴，覺得很漂亮很想養，但爬文發現台灣沒有太多的飼養訊息，想請問有沒有有養黃樹巨蜥的飼主可以分享一下飼養心得？
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">蛇</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">7小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    襪帶蛇拒食很久
                    </h3>
                    <p className="text-base text-brown-dark ellipsis-3">
                    我家的蛇已經拒食三個多月了，體重從250多克降到220克，有google過，但大部分分享的都是球蟒或是王蛇類，所以想說上來問問看。
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">兔子</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">1小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    幼兔看醫生推薦獸醫院
                    </h3>
                    <img src={articleImg7} alt="image" className="my-3 w-full" />
                    <p className="text-base text-brown-dark ellipsis-3">
                    想請問大家台北有推薦哪家兔專科比較好呢？有太多選擇了，像是亞馬森、伊甸、全國、聖地牙哥、惟新、長宏、芝山、布達羊、牧光、不萊梅、沐沐、安晴等等。
                    </p>
                  </li>
                  <li
                    onClick={() => setCommunityLightBoxState(true)}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    className="cursor-pointer  py-[22px] bg-white w-full rounded-2xl border-cyan-normal border-[3px] hover:border-yellow-normal px-9"
                  >
                    <div className="flex gap-x-[6px] justify-end">
                      <img src={unlike} alt="unlike" />
                      <img src={unselect} alt="unselect" />
                    </div>
                    <div className="flex mb-1">
                      <h4 className="text-xs text-cyan-dark">蜥蜴</h4>
                      <img
                        src={time}
                        alt="time"
                        className="ml-[6px] mr-[3px]"
                      />
                      <p className="text-xs text-brown-normal">3小時前</p>
                    </div>
                    <h3 className="text-xl font-bold text-brown-dark">
                    請問這是什麼蜥蜴？
                    </h3>
                    <img src={articleImg11} alt="image" className="my-3 w-full" />
                    <p className="text-base text-brown-dark ellipsis-3">
                    最近突然在國外網站上看到這張照片，有人知道這是什麼蜥蜴嗎？
                    <br/>以及台灣是否可以飼養呢？
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </main>
      </div>
      {/* Button */}
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
