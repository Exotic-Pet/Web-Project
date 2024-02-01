import user1 from "../assets/communitycontent/user1.png";
import user2 from "../assets/communitycontent/user2.png";
import user3 from "../assets/communitycontent/user3.png";
import user4 from "../assets/communitycontent/user4.png";
import hamster from "../assets/communitycontent/hamster-icon.svg";
import bird from "../assets/communitycontent/bird-icon.svg";
import rabbit from "../assets/communitycontent/rabboit-icon.svg";
import readmore from "../assets/communitycontent/document.svg";
import chat from "../assets/communitycontent/chat.svg";
import img1 from "../assets/communitycontent/img1.png";
import img2 from "../assets/communitycontent/img2.png";
import img3 from "../assets/communitycontent/img3.png";
import likeicon from "../assets/communitycontent/heart-icon.svg";
import likebtn from "../assets/communitycontent/heart-click.svg";
import selecticon from "../assets/communitycontent/select-icon.svg";
import selectbtn from "../assets/communitycontent/select-click.svg";
import open from "../assets/communitycontent/triangle-down.svg";
import photobtn from "../assets/communitycontent/photo-icon.svg";

export default function CommunityContent({ isOpenState, setIsOpenState, toggleState }) {

  return (
    <div
      className="fixed z-40 top-0 bottom-0 left-0 right-0 bg-black-65 flex justify-center items-center"
      onClick={(e) => toggleState(e, isOpenState, setIsOpenState)}
    >
      <article
        className="lightBox__content lightBox__scrollbar lightBox__scrollbar--cyan max-w-[90%] lg:max-w-[888px] max-h-[85vh] overflow-y-auto relative bg-white border-4 border-cyan-dark rounded-[20px] px-4 lg:px-16 py-[30px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
        className="absolute cursor-pointer hover:opacity-80 rounded-full top-6 right-0 w-11 h-11 bg-cyan-normal"
        onClick={() => setIsOpenState(false)}
        >
          <div className="relative cursor-pointer">
            <div className="w-[30px] bg-white -bottom-6 left-[16%] absolute h-[3px] rotate-45"></div>
            <div className="w-[30px] bg-white -bottom-6 left-[16%] absolute h-[3px] -rotate-45"></div>
          </div>
        </div>
        <div className="flex gap-x-[14px] mt-14 mb-1">
          <p className="text-base font-bold text-cyan-dark">鼠</p>
          <p className="text-base text-brown-normal">
            2023 年 10 月 5 日 20:41
          </p>
        </div>
        <h2 className="text-3xl font-bold text-brown-dark mb-[26px]">
          關於倉鼠如何科養
        </h2>
        <div className="flex border border-brown-light bg-gray-normal rounded-[79px] py-4 px-[33px] gap-x-4 mb-[30px]">
          <div className="flex gap-x-[18px]">
            <img src={user1} alt="user" />
            <div>
              <p className="text-base font-bold text-cyan-dark">小MO</p>
              <p className="text-base text-brown-dark">@momo168</p>
            </div>
          </div>
          <ul className="border-x border-brown-light px-[26px] flex flex-wrap w-[350px] gap-x-[14px] gap-y-[6px] justify-center">
            <li className="flex gap-x-[7px]">
              <img src={hamster} alt="icon" />
              <p className="font-bold text-brown-normal text-[15px] whitespace-nowrap">
                倉鼠飼主
              </p>
            </li>
            <li className="flex gap-x-[7px]">
              <img src={bird} alt="icon" />
              <p className="font-bold text-brown-normal text-[15px] whitespace-nowrap">
                鳥飼主
              </p>
            </li>
            <li className="flex gap-x-[7px]">
              <img src={rabbit} alt="icon" />
              <p className="font-bold text-brown-normal text-[15px] whitespace-nowrap">
                兔子飼主
              </p>
            </li>
            <li className="flex gap-x-[7px]">
              <img src={hamster} alt="icon" />
              <p className="font-bold text-brown-normal text-[15px] whitespace-nowrap">
                倉鼠飼主
              </p>
            </li>
            <li className="flex gap-x-[7px]">
              <img src={bird} alt="icon" />
              <p className="font-bold text-brown-normal text-[15px] whitespace-nowrap">
                鳥飼主
              </p>
            </li>
            <li className="flex gap-x-[7px]">
              <img src={rabbit} alt="icon" />
              <p className="font-bold text-brown-normal text-[15px] whitespace-nowrap">
                兔子飼主
              </p>
            </li>
          </ul>
          <ul className="">
            <li className="flex items-center mb-1 gap-x-3">
              <img src={readmore} alt="read more" />
              <p className="text-brown-normal text-[15px] font-bold">
                查看更多
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <img src={chat} alt="chat" />
              <p className="text-brown-normal text-[15px] font-bold">私訊他</p>
            </li>
          </ul>
        </div>
        <article className="text-base font-bold border-t text-brown-dark border-brown-normal pt-7 mb-11">
          <ul>
            <li className="mb-4">
              在寵物飼養的領域中，德國科學飼養標準，俗稱「科養」，已經成為愛護寵物的新趨勢。科養的核心理念在於創造一個能夠滿足寵物天性需求的環境，進而讓牠們在身心層面都能夠維持快樂。
            </li>
            <li className="mb-4">
              🌟科養，即德國飼養標準的縮寫，是以科學知識為基礎的寵物照顧方式。德國以其嚴格的飼養標準聞名，這些標準大多來自德國科學家的實驗結果，例如對籠具大小、墊材厚度和豐容（enrichment）的要求。其中，豐容是科養的重要一環，很多標準都建立在提供豐富環境的基礎上。
            </li>
            <li className="mb-4">
              🌟豐容，或在台灣常稱之為環境豐富化，研究表明這對於動物的健康至關重要，同時也適用於我們所飼養的寵物。通過對老鼠的研究，發現增加環境刺激可以減少焦慮行為和促進大腦發育。例如，提供深達80公分的墊材可以完全消除倉鼠的焦慮行為。
            </li>
            <li className="mb-4">
              🌟簡而言之，科養的目的是讓飼養的動物過上充實、不無聊且有目標的生活。在野外，倉鼠主要以尋找食物為主要活動，而科養的目的是在人為的環境中提供這種機會，使牠們能夠遠離焦慮和刻板行為。
            </li>
            <li className="mb-4">
              ⚡為何提倡大籠飼養？
              <br />
              科養的理念中，大籠飼養是為了更好地實現豐容，因為小籠子根本難以提供足夠的環境刺激。豐容即便在小空間也能實現，但如果動物仍然感到焦慮，則需要重新檢視飼養環境，同時考慮個體差異。
            </li>
            <li className="mb-4">
              ⚡科養是否奢侈？
              <br />
              科養不是奢侈，而是為了提供動物一個合理的生活環境。當然，若無法提供最佳條件，基本需求的滿足依然是最重要的。科養的理念不在於花費龐大，而是在於改善寵物的生活品質。
            </li>
            <li className="mb-4">
              ⚡台灣環境炎熱潮濕，是否適合科養？
              <br />
              儘管台灣氣候炎熱潮濕，但科養可以透過人為的方式創造適宜的環境。控制室內溫濕度，使用冷氣和除濕機，都是有效的方法。科養提倡適應環境，而不是被動接受。
            </li>
            <li className="mb-4">
              ⚡科養是否適合小籠飼主？
              <br />
              科養的族群雖然推崇大籠飼養，但對於小籠子飼主，仍鼓勵分享有關豐容的方式。儘管大籠飼養是理想的，但標準中也有規定籠子的最小尺寸，例如黃金鼠最少需50x80平方公分的籠子。
            </li>
            <li>
              透過科養的概念，我們期望提高大眾對於寵物照顧的重視程度，讓我們的寵物能夠享有更豐富且有意義的生活。
            </li>
          </ul>
        </article>
        <figure className="mb-11">
          <img src={img1} alt="image" className="mb-[30px] w-full" />
          <img src={img2} alt="image" className="w-full" />
        </figure>
        <div className="flex justify-between py-5 mb-6 border-y border-brown-normal">
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-3">
              <img src={likeicon} alt="like" />
              <p className="text-base font-bold text-brown-dark">104</p>
            </div>
            <div className="flex items-center gap-x-3">
              <img src={selecticon} alt="select" />
              <p className="text-base font-bold text-brown-dark">57</p>
            </div>
          </div>
          <figure className="flex gap-x-[6px]">
            <img src={likebtn} alt="likebtn" />
            <img src={selectbtn} alt="selectbtn" />
          </figure>
        </div>
        <h3 className="mb-6 text-lg font-bold text-center text-cyan-dark">
          查看更多相關有趣話題！
        </h3>
        <ul className="grid justify-center grid-cols-3 gap-x-[10px] gap-y-[15px] list-disc pl-5 border-b border-brown-normal pb-6 mb-6">
          <li>
            <h4 className="text-base font-bold text-brown-dark">
              大家都是怎麼照顧兔子的？
            </h4>
            <div className="flex gap-x-5">
              <p className="text-brown-normal font-medium text-[13px]">
                愛心 34
              </p>
              <p className="text-brown-normal font-medium text-[13px]">
                留言 89
              </p>
            </div>
          </li>
          <li>
            <h4 className="w-[200px] text-base font-bold truncate text-brown-dark">
              我的刺蝟最近有奇怪的行為，有人有相似的經驗嗎？
            </h4>
            <div className="flex gap-x-5">
              <p className="text-brown-normal font-medium text-[13px]">
                愛心 34
              </p>
              <p className="text-brown-normal font-medium text-[13px]">
                留言 23
              </p>
            </div>
          </li>
          <li>
            <h4 className="text-base font-bold text-brown-dark">
              黃金鼠的健康問題討論
            </h4>
            <div className="flex gap-x-5">
              <p className="text-brown-normal font-medium text-[13px]">
                愛心 34
              </p>
              <p className="text-brown-normal font-medium text-[13px]">
                留言 89
              </p>
            </div>
          </li>
          <li>
            <h4 className="text-base font-bold text-brown-dark">北部送養</h4>
            <div className="flex gap-x-5">
              <p className="text-brown-normal font-medium text-[13px]">
                愛心 21
              </p>
              <p className="text-brown-normal font-medium text-[13px]">
                留言 10
              </p>
            </div>
          </li>
          <li>
            <h4 className="text-base font-bold text-brown-dark">
              請問這是什麼品種？
            </h4>
            <div className="flex gap-x-5">
              <p className="text-brown-normal font-medium text-[13px]">
                愛心 6
              </p>
              <p className="text-brown-normal font-medium text-[13px]">
                留言 9
              </p>
            </div>
          </li>
          <li>
            <h4 className="text-base font-bold text-brown-dark">
              關於南部綠鬣蜥氾濫
            </h4>
            <div className="flex gap-x-5">
              <p className="text-brown-normal font-medium text-[13px]">
                愛心 67
              </p>
              <p className="text-brown-normal font-medium text-[13px]">
                留言 130
              </p>
            </div>
          </li>
        </ul>
        <div className="flex justify-between mb-6">
          <p className="text-base text-brown-dark">共96則留言</p>
          <div className="flex gap-x-4">
            <p className="pr-4 text-base border-r text-brown-dark border-brown-normal">
              排序
            </p>
            {/* <p className="text-base text-brown-dark">丨</p> */}
            <p className="text-base text-brown-dark">熱門</p>
            <p className="text-base text-brown-dark">最新</p>
          </div>
        </div>
        {/* message */}
        <div className="bg-gray-dark rounded-[10px] w-full pl-10 py-4 pr-10 mb-6">
          <div className="flex">
            <img src={user2} alt="user" className="h-[53px] mr-3" />
            <div className="mr-5">
              <div className="flex items-center mb-2 gap-x-1">
                <p className="text-base font-bold text-cyan-dark">Lisa</p>
                <p className="text-xs font-medium text-brown-normal border border-white bg-white rounded-[60px] ml-1 px-2 py-[2px]">
                  @lisa021225
                </p>
              </div>
              <p className="text-base text-brown-dark border-b border-brown-normal w-[400px] pb-5">
                推！養鼠真的上下限差好多
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center justify-end gap-x-2">
                <img src={likebtn} alt="likenumber" className="w-4" />
                <p className="text-brown-dark font-bold text-[15px] ">25</p>
              </div>
              <div className="flex gap-x-2 ">
                <p className="text-xs font-medium text-cyan-dark">回覆</p>
                <p className="text-xs font-medium text-brown-normal">
                  2023/10/5
                </p>
                <p className="text-xs font-medium text-brown-normal">21:34</p>
                <p className="text-xs font-medium text-brown-normal">1樓</p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2">
            <p className="text-brown-dark font-medium text-[13px] my-[14px] ml-[65px]">
              隱藏留言
            </p>
            <img src={open} alt="triangle" />
          </div>
        </div>
        <div className="px-10 mb-6">
          <div className="bg-gray-dark rounded-[10px] w-full pl-10 py-4 pr-10">
            <div className="flex">
              <img src={user1} alt="user" className="h-[53px] mr-3" />
              <div className="mr-5">
                <div className="flex items-center mb-2 gap-x-1">
                  <p className="text-base font-bold text-cyan-dark">樓主</p>
                  <p className="text-xs font-medium text-brown-normal border border-white bg-white rounded-[60px] ml-1 px-2 py-[2px]">
                    @momo0108
                  </p>
                </div>
                <p className="text-base text-brown-dark border-b border-brown-normal w-[300px] pb-5">
                  不求大家都科養，但至少基本養，基本的給好。
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-center justify-end gap-x-2">
                  <img src={likebtn} alt="likenumber" className="w-4" />
                  <p className="text-brown-dark font-bold text-[15px] ">25</p>
                </div>
                <div className="flex gap-x-2 ">
                  <p className="text-xs font-medium text-cyan-dark">回覆</p>
                  <p className="text-xs font-medium text-brown-normal">
                    2023/10/15
                  </p>
                  <p className="text-xs font-medium text-brown-normal">23:02</p>
                  <p className="text-xs font-medium text-brown-normal">1樓-1</p>
                </div>
              </div>
            </div>
            <textarea
              placeholder="回覆..."
              className="pl-[14px] pt-3 focus:outline-brown-normal w-full mt-5 text-xs font-medium text-brown-normal rounded-xl"
            ></textarea>
          </div>
        </div>
        <div className="bg-gray-dark rounded-[10px] w-full pl-10 py-4 pr-10 mb-6">
          <div className="flex">
            <img src={user3} alt="user" className="h-[53px] mr-3" />
            <div className="mr-5">
              <div className="flex justify-between">
                <div className="flex items-center mb-2 gap-x-1">
                  <p className="text-base font-bold text-cyan-dark">筱嫻</p>
                  <p className="text-xs font-medium text-brown-normal border border-white bg-white rounded-[60px] ml-1 px-2 py-[2px]">
                    @rrrreqqqq
                  </p>
                </div>
                <div className="flex items-center justify-end gap-x-2">
                  <img src={likebtn} alt="likenumber" className="w-4" />
                  <p className="text-brown-dark font-bold text-[15px] ">25</p>
                </div>
              </div>
              <p className="pb-5 text-base border-b text-brown-dark border-brown-normal">
                這個布置好漂亮😍，由於我預算和空間有限，我只能簡單弄一下環境。其實我有些擔心我為鼠準備的地方是不是夠有趣，但看起來牠似乎對外面的世界沒啥興趣，每次我放出來牠都馬上就自己跑回去。
                K036這樣的布置是不是需要改進一下呢？還是有沒有其他更豐富的方式？
              </p>
              <img src={img3} alt="image" />
              <div className="flex items-center justify-between mt-10 gap-x-5">
                <hr className="h-[2px] w-[65%] bg-brown-normal" />
                <div className="flex gap-x-2 ">
                  <p className="text-xs font-medium text-cyan-dark">回覆</p>
                  <p className="text-xs font-medium text-brown-normal">
                    2023/10/9
                  </p>
                  <p className="text-xs font-medium text-brown-normal">07:34</p>
                  <p className="text-xs font-medium text-brown-normal">2樓</p>
                </div>
              </div>

              <div className="flex gap-x-2">
                <p className="text-brown-dark font-medium text-[13px] my-[14px]">
                  查看其他2則留言
                </p>
                <img src={open} alt="triangle" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-x-6 bg-gray-dark rounded-[10px] w-full px-[73px] py-5 mb-6">
            <img src={user4} alt="user" className="h-[53px]" />
            <textarea
              placeholder="回覆..."
              className="pl-[14px] pt-3 focus:outline-brown-normal text-xs font-medium text-brown-normal rounded-[10px] w-full"
            ></textarea>
          </div>
        </div>
        <div className="border border-brown-normal rounded-[10px] p-4">
          <textarea
            placeholder="說些什麼參與討論吧！"
            rows="5"
            className="w-full text-base text-brown-normal"
          />
          <div className="flex justify-between">
            <img src={photobtn} alt="addphoto" className="cursor-pointer" />
            <div className="flex items-center gap-x-4">
              <button className="text-base text-brown-normal">取消</button>
              <button className="text-base text-white bg-cyan-dark rounded-[42px] px-4 py-2">
                送出
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
