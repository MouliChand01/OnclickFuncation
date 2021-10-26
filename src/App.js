import logo from "./logo.svg";
import "./App.css";
import Onclickcomp from "./Onclickcomp";
import OnchangeComp from "./OnchangeComp";
import OnsubmitComp from "./OnsubmitComp";
import MapComp from "./MapComp";
import FilterComp from "./FilterComp";
import FilternumComp from "./FilternumComp";

function App() {
  return (
    <div className="App">
      <Onclickcomp />
      <hr />
      <OnchangeComp />
      <hr />
      <OnsubmitComp />
      <hr />
      <MapComp />
      <hr />
      <FilterComp />
      <hr />
      <FilternumComp />
    </div>
  );
}

export default App;
