import { Component, createSignal, Show } from "solid-js";
import CFor from "./CFor";
import CShow from './CShow'
import CIndex from './CIndex'

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <CShow></CShow>
      <CFor></CFor>
      <CIndex></CIndex>
      <p>app</p>
    </div>
  );
};

export default App;
