import { Component, createSignal } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h1>hello,world</h1>
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
