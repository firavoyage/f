https://chat.deepseek.com/a/chat/s/ce3764cf-0d07-4348-abed-9c0d4eb4e83e

# 1

how to create a riichi majhong ai with javascript. tell me your idea instead of the code.

---

Of course! Creating a Riichi Mahjong AI is a fascinating and complex challenge. It's significantly more complex than a simple win/loss game due to the layers of strategy involving concealed information, probability, scoring, and risk management.

Here is a conceptual breakdown of how I would approach building a Riichi Mahjong AI in JavaScript, focusing on the ideas and architecture rather than the code.

### Core Philosophy: The Three-Layer AI

The AI shouldn't be a single monolithic function. Instead, I would structure it as three distinct layers that communicate with each other:

1.  **The Perception Layer:** Understands the current game state.
2.  **The Evaluation Layer:** Analyzes the state and generates possible actions with scores.
3.  **The Decision Layer:** Makes the final choice based on scores, risk tolerance, and overall strategy.

---

### 1. The Perception Layer (The "Eyes" of the AI)

This layer's job is to translate the raw game data (the visible board state) into a structured, queryable internal model.

**Key Data Structures it would build and maintain:**

- **The Hand Model:** Your own 13 (or 14) tiles, represented in a way that's easy to analyze (e.g., sorted by suit and number, or as a "tile count map").
- **The Public Knowledge Model:**
  - **Discards:** Every tile discarded by every player, in order. This is crucial for calculating _genbutsu_ (100% safe tiles) and _suji_ (middle-tile safety).
  - **Calls (`pon`, `chi`, `kan`):** The open melds of every player. This tells you about their hand's composition and potential yaku.
  - **Dora Indicators:** The revealed dora and, importantly, it must track _ura-dora_ after a riichi.
- **The Inferred Knowledge Model (The "Mental Map"):**
  - **Live Tile Pool:** An estimation of how many of each tile remain in the wall and in opponents' hands. As tiles are drawn and discarded, this model is updated. (e.g., If you see three White Dragons in discards, you know the fourth is 100% safe).
  - **Opponent Threat Level:** Based on their discards and calls, you can infer if they are in tenpai, what kind of hand they might be building (e.g., all terminals, half-flush), and how dangerous they are.

---

### 2. The Evaluation Layer (The "Brain")

This is the core of the AI. For any given situation, it generates a list of possible actions and assigns a score to each. This layer is composed of several specialized modules.

**A. Hand Evaluation Module (The Offensive Engine)**

This module's sole job is to answer: "How good is my hand right now, and what should I aim for?"

- **Shanten Calculation:** This is the most critical function. It doesn't just calculate the number of tiles needed for tenpai (1-shanten), but the number needed for a complete hand (4-shanten, 3-shanten, etc.). The AI's primary goal is to minimize shanten.
- **Tile Efficiency (待ちの効率):** For every tile in my hand, the module simulates discarding it. It then calculates:
  - How many types of tiles will improve my hand (reduce shanten)?
  - How many total tiles of those types are still live in the pool?
  - The tile that leaves me with the highest number of possible improvements is the most "efficient" discard.
- **Value & Yaku Potential:** Efficiency isn't everything. Discarding a tile that ruins a potential valuable Yaku (like Pinfu, Tanyao, or a flush) is bad. This module weighs efficiency against the potential future score of the hand. It will prefer a slightly less efficient path if it leads to a hand with 2-3 yaku instead of a cheap, quick one.

**B. Danger Assessment Module (The Defensive Engine)**

This module's job is to answer: "How likely am I to deal-in if I discard this tile?"

- **Furiten & Genbutsu:** Any tile discarded by a player is 100% safe against that player. This is the first and most basic check.
- **Suji (筋) Theory:** Analyzes discards to infer safety. If a player discards a `4`, the `1` and `7` become somewhat safer (and vice versa). The AI would assign a "safety rating" to tiles based on this.
- **Opponent Hand Reading:** A more advanced feature. By analyzing the sequence and type of an opponent's discards, the AI can make educated guesses:
  - Early discards of terminals/honors suggest they are going for a Tanyao (all simples) hand.
  - A sudden shift from safe discards to risky-looking ones often indicates they have reached tenpai.
  - The module would output a "Danger Score" for every tile in my hand against every opponent.

**C. Riichi Decision Module**

This is a special-case evaluator. It decides whether to call Riichi.

- **Inputs:** Hand value (score estimate), tile wait quality (are you waiting on 1 tile or 8?), number of safe tiles in my hand for later turns, the current score situation (am I leader or desperate?).
- **Output:** A "Riichi Desirability" score. A closed hand with a 2-sided wait and a potential dora is a strong candidate. A bad wait while you're in 1st place might not be.

---

### 3. The Decision Layer (The "Captain")

This layer takes the outputs from the Evaluation Layer and makes the final call. It embodies the overall strategy.

- **The Aggression Parameter:** This is a tunable value (e.g., from 0 to 1) that dictates the AI's playstyle.
  - **Aggressive (e.g., 0.8):** Favors the Hand Evaluation score heavily. Will push for its own hand even at moderate risk. More likely to call Riichi.
  - **Defensive (e.g., 0.2):** Favors the Danger Assessment score heavily. Will fold its hand (sacrifice progress for safety) at the first sign of danger from an opponent.
- **Game Phase Awareness:** The AI's aggression should change based on the round.
  - **Early Game:** High efficiency, lower risk tolerance.
  - **Late Game (many tiles discarded):** Must become more defensive. The value of a safe discard is much higher.
  - **End Game (last few turns):** If far behind, might become hyper-aggressive. If in the lead, will become hyper-defensive, even discarding from a tenpai hand to avoid a deal-in.
- **Scoreboard Awareness:** The AI's decisions must be influenced by the current scores. Is it the last hand and I'm 2000 points behind the leader? Then I must win at all costs, even if it's a risky, cheap hand. If I'm 20,000 points ahead, my only goal is to not deal-in.

### Putting It All Together: The Game Loop

For every turn, the AI would execute this flow:

1.  **Perception:** Update all internal models with the latest game event (a new discard, a drawn tile, etc.).
2.  **Generate Actions:** List all legal actions (Discard Tile X, Call Chi, Call Pon, Call Riichi, etc.).
3.  **Evaluate Actions:**
    - For each possible **discard**, the Hand Evaluation module gives it an **Offensive Score** (how much it improves my hand), and the Danger Assessment module gives it a **Danger Score**.
    - For a **call (Chi/Pon)**, the Hand Evaluation module calculates the immediate shanten improvement but also penalizes it for making the hand open (fewer yaku, cannot call Riichi).
    - For **Riichi**, the Riichi Module provides a score.
4.  **Make Decision:** The Decision Layer combines these scores. A simplified formula could be:
    `Final_Score(Action) = (Offensive_Score * Aggression) - (Danger_Score * (1 - Aggression))`
    The action with the highest `Final_Score` is chosen.

### Advanced Ideas for Later

- **Monte Carlo Tree Search (MCTS):** For the most critical decisions (e.g., a very risky discard), the AI could simulate hundreds of random future game states to see which action most often leads to a win vs. a deal-in.
- **Machine Learning:** A neural network could be trained to replace the Hand Evaluation or Danger Assessment modules, learning tile efficiency and safety directly from thousands of professional game records.

This layered, modular approach keeps the code clean, allows you to improve individual components (like making the hand reader smarter), and easily create AIs with different personalities by tweaking the `Aggression` parameter in the Decision Layer.

# 2

give me a step by step guide

---

Here's a step-by-step guide to creating a Riichi Mahjong AI in JavaScript:

## Phase 1: Foundation & Core Systems

### Step 1: Set Up Basic Data Structures

- Create tile representation (suit + number/honor type)
- Build hand representation (13-14 tiles)
- Create game state object (scores, round, wind, dora indicators)
- Set up discard pool tracking per player

### Step 2: Implement Basic Game Logic

- Shuffle and wall initialization
- Tile drawing/discarding mechanics
- Basic hand validation (legal moves)
- Turn order and flow control

### Step 3: Build Hand Analysis Engine

- Create **shanten calculator** (most critical component)
- Implement hand decomposition (melds, pairs, isolated tiles)
- Build wait pattern detection
- Create yaku detection system

## Phase 2: Core AI Systems

### Step 4: Develop Tile Efficiency Calculator

- For each possible discard, calculate:
  - Number of improving tiles
  - Average shanten reduction
  - Future flexibility
- Create tile acceptance table (ukeire)

### Step 5: Implement Defensive Analysis

- Build furiten detection
- Create suji (mid-tile safety) analyzer
- Track opponent discards for pattern recognition
- Calculate tile danger scores based on:
  - Discard history
  - Opponent calls
  - Game phase

### Step 6: Create Evaluation Framework

- Develop scoring system for potential hands
- Balance efficiency vs. value vs. safety
- Implement hand potential estimation
- Create decision weights for different game phases

## Phase 3: Advanced Features

### Step 7: Build Calling Logic

- Evaluate chi/pon/kan opportunities:
  - Immediate shanten improvement
  - Hand value impact (open vs closed)
  - Defensive considerations
- Create call priority system

### Step 8: Implement Riichi Strategy

- Develop riichi decision algorithm:
  - Wait quality assessment
  - Score position analysis
  - Dora/ura-dora potential
  - Defensive posture after riichi

## Phase 4: Integration & Polish

### Step 9: Create Decision Engine

- Build the main AI controller that:
  - Gathers inputs from all subsystems
  - Applies strategic weights
  - Makes final move decisions
  - Handles edge cases

### Step 10: Add Strategic Personality

- Implement configurable aggression levels
- Create different AI "personas" (aggressive, defensive, balanced)
- Add adaptability based on game situation

### Step 11: Testing & Refinement

- Create simulation framework
- Test against basic scenarios
- Tune weights and parameters
- Add learning from mistakes (optional)

## Implementation Order Priority:

**Must Have (MVP):**

1. Shanten calculation
2. Basic tile efficiency
3. Simple defensive play
4. Core game flow

**Should Have:** 5. Advanced defense (suji, kabe) 6. Calling logic 7. Riichi decisions

**Could Have:** 8. Opponent modeling 9. Advanced strategies 10. Machine learning components

## Key Technical Challenges to Focus On:

1. **Efficient Shanten Calculation** - This is computationally intensive, so optimize early
2. **Real-time Decision Making** - AI should respond quickly
3. **State Management** - Game state can be complex with multiple players
4. **Testing Framework** - Essential for verifying AI decisions

## Recommended Development Approach:

1. Start with a rule-based system first
2. Use test cases from professional games
3. Build a visualization tool to see AI's reasoning
4. Implement Monte Carlo methods for critical decisions later
5. Focus on making the AI explainable (why it chose a move)

Would you like me to elaborate on any specific step or discuss the implementation details for particular components like the shanten calculator?
