import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./pages/aboutPage/HeroSection";
import Home from "./pages/homePage/home";
import AboutPage from "./pages/aboutPage/HeroSection";
import { MagazineGallery } from "./pages/issuePage/issues";

function App() {
  return (
    <BrowserRouter>

      {/* Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herosection" element={<HeroSection />} />
        
        <Route path="/about" element={<AboutPage />} />

        <Route path="/issues" element={<MagazineGallery />} />


      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;