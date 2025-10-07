# sv cards

> enemy: opposite follower
>
> boss: opposite leader
>
> aoe: dmg to all enemies
>
> in: when get into the field
>
> out: when get out of the field
>
> evo: evolution
>
> ee: extra evolution
>
> charge: add powerpoints
>
> f: fast, can attack enemies at the entering turn
>
> ff: extra fast, can attack enemies and the boss at the entering turn

only includes neutral and portal cards for testing.

ref 0

https://shadowverse-wb.com/en/cards/

ref 1

the game (netease server)

ref 2

https://shadowverse.fandom.com/wiki/Category:Cards_by_class

## pack.the beginning of the legend.neutral:

lubi 2 2 2

in: select a card from the field, return it to hand and draw 1

detective 3 3 3

out: draw magnifier

magnifier 2

start: remove itself. select an enemy, clear its guard effect.

goblins 5

summon 5 goblin

goblin 1 1 2

apolo 3 1 2

in: aoe 1

evo: same as in

angel 3

draw 2

fedea 2 2 2

evo: select 1 enemy, remove it

lightning 4

remove the enemy of highest hp, aoe 1

olive 7 4 4

in: draw 2, heal 2, charge 2

ee: select 1 not evolved, ee it

master 10 10 10

in: turn the deck into a deck of 10 card of master

master general 6 10 10

type: master

ff

master footman 1 13 13

type: master

master evil 5 9 6

type: master

in: select 2 enemies, dmg 6 to them and the boss

master judgement 10

type: master

set boss max hp to 1

## ...

<!-- first, define the first neutral cards in js -->

omitted. copying from ref 0 now.

```js
/**
14:30 let me see how long will it take to copy the portal cards...
14:41 todo: artifacts
14:57 Crest: Eudie, Maiden Reborn.
*/

/**
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
*/
```

```js
/**
(outing for more than an hour)

16:30 inf evo neutral
 */
/**
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
 */
```

```js
/*
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
 */
```

## yet to be impl

```
/**
apostle 422

greatness 4

inspirational 213

dogged 331

tablet 3

mjerrabaine 433

gilnelise 303
 */

/**
devotee 444

fighter 733

assault 4

supplicant 222

scientist 534

wasteland 2

congregant 633

soprano 2

axia 324

lishenna 424
*/
```
