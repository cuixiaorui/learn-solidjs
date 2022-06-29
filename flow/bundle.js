import { delegateEvents, insert, template } from 'solid-js/web';
import { createSignal } from 'solid-js';

const _tmpl$ = /*#__PURE__*/template(`<div><h1>hello,world</h1><button></button></div>`, 6);

const App = () => {
  const [count, setCount] = createSignal(0);
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling;

    _el$3.$$click = () => {
      setCount(count() + 1);
    };

    insert(_el$3, count);

    return _el$;
  })();
};

delegateEvents(["click"]);

export { App as default };
