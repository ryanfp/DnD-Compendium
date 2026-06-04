# Order of the Raiju

*An Esoteric Order for the LaserLlama **Magus** class inspired by Zenitsu from Demon Slayer, and many other instances of badass characters doing cool things with lightning and swords.*

## Order of the Raiju

### Thunder Breathing

*3rd-level Order of the Raiju feature*

You learn additional spells at the Magus levels noted below. They count as Magus spells for you, don't count against your Spells Known, and can't be swapped on level-up.
_tempestuous blade_
##### Raiju Spells

|Magus Level|Spells|
|:-:|:--|
|3rd|*thunderwave*, _witch bolt_|
|5th|_blur_, _shatter_|
|7th|_thunder step_, *call lightning* |
|9th|_lightning bolt_|
|11th|_call lightning_|

**Static.** You channel raw charge, tracked as **Static**. Your maximum equals your **proficiency bonus**. You lose all Static when you finish a long rest, and any Static you haven't spent fades 1 minute after combat ends. You gain Static two ways:

- _**Channel the Current (floor).**_ The first time on each of your turns that you **hit a creature with a Spellstrike**, or deal lightning or thunder damage to a creature, you gain **1 Static**. _(Triggers on the Spellstrike hit, so lightning-immune enemies can't shut your engine off.)_
- _**Lightning Rod (kicker).**_ You have **resistance to lightning damage**, and whenever you take lightning damage you gain **2 Static** (after resistance). This can occur any number of times.

**Rolling Thunder.** Whenever you deal lightning or thunder damage on your turn, you can take the **Dash** or **Disengage** action this turn without using an action.

### Lightning Breathing: First Form

_3rd-level Order of the Raiju feature — Thunderclap and Flash_

You move as a bolt of lightning. When you make a melee weapon attack on your turn, you can immediately **teleport up to your speed to an unoccupied space you can see**, expending **half your speed** (round down) of movement. You can teleport this way once before or after **each** melee attack you make, so the number of these dashes grows as you gain attacks (one at 3rd level, two once you have Extra Attack at 5th, and so on). This teleport ignores difficult terrain and doesn't provoke opportunity attacks.

> ##### Fusing with Ethereal Step (6th level)
> 
> When you gain the **Ethereal Step / Ethereal Jaunt** feature, it changes for you: you can use it **even if you have not cast a spell or used Spellstrike**, its distance becomes equal to **your speed** (ignoring the slot-based formula), and each time you use it you gain **1 Static**. First Form is the bread-and-butter that sets up Spellstrike; Ethereal Step is the exit.

\column

### Lightning Breathing: Third Form

_7th-level Order of the Raiju feature — Thunder Swarm_

When you use a Lightning Breathing Form on your turn, you become a blur of afterimages: you gain the effects of the **mirror image** spell (three duplicates), requiring no concentration. These duplicates last **until the end of your next turn**.

- Whenever a duplicate is destroyed by an attack that would otherwise have hit you, you gain **1 Static**.
- When the duration would end, you can spend **1 Static** to make your remaining duplicates persist until the end of your following turn (repeatable). Using a Form again instead refreshes you back to three duplicates.

### Lightning Breathing: Sixth Form

_7th-level Order of the Raiju feature — Rumble and Flash_

When you take the Attack action, you can replace one melee weapon attack with **Rumble and Flash**. Expend one **Exploit Die** and **3 Static**: you gain the effects of casting **lightning bolt** at its base level — a 100-foot line, 5 feet wide, originating from you — without expending a spell slot, using your Magus spell save DC. Add the rolled Exploit Die to the lightning damage one creature of your choice takes.

This is the template for the Order's martial-magic Forms: a maneuver you _perform_, that manifests a spell's effect through the strike. (At your option, you may channel _call lightning_ the same way once you learn it, expending an Exploit Die and Static equal to its level.)

### Lightning Breathing: Sixfold Path

_15th-level Order of the Raiju feature_

Your strikes multiply like a thunderhead.

- _**Sixfold.**_ When you use **First Form** (Thunderclap and Flash), you can spend **1 Static** to make one additional teleport + melee weapon attack as part of the same action. You can do this a number of times per turn up to **half your proficiency bonus (rounded down)**.
- _**Quicksilver.**_ Your walking speed increases by **15 feet**, and the teleport distance of First Form and Ethereal Step increases by **15 feet**.
- _**Storm-Eater.**_ When you would take lightning damage, you can use your reaction to take **none** of it and instead gain Static equal to the triggering spell's level (minimum 2), up to your maximum.

\page

### Lightning Breathing: Seventh Form

_20th-level Order of the Raiju feature — God of Fire Thunder_

You are a living storm, and your lightning brooks no resistance.

_**Lightning Sovereign (passive).**_ Your lightning damage ignores **Resistance** to lightning, and treats **Immunity** to lightning as Resistance. Your own resistance to lightning becomes **immunity**.

_**Honoikazuchi, the Thunder Dragon.**_ As part of the Attack action, you can spend **all of your Static (minimum 5)** to dash up to your speed in a straight line — manifesting a dragon of blue-and-gold lightning along your path. You can do this only once per long rest unless you spend all of your Static again to repeat it.

When you do, you gain the effects of casting **chain lightning** without expending a spell slot, using your Magus spell save DC and Intelligence. In addition, every creature in the 60-foot line of your dash makes the same Dexterity saving throw or takes **4d6 lightning damage** (the dragon's body), half as much on a success.

If you spent more than 5 Static, the dragon **strikes one additional target for every 1 Static beyond 5**, and creatures that **fail** the _chain lightning_ save take **full** damage (no half-on-save reduction).

\page

## Design Notes

### How the engine loops

1. **First Form** teleports you into reach for almost nothing (half movement, no Exploit Die) — your bread-and-butter, scaling with Extra Attack.
2. From that position you **Spellstrike** (Magus core), which deals lightning → **+1 Static** (floor) and, via _Rolling Thunder_, hands you a free Dash/Disengage to reposition.
3. Using a Form turns on **Third Form's** mirror image; enemies hitting your afterimages refund **Static**, so staying in the fray _charges_ you.
4. **Sixth Form** spends a fat chunk of Static (3) plus an Exploit Die to dump a _lightning bolt_ through the blade — the martial-magic payoff.
5. Against lightning users, **Lightning Rod** (and later **Storm-Eater**) overcharges the whole loop while you ignore the damage.

This is why the subclass is never lightning-dependent: every charge mechanic has a _floor_ fed by your own output and a _kicker_ fed by incoming lightning.

### Every requested change, and where it lives

- **Martial Forms that manifest spell effects** → Sixth Form (and its general template); the leveled lightning spells are delivered as maneuvers via Static + Exploit Die rather than slots.
- **First Form = real teleport, half movement, bread-and-butter, scales with attacks, fuses with Ethereal Step** → First Form + its 6th-level fusion clause + the 15th-level _Sixfold_.
- **Active mirror image instead of passive blur; duplicate hit → Static; lasts to end of next turn unless maintained** → Third Form. _Blur_ is demoted to a 3rd-level Raiju spell.
- **Capstone degrades enemy lightning resistance/immunity** → _Lightning Sovereign_.
- **Lightning-dragon finale** → _Honoikazuchi_.
- **Resistance kept; no temp HP; speed scaling instead** → kicker stays resistance, _Quicksilver_ adds the speed growth.
- **The "Dash/Disengage on lightning/thunder damage" feature you liked** → _Rolling Thunder_.
- **Social flavor** → intentionally omitted; you keep those at the base-class level.

### Balance levers (in order of how much they matter)

1. **Sixfold extra attacks.** Adding weapon attacks is the single most dangerous thing in 5e. It's gated behind Static (1 each), capped at half proficiency bonus, and arrives at 15th — but this is the first dial to watch. Consider capping at a flat **2** extra, or making each extra strike deal weapon damage only (no Spellstrike, no rider).
2. **Sixth Form at 7th.** A free _lightning bolt_ slightly precedes a Magus's access to 3rd-level slots (9th), so it's a genuine perk — but it eats your entire Static pool at that level (max 3) and replaces an attack, which self-limits it to roughly once per charge-cycle.
3. **Static economy.** If charging feels too fast, drop _Lightning Rod_ to +1; if too slow, let the floor also trigger on First Form teleports.
4. **Honoikazuchi.** Free _chain lightning_ + a line rider is a fitting 20th-level nova; the "spend all Static again to repeat" clause is the main thing to watch in long fights.

### Open questions for you

- Should **Sixth Form** be a _replace-an-attack_ maneuver (current) or a standalone action? Replacing an attack keeps it inside the Magus's normal turn structure; a standalone action makes it splashier but easier to over-use.
- Do you want **Third Form** to refund Static **per destroyed duplicate** (current) or only **once per turn**? Per-duplicate makes lightning-heavy fights wildly generous — fun, possibly too much.
- For **Honoikazuchi**, prefer the dragon as a **line** (current, matches the show's dash-slash) or a **30-ft cone breath** (leans on the _dragon's breath_ imagery you flagged)?