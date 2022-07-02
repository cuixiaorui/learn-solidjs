import { Component, createSignal, Index } from "solid-js";

// Index 对比 For 组件的话
// 是一个更优解
// 可以做一些优化，某些元素不需要渲染的话 它就会不渲染了
// For 组件的话关心整体 ，只要是有一个变了就都会重新渲染（需要验证？）
// 而 Index 组件的话关心其中的一个 item ， 这个 item 变了之后 也只会变更这一个 item 的视图
const CIndex: Component = () => {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);

  // 没有计算属性或者 watch 的话 我该如何观察？ 
  return (
    <Index each={cats()}>

      {(cat, i) => (
        <li>
          <a
            target="_blank"
            href={`https://www.youtube.com/watch?v=${cat().id}`}
          >
	--------------index------------------
	    {/* 使用上来看的话 也和 for 有很大的区别
	    比如这里的 i 变成了普通值
	    而 cat（item）却变成了响应式对象 */}

	    {/* 那从 i 和 item 这两个值来分析的话
	    那就是当 i 发生改变的时候  比如顺序发生改变了 那么 Index 是不会重新渲染的
	    只有当 item 的内容发生改变之后 才会重新渲染
	    
	    对比 For 的话  ，只要是顺序发生改变了 那么不管里面的数据有没有变 也都会重新的渲染 */}
            {i + 1}: {cat().name}
          </a>
        </li>
      )}
    </Index>
  );
};


export default CIndex
