---
obsidianUIMode: preview
cssclasses: json5e-class
tags: [ttrpg-cli/class/martyr, ttrpg-cli/compendium/src/5e/vss]
aliases:
  - Martyr
created: 2025/06/13 at 22:28
updated: 2025/07/13 at 00:17
---

# Martyr

*Source: Valda's Spire of Secrets*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Max Spell Level</th><th class="value">Spell Uses</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Mortal Burden (Level 1)' class='internal-link'>Mortal Burden</a>, <a href='#Ordained Death (Level 1)' class='internal-link'>Ordained Death</a></td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Spellcasting (Level 2)' class='internal-link'>Spellcasting</a>, <a href='#Sainted Reprisal (Level 2)' class='internal-link'>Sainted Reprisal</a>, <a href='#Mark of the Herald (Level 2)' class='internal-link'>Mark of the Herald</a></td><td class="value">1st</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Divine Healing (Level 3)' class='internal-link'>Divine Healing</a>, <a href='#Torment (Level 3)' class='internal-link'>Torment</a></td><td class="value">1st</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1st</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a></td><td class="value">2nd</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Mortal Burden feature (Level 6)' class='internal-link'>Mortal Burden feature</a></td><td class="value">2nd</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Respite (Level 7)' class='internal-link'>Respite</a></td><td class="value">2nd</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2nd</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3rd</td><td class="value">9</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Undying Conviction (Level 10)' class='internal-link'>Undying Conviction</a></td><td class="value">3rd</td><td class="value">9</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Torment improvement (Level 11)' class='internal-link'>Torment improvement</a></td><td class="value">3rd</td><td class="value">10</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3rd</td><td class="value">10</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">4th</td><td class="value">11</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Mortal Burden feature (Level 14)' class='internal-link'>Mortal Burden feature</a></td><td class="value">4th</td><td class="value">11</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#March Unto Destiny (Level 15)' class='internal-link'>March Unto Destiny</a></td><td class="value">4th</td><td class="value">12</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4th</td><td class="value">12</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">5th</td><td class="value">14</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Mortal Burden feature (Level 18)' class='internal-link'>Mortal Burden feature</a></td><td class="value">5th</td><td class="value">14</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5th</td><td class="value">15</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Final Martyrdom (Level 20)' class='internal-link'>Final Martyrdom</a></td><td class="value">5th</td><td class="value">15</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d12 per Martyr level
- **Hit Points at First Level:** 12 + CON
- **Hit Points at Higher Levels:** add 7 OR 1d12 + CON (minimum of 1)

## Starting Martyr

- **Saving Throw Proficiencies**: Strength, Wisdom
- **Skill Proficiencies**: *Choose 2:* Athletics, History, Insight, Intimidation, Medicine, Persuasion, or Religion
- **Weapon Proficiencies**: Simple weapons and Martial weapons
- **Armor Training**: Light armor, Medium armor, and Shields

**Starting Equipment:** You start with the following items, plus anything provided by your background.

- (a) a martial weapon and a shield, or (b) two martial weapons
- (a) scale mail or (b) chain mail (if proficient)
- (a) a light crossbow and Crossbow Bolts (20), or (b) any simple weapon
- (a) a priest's Pack or (b) a explorer's pack
- A Holy Symbol

## Multiclassing Martyr

**Ability Score Minimum:** Constitution 13, Wisdom 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Weapon Proficiencies**: Simple weapons, Martial weapons
- **Armor Training**: Light armor, Medium armor, Shields

## Martyr

Squalid masses draw close around a young dwarf in spotless clothing. He touches each person in turn, healing injuries, curing illnesses, and restoring hope.

A ragged tiefling speaks in a crowded square. As if in response, dark clouds gather over her head and the earth trembles at her words.

A mad king spits and swears from his throne at imperial guards who have fled or been slain. A lone dragonborn stands before him, solemnly preparing herself for divinely demanded regicide.

Martyrs are implements of the gods, handpicked to spill their blood in service of a divine cause. Such an end is inevitable, for once a martyr is chosen, their fate is fixed in the heavens.

### Fated to Die

Martyrs are chosen by the gods, predestined to speed forth to a final destination: they are ordained to die for a great cause. They are prophets and oracles, great priests and liberators. Regardless of how much good they might accomplish in their lives, the end must always be the same: a glorious death, to be remembered in legend.

No matter the circumstance, a martyr cannot avoid their destiny. While some martyrs gladly accept their holy approbation, others struggle against it. However, from the moment the gods choose their martyr, they shall intervene in the martyr's fate, pulling them inexorably towards their cause. The gods will settle for a lesser martyr if they must—if the one chosen is unwilling to follow their path—but they always prefer to uplift their martyr to the heights of sainthood before their inevitable death.

### Blood of the Martyr

As martyrs are ordained by the gods to die, their suffering is holy sacrament. Martyrs brought close to death grow more powerful, not less, and those that spill their own blood evoke waves of divine energy. In the view of the gods, such hardship only heightens martyrdom and hastens the martyr to their destiny.

Paradoxically, martyrs are protected from death's precipice even as they are edged closer towards it. Every torment and persecution suffered by them is weighed with equal moments of respite offered by the gods. The gods do not mean to kill their charge early; a martyr should meet their fate only at the preordained time and place.

### Creating a Martyr

As you create a martyr, think about the moment you were chosen by the gods and your burden was placed upon you. Were you visited by an angelic host or a god disguised as a mortal? Did you quietly hear a divine voice in your ear, as stigmata formed on your body? Was your soul violently dragged to the Upper (or Lower) Planes for an audience with the gods?

Consider the life you led before you were ordained for martyrdom. Were you a wicked soul, purified and redeemed to undergo this task? Were you already a warrior, adventurer, or cleric in service of the gods? Also consider how you reacted. Did you accept the task and your inevitable destiny, or did you run from it? Are you still running?

#### Quick Build

To build a martyr quickly, follow these suggestions: Constitution should be your highest ability score. Your next highest ability score should be Strength if you choose a Burden, such as the Burden of Revolution, which focuses on melee combat, or Wisdom if you choose one focused on spellcasting. Choose any background.

## Class Features

### Mortal Burden (Level 1)

Beginning at 1st level, you are fated to perish in the name of a great ideal, cementing your name alongside others who have done the same. Choose a Mortal Burden, detailed at the end of the class description. Your choice grants you features at 1st level, and again at 6th, 14th, and 18th level.

#### Burden Spells

Each burden has a list of associated spells that you gain at the martyr levels specified in the burden description. Once you gain access to a burden spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.

If you gain a burden spell that doesn't appear on the martyr spell list, the spell is nonetheless a martyr spell for you.

### Ordained Death (Level 1)

As a martyr, you have been predestined by the gods to perish for a great cause; there is no greater glory in death, and no greater joy in the afterlife. However, it is not yet your time. Starting at 1st level, when you fall to 0 hit points and begin to make death saving throws, you must fail 5 saving throws to die. Additionally, if a spell has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you.

### Spellcasting (Level 2)

Starting at 2nd level, you can leverage the power of your suffering to cast divine magic.

#### Casting Spells

To cast one of your martyr spells of 1st level or higher, you must lose hit points to create and expend a spell slot greater than or equal to that spell's level. The number of hit points is listed on the Hit Points Spellcasting table and can't be reduced or avoided. You don't make Constitution saving throws to maintain concentration on spells as a result of losing these hit points.

The Martyr table shows the maximum level of spell slot you can create.

The Spell Uses column of the Martyr table shows how many spells you can cast. When you expend hit points to cast a spell, you expend one of these uses. You regain all expended uses when you finish a long rest.

**Hit Points Spellcasting**

| Spell Level | Point Cost |
|-------------|------------|
| 1st | 5 |
| 2nd | 10 |
| 3rd | 20 |
| 4th | 30 |
| 5th | 45 |

^hit-points-spellcasting

#### Preparing Spells

You prepare the list of martyr spells that are available for you to cast, choosing from the martyr spell list. When you do so, choose a number of martyr spells equal to your Wisdom modifier + half your martyr level, rounded down (minimum of one spell). Spells you choose must be of a level no higher than what's shown in the Max Spell Level column for your level. You can change your list of prepared spells when you finish a long rest.

#### Healing Magic

Because your power is derived from mortal suffering, you can't regain hit points from any spell you cast.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your martyr spells, since your power originates in the devotion used to overcome your trials and tribulations. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a martyr spell you cast and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: Wisdom + Proficiency Bonus</span>

<span class='abilityAttackMod'>**Spell attack modifier**: Wisdom + Proficiency Bonus</span>

#### Spellcasting Focus

You can use a holy symbol as a spellcasting focus for your martyr spells.

### Sainted Reprisal (Level 2)

Also at 2nd level, you can reprimand those who draw your blood. When a creature you can see within 5 feet of you hits you with a melee attack, you can use your reaction to deal that creature `d6` necrotic or radiant damage (your choice)

The damage increases by `d6` when you reach 5th level (`2d6`), 11th level (`3d6`), and 17th level (`4d6`).

### Mark of the Herald (Level 2)

At 2nd level, your divine cause manifests itself upon you, forming a special mark or stigmata for all to see. You have advantage on ability checks you make to convince other creatures to assist you in service of your holy cause.

### Divine Healing (Level 3)

Starting at 3rd level, you can utter a prayer to the gods for mercy. As an action, you can spend Hit Dice and regain hit points as if you had just finished a short rest. When you use this ability, you can spend a number of Hit Dice up to your proficiency bonus.

### Torment (Level 3)

By 3rd level, you have learned to curry the gods' favor through anguish and mortal trials. Once on each of your turns when you hit a creature with a melee weapon attack, you can lose 5 hit points to deal an extra +10 bonus necrotic or radiant damage (your choice) to the target. You don't make Constitution saving throws to maintain concentration on spells as a result of losing these hit points.

Starting at 11th level, you can choose to lose 10 hit points to deal an extra +20 damage to the target.

### Ability Score Improvement (Level 4)

When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Extra Attack (Level 5)

Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.

### Mortal Burden Feature (Level 6)

At 6th level, you gain one feature granted by your Mortal Burden.

### Respite (Level 7)

Beginning at 7th level, you regain all spent Hit Dice when you finish a long rest, instead of only half of them.

### Ability Score Improvement (Level 8)

When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Undying Conviction (Level 10)

Beginning at 10th level, when you drop to 0 hit points and aren't killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.

### Torment Improvement (Level 11)

Starting at 11th level when using your [Torment](/3-Content/Compendiums/classes/martyr-vss.md#Torment%20(Level%203)), you can choose to lose 10 hit points to deal an extra +20 damage to the target.

### Ability Score Improvement (Level 12)

When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Mortal Burden Feature (Level 14)

At 14th level, you gain one feature granted by your Mortal Burden.

### March Unto Destiny (Level 15)

At 15th level, your inevitable end draws nearer, and nothing can hold you from it. You do not need to eat or drink, and can't be paralyzed, petrified, or stunned.

### Ability Score Improvement (Level 16)

When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Mortal Burden Feature (Level 18)

At 18th level, you gain one feature granted by your Mortal Burden.

### Ability Score Improvement (Level 19)

When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Final Martyrdom (Level 20)

At 20th level, you have at last reached your predestination: you will die in eternal glory. You can use your action to become immune to all damage for 10 minutes. During this duration, you can't be blinded, charmed, deafened, exhausted, frightened, incapacitated, poisoned, restrained, or rendered unconscious. You have advantage on all ability checks, attack rolls, and saving throws.

Additionally, during this duration, you can cast the wish spell once, without spending a spell slot or hit points. If you use the spell to produce any effect other than duplicating another spell, the stress of casting it doesn't reduce your Strength or cause you to take necrotic damage.

At the end of this duration, you die. No force short of divine intervention can prevent your death, and you can't be returned to life by any means.