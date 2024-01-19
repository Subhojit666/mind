import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageUnderConstruction from "./pages/PageUnderConstruction";
import Head from "./components/Head";
import Activity from "./pages/Activity";
import Comfort from "./pages/Comfort";
import Distract from "./pages/Distract";
import About from "./pages/About";
import Journal from "./pages/Journal";
import Timer from "./pages/Timer";

function App() {
  return (
    <div className="py-8 bg-[rgba(242, 249, 254, 0.8)] dark:bg-[rgba(17, 23, 41, 0.8)] min-h-screen">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            path="/page-under-construction"
            element={<PageUnderConstruction />}
          />
          <Route exact path="/timer" element={<Timer/>} />
          <Route exact path="/journal" element={<Journal/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/activity" element={<Activity/>} />
          <Route exact path="/comfort" element={<Comfort/>} />
          <Route exact path="/distract" element={<Distract/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
