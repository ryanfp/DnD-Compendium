---
obsidianUIMode: preview
cssclasses: json5e-class
tags:
- ttrpg-cli/class/savant
- ttrpg-cli/compendium/src/5e/llsav
aliases:
- Savant
---
# Savant
*Source: Savant*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='4'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Intellect Die</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Adroit Analysis (Level 1)' class='internal-link'>Adroit Analysis</a>, <a href='#Scholarly Pursuits (Level 1)' class='internal-link'>Scholarly Pursuits</a>, <a href='#Predictive Defense (Level 1)' class='internal-link'>Predictive Defense</a></td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Genius Intellect (Level 2)' class='internal-link'>Genius Intellect</a>, <a href='#Sharp Mind (Level 2)' class='internal-link'>Sharp Mind</a></td><td class="value">`d6`</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Academic Discipline (Level 3)' class='internal-link'>Academic Discipline</a></td><td class="value">`d6`</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`d6`</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Peerless Insights (Level 5)' class='internal-link'>Peerless Insights</a>, <a href='#Swift Reflexes (Level 5)' class='internal-link'>Swift Reflexes</a></td><td class="value">`d8`</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Discipline Feature (Level 6)' class='internal-link'>Discipline Feature</a></td><td class="value">`d8`</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Keen Awareness (Level 7)' class='internal-link'>Keen Awareness</a></td><td class="value">`d8`</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`d8`</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Predictive Expert (Level 9)' class='internal-link'>Predictive Expert</a></td><td class="value">`d8`</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Discipline Feature (Level 10)' class='internal-link'>Discipline Feature</a></td><td class="value">`d8`</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Unrivaled Genius (Level 11)' class='internal-link'>Unrivaled Genius</a></td><td class="value">`d10`</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`d10`</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Swift Reflexes (2) (Level 13)' class='internal-link'>Swift Reflexes (2)</a></td><td class="value">`d10`</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Unyielding Will (Level 14)' class='internal-link'>Unyielding Will</a></td><td class="value">`d10`</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Discipline Feature (Level 15)' class='internal-link'>Discipline Feature</a></td><td class="value">`d10`</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`d10`</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Flawless Analysis (Level 17)' class='internal-link'>Flawless Analysis</a></td><td class="value">`d12`</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Swift Reflexes (3) (Level 18)' class='internal-link'>Swift Reflexes (3)</a></td><td class="value">`d12`</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">`d12`</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Incomparable Intellect (Level 20)' class='internal-link'>Incomparable Intellect</a></td><td class="value">`d12`</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Savant level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Savant

- **Saving Throw Proficiencies**: Intelligence, Wisdom
- **Skill Proficiencies**: *Choose 2:* [Arcana](/3-Content/Rules/skills.md#Arcana), [History](/3-Content/Rules/skills.md#History), [Insight](/3-Content/Rules/skills.md#Insight), [Investigation](/3-Content/Rules/skills.md#Investigation), [Medicine](/3-Content/Rules/skills.md#Medicine), [Nature](/3-Content/Rules/skills.md#Nature), [Persuasion](/3-Content/Rules/skills.md#Persuasion), or [Religion](/3-Content/Rules/skills.md#Religion)
- **Weapon Proficiencies**: Simple weapons, [shortsword](/3-Content/Compendiums/items/shortsword.md), [rapier](/3-Content/Compendiums/items/rapier.md), and [whip](/3-Content/Compendiums/items/whip.md)
- **Tool Proficiencies**: One set of Artisian's Tools of your choice
- **Armor Training**: [Light armor](/3-Content/Rules/item-types.md#Light%20Armor)

**Starting Equipment:** You start with the following items, plus anything provided by your background.

- (a) a simple weapon of your choice or (b) a [shortsword](/3-Content/Compendiums/items/shortsword.md).
- (a) A light crossbow and 20 bolts or (b) two [daggers](/3-Content/Compendiums/items/dagger.md).
- a set of [artisan's tools](/3-Content/Compendiums/items/artisans-tools-xphb.md), [leather armor](/3-Content/Compendiums/items/leather-armor.md), and [scholar's pack](/3-Content/Compendiums/items/scholars-pack-xphb.md).

## Multiclassing Savant

**Ability Score Minimum:** Intelligence 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Skill Proficiencies**: *Choose 1:* [Arcana](/3-Content/Rules/skills.md#Arcana), [History](/3-Content/Rules/skills.md#History), [Insight](/3-Content/Rules/skills.md#Insight), [Investigation](/3-Content/Rules/skills.md#Investigation), [Medicine](/3-Content/Rules/skills.md#Medicine), [Nature](/3-Content/Rules/skills.md#Nature), [Persuasion](/3-Content/Rules/skills.md#Persuasion), or [Religion](/3-Content/Rules/skills.md#Religion)
- **Tool Proficiencies**: An Artisan's Tools of your choice
- **Armor Training**: [Light armor](/3-Content/Rules/item-types.md#Light%20Armor)

An elf cleaned her glasses with the corner of her cloak as the dust settled. The emperor had paid her a large sum to locate this forgotten place, and after months of pouring over ancient maps, she had pieced together the one-lost location of the primeval temple. Now, she had a decision to make. If she reported the location of the temple to her benefactor, it would be ruthlessly stripped of valuables. But, if she kept the location to herself, she could preserve the ancient knowledge contained within. For a savant, knowledge is more precious than any sum of gold.

An aging human warrior silently assessed the soldiers under his command. They were exhausted and almost out of supplies. It was the tenth night of a brutal siege, and the graying commander knew that no reinforcements were coming to their rescue. He was too old to be of much use in battle, but if his soldiers followed his orders without any hesitation, they might have a chance of survival. He stood up, and for what could very well be his final time, drew his weathered sword from its scabbard.

A young dwarf bent over his unconscious comrade in the midst of battle, his hands shook as he examined his brother's wounds. His clan had spent a small fortune sending him to study at the finest university in the land. All the hours spent in lectures and libraries, all for this moment. He thought back to his lessons and began to dress his brother's wounds.

The characters described above are just some examples of the adventuring intellectuals known as Savants. Armed with only their wit, they aid their allies and outwit their enemies.

## Magnificent Minds

There are many wonderfully intelligent people in the world, but few are true Savants. Born with the innate desire to learn anything they can, and the potential for genius-level intellect, Savants spend their lives learning anything that those around them are willing to teach. Often recognizable at an early age, a Savant's unquenchable hunger for knowledge draws them to the great libraries, universities, and other places of higher learning. They are willing to go to any lengths to unlock the secrets of the world, often turning to lives of adventure. For a Savant, no price is too steep for the promise of discovery.

## Intense Focus

Savants are hyper-focused on their chosen area of study and often become obsessed with learning all they can about their specialty. In their quest for discovery, Savants are willing to set aside any conviction, political, religious, or otherwise, to acquire the information they seek. To them, their desire for knowledge is more important than loyalty to any ideology.

Often at great personal cost, Savants will not stop their research until they have made a revolutionary discovery in their area of study. It is not unusual to encounter one such scholar far from the safety of a university and its libraries.

## Creating a Savant

When creating a Savant, consider their upbringing and the level of their formal education. Were they a star pupil at the finest university gold could buy? Or, were they a child of the streets, fighting for every scrap of knowledge that they could get their hands on? Maybe their mind was trained from birth to be the perfect analytical tool for a noble house or family.

Also, consider why your Savant would rely on only their intellect rather than use their gifts in pursuit of the arcane or in the service of a higher power. Are they cursed to never be able to produce even the most mundane spell? Or, have they sworn never to rely on the magic that destroyed their family?

Finally, why did your Savant become an adventurer rather than live the life of an academic? Have they advanced beyond normal study and look forward to the endless discoveries of adventure? Or, have they always been a student of the world?

Having trouble creating a personality for your Savant, or just looking for inspiration? Choose an Obsession, Eccentricity, and an Irrational Fear from the tables presented here.

## Obsessions

In their desire to answer every question, Savants can develop obsessions. These inexplicable questions and phenomena gnaw at a Savant until they find the answers that they seek.

`dice: [](savant-llsav.md#^obsession)`

| dice: d4 | Obsession |
|----------|-----------|
| 1 | You discovered a strange script in the margin of a book. The best scholars cannot identify it. |
| 2 | As a child you saw a majestic golden bird fly across the sky that left a rainbow in its wake. |
| 3 | Your father charged you to find the legendary, and most likely fictional, chalice of Bahamut. |
| 4 | You use the word "inconceivable" all the time even though you aren't exactly sure what it means |
^obsession

## Eccentricities

Often, with great intellect and intense mental focus comes some strange habits. A Savant's eccentricities are usually the result of them spending too much time on their field of study.

`dice: [](savant-llsav.md#^eccentricity)`

| dice: d6 | Eccentricity |
|----------|--------------|
| 1 | You assume that every person you talk to cares about the minutia of your area of expertise. |
| 2 | You have a really bad habit of only speaking in the technical jargon of your field. |
| 3 | You don't understand children. |
| 4 | When someone doesn't understand something you just haven't explained it enough times. |
| 5 | You take diligent notes on everything even when it isn't socially appropriate. |
| 6 | You are so dedicated to your field of study that you find yourself explaining things to your foes. |
^eccentricity

## Good Luck Charms

Often, despite their intellect, Savants develop attachments to mundane charms, objects, or clothing they perceive as lucky.

`dice: [](savant-llsav.md#^lucky-trinket)`

| dice: d6 | Lucky Trinket |
|----------|---------------|
| 1 | You refuse to place your faith in a single deity so you carry a multitude of holy symbols. |
| 2 | Your father was a farmer who paid for your education. You wear his hat in his memory. |
| 3 | Despite its ineffectiveness, you carry a [whip](/3-Content/Compendiums/items/whip.md) to impress and intimidate others. |
| 4 | You carry a scroll of insane ramblings. One day you *will* figure out its meaning. |
| 5 | You wear a pair of crystal spectacles even though you have perfect vision. |
| 6 | You never leave home without a copy of your mentor's thesis on [owlbear](/3-Content/Compendiums/bestiary/monstrosity/owlbear-xmm.md) anatomy. |
^lucky-trinket

## Irrational Fears

Despite their impressive minds, Savants tend to develop fears that anyone with common sense would find totally irrational.

`dice: [](savant-llsav.md#^irrational-fear)`

| dice: d6 | Irrational Fear |
|----------|-----------------|
| 1 | You are *convinced* you contracted a minor form of lycanthropy from a dog that bit you as a child. |
| 2 | You will do literally anything to avoid interacting with fire magic. |
| 3 | You always make sure to sleep with a silver coin in your hand to ward off [night hags](/3-Content/Compendiums/bestiary/fiend/night-hag-xmm.md). |
| 4 | You hate snakes and snake-like creatures. |
| 5 | You are so afraid of undead that the sight of them causes you to vomit. |
| 6 | You give out code words to your allies so they can prove they aren't [doppelgangers](/3-Content/Compendiums/bestiary/monstrosity/doppelganger-xmm.md). |
^irrational-fear

## Quick Build

You can make a Savant quickly by using these suggestions. First, make Intelligence your highest ability score, followed by your Dexterity. Second, choose the [Noble](/3-Content/Compendiums/backgrounds/noble.md) background.

## Class Features

### Adroit Analysis (Level 1)

You can focus your mind to analyze your foe. Beginning at 1st level, you can use a bonus action to analyze one creature you can see within 60 feet, designating it as your Focus. While it is your Focus, you gain the following benefits against it:

- When you hit it with an attack, or if you observe it for 1 minute, you learn one of the following characteristics of your choice: its highest ability score, lowest ability score, Armor Class, speed, creature type, or one special sense.  
- You can use your Intelligence, instead of your Strength or Dexterity, for weapon attack and damage rolls against it.  
- Once per turn when you hit it with an attack, you deal `d6` bonus damage. The bonus increases as you gain levels, to match the Intellect Die column of the Savant table above.  
- Any attacks it makes against you have disadvantage.  

It remains your Focus until you choose to end this effect (no action required), or it is hidden from you, if you designate another creature as your Focus, or if you are [incapacitated](/3-Content/Rules/conditions.md#Incapacitated).

While you have a Focus, you cannot cast or concentrate on spells or use other features that require your [concentration](/3-Content/Rules/conditions.md#Concentration).

### Scholarly Pursuits (Level 1)

Never satisfied with your current state you are always looking to expand your educational horizons. At 1st level, you master one [Scholarly Pursuit](/3-Content/Compendiums/lists/list-optfeaturetype-ll-sp.md) from the list at the end of this class.

You master one additional Scholarly Pursuit of your choice when you reach 4th, 7th, 13th, and 18th level in this class.

### Predictive Defense (Level 1)

Your analytical style of fighting allows you to better anticipate and dodge attacks. Beginning at 1st level, when you calculate your Armor Class in light or medium armor, or when you are unarmored, you can use Intelligence in place of Dexterity.

### Genius Intellect (Level 2)

Your mind is capable of wondrous bursts of insight, fortitude, and inspiration. At 2nd level, you gain the following benefits:

#### Intellect Die

These increased analytical abilities are represented by your Intellect Die, which begins as a `d6`. You start knowing three such features that make use of this Intellect Die: Calculated Flourish, Potent Observation, and Wondrous Insight.

At certain levels, your Intellect Die increases in size, as shown in the Intellect Die column on the Savant table.

If one of your Intellect Die features requires a creature to make a saving throw, the save DC is calculated as follows:

<span class='abilityDc'>**Intellect save DC**: Intelligence + Proficiency Bonus</span>

### Calculated Flourish (Level 2)

When a creature you can see targets you with a melee attack, you can use a reaction to add one roll of your Intellect Die to your Armor Class against that attack. If this Flourish causes the attack to miss, you can move up to 10 feet as part of the same reaction without provoking opportunity attacks.

### Potent Observation (Level 2)

When another creature that can hear you hits your [Focus](/3-Content/Compendiums/classes/savant-llsav.md#Adroit%20Analysis%20(Level%201)) with an attack, you can use your reaction to grant it a bonus to its damage roll equal to one roll of your Intellect Die.

### Wondrous Insight (Level 2)

When another creature that can hear you makes an ability check using a skill or tool that you are proficient in, you can use your reaction to grant it a bonus to its roll equal to one roll of your Intellect Die. You can do so after it rolls the `d20`.

### Sharp Mind (Level 2)

Your ability to analyze your surroundings is unrivaled. Also at 2nd level, you can use a bonus action on your turn to take the [Help](/3-Content/Rules/actions.md#Help) or [Search](/3-Content/Rules/actions.md#Search) actions, or make an Intelligence ability check to recall information about a creature or object you can see.

Moreover, you can use the [Help](/3-Content/Rules/actions.md#Help) action to aid a creature in attacking your [Focus](/3-Content/Compendiums/classes/savant-llsav.md#Adroit%20Analysis%20(Level%201)), so long as you are within 5 feet of the attacker, even when you are not within 5 feet of the target.

### Academic Discipline (Level 3)

Choose an Academic Discipline: Archaeologist, Investigator, Naturalist, Physician, or Tactician, each of which is detailed at the end of this class. Your Discipline grants you features at 3rd level, and again when you reach 6th, 10th, and 15th level.

### Ability Score Improvement (Level 4)

When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

### Peerless Insights (Level 5)

Your mind and its capabilities are truly wondrous. Beginning at 5th level, if another creature that can hear you is forced to make a saving throw, you can use your reaction to grant it a bonus to its roll equal to one roll of your Intellect Die.

Moreover, whenever you make an Intelligence, Wisdom, or Charisma saving throw you can add one roll of your Intellect Die to your saving throw, so long as you are not [incapacitated](/3-Content/Rules/conditions.md#Incapacitated).

### Swift Reflexes (Level 5)

The speed that you observe and react to your surroundings is incredible. Beginning at 5th level, you have a second reaction you can take each round, but only one reaction per trigger.

At certain Savant levels you gain additional reactions, you gain a third reaction at 13th level and a fourth at 18th level.

### Discipline Feature (Level 6)

At 6th level, you gain a feature granted by your Academic Discipline.

### Keen Awareness (Level 7)

You are always prepared for danger. Beginning at 7th level, so long as you aren't [incapacitated](/3-Content/Rules/conditions.md#Incapacitated) you cannot be surprised and you add your Intelligence modifier to your initiative rolls.

Also, when you roll initiative you can use [Adroit Analysis](/3-Content/Compendiums/classes/savant-llsav.md#Adroit%20Analysis%20(Level%201)) to designate a creature you can see within range as your Focus.

### Ability Score Improvement (Level 8)

You can increase one ability score of your choice by 2, or two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

### Predictive Expert (Level 9)

You are seemingly always one step ahead of your chosen foes. Starting at 9th level, when your [Focus](/3-Content/Compendiums/classes/savant-llsav.md#Adroit%20Analysis%20(Level%201)) forces you to make an ability check or saving throw, you have advantage on your roll.

### Discipline Feature (Level 10)

At 10th level, you gain a feature granted by your Academic Discipline.

### Unrivaled Genius (Level 11)

Your intellect has risen to near-supernatural heights. At 11th level, your [Genius Intellect](/3-Content/Compendiums/classes/savant-llsav.md#Genius%20Intellect%20(Level%202)) features gain the benefits below:

#### Calculated Flourish

If your reaction causes the attack to miss, you can make one melee attack against your attacker as part of your reaction.

#### Potent Observation

You can use this reaction whenever another creature that can hear you attacks a creature that you can see. Moreover, if you use this reaction when another creature attacks your Focus, you can add two rolls of your Intellect Die to its damage roll.

#### Wondrous Insight

When you use Wondrous Insight on another creature's ability check you roll your Intellect Die twice and use the higher roll.

### Ability Score Improvement (Level 12)

You can increase one ability score of your choice by 2, or two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

### Swift Reflexes (2) (Level 13)

Beginning at 13th level, you have a third reaction you can take each round, but only one reaction per trigger.

### Unyielding Will (Level 14)

At 14th level, you gain proficiency in Charisma saving throws, and you have advantage on any saving throw you are forced to make to resist the [charmed](/3-Content/Rules/conditions.md#Charmed) and [frightened](/3-Content/Rules/conditions.md#Frightened) conditions.

### Discipline Feature (Level 15)

At 15th level, you gain a feature granted by your Academic Discipline.

### Ability Score Improvement (Level 16)

You can increase one ability score of your choice by 2, or two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

### Flawless Analysis (Level 17)

Beginning at 17th level, you can use your action to flawlessly predict your [Focus](/3-Content/Compendiums/classes/savant-llsav.md#Adroit%20Analysis%20(Level%201))'s next move and alert your allies. Until the start of your next turn, your Focus has disadvantage on every ability check, attack roll, and saving throw. Also, creatures of your choice that can hear you have advantage on any saving throw your Focus forces them to make until your next turn.

Once you use this feature you must finish a short or long rest before you can use it again.

### Swift Reflexes (3) (Level 18)

Beginning at 18th level, you have a fourth reaction you can take each round, but only one reaction per trigger.

### Ability Score Improvement (Level 19)

You can increase one ability score of your choice by 2, or two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

### Incomparable Intellect (Level 20)

At 20th level, you realize your true potential. Your Intelligence score increases by 4, up to a maximum of 24. Also, if you roll an Intellect Die and roll lower than your Intelligence modifier, you can replace the roll with your Intelligence modifier.

## Optional Features

> [!example]- Optional Features: Scholarly Pursuits
> ![Scholarly Pursuits](/3-Content/Compendiums/lists/list-optfeaturetype-ll-sp.md#Scholarly%20Pursuits)
^list-optfeature-ll-sp