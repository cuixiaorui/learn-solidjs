import { Component, createSignal, createEffect } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  // 这个称之为 Derived Signals
  // 就是 signals 可以被一个函数所包裹
  const doubleCount = () => count() * 2

  createEffect(() => {
    // 只有在组件里面才会执行
    console.log("call createEffect");
    // 这样的话才会执行
    // 获取值的时候也需要调用一下， 因为 count 是个函数
    console.log(`count:${count()}`);
  });

  // 理论上来讲 组件的 render 逻辑也是被外面包裹了一个 createEffect 的
  return (
    <div>
      <button
        onClick={() => {
          // 修改响应式对象的值的时候 必须通过 setXXX 来修改
          // 这样的话才好通知依赖
          setCount(count() + 1);
        }}
      >
        {count()}
      </button>
      <div>
        double:{doubleCount()}
      </div>
    </div>
  );
};

export default App;
