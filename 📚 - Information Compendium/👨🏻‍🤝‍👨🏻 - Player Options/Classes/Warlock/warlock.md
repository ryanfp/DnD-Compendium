---
obsidianUIMode: preview
cssclasses: json5e-class
tags: [ttrpg-cli/class/warlock, ttrpg-cli/compendium/src/5e/phb]
aliases:
  - Warlock
created: 2025/06/15 at 15:38
updated: 2025/07/13 at 00:17
---

# Warlock

*Source: Player's Handbook p. 105. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='8'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Cantrips Known</th><th class="value">Spells Known</th><th class="value">Spell Slots</th><th class="value">Slot Level</th><th class="value"><a href="/3-Content/Compendiums/lists/list-optfeaturetype-ei.md">Invocations Known</a></th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Pact Magic (Level 1)' class='internal-link'>Pact Magic</a>, <a href='#Otherworldly Patron (Level 1)' class='internal-link'>Otherworldly Patron</a></td><td class="value">2</td><td class="value">2</td><td class="value">1</td><td class="value">1st</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Eldritch Invocations (Level 2)' class='internal-link'>Eldritch Invocations</a></td><td class="value">2</td><td class="value">3</td><td class="value">2</td><td class="value">1st</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Pact Boon (Level 3)' class='internal-link'>Pact Boon</a></td><td class="value">2</td><td class="value">4</td><td class="value">2</td><td class="value">2nd</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a>, <a href='#Eldritch Versatility (Level 4)' class='internal-link'>Eldritch Versatility</a></td><td class="value">3</td><td class="value">5</td><td class="value">2</td><td class="value">2nd</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"></td><td class="value">3</td><td class="value">6</td><td class="value">2</td><td class="value">3rd</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Otherworldly Patron feature (Level 6)' class='internal-link'>Otherworldly Patron feature</a></td><td class="value">3</td><td class="value">7</td><td class="value">2</td><td class="value">3rd</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">3</td><td class="value">8</td><td class="value">2</td><td class="value">4th</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">9</td><td class="value">2</td><td class="value">4th</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">10</td><td class="value">2</td><td class="value">5th</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Otherworldly Patron feature (Level 10)' class='internal-link'>Otherworldly Patron feature</a></td><td class="value">4</td><td class="value">10</td><td class="value">2</td><td class="value">5th</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Mystic Arcanum (6th level) (Level 11)' class='internal-link'>Mystic Arcanum (6th level)</a></td><td class="value">4</td><td class="value">11</td><td class="value">3</td><td class="value">5th</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">11</td><td class="value">3</td><td class="value">5th</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Mystic Arcanum (7th level) (Level 13)' class='internal-link'>Mystic Arcanum (7th level)</a></td><td class="value">4</td><td class="value">12</td><td class="value">3</td><td class="value">5th</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Otherworldly Patron feature (Level 14)' class='internal-link'>Otherworldly Patron feature</a></td><td class="value">4</td><td class="value">12</td><td class="value">3</td><td class="value">5th</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Mystic Arcanum (8th level) (Level 15)' class='internal-link'>Mystic Arcanum (8th level)</a></td><td class="value">4</td><td class="value">13</td><td class="value">3</td><td class="value">5th</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">13</td><td class="value">3</td><td class="value">5th</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Mystic Arcanum (9th level) (Level 17)' class='internal-link'>Mystic Arcanum (9th level)</a></td><td class="value">4</td><td class="value">14</td><td class="value">4</td><td class="value">5th</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"></td><td class="value">4</td><td class="value">14</td><td class="value">4</td><td class="value">5th</td><td class="value">8</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">15</td><td class="value">4</td><td class="value">5th</td><td class="value">8</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Eldritch Master (Level 20)' class='internal-link'>Eldritch Master</a></td><td class="value">4</td><td class="value">15</td><td class="value">4</td><td class="value">5th</td><td class="value">8</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Warlock level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON (minimum of 1)

## Starting Warlock

- **Saving Throws**: Charisma, Wisdom
- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor)
- **Weapons**: simple weapons
- **Tools**: none
- **Skills**: choose 2 from [Arcana](/3-Content/Rules/skills.md#Arcana), [Deception](/3-Content/Rules/skills.md#Deception), [History](/3-Content/Rules/skills.md#History), [Intimidation](/3-Content/Rules/skills.md#Intimidation), [Investigation](/3-Content/Rules/skills.md#Investigation), [Nature](/3-Content/Rules/skills.md#Nature), and [Religion](/3-Content/Rules/skills.md#Religion)

You start with the following items, plus anything provided by your background.

- (a) a [light crossbow](/3-Content/Compendiums/items/light-crossbow.md) and [20 bolts](/3-Content/Compendiums/items/crossbow-bolts-20.md) or (b) any simple weapon
- (a) a [component pouch](/3-Content/Compendiums/items/component-pouch-xphb.md) or (b) an [arcane focus](/3-Content/Compendiums/items/arcane-focus-xphb.md)
- (a) a [scholar's pack](/3-Content/Compendiums/items/scholars-pack-xphb.md) or (b) a [dungeoneer's pack](/3-Content/Compendiums/items/dungeoneers-pack-xphb.md)
- [Leather armor](/3-Content/Compendiums/items/leather-armor.md), any simple weapon, and two [daggers](/3-Content/Compendiums/items/dagger.md)

Alternatively, you may start with 4d4 × 10 gp to buy your own equipment.

## Multiclassing Warlock

**Ability Score Minimum:** Charisma 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor)
- **Weapons**: simple weapons

## Warlock

With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will.

As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic.

Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world.

Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.

### Sworn and Beholden

A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf.

The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock's being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons.

### Delvers into Secrets

Warlocks are driven by an insatiable need for knowledge and power, which compels them into their pacts and shapes their lives. This thirst drives warlocks into their pacts and shapes their later careers as well.

Stories of warlocks binding themselves to fiends are widely known. But many warlocks serve patrons that are not fiendish. Sometimes a traveler in the wilds comes to a strangely beautiful tower, meets its fey lord or lady, and stumbles into a pact without being fully aware of it. And sometimes, while poring over tomes of forbidden lore, a brilliant but crazed student's mind is opened to realities beyond the material world and to the alien beings that dwell in the outer void.

Once a pact is made, a warlock's thirst for knowledge and power can't be slaked with mere study and research. No one makes a pact with such a mighty patron if he or she doesn't intend to use the power thus gained. Rather, the vast majority of warlocks spend their days in active pursuit of their goals, which typically means some kind of adventuring. Furthermore, the demands of their patrons drive warlocks toward adventure.

### Creating a Warlock

As you make your warlock character, spend some time thinking about your patron and the obligations that your pact imposes upon you. What led you to make the pact, and how did you make contact with your patron? Were you seduced into summoning a devil, or did you seek out the ritual that would allow you to make contact with an alien elder god? Did you search for your patron, or did your patron find and choose you? Do you chafe under the obligations of your pact or serve joyfully in anticipation of the rewards promised to you?

Work with your DM to determine how big a part your pact will play in your character's adventuring career. Your patron's demands might drive you into adventures, or they might consist entirely of small favors you can do between adventures.

What kind of relationship do you have with your patron? Is it friendly, antagonistic, uneasy, or romantic? How important does your patron consider you to be? What part do you play in your patron's plans? Do you know other servants of your patron?

How does your patron communicate with you? If you have a familiar, it might occasionally speak with your patron's voice. Some warlocks find messages from their patrons etched on trees, mingled among tea leaves, or adrift in the clouds—messages that only the warlock can see. Other warlocks converse with their patrons in dreams or waking visions, or deal only with intermediaries.

#### Quick Build

You can make a warlock quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Constitution. Second, choose the [charlatan](/3-Content/Compendiums/backgrounds/charlatan.md) background. Third, choose the [eldritch blast](/3-Content/Compendiums/spells/eldritch-blast-xphb.md) and [chill touch](/3-Content/Compendiums/spells/chill-touch-xphb.md) cantrips, along with the 1st-level spells [charm person](/3-Content/Compendiums/spells/charm-person-xphb.md) and [witch bolt](/3-Content/Compendiums/spells/witch-bolt-xphb.md).

> [!quote] A quote from Xarren, herald of Acamar  
> 
> You think me mad? I think true insanity is being content to live a life of mortal drudgery when knowledge and power is there for the taking in the realm beyond.

Warlocks are finders and keepers of secrets. They push at the edge of our understanding of the world, always seeking to expand their expertise. Where sages or wizards might heed a clear sign of danger and end their research, a warlock plunges ahead, heedless of the cost. Thus, it takes a peculiar mixture of intelligence, curiosity, and recklessness to produce a warlock. Many folk would describe that combination as evidence of madness. Warlocks see it as a demonstration of bravery.

Warlocks are defined by two elements that work in concert to forge their path into this class. The first element is the event or circumstances that led to a warlock's entering into a pact with a planar entity. The second one is the nature of the entity a warlock is bound to. Unlike clerics, who typically embrace a deity and that god's ethos, a warlock might have no love for a patron, or vice versa.

The sections that follow provide ways to embellish a warlock character that could generate some intriguing story and roleplaying opportunities.

> [!quote] A quote from Xanathar  
> 
> So you got your powers by making a contract with something? Is it in writing, perchance? Well, never mind. Just tell me this: Can I get your powers by eating you?

## Patron's Attitude

_Source: Xanathar's Guide to Everything_

Every relationship is a two-way street, but in the case of warlocks and their patrons it's not necessarily true that both sides of the street are the same width or made of the same stuff. The feeling that a warlock holds for their patron, whether positive or negative, might be reciprocated by the patron, or the two participants in the pact might view one another with opposing emotions.

When you determine the attitude your warlock character holds toward your patron, also consider how things look from the patron's perspective. How does your patron behave toward you? Is your patron a friend and ally, or an enemy that grants you power only because you forced a pact upon it?

**Patron Attitudes**

`dice: [](warlock.md#^patron-attitudes)`

| dice: d6 | Attitude |
|----------|----------|
| 1 | Your patron has guided and helped your family for generations and is kindly toward you. |
| 2 | Each interaction with your capricious patron is a surprise, whether pleasant or painful. |
| 3 | Your patron is the spirit of a long-dead hero who sees your pact as a way for it to continue to influence the world. |
| 4 | Your patron is a strict disciplinarian but treats you with a measure of respect. |
| 5 | Your patron tricked you into a pact and treats you as a slave. |
| 6 | You are mostly left to your own devices with no interference from your patron. Sometimes you dread the demands it will make when it does appear. |

^patron-attitudes

## Special Terms of the Pact

_Source: Xanathar's Guide to Everything_

A pact can range from a loose agreement to a formal contract with lengthy, detailed clauses and lists of requirements. The terms of a pact—what a warlock must do to receive a patron's favor—are always dictated by the patron. On occasion, those terms include a special proviso that might seem odd or whimsical, but warlocks take these dictates as seriously as they do the other requirements of their pacts.

Does your character have a pact that requires you to change your behavior in an unusual or seemingly frivolous way? Even if your patron hasn't imposed such a duty on you already, that's not to say it couldn't still happen.

**Special Terms**

`dice: [](warlock.md#^special-terms)`

| dice: d6 | Term |
|----------|------|
| 1 | When directed, you must take immediate action against a specific enemy of your patron. |
| 2 | Your pact tests your willpower; you are required to abstain from alcohol and other intoxicants. |
| 3 | At least once a day, you must inscribe or carve your patron's name or symbol on the wall of a building. |
| 4 | You must occasionally conduct bizarre rituals to maintain your pact. |
| 5 | You can never wear the same outfit twice, since your patron finds such predictability to be boring. |
| 6 | When you use an eldritch invocation, you must speak your patron's name aloud or risk incurring its displeasure. |

^special-terms

## Binding Mark

_Source: Xanathar's Guide to Everything_

Some patrons make a habit of, and often enjoy, marking the warlocks under their sway in some fashion. A binding mark makes it clear—to those who know about such things—that the individual in question is bound to the patron's service. A warlock might take advantage of such a mark, claiming it as proof of one's pact, or might want to keep it under wraps (if possible) to avoid the difficulties it might bring.

If your warlock's pact comes with a binding mark, how you feel about displaying it probably depends on the nature of your relationship with the one who gave it to you. Is the mark a source of pride or something you are secretly ashamed of?

**Binding Marks**

`dice: [](warlock.md#^binding-marks)`

| dice: d6 | Mark |
|----------|------|
| 1 | One of your eyes looks the same as one of your patron's eyes. |
| 2 | Each time you wake up, the small blemish on your face appears in a different place. |
| 3 | You display outward symptoms of a disease but suffer no ill effects from it. |
| 4 | Your tongue is an unnatural color. |
| 5 | You have a vestigial tail. |
| 6 | Your nose glows in the dark. |

^binding-marks

## Class Features

### Pact Magic (Level 1)

Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See "chapter 10" for the general rules of spellcasting and "chapter 11" for the warlock spell list.

#### Cantrips

You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.

#### Spell Slots

The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.

For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell [witch bolt](/3-Content/Compendiums/spells/witch-bolt-xphb.md), you must spend one of those slots, and you cast it as a 3rd-level spell.

#### Spells Known of 1st Level and Higher

At 1st level, you know two 1st-level spells of your choice from the warlock spell list.

The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.

Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.

#### Spellcasting Ability

Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: your proficiency bonus + your Charisma</span>

<span class='abilityAttackMod'>**Spell attack modifier**: your proficiency bonus + your Charisma</span>

#### Spellcasting Focus

You can use an [arcane focus](/3-Content/Compendiums/items/arcane-focus-xphb.md) as a spellcasting focus for your warlock spells.

### Otherworldly Patron (Level 1)

At 1st level, you have struck a bargain with an otherworldly being chosen from the list of available patrons. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.

### Eldritch Invocations (Level 2)

In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.

At 2nd level, you gain two eldritch invocations of your choice. A list of the available options can be found on the [Optional Features](/3-Content/Compendiums/lists/list-optfeaturetype-ei.md) page. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.

Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.

If an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class.

### Pact Boon (Level 3)

At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.

- [Pact of the Chain](/3-Content/Compendiums/optional-features/pact-of-the-chain-xphb.md)  
- [Pact of the Blade](/3-Content/Compendiums/optional-features/pact-of-the-blade-xphb.md)  
- [Pact of the Tome](/3-Content/Compendiums/optional-features/pact-of-the-tome-xphb.md)  

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Eldritch Versatility (Level 4)

_Source: Tasha's Cauldron of Everything p. 70_

*4th-level warlock [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing a change of focus in your occult studies:

- Replace one cantrip you learned from this class's Pact Magic feature with another cantrip from the warlock spell list.  
- Replace the option you chose for the Pact Boon feature with one of that feature's other options.  
- If you're 12th level or higher, replace one spell from your Mystic Arcanum feature with another warlock spell of the same level.  

If this change makes you ineligible for any of your Eldritch Invocations, you must also replace them now, choosing invocations for which you qualify.

### Otherworldly Patron Feature (Level 6)

At 6th level, you gain a feature granted by your Otherworldly Patron.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Otherworldly Patron Feature (Level 10)

At 10th level, you gain a feature granted by your Otherworldly Patron.

### Mystic Arcanum (6th level) (Level 11)

At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.

You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.

At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Mystic Arcanum (7th level) (Level 13)

At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one 7th-level spell from the warlock spell list as this arcanum.

You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.

### Otherworldly Patron Feature (Level 14)

At 14th level, you gain a feature granted by your Otherworldly Patron.

### Mystic Arcanum (8th level) (Level 15)

At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one 8th-level spell from the warlock spell list as this arcanum.

You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Mystic Arcanum (9th level) (Level 17)

At 17th level, your patron bestows upon you a magical secret called an arcanum. Choose one 9th-level spell from the warlock spell list as this arcanum.

You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Eldritch Master (Level 20)

At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.

## Optional Features

> [!example]- Optional Features: Eldritch Invocation
> ![Eldritch Invocation](/3-Content/Compendiums/lists/list-optfeaturetype-ei.md#Eldritch%20Invocation)
^list-optfeature-ei

> [!example]- Optional Features: Pact Boon
> ![Pact Boon](/3-Content/Compendiums/lists/list-optfeaturetype-pb.md#Pact%20Boon)
^list-optfeature-pb