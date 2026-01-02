<!-- https://gemini.google.com/app/19f7425b5d9286b8 -->

<!-- gemini 3 pro -->

<!-- https://chatgpt.com/c/6952b19c-1338-8321-8c39-834c73f8faa6 -->

<!-- gpt 5.2 -->

<!-- https://chatgpt.com/c/6952b2fb-9db4-8323-a81b-522c9e463fb7 -->

<!-- gpt 5 thinking mini -->

<!-- surprising. it seems that it's only limited by its output length limitation. -->

# a

make a website that's a landing page for a shoe brand with slick animations and shoe style layouts with very cool clicks, and the design of the website should jsut be flexing with animations!

---

This is a request for a high-end, immersive experience. To achieve that "flexing" feel, we need a combination of:

1. **Smooth Motion:** Using **GSAP** (GreenSock) for industry-standard animation physics.
2. **Custom Cursor:** A trailing cursor that reacts to interactive elements creates that "slick" feel.
3. **3D Tilt Effects:** Making 2D images feel 3D when you hover over them.
4. **Kinetic Typography:** Text that moves and breathes.

Here is a complete, single-file HTML solution. I have used placeholder images from Unsplash, but the structure is built for transparent shoe PNGs for the best effect.

### The "AERO" Landing Page

Save the code below as an `.html` file (e.g., `aero-shoes.html`) and open it in your browser.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AERO | Future Footwear</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Space+Grotesk:wght@300;500;700&display=swap"
      rel="stylesheet"
    />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <style>
      :root {
        --bg: #050505;
        --text: #ffffff;
        --accent: #ccff00; /* Neon Lime */
        --accent-dim: #4d6600;
        --gray: #2a2a2a;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: none; /* Hide default cursor */
      }

      body {
        background-color: var(--bg);
        color: var(--text);
        font-family: "Space Grotesk", sans-serif;
        overflow-x: hidden;
        width: 100vw;
      }

      /* --- CUSTOM CURSOR --- */
      .cursor-dot,
      .cursor-outline {
        position: fixed;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: 9999;
        pointer-events: none;
      }

      .cursor-dot {
        width: 8px;
        height: 8px;
        background-color: var(--accent);
      }

      .cursor-outline {
        width: 40px;
        height: 40px;
        border: 1px solid var(--accent);
        transition: width 0.2s, height 0.2s, background-color 0.2s;
      }

      body.hovering .cursor-outline {
        width: 80px;
        height: 80px;
        background-color: rgba(204, 255, 0, 0.1);
        border-color: transparent;
        backdrop-filter: blur(2px);
      }

      /* --- HEADER --- */
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 4rem;
        position: fixed;
        width: 100%;
        z-index: 100;
        mix-blend-mode: difference;
      }

      .logo {
        font-family: "Syncopate", sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      .menu-btn {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* --- HERO SECTION --- */
      .hero {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        perspective: 1000px;
      }

      .hero-text {
        position: absolute;
        z-index: 1;
        text-align: center;
        pointer-events: none;
      }

      h1 {
        font-family: "Syncopate", sans-serif;
        font-size: 12vw;
        line-height: 0.8;
        text-transform: uppercase;
        font-weight: 700;
        color: transparent;
        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
        transition: color 0.5s;
      }

      h1 span {
        display: block;
        color: var(--text);
        -webkit-text-stroke: 0;
      }

      .hero-img-container {
        width: 45vw;
        height: auto;
        z-index: 2;
        transform-style: preserve-3d;
        will-change: transform;
      }

      .hero-shoe {
        width: 100%;
        filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.5));
        transform: rotate(-15deg);
      }

      .cta-btn {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        padding: 1.5rem 3rem;
        background: transparent;
        border: 1px solid var(--text);
        color: var(--text);
        font-family: "Syncopate", sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        overflow: hidden;
        transition: all 0.3s ease;
        z-index: 10;
      }

      .cta-btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--accent);
        transition: left 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        z-index: -1;
      }

      .cta-btn:hover {
        color: #000;
        border-color: var(--accent);
        transform: translateX(-50%) scale(1.05);
      }

      .cta-btn:hover::before {
        left: 0;
      }

      /* --- SCROLLING MARQUEE --- */
      .marquee {
        width: 100%;
        padding: 2rem 0;
        background: var(--accent);
        color: #000;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        transform: rotate(-2deg) scale(1.1);
        z-index: 5;
      }

      .track {
        display: inline-block;
        animation: marquee 15s linear infinite;
      }

      .track h2 {
        display: inline-block;
        font-family: "Syncopate", sans-serif;
        font-size: 4rem;
        font-weight: 700;
        margin-right: 4rem;
        text-transform: uppercase;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      /* --- PRODUCT SHOWCASE --- */
      .showcase {
        padding: 10rem 4rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 4rem;
        background: var(--bg);
      }

      .card {
        background: var(--gray);
        border-radius: 20px;
        padding: 3rem;
        position: relative;
        overflow: hidden;
        transform-style: preserve-3d;
        perspective: 1000px;
        transition: transform 0.1s;
      }

      .card-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        transform-style: preserve-3d;
      }

      .card img {
        width: 120%;
        margin: -20% 0;
        transform: translateZ(50px) rotate(-15deg);
        transition: transform 0.5s ease;
        pointer-events: none;
      }

      .card:hover img {
        transform: translateZ(80px) rotate(0deg) scale(1.1);
      }

      .card h3 {
        font-family: "Syncopate", sans-serif;
        font-size: 2rem;
        margin-top: 2rem;
        transform: translateZ(30px);
      }

      .card p {
        color: #888;
        margin-top: 0.5rem;
        transform: translateZ(20px);
      }

      .card .price {
        margin-top: 1rem;
        font-size: 1.5rem;
        color: var(--accent);
        font-weight: 700;
        transform: translateZ(20px);
      }

      .buy-trigger {
        position: absolute;
        inset: 0;
        z-index: 10;
      }

      /* --- FOOTER --- */
      footer {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-top: 1px solid #222;
      }

      footer h2 {
        font-family: "Syncopate";
        font-size: 5vw;
        color: var(--gray);
        transition: color 0.3s;
      }

      footer h2:hover {
        color: var(--accent);
      }

      /* --- UTILS --- */
      .noise {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 900;
        opacity: 0.05;
        background: url("https://grainy-gradients.vercel.app/noise.svg");
      }

      /* Responsive */
      @media (max-width: 768px) {
        nav {
          padding: 1.5rem;
        }
        h1 {
          font-size: 15vw;
        }
        .hero-img-container {
          width: 80vw;
        }
        .showcase {
          padding: 5rem 1.5rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="noise"></div>

    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>

    <nav>
      <div class="logo interactable">AERO™</div>
      <div class="menu-btn interactable">Menu</div>
    </nav>

    <section class="hero">
      <div class="hero-text">
        <h1 class="reveal-text">Walk on</h1>
        <h1 class="reveal-text"><span>Air</span></h1>
      </div>

      <div class="hero-img-container" id="hero-tilt">
        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2864&auto=format&fit=crop"
          class="hero-shoe"
          alt="Aero Shoe"
        />
      </div>

      <button class="cta-btn interactable">Pre-Order V.01</button>
    </section>

    <div class="marquee">
      <div class="track">
        <h2>
          Speed // Agility // Design // Future // Speed // Agility // Design //
          Future //
        </h2>
        <h2>
          Speed // Agility // Design // Future // Speed // Agility // Design //
          Future //
        </h2>
      </div>
    </div>

    <section class="showcase">
      <div class="card interactable-card">
        <div class="card-inner">
          <h3>V-Runner</h3>
          <p>Urban Stealth Edition</p>
          <div class="price">$249</div>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop"
            alt="Shoe 1"
          />
        </div>
      </div>

      <div class="card interactable-card">
        <div class="card-inner">
          <h3>X-Force</h3>
          <p>Neon Cybernetic</p>
          <div class="price">$289</div>
          <img
            src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2874&auto=format&fit=crop"
            alt="Shoe 2"
          />
        </div>
      </div>

      <div class="card interactable-card">
        <div class="card-inner">
          <h3>Zero-G</h3>
          <p>Anti-Gravity Sole</p>
          <div class="price">$310</div>
          <img
            src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2898&auto=format&fit=crop"
            alt="Shoe 3"
          />
        </div>
      </div>
    </section>

    <footer>
      <h2 class="interactable">AERO™ // 2024</h2>
    </footer>

    <script>
      // --- 1. Custom Cursor Logic ---
      const cursorDot = document.querySelector(".cursor-dot");
      const cursorOutline = document.querySelector(".cursor-outline");

      let mouseX = 0,
        mouseY = 0;
      let cursorX = 0,
        cursorY = 0;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Immediate movement for dot
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      });

      // Smooth trailing animation for outline
      function animateCursor() {
        let distX = mouseX - cursorX;
        let distY = mouseY - cursorY;

        cursorX += distX * 0.15; // Speed of lag
        cursorY += distY * 0.15;

        cursorOutline.style.left = `${cursorX}px`;
        cursorOutline.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      // Hover states for interactable elements
      const interactables = document.querySelectorAll(
        ".interactable, .interactable-card"
      );
      interactables.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          document.body.classList.add("hovering");
        });
        el.addEventListener("mouseleave", () => {
          document.body.classList.remove("hovering");
        });
      });

      // --- 2. GSAP Animations ---
      gsap.registerPlugin(ScrollTrigger);

      // Intro Animation
      const tl = gsap.timeline();

      tl.from(".logo", { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".menu-btn", { y: -50, opacity: 0, duration: 1 }, "<")
        .from(
          "h1 span",
          {
            y: 200,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-shoe",
          {
            scale: 0.5,
            opacity: 0,
            rotation: 10,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          },
          "-=1"
        )
        .from(".cta-btn", { y: 50, opacity: 0, duration: 1 }, "-=1");

      // Parallax Effect on Hero Shoe
      document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 25;
        const y = (window.innerHeight / 2 - e.clientY) / 25;

        gsap.to(".hero-shoe", {
          rotationY: x,
          rotationX: y,
          duration: 1,
          ease: "power2.out",
        });
      });

      // Scroll Animations for Cards
      gsap.utils.toArray(".card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
        });
      });

      // --- 3. 3D Tilt Effect for Cards (Vanilla JS) ---
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
          const rotateY = ((x - centerX) / centerX) * 10;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
          card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
        });
      });

      // --- 4. Click Interaction (Ripple/Flex) ---
      document.addEventListener("click", () => {
        // Squeeze the cursor
        cursorOutline.style.transform = "translate(-50%, -50%) scale(0.5)";
        setTimeout(() => {
          cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
        }, 100);
      });
    </script>
  </body>
</html>
```

### How to test this "Flex":

1. **Copy the code** into a file named `index.html`.
2. **Open it** in Chrome, Safari, or Edge.
3. **Experience:**

- **The Intro:** Watch the text slide up and the shoe "pop" into existence with an elastic bounce.
- **The Cursor:** Notice the little green dot is fast, but the ring follows loosely behind. When you hover over the logo or cards, the ring expands and blurs.
- **The Hero Interaction:** Move your mouse around the main shoe—it rotates in 3D (Parallax).
- **The Cards:** Hover over the shoe cards in the grid. They tilt physically based on where your mouse is, and the shoe inside pops out (Z-axis translation).
- **The Marquee:** The yellow text bar runs infinitely to give kinetic energy.

### Why this design works:

- **Typography:** The font "Syncopate" is wide and futuristic.
- **Color Palette:** "Neon Lime" on "Deep Black" is the ultimate high-performance sports aesthetic.
- **Micro-interactions:** The cursor click squeeze and the magnetic button fill add the "cool" factor you requested.

# .

make a website that's a landing page for a shoe brand with slick animations and shoe style layouts with very cool clicks, and the design of the website should jsut be flexing with animations!

---

Love it 😄 — a **pure flex landing page**.

Below is a **fully working single-page shoe brand landing site** with:

- Big bold **hero flex**
- **Slick animations** (hover, entrance, click explosions)
- **Modern shoe card layouts**
- Click interactions that _feel expensive_
- Clean, futuristic vibe

No framework needed. Just **HTML + CSS + JS + GSAP** (for buttery animations).

---

## 🖤 Concept

**Brand:** _FLEXRUN™_
**Style:** Minimal, bold, motion-heavy
**Vibe:** Nike × Apple × streetwear flex

---

## 🔥 FEATURES

✔ Animated hero text
✔ Floating shoe cards
✔ Click = ripple + scale + glow
✔ Scroll-trigger animations
✔ Cursor-feel interactions
✔ Easy to customize colors / shoes

---

## 📁 Just drop this into an `index.html` and open it

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FLEXRUN™</title>

    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
      }

      body {
        background: radial-gradient(circle at top, #111, #000);
        color: white;
        overflow-x: hidden;
      }

      /* HERO */
      .hero {
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8vw;
      }

      .hero-text h1 {
        font-size: 5vw;
        line-height: 1;
        font-weight: 800;
      }

      .hero-text span {
        color: #00ffae;
      }

      .hero-text p {
        margin-top: 20px;
        max-width: 400px;
        opacity: 0.7;
      }

      .cta {
        margin-top: 40px;
        padding: 15px 40px;
        border: none;
        background: #00ffae;
        color: black;
        font-weight: bold;
        cursor: pointer;
        border-radius: 50px;
        transition: 0.3s;
      }

      .cta:hover {
        transform: scale(1.1);
        box-shadow: 0 0 40px #00ffae;
      }

      /* SHOE HERO */
      .hero-shoe {
        width: 40vw;
        animation: float 4s ease-in-out infinite;
      }

      @keyframes float {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-30px);
        }
        100% {
          transform: translateY(0);
        }
      }

      /* SECTION */
      .section {
        padding: 150px 8vw;
      }

      .section h2 {
        font-size: 3vw;
        margin-bottom: 60px;
      }

      /* CARDS */
      .cards {
        display: flex;
        gap: 40px;
      }

      .card {
        background: linear-gradient(145deg, #111, #1a1a1a);
        border-radius: 25px;
        padding: 30px;
        width: 300px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: 0.3s;
      }

      .card::after {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(
          circle,
          rgba(0, 255, 174, 0.3),
          transparent
        );
        opacity: 0;
        transition: 0.3s;
      }

      .card:hover::after {
        opacity: 1;
      }

      .card:hover {
        transform: scale(1.08) rotate(-2deg);
        box-shadow: 0 20px 60px rgba(0, 255, 174, 0.3);
      }

      .card img {
        width: 100%;
        transform: rotate(-15deg);
      }

      .card h3 {
        margin-top: 20px;
      }

      .card p {
        opacity: 0.6;
        font-size: 14px;
      }

      /* CLICK EFFECT */
      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        background: rgba(0, 255, 174, 0.5);
        animation: ripple 0.6s linear;
      }

      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }

      /* FOOTER */
      footer {
        text-align: center;
        padding: 60px;
        opacity: 0.4;
      }
    </style>
  </head>

  <body>
    <section class="hero">
      <div class="hero-text">
        <h1>RUN.<br /><span>FLEX.</span><br />DOMINATE.</h1>
        <p>
          Engineered sneakers built for motion, style, and absolute flex energy.
        </p>
        <button class="cta">Shop Now</button>
      </div>
      <img class="hero-shoe" src="https://i.imgur.com/jQ6pPjU.png" alt="Shoe" />
    </section>

    <section class="section">
      <h2>🔥 Signature Drops</h2>
      <div class="cards">
        <div class="card">
          <img src="https://i.imgur.com/jQ6pPjU.png" />
          <h3>Flex Air</h3>
          <p>Ultra-light. Ultra-clean.</p>
        </div>
        <div class="card">
          <img src="https://i.imgur.com/8Km9tLL.png" />
          <h3>Velocity X</h3>
          <p>Built for speed & flex.</p>
        </div>
        <div class="card">
          <img src="https://i.imgur.com/TH4kZ6F.png" />
          <h3>Shadow Run</h3>
          <p>Dark. Silent. Powerful.</p>
        </div>
      </div>
    </section>

    <footer>© 2025 FLEXRUN™ — Built to Flex</footer>

    <script>
      gsap.from(".hero-text h1", { y: 100, opacity: 0, duration: 1 });
      gsap.from(".hero-text p", { y: 50, opacity: 0, delay: 0.3 });
      gsap.from(".cta", { scale: 0, delay: 0.6 });

      gsap.utils.toArray(".card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: card,
          y: 100,
          opacity: 0,
          duration: 0.8,
        });

        card.addEventListener("click", (e) => {
          const ripple = document.createElement("span");
          ripple.classList.add("ripple");
          ripple.style.left = e.offsetX + "px";
          ripple.style.top = e.offsetY + "px";
          card.appendChild(ripple);
          setTimeout(() => ripple.remove(), 600);
        });
      });
    </script>
  </body>
</html>
```

---

## 🚀 Want Next-Level?

I can:

- Add **cursor-follower effects**
- Turn this into **React / Next.js**
- Add **3D shoe rotation**
- Make it **mobile-first luxury**
- Replace images with **your brand assets**
- Add **sound-based click feedback**

Just tell me the next flex 💥

# .

make a website that's a landing page for a shoe brand with slick animations and shoe style layouts with very cool clicks, and the design of the website should jsut be flexing with animations!

---

## Slick Shoe Brand Landing — complete single-file website

Nice — I built a complete, **single-file** landing page for a shoe brand that "flexes with animations": hero with animated gradient & parallax, product/style grid with 3D tilt and click-to-open product detail, polished micro-interactions (ripples on click, subtle float/shine, animated CTA), and responsive layout. Copy the code below into a file named `index.html` and open it in your browser.

---

#### Notes

- Images use Unsplash keyword placeholders — replace those `src` URLs with your actual product photos for production.
- All animations are CSS + vanilla JS (no external libraries) so it should run offline.
- Accessible-ish (aria labels, keyboard-close modal).
- I added comments in the code so you can tweak colors, timings, and behavior easily.

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>FLEX & CO — Shoes that flex</title>
    <meta
      name="description"
      content="FLEX & CO — premium street shoes. Slick animations, immersive product layouts, and playful micro-interactions."
    />

    <!-- Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap"
      rel="stylesheet"
    />

    <style>
      :root {
        --bg: #0b0f14;
        --card: #0f1720;
        --muted: #9aa4af;
        --accent1: #ff4d8d;
        --accent2: #7c5cff;
        --glass: rgba(255, 255, 255, 0.06);
        --glass-2: rgba(255, 255, 255, 0.03);
        --radius: 16px;
        --maxw: 1200px;
        --ease: cubic-bezier(0.22, 0.9, 0.35, 1);
      }

      * {
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
      }
      body {
        margin: 0;
        font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
          Arial;
        background: radial-gradient(
            1200px 600px at 10% 10%,
            rgba(124, 92, 255, 0.12),
            transparent 8%
          ), radial-gradient(
            1000px 400px at 90% 90%,
            rgba(255, 77, 141, 0.06),
            transparent 10%
          ), var(--bg);
        color: #e8eef6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 40px 20px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      .wrap {
        width: 100%;
        max-width: var(--maxw);
        display: flex;
        flex-direction: column;
        gap: 36px;
      }

      /* NAV */
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 14px;
        cursor: default;
      }
      .logo {
        width: 56px;
        height: 56px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--accent1), var(--accent2));
        display: grid;
        place-items: center;
        transform: rotate(-10deg);
        box-shadow: 0 6px 28px rgba(124, 92, 255, 0.16), 0 2px 8px rgba(0, 0, 0, 0.6);
        font-weight: 800;
        font-size: 18px;
        color: white;
      }
      .brand h1 {
        margin: 0;
        font-size: 18px;
        letter-spacing: 0.6px;
      }
      nav {
        display: flex;
        gap: 18px;
        align-items: center;
      }
      .nav-btn {
        background: transparent;
        border: 0;
        color: var(--muted);
        font-weight: 600;
        padding: 8px 12px;
        border-radius: 10px;
        transition: all 0.28s var(--ease);
        cursor: pointer;
      }
      .nav-btn:hover {
        color: white;
        transform: translateY(-3px) scale(1.02);
      }
      .cta {
        padding: 10px 16px;
        border-radius: 12px;
        background: linear-gradient(90deg, var(--accent1), var(--accent2));
        border: none;
        color: white;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 6px 30px rgba(124, 92, 255, 0.14);
        transition: transform 0.18s var(--ease);
      }
      .cta:active {
        transform: translateY(1px) scale(0.99);
      }

      /* HERO */
      .hero {
        position: relative;
        display: flex;
        gap: 28px;
        align-items: center;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.02),
          transparent 30%
        );
        padding: 36px;
        border-radius: var(--radius);
        box-shadow: 0 8px 40px rgba(3, 6, 10, 0.6);
        overflow: hidden;
      }
      .hero-left {
        flex: 1;
        min-width: 280px;
      }
      .hero-right {
        flex: 1.15;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 320px;
        position: relative;
      }

      .eyebrow {
        color: var(--accent2);
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 13px;
      }
      .hero h2 {
        margin: 12px 0 8px;
        font-size: 40px;
        line-height: 1.02;
      }
      .hero p {
        color: var(--muted);
        margin: 0 0 18px;
        max-width: 540px;
      }
      .hero-actions {
        display: flex;
        gap: 12px;
        align-items: center;
      }
      .secondary {
        padding: 10px 14px;
        border-radius: 12px;
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.06);
        color: var(--muted);
        cursor: pointer;
      }

      /* animated shoe float */
      .shoe-stage {
        width: 420px;
        height: 320px;
        border-radius: 22px;
        background: linear-gradient(135deg, var(--glass), transparent);
        display: grid;
        place-items: center;
        backdrop-filter: blur(6px);
        border: 1px solid rgba(255, 255, 255, 0.03);
        transform-style: preserve-3d;
      }
      .shoe {
        width: 320px;
        height: 200px;
        background-size: cover;
        background-position: center;
        border-radius: 20px;
        transform-origin: center;
        transition: transform 0.28s var(--ease), box-shadow 0.28s var(--ease);
        box-shadow: 0 18px 40px rgba(2, 6, 12, 0.6), 0 3px 8px rgba(0, 0, 0, 0.5);
        will-change: transform;
        position: relative;
      }
      .shoe::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -26px;
        width: 260px;
        height: 74px;
        border-radius: 50%;
        filter: blur(18px);
        opacity: 0.5;
        background: radial-gradient(
          closest-side,
          rgba(0, 0, 0, 0.5),
          transparent 60%
        );
      }

      /* product grid */
      .styles {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
      }
      .card {
        background: linear-gradient(
          180deg,
          var(--card),
          rgba(255, 255, 255, 0.02)
        );
        border-radius: 14px;
        padding: 14px;
        position: relative;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.03);
        transition: transform 0.28s var(--ease), box-shadow 0.28s var(--ease);
        cursor: pointer;
      }
      .card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 22px 50px rgba(2, 6, 12, 0.6);
      }
      .card-top {
        display: flex;
        gap: 12px;
        align-items: center;
      }
      .mini-thumb {
        width: 92px;
        height: 72px;
        border-radius: 12px;
        background-size: cover;
        background-position: center;
        flex-shrink: 0;
      }
      .tag {
        padding: 6px 10px;
        border-radius: 999px;
        background: linear-gradient(90deg, var(--accent2), var(--accent1));
        font-weight: 700;
        font-size: 12px;
      }
      .card h3 {
        margin: 8px 0 4px;
      }
      .price {
        color: var(--muted);
        font-weight: 700;
      }

      /* interactive ripple for buttons and cards */
      .ripple {
        position: relative;
        overflow: hidden;
      }
      .ripple .ink {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        background: rgba(255, 255, 255, 0.12);
        animation: ripple 0.6s var(--ease) forwards;
        pointer-events: none;
      }
      @keyframes ripple {
        to {
          transform: scale(3);
          opacity: 0;
        }
      }

      /* modal product detail */
      .modal {
        position: fixed;
        inset: 0;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 60;
        background: linear-gradient(
          180deg,
          rgba(2, 6, 10, 0.6),
          rgba(2, 6, 10, 0.85)
        );
        padding: 40px;
      }
      .modal.open {
        display: flex;
      }
      .modal-card {
        width: min(980px, 96%);
        background: linear-gradient(180deg, #0d1116, #0b0f14);
        border-radius: 18px;
        padding: 26px;
        display: flex;
        gap: 20px;
        box-shadow: 0 28px 80px rgba(2, 6, 12, 0.7);
        transform-origin: center;
        animation: pop 0.36s cubic-bezier(0.2, 0.95, 0.2, 1);
      }
      @keyframes pop {
        from {
          transform: scale(0.96);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }

      .modal-left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .modal-right {
        flex: 1.1;
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .specs {
        color: var(--muted);
        font-size: 14px;
      }
      .close-x {
        background: transparent;
        border: 0;
        color: var(--muted);
        font-weight: 700;
        cursor: pointer;
        align-self: flex-start;
      }

      /* footer small */
      footer {
        color: var(--muted);
        font-size: 13px;
        display: flex;
        justify-content: center;
        padding: 18px 0;
      }

      /* responsive */
      @media (max-width: 980px) {
        .hero {
          flex-direction: column;
          align-items: stretch;
        }
        .styles {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 600px) {
        .styles {
          grid-template-columns: 1fr;
        }
        .hero h2 {
          font-size: 28px;
        }
        header {
          gap: 12px;
        }
        .logo {
          width: 48px;
          height: 48px;
        }
      }

      /* extra flexing micro-animations */
      .glow-line {
        height: 6px;
        border-radius: 999px;
        margin-top: 10px;
        background: linear-gradient(
          90deg,
          rgba(255, 77, 141, 0.3),
          transparent,
          var(--accent2)
        );
        background-size: 200% 100%;
        animation: shift 3.6s linear infinite;
      }
      @keyframes shift {
        0% {
          background-position: 0% 0%;
        }
        50% {
          background-position: 100% 0%;
        }
        100% {
          background-position: 0% 0%;
        }
      }

      /* tilt transform helper */
      .tilt {
        transition: transform 0.15s linear;
      }
    </style>
  </head>
  <body>
    <div class="wrap" id="wrap">
      <header>
        <div class="brand" aria-hidden="false">
          <div class="logo">FLEX</div>
          <div>
            <h1>FLEX & CO</h1>
            <div style="font-size:12px;color:var(--muted);margin-top:4px">
              Street-grade performance — flex culture
            </div>
          </div>
        </div>

        <nav aria-label="Primary navigation">
          <button class="nav-btn">Shop</button>
          <button class="nav-btn">Collections</button>
          <button class="nav-btn">Stories</button>
          <button class="cta ripple" id="shopNow">Shop Now</button>
        </nav>
      </header>

      <section class="hero" aria-labelledby="hero-heading">
        <div class="hero-left">
          <div class="eyebrow">NEW DROP</div>
          <h2 id="hero-heading">
            Flex your stride —
            <span
              style="background:linear-gradient(90deg,var(--accent1),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent"
              >Sleek. Loud. Built to move.</span
            >
          </h2>
          <p>
            Limited-run performance sneakers inspired by street culture and
            crafted for day-to-day domination. Lightweight foam, grippy outsole,
            and an aesthetic that flexes — everywhere.
          </p>
          <div class="hero-actions">
            <button class="cta ripple" id="primaryBuy">Buy the Drop</button>
            <button class="secondary ripple">Explore Styles</button>
          </div>

          <div class="glow-line" style="width:76%;"></div>
        </div>

        <div class="hero-right">
          <div class="shoe-stage" id="shoeStage" aria-hidden="true">
            <!-- main featured shoe: background image set by JS for parallax / change -->
            <div
              class="shoe tilt"
              id="mainShoe"
              tabindex="0"
              style="background-image:url('https://source.unsplash.com/800x600/?sneakers,shoe,stylish');"
            ></div>
          </div>
        </div>
      </section>

      <section aria-label="Featured styles">
        <h3 style="margin:0 0 10px">Styles — curated picks</h3>
        <p style="margin:0 0 18px;color:var(--muted)">
          Click any style to open a preview with slick interactions.
        </p>

        <div class="styles" id="stylesGrid">
          <!-- cards are built in HTML for clarity but JS will add ripple and click behavior -->
          <article
            class="card ripple"
            data-title="Aero Runner"
            data-price="$149"
            data-img="https://source.unsplash.com/800x600/?sneakers,white"
            tabindex="0"
            role="button"
            aria-pressed="false"
          >
            <div class="card-top">
              <div
                class="mini-thumb"
                style="background-image:url('https://source.unsplash.com/500x400/?sneakers,white')"
              ></div>
              <div style="flex:1">
                <div
                  style="display:flex;justify-content:space-between;align-items:center"
                >
                  <span class="tag">LIGHTWEIGHT</span>
                  <span style="font-size:13px;color:var(--muted)">⭐ 4.9</span>
                </div>
                <h3>Aero Runner</h3>
                <div class="price">$149</div>
              </div>
            </div>
          </article>

          <article
            class="card ripple"
            data-title="Night Flex"
            data-price="$169"
            data-img="https://source.unsplash.com/800x600/?sneakers,black"
            tabindex="0"
            role="button"
            aria-pressed="false"
          >
            <div class="card-top">
              <div
                class="mini-thumb"
                style="background-image:url('https://source.unsplash.com/500x400/?sneakers,black')"
              ></div>
              <div style="flex:1">
                <div
                  style="display:flex;justify-content:space-between;align-items:center"
                >
                  <span class="tag">GLOW</span>
                  <span style="font-size:13px;color:var(--muted)">⭐ 4.8</span>
                </div>
                <h3>Night Flex</h3>
                <div class="price">$169</div>
              </div>
            </div>
          </article>

          <article
            class="card ripple"
            data-title="Trail Pro"
            data-price="$159"
            data-img="https://source.unsplash.com/800x600/?sneakers,trail"
            tabindex="0"
            role="button"
            aria-pressed="false"
          >
            <div class="card-top">
              <div
                class="mini-thumb"
                style="background-image:url('https://source.unsplash.com/500x400/?sneakers,trail')"
              ></div>
              <div style="flex:1">
                <div
                  style="display:flex;justify-content:space-between;align-items:center"
                >
                  <span class="tag">ALL-TERRAIN</span>
                  <span style="font-size:13px;color:var(--muted)">⭐ 4.7</span>
                </div>
                <h3>Trail Pro</h3>
                <div class="price">$159</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer>© FLEX & CO — Built to flex • Crafted with motion</footer>
    </div>

    <!-- Modal markup -->
    <div
      class="modal"
      id="modal"
      role="dialog"
      aria-modal="true"
      aria-hidden="true"
    >
      <div class="modal-card" role="document" id="modalCard">
        <div class="modal-left">
          <div
            class="shoe tilt"
            id="modalShoe"
            style="width:420px;height:280px;background-image:url('https://source.unsplash.com/900x700/?sneakers');"
          ></div>
        </div>
        <div class="modal-right">
          <button
            class="close-x ripple"
            id="closeModal"
            aria-label="Close product preview"
          >
            ✕
          </button>
          <h2 id="modalTitle">Product Title</h2>
          <div
            style="display:flex;justify-content:space-between;align-items:center"
          >
            <div class="price" id="modalPrice">$0</div>
            <button class="cta ripple" id="modalBuy">Buy Now</button>
          </div>
          <p class="specs" id="modalDesc">
            High-comfort midsole, breathable mesh knit, responsive foam, and
            street-ready traction. Perfect for daily wear and nights out.
          </p>

          <div style="display:flex;gap:8px;margin-top:12px">
            <button class="secondary ripple" id="favBtn">♡ Favorite</button>
            <button class="secondary ripple" id="shareBtn">Share</button>
          </div>

          <div style="margin-top:auto;font-size:13px;color:var(--muted)">
            <strong>Limited stock.</strong> 30-day free returns.
          </div>
        </div>
      </div>
    </div>

    <script>
      // Micro-helpers and interactions
      const wrap = document.getElementById("wrap");
      const mainShoe = document.getElementById("mainShoe");
      const shoeStage = document.getElementById("shoeStage");
      const stylesGrid = document.getElementById("stylesGrid");
      const modal = document.getElementById("modal");
      const modalTitle = document.getElementById("modalTitle");
      const modalPrice = document.getElementById("modalPrice");
      const modalShoe = document.getElementById("modalShoe");
      const modalDesc = document.getElementById("modalDesc");
      const closeModalBtn = document.getElementById("closeModal");

      // Add ripple effect to elements with .ripple on pointerdown
      document.querySelectorAll(".ripple").forEach((elem) => {
        elem.addEventListener("pointerdown", (e) => {
          const rect = elem.getBoundingClientRect();
          const ink = document.createElement("span");
          ink.className = "ink";
          const size = Math.max(rect.width, rect.height) * 1.2;
          ink.style.width = ink.style.height = size + "px";
          ink.style.left = e.clientX - rect.left - size / 2 + "px";
          ink.style.top = e.clientY - rect.top - size / 2 + "px";
          elem.appendChild(ink);
          ink.addEventListener("animationend", () => ink.remove());
        });
      });

      // Give main shoe a slow float animation using JS (subtle)
      (function floatMainShoe() {
        let t = 0;
        function frame() {
          t += 0.02;
          const y = Math.sin(t) * 6;
          const r = Math.sin(t / 2) * 3;
          mainShoe.style.transform = `translateY(${y}px) rotate(${r}deg)`;
          requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      })();

      // 3D tilt effect for elements with class .tilt
      function addTilt(el) {
        el.addEventListener("pointermove", (e) => {
          const rect = el.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          const rx = (py - 0.5) * -10; // rotateX
          const ry = (px - 0.5) * 12; // rotateY
          el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
        });
        el.addEventListener("pointerleave", () => {
          el.style.transform = "";
        });
      }
      document.querySelectorAll(".tilt").forEach(addTilt);

      // Card click opens modal with that product info
      stylesGrid.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", (e) => {
          // focus management
          const title = card.dataset.title || "Shoe";
          const price = card.dataset.price || "$0";
          const img =
            card.dataset.img ||
            card
              .querySelector(".mini-thumb")
              ?.style.backgroundImage?.slice(5, -2) ||
            mainShoe.style.backgroundImage.slice(5, -2);

          openModal({ title, price, img });
          // small pop / flex effect on the mainShoe (add temporary scale)
          mainShoe.animate(
            [
              { transform: "scale(1)" },
              { transform: "scale(1.04)" },
              { transform: "scale(1)" },
            ],
            { duration: 380, easing: "ease-out" }
          );
        });

        // keyboard accessibility: open with Enter or Space
        card.addEventListener("keydown", (ev) => {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            card.click();
          }
        });
      });

      function openModal({ title, price, img }) {
        modalTitle.textContent = title;
        modalPrice.textContent = price;
        modalShoe.style.backgroundImage = `url('${img}')`;
        modalShoe.style.transform = "translateY(-6px) rotate(-6deg)";
        modalDesc.textContent =
          "High-comfort midsole, breathable knit, and tuned traction. Clean silhouette, loud attitude — fits true to size.";
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        // animate shoe entrance
        modalShoe.animate(
          [
            { transform: "translateY(40px) rotate(0deg)", opacity: 0 },
            { transform: "translateY(0px) rotate(-6deg)", opacity: 1 },
          ],
          { duration: 420, easing: "cubic-bezier(.2,.9,.2,1)" }
        );
        // trap focus (basic)
        closeModalBtn.focus();
      }

      function closeModal() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }

      closeModalBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
      // keyboard ESC
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open"))
          closeModal();
      });

      // parallax mouse effect on shoeStage: change background position for subtle parallax
      shoeStage.addEventListener("pointermove", (e) => {
        const rect = shoeStage.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        mainShoe.style.backgroundPosition = `${30 + px * 40}% ${20 + py * 30}%`;
      });
      shoeStage.addEventListener(
        "pointerleave",
        () => (mainShoe.style.backgroundPosition = "50% 50%")
      );

      // Quick demo: "Shop Now" and "Buy the Drop" swap featured shoe visuals
      const gallery = [
        "https://source.unsplash.com/900x700/?sneakers,red",
        "https://source.unsplash.com/900x700/?sneakers,blue",
        "https://source.unsplash.com/900x700/?sneakers,white",
        "https://source.unsplash.com/900x700/?sneakers,black",
      ];
      let gidx = 0;
      document.getElementById("shopNow").addEventListener("click", () => {
        gidx = (gidx + 1) % gallery.length;
        mainShoe.style.backgroundImage = `url('${gallery[gidx]}')`;
        // quick "flex" animation
        mainShoe.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(1.06)" },
            { transform: "scale(1)" },
          ],
          { duration: 420, easing: "cubic-bezier(.22,.9,.35,1)" }
        );
      });
      document.getElementById("primaryBuy").addEventListener("click", () => {
        // simulate quick add and open modal for the currently featured
        openModal({
          title: "Featured Drop",
          price: "$179",
          img: gallery[gidx] || gallery[0],
        });
      });

      // small interaction: favorite toggles text with a tiny pulse
      document.getElementById("favBtn").addEventListener("click", (e) => {
        const btn = e.currentTarget;
        btn.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" },
          ],
          { duration: 260, easing: "ease-out" }
        );
        btn.textContent = btn.textContent.includes("♡")
          ? "♥ Favorited"
          : "♡ Favorite";
      });

      // share button uses Web Share API if available (graceful fallback)
      document
        .getElementById("shareBtn")
        .addEventListener("click", async () => {
          const title = modalTitle.textContent;
          const text = `Check this out: ${title} — ${modalPrice.textContent}`;
          const url = location.href;
          try {
            if (navigator.share) {
              await navigator.share({ title, text, url });
            } else {
              await navigator.clipboard.writeText(`${title} - ${url}`);
              alert("Link copied to clipboard!");
            }
          } catch (err) {
            console.warn("share failed", err);
          }
        });

      // small accessible behavior: when modal opens, prevent page scroll
      const observer = new MutationObserver(() => {
        if (modal.classList.contains("open"))
          document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
      });
      observer.observe(modal, { attributes: true, attributeFilter: ["class"] });

      // tiny flair: click anywhere in hero to create animated particle burst
      hero = document.querySelector(".hero");
      hero.addEventListener("click", (e) => {
        const bursts = 8;
        for (let i = 0; i < bursts; i++) {
          const dot = document.createElement("div");
          dot.style.position = "absolute";
          dot.style.left = e.clientX - hero.getBoundingClientRect().left + "px";
          dot.style.top = e.clientY - hero.getBoundingClientRect().top + "px";
          dot.style.width = dot.style.height = 6 + Math.random() * 8 + "px";
          dot.style.borderRadius = "50%";
          dot.style.pointerEvents = "none";
          dot.style.background =
            Math.random() > 0.5
              ? "linear-gradient(90deg,var(--accent1),var(--accent2))"
              : "rgba(255,255,255,0.06)";
          dot.style.transform = `translate(-50%,-50%)`;
          dot.style.zIndex = 40;
          hero.appendChild(dot);
          const dx = (Math.random() - 0.5) * 340;
          const dy = (Math.random() - 0.5) * 180 - 40;
          dot.animate(
            [
              { transform: `translate(-50%,-50%) scale(1)`, opacity: 1 },
              {
                transform: `translate(${dx}px,${dy}px) scale(0.2)`,
                opacity: 0,
              },
            ],
            {
              duration: 800 + Math.random() * 400,
              easing: "cubic-bezier(.2,.9,.2,1)",
            }
          );
          setTimeout(() => dot.remove(), 1200);
        }
      });

      // small: rotate logo slowly on page load to flex
      document
        .querySelector(".logo")
        .animate(
          [
            { transform: "rotate(-10deg)" },
            { transform: "rotate(-3deg)" },
            { transform: "rotate(-8deg)" },
          ],
          {
            duration: 4200,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
          }
        );
    </script>
  </body>
</html>
```

---

If you'd like, I can:

- swap the placeholder images for your actual product photos and produce a downloadable `.zip` with images + HTML,
- add a multi-image carousel inside the modal,
- convert this into a small React or Vue component set,
- or produce a minified production-ready bundle + basic build instructions.

Which of those sounds good? (Or paste your product images and I'll insert them directly.)
