import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageUnderConstruction from "./pages/PageUnderConstruction";
import Head from "./components/Head";
import Activity from "./pages/Activity";

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
          <Route exact path="/activity" element={<Activity/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
