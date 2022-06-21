import { Component, createSignal } from "solid-js";
import HelloWorld from './HelloWorld'

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      {/* solidjs 里面的 jsx 必须是 self-close tag or close tag(注释也挺有意思) */}
      <input></input>
      <HelloWorld></HelloWorld>
      <button
        onClick={() => {
          setCount(count() + 1);
        }}
      >
        {count()}
      </button>
    </div>
  );
};

export default App;
