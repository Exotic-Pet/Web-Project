// import { Routes, Route } from "react-router-dom";
import "./styles/all.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StoreContent from "./pages/StoreContent";

export default function App() {
  return (
    <>
      <Header />
      <StoreContent />
      <Footer />
    </>
  );
}
