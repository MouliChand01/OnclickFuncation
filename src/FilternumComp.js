import React from "react";

function FilternumComp() {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80];
  const fildata = arr.filter((item) => item > 40);
  return (
    <div>
      <h1>Filternumfuncation in React</h1>
      {fildata.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>
  );
}

export default FilternumComp;
