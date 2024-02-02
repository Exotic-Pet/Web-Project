import amphibiansAndReptiles from "../assets/exoticOverview/Amphibians & Reptiles.svg";
import heartIcon from "../assets/exoticOverview/heart.svg";
import leporidaeAndMuroidea from "../assets/exoticOverview/Leporidae & Muroidea.svg";
import flowerLeftIcon from "../assets/exoticOverview/flower-left.svg";
import aves from "../assets/exoticOverview/Aves.svg";
import starLeftIcon from "../assets/exoticOverview/star-left.svg";
import arthropoda from "../assets/exoticOverview/Arthropoda.svg";
import starRightIcon from "../assets/exoticOverview/star-right.svg";
import other from "../assets/exoticOverview/Other.svg";
import flowerRightIcon from "../assets/exoticOverview/flower-right.svg";
import { Link } from "react-router-dom";

export default function ExoticOverview() {
    return (
    <main className="my-32">
    <div className="container flex flex-col justify-center mx-auto xl:flex-row gap-y-8">
        <Link to="/page/exotic-overview/amphibiansAndreptile">
        <figure className="relative flex-1 group">
            <img className="mx-auto border-4 rounded-[50px] border-transparent group-hover:border-4 group-hover:border-green-normal" src={amphibiansAndReptiles} alt="Amphibians & Reptiles"  />
            <img className="absolute opacity-0 -top-5 right-52 group-hover:opacity-100" src={heartIcon} alt="heart"  />
        </figure>
        </Link>
        <div className="flex flex-col flex-wrap justify-center flex-1 gap-8 sm:flex-row">
            <Link to="/page/exotic-overview/leporidaeAndmuriodea">
                <figure className="relative group">
                    <img className="mx-auto border-4 border-opacity-0 border-yellow-normal rounded-[30px] hover:border-opacity-100" src={leporidaeAndMuroidea} alt="Leporidae & Muroidea" />
                    <img className="absolute -top-[5%]  opacity-0 right-[40%] group-hover:opacity-100" src={flowerLeftIcon} alt="flower" />
                </figure>
            </Link>
            <Link to="/page/exotic-overview/aves">
                <figure className="relative group">
                    <img className="mx-auto border-4 border-opacity-0 border-cyan-normal rounded-[30px] hover:border-opacity-100" src={aves} alt="Aves" />
                    <img className="absolute -top-[6%]  right-[35%] opacity-0 group-hover:opacity-100" src={starLeftIcon} alt="star" />
                </figure>
            </Link>
            <Link to="/page/exotic-overview/arthropoda">
                <figure className="relative group">
                    <img className="mx-auto border-4 border-opacity-0 border-cyan-normal rounded-[30px] hover:border-opacity-100" src={arthropoda} alt="Arthropoda" />
                    <img className="absolute top-[4%] left-[33%] opacity-0 group-hover:opacity-100" src={starRightIcon} alt="star" />
                </figure>
            </Link>
            <figure className="relative group">
                <img className="mx-auto border-4 border-opacity-0 border-yellow-normal rounded-[30px] hover:border-opacity-100" src={other} alt="Other" />
                <img className="absolute -right-[5%] bottom-[55%] opacity-0 group-hover:opacity-100" src={flowerRightIcon} alt="flower" />
            </figure>
        </div>
    </div>
</main>
  )
}
