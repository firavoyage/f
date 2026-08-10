# .

```js
// ==UserScript==
// @name         Navigate OGS with HJKL
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Map h/j/k/l to backward/step-forward/step-backward/forward buttons on OGS
// @match        https://online-go.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const keyMap = {
        'h': '.fa-backward',
        'j': '.fa-step-forward',
        'k': '.fa-step-backward',
        'l': '.fa-forward'
    };

    document.addEventListener('keydown', function(e) {
        // Don't hijack keys while typing in inputs/textareas/contenteditable
        const tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

        const selector = keyMap[e.key];
        if (!selector) return;

        const el = document.querySelector(selector);
        if (el) {
            el.click();
            e.preventDefault();
        }
    }, true);
})();
```

# (?) can you fire a keyboard event in js

Yes, you can fire a keyboard event programmatically in JavaScript using the `KeyboardEvent` constructor combined with the `dispatchEvent()` method. [link](https://stackoverflow.com/questions/71050387/how-to-fire-keyboard-events-in-javascript-using-onclick)

### Quick Example

Here is how you can create and trigger a standard `keydown` event for the **Enter** key:

javascript

```
// 1. Select the element you want to target
const inputElement = document.querySelector('#myInput');

// 2. Create the custom keyboard event
const enterEvent = new KeyboardEvent('keydown', {
  key: 'Enter',
  code: 'Enter',
  keyCode: 13,
  bubbles: true, // Allows the event to bubble up the DOM
  cancelable: true
});

// 3. Fire the event
inputElement.dispatchEvent(enterEvent);
```

Use code with caution.

### Key Configurations You Can Pass

When defining a `new KeyboardEvent()`, you can customize the configuration object with several properties: [link](https://community.claris.com/en/s/question/0D5Vy00000A4pG2KAJ/how-to-fire-a-simple-keydown-keyboardevent-in-javascript)

- `key`: The string value of the key (e.g., `'a'`, `'ArrowUp'`, `'Enter'`).
- `code`: The physical key on the keyboard (e.g., `'KeyA'`, `'Digit1'`).
- `ctrlKey` / `shiftKey` / `altKey`: Set to `true` to simulate modifier keys (e.g., `ctrlKey: true` for Ctrl+Key).
- `bubbles`: Set to `true` if you want the event to trigger listeners on parent elements. [link](https://stackoverflow.com/questions/71050387/how-to-fire-keyboard-events-in-javascript-using-onclick)

### Crucial Limitation: It Will Not Type Text

A very common pitfall to keep in mind is that **synthetic events do not mimic native UI behaviors**. Firing a fake `keydown` event on an input field will successfully trigger any JavaScript event listeners listening for that key, but **it will not actually insert the text character into the input field**. [link](https://stackoverflow.com/questions/67527954/is-it-possible-to-type-text-by-triggering-keypress-events-via-javascript)

Browsers block this by design for security reasons (to prevent malicious scripts from taking over forms). The event's `isTrusted` property will be set to `false`, alerting the browser that it didn't come from a real physical device. [link](https://www.reddit.com/r/learnjavascript/comments/orlqn9/how%5Fto%5Fsimulate%5Fa%5Fkeypress%5Fusing%5Fjs/)

### The Solution for Simulating Text Input

If your actual goal is to put text inside an input box and trigger the associated application logic (like form validation or a React state change), you should change the value directly and fire an `input` or `change` event instead:

javascript

```
const inputElement = document.querySelector('#myInput');

// Directly change the text value
inputElement.value = 'Hello World';

// Notify the application listeners that the input has changed
inputElement.dispatchEvent(new Event('input', { bubbles: true }));
```

Use code with caution.

What are you trying to accomplish with this event simulation? If you are writing **unit tests** or attempting to **automate an action** on a specific website, let me know so I can provide the exact workaround you need.

- [link](https://stackoverflow.com/questions/21354060/how-to-fire-keyboard-events-in-javascript)\
  How to fire keyboard events in Javascript? - Stack Overflow\
  Jan 25, 2014 — You can't trigger browser keypress behavior with JavaScript simulated keypresses. You can only trigger your own function. What tha...\
  Stack Overflow
- [link](https://community.claris.com/en/s/question/0D5Vy00000A4pG2KAJ/how-to-fire-a-simple-keydown-keyboardevent-in-javascript)\
  How to fire a simple keydown KeyboardEvent in JavaScript?\
  Expand search. Search. Search. "" Close search. Log in. Claris FileMaker. WOGAMi (Member) asked a question. June 10, 2024 at 4:47 ...\
  Claris Community
- [link](https://stackoverflow.com/questions/71050387/how-to-fire-keyboard-events-in-javascript-using-onclick)\
  How to fire keyboard events in Javascript using onClick?\
  Feb 9, 2022 — To fire keyboard events in Javascript using onClick, you can: \* Create a new KeyboardEvent \* Provide a key for the KeyboardEventIn...\
  Stack Overflow

Show all

## console command to fire left/right key

To fire a left or right arrow keypress directly from the browser console, run one of the following code snippets.

### Trigger Left Arrow

javascript

```
window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', code: 'ArrowLeft', keyCode: 37, bubbles: true }));
```

Use code with caution.

### Trigger Right Arrow

javascript

```
window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39, bubbles: true }));
```

Use code with caution.

### Target a Specific Element Instead of the Window

If the page or game is listening to a specific element (like an image carousel or a canvas wrapper) rather than the entire page, replace `window` with a query selector targeting that specific element:

javascript

```
// Target a specific element by class or ID
const target = document.querySelector('.game-canvas') || window;

// Fire the right arrow
target.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39, bubbles: true }));
```

Use code with caution.

### Troubleshooting

If the command executes but nothing happens on the page:

1. **Try `keyup` or `keypress`**: Some scripts listen for the release of the key instead of the initial press. Change `'keydown'` in the code above to `'keyup'`.
2. **Focus the element first**: Call `target.focus()` right before dispatching the event.

What specific **website or game** are you trying to control with this console command? If you share the target, I can help you **find the correct element selector** or **debug why it isn't responding**.

# . test (failed)

no effect

# (d) write a userscript. run on https://online-go.com map hjkl to .fa-backward, .fa-step-backward, .fa-step-forward, .fa-forward respectively use queryselector and just fire the click method on the element

It looks like there's no response available for this search. Try asking something else.

AI responses may include mistakes. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

## write

It looks like there's no response available for this search. Try asking something else.

AI responses may include mistakes. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

## write

It looks like there's no response available for this search. Try asking something else.

AI responses may include mistakes. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

## You sent: 1 tab and said: write a userscript.run on https://online-go.commap hjkl to .fa-backward, .fa-step-backward, .fa-step-forward, .fa-forward respectivelyuse queryselector and just fire the click method on the element

Play Go at online-go.com! | OGS

write a userscript.run on https://online-go.commap hjkl to .fa-backward, .fa-step-backward, .fa-step-forward, .fa-forward respectivelyuse queryselector and just fire the click method on the element

It looks like there's no response available for this search. Try asking something else.

## hi

Hello! How can I help you with your userscript for online-go.com today?

## write the script

It looks like there's no response available for this search. Try asking something else.

## can you write

It looks like there's no response available for this search. Try asking something else.

# write a userscript.

<!-- claude sonnet 5 -->

## write a userscript.

run on https://online-go.com

map hjkl to .fa-backward, .fa-step-backward, .fa-step-forward, .fa-forward respectively

use queryselector and just fire the click method on the element

```javascript
// ==UserScript==
// @name         OGS Keyboard Nav (hjkl)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Map h/j/k/l to backward/step-backward/step-forward/forward buttons on OGS
// @match        https://online-go.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const keyMap = {
        'h': '.fa-backward',
        'j': '.fa-step-backward',
        'k': '.fa-step-forward',
        'l': '.fa-forward'
    };

    document.addEventListener('keydown', function(e) {
        // Don't hijack keys while typing in inputs/textareas/contenteditable
        const tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

        const selector = keyMap[e.key];
        if (!selector) return;

        const el = document.querySelector(selector);
        if (el) {
            el.click();
            e.preventDefault();
        }
    }, true);
})();
```

Drop this into Tampermonkey/Violentmonkey. Note: `.fa-backward` etc. are icon classes, so the click fires on the `<i>` element itself — if OGS's click handler is bound to a parent `<button>` or `<a>` instead, you may need `el.closest('button, a')?.click()` instead of `el.click()`. Let me know if the clicks don't register and I'll adjust.

## swap mapping of jk

```javascript
// ==UserScript==
// @name         OGS Keyboard Nav (hjkl)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Map h/j/k/l to backward/step-backward/step-forward/forward buttons on OGS
// @match        https://online-go.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const keyMap = {
        'h': '.fa-backward',
        'j': '.fa-step-forward',
        'k': '.fa-step-backward',
        'l': '.fa-forward'
    };

    document.addEventListener('keydown', function(e) {
        // Don't hijack keys while typing in inputs/textareas/contenteditable
        const tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

        const selector = keyMap[e.key];
        if (!selector) return;

        const el = document.querySelector(selector);
        if (el) {
            el.click();
            e.preventDefault();
        }
    }, true);
})();
```

j → step-forward, k → step-backward now.

# what does hjkl mean in navigation

## what does hjkl mean in navigation

In keyboard-based navigation, **`hjkl` refers to the four keys used to move the cursor left, down, up, and right**. [link](https://www.youtube.com/watch?v=M3WnH-HneL4)

This navigation method is most famously used in the [Vim](https://www.reddit.com/r/vim/comments/192ik36/why%5Fhjkl/) text editor, command-line interfaces, and [classic roguelike video games](https://groups.google.com/g/vim%5Fuse/c/SG4gyoPQQek?gl=us). It replaces the traditional arrow keys so touch-typists never have to move their right hand away from the "home row" of the keyboard. [link](https://www.reddit.com/r/vim/comments/192ik36/why%5Fhjkl/)

### Key Mappings

The breakdown of each letter's movement direction:

- **`h`**: Move **Left** ⬅️
- **`j`**: Move **Down** ⬇️
- **`k`**: Move **Up** ⬆️
- **`l`**: Move **Right** ➡️ [link](https://www.youtube.com/watch?v=M3WnH-HneL4)

_Tip: A common way to memorize this is that `h` is on the far left, `l` is on the far right, and `j` looks like a downward hook or arrow._ [link](https://groups.google.com/g/vim%5Fuse/c/SG4gyoPQQek?gl=us)

### Historical Origin

The reason these specific keys are used is purely historical. In 1976, Bill Joy created the `vi` text editor (the predecessor to Vim) while using a [Lear Siegler ADM-3A computer terminal](https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys).

This specific terminal keyboard **did not have dedicated arrow keys**. Instead, the manufacturer had printed physical arrow symbols directly onto the `H`, `J`, `K`, and `L` keys because the underlying ASCII control codes for backspace (`Ctrl+H`), line feed (`Ctrl+J`), vertical tab (`Ctrl+K`), and form feed (`Ctrl+L`) naturally mapped to those directions. Bill Joy built the editor's navigation around what was physically printed on his keyboard, creating a legacy system still used by developers today. [link](https://stackoverflow.com/questions/69949053/in-vim-why-are-the-navigation-keys-hjkl-and-not-jkl)

Would you like to know how to **remap these keys** to a standard layout in Vim, or are you trying to configure them for a **specific application or game**? [link](https://www.reddit.com/r/vim/comments/1c8i25j/do%5Fyou%5Fuse%5Fhjkl%5Finstead%5Fof%5Fwasd%5Fand%5Farrow%5Fkey/)

- [link](https://www.reddit.com/r/vim/comments/192ik36/why%5Fhjkl/)\
  Why hjkl? : r/vim - Reddit\
  Jan 9, 2024 — Comments Section. \[deleted] • 3y ago. The original reason is purely historical. The computer on which the first versions of the ed...\
  Reddit·r/vim
- [link](https://stackoverflow.com/questions/69949053/in-vim-why-are-the-navigation-keys-hjkl-and-not-jkl)\
  In Vim, why are the navigation keys HJKL and not JKL;? \[closed]\
  Nov 12, 2021 — Vim uses the hjkl keys for cursor movement because vi did. The original vi used hjkl because its creator's keyboard didn't have ph...\
  Stack Overflow
- [link](https://groups.google.com/g/vim%5Fuse/c/SG4gyoPQQek?gl=us)\
  vim-mnemonics for hjkl. - Google Groups\
  Mar 2, 2021 — Reply to author. to vim...@googlegroups.com. On Tue, Mar 02, 2021 at 02:14:29AM -0800, hongy...@gmail.com wrote: > > The big advan...\
  Google Groups

Show all

## why

The use of **`hjkl`** stems entirely from a 1976 hardware limitation: the keyboard used by the creator of the `vi` text editor **literally had arrow symbols printed directly on those letters**.

### 1. The Terminal Keyboard

Bill Joy, the creator of `vi` (the predecessor to Vim), wrote the software on a terminal called the **Lear Siegler ADM-3A**.

- This machine had **no dedicated arrow keys**.
- Space was limited, so the manufacturer printed arrows on the `H`, `J`, `K`, and `L` keys.
- Joy simply programmed the editor to match the visual arrows on his keyboard.

### 2. The ASCII Code Link

The manufacturer chose those specific keys because of how computers process characters (ASCII control codes):

- **`Ctrl + H`** sent a backspace (moved the cursor **left**).
- **`Ctrl + J`** sent a line feed (moved the cursor **down**).
- **`Ctrl + K`** sent a vertical tab (moved the cursor **up**).
- **`Ctrl + L`** sent a form feed (moved the cursor **right**).

Because the hardware chips already associated these letters with cursor movements, it was the easiest engineering choice.

### 3. The "Home Row" Benefit

While born out of a limitation, the layout survived because it is highly efficient. Your right hand naturally rests on `j` and `k` in the touch-typing "home row." Keeping your hand there means you never have to move your arm to reach distant arrow keys, which speeds up coding and writing.

Would you like to see a diagram of that **1976 keyboard layout**, or do you want to learn how to **disable `hjkl`** in Vim to force yourself to use a different navigation style?

## why this mapping

The `hjkl` keys were mapped to those specific directions because the **ASCII standard** already associated those letters with matching cursor functions, and the hardware manufacturer chose them to save money.

### 1. The Pre-Existing Code Blueprint

In 1967, long before the ADM-3A terminal was built, the ASCII teleprinter standard established "Control Codes" to tell machines how to position text. The engineers of the terminal mapped the directional keys to these control codes, which happened to line up sequentially in the alphabet:

- **`H` (ASCII 72 / Binary 1001000)**: `Ctrl+H` triggered **Backspace**, which naturally moves the cursor **Left**.
- **`J` (ASCII 74 / Binary 1001010)**: `Ctrl+J` triggered **Line Feed**, which advances paper or the cursor **Down**.
- **`K` (ASCII 75 / Binary 1001011)**: `Ctrl+K` triggered **Vertical Tab**, which was used to skip lines **Up**.
- **`L` (ASCII 76 / Binary 1001100)**: `Ctrl+L` triggered **Form Feed**, which moved the carriage to the next page or **Right**.

### 2. Physical Key Placement

Because the hardware logic board already paired these control codes with the letters H, J, K, and L, the manufacturer grouped them together.

On standard QWERTY keyboards, these letters sit right next to each other in a neat line. It was incredibly intuitive for the manufacturer to put the arrows on the keys that _already_ held the electronic commands for those movements.

### 3. The Shift Key Shortcut

The terminal also lacked an individual key for "Home" (moving to the top left of the screen). To solve this, the engineers used the **`Shift` key** in combination with the arrow keys.

- On the ADM-3A, the `HOME` function shared the exact same key as the **`^` (caret)** symbol.
- In Vim today, pressing `^` still moves your cursor to the first non-blank character of a line.

Are you interested in learning other **historical Vim shortcuts** that come from this specific keyboard, or would you like to see how to **rebind your arrow keys** to a modern layout?

- [link](https://www.kaspersky.com/blog/secure-futures-magazine/path-dependence-business-innovation/42473/)\
  How business can innovate better by escaping ‘path dependence’\
  Oct 20, 2021 — What keyboards say about path dependence in tech The pattern of keys on the standard laptop, computer and even smartphone is a cla...\
  \
  \
  Kaspersky

## why this mapping initially

The absolute root cause of this mapping comes down to standard **binary math** and **saving money on computer chips** in the early 1970s.

When engineers designed the Lear Siegler ADM-3A terminal, microchips were incredibly expensive. Every extra wire or logic gate added manufacturing cost. To keep the terminal affordable ($995 at the time), the engineers looked for a way to generate cursor movements using the exact same electronic circuits already used for standard letters.

### The Binary "Offset" Trick

Computers read keyboard inputs as binary numbers (1s and 0s). Look at how the binary codes for the standard control actions line up perfectly with the letters `H`, `J`, `K`, and `L` if you just flip the first few bits:

| Action                | Control Code | Binary Value |     | Matching Letter | Binary Value |
| --------------------- | ------------ | ------------ | --- | --------------- | ------------ |
| **Backspace (Left)**  | `Ctrl + H`   | `0001000`    | ⇄   | **H**           | `1001000`    |
| **Line Feed (Down)**  | `Ctrl + J`   | `0001010`    | ⇄   | **J**           | `1001010`    |
| **Vertical Tab (Up)** | `Ctrl + K`   | `0001011`    | ⇄   | **K**           | `1001011`    |
| **Form Feed (Right)** | `Ctrl + L`   | `0001100`    | ⇄   | **L**           | `1001100`    |

### Why This Mattered to Engineers

Because the binary sequences for the directions matched the binary sequences for `H, J, K, L` perfectly—varying by only a single bit—the engineers didn't have to design a complex new circuit board for arrow navigation.

They simply used the existing letter circuits, routed them to the terminal's video memory controller, and printed physical arrow graphics on the keycaps. It was a pure hardware cost-saving hack that accidentally permanently altered software history.

Would you like to know about other **quirks of the ADM-3A keyboard** that changed how programming languages work, such as the placement of the **Escape** or **Control** keys?

- [link](https://medium.com/@shan.siddiqui/how-do-computers-turn-0s-1s-into-words-and-images-34c39783efc9)\
  How do computers turn 0s & 1s into words and images?\
  Nov 20, 2022 — Our computers are constantly scanning our keyboards to see what we press, and then print the binary associated with that key.\
  \
  \
  Medium

## why control codes were mapped this way

The structural link between the control codes and the letters `H`, `J`, `K`, and `L` traces back to the creation of the [7-bit ASCII standard](https://en.wikipedia.org/wiki/ASCII) in 1963. The standard was designed around **teletype mechanical printers** and **typewriter keyboard physics**. [link](https://en.wikipedia.org/wiki/ASCII)

The alignment of `hjkl` with directional control codes was engineered across three distinct steps.

### 1. Physical Typewriter Layouts Dictated the Letters

When the [ASCII committee ordered the alphabet](https://stackoverflow.com/questions/1136156/is-there-any-logic-behind-ascii-codes-ordering) from A to Z, they gave `A` the binary value of `1000001` (65 in decimal) to stay compatible with early British standards. Following standard alphabetical order, the letters `H, J, K, L` naturally fell into these exact sequential slots: [link](https://stackoverflow.com/questions/1136156/is-there-any-logic-behind-ascii-codes-ordering)

- **`H`**: `1001000` (72)
- **`J`**: `1001010` (74)
- **`K`**: `1001011` (75)
- **`L`**: `1001100` (76)

### 2. Teletype Functions Dictated the Actions

Long before computer monitors existed, teletypewriters printed data onto continuous rolls of physical paper. To control the physical motors of the printer carriage, engineers needed specific mechanical layout signals called **Format Effectors**:

- **Backspace (BS)**: Rolled the mechanical print head one space back to overwrite text.
- **Line Feed (LF)**: Spun the paper roller down to move to the next physical line.
- **Vertical Tab (VT)**: Skipped the printer head down past lines to the next pre-set template marker.
- **Form Feed (FF)**: Spat out the whole page so a user could tear it off, resetting to the top of the next page. [link](https://www.reddit.com/r/vim/comments/dzwxht/does%5Fanyone%5Fremap%5Fhjkl%5Fto%5Fjklh/)

### 3. The Physical "Control" Key Combined Them

To avoid putting 128 separate physical keys on a typewriter keyboard, engineers designed a modifier key: the **`Control` key**.

The physical wiring of the early `Control` keys did not send a complex combination signal. Instead, holding down the `Control` key physically **stripped away ("killed") the 6th and 7th data bits** of whatever letter you pressed. [link](https://news.ycombinator.com/item?id=3684515)

Because the ASCII formatting commands (`BS`, `LF`, `VT`, `FF`) were given the early values of 8, 10, 11, and 12 in the table, stripping the 6th and 7th bits out of `H, J, K, L` perfectly downgraded those letters into those exact control slots. [link](https://news.ycombinator.com/item?id=3684515)

- **`H`** (`1001000`) ➔ Strip bits 6/7 ➔ **`0001000`** (ASCII 8: Backspace/Left)
- **`J`** (`1001010`) ➔ Strip bits 6/7 ➔ **`0001010`** (ASCII 10: Line Feed/Down)
- **`K`** (`1001011`) ➔ Strip bits 6/7 ➔ **`0001011`** (ASCII 11: Vertical Tab/Up)
- **`L`** (`1001100`) ➔ Strip bits 6/7 ➔ **`0001100`** (ASCII 12: Form Feed/Right) [link](https://news.ycombinator.com/item?id=3684515)

The codes were mapped this way because it mirrored standard typewriter mechanics using basic binary physics. Decades later, when the terminal manufacturer built the ADM-3A, they noticed these codes were grouped together in the alphabet and wired them directly into visual arrow keys. [link](https://x.com/hillelogram/status/1326600125569961991)

Would you like to explore how other classic terminal layout choices influenced computer history, like why the **`Tilde (~)` key** represents the user's **home directory** in Linux?

- [link](https://www.enigma.com/resources/blog/the-secret-world-of-newline-characters/)\
  www.enigma.com\
  The Secret World of Newline Characters - Enigma\
  Jun 19, 2018 — Lammert Bies provides elucidating descriptions for them: \* Line Tab a.k.a. Vertical Tab. “The vertical tab is like the horizontal ...
- [link](https://en.wikipedia.org/wiki/ASCII)\
  Wikipedia\
  ASCII - Wikipedia\
  Internal organization \* The code itself was patterned so that most control codes were together and all graphic codes were together...
- [link](https://www.geeksforgeeks.org/computer-organization-architecture/what-is-ascii-a-complete-guide-to-generating-ascii-code/)\
  GeeksforGeeks\
  ASCII Character Encoding - GeeksforGeeks\
  Jul 23, 2025 — ASCII Character Encoding \* Uses 7 bits to encode 128 characters (0–127); modern usage often stores them in 8‑bit bytes with the hi...

Show all

## why these letters initially

The letters **`H`, `J`, `K`, and `L`** were chosen for these specific control functions because of a mathematical constraint in the original 1963 ASCII table: **the alphabet and the control functions had to line up perfectly for mechanical keyboards to function.**

When the ASCII committee assigned numbers to characters, they had to design a system where a simple mechanical typewriter keyboard could generate both regular text and machine commands without complex internal computers.

### 1. The Fixed Starting Point

The committee decided that the printable English alphabet must start at decimal position 65 (Binary `1000001`) for the letter `A`. Because the alphabet follows a strict sequential order, every letter's position was locked into place by pure math:

- `A` = 65, `B` = 66, `C` = 67...
- This mathematical sequence meant that **`H`, `J`, `K`, and `L` automatically landed on positions 72, 74, 75, and 76**.

### 2. The Fixed Machine Commands

At the exact same time, the committee had to place the printer's mechanical commands (like moving the paper roll or the printing head). By industry agreement, these fundamental machine instructions were grouped at the very beginning of the table, occupying positions 1 through 31.

- Backspace was placed at position 8.
- Line Feed was placed at position 10.
- Vertical Tab was placed at position 11.
- Form Feed was placed at position 12.

### 3. The Structural Bridge: The Bit-Shift Math

The final challenge was creating a way for a user to type these low-number commands using a standard layout. Typewriters at the time used mechanical switches to change outputs.

The engineers realized they could create a "Control" key that physically blocked or deactivated specific data lines (specifically, the 6th and 7th bits of a 7-bit binary signal).

For this mechanical trick to work, a command at the bottom of the table _had_ to share the exact same lower binary structure as a letter higher up in the table.

When you subtract 64 (the value of the 7th bit) from the positions of `H, J, K, L`, the math works out perfectly:

- `H` (72) minus 64 = **8** (Backspace)
- `J` (74) minus 64 = **10** (Line Feed)
- `K` (75) minus 64 = **11** (Vertical Tab)
- `L` (76) minus 64 = **12** (Form Feed)

### Summary

The letters `H`, `J`, `K`, and `L` were not chosen because of their physical position on a QWERTY keyboard or because anyone thought they were good for navigation. They were used because **their alphabetical sequence perfectly mirrored the binary values of the printer commands.**

If the alphabet had started at a different number, or if the commands had been arranged in a different order, a completely different set of letters would have become our navigation keys today.

Would you like to know why the letter **`I`** (position 73 / command 9) was skipped in this sequence, or are you curious about how other keys like **`Space` or `Return`** got their specific spots?

- [link](https://stackoverflow.com/questions/1136156/is-there-any-logic-behind-ascii-codes-ordering)\
  Is there any logic behind ASCII codes' ordering?\
  Jul 16, 2009 — The first two columns (32 positions) were reserved for control characters.\[14] The "space" character had to come before graphics t...\
  \
  \
  Stack Overflow
- [link](https://www.reddit.com/r/AlwaysWhy/comments/1uvhn3e/why%5Fis%5Fthe%5Falphabet%5Farranged%5Fin%5Fa%5Fto%5Fz%5Fand%5Fnot%5Fin/)\
  Why is the alphabet arranged in A to Z and not in any other order? Why has that order been? : r/AlwaysWhy\
  Jul 13, 2026 — Agreed. Alphabetical and numerical order are completely arbitrary. Not entirely, i and j used to be the same letter, they are next...\
  \
  \
  Reddit
- [link](https://www.instagram.com/reel/DZEGyrFD6RG/)\
  HISTORY | Would you learn a new keyboard layout if it meant typing faster? #MistakesThatMadeAmerica For more Mistakes That Made America, head over...\
  Jun 2, 2026 — Right now, if you are reading this on a keyboard, look down at your fingers. The layout you are using — Q, W, E, R, T, Y — across ...\
  \
  Instagram

Show all

## was it a coincidence

**No, it was not a coincidence.** The mapping was a deliberate, highly calculated decision by the 1960s ASCII committee, though they were designing it for a completely different purpose than keyboard navigation.

The committee carefully organized the character set to ensure mathematical efficiency for mechanical components.

### The Deliberate Alphabet Sorting

When the [X3.2 ASCII committee](https://www.historyofinformation.com/detail.php?id=803) finalized the standard in 1963, they didn't just throw characters into random slots. They deliberately grouped all capital letters together in a sequential, alphabetical line starting at 65 (`A`) so that computers could easily sort words alphabetically using basic math. Because the alphabet has a fixed order, `H, J, K, L` were mathematically locked into positions 72, 74, 75, and 76. [link](https://www.historyofinformation.com/detail.php?id=803)

### The Deliberate Control Block

At the same time, the committee needed a dedicated block for "Format Effectors" (the physical commands that moved a printer carriage or paper reel). They deliberately reserved the very first section of the ASCII table (slots 1 to 31) for these non-printing mechanical commands. [link](https://www.historyofinformation.com/detail.php?id=803)

### The Non-Coincidental Alignment

The stroke of engineering brilliance—and why it isn't a coincidence—is how the committee aligned the commands inside that early block.

Instead of scattering the mechanical formatting commands randomly, **the engineers deliberately arranged the layout commands to match the exact lower binary bits of the alphabet**.

By placing Backspace at 8, Line Feed at 10, Vertical Tab at 11, and Form Feed at 12, they ensured that these directional printer actions were exactly **64 slots away** from the letters `H, J, K, L`. [link](https://superuser.com/questions/212874/why-is-backspace-often-represented-with-h)

| Desired Command  | Target Code Slot | Alphabet Equivalent | Alphabet Code Slot | Mathematical Offset |
| ---------------- | ---------------- | ------------------- | ------------------ | ------------------- |
| **Backspace**    | 8                | **H**               | 72                 | 72 - 64 = **8**     |
| **Line Feed**    | 10               | **J**               | 74                 | 74 - 64 = **10**    |
| **Vertical Tab** | 11               | **K**               | 75                 | 75 - 64 = **11**    |
| **Form Feed**    | 12               | **L**               | 76                 | 76 - 64 = **12**    |

This structural alignment was fully intentional so that early mechanical keyboards could use a physical `Control` key circuit to effortlessly strip away 64 from the binary value, turning text letters into machine movements with almost zero computing power.

### The Only True Coincidence

The only accident in this entire historical chain is **how those letters sit on a QWERTY keyboard**.

The ASCII committee designed the math around the standard latin _alphabet sequence_ (`H, J, K, L` happen to be clustered near each other). It was pure, random luck that on a standard QWERTY keyboard layout, those exact four letters happen to sit side-by-side in a perfect horizontal row for your right hand.

When Lear Siegler built the ADM-3A terminal a decade later, they looked at their keyboard, noticed the `H, J, K, L` keys were right next to each other, and realized the underlying ASCII chips already associated those specific keys with movements. They decided to draw the arrows right on top of them to save money, creating the navigation system we use today.

Would you like to know why **`I`** was skipped in the middle of this alphabetical sequence, or how the physical **`Escape` key** wound up right next to `Q` on that historic terminal?

- [link](https://www.historyofinformation.com/detail.php?id=803)\
  History of Information\
  ASCII (American Standard Code for Information Interchange ...\
  May 6, 2026 — ASCII (American Standard Code for Information Interchange) is Promulgated. ... , specifying the pattern of seven bits to represent...
- [link](https://superuser.com/questions/212874/why-is-backspace-often-represented-with-h)\
  Super User\
  Why is backspace often represented with ^H? - Super User\
  Nov 19, 2010 — With any of the characters from @ to \_ , it generates a character 64 (0x40) positions earlier in the ASCII table. ... See http://e...
- [link](https://www.reddit.com/r/vim/comments/ujvtew/why%5Fare%5Fthe%5Fnavigation%5Fkeys%5Fh%5Fj%5Fk%5Fl%5Finstead%5Fof%5Fj/)\
  Reddit·r/vim\
  Why are the navigation keys 'H', 'J', 'K', 'L', instead of 'J', 'K', 'L', ';'?\
  May 6, 2022 — I believe the thinking was that j (down) was the key more likely to be used most, so it was specced onto the terminal's keyboard t...

Show all

## was it a coincidence how they sit on the keyboard

**Yes, how they sit on the keyboard was a complete coincidence.**

The fact that `H`, `J`, `K`, and `L` sit perfectly side-by-side in a horizontal line is a random byproduct of the [QWERTY typewriter layout](https://www.facebook.com/TEDEducation/posts/theres-a-99-chance-that-your-keyboard-says-qwerty-how-did-this-pattern-of-letter/1523994359298849/) invented in the 1870s. It has absolutely nothing to do with the 1963 ASCII computer standard. [link](https://www.facebook.com/TEDEducation/posts/theres-a-99-chance-that-your-keyboard-says-qwerty-how-did-this-pattern-of-letter/1523994359298849/)

The history of how these two unrelated systems collided involves a clear separation between alphabet order and physical key placement.

### 1. QWERTY Was Built to Separate Letters

In 1873, [Christopher Latham Sholes](https://www.facebook.com/groups/it.humor.and.memes/posts/9987493781276316/) designed the QWERTY keyboard layout for mechanical typewriters. His goal was to **separate commonly paired English letters** (like "S" and "T") to prevent the typewriter's physical metal arms from jamming when typed quickly. Sholes scrambled the alphabet based on English letter frequencies, and `H-J-K-L` just happened to end up next to each other on the middle row. [link](https://www.facebook.com/TEDEducation/posts/theres-a-99-chance-that-your-keyboard-says-qwerty-how-did-this-pattern-of-letter/1523994359298849/)

### 2. ASCII Was Built Around Alphabetical Order

Ninety years later, in 1963, the ASCII committee created the digital character code table. They didn't care about the QWERTY layout; they cared about **alphabetical sorting math**.

- They mapped the alphabet sequentially from A to Z.
- Because `H, J, K, L` are sequential in the Latin alphabet, they mathematically received sequential binary numbers (72, 74, 75, 76).
- Because they were sequential, their paired [Control Codes](https://news.ycombinator.com/item?id=3684515) (Backspace, Line Feed, Vertical Tab, Form Feed) also fell into a neat numerical sequence (8, 10, 11, 12). [link](https://news.ycombinator.com/item?id=3684515)

### The Ultimate Historical Intersection

The coincidence became a reality in 1976 with the Lear Siegler ADM-3A terminal. [link](https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys)

The terminal's engineers needed to add arrow keys but had no physical space to add separate hardware buttons. They looked at their chip architecture and realized the digital "move cursor" commands were tied to the binary codes for `H, J, K, and L`. Then, they looked down at the physical keyboard layout and realized—by pure luck—that those exact four letters were already lined up in a neat row right under the user's right hand. [link](https://www.reddit.com/r/linux/comments/atpnsp/why%5Fvim%5Fuses%5Fhjkl%5Fkeys%5Fas%5Farrow%5Fkeys/)

Instead of routing wires to four scattered keys across the keyboard, the engineers printed the visual arrow symbols onto `H, J, K, and L`. Bill Joy saw those physical arrows, programmed `vi` to use them, and permanently turned a random QWERTY coincidence into a foundational pillar of software engineering navigation.

Are you interested in seeing how **other keyboard layouts** (like Dvorak or Colemak) break this historical navigation system, or would you like to know how to **remap Vim** to a different layout?

- [link](https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys)\
  CatOnMat\
  Here is why vim uses hjkl keys as arrow keys - catonmat.net\
  I was reading about vim the other day and found out why it used hjkl keys as arrow keys. When Bill Joy created the vi text editor ...
- [link](https://www.reddit.com/r/linux/comments/atpnsp/why%5Fvim%5Fuses%5Fhjkl%5Fkeys%5Fas%5Farrow%5Fkeys/)\
  Reddit\
  Why vim uses hjkl keys as arrow keys : r/linux\
  Feb 23, 2019 — According to Reddit users, Vim uses the HJKL keys because they're on the home row and require little movement to navigate the page...
- [link](https://www.facebook.com/TEDEducation/posts/theres-a-99-chance-that-your-keyboard-says-qwerty-how-did-this-pattern-of-letter/1523994359298849/)\
  Facebook·TED-Ed\
  There’s a 99% chance that your keyboard says QWERTY. How did ...\
  Apr 13, 2026 — Have you ever wondered why the letters on your keyboard are arranged as QWERTY and not in alphabetical order? The reason dates bac...

Show all

## was it intended to make them ergonomically efficient at the end of the day

**No, it was not intended at all.** The ergonomic efficiency of `hjkl` was a complete accident.

When the ASCII engineers designed the binary system in 1963, and when the ADM-3A engineers built the hardware in 1976, **user ergonomics was not a consideration.** Computer engineering at the time was entirely focused on reducing manufacturing costs and solving hardware limitations.

The transition from a cost-saving hack to an ergonomic masterpiece happened through three distinct phases:

### 1. The Real Motive: Pure Financial Necessity

Lear Siegler built the ADM-3A as a "dumb terminal" meant to be sold as a cheap kit. To hit their breakthrough sub-$1,000 price point, they had to eliminate every unnecessary component.

- Separate arrow keys required extra plastic keycaps, individual mechanical switches, and complex wiring traces on the circuit board.
- By reusing `hjkl`, they saved on manufacturing parts.
- The engineers didn't place the arrows on the "home row" because it felt good; they used them because **those specific keys were already wired to the correct ASCII control chips.**

### 2. The Ergonomic Flaw of the Original Layout

While we praise `hjkl` today for keeping your hands on the home row, the actual layout on the ADM-3A was highly non-ergonomic by modern standards.

- **The `h` key (Left)** was underneath the index finger.
- **The `j` key (Down)** was underneath the middle finger.
- **The `k` key (Up)** was underneath the ring finger.
- **The `l` key (Right)** was underneath the pinky finger.

If you place your fingers on the home row right now, moving your weakest fingers (ring and pinky) to constantly navigate up and right is actually quite awkward. It only feels truly ergonomic to modern Vim users because most people slide their hand over by one key, using their index, middle, and ring fingers for the majority of the movement.

### 3. The Happy Accident

The "ergonomic efficiency" narrative was actually popularized later by the software community, not the hardware designers.

When Bill Joy wrote `vi`, developers began spending 10 to 12 hours a day inside the text editor. They quickly realized that despite the layout being born from a cheap hardware limitation, never having to move their right wrist away from the center of the keyboard drastically reduced arm fatigue compared to reaching for far-away navigation keys.

What started as a corporate cost-cutting measure accidentally aligned perfectly with touch-typing physics, turning a design restriction into a legendary productivity feature.

Would you like to know about other **accidental design features** in early computing that we now consider "best practices," or are you looking to optimize your own **modern keyboard ergonomics**?

## just so lucky?

**Yes, it was a sequence of pure, historical luck.** The ergonomic efficiency of `hjkl` was never planned by a grand architect; it was the accidental intersection of three entirely unrelated decisions spanning over a century.

To understand just how much of a fluke this was, consider what had to happen at the exact same time:

### 1. The Typist's Fluke (1870s)

Christopher Latham Sholes [arranged the QWERTY keyboard](https://www.facebook.com/groups/it.humor.and.memes/posts/9987493781276316/) to deliberately separate common letter pairings so typing too fast wouldn't jam a typewriter's mechanical arms. He wasn't thinking about computer terminals or human biology. Yet, through complete random chance, the letters `H`, `J`, `K`, and `L` wound up sitting right next to each other on the middle row where a right hand naturally rests.

### 2. The Mathematician's Fluke (1963)

When the [ASCII committee mapped the alphabet to numbers](https://stackoverflow.com/questions/1136156/is-there-any-logic-behind-ascii-codes-ordering) ninety years later, they completely ignored the physical layout of keyboards. They cared about alphabetical sorting and binary math. It was pure numerical consequence that `H, J, K, L` lined up as positions 72, 74, 75, and 76. [link](https://www.historyofinformation.com/detail.php?id=803)

Because they lined up, their corresponding `Control` code actions (Backspace, Line Feed, Vertical Tab, Form Feed) _also_ lined up perfectly as 8, 10, 11, and 12.

### 3. The Manufacturer's Fluke (1976)

When the engineers at Lear Siegler built the ADM-3A terminal, they were strictly trying to build the cheapest computer terminal on the market. They didn't have the budget or physical space to add dedicated arrow buttons. [link](https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys)

They looked at their internal microchip logic and saw that the directional commands were electronically bound to `H, J, K, L`. Then they looked down at the QWERTY keys and realized those letters happened to be beautifully grouped right next to each other. They slapped arrow graphics on those keys to save money on parts, and software history was locked in. [link](https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys)

### The Ultimate Irony

If the ASCII committee had started the alphabet at number 60 instead of 65, or if Sholes had scattered `H, J, K, L` across different rows to prevent typewriters from jamming, Vim's legendary core navigation would be a confusing, scattered mess today.

Instead, a typewriter mechanical fix from the 19th century and a digital data standard from the mid-20th century lined up flawlessly—giving modern software developers an ergonomic masterpiece entirely by accident.

Would you like to find out about **other software shortcuts** born out of complete historical accident, or see how people **remap modern split keyboards** to preserve this layout?

- [link](https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys)\
  CatOnMat\
  Here is why vim uses hjkl keys as arrow keys - catonmat.net\
  I was reading about vim the other day and found out why it used hjkl keys as arrow keys. When Bill Joy created the vi text editor ...
- [link](https://www.historyofinformation.com/detail.php?id=803)\
  History of Information\
  ASCII (American Standard Code for Information Interchange ...\
  May 6, 2026 — ASCII (American Standard Code for Information Interchange) is Promulgated. ... , specifying the pattern of seven bits to represent...
- [link](https://www.ibm.com/docs/en/sdse/6.4.0?topic=configuration-ascii-characters-from-33-126)\
  IBM\
  ASCII characters from 33 to 126 - IBM\
  Table\_title: ASCII characters from 33 to 126 Table\_content: | ASCII code | Character | | --- | --- | | 63 | ? question mark | | 66...

Show all




# . ai seisei

```js
// ==UserScript==
// @name         Navigate AI Sensei with HJKL
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Map h/j/k/l to backward/step-forward/step-backward/forward buttons
// @match        https://ai-sensei.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const keyMap = {
        'h': '[title="Go back to previous mistake           [ Shift+← ]"]',
        // 'h': '[title="Go to the beginning           [ Ctrl+Shift+← ]"]',
        'j': '[title="Go forward one move           [ → ]"]',
        'k': '[title="Go back one move           [ ← ]"]',
        'l': '[title="Go forward to next mistake           [ Shift+→ ]"]'
        // 'l': '[title="Go to the end           [ Ctrl+Shift+→ ]"]'
    };

    document.addEventListener('keydown', function(e) {
        // Don't hijack keys while typing in inputs/textareas/contenteditable
        const tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

        const selector = keyMap[e.key];
        if (!selector) return;

        const el = document.querySelector(selector);
        if (el) {
            el.click();
            e.preventDefault();
        }
    }, true);
})();
```
