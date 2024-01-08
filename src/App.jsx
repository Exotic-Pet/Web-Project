import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/all.css";
import HomeHeader from "./components/HomeHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StoreOverview from "./pages/StoreOverview";
import HomePage from "./pages/HomePage";
import StoreSearch from "./pages/StoreSearch";
import StoreContent from "./pages/StoreContent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHeader />}></Route>
        <Route path="/page/*" element={<Header />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/page/store-overview" element={<StoreOverview />}></Route>
        <Route path="/page/store-search" element={<StoreSearch />}></Route>
        <Route path="/page/store-search/content" element={<StoreContent />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}