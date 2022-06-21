# Effect

这一章来了解 solidjs 的响应式怎么玩的


`createEffect` 来收集依赖

`createSignal` 来创建响应式对象

和 vue3 不同的是 `createEffect` 是只能在组件内才会生效  
不可以单独拿出来使用