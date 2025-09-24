const test = "a^2";

const { h, p, e, r } = voyage;

const app = () => {
  return h("p", precious(test));
};

r(app, document.body);
