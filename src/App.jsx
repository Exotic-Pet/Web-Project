import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/all.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import StoreOverview from "./pages/StoreOverview";
import StoreSearch from "./pages/StoreSearch";
import StoreContent from "./pages/StoreContent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page" element={<Layout />} >
          <Route path="store-overview" element={<StoreOverview />} />
          <Route path="store-search" element={<StoreSearch />} />
          <Route path="store-search/content" element={<StoreContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}