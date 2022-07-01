import { Component, createSignal, Switch, Match } from "solid-js";


// 这里用2个组件来模拟 switch 
// Switch 和 Match
const CSwitch = () => {
  const [age] = createSignal(18);

  return (
    <>
      <div>----------------- Switch component ----------</div>
      <Switch fallback={<div>我才18岁</div>}>
        <Match when={age() < 18}>我还是一个孩子</Match>
        <Match when={age() > 18}>该养家糊口了</Match>
      </Switch>
    </>
  );
};

export default CSwitch;
