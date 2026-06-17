import { h, p, ref, effect, redraw } from '../framework';

const input = ref();
function Counter({ count }) {
  effect(() => {
    if (input()) {
      input().focus();
      input().style.border = "2px solid green";
    }

    const timer = setInterval(() => {
      count(c => c + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    h('.Counter',
      h('h2', `Count: ${count()}`),
      h('input.Counter_input', { type: 'text', ref: input })
    )
  );
}

const show = p(true)
const count = p(0)

export function App() {
  return (
    h('.App',
      h('button', { onclick: () => { show(!show()); redraw(); } }, 'Toggle Component Visibility'),

      show() ? h(Counter, { count }) : h('p', 'Counter unmounted')
    )
  );
}
