import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturedCategories from "./pages/homePage/FeaturedCategories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeaturedCategories/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;