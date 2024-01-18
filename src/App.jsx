import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageUnderConstruction from "./pages/PageUnderConstruction";
import Head from "./components/Head";

function App() {
  return (
    <div className="px-3 sm:px-5 md:px-40 py-8 bg-[rgba(242, 249, 254, 0.8)] dark:bg-[rgba(17, 23, 41, 0.8)] min-h-screen">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            path="/page-under-construction"
            element={<PageUnderConstruction />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
