# 1

```js
const cards = {
  ruby: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { select: { number: 1, from: "field", do: { to: "hand" } }, draw: 1 },
    },
  },
  detective: {
    type: "follower",
    cost: 3,
    attack: 3,
    defence: 3,
    when: {
      out: { add: "lens" },
    },
  },
  goblins: {
    type: "spell",
    cost: 5,
    when: {
      in: { summon: [{ id: "goblin", number: 5 }] },
    },
  },
  apollo: {
    type: "follower",
    cost: 3,
    attack: 1,
    defence: 2,
    when: {
      in: { aoe: 1 },
      e: { aoe: 1 },
    },
  },
  angel: {
    type: "spell",
    cost: 3,
    when: {
      in: { draw: 2 },
    },
  },
  phildau: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      e: { select: { from: "enemies", number: 1, do: "remove" } },
    },
  },
  thunder: {
    type: "spell",
    cost: 4,
    when: {
      in: {
        to: { what: "fn to get the highest atk enemy", do: "remove" },
        draw: 2,
      },
    },
  },
  olivia: {
    type: "follower",
    cost: 7,
    attack: 4,
    defence: 4,
    when: {
      in: { draw: 2, charge: 2, heal: 2 },
      se: { select: { from: "field, not e, not self", number: 1, do: "se" } },
    },
  },
  master: {
    type: "follower",
    cost: 10,
    attack: 10,
    defence: 10,
    when: {
      in: {
        deck: "fn: rp with A 10-card deck consisting of powerful cards related to the Ruler of Cocytus.",
      },
    },
  },
  rider: {
    type: "follower",
    cost: 6,
    attack: 10,
    defence: 10,
    when: {
      in: {
        ff: true,
      },
    },
  },
  servant: {
    type: "follower",
    cost: 1,
    attack: 13,
    defence: 13,
  },
  demon: {
    type: "follower",
    cost: 5,
    attack: 9,
    defence: 6,
    when: {
      in: {
        select: { from: "enemies", number: 2, do: { attack: 6 } },
        to: { what: "boss", do: { attack: 6 } },
      },
    },
  },
  judgment: {
    type: "spell",
    cost: 10,
    when: {
      in: {
        do: { what: "fn set boss max hp to 1" },
      },
    },
  },
};
```

turn these cards into an object like above

cards with three numbers are follower, cost, attack, defence

cards with one number is spell, cost.

for effects that start with fn, keep them as a string.

for other effects, try to interpret its meaning and describe them like above

```
elise 111

out: add remembrance

dirk 555

in: summon fortifier

hunter 222

in: add ambition

e: select enemy attack 3

assassin 322

add greatpuppet

with "fn: give it bane for first puppet follower"

puppetshield 3

in: summon 2 greatpuppet

artifact 1

in: add ambition and rememberance

rukina 433

in: add ambition and rememberance

e: summon striker

puppeteer 222

in: add puppet

e: add puppet

noah 656

in: add 3 puppet

hand: fn 10 for puppet

stream 2

in: select enemy attack 3, add rememberance

doom 5

in: select 2 "artifacts <= 5" summon, give them "fragile"

miriam 323

in: add ambition and rememberance

e: add ambition and rememberance

sylvia 655

in: "mode 1. draw 2, 2. heal 4"

e: select enemy remove

se: select 2 enemy remove

liam 977

in: summon 3 greatpuppet

e: "give all puppet on field protect and out: hit 2"

alouette 524

in: add ambition and rememberance

e: select from "artifact <= 5", do summon

cannon 5

in: add ambition

fuse: "attack 2 to random"

eudie 333

in: draw 1

e: "get Crest: Eudie, Maiden Reborn."

orchis 855

in: summon lloyd

with: "puppet in field ff bane"

ralmia 822

in: select "at most 3 artifact <= 5" do summon

se: to what "artifact followers" do "+1/+1"
```

---

Here's the object with all the cards formatted similarly to your example:

```js
const cards = {
  elise: {
    type: "follower",
    cost: 1,
    attack: 1,
    defence: 1,
    when: {
      out: { add: "remembrance" },
    },
  },
  dirk: {
    type: "follower",
    cost: 5,
    attack: 5,
    defence: 5,
    when: {
      in: { summon: [{ id: "fortifier" }] },
    },
  },
  hunter: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "ambition" },
      e: { select: { from: "enemies", number: 1, do: { attack: 3 } } },
    },
  },
  assassin: {
    type: "follower",
    cost: 3,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "greatpuppet" },
      effect: "fn: give it bane for first puppet follower",
    },
  },
  puppetshield: {
    type: "spell",
    cost: 3,
    when: {
      in: { summon: [{ id: "greatpuppet", number: 2 }] },
    },
  },
  artifact: {
    type: "spell",
    cost: 1,
    when: {
      in: { add: ["ambition", "remembrance"] },
    },
  },
  rukina: {
    type: "follower",
    cost: 4,
    attack: 3,
    defence: 3,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { summon: [{ id: "striker" }] },
    },
  },
  puppeteer: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "puppet" },
      e: { add: "puppet" },
    },
  },
  noah: {
    type: "follower",
    cost: 6,
    attack: 5,
    defence: 6,
    when: {
      in: { add: [{ id: "puppet", number: 3 }] },
      hand: "fn: 10 for puppet",
    },
  },
  stream: {
    type: "spell",
    cost: 2,
    when: {
      in: {
        select: { from: "enemies", number: 1, do: { attack: 3 } },
        add: "remembrance",
      },
    },
  },
  doom: {
    type: "spell",
    cost: 5,
    when: {
      in: {
        select: { from: "artifacts <= 5", number: 2, do: { add: "fragile" } },
      },
    },
  },
  miriam: {
    type: "follower",
    cost: 3,
    attack: 2,
    defence: 3,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { add: ["ambition", "remembrance"] },
    },
  },
  sylvia: {
    type: "follower",
    cost: 6,
    attack: 5,
    defence: 5,
    when: {
      in: "fn: mode 1. draw 2, 2. heal 4",
      e: { select: { from: "enemies", number: 1, do: "remove" } },
      se: { select: { from: "enemies", number: 2, do: "remove" } },
    },
  },
  liam: {
    type: "follower",
    cost: 9,
    attack: 7,
    defence: 7,
    when: {
      in: { summon: [{ id: "greatpuppet", number: 3 }] },
      e: "fn: give all puppet on field protect and out: hit 2",
    },
  },
  alouette: {
    type: "follower",
    cost: 5,
    attack: 2,
    defence: 4,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { select: { from: "artifact <= 5", number: 1, do: "summon" } },
    },
  },
  cannon: {
    type: "spell",
    cost: 5,
    when: {
      in: { add: "ambition" },
      fuse: "fn: attack 2 to random",
    },
  },
  eudie: {
    type: "follower",
    cost: 3,
    attack: 3,
    defence: 3,
    when: {
      in: { draw: 1 },
      e: "fn: get Crest: Eudie, Maiden Reborn.",
    },
  },
  orchis: {
    type: "follower",
    cost: 8,
    attack: 5,
    defence: 5,
    when: {
      in: { summon: [{ id: "lloyd" }] },
      effect: "fn: puppet in field ff bane",
    },
  },
  ralmia: {
    type: "follower",
    cost: 8,
    attack: 2,
    defence: 2,
    when: {
      in: { select: { from: "artifact <= 5", number: 3, do: "summon" } },
      se: {
        to: {
          what: "artifact followers",
          do: { buff: { attack: 1, defence: 1 } },
        },
      },
    },
  },
};
```

I've maintained the same structure as your example, interpreting effects where possible and keeping "fn" descriptions as strings. The formatting follows your pattern with proper indentation and consistent property ordering.

# 2

```js
const cards = {
  // legends rise neutral
  ruby: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { select: { number: 1, from: "field", do: { to: "hand" } }, draw: 1 },
    },
  },
  detective: {
    type: "follower",
    cost: 3,
    attack: 3,
    defence: 3,
    when: {
      out: { add: "lens" },
    },
  },
  goblins: {
    type: "spell",
    cost: 5,
    when: {
      in: { summon: [{ id: "goblin", number: 5 }] },
    },
  },
  apollo: {
    type: "follower",
    cost: 3,
    attack: 1,
    defence: 2,
    when: {
      in: { aoe: 1 },
      e: { aoe: 1 },
    },
  },
  angel: {
    type: "spell",
    cost: 3,
    when: {
      in: { draw: 2 },
    },
  },
  phildau: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      e: { select: { from: "enemies", number: 1, do: "remove" } },
    },
  },
  thunder: {
    type: "spell",
    cost: 4,
    when: {
      in: {
        to: { what: "fn to get the highest atk enemy", do: "remove" },
        draw: 2,
      },
    },
  },
  olivia: {
    type: "follower",
    cost: 7,
    attack: 4,
    defence: 4,
    when: {
      in: { draw: 2, charge: 2, heal: 2 },
      se: { select: { from: "field, not e, not self", number: 1, do: "se" } },
    },
  },
  master: {
    type: "follower",
    cost: 10,
    attack: 10,
    defence: 10,
    when: {
      in: {
        deck: "fn: to a 10 cards deck Ruler of Cocytus.",
      },
    },
  },
  rider: {
    type: "follower",
    cost: 6,
    attack: 10,
    defence: 10,
    when: {
      in: {
        ff: true,
      },
    },
  },
  servant: {
    type: "follower",
    cost: 1,
    attack: 13,
    defence: 13,
  },
  demon: {
    type: "follower",
    cost: 5,
    attack: 9,
    defence: 6,
    when: {
      in: {
        select: { from: "enemies", number: 2, do: { attack: 6 } },
        to: { what: "boss", do: { attack: 6 } },
      },
    },
  },
  judgment: {
    type: "spell",
    cost: 10,
    when: {
      in: {
        do: { what: "fn set boss max hp to 1" },
      },
    },
  },
  // legends rise portal
  elise: {
    type: "follower",
    cost: 1,
    attack: 1,
    defence: 1,
    when: {
      out: { add: "remembrance" },
    },
  },
  dirk: {
    type: "follower",
    cost: 5,
    attack: 5,
    defence: 5,
    when: {
      in: { summon: [{ id: "fortifier" }] },
    },
  },
  hunter: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "ambition" },
      e: { select: { from: "enemies", number: 1, do: { attack: 3 } } },
    },
  },
  assassin: {
    type: "follower",
    cost: 3,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "greatpuppet" },
      with: "fn: give it bane for first puppet follower",
    },
  },
  puppetshield: {
    type: "spell",
    cost: 3,
    when: {
      in: { summon: [{ id: "greatpuppet", number: 2 }] },
    },
  },
  artifact: {
    type: "spell",
    cost: 1,
    when: {
      in: { add: ["ambition", "remembrance"] },
    },
  },
  rukina: {
    type: "follower",
    cost: 4,
    attack: 3,
    defence: 3,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { summon: [{ id: "striker" }] },
    },
  },
  puppeteer: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "puppet" },
      e: { add: "puppet" },
    },
  },
  noah: {
    type: "follower",
    cost: 6,
    attack: 5,
    defence: 6,
    when: {
      in: { add: [{ id: "puppet", number: 3 }] },
      hand: "fn: 10 for puppet",
    },
  },
  stream: {
    type: "spell",
    cost: 2,
    when: {
      in: {
        select: { from: "enemies", number: 1, do: { attack: 3 } },
        add: "remembrance",
      },
    },
  },
  doom: {
    type: "spell",
    cost: 5,
    when: {
      in: {
        select: {
          from: "artifacts <= 5",
          number: 2,
          do: ["summon", { add: "fragile" }],
        },
      },
    },
  },
  miriam: {
    type: "follower",
    cost: 3,
    attack: 2,
    defence: 3,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { add: ["ambition", "remembrance"] },
    },
  },
  sylvia: {
    type: "follower",
    cost: 6,
    attack: 5,
    defence: 5,
    when: {
      in: "fn: mode 1. draw 2, 2. heal 4",
      e: { select: { from: "enemies", number: 1, do: "remove" } },
      se: { select: { from: "enemies", number: 2, do: "remove" } },
    },
  },
  liam: {
    type: "follower",
    cost: 9,
    attack: 7,
    defence: 7,
    when: {
      in: { summon: [{ id: "greatpuppet", number: 3 }] },
      e: "fn: give all puppet on field protect and out: hit 2",
    },
  },
  alouette: {
    type: "follower",
    cost: 5,
    attack: 2,
    defence: 4,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { select: { from: "artifact <= 5", number: 1, do: "summon" } },
    },
  },
  cannon: {
    type: "spell",
    cost: 5,
    when: {
      in: { add: "ambition" },
      fuse: "fn: attack 2 to random",
    },
  },
  eudie: {
    type: "follower",
    cost: 3,
    attack: 3,
    defence: 3,
    when: {
      in: { draw: 1 },
      e: "fn: get Crest: Eudie, Maiden Reborn.",
    },
  },
  orchis: {
    type: "follower",
    cost: 8,
    attack: 5,
    defence: 5,
    when: {
      in: { summon: [{ id: "lloyd" }] },
      with: "fn: puppet in field ff bane",
    },
  },
  ralmia: {
    type: "follower",
    cost: 8,
    attack: 2,
    defence: 2,
    when: {
      in: { select: { from: "artifact <= 5", number: 3, do: "summon" } },
      se: {
        to: {
          what: "artifact followers",
          do: { buff: { attack: 1, defence: 1 } },
        },
      },
    },
  },
};
```

turn these cards into an object like above

cards with three numbers are follower, cost, attack, defence

cards with one number is spell, cost.

for effects that start with fn, keep them as a string.

for other effects, try to interpret its meaning and describe them like above

```
twinbladegoblin 111

in: fn if se in field select enemy attack 4

darkside 2

select field +2/-2

cheretta 222

ability: "protect"

in: fn if se unlocked, +0/+3

reina 755

e: fn e all un e field

hnikar 222

enhance: {cost: 5, do: "e"}

out: fn if self e to random enemy attack 4

odin 742

ability: "ff"

in: select enemy do remove

grimnir 323

ability: "protect"

in: fn Gain Crest: Grimnir, Heavenly Gale.
```

---

```js
const cards = {
  twinbladegoblin: {
    type: "follower",
    cost: 1,
    attack: 1,
    defence: 1,
    when: {
      in: "fn if se in field select enemy attack 4",
    },
  },
  darkside: {
    type: "spell",
    cost: 2,
    when: {
      in: {
        select: { from: "field", do: { buff: { attack: 2, defence: -2 } } },
      },
    },
  },
  cheretta: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    ability: "protect",
    when: {
      in: "fn if se unlocked, +0/+3",
    },
  },
  reina: {
    type: "follower",
    cost: 7,
    attack: 5,
    defence: 5,
    when: {
      e: "fn e all un e field",
    },
  },
  hnikar: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    enhance: { cost: 5, do: "e" },
    when: {
      out: "fn if self e to random enemy attack 4",
    },
  },
  odin: {
    type: "follower",
    cost: 7,
    attack: 4,
    defence: 2,
    ability: "ff",
    when: {
      in: { select: { from: "enemies", number: 1, do: "remove" } },
    },
  },
  grimnir: {
    type: "follower",
    cost: 3,
    attack: 2,
    defence: 3,
    ability: "protect",
    when: {
      in: "fn Gain Crest: Grimnir, Heavenly Gale.",
    },
  },
};
```

# 3

```js
const cards = {
  // legends rise neutral
  ruby: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { select: { number: 1, from: "field", do: { to: "hand" } }, draw: 1 },
    },
  },
  detective: {
    type: "follower",
    cost: 3,
    attack: 3,
    defence: 3,
    when: {
      out: { add: "lens" },
    },
  },
  goblins: {
    type: "spell",
    cost: 5,
    when: {
      in: { summon: [{ id: "goblin", number: 5 }] },
    },
  },
  apollo: {
    type: "follower",
    cost: 3,
    attack: 1,
    defence: 2,
    when: {
      in: { aoe: 1 },
      e: { aoe: 1 },
    },
  },
  angel: {
    type: "spell",
    cost: 3,
    when: {
      in: { draw: 2 },
    },
  },
  phildau: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      e: { select: { from: "enemies", number: 1, do: "remove" } },
    },
  },
  thunder: {
    type: "spell",
    cost: 4,
    when: {
      in: {
        to: { what: "fn to get the highest atk enemy", do: "remove" },
        draw: 2,
      },
    },
  },
  olivia: {
    type: "follower",
    cost: 7,
    attack: 4,
    defence: 4,
    when: {
      in: { draw: 2, charge: 2, heal: 2 },
      se: { select: { from: "field, not e, not self", number: 1, do: "se" } },
    },
  },
  master: {
    type: "follower",
    cost: 10,
    attack: 10,
    defence: 10,
    when: {
      in: {
        deck: "fn: to a 10 cards deck Ruler of Cocytus.",
      },
    },
  },
  rider: {
    type: "follower",
    cost: 6,
    attack: 10,
    defence: 10,
    when: {
      in: {
        ff: true,
      },
    },
  },
  servant: {
    type: "follower",
    cost: 1,
    attack: 13,
    defence: 13,
  },
  demon: {
    type: "follower",
    cost: 5,
    attack: 9,
    defence: 6,
    when: {
      in: {
        select: { from: "enemies", number: 2, do: { attack: 6 } },
        to: { what: "boss", do: { attack: 6 } },
      },
    },
  },
  judgment: {
    type: "spell",
    cost: 10,
    when: {
      in: {
        do: { what: "fn set boss max hp to 1" },
      },
    },
  },
  // legends rise portal
  elise: {
    type: "follower",
    cost: 1,
    attack: 1,
    defence: 1,
    when: {
      out: { add: "remembrance" },
    },
  },
  dirk: {
    type: "follower",
    cost: 5,
    attack: 5,
    defence: 5,
    when: {
      in: { summon: [{ id: "fortifier" }] },
    },
  },
  hunter: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "ambition" },
      e: { select: { from: "enemies", number: 1, do: { attack: 3 } } },
    },
  },
  assassin: {
    type: "follower",
    cost: 3,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "greatpuppet" },
      with: "fn: give it bane for first puppet follower",
    },
  },
  puppetshield: {
    type: "spell",
    cost: 3,
    when: {
      in: { summon: [{ id: "greatpuppet", number: 2 }] },
    },
  },
  artifact: {
    type: "spell",
    cost: 1,
    when: {
      in: { add: ["ambition", "remembrance"] },
    },
  },
  rukina: {
    type: "follower",
    cost: 4,
    attack: 3,
    defence: 3,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { summon: [{ id: "striker" }] },
    },
  },
  puppeteer: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "puppet" },
      e: { add: "puppet" },
    },
  },
  noah: {
    type: "follower",
    cost: 6,
    attack: 5,
    defence: 6,
    when: {
      in: { add: [{ id: "puppet", number: 3 }] },
      hand: "fn: 10 for puppet",
    },
  },
  stream: {
    type: "spell",
    cost: 2,
    when: {
      in: {
        select: { from: "enemies", number: 1, do: { attack: 3 } },
        add: "remembrance",
      },
    },
  },
  doom: {
    type: "spell",
    cost: 5,
    when: {
      in: {
        select: {
          from: "artifacts <= 5",
          number: 2,
          do: ["summon", { add: "fragile" }],
        },
      },
    },
  },
  miriam: {
    type: "follower",
    cost: 3,
    attack: 2,
    defence: 3,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { add: ["ambition", "remembrance"] },
    },
  },
  sylvia: {
    type: "follower",
    cost: 6,
    attack: 5,
    defence: 5,
    when: {
      in: "fn: mode 1. draw 2, 2. heal 4",
      e: { select: { from: "enemies", number: 1, do: "remove" } },
      se: { select: { from: "enemies", number: 2, do: "remove" } },
    },
  },
  liam: {
    type: "follower",
    cost: 9,
    attack: 7,
    defence: 7,
    when: {
      in: { summon: [{ id: "greatpuppet", number: 3 }] },
      e: "fn: give all puppet on field protect and out: hit 2",
    },
  },
  alouette: {
    type: "follower",
    cost: 5,
    attack: 2,
    defence: 4,
    when: {
      in: { add: ["ambition", "remembrance"] },
      e: { select: { from: "artifact <= 5", number: 1, do: "summon" } },
    },
  },
  cannon: {
    type: "spell",
    cost: 5,
    when: {
      in: { add: "ambition" },
      fuse: "fn: attack 2 to random",
    },
  },
  eudie: {
    type: "follower",
    cost: 3,
    attack: 3,
    defence: 3,
    when: {
      in: { draw: 1 },
      e: "fn: get Crest: Eudie, Maiden Reborn.",
    },
  },
  orchis: {
    type: "follower",
    cost: 8,
    attack: 5,
    defence: 5,
    when: {
      in: { summon: [{ id: "lloyd" }] },
      with: "fn: puppet in field ff bane",
    },
  },
  ralmia: {
    type: "follower",
    cost: 8,
    attack: 2,
    defence: 2,
    when: {
      in: { select: { from: "artifact <= 5", number: 3, do: "summon" } },
      se: {
        to: {
          what: "artifact followers",
          do: { buff: { attack: 1, defence: 1 } },
        },
      },
    },
  },
};
```

turn these cards into an object like above

cards with three numbers are follower, cost, attack, defence

cards with one number is spell, cost.

for effects that start with fn, keep them as a string.

for other effects, try to interpret its meaning and describe them like above

```
maven 645

in: summon striker, add rememberance

e: summon striker, add rememberance

puppetcat 111

ability: f

in: fn If there's a super-evolved allied follower on the field, add a Puppet to your hand and give it +3/+0.

catapultamulet 2

in: add ambition

start: fn  (3): Destroy this card. Select an Artifact follower in your hand that costs 5 or less, summon an exact copy of it, and give the exact copy "At the end of your opponent's turn, destroy this card."

vier 211

ability: bane

in: select from "hand puppet" do transform "slayer"

achim 533

e: select "enemy <=4 atk" do [remove, summon]

icarus 1

in: select "hand artifact", do "fn give it Rush and "Last Words: Draw a card"

carnelia 222

in: add rememberance

e: select "hand artifact" do "fn give it Ward and "Can't be destroyed by abilities"

synchearts 6

in: summon [lloyd, victoria]

zwei 533

in: summon victoria

with: fn Whenever an allied Puppetry follower enters the field, give it Ward.

e: summon greatpuppet

karula 654

in: select "hand artifact <= 5" do summon

se: fn Give this follower "Can attack 2 times per turn."
```

---

```js
const cards = {
  maven: {
    type: "follower",
    cost: 6,
    attack: 4,
    defence: 5,
    when: {
      in: { summon: [{ id: "striker" }], add: "remembrance" },
      e: { summon: [{ id: "striker" }], add: "remembrance" },
    },
  },
  puppetcat: {
    type: "follower",
    cost: 1,
    attack: 1,
    defence: 1,
    ability: "f",
    when: {
      in: "fn If there's a super-evolved allied follower on the field, add a Puppet to your hand and give it +3/+0.",
    },
  },
  catapultamulet: {
    type: "spell",
    cost: 2,
    when: {
      in: { add: "ambition" },
      start:
        'fn (3): Destroy this card. Select an Artifact follower in your hand that costs 5 or less, summon an exact copy of it, and give the exact copy "At the end of your opponent\'s turn, destroy this card."',
    },
  },
  vier: {
    type: "follower",
    cost: 2,
    attack: 1,
    defence: 1,
    ability: "bane",
    when: {
      in: { select: { from: "hand puppet", do: { transform: "slayer" } } },
    },
  },
  achim: {
    type: "follower",
    cost: 5,
    attack: 3,
    defence: 3,
    when: {
      e: {
        select: {
          from: "enemies <=4 atk",
          number: 1,
          do: ["remove", "summon"],
        },
      },
    },
  },
  icarus: {
    type: "spell",
    cost: 1,
    when: {
      in: {
        select: {
          from: "hand artifact",
          do: 'fn give it Rush and "Last Words: Draw a card"',
        },
      },
    },
  },
  carnelia: {
    type: "follower",
    cost: 2,
    attack: 2,
    defence: 2,
    when: {
      in: { add: "remembrance" },
      e: {
        select: {
          from: "hand artifact",
          do: 'fn give it Ward and "Can\'t be destroyed by abilities"',
        },
      },
    },
  },
  synchearts: {
    type: "spell",
    cost: 6,
    when: {
      in: { summon: [{ id: "lloyd" }, { id: "victoria" }] },
    },
  },
  zwei: {
    type: "follower",
    cost: 5,
    attack: 3,
    defence: 3,
    when: {
      in: { summon: [{ id: "victoria" }] },
      with: "fn Whenever an allied Puppetry follower enters the field, give it Ward.",
      e: { summon: [{ id: "greatpuppet" }] },
    },
  },
  karula: {
    type: "follower",
    cost: 6,
    attack: 5,
    defence: 4,
    when: {
      in: { select: { from: "hand artifact <=5", do: "summon" } },
      se: 'fn Give this follower "Can attack 2 times per turn."',
    },
  },
};
```
