import React from "react";

function FilterComp() {
  const arr = ["harshitha", "suresh", "Raju", "Ravi", "Vinay", "Mouli"];
  const fildata = arr.filter((name) => name.includes("h"));
  return (
    <div>
      <h1>Filterfuncation in React</h1>
      {fildata.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>
  );
}

export default FilterComp;
