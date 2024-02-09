import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    console.log("upercase was clicked" + text);
    let newtText = text.toUpperCase();
    setText(newtText);
  };

  const handleOnChange = (e) => {
    console.log(" onchange was clicked");
    setText(e.target.value);
  };

  return (
    <div>
      <h1>{props.heading} </h1>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="5"
        ></textarea>

        <button className="btn btn-primary" onClick={handleUpClick}>
          {" "}
          Convert to uppercase{" "}
        </button>
      </div>
    </div>
  );
}
