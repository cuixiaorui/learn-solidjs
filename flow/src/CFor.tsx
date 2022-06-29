import { Component, createSignal, For } from "solid-js";

const CFor: Component = () => {
  // 创建一个响应式对象
  // 等会给到 For 组件上
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);

  return (
    <div>
      <For each={cats()}>
        {(cat, i) => (
          <div>
            <li>
              <a href="" target="_blank">
                {/* 那这里的 cat 还可以修改  */}
                {/* 因为是引用类型嘛？ 所以是可以触发依赖得？ */}
                {/* {cat.name="hahaha"} */}
                {/* // 那明白了 这里的 i 是值类型  所以 必须是需要一个函数的， 而引用类型的话就可以直接修改了
                // 从使用体验上来讲不统一呀  */}
                {i() + 1}:{cat.name}
              </a>
            </li>
          </div>
        )}
      </For>
      app
    </div>
  );
};

export default CFor;
