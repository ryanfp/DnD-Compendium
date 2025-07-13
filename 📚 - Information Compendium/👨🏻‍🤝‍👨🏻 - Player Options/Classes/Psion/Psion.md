---
obsidianUIMode: preview
cssclasses: json5e-class
tags: [ttrpg-cli/class/psion, ttrpg-cli/compendium/src/5e/ktp]
aliases:
  - Psion
created: 2025/06/13 at 22:29
updated: 2025/07/13 at 00:17
---

# Psion

*Source: KibblesTasty: Psion p. 1*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='6'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Psi Points</th><th class="value">Per Use Limit</th><th class="value"><a href="/3-Content/Compendiums/lists/list-optfeaturetype-psit.md">Psionic Talents</a></th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Psionic Archetype (Level 1)' class='internal-link'>Psionic Archetype</a>, <a href='#Psionics (Level 1)' class='internal-link'>Psionics</a></td><td class="value">1</td><td class="value">1</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Psionic Talents (Level 2)' class='internal-link'>Psionic Talents</a></td><td class="value">2</td><td class="value">1</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Second Discipline (Level 3)' class='internal-link'>Second Discipline</a>, <a href='#Psionic Archetype Feature (Level 3)' class='internal-link'>Psionic Archetype Feature</a></td><td class="value">3</td><td class="value">2</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">2</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Psionic Mastery (1 point) (Level 5)' class='internal-link'>Psionic Mastery (1 point)</a></td><td class="value">5</td><td class="value">3</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Psionic Archetype Feature (Level 6)' class='internal-link'>Psionic Archetype Feature</a></td><td class="value">6</td><td class="value">3</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">7</td><td class="value">4</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8</td><td class="value">4</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">9</td><td class="value">5</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Psionic Archetype Feature (Level 10)' class='internal-link'>Psionic Archetype Feature</a></td><td class="value">10</td><td class="value">5</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Psionic Mastery (2 points) (Level 11)' class='internal-link'>Psionic Mastery (2 points)</a>, <a href='#Innate Psionics (6th level spell) (Level 11)' class='internal-link'>Innate Psionics (6th level spell)</a></td><td class="value">11</td><td class="value">6</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">12</td><td class="value">6</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Innate Psionics (7th level spell) (Level 13)' class='internal-link'>Innate Psionics (7th level spell)</a></td><td class="value">13</td><td class="value">7</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Psionic Archetype Feature (Level 14)' class='internal-link'>Psionic Archetype Feature</a></td><td class="value">14</td><td class="value">7</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Innate Psionics (8th level spell) (Level 15)' class='internal-link'>Innate Psionics (8th level spell)</a></td><td class="value">15</td><td class="value">8</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">16</td><td class="value">8</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Psionic Mastery (3 points) (Level 17)' class='internal-link'>Psionic Mastery (3 points)</a>, <a href='#Innate Psionics (9th level spell) (Level 17)' class='internal-link'>Innate Psionics (9th level spell)</a></td><td class="value">17</td><td class="value">9</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Third Discipline (Level 18)' class='internal-link'>Third Discipline</a></td><td class="value">18</td><td class="value">9</td><td class="value">8</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">19</td><td class="value">10</td><td class="value">8</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Ascension (Level 20)' class='internal-link'>Ascension</a></td><td class="value">20</td><td class="value">10</td><td class="value">8</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d6 per Psion level
- **Hit Points at First Level:** 6 + CON
- **Hit Points at Higher Levels:** add 4 OR 1d6 + CON (minimum of 1)

## Starting Psion

- **Saving Throw Proficiencies**: Intelligence, Wisdom
- **Skill Proficiencies**: *Choose 2:* [Deception](/3-Content/Rules/skills.md#Deception), [History](/3-Content/Rules/skills.md#History), [Insight](/3-Content/Rules/skills.md#Insight), [Intimidation](/3-Content/Rules/skills.md#Intimidation), [Investigation](/3-Content/Rules/skills.md#Investigation), [Medicine](/3-Content/Rules/skills.md#Medicine), [Perception](/3-Content/Rules/skills.md#Perception), or [Religion](/3-Content/Rules/skills.md#Religion)
- **Weapon Proficiencies**: Simple weapons
- **Armor Training**: [Light armor](/3-Content/Rules/item-types.md#Light%20Armor)

**Starting Equipment:** You start with the following items, plus anything provided by your background.

- (a) a [quarterstaff](/3-Content/Compendiums/items/quarterstaff.md) or (b) a [dagger](/3-Content/Compendiums/items/dagger.md)
- [leather armor](/3-Content/Compendiums/items/leather-armor.md) or (b) a [scale mail](/3-Content/Compendiums/items/scale-mail.md) (if proficient)
- (a) a [scholar's pack](/3-Content/Compendiums/items/scholars-pack-xphb.md) or (b) an [explorer's pack](/3-Content/Compendiums/items/explorers-pack-xphb.md)

## Multiclassing Psion

**Ability Score Minimum:** Intelligence 13

## Class Features

### Psionic Archetype (Level 1)

At 1st level, you pick the archetype of psion you embody, choosing from Awakened Mind, Unleashed Mind, Transcended Mind, Shaper's Mind, Wandering Mind, Elemental Mind, or Consuming Mind, each of which are detailed at the end of the class description. Your choice grants you features at 1st level, and again at 3rd, 6th, 10th, and 14th level.

### Psionics (Level 1)

#### Psionic Disciplines

You are granted access to a [psionic discipline](/3-Content/Compendiums/lists/list-optfeaturetype-psid.md) (such as [telepathy](/3-Content/Compendiums/optional-features/telepathy-discipline-ktp.md) or [telekinesis](/3-Content/Compendiums/optional-features/telekinesis-discipline-ktp.md)) by your chosen archetype. A psionic discipline comes with a passive feature that expands your character's capabilities and an active psionic power that can be modified and empowered with psi points. Additionally you can use your discipline in more detailed applications to recreate the effect of certain spells, listed at the end of the discipline description. At 3rd level you can select a second discipline, and 18th level you can select a 3rd discipline.

Psionic powers are suppressed by [antimagic fields](/3-Content/Compendiums/spells/antimagic-field-xphb.md) and can be dispelled with [dispel magic](/3-Content/Compendiums/spells/dispel-magic-xphb.md), but are only affected by [counterspell](/3-Content/Compendiums/spells/counterspell-xphb.md) if recreating the effect of a spell. Any check required to [dispel magic](/3-Content/Compendiums/spells/dispel-magic-xphb.md), [counterspell](/3-Content/Compendiums/spells/counterspell-xphb.md) or to identify a spell being cast with psionics is made with disadvantage unless the caster also has the Psionics feature. The detect magic spell will detect the usage of psionics, but not their nature: it will show up as a mysterious untyped power, even if being used to generate the effect of a spell.

When recreating a spell through a psionic effect (using a psionic discipline to cast the spell) the spell has no material or verbal components, but using any psionic ability requires somatic components and causes the psion to vibrantly glow with the otherworldly psionic energies they are controlling.

#### Psi Points

Starting at 1st level, you gain access to psi points used to fuel [psionic discipline](/3-Content/Compendiums/lists/list-optfeaturetype-psid.md) powers and effects. You have a number of psi points equal to your psion level, and you regain all spent points when you finish a short or long rest. You can spend a number of psi points equal to half your Psion level (rounded up) at a time. For example, if you're a 5th-level Psion, you can spend 3 psi points on a psionic power or cast a spell with a cost of 3 psi points.

#### Psionic Ability

Psionic powers, Psionic Talents, and spells gained through this class use your psionic ability.

<span class='abilityDc'>**Psionic Ability save DC**: Intelligence + Proficiency Bonus</span>

<span class='abilityAttackMod'>**Psionic Ability attack modifier**: Intelligence + Proficiency Bonus</span>

### Psionic Talents (Level 2)

Starting at 2nd level, you gain access to a psionic talent allowing you to further specialize. Pick two talents from the list of [Psionic Talents](/3-Content/Compendiums/lists/list-optfeaturetype-psit.md) presented at the end of the class description.

You can pick a new psionic talent at 5th, 7th, 9th, 12th, 15th, and 18th level. When you level up, you can replace a psionic talent you have previously selected with a different option.

### Second Discipline (Level 3)

When you reach 3rd level, you can select a second psionic discipline from the list of [psionic disciplines](/3-Content/Compendiums/lists/list-optfeaturetype-psid.md). You can't select a Discipline you already know. You gain all features of a psionic discipline when selecting it.

### Psionic Archetype Feature (Level 3)

At 3rd level, you gain a feature granted to you by your Psionic Archetype.

### Ability Score Improvement (Level 4)

WWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Psionic Mastery (1 point) (Level 5)

When you reach 5th level, you gain mastery of your psionic powers. At the start of your turn you get 1 free psi point. This can be spent to empower psionic disciplines, but not to recreate spells or fuel Psionic Talents. If you have any unspent free psi points granted by this feature left at the end of your turn, then they are lost.

At 11th level, this is increased to 2 free psi points, and at 17th level, this is increased to 3. Points can be split between different abilities.

### Psionic Archetype Feature (Level 6)

At 6th level, you gain a feature granted to you by your Psionic Archetype.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Psionic Archetype Feature (Level 10)

At 10th level, you gain a feature granted to you by your Psionic Archetype.

### Psionic Mastery (2 points) (Level 11)

When you reach 11th level, you gain mastery of your psionic powers. At the start of your turn, you now get 2 temporary psi points. This can be spent to empower psionic abilities, but not to recreate spells. If you have any unspent temporary psi points at the end of your turn, then they are lost.

At 17th level, this is increased to 3. Temporary psi points can be split between different abilities.

### Innate Psionics (6th Level spell) (Level 11)

At 11th level, you gain the ability to exert great feats of psionic power. Choose one 6th-level spell from the Psion spell list as an innate ability. You can use this innate ability to cast that spell once. You must finish a long rest before you can do so again. At higher levels, you gain more innate abilities of your choice that can be used in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Innate Psionics when you finish a long rest.

Innate Psionics are well beyond the normal scope of your powers and are not restricted by what disciplines you have. Unlike psionic disciplines, they require any component the spell requires.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Innate Psionics (7th Level spell) (Level 13)

At 13th level, you choose one 7th-level spell from the Psion spell list for your Innate Psionics.

### Psionic Archetype Feature (Level 14)

At 14th level, you gain a feature granted to you by your Psionic Archetype.

### Innate Psionics (8th Level spell) (Level 15)

At 15th level, you choose one 8th-level spell from the Psion spell list for your Innate Psionics.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Psionic Mastery (3 points) (Level 17)

When you reach 17th level, you gain mastery of your psionic powers. At the start of your turn, you now get 3 temporary psi points. This can be spent to empower psionic abilities, but not to recreate spells. If you have any unspent temporary psi points at the end of your turn, then they are lost.

Temporary psi points can be split between different abilities.

### Innate Psionics (9th Level spell) (Level 17)

At 17th level, you choose one 9th-level spell from the Psion spell list for your Innate Psionics.

### Third Discipline (Level 18)

When you reach 18th level, you can select a third psionic discipline from the list of [psionic disciplines](/3-Content/Compendiums/lists/list-optfeaturetype-psid.md). You can't select a discipline you already know. You gain all features of a psionic discipline when selecting it.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Ascension (Level 20)

Starting at 20th level, if you die you can choose to become an incorporeal entity on the Border Ethereal at the spot you died in the Material Plane at the start of your next turn. This entity has the physical ability scores (Strength, Dexterity, Constitution) and abilities of a [ghost](/3-Content/Compendiums/bestiary/undead/ghost-xmm.md), but has your mental ability scores (Intelligence, Wisdom, Charisma) and your psion class abilities.

When you take this form your current and maximum hit points becomes that of the [ghost](/3-Content/Compendiums/bestiary/undead/ghost-xmm.md) while you are in the form, if you have less than 10 psi points when you would assume this form, you have 10 psi points. While in this form you can't rest to regain spent abilities. If you exhaust all Psi Points or the [ghost](/3-Content/Compendiums/bestiary/undead/ghost-xmm.md) is destroyed, you die as a normal creature would.