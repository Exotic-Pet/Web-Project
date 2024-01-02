import { Routes, Route } from "react-router-dom";
import "./styles/all.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StoreOverview from "./pages/StoreOverview";
import StoreContent from "./pages/StoreContent";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StoreOverview />}></Route>
        <Route path="/store-overview/cafe" element={<StoreContent />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
