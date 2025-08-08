---
title: Artificer
created: 2025/06/15 at 15:34
updated: 2025/08/07 at 22:36
permalink: artificer
source: "Tasha's Cauldron of Everything"
aliases:
  - Artificer
tags:
  - ttrpg-cli/class/artificer
  - ttrpg-cli/compendium/src/5e/tce
cssclasses: json5e-class
obsidianUIMode: preview
---

# Artificer

*Source: Tasha's Cauldron of Everything p. 9, Eberron: Rising from the Last War p. 54*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th><th colspan='5'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Infusions Known^<a href="/3-Content/Compendiums/lists/list-optfeaturetype-ai.md">Optional features from [Artificer Infusion</a>; defined in Tasha's Cauldron of Everything]</th><th class="value">Infused Items</th><th class="value">Cantrips Known</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Optional Rule: Firearm Proficiency (Level 1)' class='internal-link'>Optional Rule: Firearm Proficiency</a>, <a href='#Magical Tinkering (Level 1)' class='internal-link'>Magical Tinkering</a>, <a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a></td><td class="value">⏤</td><td class="value">⏤</td><td class="value">2</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Infuse Item (Level 2)' class='internal-link'>Infuse Item</a></td><td class="value">4</td><td class="value">2</td><td class="value">2</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Artificer Specialist (Level 3)' class='internal-link'>Artificer Specialist</a>, <a href='#The Right Tool for the Job (Level 3)' class='internal-link'>The Right Tool for the Job</a></td><td class="value">4</td><td class="value">2</td><td class="value">2</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">2</td><td class="value">2</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Artificer Specialist Feature (Level 5)' class='internal-link'>Artificer Specialist Feature</a></td><td class="value">4</td><td class="value">2</td><td class="value">2</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Tool Expertise (Level 6)' class='internal-link'>Tool Expertise</a></td><td class="value">6</td><td class="value">3</td><td class="value">2</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Flash of Genius (Level 7)' class='internal-link'>Flash of Genius</a></td><td class="value">6</td><td class="value">3</td><td class="value">2</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">6</td><td class="value">3</td><td class="value">2</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Artificer Specialist Feature (Level 9)' class='internal-link'>Artificer Specialist Feature</a></td><td class="value">6</td><td class="value">3</td><td class="value">2</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Magic Item Adept (Level 10)' class='internal-link'>Magic Item Adept</a></td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Spell-Storing Item (Level 11)' class='internal-link'>Spell-Storing Item</a></td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Magic Item Savant (Level 14)' class='internal-link'>Magic Item Savant</a></td><td class="value">10</td><td class="value">5</td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Artificer Specialist Feature (Level 15)' class='internal-link'>Artificer Specialist Feature</a></td><td class="value">10</td><td class="value">5</td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">10</td><td class="value">5</td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">10</td><td class="value">5</td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Magic Item Master (Level 18)' class='internal-link'>Magic Item Master</a></td><td class="value">12</td><td class="value">6</td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">12</td><td class="value">6</td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Soul of Artifice (Level 20)' class='internal-link'>Soul of Artifice</a></td><td class="value">12</td><td class="value">6</td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Artificer level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON (minimum of 1)

## Starting Artificer

- **Saving Throws**: Constitution, Intelligence
- **Armor**: [Item Types](/3-Content/Rules/item-types.md#Light%20Armor), [Item Types](/3-Content/Rules/item-types.md#Medium%20Armor), [shields](/3-Content/Compendiums/items/shield.md)
- **Weapons**: simple weapons, firearms (optional)
- **Tools**: [thieves' tools](/3-Content/Compendiums/items/thieves-tools-xphb.md), [tinker's tools](/3-Content/Compendiums/items/tinkers-tools-xphb.md), one type of [artisan's tools](/3-Content/Compendiums/items/artisans-tools-xphb.md) of your choice
- **Skills**: choose 2 from [Skills](/3-Content/Rules/skills.md#Arcana), [Skills](/3-Content/Rules/skills.md#History), [Skills](/3-Content/Rules/skills.md#Investigation), [Skills](/3-Content/Rules/skills.md#Medicine), [Skills](/3-Content/Rules/skills.md#Nature), [Skills](/3-Content/Rules/skills.md#Perception), and [Skills](/3-Content/Rules/skills.md#Sleight%20of%20Hand)

You start with the following items, plus anything provided by your background.

- any two simple weapons of your choice
- a [light crossbow](/3-Content/Compendiums/items/light-crossbow.md) and [20 bolts](/3-Content/Compendiums/items/crossbow-bolts-20.md)
- (a) [studded leather armor](/3-Content/Compendiums/items/studded-leather-armor.md) or (b) [scale mail](/3-Content/Compendiums/items/scale-mail.md)
- [thieves' tools](/3-Content/Compendiums/items/thieves-tools-xphb.md) and a [dungeoneer's pack](/3-Content/Compendiums/items/dungeoneers-pack-xphb.md)

Alternatively, you may start with 5d4 × 10 gp to buy your own equipment.

## Multiclassing Artificer

**Ability Score Minimum:** Intelligence 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Armor**: [Item Types](/3-Content/Rules/item-types.md#Light%20Armor), [Item Types](/3-Content/Rules/item-types.md#Medium%20Armor), [shields](/3-Content/Compendiums/items/shield.md)
- **Tools**: [thieves' tools](/3-Content/Compendiums/items/thieves-tools-xphb.md), [tinker's tools](/3-Content/Compendiums/items/tinkers-tools-xphb.md)

## Artificer

Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections. Artificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.

### Artificers in Many Worlds

Throughout the D&D multiverse, artificers create inventions and magic items of peace and war. Many lives have been brightened or saved because of the work of kind artificers, but countless lives have also been lost because of the mass destruction unleashed by certain artificers' creations.

In the Forgotten Realms, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the world of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational.

Artificers in the City of Sigil share discoveries from throughout the multiverse, and from there, the gnome artificer Vi runs a cosmos-spanning business that hires adventurers to fix problems that others deem unfixable. In Vi's home world, Eberron, magic is harnessed as a form of science and deployed throughout society, largely as a result of the wondrous ingenuity of artificers.

### Creating an Artificer

To create an artificer, consult the subsections which give you hit points, proficiencies, and starting equipment. Then look at the Artificer table to see which features you get at each level. The descriptions of those features appear below.

> [!quote] A quote from Tasha  
> 
> Artificers invent cutting-edge problems, then try to solve them-loudly and often with collateral damage.

### Multiclassing and the Artificer

If your group uses the optional rule on multiclassing in the "Player's Handbook", here's what you need to know if you choose artificer as one of your classes.

#### Ability Score Minimum

As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class, or to take a level in another class if you are already an artificer.

#### Proficiencies Gained

If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, [thieves' tools](/3-Content/Compendiums/items/thieves-tools-xphb.md), [tinker's tools](/3-Content/Compendiums/items/tinkers-tools-xphb.md).

#### Spell Slots

Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots.

## Artificer

_Source: Eberron: Rising from the Last War_

Masters of unlocking magic in everyday objects, artificers are supreme inventors. They see magic as a complex system waiting to be decoded and controlled. Artificers use tools to channel arcane power, crafting magical objects. To cast a spell, an artificer could use [alchemist's supplies](/3-Content/Compendiums/items/alchemists-supplies-xphb.md) to create a potent elixir, [calligrapher's supplies](/3-Content/Compendiums/items/calligraphers-supplies-xphb.md) to inscribe a sigil of power on an ally's armor, or [tinker's tools](/3-Content/Compendiums/items/tinkers-tools-xphb.md) to craft a temporary charm. The magic of artificers is tied to their tools and their talents.

### Arcane Science

_Source: Eberron: Rising from the Last War_

In the world of Eberron, arcane magic has been harnessed as a form of science and deployed throughout society. Artificers reflect this development. Their knowledge of magical devices, and their ability to infuse mundane items with magic, allows Eberron's most miraculous projects to continue.

During the Last War, artificers were marshaled on a massive scale. Many lives were saved because of the inventions of brave artificers, but countless lives were also lost because of the mass destruction unleashed by their creations.

### Seekers of New Lore

_Source: Eberron: Rising from the Last War_

Nothing excites an artificer quite like uncovering a new metal or discovering a source of elemental energy. In artificer circles, new inventions and strange discoveries create the most excitement. Artificers who wish to make their mark must innovate, creating something fresh, rather than iterating on familiar designs.

This drive for novelty pushes artificers to become adventurers. Eberron's main travel routes and populated regions have long since been explored. Thus, artificers seek the frontiers of civilization in hopes of making the next great discovery in arcane research.

### Creating an Artificer

_Source: Eberron: Rising from the Last War_

When creating an artificer, think about your character's relationship with the artisan who taught them their craft. Does the character have a rival? Talk to your DM about the role played by artificers in the campaign and the sort of organizations you might have ties to.

> [!note] Artificers in Other Worlds
> 
> Eberron is the world most associated with artificers, yet the class can be found throughout the D&D multiverse. In the Forgotten Realms, for example, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the World of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational. In the City of Sigil, artificers share discoveries from throughout the cosmos, and one in particular—the gnome inventor Vi—has run a multiverse-spanning business from there since leaving the world of her birth, Eberron. In the world-city Ravnica, the Izzet League trains numerous artificers, the destructiveness of whom is unparalleled in other worlds—except, perhaps, by the tinker gnomes of Krynn.
^artificers-in-other-worlds

#### Quick Build

_Source: Eberron: Rising from the Last War_

You can make an artificer quickly by following these suggestions. First, put your highest ability score in Intelligence, followed by Constitution or Dexterity. Second, choose the [Guild Artisan](/3-Content/Compendiums/backgrounds/guild-artisan.md) background.

#### Optional Rule: Multiclassing

_Source: Eberron: Rising from the Last War_

If your group uses the optional rule on multiclassing in the "Player's Handbook", here's what you need to know if you choose artificer as one of your classes.

##### Ability Score Minimum

_Source: Eberron: Rising from the Last War_

As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class, or to take a level in another class if you are already an artificer.

##### Proficiencies Gained

_Source: Eberron: Rising from the Last War_

If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, [thieves' tools](/3-Content/Compendiums/items/thieves-tools-xphb.md), [tinker's tools](/3-Content/Compendiums/items/tinkers-tools-xphb.md).

##### Spell Slots

_Source: Eberron: Rising from the Last War_

Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots.

## Class Features

### Optional Rule: Firearm Proficiency (Level 1)

The secrets of creating and operating gunpowder weapons have been discovered in various corners of the D&D multiverse. If your Dungeon Master uses the rules on firearms in "chapter 9" of the "Dungeon Master's Guide" and your artificer has been exposed to the operation of such weapons, your artificer is proficient with them.

### Magical Tinkering (Level 1)

*1st-level artificer feature*

You've learned how to invest a spark of magic into mundane objects. To use this ability, you must have [thieves' tools](/3-Content/Compendiums/items/thieves-tools-xphb.md) or [artisan's tools](/3-Content/Compendiums/items/artisans-tools-xphb.md) in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:

- The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.  
- Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.  
- The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.  
- A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.  

The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.

You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.

### Spellcasting (Level 1)

*1st-level artificer feature*

You've studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don't appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.

#### Tools Required

You produce your artificer spell effects through your tools. You must have a spellcasting focus—specifically [thieves' tools](/3-Content/Compendiums/items/thieves-tools-xphb.md) or some kind of [artisan's tool](/3-Content/Compendiums/items/artisans-tools-xphb.md)—in hand when you cast any spell with this Spellcasting feature (meaning the spell has an 'M' component when you cast it). You must be proficient with the tool to use it in this way. See "chapter 5", "Equipment," in the "Player's Handbook" for descriptions of these tools.

After you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.

> [!note] The Magic of Artifice
> 
> As an artificer, you use tools when you cast your spells. When describing your spellcasting, think about how you're using a tool to perform the spell effect. If you cast [cure wounds](/3-Content/Compendiums/spells/cure-wounds-xphb.md) using [alchemist's supplies](/3-Content/Compendiums/items/alchemists-supplies-xphb.md), you could be quickly producing a salve. If you cast it using [tinker's tools](/3-Content/Compendiums/items/tinkers-tools-xphb.md), you might have a miniature mechanical spider that binds wounds. When you cast [poison spray](/3-Content/Compendiums/spells/poison-spray-xphb.md), you could fling foul chemicals or use a wand that spits venom. The effect of the spell is the same as for a spellcaster of any other class, but your method of spellcasting is special.
> 
> The same principle applies when you prepare your spells. As an artificer, you don't study a spellbook or pray to prepare your spells. Instead, you work with your tools and create the specialized items you'll use to produce your effects. If you replace [cure wounds](/3-Content/Compendiums/spells/cure-wounds-xphb.md) with [heat metal](/3-Content/Compendiums/spells/heat-metal-xphb.md), you might be altering the device you use to heal—perhaps modifying a tool so that it channels heat instead of healing energy.
> 
> Such details don't limit you in any way or provide you with any benefit beyond the spell's effects. You don't have to justify how you're using tools to cast a spell. But describing your spellcasting creatively is a fun way to distinguish yourself from other spellcasters.
^the-magic-of-artifice

#### Cantrips (0-Level Spells)

At 1st level, you know two cantrips of your choice from the artificer spell list. At higher levels, you learn additional artificer cantrips of your choice, as shown in the Cantrips Known column of the Artificer table.

When you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list.

#### Preparing and Casting Spells

The Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

You prepare the list of artificer spells that are available for you to cast, choosing from the artificer spell list. When you do so, choose a number of artificer spells equal to your Intelligence modifier + half your artificer level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.

For example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell [cure wounds](/3-Content/Compendiums/spells/cure-wounds-xphb.md), you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.

You can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list.

#### Spellcasting Ability

Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: your proficiency bonus + your Intelligence</span>

<span class='abilityAttackMod'>**Spell attack modifier**: your proficiency bonus + your Intelligence</span>

#### Ritual Casting

You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the spell prepared.

### Infuse Item (Level 2)

*2nd-level artificer feature*

You've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items.

### Infusions Known (Level 2)

When you gain this feature, pick four artificer infusions to learn, choosing from the "Artificer Infusions^[Optional features from [Artificer Infusion](/3-Content/Compendiums/lists/list-optfeaturetype-ai.md); defined in Tasha's Cauldron of Everything]" section at the end of the class's description. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.

Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one.

> [!note] Artificer Infusions
> 
> Artificers have invented numerous magical infusions, extraordinary processes that rapidly create magic items. To many, artificers seem like wonderworkers, accomplishing in hours what others need weeks to complete.
> 
> The description of each of the following infusions details the type of item that can receive it, along with whether the resulting magic item requires attunement.
> 
> Some infusions specify a minimum artificer level. You can't learn such an infusion until you are at least that level.
> 
> Unless an infusion's description says otherwise, you can't learn an infusion more than once.
^artificer-infusions

#### Infusing an Item

Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see ""Attunement"" in chapter 7 of the "Dungeon Master's Guide").

Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days have passed equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you give up your knowledge of the infusion for another one.

You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion immediately ends, and then the new infusion applies.

If an infusion ends on an item that contains other things, like a [bag of holding](/3-Content/Compendiums/items/bag-of-holding-xdmg.md), its contents harmlessly appear in and around its space.

### Artificer Specialist (Level 3)

*3rd-level artificer feature*

Choose the type of specialist you are, each of which is detailed at the end of the class's description. Your choice grants you features at 5th level and again at 9th and 15th level.

### The Right Tool for the Job (Level 3)

*3rd-level artificer feature*

You've learned how to produce exactly the tool you need: with [thieves' tools](/3-Content/Compendiums/items/thieves-tools-xphb.md) or [artisan's tools](/3-Content/Compendiums/items/artisans-tools-xphb.md) in hand, you can magically create one set of [artisan's tools](/3-Content/Compendiums/items/artisans-tools-xphb.md) in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.

### Ability Score Improvement (Level 4)

*4th-level artificer feature*

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Artificer Specialist Feature (Level 5)

*5th-level artificer feature*

You gain a feature granted by your Artificer Specialist choice.

### Tool Expertise (Level 6)

*6th-level artificer feature*

Your proficiency bonus is now doubled for any ability check you make that uses your proficiency with a tool.

### Flash of Genius (Level 7)

*7th-level artificer feature*

You've gained the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet of you makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier to the roll.

You can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a long rest.

### Ability Score Improvement (Level 8)

*8th-level artificer feature*

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Artificer Specialist Feature (Level 9)

*9th-level artificer feature*

You gain a feature granted by your Artificer Specialist choice.

### Magic Item Adept (Level 10)

*10th-level artificer feature*

You've achieved a profound understanding of how to use and make magic items:

- You can attune to up to four magic items at once.  
- If you craft a magic item with a rarity of common or uncommon, it takes you a quarter of the normal time, and it costs you half as much of the usual gold.  

### Spell-Storing Item (Level 11)

*11th-level artificer feature*

You can now store a spell in an object. Whenever you finish a long rest, you can touch one simple or martial weapon or one item that you can use as a spellcasting focus, and you store a spell in it, choosing a 1stor 2nd-level spell from the artificer spell list that requires 1 action to cast (you needn't have it prepared).

While holding the object, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier. If the spell requires [Conditions](/3-Content/Rules/conditions.md#Concentration), the creature must concentrate. The spell stays in the object until it's been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again to store a spell in an object.

### Ability Score Improvement (Level 12)

*12th-level artificer feature*

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Magic Item Savant (Level 14)

*14th-level artificer feature*

Your skill with magic items deepens:

- You can attune to up to five magic items at once.  
- You ignore all class, race, spell, and level requirements on attuning to or using a magic item.  

### Artificer Specialist Feature (Level 15)

*15th-level artificer feature*

You gain a feature granted by your Artificer Specialist choice.

### Ability Score Improvement (Level 16)

*16th-level artificer feature*

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Magic Item Master (Level 18)

*18th-level artificer feature*

You can now attune to up to six magic items at once.

### Ability Score Improvement (Level 19)

*19th-level artificer feature*

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Soul of Artifice (Level 20)

*20th-level artificer feature*

You have developed a mystical connection to your magic items, which you can draw on for protection:

- You gain a +1 bonus to all saving throws per magic item you are currently attuned to.  
- If you're reduced to 0 hit points but not killed outright, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0.  

## Optional Features

> [!example]- Optional Features: Artificer Infusion
> ![Artificer Infusion](/3-Content/Compendiums/lists/list-optfeaturetype-ai.md#Artificer%20Infusion)
^list-optfeature-ai