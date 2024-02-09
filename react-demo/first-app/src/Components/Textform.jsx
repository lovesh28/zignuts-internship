import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtText = text.toUpperCase();
    setText(newtText);
  };

  const handleLoClick = () => {
    let newtText = text.toLowerCase();
    setText(newtText);
  };

  const handleclear = () =>  {
    let newtText = ('');
    setText(newtText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
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

          <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            {" "}
            Convert to uppercase{" "}
          </button>

          <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
            {" "}
            Convert to Lowercase{" "}
          </button>

          <button className="btn btn-primary my-3 mx-2" onClick={handleclear}>
            {" "}
            Clear text{" "}
          </button>
        </div>
      </div>

      <div className="container">
        <h1>Text Count:</h1>
        <h3>
          Your text has {text.split(" ").length} Words and {text.length}{" "}
          Characters
        </h3>
        <p>({0.008 * text.split(" ").length}Minutes to read this text)</p>
        <h2>Preview text:</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
