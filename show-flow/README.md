# show-flow

solidjs 自己导出的组件

这个组件可以模拟 if else 的功能

但是 api 实在是丑

对比 vue3 的话 ，哦不 没的比

```tsx
<Show when={true} fallback={<div>show false</div>}>
  show true
</Show>
```

这里的 `when` 和 `if` 一样  
这个的 `fallback` 和  `else` 一样
