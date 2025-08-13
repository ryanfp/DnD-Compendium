---
title: Warmage
created: 2025/06/13 at 22:34
updated: 2025/08/01 at 01:41
permalink: warmage
source: "Valda's Spire of Secrets"
aliases:
  - Warmage
tags:
  - class/warmage
  - 
cssclasses: json5e-class
obsidianUIMode: preview
---

# Warmage

*Source: Valda's Spire of Secrets*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Cantrips Known</th><th class="value">Bonus Dice</th><th class="value"><a href="/3-Content/Compendiums/lists/list-optfeaturetype-t-wm.md">Tricks Known</a></th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a>, <a href='#Arcane Initiation (Level 1)' class='internal-link'>Arcane Initiation</a>, <a href='#Arcane Fighting Style (Level 1)' class='internal-link'>Arcane Fighting Style</a></td><td class="value">4</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Warmage Edge (Level 2)' class='internal-link'>Warmage Edge</a>, <a href='#Warmage Tricks (Level 2)' class='internal-link'>Warmage Tricks</a></td><td class="value">4</td><td class="value">⏤</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Warmage House (Level 3)' class='internal-link'>Warmage House</a></td><td class="value">5</td><td class="value">⏤</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5</td><td class="value">⏤</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Arcane Surge (Level 5)' class='internal-link'>Arcane Surge</a></td><td class="value">6</td><td class="value">1</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Tactical Insight (Level 6)' class='internal-link'>Tactical Insight</a></td><td class="value">6</td><td class="value">1</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Warmage House Feature (Level 7)' class='internal-link'>Warmage House Feature</a></td><td class="value">6</td><td class="value">1</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">6</td><td class="value">1</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">7</td><td class="value">1</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Warmage House Feature (Level 10)' class='internal-link'>Warmage House Feature</a></td><td class="value">7</td><td class="value">1</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Arcane Surge Improvement (Level 11)' class='internal-link'>Arcane Surge Improvement</a></td><td class="value">7</td><td class="value">2</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">7</td><td class="value">2</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">8</td><td class="value">2</td><td class="value">8</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Strategic Deflection (Level 14)' class='internal-link'>Strategic Deflection</a></td><td class="value">8</td><td class="value">2</td><td class="value">8</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Warmage House Feature (Level 15)' class='internal-link'>Warmage House Feature</a></td><td class="value">8</td><td class="value">2</td><td class="value">9</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8</td><td class="value">2</td><td class="value">9</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">9</td><td class="value">3</td><td class="value">10</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Warmage House Feature (Level 18)' class='internal-link'>Warmage House Feature</a></td><td class="value">9</td><td class="value">3</td><td class="value">10</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">9</td><td class="value">3</td><td class="value">10</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Master Warmage (Level 20)' class='internal-link'>Master Warmage</a></td><td class="value">10</td><td class="value">3</td><td class="value">10</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Warmage level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON (minimum of 1)

## Starting Warmage

- **Saving Throw Proficiencies**: Constitution, Intelligence
- **Skill Proficiencies**: *Choose 2:* Acrobatics, Animal Handling, Arcana, Athletics, History, Investigation, Medicine, Perception, or Survival
- **Weapon Proficiencies**: Simple weapons
- **Tool Proficiencies**: one set of artisan's tools of your choice and one gaming set of your choice
- **Armor Training**: Light armor

**Starting Equipment:** You start with the following items, plus anything provided by your background.

- Leather armor, a dagger, and any simple weapon
- (a) a component pouch or (b) an arcane focus
- (a) an explorer's pack or (b) a scholar's pack
- a gaming set

Alternatively, you may start with 4d4 x 10 gp to buy your own equipment.

## Multiclassing Warmage

**Ability Score Minimum:** Intelligence 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Armor Training**: Light armor

An elf recites the motions again for the simplest spell she knows, repeating them until she knows they are perfect. With a single, precise stroke, she unleashes a wave of arcane energy, focused into a searing blue beam.

A tiefling waves her hands to conjure floating greatswords of humming blue energy, which dance about in mesmerizing and deadly arcs. One blade takes on an aspect of fire, and the other lightning, as she begins to cleave through the goblinoid horde.

Waving a black-and-red checkered banner, a dragonborn king charges into the fore. At his sides are warmages of all houses, a chessboard of elite arcanists, poised to turn the tide of battle.

The undisputed masters of cantrips, warmages turn the most fundamental types of magic into a deadly and precise art.

## Cantrip Masters

While other spellcasters aspire to grander and more complex spells, warmages refine and master the most fundamental magic: cantrips. Warmages wield their magic in the same way that a warrior uses a sword, bow, or axe: as weapons to be perfected and mastered, not as an unknowable force to be feared. In contrast to sorcerers and wizards, their magic is a trainable skill, one that can be mastered by almost anyone with discipline and aptitude. Therefore, warmages stand among the most fearsome of spellcasters, with only the most rudimentary of spells.

## Strategic Geniuses

Warmages have a long and storied history as masterful strategists and tacticians, both in grand battles and personal skirmishes. If a warmage is outgunned or outmanned, they'll try to outthink their foes, which works more often than not. They demonstrate an efficient kind of pragmatism, owing perhaps to their ability to solve many problems with just a few magical tools.

## Aligned Free Agents

While some warmages are fully self-taught, the majority join a house: a loose confederation of warmages who practice together and share secrets of the trade. Houses teach invaluable battlefield strategy, but each individual house also touts their own brands of tactics and styles of magical tricks. The House of Knights, for example, emphasizes armor and martial prowess, whereas the House of Kings emphasizes battlefield strategy.

By way of metaphor, houses that value honor and teamwork above all else brand themselves after games of strategy, whereas those who epitomize self-reliance name themselves for games of chance. This division in the warmage houses is representative of a schism that dates back to the earliest warmage masters. Legend has it that the first two masters separated when one decided to found a college. The other, out of spite, built a casino outside its grounds.

## Creating a Warmage

Warmages come from all walks of life, so as you build yours, consider where you first learned the fundamentals of magic, which you would go on to perfect. You might have picked up cantrips from a fellow adventurer or in the early stages of wizarding training. You could even be self-taught. Choose an Arcane Initiation which best fits your character's history with magic.

Moreover, consider how you feel about magic as a whole. Are you envious of other spellcasters, or are you confident you could best them regardless? Did you once pine to be a wizard, but found you could never muster enough true magic to form a spell slot? Did you choose warmagistry to hone your talents to their absolute peak, or did you choose it to wield power no warrior can equal?

Lastly, consider your prospective warmage House. Though you don't choose one until reaching 3rd level, your aspirations might shape which house you favor the most. If you would like to dabble with greater arcane magic, the House of Bishops is the best fit. If the clashing of swords at the frontlines piques your interest, consider the House of Knights.

## Quick Build

You can make a Warmage quickly by following these suggestions. First, Intelligence should be your highest ability score, followed by Constitution. Make Strength your third highest if you plan to take the House of Knights. Then choose the chill touch, force dart, force weapon, and phantom grapnel cantrips, and the Adventurer Arcane Initiation. Pick any background that emphasizes your magical discipline.

## Class Features

### Spellcasting (Level 1)

At 1st level, you begin to learn the simple, yet potent, brand of spellcasting for which warmages are known.

#### Cantrips

You know four cantrips of your choice from the warmage spell list. You learn additional warmage cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warmage table.

Additionally, when you gain a level in this class, you can choose one of the warmage cantrips you know and replace it with another warmage cantrip.

#### Spellcasting Ability

Intelligence is your spellcasting ability for your warmage spells, since you learn your spells through practice and mental discipline. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a warmage spell you cast and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: Intelligence + Proficiency Bonus</span>

<span class='abilityAttackMod'>**Spell attack modifier**: Intelligence + Proficiency Bonus</span>

#### Spellcasting Focus

You can use an arcane focus as a spellcasting focus for your warmage spells.

### Arcane Initiation (Level 1)

Warmages come from all backgrounds and walks of life. At 1st level, choose where you first learned the basics of magic. The cantrips offered by your initiation don't count against your total number of warmage cantrips known.

#### Adventurer

You picked up your magic informally by traveling with a dozen different mages over the years. You learn the mage hand and ray of frost cantrips

#### Circus Performer

You learned a few simple tricks to participate in a sideshow or circus act. You learn the dancing lights and minor illusion cantrips.

#### Eldritch Event

An influx of insidious magic left an imprint on you. You learn the chill touch and message cantrips.

#### Mercenary

You mastered the fundamentals of war magic to engage in battle with similarly armed arcanists. You learn the [arc blade](/3-Content/Compendiums/spells/arc-blade-vss.md) and true strike cantrips.

#### Temple

A monastery or temple educated you in the ways of gentle healing magic. You learn the sacred flame and spare the dying cantrips.

#### Tower Apprentice

You apprenticed under a spellcaster for some time, who taught you the fundamentals of arcana. You learn the prestidigitation and shocking grasp cantrips.

#### Self-Taught

You taught yourself all the fundamentals of magic from a dusty old tome or abandoned scroll. You learn the fire bolt and light cantrips.

#### Survival

To survive in the wilderness, you taught yourself to cast simple spells. You learn the druidcraft and shillelagh cantrips.

### Arcane Fighting Style (Level 1)

Warmages learn that magic is the purest of weapons, and can be wielded just as easily as any other. At 1st level, choose one of the following fighting styles:

#### Blaster

The spell save DC for your warmage cantrips increases by 1.

#### Deflector

When you have at least one hand free and a creature hits you with a spell attack or a ranged weapon attack, you can use your reaction to add your proficiency bonus to your Armor Class for that attack, potentially causing the attack to miss you.

#### Resistive

While you are wearing light armor or are under the effects of the mage armor spell, you gain a +1 bonus to your Armor Class.

#### Sniper

When making a ranged spell attack, you gain a +1 bonus to the attack roll. Additionally, you ignore half cover when casting a warmage cantrip.

#### Striker

When you hit with a cantrip that requires a melee attack and exceed the target's AC by 5 or more or score a critical hit, you can add your proficiency bonus to the damage roll.

### Warmage Edge (Level 2)

Starting at 2nd level, once on each of your turns when you deal damage with a warmage cantrip, you can improve one damage roll of the spell, adding your Intelligence modifier to the roll. Starting at 5th level, and as you gain levels in this class, you also add extra dice to the damage roll for your warmage cantrips, as shown in the Cantrip Bonus Dice column of the Warmage table. For example, when you are at 5th level, you can improve the damage of the fire bolt cantrip to deal fire damage equal to 3d10 + your Intelligence modifier on a hit.

### Warmage Tricks (Level 2)

Beginning at 2nd level, you learn a Warmage Trick, a special technique that alters the way you fight, move, and cast your spells. You learn two tricks of your choice at 2nd level, and you learn additional tricks at higher levels, as shown in the [Tricks Known](/3-Content/Compendiums/lists/list-optfeaturetype-t-wm.md) column of the Warmage table.

Additionally, when you gain a level in this class, you can choose one of the tricks you know and replace it with another trick for which you meet the prerequisites.

### Warmage House (Level 3)

Upon reaching 3rd level, you choose a Warmage House, which teaches you a suite of magical techniques. Your choice grants you features at 3rd level, and again at 7th, 10th, 15th, and 18th level.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Arcane Surge (Level 5)

Starting at 5th level, you learn to, for a moment, tap into a vast reservoir of magical power and unleash it upon your foes. On your turn, when you deal damage with a warmage cantrip, you can deal twice the number of damage dice dealt by the spell. You can't use this feature on a spell that has scored a critical hit.

Once you use this feature, you can't use it again until you finish a short or long rest. Starting at 11th level, you can use this feature twice between rests.

### Tactical Insight (Level 6)

At 6th level, you learn how to use ambient magical power to defend yourself from your foes' magical attacks. You can add your Intelligence modifier to saving throws you make against spells and other magical effects that deal damage.

### Warmage House Feature (Level 7)

At 7th level, you gain a feature granted by your Warmage House.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Warmage House Feature (Level 10)

At 10th level, you gain a feature granted by your Warmage House.

### Arcane Surge Improvement (Level 11)

At 11th level, you can use your Arcane Surge twice between rests.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Strategic Deflection (Level 14)

Starting at 14th level, as a reaction when a creature casts a spell that targets you or includes you in its area of effect and the spell forces you to make a saving throw to avoid damage, you can use your reaction to attempt to redirect some of the spell's energy to a new target. If you succeed on your saving throw against the spell, choose another creature you can see within the spell's range or up to 30 feet away from you, whichever is closer, to make a saving throw against the spell, using your spell save DC. The chosen creature can be the original spellcaster. On a failed save, the creature suffers the effects of the spell as if you had cast the spell and they had been the original target or been within the area of the spell.

Once you use this feature, you can't use it again until you finish a short or long rest.

### Warmage House Feature (Level 15)

At 15th level, you gain a feature granted by your Warmage House.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Warmage House Feature (Level 18)

At 18th level, you gain a feature granted by your Warmage House.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Master Warmage (Level 20)

At 20th level, you reach the pinnacle of your warmage prowess. If you cast a cantrip that deals 4 dice of damage to a target, it instead deals 5 dice of damage (excluding your cantrip bonus dice). If you cast a cantrip that makes 4 attacks, it instead makes 5 attacks.