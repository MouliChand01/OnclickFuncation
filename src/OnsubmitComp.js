import React, { useState } from "react";

function OnsubmitComp() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [mydata, setMydata] = useState([]);

  const { username, password } = data;

  const res = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SubmitEventHandelear = (e) => {
    e.preventDefault();
    setMydata([...mydata, data]); //mydata + data
    console.log(mydata);
  };

  return (
    <div>
      <h1>OnSubmit event handlar</h1>
      <form onSubmit={SubmitEventHandelear}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={res}
        ></input>
        <br />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={res}
        ></input>
        <br />
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default OnsubmitComp;
