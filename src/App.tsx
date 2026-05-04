import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeaturedCategories from "./pages/homePage/FeaturedCategories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/aboutPage/HeroSection";

function App() {
  return (
    <BrowserRouter>

      {/* Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<FeaturedCategories />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;