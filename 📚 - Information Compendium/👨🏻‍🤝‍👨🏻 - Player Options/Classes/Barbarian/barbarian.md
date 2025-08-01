---
title: Barbarian
created: 2025/06/15 at 15:34
updated: 2025/08/01 at 00:04
permalink: barbarian
source: test
aliases:
  - Barbarian
tags:
  - ttrpg-cli/class/barbarian
  - ttrpg-cli/compendium/src/5e/phb
cssclasses: json5e-class
obsidianUIMode: preview
---

# Barbarian

*Source: Player's Handbook p. 46. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Rages</th><th class="value">Rage Damage</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Rage (Level 1)' class='internal-link'>Rage</a>, <a href='#Unarmored Defense (Level 1)' class='internal-link'>Unarmored Defense</a></td><td class="value">2</td><td class="value">+2</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Danger Sense (Level 2)' class='internal-link'>Danger Sense</a>, <a href='#Reckless Attack (Level 2)' class='internal-link'>Reckless Attack</a></td><td class="value">2</td><td class="value">+2</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Primal Path (Level 3)' class='internal-link'>Primal Path</a>, <a href='#Primal Knowledge (Level 3)' class='internal-link'>Primal Knowledge</a></td><td class="value">3</td><td class="value">+2</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">+2</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a>, <a href='#Fast Movement (Level 5)' class='internal-link'>Fast Movement</a></td><td class="value">3</td><td class="value">+2</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Path Feature (Level 6)' class='internal-link'>Path Feature</a></td><td class="value">4</td><td class="value">+2</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Feral Instinct (Level 7)' class='internal-link'>Feral Instinct</a>, <a href='#Instinctive Pounce (Level 7)' class='internal-link'>Instinctive Pounce</a></td><td class="value">4</td><td class="value">+2</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">+2</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Brutal Critical (1 die) (Level 9)' class='internal-link'>Brutal Critical (1 die)</a></td><td class="value">4</td><td class="value">+3</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Path feature (Level 10)' class='internal-link'>Path feature</a></td><td class="value">4</td><td class="value">+3</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Relentless Rage (Level 11)' class='internal-link'>Relentless Rage</a></td><td class="value">4</td><td class="value">+3</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5</td><td class="value">+3</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Brutal Critical (2 dice) (Level 13)' class='internal-link'>Brutal Critical (2 dice)</a></td><td class="value">5</td><td class="value">+3</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Path feature (Level 14)' class='internal-link'>Path feature</a></td><td class="value">5</td><td class="value">+3</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Persistent Rage (Level 15)' class='internal-link'>Persistent Rage</a></td><td class="value">5</td><td class="value">+3</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5</td><td class="value">+4</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Brutal Critical (3 dice) (Level 17)' class='internal-link'>Brutal Critical (3 dice)</a></td><td class="value">6</td><td class="value">+4</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Indomitable Might (Level 18)' class='internal-link'>Indomitable Might</a></td><td class="value">6</td><td class="value">+4</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">6</td><td class="value">+4</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Primal Champion (Level 20)' class='internal-link'>Primal Champion</a></td><td class="value">Unlimited</td><td class="value">+4</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d12 per Barbarian level
- **Hit Points at First Level:** 12 + CON
- **Hit Points at Higher Levels:** add 7 OR 1d12 + CON (minimum of 1)

## Starting Barbarian

- **Saving Throws**: Constitution, Strength
- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor), [medium armor](/3-Content/Rules/item-types.md#Medium%20Armor), [shields](/3-Content/Compendiums/items/shield.md)
- **Weapons**: simple weapons, martial weapons
- **Tools**: none
- **Skills**: choose 2 from [Animal Handling](/3-Content/Rules/skills.md#Animal%20Handling), [Athletics](/3-Content/Rules/skills.md#Athletics), [Intimidation](/3-Content/Rules/skills.md#Intimidation), [Nature](/3-Content/Rules/skills.md#Nature), [Perception](/3-Content/Rules/skills.md#Perception), and [Survival](/3-Content/Rules/skills.md#Survival)

You start with the following items, plus anything provided by your background.

- (a) a [greataxe](/3-Content/Compendiums/items/greataxe.md) or (b) any martial melee weapon
- (a) two [handaxes](/3-Content/Compendiums/items/handaxe.md) or (b) any simple weapon
- An [explorer's pack](/3-Content/Compendiums/items/explorers-pack-xphb.md), and four [javelins](/3-Content/Compendiums/items/javelin.md)

Alternatively, you may start with 2d4 × 10 gp to buy your own equipment.

## Multiclassing Barbarian

**Ability Score Minimum:** Strength 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Armor**: [shields](/3-Content/Compendiums/items/shield.md)
- **Weapons**: simple weapons, martial weapons

## Barbarian

A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people's elk herd.

A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.

Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.

These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.

For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.

### Primal Instinct

People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.

Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.

### A Life of Danger

Not every member of the tribes deemed "barbarians" by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don't have to.

Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties.

### Creating a Barbarian

When creating a barbarian character, think about where your character comes from and his or her place in the world. Talk with your DM about an appropriate origin for your barbarian. Did you come from a distant land, making you a stranger in the area of the campaign? Or is the campaign set in a rough-and-tumble frontier where barbarians are common?

What led you to take up the adventuring life? Were you lured to settled lands by the promise of riches? Did you join forces with soldiers of those lands to face a shared threat? Did monsters or an invading horde drive you out of your homeland, making you a rootless refugee? Perhaps you were a prisoner of war, brought in chains to "civilized" lands and only now able to win your freedom. Or you might have been cast out from your people because of a crime you committed, a taboo you violated, or a coup that removed you from a position of authority.

#### Quick Build

You can make a barbarian quickly by following these suggestions. First, put your highest ability score in Strength, followed by Constitution. Second, choose the [outlander](/3-Content/Compendiums/backgrounds/outlander.md) background.

> [!quote] A quote from Seret, archwizard  
> 
> I have witnessed the indomitable performance of barbarians on the field of battle, and it makes me wonder what force lies at the heart of their rage.

The anger felt by a normal person resembles the rage of a barbarian in the same way that a gentle breeze is akin to a furious thunderstorm. The barbarian's driving force comes from a place that transcends mere emotion, making its manifestation all the more terrible. Whether the impetus for the fury comes entirely from within or from forging a link with a spirit animal, a raging barbarian becomes able to perform supernatural feats of strength and endurance. The outburst is temporary, but while it lasts, it takes over body and mind, driving the barbarian on despite peril and injury, until the last enemy falls.

It can be tempting to play a barbarian character that is a straightforward application of the classic archetype—a brute, and usually a dimwitted one at that, who rushes in where others fear to tread. But not all the barbarians in the world are cut from that cloth, so you can certainly put your own spin on things. Either way, consider adding some flourishes to make your barbarian stand out from all others; see the following sections for some ideas.

> [!quote] A quote from Xanathar  
> 
> Rawr! I'm really angry! Funny, I don't feel any stronger. Maybe because I'm always angry, I'm always in top condition. Stands to reason.

## Personal Totems

_Source: Xanathar's Guide to Everything_

Barbarians tend to travel light, carrying little in the way of personal effects or other unnecessary gear. The few possessions they do carry often include small items that have special significance. A personal totem is significant because it has a mystical origin or is tied to an important moment in the character's life—perhaps a remembrance from the barbarian's past or a harbinger of what lies ahead.

A personal totem of this sort might be associated with a barbarian's spirit animal, or might actually be the totem object for the animal, but such a connection is not essential. One who has a bear totem spirit, for instance, could still carry an eagle's feather as a personal totem.

Consider creating one or more personal totems for your character—objects that hold a special link to your character's past or future. Think about how a totem might affect your character's actions.

**Personal Totems**

`dice: [](barbarian.md#^personal-totems)`

| dice: d6 | Totem |
|----------|-------|
| 1 | A tuft of fur from a solitary wolf that you befriended during a hunt |
| 2 | Three eagle feathers given to you by a wise shaman, who told you they would play a role in determining your fate |
| 3 | A necklace made from the claws of a young cave bear that you slew singlehandedly as a child |
| 4 | A small leather pouch holding three stones that represent your ancestors |
| 5 | A few small bones from the first beast you killed, tied together with colored wool |
| 6 | An egg-sized stone in the shape of your spirit animal that appeared one day in your belt pouch |

^personal-totems

## Tattoos

_Source: Xanathar's Guide to Everything_

The members of many barbarian clans decorate their bodies with tattoos, each of which represents a significant moment in the life of the bearer or the bearer's ancestors, or which symbolizes a feeling or an attitude. As with personal totems, a barbarian's tattoos might or might not be related to an animal spirit.

Each tattoo a barbarian displays contributes to that individual's identity. If your character wears tattoos, what do they look like, and what do they represent?

**Tattoos**

`dice: [](barbarian.md#^tattoos)`

| dice: d6 | Tattoo |
|----------|--------|
| 1 | The wings of an eagle are spread wide across your upper back. |
| 2 | Etched on the backs of your hands are the paws of a cave bear. |
| 3 | The symbols of your clan are displayed in viny patterns along your arms. |
| 4 | The antlers of an elk are inked across your back. |
| 5 | Images of your spirit animal are tattooed along your weapon arm and hand. |
| 6 | The eyes of a wolf are marked on your back to help you see and ward off evil spirits. |

^tattoos

## Superstitions

_Source: Xanathar's Guide to Everything_

Barbarians vary widely in how they understand life. Some follow gods and look for guidance from those deities in the cycles of nature and the animals they encounter. These barbarians believe that spirits inhabit the plants and animals of the world, and the barbarians look to them for omens and power.

Other barbarians trust only in the blood that runs in their veins and the steel they hold in their hands. They have no use for the invisible world, instead relying on their senses to hunt and survive like the wild beasts they emulate.

Both of these attitudes can give rise to superstitions. These beliefs are often passed down within a family or shared among the members of a clan or a hunting group.

If your barbarian character has any superstitions, were they ingrained in you by your family, or are they the result of personal experience?

**Superstition**

`dice: [](barbarian.md#^superstition)`

| dice: d6 | Superstition |
|----------|--------------|
| 1 | If you disturb the bones of the dead, you inherit all the troubles that plagued them in life. |
| 2 | Never trust a wizard. They're all devils in disguise, especially the friendly ones. |
| 3 | Dwarves have lost their spirits, and are almost like the undead. That's why they live underground. |
| 4 | Magical things bring trouble. Never sleep with a magic object within ten feet of you. |
| 5 | When you walk through a graveyard, be sure to wear silver, or a ghost might jump into your body. |
| 6 | If an elf looks you in the eyes, she's trying to read your thoughts. |

^superstition

## Class Features

### Rage (Level 1)

In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.

While raging, you gain the following benefits if you aren't wearing heavy armor:

- You have advantage on Strength checks and Strength saving throws.  
- When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.  
- You have resistance to bludgeoning, piercing, and slashing damage.  

If you are able to cast spells, you can't cast them or concentrate on them while raging.

Your rage lasts for 1 minute. It ends early if you are knocked [unconscious](/3-Content/Rules/conditions.md#Unconscious) or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.

Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.

### Unarmored Defense (Level 1)

While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.

### Danger Sense (Level 2)

At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be [blinded](/3-Content/Rules/conditions.md#Blinded), [deafened](/3-Content/Rules/conditions.md#Deafened), or [incapacitated](/3-Content/Rules/conditions.md#Incapacitated).

### Reckless Attack (Level 2)

Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.

### Primal Path (Level 3)

At 3rd level, you choose a path that shapes the nature of your rage from the list of available paths. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.

### Primal Knowledge (Level 3)

_Source: Tasha's Cauldron of Everything p. 24_

*3rd-level barbarian [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

When you reach 3rd level and again at 10th level, you gain proficiency in one skill of your choice from the list of skills available to barbarians at 1st level.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Extra Attack (Level 5)

Beginning at 5th level, you can attack twice, instead of once, whenever you take the [Attack](/3-Content/Rules/actions.md#Attack) action on your turn.

### Fast Movement (Level 5)

Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.

### Path Feature (Level 6)

At 6th level, you gain a feature from your Primal Path.

### Feral Instinct (Level 7)

By 7th level, your instincts are so honed that you have advantage on initiative rolls.

Additionally, if you are [surprised](/3-Content/Rules/conditions.md#Surprised) at the beginning of combat and aren't [incapacitated](/3-Content/Rules/conditions.md#Incapacitated), you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.

### Instinctive Pounce (Level 7)

_Source: Tasha's Cauldron of Everything p. 24_

*7th-level barbarian [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

As part of the bonus action you take to enter your rage, you can move up to half your speed.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Brutal Critical (1 die) (Level 9)

Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.

This increases to two additional dice at 13th level and three additional dice at 17th level.

### Path Feature (Level 10)

At 10th level, you gain a feature from your Primal Path.

### Relentless Rage (Level 11)

Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.

Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Brutal Critical (2 dice) (Level 13)

At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.

This increases to three additional dice at 17th level.

### Path Feature (Level 14)

At 14th level, you gain a feature from your Primal Path.

### Persistent Rage (Level 15)

Beginning at 15th level, your rage is so fierce that it ends early only if you fall [unconscious](/3-Content/Rules/conditions.md#Unconscious) or if you choose to end it.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Brutal Critical (3 dice) (Level 17)

At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.

### Indomitable Might (Level 18)

Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Primal Champion (Level 20)

At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.