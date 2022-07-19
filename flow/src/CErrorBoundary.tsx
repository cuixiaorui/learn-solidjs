import { ErrorBoundary } from "solid-js";

const Broken = () => {
  throw new Error("heiheihei");
};

export function CErrorBoundary() {
  return (
    <>
      <div> ------------ ErrorBoundary-------------------</div>
      <div>Before</div>
      {/* 组件 broken 抛出错误 */}
      <ErrorBoundary fallback={err => "errorBoundary ->"+err}>
        <Broken></Broken>
      </ErrorBoundary>
      <div>After</div>
    </>
  );
}
