import { Component, createSignal } from "solid-js";
import {Events} from './Events'
import {Style} from './Style'

const App: Component = () => {
  return (
    <div>
      <Events></Events>
      <Style></Style>
    </div>
  );
};

export default App;
