// 在这里来理解 solidjs 的响应式系统
import { createSignal, createEffect } from "solid-js";

// 通过  createSignal 来创建响应式对象
// 可以导出 2 个函数
// 获取值的时候是需要调用函数来获取值
const [count, setCount] = createSignal(0);

// createEffect(() => {
//   console.log(count() * 10);
// });
console.log("!!!!!!!!");
createEffect(() => {
  // 这。。。  不可以单独拿出来调用
  // 看来只能去组件里面看看了
  // 在组件里面是会执行的
  console.log("????????");
  // console.log("The count is now", count());
});

// setInterval(() => {
//   setCount(count() + 1);
// }, 100);
