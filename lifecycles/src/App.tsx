import { Show, Component, createSignal, onMount, onCleanup } from "solid-js";

const App: Component = () => {
  const [isShow, setIsShow] = createSignal(true);

  const Child = () => {
    onMount(() => {
      console.log("on mount");
    });

    onCleanup(() => {
      // 当被销毁的时候就会被调用
      // 和 vue3 是一样的逻辑
      console.log("on clean");
    });

    return <div>child</div>
  };

  const onClick = () => {
    setIsShow(() => false);
  };

  return (
    <div>
      <Show when={isShow()} fallback={<div>show false</div>}>
        <Child></Child>
      </Show>
      <button onclick={onClick}>false</button>
    </div>
  );
};

export default App;
