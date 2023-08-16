import "../../asserts/css/App.css";
import Header from "./header/Header";
import jsonData from "../../asserts/data/data.json"
import Experiance from "./body/experiance/Experience";
import Space from "../common/Space";

export default function App() {
  return (
    <>
      <div className="font-serif">
        {/* -Header- */}
        <Header data={jsonData}></Header>
        {/* -Space- */}
        <Space></Space>
        {/* -Experiance- */}
        <Experiance></Experiance>
      </div>
    </>
  )
}
