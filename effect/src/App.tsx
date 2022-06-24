import { Component, createSignal, createEffect, createMemo } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  // 这个称之为 Derived Signals
  // 就是 signals 可以被一个函数所包裹
  const doubleCount = () => count() * 2;

  createEffect(() => {
    // 只有在组件里面才会执行
    console.log("call createEffect");
    // 这样的话才会执行
    // 获取值的时候也需要调用一下， 因为 count 是个函数
    console.log(`count:${count()}`);
  });

  const doubleCountMemo = createMemo(() => {
    
    // 只要当 doubleCount 里面的 count 值发生改变的时候
    // 这个函数才会被重新调用
    // 和 vue3 的 计算属性是一样的
    // 都是可缓存的
    
    return doubleCount()});

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

      {/* // 这里的 doubleCountMemo 实际上使用的是缓存起来的值 */}
      <button
        onclick={() => {
          console.log(doubleCountMemo());
        }}
      >
        get double count memo
      </button>
      <div>double:{doubleCount()}</div>
    </div>
  );
};

export default App;
