import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Features from "./components/Features/Features";
import Comments from "./components/Comments/Comments";
import Achivments from "./components/Achivments/Achivments";
import Tools from "./components/Tools/Tools";
import Mobile from "./components/Mobile/Mobile";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Hero />
            <Companies />
            <Features />
            <Comments />
            <Achivments />
            <Tools />
            <Mobile />
            <Footer />
          </div>
        }
      />
      <Route path="*" element={<div className="app">page not found</div>} />
    </Routes>
  );
}

export default App;
