import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Publications from "./components/Publications";
import Resume from "./components/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/resume" element={<Resume />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
