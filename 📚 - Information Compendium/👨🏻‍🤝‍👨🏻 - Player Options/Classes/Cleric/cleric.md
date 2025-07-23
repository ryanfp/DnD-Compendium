---
obsidianUIMode: preview
cssclasses: json5e-class
tags: [ttrpg-cli/class/cleric, ttrpg-cli/compendium/src/5e/phb]
aliases:
  - Cleric
created: 2025/06/15 at 15:35
updated: 2025/07/22 at 21:31
permalink: cleric
title: Cleric
---

# Cleric

*Source: Player's Handbook p. 56. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='4'></th><th colspan='9'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Cantrips Known</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th><th class="spellSlot">6th</th><th class="spellSlot">7th</th><th class="spellSlot">8th</th><th class="spellSlot">9th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a>, <a href='#Divine Domain (Level 1)' class='internal-link'>Divine Domain</a></td><td class="value">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Channel Divinity (Level 2)' class='internal-link'>Channel Divinity</a>, <a href='#Channel Divinity: Harness Divine Power (Level 2)' class='internal-link'>Channel Divinity: Harness Divine Power</a>, <a href='#Divine Domain feature (Level 2)' class='internal-link'>Divine Domain feature</a></td><td class="value">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"></td><td class="value">3</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a>, <a href='#Cantrip Versatility (Level 4)' class='internal-link'>Cantrip Versatility</a></td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Destroy Undead (CR 1/2) (Level 5)' class='internal-link'>Destroy Undead (CR 1/2)</a></td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Channel Divinity (Level 6)' class='internal-link'>Channel Divinity</a>, <a href='#Divine Domain feature (Level 6)' class='internal-link'>Divine Domain feature</a></td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a>, <a href='#Destroy Undead (CR 1) (Level 8)' class='internal-link'>Destroy Undead (CR 1)</a>, <a href='#Divine Domain feature (Level 8)' class='internal-link'>Divine Domain feature</a></td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Divine Intervention (Level 10)' class='internal-link'>Divine Intervention</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Destroy Undead (CR 2) (Level 11)' class='internal-link'>Destroy Undead (CR 2)</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Destroy Undead (CR 3) (Level 14)' class='internal-link'>Destroy Undead (CR 3)</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Destroy Undead (CR 4) (Level 17)' class='internal-link'>Destroy Undead (CR 4)</a>, <a href='#Divine Domain feature (Level 17)' class='internal-link'>Divine Domain feature</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Channel Divinity (Level 18)' class='internal-link'>Channel Divinity</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Divine Intervention Improvement (Level 20)' class='internal-link'>Divine Intervention Improvement</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Cleric level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON (minimum of 1)

## Starting Cleric

- **Saving Throws**: Charisma, Wisdom
- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor), [medium armor](/3-Content/Rules/item-types.md#Medium%20Armor), [shields](/3-Content/Compendiums/items/shield.md)
- **Weapons**: simple weapons
- **Tools**: none
- **Skills**: choose 2 from [History](/3-Content/Rules/skills.md#History), [Insight](/3-Content/Rules/skills.md#Insight), [Medicine](/3-Content/Rules/skills.md#Medicine), [Persuasion](/3-Content/Rules/skills.md#Persuasion), and [Religion](/3-Content/Rules/skills.md#Religion)

You start with the following items, plus anything provided by your background.

- (a) a [mace](/3-Content/Compendiums/items/mace.md) or (b) a [warhammer](/3-Content/Compendiums/items/warhammer.md) (if proficient)
- (a) [scale mail](/3-Content/Compendiums/items/scale-mail.md), (b) [leather armor](/3-Content/Compendiums/items/leather-armor.md), or (c) [chain mail](/3-Content/Compendiums/items/chain-mail.md) (if proficient)
- (a) a [light crossbow](/3-Content/Compendiums/items/light-crossbow.md) and [20 bolts](/3-Content/Compendiums/items/crossbow-bolts-20.md) or (b) any simple weapon
- (a) a [priest's pack](/3-Content/Compendiums/items/priests-pack-xphb.md) or (b) an [explorer's pack](/3-Content/Compendiums/items/explorers-pack-xphb.md)
- A [shield](/3-Content/Compendiums/items/shield.md) and a [holy symbol](/3-Content/Compendiums/items/holy-symbol-xphb.md)

Alternatively, you may start with 5d4 × 10 gp to buy your own equipment.

## Multiclassing Cleric

**Ability Score Minimum:** Wisdom 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor), [medium armor](/3-Content/Rules/item-types.md#Medium%20Armor), [shields](/3-Content/Compendiums/items/shield.md)

## Cleric

Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions.

Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foe's fall.

Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions.

Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.

### Healers and Warriors

Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don't grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.

Harnessing divine magic doesn't rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity's wishes.

Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.

### Divine Agents

Not every acolyte or officiant at a temple or shrine is a cleric. Some priests are called to a simple life of temple service, carrying out their gods' will through prayer and sacrifice, not by magic and strength of arms. In some cities, priesthood amounts to a political office, viewed as a stepping stone to higher positions of authority and involving no communion with a god at all. True clerics are rare in most hierarchies.

When a cleric takes up an adventuring life, it is usually because his or her god demands it. Pursuing the goals of the gods often involves braving dangers beyond the walls of civilization, smiting evil or seeking holy relics in ancient tombs. Many clerics are also expected to protect their deities' worshipers, which can mean fighting rampaging orcs, negotiating peace between warring nations, or sealing a portal that would allow a demon prince to enter the world.

Most adventuring clerics maintain some connection to established temples and orders of their faiths. A temple might ask for a cleric's aid, or a high priest might be in a position to demand it.

### Creating a Cleric

As you create a cleric, the most important question to consider is which deity to serve and what principles you want your character to embody. Appendix B includes lists of many of the gods of the multiverse. Check with your DM to learn which deities are in your campaign.

Once you've chosen a deity, consider your cleric's relationship to that god. Did you enter this service willingly? Or did the god choose you, impelling you into service with no regard for your wishes? How do the temple priests of your faith regard you: as a champion or a troublemaker? What are your ultimate goals? Does your deity have a special task in mind for you? Or are you striving to prove yourself worthy of a great quest?

#### Quick Build

You can make a cleric quickly by following these suggestions. First, Wisdom should be your highest ability score, followed by Strength or Constitution. Second, choose the [acolyte](/3-Content/Compendiums/backgrounds/acolyte.md) background.

> [!quote] A quote from Riggby the patriarch  
> 
> To become a cleric is to become a messenger of the gods. The power the divine offers is great, but it always comes with tremendous responsibility.

Almost all the folk in the world who revere a deity live their lives without ever being directly touched by a divine being. As such, they can never know what it feels like to be a cleric—someone who is not only a devout worshiper, but who has also been invested with a measure of a deity's power.

The question has long been debated: Does a mortal become a cleric as a consequence of deep devotion to one's deity, thereby attracting the god's favor? Or is it the deity who sees the potential in a person and calls that individual into service? Ultimately, perhaps, the answer doesn't matter. However clerics come into being, the world needs clerics as much as clerics and deities need each other.

If you're playing a cleric character, the following sections offer ways to add some detail to that character's history and personality.

> [!quote] A quote from Xanathar  
> 
> I don't understand the attraction of gods. Why would anyone worship anything other than me?

## Temple

_Source: Xanathar's Guide to Everything_

Most clerics start their lives of service as priests in an order, then later realize that they have been blessed by their god with the qualities needed to become a cleric. To prepare for this new duty, candidates typically receive instruction from a cleric of a temple or another place of study devoted to their deity.

Some temples are cut off from the world so that their occupants can focus on devotions, while other temples open their doors to minister to and heal the masses. What is noteworthy about the temple you studied at?

**Temple**

`dice: [](cleric.md#^temple)`

| dice: d6 | Temple |
|----------|--------|
| 1 | Your temple is said to be the oldest surviving structure built to honor your god. |
| 2 | Acolytes of several like-minded deities all received instruction together in your temple. |
| 3 | You come from a temple famed for the brewery it operates. Some say you smell like one of its ales. |
| 4 | Your temple is a fortress and a proving ground that trains warrior-priests. |
| 5 | Your temple is a peaceful, humble place, filled with vegetable gardens and simple priests. |
| 6 | You served in a temple in the Outer Planes. |

^temple

### Keepsake

_Source: Xanathar's Guide to Everything_

Many clerics have items among their personal gear that symbolize their faith, remind them of their vows, or otherwise help to keep them on their chosen paths. Even though such an item is not imbued with divine power, it is vitally important to its owner because of what it represents.

**Keepsake**

`dice: [](cleric.md#^keepsake)`

| dice: d6 | Keepsake |
|----------|----------|
| 1 | The finger bone of a saint |
| 2 | A metal-bound book that tells how to hunt and destroy infernal creatures |
| 3 | A pig's whistle that reminds you of your humble and beloved mentor |
| 4 | A braid of hair woven from the tail of a unicorn |
| 5 | A scroll that describes how best to rid the world of necromancers |
| 6 | A runestone said to be blessed by your god |

^keepsake

### Secret

_Source: Xanathar's Guide to Everything_

No mortal soul is entirely free of second thoughts or doubt. Even a cleric must grapple with dark desires or the forbidden attraction of turning against the teachings of one's deity.

If you haven't considered this aspect of your character yet, see the table entries for some possibilities, or use them for inspiration. Your deep, dark secret might involve something you did (or are doing), or it could be rooted in the way you feel about the world and your role in it.

**Secret**

`dice: [](cleric.md#^secret)`

| dice: d6 | Secret |
|----------|--------|
| 1 | An imp offers you counsel. You try to ignore the creature, but sometimes its advice is helpful. |
| 2 | You believe that, in the final analysis, the gods are nothing more than ultrapowerful mortal creatures. |
| 3 | You acknowledge the power of the gods, but you think that most events are dictated by pure chance. |
| 4 | Even though you can work divine magic, you have never truly felt the presence of a divine essence within yourself. |
| 5 | You are plagued by nightmares that you believe are sent by your god as punishment for some unknown transgression. |
| 6 | In times of despair, you feel that you are but a plaything of the gods, and you resent their remoteness. |

^secret

> [!note] Serving a Pantheon, Philosophy, or Force
> 
> The typical cleric is an ordained servant of a particular god and chooses a Divine Domain associated with that deity. The cleric's magic flows from the god or the god's sacred realm, and often the cleric bears a holy symbol that represents that divinity.
> 
> Some clerics, especially in a world like Eberron, serve a whole pantheon, rather than a single deity. In certain campaigns, a cleric might instead serve a cosmic force, such as life or death, or a philosophy or concept, such as love, peace, or one of the nine alignments. Chapter 1 of the Dungeon Master's Guide explores options like these, in the section "Gods of Your World."
> 
> Talk with your DM about the divine options available in your campaign, whether they're gods, pantheons, philosophies, or cosmic forces. Whatever being or thing your cleric ends up serving, choose a Divine Domain that is appropriate for it, and if it doesn't have a holy symbol, work with your DM to design one.
> 
> The cleric's class features often refer to your deity. If you are devoted to a pantheon, cosmic force, or philosophy, your cleric features still work for you as written. Think of the references to a god as references to the divine thing you serve that gives you your magic.
^serving-a-pantheon-philosophy-or-force

## Class Features

### Spellcasting (Level 1)

As a conduit for divine power, you can cast cleric spells. See "chapter 10" for the general rules of spellcasting and "chapter 11" for a selection of cleric spells.

#### Cantrips

At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.

#### Preparing and Casting Spells

The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.

For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell [cure wounds](/3-Content/Compendiums/spells/cure-wounds-xphb.md), you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.

You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: your proficiency bonus + your Wisdom</span>

<span class='abilityAttackMod'>**Spell attack modifier**: your proficiency bonus + your Wisdom</span>

#### Ritual Casting

You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.

#### Spellcasting Focus

You can use a [holy symbol](/3-Content/Compendiums/items/holy-symbol-xphb.md) as a spellcasting focus for your cleric spells.

### Divine Domain (Level 1)

Choose one domain related to your deity from the list of available domains. Each domain is detailed in their own feature, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.

#### Domain Spells

Each domain has a list of spells—its domain spells—that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.

If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.

### Channel Divinity (Level 2)

At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.

When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.

Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.

Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.

### Channel Divinity: Turn Undead (Level 2)

As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.

A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the [Dash](/3-Content/Rules/actions.md#Dash) action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the [Dodge](/3-Content/Rules/actions.md#Dodge) action.

### Channel Divinity: Harness Divine Power (Level 2)

_Source: Tasha's Cauldron of Everything p. 30_

*2nd-level cleric [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). The number of times you can use this feature is based on the level you've reached in this class: 2nd level, once; 6th level, twice; and 18th level, thrice. You regain all expended uses when you finish a long rest.

### Divine Domain Feature (Level 2)

At 2nd level, you gain a feature from your Divine Domain.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Cantrip Versatility (Level 4)

_Source: Tasha's Cauldron of Everything p. 30_

*4th-level cleric [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the cleric spell list.

### Destroy Undead (CR 1/2) (Level 5)

Starting at 5th level, when an undead of CR 1/2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.

### Channel Divinity (Level 6)

Beginning at 6th level, you can use your Channel Divinity twice between rests.

### Divine Domain Feature (Level 6)

At 6th level, you gain a feature from your Divine Domain.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Destroy Undead (CR 1) (Level 8)

Starting at 8th level, when an undead of CR 1 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.

### Divine Domain Feature (Level 8)

At 8th level, you gain a feature from your Divine Domain.

### Divine Intervention (Level 10)

Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.

Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.

At 20th level, your call for intervention succeeds automatically, no roll required.

### Destroy Undead (CR 2) (Level 11)

Starting at 11th level, when an undead of CR 2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Destroy Undead (CR 3) (Level 14)

Starting at 14th level, when an undead of CR 3 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Destroy Undead (CR 4) (Level 17)

Starting at 17th level, when an undead of CR 4 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed.

### Divine Domain Feature (Level 17)

At 17th level, you gain a feature from your Divine Domain.

### Channel Divinity (Level 18)

Beginning at 18th level, you can use your Channel Divinity three times between rests.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Divine Intervention Improvement (Level 20)

At 20th level, your call for intervention succeeds automatically, no roll required.