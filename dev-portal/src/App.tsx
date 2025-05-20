import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Timer from "./components/Timer";
import MainLayout from "./layout/MainLayout";
import AboutMe from "./components/AboutMe";
import Jokes from "./components/Jokes";

function App() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<AboutMe />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/jokes" element={<Jokes />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
