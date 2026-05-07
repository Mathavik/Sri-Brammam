import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./pages/aboutPage/HeroSection";
import Home from "./pages/homePage/home";
import AboutPage from "./pages/aboutPage/HeroSection";
import CommonIssue from "./pages/issuePage/commonIssue";

import MainBan from "./pages/eventsPage/mainban";
import { Reporter } from "./pages/reporterPage/reporter";
import AllCategories from "./pages/homePage/AllCategories";
import AllPosts from "./pages/homePage/AllPosts";
import CategoryPosts from "./pages/homePage/CategoryPosts";
import WriterPosts from "./pages/homePage/WriterPosts";
// import Ban from "./pages/eventsPage/ban";

// பக்கத்தின் மேல் பகுதிக்கு ஸ்க்ரோல் செய்யும் காம்பொனென்ட்
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop காம்பொனென்ட்டை BrowserRouter-க்குள் சேர்த்துள்ளோம் */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/issues" element={<CommonIssue />} />
        <Route path="/events" element={<MainBan />} />
        <Route path="/reporters" element={<Reporter />} />
        <Route path="/all-posts" element={<AllPosts />} />
        <Route path="/all-categories" element={<AllCategories />} />
<Route path="/category-posts/:id" element={<CategoryPosts />} />
<Route path="/writer/:id" element={<WriterPosts />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;