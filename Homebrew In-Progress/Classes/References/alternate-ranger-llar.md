---
obsidianUIMode: preview
cssclasses: json5e-class
tags:
- class/alternate-ranger
- compendium/src/5e/llar
aliases:
- Alternate Ranger
---
# Alternate Ranger
*Source: Alternate Ranger*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th><th colspan='5'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value"><a href="/3-Mechanics/CLI/lists/list-optfeaturetype-ll-sk.md">Knacks Known</a></th><th class="value">Quarry Die</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Fighting Style (Level 1)' class='internal-link'>Fighting Style</a>, <a href='#Knacks (Level 1)' class='internal-link'>Knacks</a>, <a href='#Wild Expertise (Level 1)' class='internal-link'>Wild Expertise</a></td><td class="value">1</td><td class="value">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Spellcasting (Level 2)' class='internal-link'>Spellcasting</a>, <a href='#Ranger's Quarry (Level 2)' class='internal-link'>Ranger's Quarry</a></td><td class="value">2</td><td class="value">`dice:1d4|noform|noparens|avg|text(d4)`</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Ranger Conclave (Level 3)' class='internal-link'>Ranger Conclave</a></td><td class="value">3</td><td class="value">`dice:1d4|noform|noparens|avg|text(d4)`</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">`dice:1d4|noform|noparens|avg|text(d4)`</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a>, <a href='#Feral Senses (Level 5)' class='internal-link'>Feral Senses</a></td><td class="value">3</td><td class="value">`dice:1d4|noform|noparens|avg|text(d4)`</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Ranger's Quarry (8 hours) (Level 6)' class='internal-link'>Ranger's Quarry (8 hours)</a></td><td class="value">4</td><td class="value">`dice:1d6|noform|noparens|avg|text(d6)`</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Conclave Feature (Level 7)' class='internal-link'>Conclave Feature</a></td><td class="value">4</td><td class="value">`dice:1d6|noform|noparens|avg|text(d6)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">`dice:1d6|noform|noparens|avg|text(d6)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Wild Expertise (Level 9)' class='internal-link'>Wild Expertise</a></td><td class="value">5</td><td class="value">`dice:1d6|noform|noparens|avg|text(d6)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Ranger's Quarry (24 hours) (Level 10)' class='internal-link'>Ranger's Quarry (24 hours)</a></td><td class="value">5</td><td class="value">`dice:1d8|noform|noparens|avg|text(d8)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Conclave Feature (Level 11)' class='internal-link'>Conclave Feature</a>, <a href='#Tireless (Level 11)' class='internal-link'>Tireless</a></td><td class="value">5</td><td class="value">`dice:1d8|noform|noparens|avg|text(d8)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">6</td><td class="value">`dice:1d8|noform|noparens|avg|text(d8)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">6</td><td class="value">`dice:1d8|noform|noparens|avg|text(d8)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Ranger's Quarry (1 week) (Level 14)' class='internal-link'>Ranger's Quarry (1 week)</a></td><td class="value">7</td><td class="value">`dice:1d10|noform|noparens|avg|text(d10)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Conclave Feature (Level 15)' class='internal-link'>Conclave Feature</a></td><td class="value">7</td><td class="value">`dice:1d10|noform|noparens|avg|text(d10)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8</td><td class="value">`dice:1d10|noform|noparens|avg|text(d10)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">8</td><td class="value">`dice:1d10|noform|noparens|avg|text(d10)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Ranger's Quarry (Indefinite) (Level 18)' class='internal-link'>Ranger's Quarry (Indefinite)</a>, <a href='#Feral Senses (Level 18)' class='internal-link'>Feral Senses</a></td><td class="value">9</td><td class="value">`dice:1d12|noform|noparens|avg|text(d12)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">9</td><td class="value">`dice:1d12|noform|noparens|avg|text(d12)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Foe Slayer (Level 20)' class='internal-link'>Foe Slayer</a></td><td class="value">10</td><td class="value">`dice:1d12|noform|noparens|avg|text(d12)`</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d10 per Alternate Ranger level
- **Hit Points at First Level:** 10 + CON
- **Hit Points at Higher Levels:** add 6 OR 1d10 + CON  (minimum of 1)

## Starting Alternate Ranger

- **Saving Throw Proficiencies**: Dexterity, Strength
- **Skill Proficiencies**: *Choose 3:* Animal Handling, Athletics, Insight, Investigation, Medicine, Nature, Perception, Sleight of Hand, Stealth, or Survival
- **Weapon Proficiencies**: Simple weapons and Martial weapons
- **Armor Training**: Light armor, Medium armor, and Shields

**Starting Equipment:** You start with the following items, plus anything provided by your background.

- (a) chain shirt and a shield or (b) leather armor
- (a) two shortswords or (b) two simple melee weapons
- (a) a longbow and a quiver of 20 arrows or (b) a martial weapon
- (a) a dungeoneer's pack or (b) an explorer's pack

## Multiclassing Alternate Ranger

**Ability Score Minimum:** Dexterity 13 or Strength 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Skill Proficiencies**: *Choose 1:* Animal Handling, Athletics, History, Insight, Investigation, Medicine, Nature, Perception, Stealth, or Survival
- **Weapon Proficiencies**: Simple weapons, Martial weapons
- **Armor Training**: Light armor, Medium armor, Shields

## The Ranger

As the graying man made his way through the underbrush of the forest his faded green cloak made him nearly invisible. The monstrously large troll he had been stalking through the night had finally stopped to rest. As the great brute lay down to sleep, the silent green shape emerged from the trees to snuff out the life of the hideous monster.

As the massive blue dragon descended upon the small town, a small half-elven man rolled out of the path of a blast of lightning. With the small hairs on the back of his neck still standing up from the residual electricity, the practiced hunter nocked an arrow and let it fly in the direction of the terrible beast. As the dart struck, the dragon let out a horrible roar and plummeted to the ground landing in a broken heap.

As the fearsome owlbear lumbered toward the tiny hamlet that she called home, a small halfling whistled to her companion in the brush. At her signal, a giant dog that seemed to be more fur than anything else leaped out from hiding and stood defiantly in front of the owlbear. Distracted by her partner, the owlbear was caught completely unawares by the diminutive ranger. Once their foe was unconscious, the halfling and her dog released the owlbear miles away where it could live without menacing the town they protected.

All three of the adventurers described here are considered Rangers, wild wanderers, and defenders of the natural world.

## Defenders of Balance

Rangers spend their lives between two worlds. On one hand, they stand as guardians of civilization, protecting those who dwell on the edges of society. On the other, rangers are expert survivalists, deeply acquainted with the flora and fauna of the natural world. Rangers protect the balance between society and the wilderness. When a wild creature wanders from its natural habitat, Rangers will track it down before it can harm innocent farmers and travelers. When people encroach upon the wilderness, Rangers will push back against industry and expansion that doesn't respect the natural balance.

Rangers dedicate their lives to guarding the places where civilization and the wilderness meet, never fully joining either of the worlds that they spend their lives defending.

## Prepared for Anything

Ready to face any challenge, Rangers are survivalists at their core. The wilderness is a harsh place, and those who cannot adapt to their surroundings die. In the wild, Rangers learn to be adaptable. Drawing on their knowledge of the natural world, their connection to primal magic, and the skills passed down to them by their mentors, there is rarely a challenge a Ranger cannot overcome with enough time to prepare.

Each Ranger has their own philosophy on how they fit into the interconnected web that is the natural world. Some view themselves as apex predators, using their marital skills and ruthless hunting abilities to keep the wild in line. Others see themselves as humble servants of the natural world.

## Creating Your Ranger

Consider the nature of your Ranger's training. Did you train with a mentor, wandering the wilds together, learning all you could? Or did you forge your primal connection to the natural world on your own? What is it that motivates your Ranger? Do you have a vendetta against a certain type of monster? Are you a warrior of the wild who feels more comfortable in the silence of the forest than in city streets or sleepy towns?

No matter their origin, almost all Rangers take up a life of adventuring to impart their knowledge of the wild to the next generation. Often, in their later years, these wild warriors will take on an apprentice, passing on all their knowledge so that the safety of the wilderness is secured for years to come.

### Quick Build

You can make a Ranger quickly by using these suggestions: First, make Dexterity your highest ability score, followed by your Wisdom. Second, choose the Outlander background.

## Class Features

### Fighting Style (Level 1)

Your skill in battle surpasses that of most warriors. At 2nd level you gain a Fighting Style of your choice from the list below. You can't learn a Fighting Style more than once, even if another feature allows you to learn another Fighting Style.

### Knacks (Level 1)

In the wild, you have learned bits of primal knowledge, known as Knacks, which bolster your hunting, survival, and tracking skills. At 1st level, you know one Knack of your choice from the list at the end of this class.

Whenever you gain a Ranger level, you can replace one Knack you know with a Knack of your choice, so long as you meet the prerequisites for that Knack. You cannot replace a Knack that is a prerequisite for another Knack you know.

At certain Ranger levels, you learn additional Knacks, as shown in the Knacks Known column of the Ranger table.

### Wild Expertise (Level 1)

Your skill at navigating the wilderness is without peer. Also at 1st level, choose one skill from the Ranger class skill list that you are proficient in. You add double your proficiency bonus to any ability checks you make with the chosen skill. You also learn one additional language of your choice, often one that is spoken by the creatures you hunt, or peoples you defend.

When you reach 9th level in this class, you choose another skill from the Ranger class skill list that you are proficient in to gain this benefit and another language of your choice.

### Spellcasting (Level 2)

At 2nd level, you learn to draw upon the primal magic of the natural world to enhance your survival and combat skills:

#### Preparing and Casting Spells

The Ranger table above shows how many spell slots you have to cast spells. To cast a Ranger spell of 1st-level or higher, you must expend a slot of the spell's level or higher. You regain all of your expended spell slots when you finish a long rest.

At the end of each long rest, you prepare a list of spells that are available for you to cast. Choose a number of spells equal to your Wisdom modifier + half your Ranger level, rounded down. Spells must all be from the Ranger spell list at the end of this class, and be of a level for which you have spell slots.

#### Spellcasting Ability

Your power is drawn from an intuitive knowledge of nature, so Wisdom is your spellcasting ability for Ranger spells. You use Wisdom when a spell refers to your spellcasting ability, your Spell save DC, or when you make a spell attack roll.

<span class='abilityDc'>**Spell save DC**: Wisdom + Proficiency Bonus</span>

<span class='abilityAttackMod'>**Spell attack modifier**: Wisdom + Proficiency Bonus</span>

#### Spellcasting Focus

You can use a druidic focus as the spellcasting focus for your Ranger spells. See the Player's Handbook for example foci.

#### Ritual Casting

Your knowledge of the natural world allows you to draw out its innate magic. You can cast any Ranger spell that you have prepared as a ritual so long as that spell has the ritual tag.

### Ranger's Quarry (Level 2)

You focus your senses to hunt as a predator of the wild. Also at 2nd level, you can use a bonus action to mark one creature you can see as your Quarry, gaining the benefits below:

- Whenever you damage it with an attack, you deal bonus damage equal to a roll of your Quarry Die, which is a `dice:d4|noform|noparens|avg` (`d4`).  
- Whenever you make an ability check to track or locate it, you can add one roll of your Quarry Die to your `dice:d20|noform|noparens|avg` (`d20`) roll.  

These benefits last for 1 hour but end early if your Quarry is slain or if you mark another creature as your Quarry. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest. When you have no uses left, you can expend a spell slot to use this feature again.

When you reach 6th, 10th, 14th, and 18th levels in this class, both the duration of Ranger's Quarry and the size of your Quarry Die increase, as indicated in the Ranger table.

### Ranger Conclave (Level 3)

At 3rd level, you choose an Conclave from the list below that best represents the training and skills of your Ranger: Beast Master, Hunter, Spellbreaker, or Monster Slayer.

The Ranger Conclave you choose grants you features at 3rd level, and again when you reach 7th, 11th, and 15th level.

Additionally, each Ranger Conclave has a list of Conclave Spells that you always have prepared once you reach the Ranger levels noted in your Conclave's description. Your Conclave Spells count as Ranger spells for you, but they do not count against your total number of spells that you can prepare each day.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or two ability scores by 1. As normal, you can't increase one of your ability scores above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Extra Attack (Level 5)

Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.

### Feral Senses (Level 5)

You hunt with the skills of an apex predator. At 5th level, you can't have disadvantage on attack rolls against your [Quarry](/3-Mechanics/CLI/classes/alternate-ranger-llar.md#Ranger's%20Quarry%20(Level%202)).

When you reach 18th level, you cannot have disadvantage on attack rolls against any target within 30 feet of you.

### Ranger's Quarry (8 hours) (Level 6)

The duration of your [Ranger's Quarry](/3-Mechanics/CLI/classes/alternate-ranger-llar.md#Ranger's%20Quarry%20(Level%202)) has improved further.

### Conclave Feature (Level 7)

At 7th level, you gain a feature granted by your Ranger Conclave.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or two ability scores by 1. As normal, you can't increase one of your ability scores above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Wild Expertise (Level 9)

At 9th level, you select another ranger class skill you are proficient in to gain the benefits of this feature, and you learn to speak, read, and write another language of your choice.

### Ranger's Quarry (24 hours) (Level 10)

The duration of your [Ranger's Quarry](/3-Mechanics/CLI/classes/alternate-ranger-llar.md#Ranger's%20Quarry%20(Level%202)) has improved further.

### Conclave Feature (Level 11)

At 11th level, you gain a feature granted by your Ranger Conclave.

### Tireless (Level 11)

You are always ready for another hunt, never letting foes rest. Beginning at 11th level, you regain all of your expended uses of [Ranger's Quarry](/3-Mechanics/CLI/classes/alternate-ranger-llar.md#Ranger's%20Quarry%20(Level%202)) whenever you finish a short or long rest.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or two ability scores by 1. As normal, you can't increase one of your ability scores above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Ranger's Quarry (1 week) (Level 14)

The duration of your [Ranger's Quarry](/3-Mechanics/CLI/classes/alternate-ranger-llar.md#Ranger's%20Quarry%20(Level%202)) has improved further.

### Conclave Feature (Level 15)

At 15th level, you gain a feature granted by your Ranger Conclave.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or two ability scores by 1. As normal, you can't increase one of your ability scores above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Ranger's Quarry (Indefinite) (Level 18)

The duration of your [Ranger's Quarry](/3-Mechanics/CLI/classes/alternate-ranger-llar.md#Ranger's%20Quarry%20(Level%202)) has improved further.

### Feral Senses (Level 18)

When you reach 18th level, you cannot have disadvantage on attack rolls against any target within 30 feet of you.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or two ability scores by 1. As normal, you can't increase one of your ability scores above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Foe Slayer (Level 20)

You are a Ranger of mythic skill, rivaling the great huntsmen of legend. At 20th level, whenever you hit your [Quarry](/3-Mechanics/CLI/classes/alternate-ranger-llar.md#Ranger's%20Quarry%20(Level%202)) with a weapon attack, you can immediately end the mark and cause that attack to deal maximum damage instead of rolling. If the attack reduces the creature to 50 hit points or fewer, it must succeed on a Constitution saving throw against. your Spell save DC or instantly be reduced to 0 hit points.

## Optional Features

> [!example]- Optional Features: Knacks
> ![Knacks](/3-Mechanics/CLI/lists/list-optfeaturetype-ll-sk.md#Knacks)
^list-optfeature-ll-sk