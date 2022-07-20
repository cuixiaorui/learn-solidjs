# hello world
看看 solidjs 跑 hello world 是怎么样子的

## 探索

看看 solidjs 编译出来的代码是什么样子
对比 vue3 编译出来的代码有什么区别

### how
我们需要额外的配置一下 rollup  不然打包出来的代码没法看

![](https://images-1252602850.cos.ap-beijing.myqcloud.com/20220620213303.png)

![](https://images-1252602850.cos.ap-beijing.myqcloud.com/20220620213233.png)

有意思的点应该在 `    insert(_el$3, count);` 里面 

当响应式数据发生改变的时候  这里应该是需要更新  `_el$3` 的值