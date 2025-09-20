// use window.innerWidth window.innerHeight

const { h, p, e, r } = voyage;

const app = () => {
  const data = p({});
  const state = p({});
  const loaded = p(false);

  e(() => {
    // todo: whenever resize
    state("viewport", "width", window.innerWidth);
    state("viewport", "height", window.innerHeight);
    console.log(state());
    
    loaded(true)
  });

  return loaded() && h(
    "svg",
    {
      width: `${state().viewport.width}px`,
      height: `${state().viewport.height}px`,
      viewBox: "0 0 100 100",
    },
    h("circle", { cx: 50, cy: 50, r: 10, fill: "lightblue" })
  );
};

r(app, document.body);
