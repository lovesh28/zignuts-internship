import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  

  return (
    <>
      <Navbar title="Navbar" aboutText="About us" />
      <div className="container my-4">
        <Textform heading="Enter Text here " />
      </div>
    </>
  );
}

export default App;
