---
obsidianUIMode: preview
cssclasses: json5e-class
tags: [ttrpg-cli/class/occultist, ttrpg-cli/compendium/src/5e/kt-cll]
aliases:
  - Occultist
created: 2025/06/13 at 22:29
updated: 2025/07/13 at 00:17
---

# Occultist

*Source: Kibbles' Compendium of Legends and Legacies p. 12*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='15'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value"><a href="/3-Content/Compendiums/lists/list-optfeaturetype-kt-or.md">Occult Rites</a></th><th class="value">Cantrips Known</th><th class="value">Spells Known</th><th class="value">1st</th><th class="value">2nd</th><th class="value">3rd</th><th class="value">4th</th><th class="value">5th</th><th class="value">6th</th><th class="value">7th</th><th class="value">8th</th><th class="value">9th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a>, <a href='#Occult Tradition (Level 1)' class='internal-link'>Occult Tradition</a></td><td class="value">⏤</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Occult Rites (Level 2)' class='internal-link'>Occult Rites</a></td><td class="value">2</td><td class="value">3</td><td class="value">4</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Occult Tradition feature (Level 3)' class='internal-link'>Occult Tradition feature</a></td><td class="value">2</td><td class="value">3</td><td class="value">5</td><td class="value">4</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2</td><td class="value">4</td><td class="value">6</td><td class="value">4</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"></td><td class="value">3</td><td class="value">4</td><td class="value">7</td><td class="value">4</td><td class="value">3</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Occult Tradition feature (Level 6)' class='internal-link'>Occult Tradition feature</a></td><td class="value">3</td><td class="value">4</td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">4</td><td class="value">4</td><td class="value">9</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">1</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">4</td><td class="value">10</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">5</td><td class="value">4</td><td class="value">11</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">1</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Traditional Expertise (Level 10)' class='internal-link'>Traditional Expertise</a></td><td class="value">5</td><td class="value">5</td><td class="value">12</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">5</td><td class="value">5</td><td class="value">13</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">1</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">6</td><td class="value">5</td><td class="value">14</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">1</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">6</td><td class="value">5</td><td class="value">15</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">1</td><td class="value">1</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Occult Tradition feature (Level 14)' class='internal-link'>Occult Tradition feature</a></td><td class="value">6</td><td class="value">5</td><td class="value">16</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">1</td><td class="value">1</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"></td><td class="value">7</td><td class="value">5</td><td class="value">17</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">1</td><td class="value">1</td><td class="value">1</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">7</td><td class="value">5</td><td class="value">18</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">1</td><td class="value">1</td><td class="value">1</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">7</td><td class="value">5</td><td class="value">19</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">1</td><td class="value">1</td><td class="value">1</td><td class="value">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"></td><td class="value">8</td><td class="value">5</td><td class="value">20</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">1</td><td class="value">1</td><td class="value">1</td><td class="value">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8</td><td class="value">5</td><td class="value">20</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">1</td><td class="value">1</td><td class="value">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#The Old Ways (Level 20)' class='internal-link'>The Old Ways</a></td><td class="value">8</td><td class="value">5</td><td class="value">20</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">2</td><td class="value">1</td><td class="value">1</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d6 per Occultist level
- **Hit Points at First Level:** 6 + CON
- **Hit Points at Higher Levels:** add 4 OR 1d6 + CON (minimum of 1)

## Starting Occultist

- **Saving Throw Proficiencies**: Charisma, Wisdom
- **Skill Proficiencies**: *Choose 2:* Animal Handling, Arcana, Deception, History, Investigation, Medicine, Nature, Religion, Sleight of Hand, Stealth, or Survival
- **Weapon Proficiencies**: Daggers, quarterstaffs, and light crossbows
- **Tool Proficiencies**: Herbalism kit
- **Armor Training**: Light armor

**Starting Equipment:** You start with the following items, plus anything provided by your background.

- (a) a quarterstaff, (b) a dagger, or (c) one simple weapon
- (a) a component pouch or (b) an [occult fetish](/3-Content/Compendiums/items/occult-fetish-kt-cll.md)
- (a) a scholar's pack or (b) an explorer's pack
- (a) leather armor, or (b) scale mail, (if proficient)
- A Herbalism kit.

## Multiclassing Occultist

**Ability Score Minimum:** Wisdom 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Armor Training**: Light armor

## Occultist

Wisps of purple smoke and dancing shadows rise from the ritual as the young human woman with strange magical markings tattooed across her hands whispers words in a language long forgotten, calling forth ancient powers.

The woods creak and bend, black wings beating as a raven alights on the outstretched hand of an ancient elf, her eyes as black as the raven's. Soft words are spoken, and the elf nods in agreement.

A young orc lets out a bellowing roar and flames burst into a form taller than an ogre, causing her enemies to flee. She holds up her spear and the flames pour from the roaring fire spirit to it, swirling about it, causing it to roar alight with searing magical flames.

The mysterious halfling woman gives a knowing smile, her unseeing eyes focused on you. She knows what you've come for, and tosses a handful of incense into the fire; what it is she sees in there? Your fate? Your destiny? As she speaks, it is only in riddle.

### Ancient Traditions

Occultists are spellcasters following legacies that go far back. While they may or may not be directly tutored or influenced by another member of their tradition, their path to magic involves unearthing ancient secrets, old ways, and knowledge gleaned from spirits, ghosts, and elementals.

### Spiritual Magic

A common thread of the magic wielded by the Occultist is the spiritual connection of it; the demi-divine nature of magic that taps into the weave of magic, oft through intermediaries such as gods, spirits, elementals, and more.

## Class Features

### Spellcasting (Level 1)

As a practitioner of occult magic, you have inherited and developed techniques to manipulate reality through mediums of rituals, spirits, elements, and more. See Spells Rules for the general rules of spellcasting and the Spells Listing for the Occultist spell list.

#### Cantrips

At 1st level, you know three cantrips of your choice from the Occultist spell list. You learn additional Occultist cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Occultist table.

#### Spell Slots

The Occultist table shows how many spell slots you have to cast your Occultist spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

For example, if you know the 1st-level spell lightning tendril and have a 1st-level and a 2nd-level spell slot available, you can cast lightning tendril using either slot.

#### Spells Known of 1st Level and Higher

You know three 1st-level spells of your choice from the Occultist spell list.

The Spells Known column of the Occultist table shows when you learn more Occultist spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.

Additionally, when you gain a level in this class, you can choose one of the Occultist spells you know and replace it with another spell from the Occultist spell list, which also must be of a level for which you have spell slots.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your Occultist spells. Your magic comes from a practitioner's knowledge of tradition, ritual, and the way things work learned through experience, care, and cunning. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for an Occultist spell you cast and when making an attack roll with one.

Spell save DC = 8 + your proficiency bonus + your Wisdom modifier

Spell attack modifier = your proficiency bonus + your Wisdom modifier

#### Ritual Casting

You can cast any Occultist spell you know as a ritual if that spell has the ritual tag.

#### Spellcasting Focus

You can use an occult fetish as a spellcasting focus for your Occultist spells.

> [!note] Occult Fetish
> 
> Similar to a holy symbol or an arcane focus, an occult fetish is a magical focus, but one that functions for the Occultist. It can be almost anything, though usually has a somewhat macabre bent, such as a skull decorated with feathers or pendant decorated with teeth and runes. You can buy or make one for 10 gp, and it typically weighs about 1 lb.
^occult-fetish

### Occult Tradition (Level 1)

Choose an occult tradition, shaping your the techniques, features, and rites available to you from the following: Witch, Hedge Mage, Oracle, Shaman, Spiritualist, or Voidwatcher.

Your choice grants you features at 1st level, 3rd level, 6th level, and 14th level.

### Occult Rites (Level 2)

As you delve into your Tradition of occult magic, you find deviations and branches to explore that help you specialize and perfect your craft in the way that best suits you.

At 2nd Level, you gain two [Occult Rites](/3-Content/Compendiums/lists/list-optfeaturetype-kt-or.md) of your choice. Your occult rites options are detailed at the end of the occult tradition description for tradition specific Rites, and at the end of the class description for general rites. You can select from either your tradition or class list. When you gain certain Occultist levels, you gain additional occult rites of your choice.

Additionally, when you gain a level in this class, you can choose one of the Occult Rites you know and replace it with another Occult Rites that you could learn at that level. A level prerequisite in a Occult Rite refers to Occultist level, not character level.

> [!note] Class and Subclass Rites
> 
> Each occult tradition has specific rites that only they can select, and for each tradition, these are added to the pool of rites with the class rites you can select. You can select from either list when you are selecting a new rite.
^class-and-subclass-rites

> [!note] Losing Invested Objects
> 
> If a Rite creates an object, you can recreate that object if it is lost or destroyed. If the rules are not specified elsewhere, it is a process that requires any base object the Rite did and 4 hours of time. If the original still exists anywhere, it loses its magical properties when you complete this process.
^losing-invested-objects

### Occult Tradition Feature (Level 3)

At 3rd level, you gain a feature from your Occult Tradition.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Occult Tradition Feature (Level 6)

At 6th level, you gain a feature from your Occult Tradition.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Traditional Expertise (Level 10)

Starting at 10th level, your passed down knowledge of tradition gives you expertise in a skill of your tradition; choose one of your skill proficiencies from Animal Handling, Arcana, Medicine, Nature, Survival. Your proficiency bonus is doubled for any ability check you make that use of the chosen proficiency. If you have proficiency in none of the selected skills, you can instead gain proficiency in one of your choice.

Additionally, when you make a Wisdom ability check, you can draw upon your tradition and expend a spell slot to gain advantage on the check.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Occult Tradition Feature (Level 14)

At 14th level, you gain a feature from your Occult Tradition.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### The Old Ways (Level 20)

At 20th level, your mastery of ritual and tradition is extensive and unparalleled, you've unlocked ancient secrets and perfected techniques to master rituals completely. Any Occultist spell you know of 3rd level or lower becomes a ritual spell for you. When you cast a spell without the ritual tag as a ritual, it requires additional consumed material components worth 10 gold per level of the spell.

Additionally, your mastery of rituals allows you to work them more quickly. A spell cast as a ritual only takes additional turns equal to the spell's level to cast (for example, casting a 3rd level spell as a ritual would take four turns to cast, casting as your action or bonus action on the fourth turn). Spells with a casting time of a reaction cannot be cast as a ritual.

## Optional Features

> [!example]- Optional Features: Occult Rite
> ![Occult Rite](/3-Content/Compendiums/lists/list-optfeaturetype-kt-or.md#Occult%20Rite)
^list-optfeature-kt-or