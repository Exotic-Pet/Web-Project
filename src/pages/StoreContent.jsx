import "../styles/all.css";
// import shareFacebook from '../assets/store/share-facebook.svg';
import shareLine from '../assets/store/share-line-2.svg';
import mainImg1 from '../assets/store/imageForContent/mainImg-1.png';
import mainImg2 from '../assets/store/imageForContent/mainImg-2.png';
import mainImg3 from '../assets/store/imageForContent/mainImg-3.png';
import mainImg4 from '../assets/store/imageForContent/mainImg-4.png';
import articleImg1 from '../assets/store/imageForContent/articleImg-1.png';
import articleImg2 from '../assets/store/imageForContent/articleImg-2.png';
import articleImg3 from '../assets/store/imageForContent/articleImg-3.png';
import articleImg4 from '../assets/store/imageForContent/articleImg-4.png';
import articleImg5 from '../assets/store/imageForContent/articleImg-5.png';
import articleImg6 from '../assets/store/imageForContent/articleImg-6.png';
import articleImg7 from '../assets/store/imageForContent/articleImg-7.png';
import articleImg8 from '../assets/store/imageForContent/articleImg-8.png';
import articleImg9 from '../assets/store/imageForContent/articleImg-9.png';
import articleImg10 from '../assets/store/imageForContent/articleImg-10.png';
import gdn1 from '../assets/store/imageForContent/GDN-1.png';
import gdn2 from '../assets/store/imageForContent/GDN-2.png';
import facebook from '../assets/store/facebook.svg';
import telephone from '../assets/store/telephone.svg';
import location from '../assets/store/location.svg';
import yasumi from '../assets/store/yasumi.svg';
import time from '../assets/store/time.svg';
import FbShare from "../components/FacebookShare";
// import LineShare from "../components/LineShare";

export default function StoreContent() {
    const handleLineShare = () => {
        const windowFeatures = 'width=500,height=500,left=100,top=100';
        const shareUrl = "https://exotic-pet.github.io/Web-Project/"; // 替換成你想要分享的網址
        window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`,'Custom Window',windowFeatures);
    };
    return (
    // Store Content
    <>
        <main className="mt-[84px] container mx-auto overflow-hidden xl:flex">
            <article className="mt-8 px-2 lg:px-0 max-w-[859px]">
            <h4 className="flex items-center text-base font-bold text-white mb-[13px]">
                <div className="w-[117px] h-[29px] bg-[url('../assets/store/label.svg')] bg-no-repeat flex justify-center items-center">
                    <strong className="pr-2 block">
                        特寵咖啡廳
                    </strong>
                </div>
                <span className="ml-4 font-bold text-brown-normal">2023.12.08</span>
            </h4>
            <h2 className="text-3xl font-bold text-cyan-dark mb-[18px] tracking-wider">玩蟒人生Pythonimd｜球蟒咖啡廳～各種球蟒、玉米蛇、爬蟲類零距離接觸，台北大橋頭捷運站另類咖啡館</h2>
            <div className=" gap-x-[11px] flex justify-end border-b-2 mb-9 pb-[18px] border-brown-normal items-center mt-7">
                <p className="text-base font-bold text-brown-normal">分享文章</p>
                {/* <a href="#"><img src={shareFacebook} alt="facebook分享" className="" /></a> */}
                <FbShare/>
                {/* <LineShare/> */}
                <div onClick={handleLineShare} className="cursor-pointer flex bg-line-normal rounded-md pl-1 pr-2 gap-x-1 items-center h-[29px]">
                    <button><img src={shareLine} alt="" className="h-[25px]" /></button>
                    <p className="text-white text-sm font-medium">分享</p>
                </div>
                
                {/* <a href="#"><img src={shareLine} alt="line分享" /></a> */}
            </div>
            <p className="text-base font-bold text-brown-dark">【Pythonism玩蟒人生】是一家以球蟒和爬蟲為主題的咖啡館，在捷運大橋頭站附近。這裡的低消僅需一杯飲料，就能與各種球蟒或爬蟲類互動。老闆本身是專業的球蟒繁殖者，對於爬蟲類的知識有豐富的瞭解，客人可以隨時向他諮詢！【Pythonism玩蟒人生】是間非常特別的咖啡廳～</p>
            <img src={mainImg1} alt="content_img" className="my-[35px]" />
            <img src={mainImg2} alt="content_img" className="mb-[35px]" />
            <p className="text-base font-bold text-brown-dark mb-[18px]">店內的櫃子擺放了很多透明壓克力箱，每個箱子裡都住了一條蛇，上面都有編號，箱子上有數字的是可以互動的蟒蛇，老闆會告訴你可以互動的蛇的編號，而沒有數字的則是店內販售展示的蟒蛇。</p>
            <p className="text-base font-bold text-brown-dark mb-[18px]">【Pythonism玩蟒人生】主要供應各種飲料，包括咖啡、果汁、碳酸飲料等，還有一些精緻的蛋糕。價格大致在$130至$200之間，而低消則是每人一杯飲料。在這裡，一杯飲料的價格就能與蛇蛇有親密的互動體驗，相當超值。 </p>
            <img src={mainImg3} alt="content_img" className="my-[35px]" />
            <img src={mainImg4} alt="content_img" className="mb-[35px]" />
            <p className="text-base font-bold text-brown-dark">這家球蟒和爬蟲類主題的咖啡廳真的很特別，讓你能與這些可愛的小生物近距離互動。如果有任何關於爬蟲類的問題，都可以向老闆詢問，他非常樂意提供正確的知識。這不僅為大小朋友提供了飼養動物、接觸動物的機會，也有助於培養他們正確的動物觀念。
                <br/>如果你也喜歡蟒蛇和爬蟲動物，來【玩蟒人生Pythonism】只需點一杯飲料，就能跟他們親密接觸。極力推薦給大家！</p>
            <div className="flex flex-col mt-12 mb-20 pt-10 border-t-[20px] border-cyan-normal xl:flex-row">
                <div className="mx-auto min-w-[374px] sm:w-[432px] h-[275px] xl:mr-[60px]">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2411.8581169309896!2d121.51359695259741!3d25.061757382613447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a93f8203703d%3A0xa5a2894737094309!2z546p6J-S5Lq655SfIFB5dGhvbmlzbQ!5e0!3m2!1szh-TW!2stw!4v1708258122414!5m2!1szh-TW!2stw"></iframe>
                </div>
                <div className="mt-12 xl:mt-0">
                    <a href="https://www.facebook.com/Pythonism">
                        <img src={facebook} alt="facebook" className="mb-[26px] inline" />
                    </a>
                    <h3 className="pb-3 mb-2 text-2xl font-bold border-b-2 border-solid text-cyan-dark border-brown-dark">玩蟒人生<span>Pythonism</span></h3>
                    <ul>
                        <li className="flex items-center">
                            <img src={telephone} alt="telephone" className="mr-1" />
                            <p className="text-lg font-medium text-cyan-dark">02-2557 8997</p>
                        </li>
                        <li className="flex items-center">
                            <img src={location} alt="location" className="mr-1" />
                            <p className="text-lg font-medium text-cyan-dark">103台北市大同區重慶北路二段235-3號</p>
                        </li>
                        <li className="flex items-center">
                            <img src={yasumi} alt="yasumi" className="mr-1" />
                            <p className="text-lg font-medium text-cyan-dark">每個星期一</p>
                        </li>
                    </ul>
                    <strong className="mt-3 block max-w-[192px] border border-brown-dark text-brown-dark text-lg font-medium text-center py-[6px] px-3 rounded-full">
                        低消方式：一杯飲品
                    </strong>
                </div>
            </div>
            <div className="  bg-gray-normal border border-brown-light rounded-[47px] py-[15px] mb-[90px] px-10 sm:px-28 max-w-[867px]">
                <h4 className="text-brown-dark font-bold text-sm mb-[6px]">照片來源：玩蟒人生 Pythonism FB 粉絲專頁</h4>
                <p className="text-brown-dark font-medium text-sm mb-1">若您認為有侵權情形，煩請立即告知，我們將移除相關內容並下架，以確保維護相關權益。</p>
                <p className="text-brown-dark font-medium text-sm">我們一向重視知識產權和合法使用，致力於建立一個公正、尊重著作權的環境，感謝您的合作與理解。</p>
            </div>
            </article>
            <aside className="mt-10 pb-24 px-2 md:min-w-[300px] lg:px-0 lg:ml-6 xl:ml-[113px]">
            <h3 className="tracking-wide pb-5 mb-5 text-xl font-bold border-b-2 border-solid text-cyan-dark border-cyan-dark">相關文章</h3>
            <ul>
                <li className="flex items-center mb-6">
                    <img src={articleImg1} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={articleImg2} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={articleImg3} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={articleImg4} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={articleImg5} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
            </ul>
            <h3 className="tracking-wide pb-5 mb-5 text-xl font-bold border-b-2 border-solid text-cyan-dark border-cyan-dark">熱門文章</h3>
            <ul>
                <li className="flex items-center mb-6">
                    <img src={articleImg6} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={articleImg7} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={articleImg8} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={articleImg9} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <img src={articleImg10} alt="content" className="mr-3" />
                    <div>
                        <h4 className="text-[15px] font-bold text-brown-dark">台北肉球森林和可愛的貓咪、大嘴鳥、狐獴互動</h4>
                        <div className="flex">
                            <p className="text-cyan-dark font-medium text-[13px]">特寵咖啡廳</p>
                            <img src={time} alt="time" className="ml-2 mr-1" />
                            <p className="text-[13px] text-brown-normal">2023.11.3</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="mx-auto mt-[75px] mb-[39px]">
                <img src={gdn1} alt="GDN" className=""/>
            </div>
            <div className="mx-auto">
                <img src={gdn2} alt="GDN" className=""/>
            </div>
            </aside>
        </main>
        
    </>
    )
}