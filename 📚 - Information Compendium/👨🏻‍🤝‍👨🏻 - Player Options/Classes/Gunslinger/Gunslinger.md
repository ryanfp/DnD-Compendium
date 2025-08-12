---
obsidianUIMode: preview
cssclasses: json5e-class
tags: [class/gunslinger, compendium/src/5e/vss]
aliases:
  - Gunslinger
created: 2025/06/13 at 22:27
updated: 2025/07/13 at 00:17
---

# Gunslinger

*Source: Valda's Spire of Secrets*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Risk Dice</th><th class="v">Weapon Mastery</th>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Fighting Style (Level 1)' class='internal-link'>Fighting Style</a>, <a href='#Quick Draw (Level 1)' class='internal-link'>Quick Draw</a>, <a href='#Weapon Mastery (Level 1)' class='internal-link'>Weapon Mastery</a>,</td><td class="value">⏤</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Critical Shot (Level 2)' class='internal-link'>Critical Shot</a>, <a href='#Poker Face (Level 2)' class='internal-link'>Poker Face</a>, <a href='#Risk (Level 2)' class='internal-link'>Risk</a></td><td class="value">4d8</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Gunslinger's Creed (Level 3)' class='internal-link'>Gunslinger's Creed</a>, <a href='#Feat (Level 3)' class='internal-link'>Feat</a></td><td class="value">4d8</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><td class="value">4d8</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a></td><td class="value">4d8</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Gut Shot (Level 6)' class='internal-link'>Gut Shot</a></td><td class="value">5d8</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Gunslinger's Creed feature (Level 7)' class='internal-link'>Gunslinger's Creed feature</a>, <a href='#Evasion (Level 7)' class='internal-link'>Evasion</a></td><td class="value">5d8</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><td class="value">5d8</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Critical Shot Improvement (Level 9)' class='internal-link'>Critical Shot Improvement</a></td><td class="value">5d8</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Gunslinger's Creed feature (Level 10)' class='internal-link'>Gunslinger's Creed feature</a></td><td class="value">5d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Mankiller (Level 11)' class='internal-link'>Mankiller</a></td><td class="value">5d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><td class="value">5d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Dire Gambit (Level 13)' class='internal-link'>Dire Gambit</a></td><td class="value">5d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Gunslinger's Creed feature (Level 14)' class='internal-link'>Gunslinger's Creed feature</a></td><td class="value">6d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Cheat Death (Level 15)' class='internal-link'>Cheat Death</a></td><td class="value">6d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><td class="value">6d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Critical Shot Improvement (Level 17)' class='internal-link'>Critical Shot Improvement</a></td><td class="value">6d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Maverick (Level 18)' class='internal-link'>Maverick</a></td><td class="value">6d12</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><td class="value">6d12</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Head Shot (Level 20)' class='internal-link'>Head Shot</a></td><td class="value">6d12</td><td class="value">4</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Gunslinger level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON (minimum of 1)

## Starting Gunslinger

- **Saving Throw Proficiencies**: Charisma, Dexterity
- **Skill Proficiencies**: *Choose 2:* Acrobatics, Animal Handling, Athletics, Deception, Insight, Intimidation, Perception, Persuasion, or Sleight of Hand
- **Weapon Proficiencies**: Simple weapons, simple firearms, and martial firearms
- **Tool Proficiencies**: one type of gaming set
- **Armor Training**: Light armor

**Starting Equipment:** You start with the following items, plus anything provided by your background.

- leather armor with a longcoat
- A dagger and (a) [Handgun](/3-Content/Compendiums/items/handgun-vss.md) and 20 bullets or (b) any [Revolver](/3-Content/Compendiums/items/revolver-vss.md) and [Bullets (10)](/3-Content/Compendiums/items/bullets-10-vss.md)
- Any two-handed firearm that isn't heavy and 30 bullets or shells
- (a) a dungeoneer's Pack or (b) a explorer's pack

## Multiclassing Gunslinger

**Ability Score Minimum:** Dexterity 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Weapon Proficiencies**: Simple weapons, simple firearms, martial firearms
- **Armor Training**: Light armor

## Gunslinger

A glass falls, clattering to the floor, and the tavern grows silent. A dwarf with a deep scowl, dripping with freshly spilled beer, leers at a drunken nearby orc and fingers for a pair of revolvers at his waist.

High on a hillside, carefully concealed beneath foliage and stones, a rifleman steadies her breathing and adjusts her scope, acquiring her target and patiently awaiting the moment to strike.

Risk is in a gunslinger's blood. They are bold renegades, bucking tradition and forging a new path with dangerous and inelegant firearms. Gunslingers are infamous for surviving by their wits, relying on split-second timing and a considerable amount of luck to survive.

### Guts and Gunpowder

Black powder is not for the faint of heart. Its thunderous applause is volatile and imprecise—a barely controlled explosion directed at an enemy. Only the truly fearless seek to master it, for one must be mad or have nerves of steel to weather the risk of its use. But those who call themselves gunslingers are fearless combatants, hurling death from their guns in a roaring cacophony. Adapted for shootouts, gunslingers are mobile and daring, knowing that life or death hangs on snap decision-making and one's own mettle.

### Dangerous Outsiders

A gunslinger's explosive lifestyle lends well to wandering and adventuring. Gunslingers will often shoot first and ask questions later, an attitude which earns them few friends and bountiful enemies. In their travels, most gunslingers are secretive and take great lengths to go unnoticed, lest they be spotted by old foes with scores to settle.

Yet, their skills are not unneeded. Anyone requiring protection or revenge of their own can count on a gunslinger to be in need of an odd job when they roll into town. After all, skill with a gun is always in demand somewhere.

### Creating a Gunslinger

When creating your gunslinger, consider where firearms fit in the campaign's world and what the common perceptions are of those who use them. If firearms are the norm, your gunslinger might be a mercenary or militia fighter. If firearms are rare, your gunslinger might be one of a kind, a trailblazer in new types of warfare.

It's also not unusual for a gunslinger to be haunted by their past. Did some event drive you to the gun and motivate you to travel? Is there a bounty on your head in one or more areas? Do you have any old enemies that seek you for revenge?

#### Quick Build

To make a gunslinger quickly, follow these suggestions. Make Dexterity and Constitution your highest ability scores. If you plan to choose the Gun Tank creed, instead make Strength your highest ability score. Lastly, choose any background, preferably one that emphasizes your familiarity with firearms and penchant for risk-taking.

## Gunslingers in Other Settings

The Equipment chapter of this book organizes firearms by ages—Renaissance, Industrial Age, and Modern—but these don't include fantasy settings set before the advent of black powder. In such settings, you can present gunslingers in the following ways:

### Gunslingers with Crossbows

You gain proficiency with all crossbows, including exotic crossbows, and can use crossbows whenever a gunslinger feature refers to an attack with a firearm. At 11th level, the Mankiller feature instead adds an extra die of damage to crossbow damage rolls.

### Gunslingers as Inventors

 You are the only individual with firearms, because you invented black powder (or a close analog to it) personally. Though your alchemical discovery is groundbreaking, the process is costly, complex, and above all, top secret.

### Gunslingers as Wand-Mages

Your firearms are loaded wands, screeching with elemental fire instead of leaded bullets. These magic items lack the finesse of a wand of magic missiles, but come in plenty of sizes, pre-charged with arcana. Use radiant, force, or necrotic damage for the damage of your firearm attacks. Furthermore, consider 'reloading' your wands as simply allowing them to recharge.

## Class Features

### Fighting Style (Level 1)

You adopt a particular style of gunfighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

Fighting Styles Will go here when I add them

### Quick Draw (Level 1)

Gunslingers have twitch reflexes and can pull a gun in the blink of an eye. You have advantage on initiative rolls. Additionally, you can draw or stow up to two weapons when you roll initiative and whenever you take an action on your turn.

### Critical Shot (Level 2)

At 2nd level, your ranged firearm attacks score a critical hit on a roll of 19 or 20.

Starting at 9th level, your ranged firearm attacks score a critical hit on a roll of 18–20, and at 17th level your ranged firearm attacks score a critical hit on a roll of 17–20.

### Poker Face (Level 2)

Starting at 2nd level, you have advantage on ability checks and saving throws made to prevent others from sensing your motives, perceiving your emotions, or reading your thoughts.

### Risk (Level 2)

By 2nd level, you can perform incredible feats of daring that are fueled by special dice called risk dice.

#### Risk Dice

You have four risk dice, which are d8s. You gain additional risk dice, and your risk dice change as you gain levels in this class, as shown in the Risk Dice column of the Gunslinger table. You regain all expended risk dice when you finish a long rest.

#### Using Risk Dice

Once per turn, you can expend a risk die to perform a deed of your choice. A list of the available options can be found on the [Optional Features](/3-Content/Compendiums/lists/list-optfeaturetype-d-g.md) page.

#### Saving Throws

Once per turn, you can expend a risk die to perform a deed of your choice. Your deed options are detailed at the end of the class description.

<span class='abilityDc'>**Deed save DC**: Dexterity + Proficiency Bonus</span>

### Gunslinger's Creed (Level 3)

By the time gunslingers reach 3rd level, they embrace a way of living, known as their creed, which guides their judgments and their unique brand of gunslinging. You walk the path of one of the following creeds:

- [[Big Game Hunter Creed]]
- [[Covert Operative Creed]]
- [[Deadeye Creed]]
- [[Grenadier Creed]]
- [[Gun Tank Creed]]
- [[Gun-Ko Master Creed]]
- [[High Roller Creed]]
- [[Laserist Creed]]
- [[Musketeer Creed]]
- [[Pistolero Creed]]
- [[Space Cowboy Creed]]
- [[Spellslinger Creed]]
- [[Trick Shot Creed]]
- [[White Hat Creed]]

Your choice grants you features at 3rd level and again at 7th, 10th, and 14th level.

### Feat (Level 3)

When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Extra Attack (Level 5)

Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.

### Gut Shot (Level 6)

Starting at 6th level, whenever you score a critical hit against a Large or smaller creature with a firearm, the bullet lodges itself in the target. Until the creature uses its action to dislodge the bullet, it moves at half speed and has disadvantage on attack rolls and ability checks. Elementals, oozes, and undead are immune to this effect.

### Gunslinger's Creed Feature (Level 7)

At 7th level, you gain one feature granted by your Gunslinger's Creed.

### Evasion (Level 7)

Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.

### Ability Score Improvement (Level 8)

When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Critical Shot Improvement (Level 9)

At 9th level, your ranged firearm attacks score a critical hit on a roll of 18-20.

### Gunslinger's Creed Feature (Level 10)

At 10th level, you gain one feature granted by your Gunslinger's Creed.

### Mankiller (Level 11)

Starting at 11th level, when you make one or more firearm attacks as part of an action, you can add your ability modifier to the firearm's damage rolls. Note that firearms do not normally add your ability modifier to their damage rolls.

### Ability Score Improvement (Level 12)

When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Dire Gambit (Level 13)

Beginning at 13th level, whenever you score a critical hit, you regain one expended risk die.

### Gunslinger's Creed Feature (Level 14)

At 14th level, you gain one feature granted by your Gunslinger's Creed.

### Cheat Death (Level 15)

By 15th level, you have a knack for evading the grave. When you drop to 0 hit points and don't die outright, you can use your reaction and expend one risk die to remain standing. You instead drop to a number of hit points equal to the number rolled on the die.

Once you use this feature, you can't use it again until you finish a short or long rest.

### Ability Score Improvement (Level 16)

When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Critical Shot Improvement (Level 17)

At 17th level, your ranged firearm attacks score a critical hit on a roll of 17-20.

### Maverick (Level 18)

By 18th level, you have become unshakable. You have advantage on Constitution checks and saving throws.

### Ability Score Improvement (Level 19)

When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Head Shot (Level 20)

CRITICAL STRIKE

At 20th level, when you score a critical hit against a creature with a firearm, you can choose for the shot to be a head shot. If the creature has less than 100 hit points, it dies. Otherwise, it takes an extra `10d10` damage from the hit. Elementals, oozes, undead, and creatures that lack nervous systems or vital organs take no extra damage from this feature.

Once you use this feature, you can't use it again until you finish a short or long rest.