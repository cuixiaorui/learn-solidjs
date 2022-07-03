import { render, Dynamic } from "solid-js/web";
import { createSignal, Switch, Match, For, Component } from "solid-js";

const RedThing = () => <strong style="color: red">Red Thing</strong>;
const GreenThing = () => <strong style="color: green">Green Thing</strong>;
const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

const options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing,
};

const CDynamic: Component = () => {
  const [selected, setSelected] = createSignal("red");
  return (
    <>
      <div> ------------ Dynamic-------------------</div>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
      {/* 这个报错不用管 */}
      {/* 这里的动态组件的话 也不需要提前注册  直接用就可以了
      函数即组件 */}
      {/* 和 vue3 的动态组件一样  Component */}
      <Dynamic component={options[selected()]}></Dynamic>
    </>
  );
};

export default CDynamic;
