how could bisq be safe. if somone pay fiat. the platform doesn't know. if they pay, escrow should go to the buyer. if they don't escrow should be returned. as long as there's human involved it can easily go wrong

2:03 pm

Bisq manages the risk of trading with strangers by replacing trust in people with **economic incentives** and **cryptographic locks**. While it cannot directly "see" your bank account, it uses a multi-layered security model to ensure neither party can easily cheat without losing more money than they would gain.

1\. Game Theory: The Security Deposit

Every trade requires both the buyer and the seller to lock a **Bitcoin security deposit** into a 2-of-2 multisignature address alongside the trade amount.

- **The Incentive**: If either party acts dishonestly (e.g., the buyer doesn't pay or the seller won't release the BTC), they risk losing their deposit.
- **The Result**: Scamming usually costs more in lost deposits than the value of the trade itself, making it mathematically unprofitable for bad actors.

2\. Multisig Escrow: The Cryptographic Lock

Bisq uses **2-of-2 Multi-Signature** (multisig) wallets. This means both the buyer and the seller must sign the transaction to release the funds.

- **No Central Custody**: Bisq never holds your money. The Bitcoin stays on the blockchain, locked by both your keys.
- **Wait Period**: For fiat trades, the Bitcoin remains locked until the seller confirms receipt of payment.

3\. Human Intervention: The 3-Layer Dispute System

Since "human error" is exactly what you’re worried about, Bisq has a tiered resolution system to handle it when things go wrong:

- **Layer 1: Trader Chat**: Most issues are minor (like a late bank transfer) and are solved by simple, encrypted direct communication.
- **Layer 2: Mediation**: A neutral third-party mediator reviews evidence (like bank statements via [PageSigner](https://docs.bisq.network/trading-rules.html)) and suggests a fair payout.
- **Layer 3: Arbitration**: As a last resort, an arbitrator can move the locked funds to the [Bisq DAO](https://bisq.network/blog/bisq-v1-2-released/) through a time-locked transaction. The DAO then votes to reimburse the honest party, often using funds from the dishonest party's forfeited deposit.

4\. Mitigating Chargeback Risk

Bisq only supports **"hard" payment methods** that are difficult to reverse, such as [SEPA Instant](https://www.reddit.com/r/bisq/comments/fg7f7g/how%5Fdoes%5Fbisq%5Fstop%5Fscamming/) or Zelle. It explicitly avoids high-risk methods like PayPal or credit cards to prevent "chargeback scams".

Are you worried about a **specific payment method** like bank transfers, or are you more concerned about the **arbitration process** being biased?

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://docs.bisq.network/trading-rules.html)\
  Trading Rules and Dispute Resolution\
  Bitcoin Sellers. Bitcoin sellers must: \* Click Confirm payment after receiving payment. Sellers have until the end of the maximum ...\
  Bisq
- [link](https://bisq.network/blog/bisq-v1-2-released/)\
  Bisq v1.2 Launches with New Trade Protocol and ...\
  Either trader can publish this transaction after 10 days (altcoin trades) or 20 days (fiat trades). This transaction is required f...\
  Bisq
- [link](https://bisq.network/blog/trade-protocols/)\
  Bisq Trade Protocols\
  In case of a dispute, two resolution levels were introduced: \* Mediation. The mediator helps traders find a cooperative payout. Th...\
  Bisq

Show all

about human intervention part, I think it definitely can go wrong if both are determined and skilled

2:08 pm

You’re right to be skeptical. If two humans are both "determined and skilled," they are essentially playing a high-stakes game of poker with the system. Bisq's security isn't "perfect"—it's designed to be **unprofitable** for those experts to cheat.

Here is how Bisq handles the specific "human" vulnerabilities you're thinking of:

1\. The "Blackmail" Vulnerability

In a pure 2-of-2 multisig system, a skilled attacker could try to "extort" an honest trader by refusing to sign the payout transaction unless they get a bigger cut. They might say, _"If you don't give me 20% of your BTC, I'll never sign, and we both lose 100%."_

- **The Fix**: Bisq uses **Time-Locked Payouts**. If the trade deadlocks, after a set time (e.g., 20 days), the funds are automatically sent to a "donation address" (burned). This removes the attacker's leverage; they can't "hold out" forever to get your money because the money eventually disappears for _both_ of you.

2\. Bribery of the Mediator

You might worry that a skilled scammer could just bribe the mediator to rule in their favor.

- **The Fix**:
  - **Mediators have "Skin in the Game"**: They must lock up a significant amount of [BSQ (Bisq's DAO token)](https://bisq.wiki/Frequently%5Fasked%5Fquestions) as a bond. If they are caught being biased or corrupt, the DAO can vote to confiscate their entire bond.
  - **Limited Power**: A mediator cannot actually _move_ the money. They only suggest a solution. If you think the mediator is skilled but corrupt, you simply **reject** their suggestion and escalate to arbitration.

3\. Sophisticated Evidence Forgery

A skilled attacker might use Photoshop or "inspect element" to create a fake bank statement showing they sent the money.

- **The Fix**: Bisq uses [PageSigner](https://docs.bisq.network/trading-rules.html) or video screen-sharing in disputes. These tools are much harder to fake than a static PDF because they provide cryptographic proof that the data came directly from the bank's server.

4\. The "Long Game" (Reputation)

A very skilled attacker could build up a "good" history over months just to pull one big heist.

- **The Fix**: **Trade Limits**. New accounts or accounts without a long history of successful trades are restricted to very small amounts. By the time an attacker is "allowed" to trade a large enough amount to make a heist worthwhile, they have usually invested more in time, fees, and security deposits than the heist is worth.

Where it _actually_ goes wrong

The system's real weakness isn't "skilled" manipulation—it's usually **user error** or **external systems**:

- **Bank Reversals**: A bank might reverse a "fiat" payment weeks later. Bisq can't stop the bank.
- **Software Exploits**: In 2020, an attacker found a flaw in how the protocol verified "donation addresses" and stole ~3 BTC.

**Do you feel like the "security deposit" is enough of a deterrent for you, or does the idea of "burning" your money to stop an extortionist feel like a lose-lose?**

- [link](https://bisq.network/statement-security-vulnerability-april-2020)\
  Statement on Critical Security Vulnerability - Bisq\
  About 24 hours ago, we discovered that an attacker was able to exploit a flaw in the Bisq trade protocol, targeting individual tra...\
  Bisq
- [link](https://bisq.network/blog/trade-protocols/)\
  Bisq Trade Protocols\
  Mediation. The mediator helps traders find a cooperative payout. The mediator has no control over the funds and cannot enforce any...\
  Bisq
- [link](https://bisq.wiki/Dispute%5FResolution%5Fin%5FBisq%5F1)\
  Dispute Resolution in Bisq 1\
  Mediation is expected to be the best resolution for both traders. If a trade goes to arbitration, the arbitrator will pay out the ...\
  Bisq Wiki

Show all

if one doesn't pay or one has already received, they can do whatever they want, even reasonable boilerplates. how does the deposit work. donated? or paid? what if they just do allowed things with corp style text just to waste your time

2:15 pm

In Bisq, the security deposit isn't just a "good faith" gesture; it is a **pre-signed financial penalty** used to enforce the protocol when one party is uncooperative.

1\. How the Deposit Works in a Dispute

When a trade is taken, both parties lock a deposit (typically 15-50% of the trade value) into a [2-of-2 multisig escrow](https://bisq.wiki/Security%5Fdeposit).

- **Successful Trade**: Both deposits are returned automatically.
- **Mediation (Soft Resolution)**: If someone is being difficult (e.g., late payment), a mediator can suggest a payout where a portion of the offending party's deposit is [paid directly to the victim](https://bisq.wiki/Table%5Fof%5Fpenalties) as compensation for their time and risk.
- **Arbitration (Hard Resolution)**: If the "skilled" bad actor refuses to cooperate with the mediator, you move to arbitration. At this stage, the entire trade amount plus deposits are [sent to a donation address](https://bisq.wiki/Arbitration) (effectively "donated" to the DAO's Burningmen).
  - **The Reimbursement**: Once the arbitrator confirms you were the victim, they [personally reimburse you](https://bisq.wiki/Arbitrator) the BTC you are owed (your trade amount + your deposit).
  - **The Penalty**: The bad actor gets **nothing** back—their deposit and trade funds stay in the donation pool.

2\. Handling "Professional" Time-Wasters

If a trader uses "corp-style" text or reasonable-sounding excuses just to lock up your funds (e.g., waiting for Bitcoin's price to move), they are still bound by the **Trade Period**.

- **Fixed Deadlines**: Every payment method has a strict time limit (e.g., [4 days for SEPA](https://docs.bisq.network/trading-rules.html)).
- **Strict Penalties**: Bisq has a Table of Penalties for specific "allowed but annoying" behaviors. For example:
  - **Late Payment**: 5% to 15% of the trade amount is deducted from the deposit and paid to the counterparty.
  - **Incorrect Amount/Method**: Up to 10% penalty.
  - **Unresponsive**: If they ignore the mediator for a certain period, they are found at fault and lose their entire deposit.

3\. The "Determined Scammer" Problem

Even if a scammer is skilled at lying, they cannot "do whatever they want" because they **cannot move the Bitcoin** once it’s in escrow.

- **Locked Assets**: The Bitcoin is stuck. Their "reasonable boilerplate" text won't help them if they cannot prove the fiat transfer happened (or didn't happen) using cryptographic evidence like PageSigner.
- **Mathematical Loss**: To even _start_ a trade to waste your time, they must lock up their own Bitcoin. If they act in bad faith and lose that deposit, they have essentially paid a high price just to annoy you.

**Are you concerned that a mediator might be tricked by "corporate speak" into thinking a delay is legitimate, or do you want to know how to increase the deposit requirements to filter out low-quality traders?**

- [link](https://bisq.wiki/Arbitration)\
  Arbitration - Bisq Wiki\
  Then it covers the process in more detail, including its motivations, how all the components work together, and how the process is...\
  Bisq Wiki
- [link](https://bisq.wiki/Dispute%5FResolution%5Fin%5FBisq%5F1)\
  Dispute Resolution in Bisq 1\
  If you're trading with an unresponsive peer or feel the mediator's suggestion was unfair, publish the time-locked transaction as s...\
  Bisq Wiki
- [link](https://bisq.network/blog/trade-protocols/)\
  Bisq Trade Protocols\
  In case of a dispute, two resolution levels were introduced: \* Mediation. The mediator helps traders find a cooperative payout. Th...\
  Bisq

Show all

do they use the donated fund or just throw away

2:17 pm

The short answer is: **they are not thrown away.** The funds are used to strengthen the protocol by removing BSQ (Bisq’s DAO token) from circulation, which essentially "recycles" the value into the system to pay for your reimbursement.

Here is exactly what happens to those "donated" funds:

1\. The "Burning Men" Protocol

When a trade escalates to arbitration, all locked funds (trade amount + deposits) are sent to a "donation address" controlled by **Burning Men** (vetted contributors).

- **The Conversion**: These Burning Men use that Bitcoin to [buy BSQ on the open market](https://bisq.wiki/Donation%5FAddress%5FOwner).
- **The Burn**: The BSQ they buy is then **burned** (permanently destroyed). This reduces the total supply of BSQ, making the remaining tokens more valuable.

2\. How You Get Your Money Back

Because the system "captured" value by burning tokens, the [Bisq DAO](https://docs.bisq.network/dao/overview) can now issue **new BSQ** to reimburse you without causing inflation.

- **The Payout**: If the arbitrator decides you are the victim, you are [personally reimbursed](https://docs.bisq.network/trading-rules.html) your trade amount and deposit.
- **The Method**: Usually, the arbitrator pays you out of their own pocket in BTC first to keep things fast. They then ask the DAO to pay them back in BSQ, which they sell to get their BTC back.

3\. Why Not Just Throw It Away?

If the money was simply "thrown away" (sent to an unspendable address), it would be "Mutual Assured Destruction," but it wouldn't help the victim. By using this [reimbursement cycle](https://bisq.wiki/Arbitrator):

- **The Scammer** loses everything (their deposit and their BTC).
- **The Victim** gets 100% of their money back (trade amount + their deposit).
- **The Network** stays balanced because the BTC taken from the scammer offsets the new tokens created to pay the victim.

4\. Recent Changes (Since 2023)

Note that for trades starting after January 2023, the [Arbitration Winner](https://bisq.wiki/Dispute%5FResolution%5Fin%5FBisq%5F1) generally only receives their **trade amount + their own deposit**. You no longer get the scammer's deposit as "extra" profit for your trouble. This change was made to prevent people from trying to "bait" others into arbitration just to steal their deposits.

Would you like to know more about how the **DAO voting** works to approve these reimbursements, or are you satisfied with how the "recycling" works?