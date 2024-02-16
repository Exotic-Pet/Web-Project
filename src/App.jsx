import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/all.css";
import AutoScrollTop from "./components/AutoScrollTop";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import StoreOverview from "./pages/StoreOverview";
import StoreSearch from "./pages/StoreSearch";
import StoreContent from "./pages/StoreContent";
import ExoticOverview from "./pages/ExoticOverview";
import ExoticOverviewLayout from "./components/ExoticOverviewLayout";
import AmphibiansAndReptile from "./pages/AmphibiansAndReptile";
import IntroPage from "./pages/IntroPage";
import LeporidaeAndMuriodea from "./pages/LeporidaeAndMuriodea";
import Aves from "./pages/Aves";
import Arthropoda from "./pages/Arthropoda";
import EventPage from "./pages/EventPage";
import Gathering from "./pages/Gathering";
import GatheringContent from "./pages/GatheringContent";
import GatheringLayout from "./components/GatheringLayout";
import CommunityPage from "./pages/CommunityPage";

export default function App() {
  return (
    <BrowserRouter basename="/Web-Project">
      <AutoScrollTop>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/page" element={<Layout />} >
            <Route path="store-overview" element={<StoreOverview />} />
            <Route path="store-search" element={<StoreSearch />} />
            <Route path="store-search/content" element={<StoreContent />} />
            <Route path="exotic-overview" element={<ExoticOverview />} />
            <Route path="exotic-overview" element={<ExoticOverviewLayout />} >
              <Route path="amphibiansAndreptile" element={<AmphibiansAndReptile />} />
              <Route path="amphibiansAndreptile/intropage" element={<IntroPage />} />
              <Route path="leporidaeAndmuriodea" element={<LeporidaeAndMuriodea />} />
              <Route path="aves" element={<Aves />} />
              <Route path="arthropoda" element={<Arthropoda />} />
            </Route>
            <Route path="event" element={<EventPage />} />
            <Route path="gathering" element={<Gathering />} />
            <Route path="gathering" element={<GatheringLayout />} >
              <Route path="content" element={<GatheringContent />} />
            </Route>
            <Route path="community" element={<CommunityPage />} />
          </Route>
        </Routes>
      </AutoScrollTop>
    </BrowserRouter>
  );
}
