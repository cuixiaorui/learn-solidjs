import { Component, createSignal, Show } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      {/*       // 使用了组件来模拟了 if else 的功能
      // 对比 vue3 的 v-if v-else v-else if 的话 
      // 这个使用起来太别扭了 而且非常的不优雅  */}

      <Show when={true} fallback={<div>show false</div>}>
        show true
      </Show>

      <p>app</p>
    </div>
  );
};

export default App;
