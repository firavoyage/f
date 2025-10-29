compare stix two math and xits math

---

Of course. This is an excellent question for anyone working with technical or scientific documents. Both STIX Two Math and XITS Math are high-quality, serif font families with extensive mathematical support, but they have different histories and design goals.

Here’s a detailed comparison.

### At a Glance: Quick Comparison Table

| Feature                    | STIX Two Math                                                                      | XITS Math                                                                        |
| :------------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **Origin & History**       | The official, modern successor to the original STIX project.                       | A fork of the **original** STIX fonts, with additional spacing and glyph tweaks. |
| **Design Philosophy**      | A comprehensive, modern, and independent typeface family.                          | Essentially a "patched" and enhanced version of the original STIX v1.x.          |
| **Character & Aesthetics** | Slightly lighter, more consistent, and refined. A clean, formal, and modern serif. | Slightly darker and "thicker." Has a classic, robust, and authoritative feel.    |
| **OpenType Math Support**  | Excellent and very modern. Often a reference implementation for new features.      | Very good, but based on an older implementation. May lack some newer features.   |
| **Integration**            | Designed to work seamlessly with the STIX Two Text font.                           | Designed to work seamlessly with the XITS (text) font.                           |
| **License**                | Open Font License (OFL)                                                            | Open Font License (OFL)                                                          |

---

### Detailed Breakdown

#### 1. History and Lineage

- **STIX Two Math** is the direct and official successor to the original STIX (Scientific and Technical Information Exchange) project. The STIX Two project was started to address limitations in the original, with a completely new development process, expanded character set (including Unicode's "Math Alphanumeric" symbols), and a more modern design. **Think of it as "STIX 2.0."**
- **XITS Math** is a fork of the _original_ STIX fonts (v1.1.2). Its name stands for "XITS Is The Same as STIX, only different." It was created primarily by Khaled Hosny to improve the spacing and metrics for use with the **XeTeX** and **LuaTeX** engines, which have native support for system fonts and OpenType. It incorporates some bug fixes and tweaks but is fundamentally based on the older design.

#### 2. Design and Aesthetics

This is the most noticeable difference when viewing them side-by-side.

- **STIX Two Math** has a more refined and slightly lighter weight overall. The letterforms feel a bit more open and consistent. The design is crisp and formal, aiming for high legibility in both text and complex mathematical formulae.
- **XITS Math** retains the slightly heavier, more robust feel of the original STIX fonts. Some users describe it as feeling a bit "darker" on the page. This can give it a more traditional, authoritative, and "printed" look that some prefer.

**Visual Example:**
If you compare the integral symbol (∫) in both fonts, you might find STIX Two's to be slightly more geometrically balanced, while XITS's is the classic, familiar form from the original STIX.

#### 3. Technical Features (OpenType Math)

Both fonts have exceptional support for mathematical typesetting, but STIX Two is more modern under the hood.

- **STIX Two Math** implements a very complete and contemporary OpenType math table. It's often used as a benchmark for testing new math typesetting features in engines like LuaTeX. It's less likely to have quirky spacing or alignment issues with very complex constructs.
- **XITS Math** also has excellent support and will handle 99% of all mathematical content flawlessly. However, since it's based on an older codebase, it might very occasionally show its age with esoteric symbols or the most recent LaTeX packages that rely on newer OpenType features.

#### 4. Usage and Availability

- **In LaTeX:** Both are extremely easy to use with the `unicode-math` package, which is the modern standard for math typesetting in LuaLaTeX and XeLaTeX.
  - For STIX Two: `\setmathfont{STIX Two Math}`
  - For XITS: `\setmathfont{XITS Math}`
- **Availability:** Both are included in modern TeX distributions (TeX Live, MiKTeX). STIX Two is also becoming more common as a system font.

---

### Which One Should You Choose?

The choice often comes down to personal preference and specific needs.

**Choose STIX Two Math if:**

- You are starting a **new project** and want the most modern, well-supported, and actively maintained mathematical font.
- You value a **slightly lighter and more refined** aesthetic.
- You are using very new features of the `unicode-math` package or need future-proofing.
- You want the "official" and canonical version of the STIX fonts.

**Choose XITS Math if:**

- You have an **existing document** that was typeset with the original STIX fonts and you want a seamless visual match while gaining improved spacing for XeTeX/LuaTeX.
- You prefer the **slightly darker, more robust, and classic look** of the original STIX.
- You are a traditionalist who liked the original STIX but just wanted its spacing issues fixed.

### Summary

Think of it in software terms:

- **XITS Math** is like a well-maintained, community-supported fork of a beloved but aging software (STIX v1).
- **STIX Two Math** is the official, from-the-ground-up rewrite and modern successor.

For most new projects, **STIX Two Math is the recommended choice** due to its modern design, active development, and comprehensive feature set. However, you cannot go wrong with either, as both are among the best open-source math fonts available. The best way to decide is to compile a page of your typical document (with both text and complex math) using both fonts and see which one pleases your eye more.
