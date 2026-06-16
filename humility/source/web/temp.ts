import { h, signal, ref, onMount, onCleanup, render } from './framework.js';

function Counter({ count }) {
  // 1. Initialize a custom un-tracked ref signal
  const myInputRef = ref(); 

  onMount(() => {
    // Focus the element imperatively via ref without triggering layout re-renders!
    if (myInputRef()) {
      myInputRef().focus();
      myInputRef().style.border = "2px solid green";
    }

    const timer = setInterval(() => {
      count(c => {}); // update counter value
    }, 1000);

    onCleanup(() => clearInterval(timer));
  });

  return h('.counter-layout', 
    h('h2', `Count: ${count()}`),
    // Pass the ref attribute straight down
    h('input.MyInput', { type: 'text', placeholder: 'Auto-focused on mount...', ref: myInputRef })
  );
}

function App() {
  const show = signal(true);
  const count = signal(0);

  return h('.app-wrapper', // Defaults to div with class "app-wrapper"
    h('button', { onclick: () => show(!show()) }, 'Toggle Component'),
    
    // Testing flexible rest parameters vs nested child arrays
    h('div', 
      show() 
        ? h(Counter, { count }) 
        : h('p', 'Unmounted safely!')
    )
  );
}

render(h(App), document.getElementById('app'));
