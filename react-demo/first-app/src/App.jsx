import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(15, 15, 15)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="Navbar"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-4">
        <Textform heading="Enter Text here " />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
