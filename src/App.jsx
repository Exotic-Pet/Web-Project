import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/all.css";
import AutoScrollTop from "./components/AutoScrollTop";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import StoreOverview from "./pages/StoreOverview";
import StoreSearch from "./pages/StoreSearch";
import StoreContent from "./pages/StoreContent";
import ExoticOverview from "./pages/ExoticOverview";
import AmphibiansAndReptile from "./pages/AmphibiansAndReptile";
import LeporidaeAndMuriodea from "./pages/LeporidaeAndMuriodea";
import Aves from "./pages/Aves";
import Arthropoda from "./pages/Arthropoda";
import EventPage from "./pages/EventPage";
import CommunityPage from "./pages/CommunityPage";


export default function App() {
  return (
    <BrowserRouter>
      <AutoScrollTop>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/page" element={<Layout />}>
            <Route path="store-overview" element={<StoreOverview />} />
            <Route path="store-search" element={<StoreSearch />} />
            <Route path="store-search/content" element={<StoreContent />} />
            <Route path="exotic-overview" element={<ExoticOverview />} />
            <Route path="exotic-overview/amphibiansAndreptile" element={<AmphibiansAndReptile />} />
            <Route path="exotic-overview/leporidaeAndmuriodea" element={<LeporidaeAndMuriodea />} />
            <Route path="exotic-overview/aves" element={<Aves />} />
            <Route path="exotic-overview/arthropoda" element={<Arthropoda />} />
            <Route path="event" element={<EventPage />} />
            <Route path="community" element={<CommunityPage />} />
          </Route>
        </Routes>
      </AutoScrollTop>
    </BrowserRouter>
  );
}
