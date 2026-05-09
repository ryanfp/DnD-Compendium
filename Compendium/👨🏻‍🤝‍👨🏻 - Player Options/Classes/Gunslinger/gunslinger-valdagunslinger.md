---
title: Gunslinger
created: 2025/06/15 at 22:24
updated: 2025/08/11 at 23:32
aliases:
  - Gunslinger
tags:
  - class/gunslinger
  - 
cssclasses: json5e-class
obsidianUIMode: preview
---

# Gunslinger

*Source: The Gunslinger Class: Valda's Spire of Secrets*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Risk Dice</th><th class="value">Weapon Mastery</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Fighting Style (Level 1)' class='internal-link'>Fighting Style</a>, <a href='#Quick Draw (Level 1)' class='internal-link'>Quick Draw</a>, <a href='#Weapon Mastery (Level 1)' class='internal-link'>Weapon Mastery</a></td><td class="value">-</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Critical Shot (Level 2)' class='internal-link'>Critical Shot</a>, <a href='#Risk (Level 2)' class='internal-link'>Risk</a></td><td class="value">`4d8`</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Gunslinger Subclass (Level 3)' class='internal-link'>Gunslinger Subclass</a></td><td class="value">`4d8`</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`4d8`</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a>, <a href='#Gut Shot (Level 5)' class='internal-link'>Gut Shot</a></td><td class="value">`4d8`</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 6)' class='internal-link'>Subclass Feature</a></td><td class="value">`5d8`</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Evasion (Level 7)' class='internal-link'>Evasion</a></td><td class="value">`5d8`</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`5d8`</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Critical Shot (Level 9)' class='internal-link'>Critical Shot</a></td><td class="value">`5d8`</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 10)' class='internal-link'>Subclass Feature</a></td><td class="value">`5d10`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Overkill (Level 11)' class='internal-link'>Overkill</a></td><td class="value">`5d10`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`5d10`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Cheat Death (Level 13)' class='internal-link'>Cheat Death</a></td><td class="value">`5d10`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 14)' class='internal-link'>Subclass Feature</a></td><td class="value">`6d10`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Dire Gambit (Level 15)' class='internal-link'>Dire Gambit</a></td><td class="value">`6d10`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`6d10`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Critical Shot (Level 17)' class='internal-link'>Critical Shot</a></td><td class="value">`6d10`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Deft Maneuver (Level 18)' class='internal-link'>Deft Maneuver</a></td><td class="value">`6d12`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">`6d12`</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Headshot (Level 20)' class='internal-link'>Headshot</a></td><td class="value">`6d12`</td><td class="value">4</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Gunslinger level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON (minimum of 1)

## Starting Gunslinger

- **Saving Throw Proficiencies**: Charisma, Dexterity
- **Skill Proficiencies**: *Choose 2:* Acrobatics, Animal Handling, Athletics, Deception, Insight, Intimidation, Perception, Persuasion, Sleight of Hand, or Stealth
- **Weapon Proficiencies**: Simple weapons and Martial Ranged weapons
- **Armor Training**: Light armor

**Starting Equipment:** *Choose A or B:* (A) Leather Armor, 2 Daggers, [Revolver](/📚%20-%20Information%20Compendium/items/revolver-valdagunslinger.md), 50 [Bullet](/📚%20-%20Information%20Compendium/items/bullet-valdagunslinger.md), Explorer's Pack, and 11 GP; or (B) 175 GP

## Multiclassing Gunslinger

- **Weapon Proficiencies**: Martial Ranged weapons

## Gunslinger

Risk is in a Gunslinger's blood. They are bold renegades, bucking tradition and forging a new path with dangerous and inelegant firearms. Gunslingers are infamous for surviving by their wits and relying on split-second timing and a considerable amount of luck to survive.

### Guts and Gunpowder

Black powder isn't for the faint of heart. Its thunderous applause is volatile and imprecise—a barely controlled explosion directed at an enemy. Only the truly fearless seek to master it. But Gunslingers have nerves of steel, hurling death from their guns in a roaring cacophony. Adapted for shootouts, gunslingers are mobile and daring, knowing that life or death hangs on snap decision-making and one's own mettle.

### Dangerous Outsiders

A Gunslinger's explosive lifestyle lends well to wandering and adventuring. Gunslingers often shoot first and ask questions later, an attitude which earns them few friends and bountiful enemies. In their travels, most gunslingers are secretive and take great lengths to go unnoticed, lest they be spotted by old foes with scores to settle.

## Class Features

### Fighting Style (Level 1)

You gain a Fighting Style feat of your choice. If you choose a feat, such as Great Weapon Fighting, that requires you to hold a Melee weapon in one or two hands, you can use that feat with Ranged weapons.

Whenever you gain a Gunslinger level, you can replace the feat you chose with a different Fighting Style feat.

### Quick Draw (Level 1)

You're adept at drawing and firing before others have time to react, granting you the following benefits.

#### Initiative

You have <span title="Player's Handbook (2024)">Advantage</span> on <span title="Player's Handbook (2024)">Initiative</span> rolls.

#### Double Draw

You can draw or stow two weapons that lack Two-Handed when you would normally be able to draw or stow only one.

### Weapon Mastery (Level 1)

Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Ranged weapons of your choice. Whenever you finish a <span title="Player's Handbook (2024)">Long Rest</span>, you can practice weapon drills and change one of those weapon choices.

When you reach certain Gunslinger levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Gunslinger Features table.

### Critical Shot (Level 2)

Your attack rolls with Ranged weapons can score a <span title="Player's Handbook (2024)">Critical Hit</span> on a roll of 19 or 20 on the `d20`.

At Gunslinger level 9, your attack rolls with Ranged weapons score a <span title="Player's Handbook (2024)">Critical Hit</span> on a roll of 18-20. At Gunslinger level 17, they score a <span title="Player's Handbook (2024)">Critical Hit</span> on a roll of 17-20.

### Risk (Level 2)

You can perform incredible feats of daring fueled by special dice called Risk Dice.

#### Risk Dice

You have four Risk Dice, which are d8s. A Risk Die is expended when you use it. You regain all expended Risk Dice when you finish a <span title="Player's Handbook (2024)">Short</span> or <span title="Player's Handbook (2024)">Long Rest</span>. Your Risk Die changes and more Risk Dice become available as shown on the Risk Dice column of the Gunslinger Features table.

#### Maneuvers

You can expend Risk Dice to perform maneuvers. Your maneuver options are detailed later in the class description.

#### Saving Throws

If a maneuver requires a saving throw, the DC equals 8 plus your Dexterity modifier and <span title="Player's Handbook (2024)">Proficiency Bonus</span>.

#### Maneuver Options

### Gunslinger Subclass (Level 3)

You gain a Gunslinger subclass of your choice. A subclass is a specialization that grants you features at certain Gunslinger levels. For the rest of your career, you gain each of your subclass's features that are of your Gunslinger level or lower.

### Ability Score Improvement (Level 4)

You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.

### Extra Attack (Level 5)

You can attack twice instead of once whenever you take the Attack action on your turn.

### Gut Shot (Level 5)

Whenever you score a <span title="Player's Handbook (2024)">Critical Hit</span> against a Large or smaller creature with a ranged attack using a weapon, the projectile lodges itself in the target. For 1 minute or until the target replaces one of its attacks with dislodging the projectile, its <span title="Player's Handbook (2024)">Speed</span> is halved and it has <span title="Player's Handbook (2024)">Disadvantage</span> on attack rolls.

### Subclass Feature (Level 6)

You gain a feature from your Gunslinger Subclass.

### Evasion (Level 7)

When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail.

You don't benefit from this feature if you have the Incapacitated condition.

### Ability Score Improvement (Level 8)

You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.

### Critical Shot (Level 9)

Your attack rolls with Ranged weapons can score a <span title="Player's Handbook (2024)">Critical Hit</span> on a roll of 18, 19, or 20 on the `d20`.

### Subclass Feature (Level 10)

You gain a feature from your Gunslinger Subclass.

### Overkill (Level 11)

When you deal damage with a Ranged weapon that doesn't add your ability modifier to the roll, you add your ability modifier nonetheless. If you already add your modifier to the damage roll, the target takes an extra `d8` damage of the weapon's type.

Note that weapons that have the [Firearm](item-properties.md#Firearm) property don't add your ability modifier to damage rolls.

### Ability Score Improvement (Level 12)

You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.

### Cheat Death (Level 13)

When you are reduced to 0 <span title="Player's Handbook (2024)">Hit Points</span> and not killed outright, you can drop to 1 <span title="Player's Handbook (2024)">Hit Point</span> instead, and you regain a number of <span title="Player's Handbook (2024)">Hit Points</span> equal to your Gunslinger level.

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Short</span> or <span title="Player's Handbook (2024)">Long Rest</span>.

### Subclass Feature (Level 14)

You gain a feature from your Gunslinger Subclass.

### Dire Gambit (Level 15)

Whenever you roll <span title="Player's Handbook (2024)">Initiative</span> or score a <span title="Player's Handbook (2024)">Critical Hit</span>, you regain one expended [Risk Die](/📚%20-%20Information%20Compendium/classes/gunslinger-valdagunslinger.md#Risk%20(Level%202)).

### Ability Score Improvement (Level 16)

You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.

### Critical Shot (Level 17)

Your attack rolls with Ranged weapons can score a <span title="Player's Handbook (2024)">Critical Hit</span> on a roll of 17-20 on the `d20`.

### Deft Maneuver (Level 18)

You gain a special additional <span title="Player's Handbook (2024)">Bonus Action</span> that you can take once on each of your turns. You can take this special <span title="Player's Handbook (2024)">Bonus Action</span> only to use a maneuver.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Irresistible Offense is recommended.

### Headshot (Level 20)

When you score a <span title="Player's Handbook (2024)">Critical Hit</span> against a creature using a Ranged weapon, you can choose for it to be a Headshot. If the creature has less than 100 <span title="Player's Handbook (2024)">Hit Points</span>, it dies. Otherwise, it takes an extra `10d10` damage of the weapon's type.

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Short</span> or <span title="Player's Handbook (2024)">Long Rest</span>. You can also restore your use of it by expending three [Risk Dice](/📚%20-%20Information%20Compendium/classes/gunslinger-valdagunslinger.md#Risk%20(Level%202)) (no action required).