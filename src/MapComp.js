import React from "react";

function MapComp() {
  const arr = ["harshitha", "suresh", "Raju", "Ravi", "Vinay", "Mouli"];
  const obj= [
    {
      id: 1,
      name: "mouli",
    },
    {
      id: 2,
      name: "Siva",
    },
    {
      id: 3,
      name: "Ravikaya",
    }
]
  return (
    <div>
      <h1>Mapfuncation in React</h1>
      {arr.map((e, i) => <p key={i}>{e}</p>)}
      <hr />
      {obj.map((e)=><p key={e.id}>{e.id},{e.name}</p>)}
    </div>
  );
}

export default MapComp;
