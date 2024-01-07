import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/all.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import StoreOverview from "./pages/StoreOverview";
import StoreSearch from "./pages/StoreSearch";
import StoreContent from "./pages/StoreContent";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StoreSearch />}></Route>
        <Route path="/store-overview/cafe" element={<StoreContent />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}