import { Component, createSignal, Show } from "solid-js";
import CFor from "./CFor";
import CShow from './CShow'

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <CShow></CShow>
      <CFor></CFor>
      <p>app</p>
    </div>
  );
};

export default App;
