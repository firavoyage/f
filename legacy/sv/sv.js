/**
 * symbol: a big number + count++
 * (for exporting to json, which does not support symbol())
 * (current: symbol())
 * [a, b, c] = define()
 */

/**
 * ui = f(state)
 *
 * status: landing/loading/main/battle
 */

/**
 * card
 * name (omitted temp)
 * id: symbol
 * rarity: undefined
 * type: follower | spell | amulet
 * category ("type"): undefined | string
 * cost
 * attack
 * defence
 * when: {[keyword]: effect}
 */

/**
 * keyword:
 *
 * in
 * out
 * start
 */

/**
 * effect:
 * select {number, from}
 * draw
 * heal
 * aoe
 * ...
 * special
 */

/**
 * game
 * deck (in random order)
 * hand: cardid[], max 9
 * field: the living[] (stats may get modified), max 5
 * badges: badge[]
 * leader: {hp, yellow, purple}
 * cards on the field may contain their own states.
 */

const { map } = f;

const { h, p, e, r } = voyage;

/**
 * Shuffles an array using the Fisher-Yates algorithm and returns a new shuffled array.
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} A new shuffled array.
 * @example
 * // Returns a shuffled array (results may vary)
 * shuffle([1, 2, 3, 4]);
 * // Example output: [3, 1, 4, 2]
 *
 * // Works with any array type
 * shuffle(['apple', 'banana', 'cherry']);
 * // Example output: ['banana', 'cherry', 'apple']
 */
const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const repeat = (n) => Array.from({ length: n });

// symbol, define

// symbols can only be compared

// const symbol = (name) => Symbol();
const symbol = (name) => name;

const define = () => new Proxy({}, { get: (obj, prop) => symbol(prop) });

// currently using string instead

const { follower, spell, amulet } = define();

const { hand, field, leader, enemies, boss } = define();

// const { f, ff } = define();

/**
 * first, write (design) these cards in json
 *
 * it may takes some time. be patient. you have time.
 */

// wrap in a fn, so everytime it will be a new object
const cards = (id) =>
  ({
    // legends rise neutral
    ruby: {
      type: "follower",
      cost: 2,
      attack: 2,
      defence: 2,
      when: {
        in: {
          select: { number: 1, from: "field", do: { to: "hand" } },
          draw: 1,
        },
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
        e: "fn: give all puppet on field ward and out: hit 2",
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
    // inf evo neutral
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
      ability: "ward",
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
      ability: "ward",
      when: {
        in: "fn Gain Crest: Grimnir, Heavenly Gale.",
      },
    },
    // inf evo portal
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
            do: 'fn give it ward and "Can\'t be destroyed by abilities"',
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
        with: "fn Whenever an allied Puppetry follower enters the field, give it ward.",
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
  }[id]);

const exampledeck = { ruby: 5, apollo: 5 };

/**
begin
card
  c a d
  ability ""[]
  when [time]: effect
init
  deck -> shuffled deck (card stack)
  draw 4
  (swap)
state {a, b, turn: "a"}
a
  leader {character, health}
  badges []
  field card[]
  hand card[]
  deck card[]
attack
end turn
 */

/**
 * let the player of the turn play
 * draw a card
 * play card, attack, card ability (start, merge)
 * play card: can? in
 * attack: can? fight (reduce hp), killed? out
 * after each action: leader and boss hp?
 * (abilities like start, loop are special fn that processes the state)
 * switch turn
 */

const buttons = ({ actions }) => {
  return map(actions, ([name, fn]) => h("button", { "@click": fn }, name));
};

const main = ({ status }) => {
  const actions = {
    // todo: select deck
    start() {
      status("battle");
    },
  };
  return h(buttons, { actions });
};

const constants = {
  initialcardnumber: 4,
  handmax: 9,
  fieldmax: 5,
  playpointsmax: 10,
};

const player = ({ player, name }) => {
  return h(
    // leader
    // (hidden) deck
    // (shown now) hand
    // field
    // (if there is any) badges
    h("p", name, player.leader.character, player.leader.health),
    h("p", "playpoints:", player.playpoints),
    h("p", "hand:", player.hand.length),
    h("p", "field:", player.field.length),
    player.badges.length > 0 && h("p", "badges:", player.badges.length)
  );
};

/*
board is only used for view. 
for actions like play, attack, start, merge...
use path(state) instead
*/
const board = ({ state }) => {
  return h(
    h(player, { player: state.a, name: "player a" }),
    h(player, { player: state.b, name: "player b" }),
    h("p", `turn: ${state.turn}`),
    state.result && h("p", state.result)
  );
};

// (pure) -> params of effects
const next = (state) => {
  const paths = {};

  // play, attack, evolve, card ability
  return paths;
};

const init = ({ a, b }) => {
  // a: deck, b: deck
  // deck: {[id]: number}
  const player = (deck) => {
    let shuffled = [];
    map(deck, ([id, number]) => {
      for (const _ of repeat(number)) {
        shuffled.push(cards(id));
      }
    });
    shuffled = shuffle(shuffled);
    const player = {
      // todo: "portal"
      leader: { character: "portal", health: 20 },
      badges: [],
      field: [],
      hand: [],
      deck: shuffled,
      playpoints: 0,
    };
    // draw cards
    for (const _ of repeat(constants.initialcardnumber)) {
      player.hand.push(player.deck.pop());
    }
    return player;
  };
  const state = {
    a: player(a),
    b: player(b),
    turn: "a",
    // the next turn should begin
    pending: true,
    result: false,
  };
  return state;
};

const battle = ({ status }) => {
  const state = p(() => init({ a: exampledeck, b: exampledeck }));

  // effects triggered by action
  const effects = (effect, ...props) =>
    state.produce((state) => {
      const player = state[state.turn];
      const opponent = state.turn == "a" ? "b" : "a";
      const e = {
        begin() {
          if (player.playpoints < constants.playpointsmax) {
            player.playpoints++;
          }
          e.draw(1);
        },
        end() {
          state.turn = opponent;
          state.pending = true;
        },
        draw(n) {
          for (const _ of repeat(n)) {
            if (player.deck.length == 0) {
              state.result = `${opponent} win`;
              break;
            }
            player.hand.push(player.deck.pop());
            if (player.hand.length > constants.handmax) {
              player.hand.pop();
            }
          }
        },
      };
      e[effect](...props);
    });

  // buttons of direct interaction
  const actions = {
    ...next(state()),
    end() {
      effects("end");
    },
    exit() {
      status("main");
    },
  };
  e(() => {
    const s = state();

    // debug
    console.log(s);

    if (s.pending) {
      state("pending", false);
      effects("begin");
    }
  }, [state]);
  return h(
    h(board, { state: state() }),
    !state().pending && h(buttons, { actions })
  );
};

const app = () => {
  // now only support main and battle
  // "landing"|"loading"|"main"|"battle"
  const status = p("main");
  const pages = { main, battle };
  return h(pages[status()], { status });
};

r(app, document.getElementsByClassName("app")[0]);
