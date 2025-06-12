---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
- ttrpg-cli/compendium/src/5e/ultimateadventurer
- ttrpg-cli/spell/level/9th-level
- ttrpg-cli/spell/school/evocation
aliases:
- Orb of Chaos
---
# Orb of Chaos
*9th-level, Evocation*  


- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You draw on the forces of chaos and entropy, condensing them into a small orb, and then launching the orb at a point you can see within range. When it is deployed, the orb emits a burst of its energies in a 30-foot radius sphere around it. Each creature within the sphere must make a saving throw, the type of which is determined by rolling a `d6`.

**Orb of Chaos Saving Throw**

`dice: [](orb-of-chaos-ultimateadventurer.md#^orb-of-chaos-saving-throw)`

| dice: d6 | Saving Throw |
|----------|--------------|
| 1 | Strength |
| 2 | Dexterity |
| 3 | Constitution |
| 4 | Intelligence |
| 5 | Wisdom |
| 6 | Charisma |
^orb-of-chaos-saving-throw

A creature takes `10d8` damage on a failed save, or half as much on a successful one. An object that isn't being worn or carried in the area takes the full damage. A creature also becomes subject to an additional effect on a failed save. The spell's damage type and additional effect are determined by which number appears most on the damage dice after the roll; if two or more numbers are tied, you choose the damage type and the additional effect from among the tied numbers' possibilities. For example, If you roll five 1s and five 8s for the spell's damage roll, you can choose for the spell to deal either acid or thunder damage, and for every creature who failed its saving throw to be either stunned or deafened until the start of your next turn.

**Orb of Chaos Damage Type**

| Number | Damage Type | Additional Effect |
|--------|-------------|-------------------|
| 1 | Acid | A creature that fails its saving throw is stunned until the start of your next turn. |
| 2 | Cold | A creature that fails its saving throw is restrained until the start of your next turn. |
| 3 | Fire | A creature that fails its saving throw is frightened until the start of your next turn. |
| 4 | Force | A creature that fails its saving throw takes an additional `d8` force damage and is knocked prone. |
| 5 | Lightning | A creature that fails its saving throw is blinded until the start of your next turn. |
| 6 | Poison | A creature that fails its saving throw is poisoned until the start of your next turn. |
| 7 | Psychic | A creature that fails its saving throw is charmed until the start of your next turn. |
| 8 | Thunder | A creature that fails its saving throw is deafened until the start of your next turn. |
^orb-of-chaos-damage-type

At the start of each of your turns, you can move the orb up to 60 feet. Whether you move it or not, the orb releases a new burst in a 30-foot-radius sphere around it, randomly determining a new saving throw type, damage type, and additional effect using the tables above.

If you lose concentration on the spell, it doesn't end. Instead, you lose control of the orb and it lasts for its remaining duration. At the start of each of your turns after you lose control of the orb, it may or may not move, determined by rolling on the table below. If the orb moves, roll a `d12`. It moves a number of feet in that direction equal to 5 times the number rolled, stopping if it encounters a solid object, such as the ground or a wall. It then releases a new burst in a 30-foot-radius sphere around it, randomly determining a new saving throw type, damage type, and additional effect using the tables above.

**Orb of Chaos Direction**

`dice: [](orb-of-chaos-ultimateadventurer.md#^orb-of-chaos-direction)`

| dice: d8 | Movement Direction |
|----------|--------------------|
| 1 | No movement |
| 2 | Up |
| 3 | Down |
| 4 | North |
| 5 | South |
| 6 | East |
| 7 | West |
| 8 | Diagonal; roll twice more on this table, rerolling any 1s or 8s, or any opposite directions, such as if you roll Up and Down. The orb moves on the diagonal of the two directions rolled. |
^orb-of-chaos-direction

*Source: The Ultimate Adventurer's Handbook p. 254*