import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeaturedCategories from "./pages/homePage/FeaturedCategories";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      {/* Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<FeaturedCategories />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;