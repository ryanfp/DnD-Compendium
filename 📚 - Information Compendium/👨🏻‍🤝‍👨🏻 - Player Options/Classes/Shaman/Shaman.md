---
obsidianUIMode: preview
cssclasses: json5e-class
tags: [ttrpg-cli/class/shaman, ttrpg-cli/compendium/src/5e/llsh]
aliases:
  - Shaman
created: 2025/06/13 at 22:30
updated: 2025/07/13 at 00:17
---

# Shaman

*Source: The Shaman*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='7'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value"><a href="/3-Content/Compendiums/lists/list-optfeaturetype-ll-ttm.md">Bound Totems</a></th><th class="value">Cantrips Known</th><th class="value">Spell Slots</th><th class="value">Slot Level</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Sacred Focus (Level 1)' class='internal-link'>Sacred Focus</a>, <a href='#Totem Spirits (Level 1)' class='internal-link'>Totem Spirits</a></td><td class="value">2</td><td class="value">-</td><td class="value">-</td><td class="value">-</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Conduit Magic (Level 2)' class='internal-link'>Conduit Magic</a>, <a href='#Spirituality (Level 2)' class='internal-link'>Spirituality</a></td><td class="value">2</td><td class="value">2</td><td class="value">2</td><td class="value">1st</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"></td><td class="value">3</td><td class="value">2</td><td class="value">2</td><td class="value">2nd</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">3</td><td class="value">2</td><td class="value">2nd</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Totemic Versatility (Level 5)' class='internal-link'>Totemic Versatility</a></td><td class="value">4</td><td class="value">3</td><td class="value">2</td><td class="value">3rd</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Spirituality Feature (Level 6)' class='internal-link'>Spirituality Feature</a></td><td class="value">4</td><td class="value">3</td><td class="value">2</td><td class="value">3rd</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">5</td><td class="value">3</td><td class="value">2</td><td class="value">4th</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5</td><td class="value">3</td><td class="value">2</td><td class="value">4th</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">6</td><td class="value">3</td><td class="value">2</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Spirituality Feature (Level 10)' class='internal-link'>Spirituality Feature</a></td><td class="value">6</td><td class="value">4</td><td class="value">2</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Elder Spirit (6th-level) (Level 11)' class='internal-link'>Elder Spirit (6th-level)</a></td><td class="value">6</td><td class="value">4</td><td class="value">3</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">7</td><td class="value">4</td><td class="value">3</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Elder Spirit (7th-level) (Level 13)' class='internal-link'>Elder Spirit (7th-level)</a></td><td class="value">7</td><td class="value">4</td><td class="value">3</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Spirituality Feature (Level 14)' class='internal-link'>Spirituality Feature</a></td><td class="value">7</td><td class="value">4</td><td class="value">3</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Elder Spirit (8th-level) (Level 15)' class='internal-link'>Elder Spirit (8th-level)</a></td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Elder Spirit (9th-level) (Level 17)' class='internal-link'>Elder Spirit (9th-level)</a></td><td class="value">8</td><td class="value">4</td><td class="value">4</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"></td><td class="value">9</td><td class="value">4</td><td class="value">4</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">9</td><td class="value">4</td><td class="value">4</td><td class="value">5th</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Spiritual Ascension (Level 20)' class='internal-link'>Spiritual Ascension</a></td><td class="value">9</td><td class="value">4</td><td class="value">4</td><td class="value">5th</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Shaman level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON (minimum of 1)

## Starting Shaman

- **Saving Throw Proficiencies**: Charisma, Wisdom
- **Skill Proficiencies**: *Choose 2:* [Animal Handling](/3-Content/Rules/skills.md#Animal%20Handling), [Arcana](/3-Content/Rules/skills.md#Arcana), [Insight](/3-Content/Rules/skills.md#Insight), [Medicine](/3-Content/Rules/skills.md#Medicine), [Nature](/3-Content/Rules/skills.md#Nature), [Performance](/3-Content/Rules/skills.md#Performance), or [Religion](/3-Content/Rules/skills.md#Religion)
- **Weapon Proficiencies**: Simple weapons, [blowguns](/3-Content/Compendiums/items/blowgun.md), and [nets](/3-Content/Compendiums/items/net.md)
- **Armor Training**: [Light armor](/3-Content/Rules/item-types.md#Light%20Armor) and [Shields](/3-Content/Compendiums/items/shield-xphb.md)

**Starting Equipment:** You start with the following items, plus anything provided by your background.

- (a) a [quarterstaff](/3-Content/Compendiums/items/quarterstaff.md) or (b) any simple weapon
- (a) a [shortbow](/3-Content/Compendiums/items/shortbow.md) and [20 arrows](/3-Content/Compendiums/items/arrows-20.md) or (b) 5 [javelins](/3-Content/Compendiums/items/javelin.md)
- (a) a [priest's pack](/3-Content/Compendiums/items/priests-pack-xphb.md) or (b) an [explorer's pack](/3-Content/Compendiums/items/explorers-pack-xphb.md)
- [leather armor](/3-Content/Compendiums/items/leather-armor.md) and one object used as a Totem.

## Multiclassing Shaman

**Ability Score Minimum:** Wisdom 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Skill Proficiencies**: *Choose 1:* [Animal Handling](/3-Content/Rules/skills.md#Animal%20Handling), [Arcana](/3-Content/Rules/skills.md#Arcana), [Insight](/3-Content/Rules/skills.md#Insight), [Medicine](/3-Content/Rules/skills.md#Medicine), [Nature](/3-Content/Rules/skills.md#Nature), [Performance](/3-Content/Rules/skills.md#Performance), or [Religion](/3-Content/Rules/skills.md#Religion)
- **Weapon Proficiencies**: Simple weapons
- **Armor Training**: [Light armor](/3-Content/Rules/item-types.md#Light%20Armor), [Shields](/3-Content/Compendiums/items/shield-xphb.md)

## The Shaman

The half-orc silently moved through the forest, her tattoos shimmering in the moonlight. Gripping the ancestral war club of her tribe, she called upon the spirits of previous champions to empower her strikes. A cold wind came over the hobgoblin camp as the half-orc walked into their midst. These raiders who had dared to take lumber from the ancestral forest of her people would not live to see the dawn.

The hunched-over, elderly halfling clung to his walking stick as the massive ogre came barreling toward him. Just before the monster fell upon him, the elder embraced the spirit of the Great Beast and shapeshifted into a supernaturally massive bear. The two collided with thunderous force, but only one would survive. The eyes of the great bear flashed with a momentary green light and as suddenly as it had appeared, an elderly halfling stood in its place, his eyes glowing with green light.

The thin elf stood on a cliff overlooking the great battle below. The great dragon had all but decimated the battalion of guards that had come to defend their home. A single man stood and thrust his spear toward the terrifying wyrm, but before the dragon could deflect the blow, the elf unleashed a powerful spirit from within one of her Totems. In an instant, the spirit had enveloped the dragon, temporarily sapping its strength. In its weakened state, the spear pierced the great beast's heart, ending its campaign of terror. The elf made her way back to her solitary cave, content knowing that the town she guarded in secret would be safe for another season.

The three characters above are examples of the spiritual conduits known as shamans. Using ancient knowledge they are able to bind and channel the power of primal spirits.

### Ancient Power

Before the gods took notice of mortals and bestowed power upon clerics and paladins, shamans served as protectors and guides. Using supernatural techniques, shamans were able to bind spirits to Totems, small objects of spiritual significance, and channel that power for good of their people. Passed from elder to elder in a continuous chain, those who learn the arts of shamanism are part of a truly ancient spiritual tradition.

### Spiritual Existence

Shamans spend their lives maintaining the delicate balance between the physical mortal world, and the ethereal spiritual world. They are trained to recognize the spirits that dwell in every living thing and use this spiritual sight to protect those they love from sinister spirits who seek to destroy all life.

Sometimes, shamans will seek out spirits of love and life that willingly bind themselves to Totems so that they may aid the shaman in their spiritual warfare. Other malevolent and vile spirits are bound to Totems against their will and used by shamans to help defeat other powerful spirits of destruction.

### Creating Your Shaman

When creating your shaman, consider how you first learned to wield the power of spirits. Were you trained from birth to become the next elder of your people, destined to inherit the power of your ancestors? Were you raised by a vile hag, and taught to manipulate spirits of darkness and death to curse and hex your foes? Or did you study under an ancient hermit, learning to draw upon the spiritual power within in all living things in order to heal the spiritually and physically broken?

No matter your origin, you should decide how your shaman views the spiritual world. Have they dedicated themselves to maintaining a balance between the physical and ethereal? Or, do they view spirits as tools to be bound and used, a source of power that shamans can wield in whatever ways they choose?

> [!note] Multiclassing and the Shaman
> 
> If your group uses the rule on multiclassing in the Player's Handbook, here's what you need to know if you choose the shaman as one of your classes.
> 
> **Ability Score Minimum.** As a multiclass character, you must have a minimum Wisdom score of 13 to take your first level as a shaman, or to take a level in another class if you are already a shaman.
> 
> **Proficiencies Gained.** If shaman isn't your initial class, you gain proficiency in light armor, shields and simple weapons when you take your first level in shaman.
> 
> **Spellcasting.** If you have a feature from another class that allows you to learn and cast spells, you can use your Conduit Magic spell slots to cast the spells you gained through that feature, and you can use those spell slots to cast your shaman spells.
^multiclassing-and-the-shaman

#### Quick Build

You can make a shaman quickly by using these suggestions. First, make Wisdom your highest ability score followed by your Constitution. Second, choose the [hermit](/3-Content/Compendiums/backgrounds/hermit.md) background. Third, choose the [Body](/3-Content/Compendiums/optional-features/body-llsh.md) as your Sacred Focus and [Spirit of the Bear](/3-Content/Compendiums/optional-features/spirit-of-the-bear-llsh.md) and [Spirit of the Mountain](/3-Content/Compendiums/optional-features/spirit-of-the-mountain-llsh.md) as your Totems.

## Class Features

### Sacred Focus (Level 1)

In order to channel the supernatural power of spirits without being consumed, Shamans must draw this wondrous power through the strongest aspect of themselves. At 1st level, you choose a Sacred Focus from the options listed below.

Once it is chosen, your Sacred Focus cannot be changed.

### Totem Spirits (Level 1)

At 1st level, you learn to bind primal Totem Spirits to sacred Totems so that you may safely channel their mystical abilities. Any Tiny object can of your choice be a Totem, but most often they are objects reminiscent of the Spirit bound within.

Your Totems and their abilities use the rules detailed here:

#### Bound Spirits

At 1st level, you bind two Totem Spirits of your choice from the list at the end of the class. At certain Shaman levels you bind additional Totem Spirits, as shown in the Bound Spirits column of the Shaman table. If a Spirit has prerequisites, you can bind it at the same time you meet its prerequisites.

When you gain a Shaman level, you can replace one Totem Spirit you currently have bound with another of your choice.

#### Saving Throws

If a Totem requires a target to make a saving throw, the DC equals 8 + your proficiency bonus + your Wisdom modifier.

### Totemic Assault (Level 1)

As an action, you can unleash the Spirits bound within one of your Totems and command them to swarm one creature you can see within 60 feet of you. That creature must succeed on a Charisma saving throw or take 1d8 necrotic damage.

The Spirits continue to swarm around this creature until it is slain, it is more than 60 feet away, you are incapacitated, or you use Totemic Assault against another creature. While the Spirits swarm, you can use your bonus action on subsequent turns to force it to make this Charisma saving throw again.

The damage dealt by your Totemic Assault increases at 5th level (2d8), at 11th level (3d8), and finally at 17th level (4d8).

### Conduit Magic (Level 2)

At 2nd level, you learn to call on the spiritual energies present in all things to cast spells. You gain the following features:

#### Cantrips

At 2nd level, you learn two Cantrips of your choice from the Shaman spell list. You learn an additional Shaman Cantrip of your choice when you reach 4th level, and again at 10th level.

#### Spell Slots

The Shaman table above shows the number of spell slots you have to cast your Shaman spells of 1st through 5th-level. The Slot Level column of the Shaman table also shows the level of all of your spell slots. To cast a Shaman spell of 1st-level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.

For example, at 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell cure wounds, you must expend one of your 3rd-level spell slots, and cast [cure wounds](/3-Content/Compendiums/spells/cure-wounds-xphb.md) at 3rd-level. 

#### Preparing & Casting Spells

You prepare the list of spells that are available for you to cast, choosing from the Shaman spell list. When you do, choose a number of Shaman spells equal to your Shaman level + your Wisdom modifier (a minimum of 1). Spells you prepare must be of a level equal to your Slot Level or lower.

For example, as a 5th level Shaman with a Wisdom of 18, you prepare nine spells of your choice of 3rd-level or lower from the Shaman spell list. Casting a spell doesn't remove it from your list of prepared spells. During a long rest, you can change your list of prepared spells by meditating: 1 minute per spell level for each new spell you are preparing.

#### Spellcasting Ability

As you draw your magic from your understanding of primal spirits, Wisdom is your spellcasting ability for your shaman spells. You use your Wisdom whenever a spell refers to your spellcasting ability, when setting the saving throw DC for a shaman spell, and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: Wisdom + Proficiency Bonus</span>

<span class='abilityAttackMod'>**Spell attack modifier**: Wisdom + Proficiency Bonus</span>

#### Ritual Casting

You can cast the Ritual version of any Shaman spell that you have prepared so long as the spell has the Ritual tag.

#### Spellcasting Focus

You can use any Totem to which you have bound a Spirit as the spellcasting focus for your Shaman spells.

### Spirituality (Level 2)

At 2nd level, choose the Spirituality which best represents the disciplines and rites you use to channel spirits: Curse Binder, Far Seer, Spirit Warrior, Wild Heart, or Witch Doctor, each of which is detailed at the end of this class.

Your Spirituality grants you features at 2nd level, and again when you reach 6th, 10th, and 14th level in this class.

#### Spirituality Spells

Each Spirituality has a list of spells you always have prepared once you reach the Shaman levels noted in your Spirituality's description. They count as Shaman spells for you, but they do not count against the number of spells you prepare each day.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Totemic Versatility (Level 5)

At 5th level, your ability to connect with and channel the spirit world increases. During a long rest, you can perform a 1-hour ritual to replace one of your current bound Spirit Totems with another of your choice, for which you meet all prerequisites.

### Spirituality Feature (Level 6)

At 6th level, you gain a feature granted by your Spirituality.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Spirituality Feature (Level 10)

At 10th level, you gain a feature granted by your Spirituality.

### Elder Spirit (6th-level) (Level 11)

Your ever-deepening connection to the world of Spirits allows you to conjure and bind powerful Elder Spirits to Totems. At 11th level, choose one Elder Spirit to bind to a Totem. It does not count against your total number of Bound Totems.

Each Elder Spirit includes a list of Elder Spells that you learn at the Shaman levels listed in its description. They do not count against your total number of Spells Known.

Once you reach the levels in your Elder Spirit's description, you can cast each of these spells once between each long rest at its lowest level, without expending a spell slot.

You can use your Totemic Versatility feature to replace your Elder Spirit with another Elder Spirit of your choice. Though, if you replace your Elder Spirit with another Spirit, you only know the Elder Spells of your current Elder Spirit.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Elder Spirit (7th-level) (Level 13)

At 13th level, you may cast the 7th-level spell granted to you by your chosen Elder Spirit once, at its lowest level, without expending a spell slot. Once you do so you must finish a long rest before you can cast that spell again.

### Spirituality Feature (Level 14)

At 14th level, you gain a feature granted by your Spirituality.

### Elder Spirit (8th-level) (Level 15)

At 15th level, you may cast the 8th-level spell granted to you by your chosen Elder Spirit once, at its lowest level, without expending a spell slot. Once you do so you must finish a long rest before you can cast that spell again.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Elder Spirit (9th-level) (Level 17)

At 17th level, you may cast the 9th-level spell granted to you by your chosen Elder Spirit once, without expending a spell slot. Once you do so you must finish a long rest before you can cast that spell again.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Spiritual Ascension (Level 20)

You have transcended the need for a corporeal form. At 20th level, your physical body no longer ages, and you are immune to all disease, the Poisoned condition, and poison damage.

Also, when you are reduced to 0 hit points, you can release the Spirit bound within one Totem to instead fall to a number of hit points equal to your Shaman level. You then lose access to the abilities of that Totem until you complete a long rest.

## Optional Features

> [!example]- Optional Features: Totem Spirit
> ![Totem Spirit](/3-Content/Compendiums/lists/list-optfeaturetype-ll-ttm.md#Totem%20Spirit)
^list-optfeature-ll-ttm