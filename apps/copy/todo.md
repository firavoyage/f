todo

---

handle img if on. size. render.

---

identify implicit line breaks. inline divs (via inline style).

---

optimize for complex pastes

i could add an option to choose

- get innerhtml from contenteditable
- intercept paste and prevent default

though, from an experiment, whether intercepted or not, it's already full of var in inline styles. it's just perf.

---

(!) preprocess custom elements (web components, or non standard elements) to div.

fix: gemini web (current: custom elements are filtered, resulting in an empty output)
