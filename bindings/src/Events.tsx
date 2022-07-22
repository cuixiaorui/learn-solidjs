import { Component, createSignal } from "solid-js";
export const Events: Component = () => {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  const mouseMoveHandler = (data, e) => {
    console.log(data);
    // 这里注意  第一个参数是传过来的 data
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    // 如果你想给函数传参数的话  那么得用数组的形式 然后把参数放到第二个位置
    <div onMouseMove={[mouseMoveHandler, "heihei"]}>
      {/* <div onMouseMove={mouseMoveHandler}> */}
      The mouse position is {pos().x}:{pos().y}
    </div>
  );
};
