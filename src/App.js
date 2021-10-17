import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Page from "./components/Page";

function App() {
  const [jsxElement, setJsxElement] = useState(<Home />);
  const onOptionSelect = (element) => {
    setJsxElement(element);
  };
  return (
    <div className="portfolio-container">
      <Menu onOptionSelect={onOptionSelect} />
      <Page component={jsxElement} />
    </div>
  );
}

export default App;
