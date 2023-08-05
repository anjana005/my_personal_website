import "../../asserts/css/App.css";
import Header from "./header/Header";
import jsonData from "../../asserts/data/data.json"
import Experiance from "./body/experiance/Experience";

export default function App() {
  return (
    <>
      <Header data={jsonData}></Header>
      {/* <Experiance></Experiance> */}
    </>
  )
}
