---
title: Monk
created: 2025/06/15 at 15:36
updated: 2025/08/01 at 01:20
aliases:
  - Monk
tags:
  - class/monk
  - compendium/src/5e/phb
cssclasses: json5e-class
obsidianUIMode: preview
permalink: monk
source: Player's Handbook
---

# Monk

*Source: Player's Handbook p. 76. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Martial Arts</th><th class="value">Ki Points</th><th class="value">Unarmored Movement</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Unarmored Defense (Level 1)' class='internal-link'>Unarmored Defense</a>, <a href='#Martial Arts (Level 1)' class='internal-link'>Martial Arts</a></td><td class="value">1d4</td><td class="value">⏤</td><td class="value">+0</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Ki (Level 2)' class='internal-link'>Ki</a>, <a href='#Dedicated Weapon (Level 2)' class='internal-link'>Dedicated Weapon</a>, <a href='#Unarmored Movement (Level 2)' class='internal-link'>Unarmored Movement</a></td><td class="value">1d4</td><td class="value">2</td><td class="value">+10</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Deflect Missiles (Level 3)' class='internal-link'>Deflect Missiles</a>, <a href='#Monastic Tradition (Level 3)' class='internal-link'>Monastic Tradition</a>, <a href='#Ki-Fueled Attack (Level 3)' class='internal-link'>Ki-Fueled Attack</a></td><td class="value">1d4</td><td class="value">3</td><td class="value">+10</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a>, <a href='#Slow Fall (Level 4)' class='internal-link'>Slow Fall</a>, <a href='#Quickened Healing (Level 4)' class='internal-link'>Quickened Healing</a></td><td class="value">1d4</td><td class="value">4</td><td class="value">+10</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a>, <a href='#Stunning Strike (Level 5)' class='internal-link'>Stunning Strike</a>, <a href='#Focused Aim (Level 5)' class='internal-link'>Focused Aim</a></td><td class="value">1d6</td><td class="value">5</td><td class="value">+10</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Ki-Empowered Strikes (Level 6)' class='internal-link'>Ki-Empowered Strikes</a>, <a href='#Monastic Tradition feature (Level 6)' class='internal-link'>Monastic Tradition feature</a></td><td class="value">1d6</td><td class="value">6</td><td class="value">+15</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Evasion (Level 7)' class='internal-link'>Evasion</a>, <a href='#Stillness of Mind (Level 7)' class='internal-link'>Stillness of Mind</a></td><td class="value">1d6</td><td class="value">7</td><td class="value">+15</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d6</td><td class="value">8</td><td class="value">+15</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Unarmored Movement improvement (Level 9)' class='internal-link'>Unarmored Movement improvement</a></td><td class="value">1d6</td><td class="value">9</td><td class="value">+15</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Purity of Body (Level 10)' class='internal-link'>Purity of Body</a></td><td class="value">1d6</td><td class="value">10</td><td class="value">+20</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Monastic Tradition feature (Level 11)' class='internal-link'>Monastic Tradition feature</a></td><td class="value">1d8</td><td class="value">11</td><td class="value">+20</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d8</td><td class="value">12</td><td class="value">+20</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Tongue of the Sun and Moon (Level 13)' class='internal-link'>Tongue of the Sun and Moon</a></td><td class="value">1d8</td><td class="value">13</td><td class="value">+20</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Diamond Soul (Level 14)' class='internal-link'>Diamond Soul</a></td><td class="value">1d8</td><td class="value">14</td><td class="value">+25</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Timeless Body (Level 15)' class='internal-link'>Timeless Body</a></td><td class="value">1d8</td><td class="value">15</td><td class="value">+25</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d8</td><td class="value">16</td><td class="value">+25</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Monastic Tradition feature (Level 17)' class='internal-link'>Monastic Tradition feature</a></td><td class="value">1d10</td><td class="value">17</td><td class="value">+25</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Empty Body (Level 18)' class='internal-link'>Empty Body</a></td><td class="value">1d10</td><td class="value">18</td><td class="value">+30</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d10</td><td class="value">19</td><td class="value">+30</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Perfect Self (Level 20)' class='internal-link'>Perfect Self</a></td><td class="value">1d10</td><td class="value">20</td><td class="value">+30</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Monk level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON (minimum of 1)

## Starting Monk

- **Saving Throws**: Dexterity, Strength
- **Armor**: none
- **Weapons**: simple weapons, [shortswords](/3-Content/Compendiums/items/shortsword.md)
- **Tools**: any one type of [artisan's tools](/3-Content/Compendiums/items/artisans-tools-xphb.md) or any one [musical instrument](/3-Content/Compendiums/items/musical-instrument-xphb.md) of your choice
- **Skills**: choose 2 from [Acrobatics](/3-Content/Rules/skills.md#Acrobatics), [Athletics](/3-Content/Rules/skills.md#Athletics), [History](/3-Content/Rules/skills.md#History), [Insight](/3-Content/Rules/skills.md#Insight), [Religion](/3-Content/Rules/skills.md#Religion), and [Stealth](/3-Content/Rules/skills.md#Stealth)

You start with the following items, plus anything provided by your background.

- (a) a [shortsword](/3-Content/Compendiums/items/shortsword.md) or (b) any simple weapon
- (a) a [dungeoneer's pack](/3-Content/Compendiums/items/dungeoneers-pack-xphb.md) or (b) an [explorer's pack](/3-Content/Compendiums/items/explorers-pack-xphb.md)
- 10 [darts](/3-Content/Compendiums/items/dart.md)

Alternatively, you may start with 5d4 (`5d4`) gp to buy your own equipment.

## Multiclassing Monk

**Ability Score Minimum:** Dexterity 13, Wisdom 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Weapons**: simple weapons, [shortswords](/3-Content/Compendiums/items/shortsword.md)

## Monk

Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone.

Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes.

Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone's throw away. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the tyrant prince, so vulnerable in the grip of sleep.

Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.

### The Magic of Ki

Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.

### Training and Asceticism

Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges from the flow of ordinary life, where time seems to stand still. The monks who live there seek personal perfection through contemplation and rigorous training. Many entered the monastery as children, sent to live there when their parents died, when food couldn't be found to support them, or in return for some kindness that the monks had performed for their families.

Some monks live entirely apart from the surrounding population, secluded from anything that might impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies or assassins at the command of their leader, a noble patron, or some other mortal or divine power.

The majority of monks don't shun their neighbors, making frequent visits to nearby towns or villages and exchanging their service for food and other goods. As versatile warriors, monks often end up protecting their neighbors from monsters or tyrants.

For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a wanderer. This can be a harsh transition, and monks don't undertake it lightly. Those who leave their cloisters take their work seriously, approaching their adventures as personal tests of their physical and spiritual growth. As a rule, monks care little for material wealth and are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering their treasure.

### Creating a Monk

As you make your monk character, think about your connection to the monastery where you learned your skills and spent your formative years. Were you an orphan or a child left on the monastery's threshold? Did your parents promise you to the monastery in gratitude for a service performed by the monks? Did you enter this secluded life to hide from a crime you committed? Or did you choose the monastic life for yourself?

Consider why you left. Did the head of your monastery choose you for a particularly important mission beyond the cloister? Perhaps you were cast out because of some violation of the community's rules. Did you dread leaving, or were you happy to go? Is there something you hope to accomplish outside the monastery? Are you eager to return to your home?

As a result of the structured life of a monastic community and the discipline required to harness ki, monks are almost always lawful in alignment.

#### Quick Build

You can make a monk quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. Second, choose the [hermit](/3-Content/Compendiums/backgrounds/hermit.md) background.

> [!quote] A quote from Ember, grand master of flowers  
> 
> Do not mistake my silence for acceptance of your villainy. While you blustered and threatened, I've planned four different ways to snap your neck with my bare hands.

Monks walk a path of contradiction. They study their art as a wizard does, and like a wizard, they wear no armor and typically eschew weapons. Yet they are deadly combatants, their abilities on a par with those of a raging barbarian or a superbly trained fighter. Monks embrace this seeming contradiction, for it speaks to the core of all monastic study. By coming to know oneself completely, one learns much of the wider world.

A monk's focus on inner mastery leads many such individuals to become detached from society, more concerned with their personal experience than with happenings elsewhere. Adventuring monks are a rare breed of an already rare type of character, taking their quest for perfection beyond the walls of the monastery into the world at large.

Playing a monk character offers many intriguing opportunities to try something different. To distinguish your monk character even further, consider the options in the sections that follow.

> [!quote] A quote from Xanathar  
> 
> I bet I could be a monk if I wanted.
> 
> What? Why are you laughing?

## Monastery

_Source: Xanathar's Guide to Everything_

A monk studies in a monastery in preparation for a life of asceticism. Most of those who enter a monastery make it their home for the rest of their lives, with the exception of adventurers and others who have reason to leave. For those individuals, a monastery might serve as a refuge between excursions to the world or as a source of support in times of need.

What sort of place was your monastery, and where is it located? Did attending it contribute to your experience in an unusual or distinctive way?

**Monastery**

`dice: [](monk.md#^monastery)`

| dice: d6 | Monastery |
|----------|-----------|
| 1 | Your monastery is carved out of a mountainside, where it looms over a treacherous pass. |
| 2 | Your monastery is high in the branches of an immense tree in the Feywild. |
| 3 | Your monastery was founded long ago by a cloud giant and is inside a cloud castle that can be reached only by flying. |
| 4 | Your monastery is built beside a volcanic system of hot springs, geysers, and sulfur pools. You regularly received visits from azer traders. |
| 5 | Your monastery was founded by gnomes and is an underground labyrinth of tunnels and rooms. |
| 6 | Your monastery was carved from an iceberg in the frozen reaches of the world. |

^monastery

## Icon

_Source: Xanathar's Guide to Everything_

Even in the monastic lifestyle, which eschews materialism and personal possessions, symbolism plays an important part in defining the identity of an order. Some monastic orders treat certain creatures with special regard, either because the creature is tied to the order's history or because it serves as an example of a quality the monks seek to emulate.

If your character's monastery had a special icon, you might wear a crude image of the creature somewhere inconspicuous on your clothing to serve as an identifying mark. Or perhaps your order's icon does not have a physical form but is expressed through a gesture or a posture that you adopt, and which other monks might know how to interpret.

**Icon**

`dice: [](monk.md#^icon)`

| dice: d6 | Icon |
|----------|------|
| 1 | Monkey. Quick reflexes and the ability to travel through the treetops are two of the reasons why your order admires the monkey. |
| 2 | Dragon Turtle. The monks of your seaside monastery venerate the dragon turtle, reciting ancient prayers and offering garlands of flowers to honor this living spirit of the sea. |
| 3 | Ki-rin. Your monastery sees its main purpose as watching over and protecting the land in the manner of the ki-rin. |
| 4 | Owlbear. The monks of your monastery revere a family of owlbears and have coexisted with them for generations. |
| 5 | Hydra. Your order singles out the hydra for its ability to unleash several attacks simultaneously. |
| 6 | Dragon. A dragon once laired within your monastery. Its influence remains long after its departure. |

^icon

## Master

_Source: Xanathar's Guide to Everything_

During your studies, you were likely under the tutelage of a master who imparted to you the precepts of the order. Your master was the one most responsible for shaping your understanding of the martial arts and your attitude toward the world. What sort of person was your master, and how did your relationship with your master affect you?

**Master**

`dice: [](monk.md#^master)`

| dice: d6 | Master |
|----------|--------|
| 1 | Your master was a tyrant whom you had to defeat in single combat to complete your instruction. |
| 2 | Your master was kindly and taught you to pursue the cause of peace. |
| 3 | Your master was merciless in pushing you to your limits. You nearly lost an eye during one especially brutal practice session. |
| 4 | Your master seemed goodhearted while tutoring you, but betrayed your monastery in the end. |
| 5 | Your master was cold and distant. You suspect that the two of you might be related. |
| 6 | Your master was kind and generous, never critical of your progress. Nevertheless, you feel you never fully lived up to the expectations placed on you. |

^master

## Class Features

### Unarmored Defense (Level 1)

Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.

### Martial Arts (Level 1)

Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are [shortswords](/3-Content/Compendiums/items/shortsword.md) and any simple melee weapons that don't have the two-handed or heavy property.

You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a [shield](/3-Content/Compendiums/items/shield.md).

- You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.  
- You can roll a `d4` in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.  
- When you use the [Attack](/3-Content/Rules/actions.md#Attack) action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the [Attack](/3-Content/Rules/actions.md#Attack) action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.  

Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama).

### Ki (Level 2)

Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.

You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.

When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.

Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:

<span class='abilityDc'>**Ki save DC**: your proficiency bonus + your Wisdom</span>

### Flurry of Blows (Level 2)

Immediately after you take the [Attack](/3-Content/Rules/actions.md#Attack) action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.

### Patient Defense (Level 2)

You can spend 1 ki point to take the [Dodge](/3-Content/Rules/actions.md#Dodge) action as a bonus action on your turn.

### Step of the Wind (Level 2)

You can spend 1 ki point to take the [Disengage](/3-Content/Rules/actions.md#Disengage) or [Dash](/3-Content/Rules/actions.md#Dash) action as a bonus action on your turn, and your jump distance is doubled for the turn.

### Dedicated Weapon (Level 2)

_Source: Tasha's Cauldron of Everything p. 48_

*2nd-level monk [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

You train yourself to use a variety of weapons as monk weapons, not just simple melee weapons and shortswords. Whenever you finish a short or long rest, you can touch one weapon, focus your ki on it, and then count that weapon as a monk weapon until you use this feature again.

The chosen weapon must meet these criteria:

- The weapon must be a simple or martial weapon.  
- You must be proficient with it.  
- It must lack the heavy and special properties.  

### Unarmored Movement (Level 2)

Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.

At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.

### Deflect Missiles (Level 3)

Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by `d10` + your Dexterity modifier + your monk level.

If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack (range 20/60 feet) with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.

### Monastic Tradition (Level 3)

When you reach 3rd level, you commit yourself to a monastic tradition, chosen from the list of available traditions. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.

### Ki-Fueled Attack (Level 3)

_Source: Tasha's Cauldron of Everything p. 48_

*3rd-level monk [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

If you spend 1 ki point or more as part of your action on your turn, you can make one attack with an unarmed strike or a monk weapon as a bonus action before the end of the turn.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Slow Fall (Level 4)

Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.

### Quickened Healing (Level 4)

_Source: Tasha's Cauldron of Everything p. 48_

*4th-level monk [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

As an action, you can spend 2 ki points and roll a Martial Arts die. You regain a number of hit points equal to the number rolled plus your proficiency bonus.

### Extra Attack (Level 5)

Beginning at 5th level, you can attack twice, instead of once, whenever you take the [Attack](/3-Content/Rules/actions.md#Attack) action on your turn.

### Stunning Strike (Level 5)

Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be [stunned](/3-Content/Rules/conditions.md#Stunned) until the end of your next turn.

### Focused Aim (Level 5)

_Source: Tasha's Cauldron of Everything p. 48_

*5th-level monk [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

When you miss with an attack roll, you can spend 1 to 3 ki points to increase your attack roll by 2 for each of these ki points you spend, potentially turning the miss into a hit.

### Ki-Empowered Strikes (Level 6)

Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.

### Monastic Tradition Feature (Level 6)

At 6th level, you gain one feature granted by your Monastic Tradition.

### Evasion (Level 7)

At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a [fireball](/3-Content/Compendiums/spells/fireball-xphb.md) spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.

### Stillness of Mind (Level 7)

Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be [charmed](/3-Content/Rules/conditions.md#Charmed) or [frightened](/3-Content/Rules/conditions.md#Frightened).

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Unarmored Movement Improvement (Level 9)

At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.

### Purity of Body (Level 10)

At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.

### Monastic Tradition Feature (Level 11)

At 11th level, you gain one feature granted by your Monastic Tradition.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Tongue of the Sun and Moon (Level 13)

Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.

### Diamond Soul (Level 14)

Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.

Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.

### Timeless Body (Level 15)

At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Monastic Tradition Feature (Level 17)

At 17th level, you gain one feature granted by your Monastic Tradition.

### Empty Body (Level 18)

Beginning at 18th level, you can use your action to spend 4 ki points to become [invisible](/3-Content/Rules/conditions.md#Invisible) for 1 minute. During that time, you also have resistance to all damage but force damage.

Additionally, you can spend 8 ki points to cast the [astral projection](/3-Content/Compendiums/spells/astral-projection-xphb.md) spell, without needing material components. When you do so, you can't take any other creatures with you.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Perfect Self (Level 20)

At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.