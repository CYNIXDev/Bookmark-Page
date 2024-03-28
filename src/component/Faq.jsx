/* eslint-disable react/prop-types */
import { useState } from "react";

function Faq(props) {
  const [active, setActive] = useState(false);
  const [cusStyle, setCusstyle] = useState("rotate-0");

  function handleClick() {
    if (active) {
      setActive(false);
      setCusstyle("rotate-0");
    } else {
      setActive(true);
      setCusstyle(["text-SoftRed", "rotate-180"]);
    }
  }
  return (
    <>
        {/* FQ */}
        <div
          onClick={handleClick}
          className={`py-8 border-t-2 flex justify-between cursor-pointer w-full ${cusStyle[0]}`}
        >
          <h2 className={!active && "text-VeryDarkBlue hover:text-SoftRed"}>
            {props.fq}
          </h2>
          <div className={`transition-all ${cusStyle[1]}`}>
            <i className={`fa-solid fa-chevron-down hover:text-SoftRed`}></i>
          </div>
        </div>

        {/* A */}
        <div className={active ? "block mb-8 " : "hidden"}>
          <p>{props.answer}</p>
        </div>
    </>
  );
}
export default Faq;
// <!-- Question 1 -->
//   What is Bookmark?

//   <!-- Answer 1 -->
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
//   justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.-
