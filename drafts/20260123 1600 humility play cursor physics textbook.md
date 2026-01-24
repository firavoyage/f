# High school physics textbook
_Exported on 1/23/2026 at 16:35:55 GMT+8 from Cursor (2.3.41)_

---

**User**

create a high school physics textbook

---

**Cursor**

Got it. I’ll create a clean, printable/open-source-style high school physics textbook in this workspace: a structured table of contents, chapter files in Markdown (with diagrams-as-text, worked examples, problems, and labs), plus a build-friendly README so you can turn it into PDF/HTML later.

I’ll start by laying down a solid textbook skeleton: a clear TOC, style/notation conventions, and “front matter” (units, constants, math tools). Then I’ll draft the main chapters with worked examples and problem sets, followed by labs and an answer-key scaffold.

```markdown
# High School Physics (Open Textbook)

An editable high school physics textbook written in Markdown.

## How this repo is organized

- `book/` contains the textbook content (Markdown).
- `book/chapters/` contains chapter files.

## Build (optional)

If you want a PDF, you can use Pandoc.

### PDF via Pandoc (example)

1. Install pandoc and a LaTeX engine (e.g. `texlive-full` on Linux).
2. From the repo root, run:

```bash
pandoc book/index.md -o physics.pdf
```

## License

Unless you replace this section, the content is provided under **CC BY 4.0**.


```

```markdown
# High School Physics

**An open, student-friendly textbook** with worked examples, practice problems, and labs.

## How to use this book

- Read the lesson sections and **work the examples by hand**.
- Do the **Check Your Understanding** questions immediately.
- Save the **Mixed Practice** set for review and test prep.
- In labs, prioritize **safety, careful measurement, and clear graphs**.

## Table of Contents

### Front Matter

- [0. Mathematical Tools for Physics](chapters/00-math-tools.md)
- [0. Units, Conversions, and Significant Figures](chapters/00-units-sigfigs.md)
- [0. Measurement, Uncertainty, and Graphing](chapters/00-uncertainty-graphing.md)
- [Constants, Symbols, and Useful Data](chapters/00-constants-data.md)

### Part I — Motion and Forces (Mechanics)

- [1. Physics and Modeling](chapters/01-modeling.md)
- [2. One-Dimensional Kinematics](chapters/02-1d-kinematics.md)
- [3. Two-Dimensional Motion (Vectors, Projectiles)](chapters/03-2d-motion.md)
- [4. Forces and Newton’s Laws](chapters/04-newton-laws.md)
- [5. Applications of Newton’s Laws (Friction, Inclines)](chapters/05-applications-forces.md)
- [6. Work, Energy, and Power](chapters/06-work-energy.md)
- [7. Momentum and Collisions](chapters/07-momentum.md)
- [8. Circular Motion and Gravitation](chapters/08-circular-gravitation.md)

### Part II — Fluids, Thermal Physics, and Waves

- [9. Fluids](chapters/09-fluids.md)
- [10. Thermal Physics](chapters/10-thermal.md)
- [11. Waves and Sound](chapters/11-waves-sound.md)

### Part III — Electricity, Magnetism, and Light

- [12. Electrostatics](chapters/12-electrostatics.md)
- [13. Circuits](chapters/13-circuits.md)
- [14. Magnetism and Electromagnetic Induction](chapters/14-magnetism-induction.md)
- [15. Light and Optics](chapters/15-optics.md)

### Part IV — Modern Physics (Optional / Extension)

- [16. Atomic Physics](chapters/16-atomic.md)
- [17. Nuclear Physics](chapters/17-nuclear.md)
- [18. Special Relativity (Intro)](chapters/18-relativity.md)

### Appendices

- [A. Problem-Solving Strategy](chapters/A-problem-solving.md)
- [B. Graphing and Linear Fits](chapters/B-linear-fits.md)
- [C. Answer Key (Student Edition)](chapters/C-answer-key.md)
- [D. Teacher Materials (restricted / optional)](chapters/D-teacher-materials.md)


```

Nice—skeleton is in place now: a single entrypoint (`book/index.md`) with a full year-long sequence and appendices. Next I’ll add the “front matter” chapters (math tools, units/sig figs, uncertainty/graphing, constants) so the rest of the book can reference consistent conventions.

```markdown
# 0. Mathematical Tools for Physics

Physics uses simple math ideas over and over: **algebra**, **graphs**, **trig**, and **vectors**. This chapter is a quick reference.

## 0.1 Powers of ten and scientific notation

Scientific notation writes numbers as:

\[
a \times 10^n \quad \text{where } 1 \le a < 10 \text{ and } n \text{ is an integer.}
\]

Examples:

- \(3{,}600 = 3.6 \times 10^3\)
- \(0.0042 = 4.2 \times 10^{-3}\)

## 0.2 Rearranging formulas

Goal: isolate the unknown and keep the equation balanced.

Example:

Given \(v = v_0 + at\), solve for \(t\):

\[
t = \frac{v - v_0}{a}
\]

## 0.3 Graphing basics (slope and intercept)

For a straight line:

\[
y = mx + b
\]

- **Slope \(m\)**: how much \(y\) changes per change in \(x\).
- **Intercept \(b\)**: value of \(y\) when \(x=0\).

Units matter: if \(y\) is in meters and \(x\) in seconds, slope has units m/s.

## 0.4 Trigonometry for physics

Right triangle with hypotenuse \(r\):

- \(\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}\)
- \(\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}\)
- \(\tan\theta = \frac{\text{opposite}}{\text{adjacent}}\)

Common moves:

- Resolve a vector: \(A_x = A\cos\theta\), \(A_y = A\sin\theta\) (if \(\theta\) is measured from the +x axis).

## 0.5 Vectors (magnitude + direction)

A vector has **magnitude** (size) and **direction**.

Examples: displacement, velocity, acceleration, force.

A scalar has only magnitude: time, mass, temperature, energy.

### Components

If \(\vec{A} = \langle A_x, A_y \rangle\), then:

\[
|\vec{A}| = \sqrt{A_x^2 + A_y^2}
\]

Direction (angle from +x):

\[
\theta = \tan^{-1}\left(\frac{A_y}{A_x}\right)
\]

### Tip: signs carry meaning

Negative components often mean “left” or “down” depending on your chosen axes. Always draw a quick sketch.

## Check Your Understanding

1. Write \(72{,}000\) in scientific notation.
2. A line goes through \((0, 2)\) and \((4, 10)\). Find its slope and write the equation.
3. A vector has components \(A_x=3\) and \(A_y=4\). Find its magnitude.


```

```markdown
# 0. Units, Conversions, and Significant Figures

## 0.1 SI base units (quick list)

- **Length**: meter (m)
- **Mass**: kilogram (kg)
- **Time**: second (s)
- **Electric current**: ampere (A)
- **Temperature**: kelvin (K)
- **Amount of substance**: mole (mol)
- **Luminous intensity**: candela (cd)

Many useful units are derived, e.g. \(1\ \text{N} = 1\ \text{kg}\cdot\text{m}/\text{s}^2\).

## 0.2 Unit conversions (factor-label method)

Strategy: multiply by conversion factors equal to 1.

Example: convert \(72\ \text{km/h}\) to m/s.

\[
72\ \frac{\text{km}}{\text{h}}
\times \frac{1000\ \text{m}}{1\ \text{km}}
\times \frac{1\ \text{h}}{3600\ \text{s}}
= 20\ \text{m/s}
\]

## 0.3 Dimensional analysis (sanity checks)

If an equation is correct, units match on both sides.

Example:

- \(x = vt\) has units \( \text{m} = (\text{m/s})(\text{s})\), which works.

Dimensional checks catch many algebra mistakes.

## 0.4 Significant figures (sig figs)

Measurements have limited precision, so answers should reflect that precision.

### Counting sig figs (basic rules)

- Non-zero digits are significant: 347 has 3.
- Zeros between non-zero digits are significant: 1005 has 4.
- Leading zeros are not significant: 0.0042 has 2.
- Trailing zeros after a decimal are significant: 2.30 has 3.

### Rounding in calculations

- **Multiply/divide**: answer has the **same number of sig figs** as the factor with the fewest sig figs.
- **Add/subtract**: answer has the **same decimal place** as the least precise term.

## Check Your Understanding

1. Convert \(3.5\ \text{cm}\) to meters.
2. Convert \(15\ \text{m/s}\) to km/h.
3. Evaluate \( (2.4)(3.12) \) and round to correct sig figs.
4. Evaluate \(12.3 + 4.56\) and round correctly.


```

```markdown
# 0. Measurement, Uncertainty, and Graphing

Physics is built on measurement. A good result is not just a number, but a number with a **unit** and a reasonable **uncertainty**.

## 0.1 Accuracy vs precision

- **Accuracy**: closeness to the true value.
- **Precision**: repeatability (measurements cluster tightly).

You can be precise but inaccurate if there is a systematic error.

## 0.2 Uncertainty (simple approach)

For many classroom tools:

- A meterstick with 1 mm markings: uncertainty \(\pm 1\ \text{mm}\) (or sometimes \(\pm 0.5\ \text{mm}\), depending on convention).
- A digital timer reading 0.01 s: uncertainty often \(\pm 0.01\ \text{s}\), plus human reaction time if started by hand.

Write results like:

\[
L = (0.532 \pm 0.001)\ \text{m}
\]

## 0.3 Percent error (when a reference value exists)

\[
\%\ \text{error} = \left|\frac{\text{measured} - \text{accepted}}{\text{accepted}}\right| \times 100\%
\]

## 0.4 Graphing for physics

A good physics graph:

- **Title**: what is being tested.
- **Axes labeled with quantities and units** (e.g., \(t\) (s), \(x\) (m)).
- **Reasonable scale**: uses most of the grid.
- **Best-fit line/curve**: not connect-the-dots unless instructed.

### Slope has meaning

If you graph \(x\) vs \(t\), slope is velocity:

\[
\text{slope} = \frac{\Delta x}{\Delta t} = v
\]

### Area has meaning (later)

Area under a \(v\) vs \(t\) graph is displacement.

## Check Your Understanding

1. Explain the difference between accuracy and precision with a real-world example.
2. A student measures the same length five times and gets 12.1 cm, 12.1 cm, 12.2 cm, 12.1 cm, 12.2 cm. Is this precise? Accurate?
3. A graph of velocity vs time is a straight line with slope \(2.0\ \text{m/s}^2\). What does the slope represent?


```

```markdown
# Constants, Symbols, and Useful Data

Use this page as a reference. Your teacher may provide a different “equation sheet”; always follow course expectations.

## Common constants (SI units)

- **Gravitational acceleration near Earth**: \(g \approx 9.80\ \text{m/s}^2\)
- **Speed of light**: \(c \approx 3.00 \times 10^8\ \text{m/s}\)
- **Elementary charge**: \(e \approx 1.60 \times 10^{-19}\ \text{C}\)
- **Coulomb’s constant**: \(k \approx 8.99 \times 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2\)
- **Gravitational constant**: \(G \approx 6.67 \times 10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2\)

## Metric prefixes (selected)

- pico (p): \(10^{-12}\)
- nano (n): \(10^{-9}\)
- micro (\(\mu\)): \(10^{-6}\)
- milli (m): \(10^{-3}\)
- centi (c): \(10^{-2}\)
- kilo (k): \(10^{3}\)
- mega (M): \(10^{6}\)
- giga (G): \(10^{9}\)

## Common symbols (typical meanings)

These can vary by course and context.

- \(x\): position (m)
- \(\Delta x\): displacement (m)
- \(t\): time (s)
- \(v\): velocity (m/s)
- \(a\): acceleration (m/s\(^2\))
- \(F\): force (N)
- \(m\): mass (kg)
- \(W\): work (J)
- \(E\): energy (J)
- \(P\): power (W)
- \(p\): momentum (kg·m/s)
- \(q\): charge (C)
- \(V\): electric potential (V)
- \(I\): current (A)
- \(R\): resistance (Ω)


```

Aha—front matter is now real content (math tools, units/sig figs, uncertainty/graphing, constants), which lets every later chapter reuse the same conventions and problem-solving language. Next I’ll start drafting the mechanics sequence (kinematics → Newton’s laws → energy → momentum), each with worked examples plus end-of-chapter practice.

```markdown
# 1. Physics and Modeling

Physics is the study of patterns in nature using **models**. A model is a simplified description of a situation that is good enough to predict and explain.

## 1.1 What makes physics “physics”?

- **Observation**: what happens?
- **Quantification**: how much, how fast, how strong?
- **Modeling**: what simple rules describe it?
- **Prediction**: what should happen next?
- **Testing**: does the prediction match data?

## 1.2 The modeling cycle

1. **Define the system**: what objects are included?
2. **Choose assumptions**: ignore air resistance? treat an object as a point?
3. **Represent**: diagrams, graphs, equations.
4. **Solve**: compute unknowns.
5. **Evaluate**: units, reasonableness, compare with data.

## 1.3 Systems and interactions

A **system** is the object(s) you are focusing on.

Examples:

- A rolling cart (system) and the track (environment).
- A falling ball (system) and Earth (environment).

Interactions often come as forces (contact forces, gravity, friction) or energy transfers.

## 1.4 Representations you’ll use all year

- **Sketch**: a quick picture with labels.
- **Motion diagram**: positions at equal time steps.
- **Free-body diagram**: forces on an object.
- **Graph**: how a quantity changes.
- **Equation**: compact relationship between variables.

## Worked Example: Sanity-checking a claim

Claim: “A car accelerates from 0 to 30 m/s in 2 seconds.”

Compute acceleration:

\[
a = \frac{\Delta v}{\Delta t} = \frac{30\ \text{m/s}}{2\ \text{s}} = 15\ \text{m/s}^2
\]

Compare to \(g \approx 9.8\ \text{m/s}^2\). That’s about \(1.5g\), which is very high for a typical car. The claim might be false, or it might describe a race car.

## Check Your Understanding

1. Define “model” in your own words and give one example from everyday life.
2. Why do physicists sometimes ignore air resistance?
3. For a thrown ball, what could be the system? What could be the environment?

## Mixed Practice

1. A student says, “My measurement is 2.3, but I’m not sure of the unit.” Explain why the unit is essential.
2. Describe one assumption that makes a physics problem easier, and one risk of that assumption.


```

```markdown
# 2. One-Dimensional Kinematics

Kinematics describes motion using position, velocity, and acceleration—**without** asking what causes the motion.

## 2.1 Position and displacement

- **Position \(x\)**: location along a line (m).
- **Displacement \(\Delta x\)**: change in position:

\[
\Delta x = x_f - x_i
\]

Displacement can be negative; it depends on your coordinate choice.

## 2.2 Velocity

Average velocity:

\[
v_{\text{avg}} = \frac{\Delta x}{\Delta t}
\]

Instantaneous velocity is the slope of the position-time graph.

## 2.3 Acceleration

Average acceleration:

\[
a_{\text{avg}} = \frac{\Delta v}{\Delta t}
\]

Acceleration is the slope of the velocity-time graph.

## 2.4 Motion graphs

### Position vs time (\(x\) vs \(t\))

- Slope = velocity.
- Curvature indicates changing velocity.

### Velocity vs time (\(v\) vs \(t\))

- Slope = acceleration.
- Area under the curve = displacement.

## 2.5 Constant-acceleration equations

These apply when acceleration is constant (common in many problems).

\[
v = v_0 + at
\]
\[
x = x_0 + v_0 t + \frac{1}{2}at^2
\]
\[
v^2 = v_0^2 + 2a(x - x_0)
\]
\[
\Delta x = \left(\frac{v+v_0}{2}\right)t
\]

## Worked Example 1: Braking distance

A car traveling \(25\ \text{m/s}\) brakes with constant acceleration \(-5.0\ \text{m/s}^2\). How far does it travel before stopping?

Given: \(v_0=25\ \text{m/s}\), \(v=0\), \(a=-5.0\ \text{m/s}^2\).

Use \(v^2 = v_0^2 + 2a\Delta x\):

\[
0 = (25)^2 + 2(-5.0)\Delta x
\Rightarrow \Delta x = \frac{625}{10} = 62.5\ \text{m}
\]

## Worked Example 2: Free fall (no air resistance)

A ball is dropped from rest. How fast is it moving after \(1.5\ \text{s}\)?

Given \(v_0=0\), \(a=g=9.80\ \text{m/s}^2\), \(t=1.5\ \text{s}\):

\[
v = v_0 + at = 0 + (9.80)(1.5) = 14.7\ \text{m/s}
\]

Direction: downward (depending on your sign convention).

## Common mistakes

- Mixing up **speed** (scalar) and **velocity** (vector/sign).
- Using constant-acceleration equations when acceleration is not constant.
- Forgetting that \(\Delta x\) can be negative.
- Plugging in \(g=9.8\) without thinking about sign.

## Check Your Understanding

1. A runner goes from \(x=10\ \text{m}\) to \(x=4\ \text{m}\) in 3 s. Find displacement and average velocity.
2. A car’s velocity increases from 5 m/s to 17 m/s in 4 s. Find average acceleration.
3. Sketch a \(v\) vs \(t\) graph for an object moving with constant negative acceleration.

## Mixed Practice

1. A train starts from rest and accelerates at \(0.60\ \text{m/s}^2\) for 20 s. Find its final velocity and displacement.
2. A rock is thrown straight up at \(18\ \text{m/s}\). How long until it reaches the top? (Ignore air resistance.)
3. A cyclist slows from 12 m/s to 4 m/s over 30 m. Find the acceleration.
4. Challenge: A car travels 200 m in 10 s with constant acceleration. If its initial speed is 10 m/s, find its acceleration.


```

```markdown
# 3. Two-Dimensional Motion (Vectors, Projectiles)

Many real motions occur in 2D. The key idea: **analyze x and y components separately**.

## 3.1 Vector components

For a vector of magnitude \(A\) at angle \(\theta\) above +x:

\[
A_x = A\cos\theta,\quad A_y = A\sin\theta
\]

## 3.2 Relative velocity (idea)

Velocity depends on the reference frame.

Example: If you walk at 1.5 m/s on a train moving 10 m/s, your ground speed could be 11.5 m/s forward or 8.5 m/s if walking backward.

## 3.3 Projectile motion (no air resistance)

Assumptions:

- Only acceleration is gravity.
- Horizontal acceleration \(a_x = 0\).
- Vertical acceleration \(a_y = -g\) (if up is positive).

Key results:

- \(v_x\) is constant.
- \(v_y\) changes linearly with time.
- The path is a parabola.

## 3.4 Solving projectile problems (recipe)

1. Choose axes (often +x forward, +y up).
2. Split initial velocity into components.
3. Use 1D kinematics in x and y separately.
4. Connect with the common time \(t\).

## Worked Example: Range on level ground

A ball is launched at \(v_0=20\ \text{m/s}\) at \(35^\circ\) above horizontal from level ground. Find time of flight and range (ignore air resistance).

Components:

\[
v_{0x} = 20\cos35^\circ = 16.4\ \text{m/s}
\]
\[
v_{0y} = 20\sin35^\circ = 11.5\ \text{m/s}
\]

Time of flight for level launch/landing:

\[
t = \frac{2v_{0y}}{g} = \frac{2(11.5)}{9.8} \approx 2.35\ \text{s}
\]

Range:

\[
R = v_{0x} t \approx (16.4)(2.35) \approx 38.5\ \text{m}
\]

## Check Your Understanding

1. A vector has magnitude 50 N at \(30^\circ\) above +x. Find \(F_x\) and \(F_y\).
2. A projectile is launched horizontally from a cliff. Which component of velocity changes? Which stays constant?
3. Why can you solve x-motion and y-motion separately in projectile motion?

## Mixed Practice

1. A soccer ball is kicked at 22 m/s at \(40^\circ\). Find its time of flight and range on level ground (ignore air resistance).
2. A rock is thrown horizontally at 12 m/s from a 20 m high cliff. How long until it hits the ground, and how far does it travel horizontally?
3. A projectile has \(v_{0x}=15\ \text{m/s}\) and \(v_{0y}=10\ \text{m/s}\). Find its maximum height and time to peak.


```

```markdown
# 4. Forces and Newton’s Laws

Dynamics explains **why** motion changes: forces cause acceleration.

## 4.1 Newton’s Laws (statements)

### Newton’s First Law (inertia)

If the net external force on an object is zero, its velocity stays constant.

### Newton’s Second Law

\[
\sum \vec{F} = m\vec{a}
\]

### Newton’s Third Law

For every interaction, forces come in pairs: if A pushes on B, then B pushes on A with equal magnitude and opposite direction.

Important: action–reaction forces act on **different objects**.

## 4.2 Free-body diagrams (FBDs)

Steps:

1. Choose the object (system).
2. Draw the object as a dot/box.
3. Draw all external forces as arrows from the object.
4. Label forces (and directions).
5. Choose axes and write component equations.

## 4.3 Common forces

- **Weight**: \(\vec{W} = m\vec{g}\) (downward)
- **Normal force**: \(\vec{N}\) (perpendicular to surface)
- **Tension**: \(\vec{T}\) (along a rope/string)
- **Friction**: opposes relative motion (see next chapter)

## 4.4 Equilibrium and constant velocity

Equilibrium means:

\[
\sum \vec{F} = 0 \Rightarrow \vec{a} = 0
\]

An object can be at rest **or** moving at constant velocity and still be in equilibrium.

## Worked Example 1: Hanging mass (equilibrium)

A 2.0 kg mass hangs at rest from a rope. Find the tension.

Forces: tension up, weight down. Net force is zero:

\[
T - mg = 0 \Rightarrow T = mg = (2.0)(9.8) = 19.6\ \text{N}
\]

## Worked Example 2: Horizontal push

A 5.0 kg box on a frictionless floor is pushed with 12 N horizontally. Find the acceleration.

\[
\sum F_x = ma_x \Rightarrow a = \frac{12}{5.0} = 2.4\ \text{m/s}^2
\]

## Common mistakes

- Putting both action–reaction forces on the same FBD.
- Forgetting that \(N\) is not always equal to \(mg\) (e.g., on an incline or when accelerating).
- Confusing mass (kg) with weight (N).

## Check Your Understanding

1. State Newton’s three laws in your own words.
2. A student stands on a scale in an elevator. What does the scale measure?
3. Identify the Newton’s third-law pair for “Earth pulls on you by gravity.”

## Mixed Practice

1. A 1200 kg car accelerates at \(2.0\ \text{m/s}^2\). What net force acts on it?
2. Two students pull on a rope in opposite directions with 200 N and 250 N. What is the tension at each end? (Assume a light rope and static pulls.)
3. A 0.50 kg cart experiences a net force of 0.80 N. Find its acceleration.


```

```markdown
# 5. Applications of Newton’s Laws (Friction, Inclines)

Many “real” force problems involve friction and tilted surfaces. The physics stays the same: draw a good free-body diagram and apply \(\sum \vec{F} = m\vec{a}\).

## 5.1 Friction

Friction is a contact force that opposes relative motion (or the tendency to move) between surfaces.

### Static friction

Static friction adjusts up to a maximum value:

\[
f_s \le \mu_s N
\]

### Kinetic friction

Kinetic (sliding) friction has magnitude:

\[
f_k = \mu_k N
\]

Static friction is usually larger than kinetic friction for the same surfaces: \(\mu_s > \mu_k\).

## 5.2 Inclines

Choose axes parallel/perpendicular to the surface.

For a mass \(m\) on an incline at angle \(\theta\):

- Perpendicular component of weight: \(mg\cos\theta\)
- Parallel component of weight (down the incline): \(mg\sin\theta\)

If there is no acceleration perpendicular to the surface, then:

\[
N = mg\cos\theta
\]

## Worked Example 1: Sliding with friction

A 10 kg crate slides on a level floor. The coefficient of kinetic friction is \(\mu_k=0.20\). Find the friction force magnitude and acceleration if no other horizontal forces act.

Normal force: \(N=mg=(10)(9.8)=98\ \text{N}\).

Friction: \(f_k=\mu_k N = (0.20)(98)=19.6\ \text{N}\).

Net force is opposite motion, so:

\[
a = \frac{F_{\text{net}}}{m} = \frac{-19.6}{10} = -1.96\ \text{m/s}^2
\]

## Worked Example 2: Block on an incline (no friction)

A 2.0 kg block slides down a \(30^\circ\) frictionless incline. Find its acceleration.

Along the incline:

\[
\sum F_{\parallel} = mg\sin\theta = ma
\Rightarrow a = g\sin\theta = 9.8\sin30^\circ = 4.9\ \text{m/s}^2
\]

## Check Your Understanding

1. Explain the difference between static and kinetic friction.
2. A 5 kg block rests on a \(20^\circ\) incline and does not move. What force prevents it from sliding?
3. For a block on a frictionless incline, why does the mass cancel out when solving for acceleration?

## Mixed Practice

1. A 15 kg sled is pulled on level ground with a 60 N horizontal force. If \(\mu_k = 0.10\), find the acceleration.
2. A 3.0 kg block is pushed up a \(25^\circ\) incline with a force of 20 N parallel to the incline. If \(\mu_k=0.15\), find the acceleration direction and magnitude.
3. A 1.5 kg block sits on a level table. What is the maximum horizontal force that can be applied without moving it if \(\mu_s=0.40\)?


```

```markdown
# 6. Work, Energy, and Power

Energy methods can simplify problems, especially when forces are complicated but energy transfers are clear.

## 6.1 Work

Work is energy transferred by a force acting through a displacement.

For a constant force parallel to displacement:

\[
W = Fd
\]

In general (constant force at angle \(\theta\)):

\[
W = Fd\cos\theta
\]

Unit: joule (J), where \(1\ \text{J} = 1\ \text{N}\cdot\text{m}\).

## 6.2 Kinetic energy

\[
K = \frac{1}{2}mv^2
\]

## 6.3 Gravitational potential energy (near Earth)

Change in gravitational potential energy:

\[
\Delta U_g = mg\Delta y
\]

## 6.4 Conservation of mechanical energy (basic form)

If only conservative forces (like gravity and ideal springs) do work:

\[
K_i + U_i = K_f + U_f
\]

With nonconservative work (like friction):

\[
K_i + U_i + W_{\text{nc}} = K_f + U_f
\]

## 6.5 Power

Power is the rate of doing work:

\[
P = \frac{W}{t}
\]

Unit: watt (W), where \(1\ \text{W} = 1\ \text{J/s}\).

## Worked Example 1: Ramp and speed

A 1.0 kg cart starts from rest and rolls down a frictionless ramp, dropping 0.80 m in height. Find its speed at the bottom.

Energy conservation:

\[
mgh = \frac{1}{2}mv^2 \Rightarrow v = \sqrt{2gh} = \sqrt{2(9.8)(0.80)} \approx 4.0\ \text{m/s}
\]

## Worked Example 2: Work by friction

A 2.0 kg block slides 3.0 m on a level surface. Kinetic friction is 4.0 N. Find the work done by friction.

Friction opposes motion, so \(\theta=180^\circ\):

\[
W_f = Fd\cos180^\circ = (4.0)(3.0)(-1) = -12\ \text{J}
\]

Negative work means mechanical energy decreased.

## Check Your Understanding

1. A 10 N force acts over 2.0 m in the same direction. How much work is done?
2. A 3.0 kg object moves at 4.0 m/s. Find its kinetic energy.
3. When is mechanical energy conserved?

## Mixed Practice

1. A 0.50 kg ball is thrown upward at 12 m/s. Ignoring air resistance, how high does it rise?
2. A 1200 kg car speeds up from 10 m/s to 20 m/s. Find the change in kinetic energy.
3. A student climbs a 4.0 m staircase in 5.0 s. If the student’s mass is 60 kg, what average power is required just to increase gravitational potential energy?
4. A 5.0 kg crate is pushed 8.0 m with a 40 N force at \(30^\circ\) above horizontal. Find the work done by the applied force.


```

```markdown
# 7. Momentum and Collisions

Momentum connects force and motion, and it is especially useful for collisions and explosions.

## 7.1 Momentum and impulse

Momentum:

\[
\vec{p} = m\vec{v}
\]

Impulse (force applied over time) changes momentum:

\[
\vec{J} = \Delta \vec{p} = \vec{F}_{\text{avg}}\Delta t
\]

## 7.2 Conservation of momentum

For a system with no net external impulse:

\[
\vec{p}_i = \vec{p}_f
\]

Momentum is a vector; directions/signs matter.

## 7.3 Types of collisions

- **Elastic**: kinetic energy is conserved (rare in everyday macroscopic collisions).
- **Inelastic**: kinetic energy is not conserved.
- **Perfectly inelastic**: objects stick together (maximum kinetic energy loss consistent with momentum conservation).

## Worked Example 1: Perfectly inelastic collision

A 0.20 kg cart moving at 3.0 m/s hits and sticks to a 0.30 kg cart at rest. Find their final speed.

Momentum conservation:

\[
m_1 v_1 + m_2 v_2 = (m_1+m_2)v_f
\]

\[
(0.20)(3.0) + (0.30)(0) = (0.50)v_f
\Rightarrow v_f = 1.2\ \text{m/s}
\]

## Worked Example 2: Impulse

A 0.15 kg baseball changes velocity from 30 m/s toward a bat to 40 m/s away from the bat. If this takes 0.005 s, find the average force.

Choose away-from-bat as positive. Then \(v_i=-30\), \(v_f=+40\):

\[
\Delta p = m(v_f-v_i) = 0.15(40 - (-30)) = 10.5\ \text{kg·m/s}
\]

\[
F_{\text{avg}} = \frac{\Delta p}{\Delta t} = \frac{10.5}{0.005} = 2100\ \text{N}
\]

## Check Your Understanding

1. What is momentum? How is it different from kinetic energy?
2. Why does a longer collision time usually mean a smaller average force (for the same momentum change)?
3. In a collision, is momentum always conserved? Is kinetic energy always conserved?

## Mixed Practice

1. A 1000 kg car moving at 12 m/s rear-ends a 900 kg car moving at 8 m/s. If they stick together, find the final speed.
2. A 0.050 kg hockey puck is hit from rest to 20 m/s in 0.010 s. Find the average force.
3. A 2.0 kg object experiences a constant 6.0 N force for 4.0 s. If it starts from rest, what is its final momentum?


```

```markdown
# 8. Circular Motion and Gravitation

Circular motion involves acceleration even at constant speed, because velocity direction changes.

## 8.1 Uniform circular motion

For an object moving in a circle of radius \(r\) at speed \(v\):

\[
a_c = \frac{v^2}{r}
\]

Direction: toward the center (centripetal).

Centripetal force is not a new kind of force; it is the **net inward force**:

\[
\sum F_{\text{in}} = m\frac{v^2}{r}
\]

## 8.2 Gravitation (Newton’s law)

The gravitational force between two masses:

\[
F_g = G\frac{m_1 m_2}{r^2}
\]

Near Earth’s surface, weight is \(W=mg\), which is a special case.

## 8.3 Orbital motion (idea)

For a circular orbit, gravity provides centripetal force:

\[
G\frac{Mm}{r^2} = m\frac{v^2}{r}
\Rightarrow v = \sqrt{\frac{GM}{r}}
\]

## Worked Example 1: Centripetal acceleration

A car goes around a curve of radius 50 m at 14 m/s. Find centripetal acceleration.

\[
a_c = \frac{v^2}{r} = \frac{14^2}{50} = 3.92\ \text{m/s}^2
\]

## Worked Example 2: Gravitational force

Find the gravitational force between two 5.0 kg masses separated by 0.20 m.

\[
F_g = G\frac{m_1 m_2}{r^2}
= (6.67\times 10^{-11})\frac{(5.0)(5.0)}{(0.20)^2}
\approx 4.2\times 10^{-8}\ \text{N}
\]

## Check Your Understanding

1. Why is there acceleration in uniform circular motion even if speed is constant?
2. What provides the centripetal force for a satellite in circular orbit?
3. If speed doubles in a circle of the same radius, how does \(a_c\) change?

## Mixed Practice

1. A 0.20 kg ball on a string moves in a circle of radius 0.80 m at 3.0 m/s. Find the required centripetal force.
2. A roller coaster loop has radius 12 m. What centripetal acceleration occurs at 18 m/s?
3. Two masses 2.0 kg and 3.0 kg are 0.50 m apart. Find the gravitational force between them.


```

```markdown
# 9. Fluids

Fluids (liquids and gases) can flow and take the shape of their container.

## 9.1 Density

\[
\rho = \frac{m}{V}
\]

Unit: kg/m\(^3\) (or g/cm\(^3\)).

## 9.2 Pressure

Pressure is force per area:

\[
P = \frac{F}{A}
\]

In a fluid at rest, pressure increases with depth:

\[
P = P_0 + \rho g h
\]

## 9.3 Buoyancy (Archimedes’ principle)

The buoyant force equals the weight of displaced fluid:

\[
F_B = \rho_{\text{fluid}} g V_{\text{displaced}}
\]

An object floats when buoyant force equals weight.

## Worked Example: Pressure at depth

Find the pressure 5.0 m below the surface of freshwater (\(\rho = 1000\ \text{kg/m}^3\)), ignoring air pressure changes.

\[
\Delta P = \rho g h = (1000)(9.8)(5.0) = 4.9\times 10^4\ \text{Pa}
\]

## Check Your Understanding

1. Why do dams tend to be thicker near the bottom?
2. A block floats. What can you say about its average density compared to the fluid?
3. Convert \(1.0\ \text{atm}\) to pascals if \(1\ \text{atm} \approx 1.01\times 10^5\ \text{Pa}\).

## Mixed Practice

1. A 0.50 m\(^3\) object has mass 200 kg. Find its density.
2. A person stands on one foot with contact area \(0.020\ \text{m}^2\). If their weight is 600 N, find pressure on the floor.
3. A submerged object displaces \(0.030\ \text{m}^3\) of water. Find the buoyant force.


```

```markdown
# 10. Thermal Physics

Thermal physics connects temperature, energy, and heat transfer.

## 10.1 Temperature vs thermal energy

- **Temperature** measures the average kinetic energy per particle.
- **Thermal energy** depends on temperature and how much matter you have.

## 10.2 Heat and specific heat

Heat \(Q\) is energy transferred due to temperature difference.

For a temperature change (no phase change):

\[
Q = mc\Delta T
\]

- \(m\): mass
- \(c\): specific heat capacity
- \(\Delta T\): temperature change

## 10.3 Phase change (latent heat)

During melting/boiling, temperature can stay constant while energy transfers:

\[
Q = mL
\]

## 10.4 Heat transfer mechanisms

- **Conduction**: particle-to-particle contact (common in solids).
- **Convection**: bulk fluid motion (liquids/gases).
- **Radiation**: electromagnetic waves (no medium needed).

## Worked Example: Heating water

How much energy is needed to raise 0.50 kg of water from \(20^\circ\text{C}\) to \(80^\circ\text{C}\)? Use \(c = 4180\ \text{J/(kg·}^\circ\text{C)}\).

\[
Q = mc\Delta T = (0.50)(4180)(60) \approx 1.25\times 10^5\ \text{J}
\]

## Check Your Understanding

1. What’s the difference between heat and temperature?
2. Why does metal feel colder than wood at the same room temperature?
3. Which heat transfer mechanism dominates the warming of Earth by the Sun?

## Mixed Practice

1. How much heat is needed to warm 2.0 kg of aluminum by \(15^\circ\text{C}\) if \(c=900\ \text{J/(kg·}^\circ\text{C)}\)?
2. A 0.20 kg sample absorbs \(6.0\times 10^4\) J during melting. If it is melting at constant temperature, find latent heat \(L\).
3. Explain why convection currents form in a heated pot of water.


```

```markdown
# 11. Waves and Sound

Waves transfer energy and information without transporting matter overall.

## 11.1 Wave vocabulary

- **Amplitude \(A\)**: maximum displacement (related to energy).
- **Wavelength \(\lambda\)**: distance between repeating points.
- **Period \(T\)**: time for one cycle.
- **Frequency \(f\)**: cycles per second (Hz), \(f=\frac{1}{T}\).
- **Wave speed \(v\)**:

\[
v = f\lambda
\]

## 11.2 Transverse vs longitudinal waves

- **Transverse**: oscillation is perpendicular to travel (rope waves, light).
- **Longitudinal**: oscillation is parallel to travel (sound in air).

## 11.3 Sound basics

Sound is a longitudinal wave that needs a medium.

- Higher **frequency** → higher pitch.
- Larger **amplitude** → louder sound (generally).

## 11.4 Interference (idea)

When waves overlap, displacements add (superposition).

- **Constructive interference**: amplitudes reinforce.
- **Destructive interference**: amplitudes reduce/cancel.

## Worked Example: Wave speed

A wave has frequency 5.0 Hz and wavelength 2.4 m. Find its speed.

\[
v = f\lambda = (5.0)(2.4) = 12\ \text{m/s}
\]

## Check Your Understanding

1. If frequency doubles while wave speed stays constant, what happens to wavelength?
2. Why can’t you hear sound in space?
3. What is superposition?

## Mixed Practice

1. A sound wave in air has wavelength 0.85 m and frequency 400 Hz. Find its speed.
2. A wave travels at 3.0 m/s with wavelength 0.50 m. Find frequency and period.
3. Explain the difference between transverse and longitudinal waves with one example each.


```

```markdown
# 12. Electrostatics

Electrostatics studies electric charge at rest and the forces it produces.

## 12.1 Charge

- Charge comes in two types: positive and negative.
- Like charges repel; unlike charges attract.
- Charge is conserved.

Unit: coulomb (C).

## 12.2 Coulomb’s law

For two point charges:

\[
F = k\frac{|q_1 q_2|}{r^2}
\]

Direction: along the line connecting charges; sign determines attraction/repulsion.

## 12.3 Electric field (idea)

Electric field is force per charge:

\[
\vec{E} = \frac{\vec{F}}{q}
\]

For a point charge:

\[
E = k\frac{|q|}{r^2}
\]

## Worked Example: Force between charges

Two charges \(q_1 = +2.0\ \mu\text{C}\) and \(q_2 = -3.0\ \mu\text{C}\) are 0.50 m apart. Find the magnitude of the force.

\[
F = k\frac{|q_1 q_2|}{r^2}
= (8.99\times 10^9)\frac{(2.0\times 10^{-6})(3.0\times 10^{-6})}{(0.50)^2}
\approx 0.216\ \text{N}
\]

Attractive (opposite signs).

## Check Your Understanding

1. Why do you use absolute value in Coulomb’s law for magnitude?
2. What does electric field represent physically?
3. If distance doubles, how does force change?

## Mixed Practice

1. Find the electric force between \(+1.0\ \mu\text{C}\) and \(+1.0\ \mu\text{C}\) separated by 0.20 m.
2. A charge creates an electric field of 400 N/C at a point. What force would it exert on a \(2.0\times 10^{-6}\) C test charge?
3. Compare electric and gravitational forces: how are their equations similar?


```

```markdown
# 13. Circuits

Circuits describe the flow of electric charge through components like batteries and resistors.

## 13.1 Current, voltage, resistance

- **Current**: \(I = \frac{\Delta q}{\Delta t}\) (A)
- **Voltage**: electric potential difference \(V\) (V)
- **Resistance**: opposition to current \(R\) (Ω)

## 13.2 Ohm’s law (ideal resistor)

\[
V = IR
\]

## 13.3 Series and parallel (resistors)

### Series

- Same current through each.
- Equivalent resistance:

\[
R_{\text{eq}} = R_1 + R_2 + \cdots
\]

### Parallel

- Same voltage across each branch.
- Equivalent resistance:

\[
\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots
\]

## 13.4 Electric power

\[
P = IV
\]

Using Ohm’s law:

\[
P = I^2R = \frac{V^2}{R}
\]

## Worked Example: Two resistors in series

A 12 V battery is connected to two resistors in series: 4 Ω and 8 Ω. Find current and power dissipated in the 8 Ω resistor.

\[
R_{\text{eq}} = 4 + 8 = 12\ \Omega
\]

\[
I = \frac{V}{R_{\text{eq}}} = \frac{12}{12} = 1.0\ \text{A}
\]

Voltage across 8 Ω:

\[
V_8 = IR = (1.0)(8) = 8\ \text{V}
\]

Power in 8 Ω:

\[
P_8 = IV_8 = (1.0)(8) = 8\ \text{W}
\]

## Check Your Understanding

1. In a series circuit, which is the same for each resistor: current or voltage?
2. In a parallel circuit, which is the same for each branch: current or voltage?
3. A device uses 60 W on a 120 V outlet. What current does it draw?

## Mixed Practice

1. A 9 V battery is connected to a 3 Ω resistor. Find current and power.
2. Two resistors 6 Ω and 12 Ω are in parallel across 12 V. Find equivalent resistance and total current.
3. A 5 Ω and 10 Ω resistor are in series with a 15 V supply. Find current and voltage across each resistor.


```

```markdown
# 14. Magnetism and Electromagnetic Induction

Magnetism involves moving charges and magnetic fields.

## 14.1 Magnetic fields

Magnetic field \(\vec{B}\) is measured in tesla (T).

Magnetic field lines:

- go from N to S outside a magnet
- form closed loops (no magnetic monopoles observed)

## 14.2 Force on a moving charge (idea)

For a charge moving in a magnetic field:

\[
F = qvB\sin\theta
\]

Direction is perpendicular to both \(\vec{v}\) and \(\vec{B}\) (often handled with the right-hand rule).

## 14.3 Electromagnetic induction (idea)

Changing magnetic flux can induce an emf (voltage).

Qualitative statement of Faraday’s law:

- A changing magnetic field through a loop induces a voltage around the loop.

Lenz’s law gives direction: induced effects oppose the change that produced them.

## Worked Example: Straight wire in a magnetic field (magnitude)

A wire of length 0.20 m carries 3.0 A perpendicular to a 0.50 T magnetic field. Find force magnitude.

\[
F = ILB\sin\theta = (3.0)(0.20)(0.50)\sin90^\circ = 0.30\ \text{N}
\]

## Check Your Understanding

1. Can a stationary charge feel a magnetic force? Explain.
2. What must happen to induce a voltage in a loop using a magnet?
3. What does Lenz’s law mean in everyday words?

## Mixed Practice

1. A charge \(q=2.0\times 10^{-6}\ \text{C}\) moves at 400 m/s perpendicular to a 0.20 T field. Find magnetic force magnitude.
2. A 5.0 A current runs through a 0.10 m wire segment at \(30^\circ\) to a 0.40 T field. Find force magnitude.
3. Describe one way to increase induced emf in a coil (qualitatively).


```

```markdown
# 15. Light and Optics

Light behaves like a wave in many situations and like a particle (photon) in others. Here we focus on ray optics.

## 15.1 Reflection

Law of reflection:

\[
\theta_i = \theta_r
\]

Angles are measured from the normal (a line perpendicular to the surface).

## 15.2 Refraction (Snell’s law)

When light changes medium, its speed and direction can change.

\[
n_1\sin\theta_1 = n_2\sin\theta_2
\]

If \(n_2 > n_1\), light bends toward the normal.

## 15.3 Lenses (thin lens equation)

\[
\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}
\]

Magnification:

\[
m = \frac{h_i}{h_o} = -\frac{d_i}{d_o}
\]

## Worked Example: Thin lens

A converging lens has focal length 10 cm. An object is placed 30 cm from the lens. Find image distance.

\[
\frac{1}{d_i} = \frac{1}{f} - \frac{1}{d_o} = \frac{1}{10} - \frac{1}{30} = \frac{2}{30} = \frac{1}{15}
\Rightarrow d_i = 15\ \text{cm}
\]

## Check Your Understanding

1. Why are angles in reflection/refraction measured from the normal?
2. What happens to a light ray entering a medium with higher refractive index?
3. In the lens equation, what sign indicates a real vs virtual image? (Depends on sign convention—state the convention you are using.)

## Mixed Practice

1. Light goes from air (\(n\approx 1.00\)) into glass (\(n=1.50\)) at \(30^\circ\) from the normal. Find the refracted angle.
2. A lens with \(f=20\ \text{cm}\) has an object at \(d_o=60\ \text{cm}\). Find \(d_i\) and magnification.
3. Explain total internal reflection qualitatively.


```

```markdown
# 16. Atomic Physics

Atomic physics studies the structure and behavior of atoms.

## 16.1 Basic structure

- **Protons** (+) and **neutrons** (0) are in the nucleus.
- **Electrons** (−) occupy regions around the nucleus.

## 16.2 Spectra (idea)

Atoms emit/absorb light at specific wavelengths, producing line spectra.

This supports the idea that atomic energy levels are quantized.

## 16.3 Photoelectric effect (idea)

Light can eject electrons from a metal if frequency is high enough.

Key idea: light energy comes in quanta (photons), \(E=hf\).

## Check Your Understanding

1. What evidence suggests atoms have quantized energy levels?
2. Why does increasing light intensity not always eject electrons in the photoelectric effect?


```

```markdown
# 17. Nuclear Physics

Nuclear physics studies the nucleus, radioactivity, and nuclear energy.

## 17.1 Isotopes

Isotopes are atoms of the same element with different numbers of neutrons.

## 17.2 Radioactive decay (idea)

Common decay types:

- **Alpha (\(\alpha\))**: helium nucleus emitted.
- **Beta (\(\beta\))**: electron or positron emitted.
- **Gamma (\(\gamma\))**: high-energy photon emitted.

## 17.3 Half-life

Half-life is the time for half of a radioactive sample to decay.

## Check Your Understanding

1. What is an isotope?
2. What does half-life mean?


```

```markdown
# 18. Special Relativity (Intro)

Special relativity applies when objects move near the speed of light.

## 18.1 Postulates (ideas)

1. The laws of physics are the same in all inertial frames.
2. The speed of light in vacuum is the same for all inertial observers.

## 18.2 Consequences (qualitative)

- Time dilation (moving clocks run slow).
- Length contraction (moving objects shorten along direction of motion).
- Relativity of simultaneity (agreement on “same time” depends on frame).

## Check Your Understanding

1. Why don’t you notice relativity in everyday life?
2. What does it mean to say the speed of light is the same for all observers?


```

```markdown
# A. Problem-Solving Strategy

Use this routine consistently.

## A.1 The 5-step method

1. **Sketch and define the system**.
2. **List knowns/unknowns** (with units).
3. **Choose equations** that match the model/assumptions.
4. **Solve algebraically first**, then plug in numbers.
5. **Evaluate**: units, sign, size, and common-sense check.

## A.2 Tips that prevent most mistakes

- Keep symbols until the end.
- Track units on every line.
- Use a clear sign convention (state it).
- If your answer is “weird,” it may be correct—but check assumptions first.


```

```markdown
# B. Graphing and Linear Fits

Many physics relationships look linear after the right graphing choice.

## B.1 Linearizing a relationship (idea)

If a relationship is \(y \propto x^2\), then a plot of \(y\) vs \(x^2\) can be a straight line.

## B.2 Slope meaning

If \(y = mx + b\), then:

- \(m\) is the physical constant/combination represented by the slope.
- \(b\) represents an offset or initial value.

## B.3 Best-fit lines

Draw (or compute) a line that follows the overall trend, not every point. Random scatter is expected.


```

```markdown
# C. Answer Key (Student Edition)

This section is intentionally minimal in the student edition. In many classes, full solutions are provided separately.

## Chapter 0 — Check Your Understanding (selected)

### 0. Mathematical Tools for Physics

1. \(72{,}000 = 7.2\times 10^4\)
2. Slope \(m=\frac{10-2}{4-0}=2\). Equation: \(y=2x+2\).
3. Magnitude \(=\sqrt{3^2+4^2}=5\).

### 0. Units, Conversions, and Significant Figures

1. \(3.5\ \text{cm} = 0.035\ \text{m}\)


```

```markdown
# D. Teacher Materials (Optional)

This chapter is a placeholder for instructor-only resources:

- Full worked solutions
- Rubrics
- Quizzes/tests
- Lab data sets and expected graphs

If you want, tell me:

- your course level (regular / honors / AP-aligned)
- your pacing (semester / year)
- calculator policy and math prerequisites

and I can generate teacher materials consistent with your constraints.


```

```markdown
# Labs

These labs are designed for common classroom equipment. Each lab includes:

- Purpose + key question
- Safety notes
- Materials
- Procedure
- Data table suggestions
- Analysis questions

See individual lab files:

- `lab-01-motion-constant-velocity.md`
- `lab-02-acceleration-cart-ramp.md`
- `lab-03-newtons-second-law.md`


```

```markdown
# Lab 01 — Motion at Constant Velocity

## Question

When an object moves at (approximately) constant velocity, what does a position–time graph look like, and what does its slope represent?

## Safety

- Keep walking paths clear.
- Do not run with equipment.

## Materials

- Meterstick or measuring tape
- Timer (phone stopwatch is ok)
- Masking tape (to mark positions)
- Optional: motion sensor

## Procedure (tape + timer)

1. Mark a straight line with tape at 0 m, 1 m, 2 m, 3 m, 4 m, 5 m.
2. One student walks steadily along the line.
3. A partner records the time when the walker reaches each mark.
4. Repeat for a faster walk (or a slow jog, if allowed).

## Data table (suggested)

| Trial | Position \(x\) (m) | Time \(t\) (s) |
|------:|-------------------:|---------------:|
| 1     | 0.0                |                |
|       | 1.0                |                |
|       | 2.0                |                |
|       | 3.0                |                |
|       | 4.0                |                |
|       | 5.0                |                |

## Analysis

1. Plot \(x\) vs \(t\) for each trial.
2. Draw a best-fit line for each plot.
3. Compute slope for each line. Include units.
4. Interpret the slope physically.

## Conclusion prompts

- Which trial had larger slope? What does that mean?
- How consistent was the “constant velocity” assumption? What evidence supports your claim?


```

```markdown
# Lab 02 — Acceleration on a Ramp

## Question

How does the slope of a velocity–time graph relate to acceleration for a cart rolling down a ramp?

## Safety

- Keep the ramp stable and secured.
- Catch the cart so it doesn’t fall off a table.

## Materials

- Low-friction cart + track or ramp
- Meterstick
- Timer or motion sensor (preferred)
- Books/blocks to raise the ramp

## Procedure (motion sensor preferred)

1. Set the ramp at a small angle.
2. Release the cart from rest.
3. Record velocity vs time (or position vs time).
4. Repeat for a steeper angle.

## Analysis

1. For each angle, plot \(v\) vs \(t\).
2. Determine the best-fit slope of each plot and interpret it as acceleration.
3. Compare accelerations for the two angles. Explain the difference using forces/components.

## Extension (optional)

Measure ramp angle \(\theta\) and compare measured \(a\) to \(g\sin\theta\) (qualitatively or quantitatively).


```

```markdown
# Lab 03 — Testing Newton’s Second Law

## Question

How does acceleration depend on net force and mass?

## Safety

- Keep fingers away from moving cart wheels.
- Ensure hanging masses can’t hit feet if they fall.

## Materials

- Cart and track
- Pulley + string
- Mass hanger + masses
- Meterstick
- Timer or motion sensor

## Setup idea

A cart on a track is connected by a string over a pulley to a hanging mass. The hanging mass provides an approximately constant net force.

## Procedure (high level)

1. Choose a cart mass \(m\) (include added masses).
2. Choose a hanging mass \(m_h\) to provide pulling force.
3. Release from rest and measure acceleration (via motion sensor or timing method).
4. Repeat while changing:
   - net force (change \(m_h\)), keeping total mass roughly constant, or
   - total mass (add mass to cart), keeping force roughly constant.

## Analysis

1. Create a graph of acceleration vs net force for constant mass. Describe the relationship.
2. Create a graph of acceleration vs total mass for constant force. Describe the relationship.
3. Compare to the model \(a=\frac{F_{\text{net}}}{m}\).

## Sources of error (prompt)

Discuss friction, pulley losses, and reaction time (if using manual timing).


```

### What I created
- **Textbook entry point + TOC**: `book/index.md`
- **Front matter (units, sig figs, graphing, constants)**: `book/chapters/00-*.md`
- **Core chapters (mechanics → E&M → optics → modern intro)**: `book/chapters/01-18-*.md`
- **Appendices + answer key + teacher-materials scaffold**: `book/chapters/A-*.md`, `book/chapters/C-answer-key.md`, `book/chapters/D-teacher-materials.md`
- **Labs (3 starter labs + lab index)**: `book/labs/*`
- **Build instructions**: `README.md` (Pandoc example)

### Where to start reading
Open **`book/index.md`**.

