import Mulswiper from "../components/swiper";
import mainImg from "../assets/eventcontent/main-img.png";
import eventImg1 from "../assets/eventcontent/event-img1.png";
import facebookIcon from "../assets/eventcontent/facebook.svg";
import instagramIcon from "../assets/eventcontent/instagram.svg";

export default function EventContent({ isOpenState, setIsOpenState, toggleState }) {

  return (
    <main
      className="fixed z-40 top-0 bottom-0 left-0 right-0 bg-black-65 flex justify-center items-center"
      onClick={(e) => toggleState(e, isOpenState, setIsOpenState)}
    >
      <article
        className="lightBox__content lightBox__scrollbar lightBox__scrollbar--green max-w-[90%] lg:max-w-[1064px] max-h-[90vh] overflow-y-auto relative bg-white mx-auto border-[3px] border-green-dark rounded-[20px] py-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 py-[30px]">
          <div
            className="absolute cursor-pointer hover:opacity-80 rounded-full top-6 right-0 w-11 h-11 bg-green-light"
            onClick={() => setIsOpenState(false)}
          >
            <div className="relative">
              <div className="w-[30px] bg-white -bottom-6 left-[16%] absolute h-[3px] rotate-45"></div>
              <div className="w-[30px] bg-white -bottom-6 left-[16%] absolute h-[3px] -rotate-45"></div>
            </div>
          </div>
          <div className="flex mb-11">
            <img src={mainImg} alt="main" className="mr-9" />
            <div>
              <h2 className="text-3xl font-bold text-green-dark">2024</h2>
              <h2 className="text-3xl font-bold text-green-dark">
                台灣兩棲爬蟲博覽會
              </h2>
              <h3 className="pt-2 mt-4 text-2xl font-bold border-t text-brown-dark border-brown-normal">
                全台最大的爬蟲展覽會！
              </h3>
              <ul className="flex mt-14 gap-x-[10px]">
                <li className="bg-green-normal rounded-[26px] text-white font-bold text-base py-1 px-6">
                  親子
                </li>
                <li className="bg-green-normal rounded-[26px] text-white font-bold text-base py-1 px-6">
                  爬蟲
                </li>
              </ul>
            </div>
          </div>
          <h3 className="mb-5 text-2xl font-bold text-center text-green-dark">
            活動詳情
          </h3>
          <p className="text-base font-bold text-brown-dark mb-[57px]">
            主辦者本身是繁殖各種爬蟲及製作系統飼養櫃的工作室，舉辦這大型的爬蟲展覽，也是想讓更多人可以了解爬蟲的魅力，現場可以看到很多的爬蟲廠商之外，也能跟飼主討論及分享飼養心得，不論是想找尋自己心愛的爬蟲，或是看看各種特別的物種都不要錯過這次的展覽，全台最多爬蟲廠商且最大的一次展覽，兩棲爬蟲、特寵、昆蟲、植物、文創、原創玩具、美食，店家總數多達160間以上，平常只能上網看看過過乾癮嗎？透過這次的機會讓各位現場一次看個夠，歡迎各位的到來！！
          </p>
          <h3 className="mb-5 text-2xl font-bold text-green-dark">
            《 參展廠商品牌詳細平面配置圖 》
          </h3>
          <img src={eventImg1} alt="event-image" />
          <ul className="bg-gray-normal rounded-[20px] py-10 mt-[50px] pl-16 mb-[30px]">
            <li className="flex mb-4 gap-x-14">
              <h4 className="text-xl font-bold text-green-dark w-[100px] text-right">
                日期
              </h4>
              <p className="text-lg font-bold text-brown-dark">
                2024/6/22 (六)-6/23 (日)
              </p>
            </li>
            <li className="flex mb-4 gap-x-14">
              <h4 className="text-xl font-bold text-green-dark w-[100px] text-right">
                時間
              </h4>
              <p className="text-lg font-bold text-brown-dark">10:00 - 16:00</p>
            </li>
            <li className="flex mb-4 gap-x-14">
              <h4 className="text-xl font-bold text-green-dark w-[100px] text-right">
                地點
              </h4>
              <p className="text-lg font-bold text-brown-dark">
                台北花博 爭艷館（台北市中山區玉門街1號）
              </p>
            </li>
            <li className="flex mb-4 gap-x-14">
              <h4 className="w-[100px] text-right text-xl font-bold text-green-dark">
                票價
              </h4>
              <p className="text-lg font-bold text-brown-dark">
                200元（120cm以下小朋友免費）、線上獨家早鳥優惠雙人票360元
              </p>
            </li>
            <li className="flex mb-4 gap-x-14">
              <h4 className="w-[100px] text-right text-xl font-bold text-green-dark">
                購票網站
              </h4>
              <p className="w-auto text-lg font-bold text-brown-dark">
                https://www.accupass.com/event/2302210257391046737875
              </p>
            </li>
            <li className="flex mb-4 gap-x-14">
              <h4 className="w-[100px] text-right text-xl font-bold text-green-dark">
                社群連結
              </h4>
              <figure className="flex gap-x-2">
                <img src={facebookIcon} alt="facebook" />
                <img src={instagramIcon} alt="instagram" />
              </figure>
            </li>
          </ul>
          <h3 className="mb-3 text-2xl font-bold text-green-dark">
            《 2023兩棲爬蟲博覽會 Q&A 》
          </h3>
          <h4 className="text-lg font-bold text-brown-dark">
            1.本場活動需付費購票入場嗎？
          </h4>
          <p className="mb-4 text-base font-bold text-brown-dark">
            本活動因空間廣大，因此會酌收200元入場費喔（120cm以下小朋友免費），歡迎大家於ACCUPASS購票（線上獨家早鳥優惠雙人票360元），以避免現場購票排隊等待。
            <br />
            Ps:不論任何票種皆為單日票
            <br />
            2023.2.24～2023.3.25為早鳥雙人票優惠限定期間，只限網路購票者適用此活動
          </p>
          <h4 className="text-lg font-bold text-brown-dark">
            2.我還只是昆蟲 ＆ 爬蟲飼養入門新手，這場活動適合我嗎？
          </h4>
          <p className="mb-4 text-base font-bold text-brown-dark">
            此展覽集結了台灣許多專業的飼養繁殖家，不論是老朋友新朋友都可以到現場交流，相信每位達人都很願意給予新手許多小撇步喔!
            培養與了解爬蟲 ＆ 昆蟲的樂趣
          </p>
          <h4 className="text-lg font-bold text-brown-dark">
            3.更多豐富的攤位與活動資訊哪裡看？
          </h4>
          <p className="text-base font-bold text-brown-dark mb-9">
            歡迎大家追蹤『台灣兩棲爬蟲博覽會』的粉專 ＆ Instagram喔!
            也歡迎私訊小編相關問題
          </p>
          <h3 className="mb-5 text-2xl font-bold text-center text-green-dark">
            你可能會喜歡這些活動！
          </h3>
        </div>
        {/* <MultipleItems/> */}
        <Mulswiper />
      </article>
    </main>
  );
}
