import react, { useEffect, useState } from "react";
function Onclick() {
  var [val, setval] = useState(0);
  var [str, setStr] = useState("Hello");

  useEffect(() => console.log("clicked"), [val]);

  return (
    <div>
      <h1>onclick event example</h1>
      <h2>
        {val} {str}
      </h2>

      <button
        onClick={str === "Hello" ? () => setStr("Bye") : () => setStr("Hello")}
      >
        Click me
      </button>
      <button onClick={() => setval(val + 10)}>countInc</button>
    </div>
  );
}

export default Onclick;
