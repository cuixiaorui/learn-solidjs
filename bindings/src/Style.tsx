import { Component, createSignal } from "solid-js";
export const Style: Component = () => {
  const StringStyleChild = () => {
    const [color, setColor] = createSignal("red");
    // 样式支持 object 和 string 两种形式

    function changeColor(color: string) {
      setColor(color);
    }
    return (
      // string的形式 可以结合响应式对象一起来玩
      <div style={`color: ${color()}`}>
        <div>-------------------Style-------------------</div>

        <div>
          <button onclick={[changeColor, "red"]}>red</button>
          <button onclick={[changeColor, "blue"]}>blue</button>
        </div>
      </div>
    );
  };

  const ObjectStyleChild = () => {
    const [styleInfo, setStyleInfo] = createSignal({
      color: "red",
    });

    function changeColor(color:string) {
      setStyleInfo({
        color,
      });
    }

    return (
      <div style={styleInfo()}>
        <div>------------------Style-------------------</div>
        <button onclick={[changeColor, "red"]}>red</button>
        <button onclick={[changeColor, "blue"]}>blue</button>
      </div>
    );
  };

  return (
    <div>
      {/* <StringStyleChild></StringStyleChild> */}
      <ObjectStyleChild></ObjectStyleChild>
    </div>
  );
};
