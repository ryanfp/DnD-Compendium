---
obsidianUIMode: preview
cssclasses: json5e-class
tags:
- ttrpg-cli/class/ranger
- ttrpg-cli/compendium/src/5e/phb
aliases:
- Ranger
---
# Ranger
*Source: Player's Handbook p. 89. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='4'></th><th colspan='5'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Spells Known</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Favored Enemy (Level 1)' class='internal-link'>Favored Enemy</a>, <a href='#Favored Foe (Level 1)' class='internal-link'>Favored Foe</a>, <a href='#Natural Explorer (Level 1)' class='internal-link'>Natural Explorer</a>, <a href='#Deft Explorer (Level 1)' class='internal-link'>Deft Explorer</a></td><td class="value">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Fighting Style (Level 2)' class='internal-link'>Fighting Style</a>, <a href='#Spellcasting (Level 2)' class='internal-link'>Spellcasting</a>, <a href='#Spellcasting Focus (Level 2)' class='internal-link'>Spellcasting Focus</a></td><td class="value">2</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Ranger Archetype (Level 3)' class='internal-link'>Ranger Archetype</a>, <a href='#Primeval Awareness (Level 3)' class='internal-link'>Primeval Awareness</a>, <a href='#Primal Awareness (Level 3)' class='internal-link'>Primal Awareness</a></td><td class="value">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a>, <a href='#Martial Versatility (Level 4)' class='internal-link'>Martial Versatility</a></td><td class="value">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a></td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Favored Enemy and Natural Explorer improvements (Level 6)' class='internal-link'>Favored Enemy and Natural Explorer improvements</a>, <a href='#Deft Explorer Improvement (Level 6)' class='internal-link'>Deft Explorer Improvement</a></td><td class="value">4</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Ranger Archetype feature (Level 7)' class='internal-link'>Ranger Archetype feature</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a>, <a href='#Land's Stride (Level 8)' class='internal-link'>Land's Stride</a></td><td class="value">5</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Hide in Plain Sight (Level 10)' class='internal-link'>Hide in Plain Sight</a>, <a href='#Nature's Veil (Level 10)' class='internal-link'>Nature's Veil</a>, <a href='#Natural Explorer improvement (Level 10)' class='internal-link'>Natural Explorer improvement</a>, <a href='#Deft Explorer Improvement (Level 10)' class='internal-link'>Deft Explorer Improvement</a></td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Ranger Archetype feature (Level 11)' class='internal-link'>Ranger Archetype feature</a></td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"></td><td class="value">8</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Vanish (Level 14)' class='internal-link'>Vanish</a>, <a href='#Favored Enemy improvement (Level 14)' class='internal-link'>Favored Enemy improvement</a></td><td class="value">8</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Ranger Archetype feature (Level 15)' class='internal-link'>Ranger Archetype feature</a></td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Feral Senses (Level 18)' class='internal-link'>Feral Senses</a></td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Foe Slayer (Level 20)' class='internal-link'>Foe Slayer</a></td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d10 per Ranger level
- **Hit Points at First Level:** 10 + CON
- **Hit Points at Higher Levels:** add 6 OR 1d10 + CON  (minimum of 1)

## Starting Ranger

- **Saving Throws**: Dexterity, Strength
- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor), [medium armor](/3-Content/Rules/item-types.md#Medium%20Armor), [shields](/3-Content/Compendiums/items/shield.md)
- **Weapons**: simple weapons, martial weapons
- **Tools**: none
- **Skills**: choose 3 from [Animal Handling](/3-Content/Rules/skills.md#Animal%20Handling), [Athletics](/3-Content/Rules/skills.md#Athletics), [Insight](/3-Content/Rules/skills.md#Insight), [Investigation](/3-Content/Rules/skills.md#Investigation), [Nature](/3-Content/Rules/skills.md#Nature), [Perception](/3-Content/Rules/skills.md#Perception), [Stealth](/3-Content/Rules/skills.md#Stealth), and [Survival](/3-Content/Rules/skills.md#Survival)

You start with the following items, plus anything provided by your background.

- (a) [scale mail](/3-Content/Compendiums/items/scale-mail.md) or (b) [leather armor](/3-Content/Compendiums/items/leather-armor.md)
- (a) two [shortswords](/3-Content/Compendiums/items/shortsword.md) or (b) two simple melee weapons
- (a) a [dungeoneer's pack](/3-Content/Compendiums/items/dungeoneers-pack-xphb.md) or (b) an [explorer's pack](/3-Content/Compendiums/items/explorers-pack-xphb.md)
- A [longbow](/3-Content/Compendiums/items/longbow.md) and a [quiver](/3-Content/Compendiums/items/quiver-xphb.md) of [20 arrows](/3-Content/Compendiums/items/arrows-20.md)

Alternatively, you may start with 5d4 × 10 gp to buy your own equipment.

## Multiclassing Ranger

**Ability Score Minimum:** Dexterity 13, Wisdom 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor), [medium armor](/3-Content/Rules/item-types.md#Medium%20Armor), [shields](/3-Content/Compendiums/items/shield.md)
- **Weapons**: simple weapons, martial weapons
- **Skills**: choose 1 from [Animal Handling](/3-Content/Rules/skills.md#Animal%20Handling), [Athletics](/3-Content/Rules/skills.md#Athletics), [Insight](/3-Content/Rules/skills.md#Insight), [Investigation](/3-Content/Rules/skills.md#Investigation), [Nature](/3-Content/Rules/skills.md#Nature), [Perception](/3-Content/Rules/skills.md#Perception), [Stealth](/3-Content/Rules/skills.md#Stealth), and [Survival](/3-Content/Rules/skills.md#Survival)

## Ranger

Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.

After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon's thick scales.

Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends the hawk to distract the creature while he readies his bow.

Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.

### Deadly Hunters

Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.

Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.

### Independent Adventurers

Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first—and possibly the last—line of defense.

This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways.

### Creating a Ranger

As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger's ways? Did you leave your apprenticeship, or was your mentor slain—perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.

What's the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?

#### Quick Build

You can make a ranger quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. (Some rangers who focus on two-weapon fighting make Strength higher than Dexterity.) Second, choose the [outlander](/3-Content/Compendiums/backgrounds/outlander.md) background.

> [!quote] A quote from Soveliss  
> 
> I spend a lot of my life away from civilization, keeping to its fringes to protect it. Don't assume that because I don't bend the knee to your king that I haven't done more to protect him than all his knights put together.

Rangers are free-minded wanderers and seekers who patrol the edges of civilized territory, turning back the denizens of the wild lands beyond. It is a thankless job, since their efforts are rarely understood and almost never rewarded. Yet rangers persist in their duties, never doubting that their work makes the world a safer place.

A relationship with civilization informs every ranger's personality and history. Some rangers see themselves as enforcers of the law and bringers of justice on civilization's frontier, answering to no sovereign power. Others are survivalists who eschew civilization altogether. They vanquish monsters to keep themselves safe while they live in and travel through the perilous wild areas of the world. If their efforts also benefit the kingdoms and other civilized realms that they avoid, so be it.

If you're creating or playing a ranger character, the following sections offer ideas for embellishing the character and enhancing your roleplaying experience.

> [!quote] A quote from Xanathar  
> 
> I'm a monster. Are you going to try to kill me? Didn't think so. Go kill some goblins or something. On second thought, goblins aren't monsters - they're people. So maybe you should call yourself a people killer.

## View of the World
_Source: Xanathar's Guide to Everything_

A ranger's view of the world begins (and sometimes ends) with that character's outlook toward civilized folk and the places they occupy. Some rangers have an attitude toward civilization that's deeply rooted in disdain, while others pity the people they have sworn to protect—though on the battlefield, it's impossible to tell the difference between one ranger and another. Indeed, to those who have seen them operate and been the beneficiaries of their prowess, it scarcely matters why rangers do what they do. That said, no two rangers are likely to express their opinions on any matter in the same way.

If you haven't yet thought about the details of your character's worldview, consider putting a finer point on things by summarizing that viewpoint in a short statement (such as the entries on the following table). How might that feeling affect the way you conduct yourself?

**View of the World**

`dice: [](ranger.md#^view-of-the-world)`

| dice: d6 | View |
|----------|------|
| 1 | Towns and cities are the best places for those who can't survive on their own. |
| 2 | The advancement of civilization is the best way to thwart chaos, but its reach must be monitored. |
| 3 | Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more. |
| 4 | Walls are for cowards, who huddle behind them while others do the work of making the world safe. |
| 5 | Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild. |
| 6 | Cities breed weakness by isolating folk from the harsh lessons of the wild. |
^view-of-the-world

## Homelands
_Source: Xanathar's Guide to Everything_

All rangers, regardless of how they came to take up the profession, have a strong connection to the natural world and its various terrains. For some rangers, the wilderness is where they grew up, either as a result of being born there or moving there at a young age. For other rangers, civilization was originally home, but the wilderness became a second homeland.

Think of your character's backstory and decide what terrain feels most like home, whether or not you were born there. What does that terrain say about your personality? Does it influence which spells you choose to learn? Have your experiences there shaped who your favored enemies are?

**Homelands**

`dice: [](ranger.md#^homelands)`

| dice: d6 | Homeland |
|----------|----------|
| 1 | You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell. |
| 2 | As part of a group of nomads, you acquired the skills for surviving in the desert. |
| 3 | Your early life in the Underdark prepared you for the challenges of combating its denizens. |
| 4 | You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones. |
| 5 | Because you grew up among the peaks, finding the best path through the mountains is second nature to you. |
| 6 | You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice. |
^homelands

## Sworn Enemy
_Source: Xanathar's Guide to Everything_

Every ranger begins with a favored enemy (or two). The determination of a favored enemy might be tied to a specific event in the character's early life, or it might be entirely a matter of choice.

What spurred your character to select a particular enemy? Was the choice made because of tradition or curiosity, or do you have a grudge to settle?

**Sworn Enemies**

`dice: [](ranger.md#^sworn-enemies)`

| dice: d6 | Enemy |
|----------|-------|
| 1 | You seek revenge on nature's behalf for the great transgressions your foe has committed. |
| 2 | Your forebears or predecessors fought these creatures, and so shall you. |
| 3 | You bear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal. |
| 4 | You find your foe fascinating, and you collect books of tales and history concerning it. |
| 5 | You collect tokens of your fallen enemies to remind you of each kill. |
| 6 | You respect your chosen enemy, and you see your battles as a test of respective skills. |
^sworn-enemies

## Class Features

### Favored Enemy (Level 1)

Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as [gnolls](/3-Content/Compendiums/bestiary/fiend/gnoll-warrior-xmm.md) and [orcs](/3-Content/Compendiums/bestiary/humanoid/tough-xmm.md)) as favored enemies.

You have advantage on Wisdom ([Survival](/3-Content/Rules/skills.md#Survival)) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.

When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.

You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.

### Favored Foe (Level 1)
_Source: Tasha's Cauldron of Everything p. 56_

*1st-level ranger [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md), which replaces the Favored Enemy feature and works with the Foe Slayer feature*

When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your [concentration](/3-Content/Rules/conditions.md#Concentration) (as if you were [concentrating](/3-Content/Rules/conditions.md#Concentration) on a spell).

The first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you can increase that damage by `d4`.

You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.

This feature's extra damage increases when you reach certain levels in this class: to `d6` at 6th level and to `d8` at 14th level.

### Natural Explorer (Level 1)

You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.

While traveling for an hour or more in your favored terrain, you gain the following benefits:

- Difficult terrain doesn't slow your group's travel.  
- Your group can't become lost except by magical means.  
- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.  
- If you are traveling alone, you can move stealthily at a normal pace.  
- When you forage, you find twice as much food as you normally would.  
- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.  

You choose additional favored terrain types at 6th and 10th level.

### Deft Explorer (Level 1)
_Source: Tasha's Cauldron of Everything p. 56_

*1st-level ranger [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md), which replaces the Natural Explorer feature*

You are an unsurpassed explorer and survivor, both in the wilderness and in dealing with others on your travels. You gain the Canny benefit below, and you gain an additional benefit below when you reach 6th level and 10th level in this class.

#### Canny

Choose one of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses the chosen skill.

You can also speak, read, and write two additional languages of your choice.

### Fighting Style (Level 2)

At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

- [Archery](/3-Content/Compendiums/feats/archery-xphb.md)  
- [Defense](/3-Content/Compendiums/feats/defense-xphb.md)  
- [Dueling](/3-Content/Compendiums/feats/dueling-xphb.md)  
- [Two-Weapon Fighting](/3-Content/Compendiums/feats/two-weapon-fighting-xphb.md)  

### Spellcasting (Level 2)

By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See "chapter 10" for the general rules of spellcasting and "chapter 11" for the ranger spell list.

#### Spell Slots

The Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

For example, if you know the 1st-level spell [animal friendship](/3-Content/Compendiums/spells/animal-friendship-xphb.md) and have a 1st-level and a 2nd-level spell slot available, you can cast [animal friendship](/3-Content/Compendiums/spells/animal-friendship-xphb.md) using either slot.

#### Spells Known of 1st Level and Higher

You know two 1st-level spells of your choice from the ranger spell list.

The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.

Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: your proficiency bonus + your Wisdom</span>

<span class='abilityAttackMod'>**Spell attack modifier**: your proficiency bonus + your Wisdom</span>

### Spellcasting Focus (Level 2)
_Source: Tasha's Cauldron of Everything p. 56_

*2nd-level ranger [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

You can use a [druidic focus](/3-Content/Compendiums/items/druidic-focus-xphb.md) as a spellcasting focus for your ranger spells. A druidic focus might be a sprig of mistletoe or holly, a wand or rod made of yew or another special wood, a staff drawn whole from a living tree, or an object incorporating feathers, fur, bones, and teeth from sacred animals.

### Ranger Archetype (Level 3)

At 3rd level, you choose an archetype that you strive to emulate from the list of available archetypes. Your choice grants features at 3rd level, and again at 7th, 11th, and 15th level.

### Primeval Awareness (Level 3)

Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.

### Primal Awareness (Level 3)
_Source: Tasha's Cauldron of Everything p. 56_

*3rd-level ranger [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md), which replaces the Primeval Awareness feature*

You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know.

**Primal Awareness Spells**

| Ranger Level | Spell |
|--------------|-------|
| 3rd | [speak with animals](/3-Content/Compendiums/spells/speak-with-animals-xphb.md) |
| 5th | [beast sense](/3-Content/Compendiums/spells/beast-sense-xphb.md) |
| 9th | [speak with plants](/3-Content/Compendiums/spells/speak-with-plants-xphb.md) |
| 13th | [locate creature](/3-Content/Compendiums/spells/locate-creature-xphb.md) |
| 17th | [commune with nature](/3-Content/Compendiums/spells/commune-with-nature-xphb.md) |
^primal-awareness-spells

You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Martial Versatility (Level 4)
_Source: Tasha's Cauldron of Everything p. 56_

*4th-level ranger [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a fighting style you know with another fighting style available to rangers. This replacement represents a shift of focus in your martial practice.

### Extra Attack (Level 5)

Beginning at 5th level, you can attack twice, instead of once, whenever you take the [Attack](/3-Content/Rules/actions.md#Attack) action on your turn.

### Favored Enemy and Natural Explorer improvements (Level 6)

At 6th level, you gain an additional favored terrain.

At 6th level, you choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures.

### Deft Explorer Improvement (Level 6)
_Source: Tasha's Cauldron of Everything p. 56_

You gain an additional benefit when you reach 6th level in this class.

#### Roving

Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed.

### Ranger Archetype feature (Level 7)

At 7th level, you gain a feature granted to you by your Ranger Archetype.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Land's Stride (Level 8)

Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.

In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the [entangle](/3-Content/Compendiums/spells/entangle-xphb.md) spell.

### Hide in Plain Sight (Level 10)

Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.

Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity ([Stealth](/3-Content/Rules/skills.md#Stealth)) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.

### Nature's Veil (Level 10)
_Source: Tasha's Cauldron of Everything p. 56_

*10th-level ranger [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md), which replaces the Hide in Plain Sight feature*

You draw on the powers of nature to hide yourself from view briefly. As a bonus action, you can magically become [invisible](/3-Content/Rules/conditions.md#Invisible), along with any equipment you are wearing or carrying, until the start of your next turn.

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.

### Natural Explorer improvement (Level 10)

You gain an additional favored terrain.

### Deft Explorer Improvement (Level 10)
_Source: Tasha's Cauldron of Everything p. 56_

You gain an additional benefit when you reach 10th level in this class.

#### Tireless

As an action, you can give yourself a number of temporary hit points equal to `d8` + your Wisdom modifier (minimum of 1 temporary hit point). You can use this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.

In addition, whenever you finish a short rest, your [exhaustion](/3-Content/Rules/conditions.md#Exhaustion) level, if any, is decreased by 1.

### Ranger Archetype feature (Level 11)

At 11th level, you gain a feature granted to you by your Ranger Archetype.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Vanish (Level 14)

Starting at 14th level, you can use the [Hide](/3-Content/Rules/actions.md#Hide) action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.

### Favored Enemy improvement (Level 14)

At 14th level, you choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures.

### Ranger Archetype feature (Level 15)

At 15th level, you gain a feature granted to you by your Ranger Archetype.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Feral Senses (Level 18)

At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any [invisible](/3-Content/Rules/conditions.md#Invisible) creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't [blinded](/3-Content/Rules/conditions.md#Blinded) or [deafened](/3-Content/Rules/conditions.md#Deafened).

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Foe Slayer (Level 20)

At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.

## Optional Features

> [!example]- Optional Features: Fighting Style, Ranger
> ![Fighting Style, Ranger](/3-Content/Compendiums/lists/list-optfeaturetype-fs-r.md#Fighting%20Style,%20Ranger)
^list-optfeature-fs-r