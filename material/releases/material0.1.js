// todo: history. vector

// how to create segment, polygon, curve, eclipse(circle) in svg

// fit eclipse

// create control points

// mouse library

const version = "1.0";

const { h, p, e, r } = voyage;

const stylesheet = {
  ".page": `pos-fixed inset-0 max-w-full box-border m-0 overflow-hidden
  bg-gray-900`,
  "*": "fill-none stroke-5px stroke-gray-50",
  ".point": "fill-gray-50 stroke-none",
  // todo: use a color in palette instead of lightblue
  ".point.selected": "fill-lightblue stroke-none",
};

const theme = {
  color: {
    gray: {
      50: "#f6f7f9",
      800: "#343a46",
      900: "#23272f",
    },
  },
};

/**
 * Generates an SVG path string from an array of points.
 * @param {Object[]} points - Array of point objects.
 * @param {number} points[].x - The x-coordinate of the point.
 * @param {number} points[].y - The y-coordinate of the point.
 * @returns {string} SVG path string connecting the points with line segments.
 * @example
 * // Returns "M10,20 L30,40 L50,60"
 * pointsToSvgPath([{ x: 10, y: 20 }, { x: 30, y: 40 }, { x: 50, y: 60 }])
 * @example
 * // Returns "M0,0 L100,0 L100,100 L0,100 Z" (closed rectangle)
 * pointsToSvgPath([{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }, { x: 0, y: 0 }])
 */
const line = (points) => {
  if (!points.length) return "";

  const [first, ...rest] = points;
  let path = `M${first.x},${first.y}`;

  rest.forEach((point) => {
    path += ` L${point.x},${point.y}`;
  });

  return path;
};

/**
 * Converts an array of points into a smooth SVG path string using cubic Bezier curves.
 * Control points are automatically calculated to create smooth curves between points.
 * @param {Object[]} points - Array of point objects with x and y properties.
 * @returns {string} SVG path string.
 * @example
 * // Returns "M 10 10 C 10 10, 10 10, 20 20 C 23.33 23.33, 26.67 16.67, 30 20"
 * pointsToSvgPath([
 *   { x: 10, y: 10 },
 *   { x: 20, y: 20 },
 *   { x: 30, y: 20 }
 * ]);
 */
const curve = (points) => {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  const path = [];
  path.push(`M ${points[0].x} ${points[0].y}`);

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    path.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`);
  }

  return path.join(" ");
};

/**
 * Fits an ellipse to an array of points.
 * @param {Array<{x: number, y: number}>} points - The array of points to fit.
 * @returns {false | {o: {x: number, y: number}, rx: number, ry: number, rotate: number}} The fitted ellipse or false if invalid.
 * @example
 * // Single point
 * fitToEllipse([{x: 0, y: 0}]); // {o: {x: 0, y: 0}, rx: 1, ry: 1, rotate: 0}
 * // Two points
 * fitToEllipse([{x: 0, y: 0}, {x: 2, y: 0}]); // {o: {x: 1, y: 0}, rx: 1, ry: 1, rotate: 0}
 * // Three points
 * fitToEllipse([{x: 0, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}]);
 */
const ellipse = (points) => {
  if (!Array.isArray(points)) return false;
  const n = points.length;
  if (n === 0) return false;
  for (let i = 0; i < n; i++) {
    const p = points[i];
    if (
      typeof p.x !== "number" ||
      typeof p.y !== "number" ||
      isNaN(p.x) ||
      isNaN(p.y)
    ) {
      return false;
    }
  }

  if (n === 1) {
    return {
      o: { x: points[0].x, y: points[0].y },
      rx: 1,
      ry: 1,
      rotate: 0,
    };
  }

  if (n === 2) {
    const p1 = points[0];
    const p2 = points[1];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = distance / 2;
    const center = {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };
    return {
      o: center,
      rx: radius,
      ry: radius,
      rotate: 0,
    };
  }

  let sumX = 0;
  let sumY = 0;
  for (const p of points) {
    sumX += p.x;
    sumY += p.y;
  }
  const center = {
    x: sumX / n,
    y: sumY / n,
  };

  const centeredPoints = points.map((p) => ({
    x: p.x - center.x,
    y: p.y - center.y,
  }));

  let covXX = 0;
  let covYY = 0;
  let covXY = 0;
  for (const p of centeredPoints) {
    covXX += p.x * p.x;
    covYY += p.y * p.y;
    covXY += p.x * p.y;
  }
  covXX /= n - 1;
  covYY /= n - 1;
  covXY /= n - 1;

  const determinant = covXX * covYY - covXY * covXY;
  if (Math.abs(determinant) < 1e-10) {
    return false;
  }

  const trace = covXX + covYY;
  const discriminant = Math.sqrt(trace * trace - 4 * determinant);
  const lambda1 = (trace + discriminant) / 2;
  const lambda2 = (trace - discriminant) / 2;

  let v1;
  if (covXY !== 0) {
    v1 = [lambda1 - covYY, covXY];
  } else {
    if (covXX >= covYY) {
      v1 = [1, 0];
    } else {
      v1 = [0, 1];
    }
  }
  const norm = Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1]);
  v1 = [v1[0] / norm, v1[1] / norm];

  let maxD = 0;
  for (const p of centeredPoints) {
    const u = p.x * v1[0] + p.y * v1[1];
    const v = p.x * -v1[1] + p.y * v1[0];
    const d = (u * u) / lambda1 + (v * v) / lambda2;
    if (d > maxD) maxD = d;
  }

  const rx = Math.sqrt(lambda1 * maxD);
  const ry = Math.sqrt(lambda2 * maxD);

  let angle = Math.atan2(v1[1], v1[0]) * (180 / Math.PI);
  if (angle < 0) angle += 360;

  return {
    o: center,
    rx,
    ry,
    rotate: 360 - angle,
  };
};

/**
 * Listens to Ctrl + scroll and Ctrl + /- keyboard events for zoom control.
 * Prevents default browser zoom behavior and triggers custom scale function.
 *
 * @returns {Function} Unsubscriber function to remove event listeners.
 *
 * @example
 * const unsubscribe = zoomHandler();
 * // Later call unsubscribe to remove event listeners
 * unsubscribe();
 */
const zoom = (scale) => {
  /**
   * Handles wheel events for Ctrl + scroll zoom control.
   * @param {WheelEvent} event - The wheel event object.
   */
  const handleWheel = (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
      scale(event.deltaY < 0 ? 1 : 0);
    }
  };

  /**
   * Handles keydown events for Ctrl + /- zoom control.
   * @param {KeyboardEvent} event - The keydown event object.
   */
  const handleKeydown = (event) => {
    if (event.ctrlKey) {
      if (event.code === "Equal" || event.code === "NumpadAdd") {
        event.preventDefault();
        scale(1);
      } else if (event.code === "Minus" || event.code === "NumpadSubtract") {
        event.preventDefault();
        scale(0);
      }
    }
  };

  // Add event listeners
  document.addEventListener("wheel", handleWheel, { passive: false });
  document.addEventListener("keydown", handleKeydown);

  // Return unsubscriber function
  return () => {
    document.removeEventListener("wheel", handleWheel);
    document.removeEventListener("keydown", handleKeydown);
  };
};

/**
 * Opens a file selection dialog and returns the text content of the selected file.
 *
 * @example
 * // Using async/await
 * const fileContent = await open();
 * if (fileContent) {
 *   console.log('File content:', fileContent);
 * } else {
 *   console.log('No file selected');
 * }
 *
 * @example
 * // Using promises
 * open().then(content => {
 *   if (content) {
 *     console.log('File content:', content);
 *   } else {
 *     console.log('No file selected');
 *   }
 * });
 *
 * @returns {Promise<string|false>} A promise that resolves to the file content as a string if a file is selected, or false if no file is selected
 */
const open = () => {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "*/*";

    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) {
        resolve(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result.toString());
      };
      reader.onerror = () => {
        resolve(false);
      };
      reader.readAsText(file);
    };

    input.click();
  });
};

/**
 * Creates and downloads a file with the specified text content.
 *
 * @example
 * // Download a text file with simple content
 * save('example.txt', 'Hello, World!');
 *
 * @example
 * // Download a JSON file
 * const data = { name: 'John', age: 30 };
 * save('data.json', JSON.stringify(data, null, 2));
 *
 * @param {string} filename - The name of the file to download
 * @param {string} content - The text content to save in the file
 * @returns {void}
 */
const save = (filename, content) => {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const app = () => {
  const materials = p({
    materials: {
      0: { type: "point", props: { point: { x: 0, y: 0 } } },
    },
    next: 1,
    history: { history: {}, current: 0 },
  });
  const change = () => {};
  const add = (item, select = false) => {
    materials.produce((m) => {
      const index = m.next++;
      // todo: if should create/select
      m.materials[index] = item;
      if (select) {
        selection.produce((s) => {
          s.push(index);
        });
      }
      // todo: make ctrl z ctrl shift z work properly
      m.history.history[m.history.current++] = m.materials;
    });
  };

  const constants = { max: 10, pointradius: 5, smaller: 0.8, larger: 1.25 };
  const viewport = p({
    width: window.innerWidth,
    height: window.innerHeight,
    max: constants.max,
  });
  const selection = p([]);
  const loaded = p(false);

  const { has, map, values } = f;

  const screen = ({ x, y }) => {
    const { width, height, max } = viewport(),
      scale = width / max;
    return {
      x: x * scale + width / 2,
      y: height / 2 - y * scale,
    };
  };

  const coordinate = ({ x, y }) => {
    const { width, height, max } = viewport(),
      scale = width / max;
    return {
      x: (x - width / 2) / scale,
      y: (height / 2 - y) / scale,
    };
  };

  const compile = (materials) => {
    const { width, height, max } = viewport(),
      scale = width / max;
    // h("circle", { cx: 50, cy: 50, r: 10, fill: "lightblue" })
    const dict = {
      point({ point: _p }) {
        const p = screen(_p);
        return [
          "circle",
          {
            class: "point",
            cx: p.x,
            cy: p.y,
            // unrelated to scale
            r: constants.pointradius,
          },
        ];
      },
      // broken lines
      line({ points }) {
        return ["path", { d: line(map(points, screen)) }];
      },
      curve({ points }) {
        return ["path", { d: curve(map(points, screen)) }];
      },
      polygon({ points }) {
        return [
          "polygon",
          {
            points: map(map(points, screen), (p) => `${p.x},${p.y}`).join(" "),
          },
        ];
      },
      ellipse({ o: _o, rx, ry, rotate = 0 }) {
        const o = screen(_o);
        return [
          "ellipse",
          {
            cx: o.x,
            cy: o.y,
            rx: rx * scale,
            ry: ry * scale,
            transform: `rotate(${rotate},${o.x},${o.y})`,
          },
        ];
      },
    };

    return map(materials, ([key, material]) => {
      const { type, props } = material;
      // material must be in dict
      const element = dict[type](props);
      if (selection().includes(+key)) {
        if (!has(element[1], "class")) {
          element[1].class = "";
        }
        element[1].class += " selected";
      }

      return h(...element);
    });
  };

  // new is js keyword. so use create
  const create = {
    point(point) {
      return { type: "point", props: { point } };
    },
    line(points) {
      return { type: "line", props: { points } };
    },
    curve(points) {
      return { type: "curve", props: { points } };
    },
    polygon(points) {
      return { type: "polygon", props: { points } };
    },
    ellipse(ellipse) {
      return { type: "ellipse", props: { ...ellipse } };
    },
  };

  const measure = () => {
    viewport("width", window.innerWidth);
    viewport("height", window.innerHeight);
  };

  const scale = (direction) => {
    // larger and smaller are for the coordinate width on screen
    const larger = 0,
      smaller = 1;
    viewport.produce((v) => {
      if (direction == larger) {
        v.max *= constants.larger;
      } else if (direction == smaller) {
        v.max *= constants.smaller;
      }
    });
  };

  e(() => {
    const _resize = addEventListener("resize", measure);
    const cleanup = [];
    cleanup.push(
      () => removeEventListener("resize", _resize),
      zoom(scale),
      mouse({
        click(p) {
          add(create.point(coordinate(p)));
        },
        "ctrl click"(p) {
          add(create.point(coordinate(p)), true);
        },
      }),
      listen({
        "ctrl 0"() {
          viewport.produce((v) => {
            v.max = constants.max;
          });
        },
        l() {
          const points = map(
            selection(),
            (item) => materials().materials[item].props.point
          );
          add(create.line(points));
          map(selection(), (index) => {
            materials.produce((m) => {
              delete m.materials[index];
            });
          });
          selection([]);
        },
        c() {
          const points = map(
            selection(),
            (item) => materials().materials[item].props.point
          );
          add(create.curve(points));
          map(selection(), (index) => {
            materials.produce((m) => {
              delete m.materials[index];
            });
          });
          selection([]);
        },
        p() {
          const points = map(
            selection(),
            (item) => materials().materials[item].props.point
          );
          add(create.polygon(points));
          map(selection(), (index) => {
            materials.produce((m) => {
              delete m.materials[index];
            });
          });
          selection([]);
        },
        e() {
          const points = map(
            selection(),
            (item) => materials().materials[item].props.point
          );
          add(create.ellipse(ellipse(points)));
          map(selection(), (index) => {
            materials.produce((m) => {
              delete m.materials[index];
            });
          });
          selection([]);
        },
        esc() {
          selection([]);
        },
        "ctrl o"() {
          const m = open();
          m.then((content) => {
            if (content) {
              materials.produce((materials) => {
                materials.materials = JSON.parse(content);
              });
            }
          });
        },
        "ctrl s"() {
          save("materials.json", JSON.stringify(materials().materials));
        },
        "ctrl z"() {
          materials.produce((m) => {
            if (has(m.history.history, m.history.current - 1)) {
              m.materials = m.history.history[--m.history.current];
            }
          });
        },
      })
    );

    loaded(true);
    return () => {
      map(cleanup, (c) => c());
    };
  });

  return (
    loaded() &&
    h(
      h("style", { html: flair({ stylesheet, theme }) }),
      h(
        "svg",
        {
          class: "page",
          width: `${viewport().width}px`,
          height: `${viewport().height}px`,
          viewBox: `0 0 ${viewport().width} ${viewport().height}`,
        },
        ...compile(materials().materials)
      )
    )
  );
};

r(app, document.body);
