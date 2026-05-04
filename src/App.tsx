import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeaturedCategories from "./pages/homePage/FeaturedCategories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./pages/aboutPage/HeroSection";

function App() {
  return (
    <BrowserRouter>

      {/* Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<FeaturedCategories />} />
        <Route path="/herosection" element={<HeroSection />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;