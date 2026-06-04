# Order of the Raiju

*An Esoteric Order for the LaserLlama **Magus** class inspired by Zenitsu from Demon Slayer, and many other instances of badass characters doing cool things with lightning and swords.*

## Order of the Raiju

### Raiju Spells

*3rd-level Order of the Raiju feature*

You learn certain spells at the Magus levels noted in the table below. These spells do not count against your total number of Spells Known and cannot be switched upon gaining a level:

##### Raiju Spells

|Magus Level|Spells|
|:-:|:--|
|3rd|*thunderwave*, _witch bolt_|
|5th|_blur_, _shatter_|
|7th|_ashardalon's stride*_, *lightning bolt* |
|9th|_freedom of movement_, *storm sphere* |
|11th|_jallarzi’s storm of radiance_, _steel wind strike*_|

_*if a spell deals or mentions a damage type or element that is not lightning and/or thunder, it is replaced by lightning. If a spell mentions a damage type and thunder, only the first damage type is replaced by lightning_

### Static Electricity

*3rd-level Order of the Raiju feature*

**Static.** You channel electricity through your body, tracked as **Static**. Your maximum equals your **proficiency bonus**. You start combat with 0 static, and any Static you haven't spent fades 1 minute after combat ends. You gain Static the following way:

- _**Channel the Current.**_ The first time on each of your turns that you **hit a creature with a Spellstrike**, or deal lightning or thunder damage to a creature, you gain **1 Static**.
- _**Lightning Rod.**_ When you receive Lightning damage, you gain **+1 Static**. You also have **resistance to lightning damage**, and are immune to the **Shocked** condition. 

You also gain the following feature:

**_Rolling Thunder._** Whenever you deal lightning or thunder damage on your turn, you can take the **Dash** or **Disengage** action as a Bonus Action.

### Thunderclap and Flash

_3rd-level Order of the Raiju feature_

You move as a bolt of lightning. When you have any Static charges, you can spend 1 to, as part of the attack action, expend up to **half your movement speed** (rounded down) to move blindingly fast and strike your opponent. On a hit, you deal an extra 1d8 Lightning damage to the target. You may spend static this way for as many times as you have attacks. 

You can teleport this way once before or after **each** melee attack you make, so the number of these dashes grows as you gain attacks (one at 3rd level, two once you have Extra Attack at 5th, and so on). This teleport ignores difficult terrain and doesn't provoke opportunity attacks.

> #### Fusing with Ethereal Step (6th level)
> 
> When you gain the **Ethereal Step** feature, it changes for you: you can use your Ethereal Step feature *before* you take any action, and you no longer have to spend your movement to activate the **Thunderclap and Flash** feature. Instead, you teleport a distance up to your maximum movement speed, and reappear at your choice of target. It appears as if you ttransformed into a bolt of lightning to move at breakneck speeds.
> 
> **Rolling Thunder.** If you use the **Thunderclap and Flash** feature after using **Ethereal Step**, you also generate a sonic boom when you reappear. Enemies within 5 ft of your position must make a Dexterity saving throw against your **Spell Save DC**, taking 2d10 Thunder damage and becoming Rattled on a failure, or taking half as much damage and not becoming Rattled on a success. (Essentially a less powerful, free cast of *thunder step*)

### Thunder Swarm

_7th-level Order of the Raiju feature_

When you use an Order of the Raiju feature on your turn, you become a blur of afterimages: you gain the effects of the **mirror image** spell until the start of your next turn, requiring no concentration. You also gain the following features:

- Once per turn, whenever a duplicate is destroyed by an attack that would otherwise have hit you, you gain **1 Static**.
- When the duration would end, you can spend **1 Static** (per duplicate) to make your remaining duplicates persist until the start of your following turn. Using an Order of the Raiju feature again instead refreshes you back to three duplicates.

### Conduit
 
*7th-level Order of the Raiju feature*
 
When a creature you can see within **15 feet** of you is about to take lightning damage, you can use your **reaction** to move up to **half your speed** toward it and take that lightning damage **in its place**.

**_Improved Lightning Rod:_** Whenever you take Lightning damage, you gain **+2 Static**, up to your maximum.

### Sixfold Path

_15th-level Order of the Raiju feature_

Your strikes multiply like the branches of a lightning bolt. You gain the following features:

_**Sixfold.**_ When you use **Thunderclap and Flash**, you can spend **1 Static** to make one additional teleport + melee weapon attack as part of the same action. You can do this a number of times per round up to your Static limit (max 6). Your additional teleports do not trigger the additional effects of the **Rolling Thunder** feature.
_**Galvanize._** Whenever you spend Static on your turn, your movement speed increases by **5 feet for each Static spent**, until the start of your next turn.


### Lightning Sovereign

_20th-level Order of the Raiju feature_

You gain the following features:

_**The Stormlord.**_ Your Lightning damage ignores **Resistances**, and treats **Immunities** as Resistances. Your own resistance to lightning becomes **immunity**.

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