import { Component, createSignal, Show } from "solid-js";
import CFor from "./CFor";
import CShow from "./CShow";
import CIndex from "./CIndex";
import CSwitch from "./CSwitch";
import CDynamic from "./CDynamic";
import { CPortal } from "./CPortal";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>app</p>
      <CShow></CShow>
      <CFor></CFor>
      <CIndex></CIndex>
      <CSwitch></CSwitch>
      <CDynamic></CDynamic>
      <CPortal></CPortal>
    </div>
  );
};

export default App;
