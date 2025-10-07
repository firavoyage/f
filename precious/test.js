const test = {
  a: "a^2*log(2,3)",
  b: `z = 1 + bi, b != 0. z + 2/z = m. m in R. 
求 m.`,
  c: `z^2 - mz + 2 = 0
  z_1 = 1+bi, z_2 = 1-bi (共轭虚根定理)
  {
    z_1 + z_2 = 2
    z_1 + z_2 = - (-m)/(1) (verta)
  }
  m = 2
  `,
  // todo: support literal )
  d: `forall x in [0, +inf), f(x) = f(1/(x+1))
{f(x)|x in [0,a]} = {f(x)|x in [0,+inf)}
求 a 范围.
`,
  e: `g(x) - f(x) = x^2-2x+2
g(x_n)-f(x_n) = sum(i=1, n-1, g(x_i) - f(x_i))
x_n^2 - 2x_n +2 = sum(i=1, n-1, x_i^2-2x_i) + 2(n-1)
h(x) = x^2-2x in [-1, 45/4]
h(x_n)+2 = sum(i-1, n-1, h(x_i)) + 2n-2
2n = h(x_n) - sum(i=1, n-1, h(x_i)) + 4 
<= 45/4 - (n-1)(-1) + 4
<= 61/4 + n-1
n <= 57/4 = 14.25
n_max = 14`,
  f: `M(a,b)
N(c,d)
l_MN: (a-c)(y-b)-(b-d)(x-a)=0
{
  2a^2-b^2 = 1, b^2 = 2a^2 -1
  4c^2+d^2 = 1, d^2 = 1-4c^2
  ac+bd = 0
}
d = abs(-a(b-d)+b(a-c))/sqrt((a-c)^2+(b-d)^2)
= abs(ad-bc)/sqrt(a^2+b^2+c^2+d^2-2ac-2bd)
= abs(ad-bc)/sqrt(a^2+b^2+c^2+d^2)
d^2 = (a^2d^2-2ab-d+b^2c^2)/(3(a^2-c^2))
= (a^2(1-4c^2)+(2c^2-1)c^2+2a^2c^2)/(3(a^2c^2))
d = sqrt(1/3) = sqrt(3)/3`,
};

const theme = {
  font: {
    // math: "XITS Math, math",
    // stix doesnt render properly on sqrt()
    math: `"STIX Two Math", math`,
    mathtext: `"EB Garamond", "STIX Two Text", "Noto Serif CJK SC", serif`,
  },
};

const stylesheet = {
  "*": `overflow-y-auto`,
  body: `fixed inset-0 bg-black`,
  ".app": `p-4
  overflow-y-auto
  text-10 text-#eee`,
};

const { h, p, e, r } = voyage;

const { map, values } = f;

const app = () => {
  const loaded = p(false);

  // no need to wait for loading since the async prop on tex-svg.js is removed
  e(() => {
    // const { has } = f;

    // const a = setInterval(() => {
    //   if (has(window, "MathJax", "tex2svg")) {
    //     loaded(true);
    //     clearInterval(a);
    //   }
    // }, 10);

    // // Wait for MathJax to load
    // window.MathJax = {
    //   startup: {
    //     pageReady: () => {
    //       return MathJax.startup.defaultPageReady().then(() => {
    //         // console.log("MathJax is ready");
    //         // Your rendering code here
    //         loaded(true);
    //       });
    //     },
    //   },
    // };

    loaded(true);
  });

  return (
    loaded() &&
    h(
      h("style", { html: flair({ stylesheet, theme }) }),
      h(
        "div",
        { class: "app" },
        map(values(test), (a) =>
          h(
            h("div", {
              class: "test",
              html: renderMath(precious(a), "l", true),
            }),
            h("br")
          )
        )
      )
    )
  );
};

r(app, document.body);
