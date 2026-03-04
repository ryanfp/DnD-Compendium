---
obsidianUIMode: preview
cssclasses: json5e-class
tags:
- class/pugilist
- compendium/src/5e/pugilist2024
aliases:
- Pugilist
---
# Pugilist
*Source: The Pugilist Class (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Fisticuffs</th><th class="value">Moxie Points</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Fisticuffs (Level 1)' class='internal-link'>Fisticuffs</a>, <a href='#Iron Chin (Level 1)' class='internal-link'>Iron Chin</a></td><td class="value">1d8</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Moxie (Level 2)' class='internal-link'>Moxie</a>, <a href='#Bloodied But Unbowed (Level 2)' class='internal-link'>Bloodied But Unbowed</a>, <a href='#Swagger Streak (Level 2)' class='internal-link'>Swagger Streak</a></td><td class="value">1d8</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Heavy Hitter (Level 3)' class='internal-link'>Heavy Hitter</a>, <a href='#Pugilist Subclass (Level 3)' class='internal-link'>Pugilist Subclass</a></td><td class="value">1d8</td><td class="value">2</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a>, <a href='#Dig Deep (Level 4)' class='internal-link'>Dig Deep</a></td><td class="value">1d8</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a>, <a href='#Haymaker (Level 5)' class='internal-link'>Haymaker</a></td><td class="value">1d10</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Moxie-Fueled Fists (Level 6)' class='internal-link'>Moxie-Fueled Fists</a>, <a href='#Subclass Feature (Level 6)' class='internal-link'>Subclass Feature</a></td><td class="value">1d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Down But Not Out (Level 7)' class='internal-link'>Down But Not Out</a></td><td class="value">1d10</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d10</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#School of Hard Knocks (Level 9)' class='internal-link'>School of Hard Knocks</a></td><td class="value">1d10</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Herculean (Level 10)' class='internal-link'>Herculean</a>, <a href='#Shake It Off (Level 10)' class='internal-link'>Shake It Off</a></td><td class="value">1d10</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 11)' class='internal-link'>Subclass Feature</a></td><td class="value">1d12</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d12</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Dig Deeper (Level 13)' class='internal-link'>Dig Deeper</a></td><td class="value">1d12</td><td class="value">7</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Unbreakable (Level 14)' class='internal-link'>Unbreakable</a></td><td class="value">1d12</td><td class="value">8</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Pugnacious (Level 15)' class='internal-link'>Pugnacious</a></td><td class="value">1d12</td><td class="value">8</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">1d12</td><td class="value">9</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Subclass Feature (Level 17)' class='internal-link'>Subclass Feature</a></td><td class="value">2d6</td><td class="value">9</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Fighting Spirit (Level 18)' class='internal-link'>Fighting Spirit</a></td><td class="value">2d6</td><td class="value">10</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">2d6</td><td class="value">11</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Peak Physical Condition (Level 20)' class='internal-link'>Peak Physical Condition</a></td><td class="value">2d6</td><td class="value">12</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d10 per Pugilist level
- **Hit Points at First Level:** 10 + CON
- **Hit Points at Higher Levels:** add 6 OR 1d10 + CON  (minimum of 1)

## Starting Pugilist

- **Saving Throw Proficiencies**: Constitution, Strength
- **Skill Proficiencies**: *Choose 2:* Acrobatics, Athletics, Deception, Intimidation, Perception, Sleight of Hand, or Stealth
- **Weapon Proficiencies**: Simple weapons and improvised
- **Tool Proficiencies**: Choose one type of Gaming Set
- **Armor Training**: Light armor

**Starting Equipment:** *Choose A or B:* (A) Club, Handaxe, Gaming Set (chosen for the tool proficiency above), Dungeoneer's Pack, and 31 GP; or (B) 50 GP

## Multiclassing Pugilist

**Ability Score Minimum:** Constitution 13, Strength 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Weapon Proficiencies**: improvised
- **Armor Training**: Light armor

## Pugilist

*A Streetfighter with Swagger to Spare*

Pugilists live a rough and tumble life that leaves them full of determination and recklessness, either from overconfidence or desperation. In a fight, they channel this strength of character to dig deep and snatch victory from the jaws of defeat, even when outarmed and outnumbered. Even when they ultimately fail, Pugilists go down swinging.

Pugilists tap into their inner strength in the form of moxie. This is not an esoteric or mystical energy that flows through the multiverse, but the result of self-confidence and determination forged over a lifetime of hardship with a never-say-die attitude. Anyone can be taught how to fist fight but accessing the strength and resilience of the Pugilist can't. The secret of mastering moxie doesn't come from disciplined study or rigorous training, it comes from years of wanting and needing.

In back alleys, underground fight clubs, and poorer quarters, Pugilists don't have time to consider the lofty ideals of philosophy or ponder the mysteries of the universe. They spend their days chasing down their next meal or, if they're fortunate enough to have that, their next drink, bedfellow, or flophouse. For Pugilists, becoming an adventurer might be the only way out of whatever miserable situation they've been stuck in since infancy. For others, getting lost out in the world is an escape from the tangled web of debt or enemies they've piled up. But some Pugilists are happy just with the promise of ample opportunities to bloody their knuckles.

## Class Features

### Fisticuffs (Level 1)

Your years of fighting in back alleys and taverns have given you mastery over combat styles that use <span title="Player's Handbook (2024)">Unarmed Strikes</span> and Pugilist weapons, which are the following:

- Simple Melee Weapons  
- <span title="Player's Handbook (2024)">Improvised Weapons</span>  

You gain the following benefits while you are unarmed or wielding only Pugilist weapons and you are wearing Light or no armor and are not wielding a Shield.

#### Bonus Unarmed Strike

You can make an <span title="Player's Handbook (2024)">Unarmed Strike</span> as a <span title="Player's Handbook (2024)">Bonus Action</span>.

#### Fisticuffs Die

You can roll `dice:1d8|noform|noparens|avg` (`d8`) in place of the normal damage of your <span title="Player's Handbook (2024)">Unarmed Strike</span> or Pugilist weapons. This die changes as you gain Pugilist levels, as shown in the Fisticuffs column of the Pugilist Features table.

#### Improved Improvisation

Your talent for turning everything into a weapon allows you to use the mastery properties of <span title="Player's Handbook (2024)">Improvised Weapons</span>. All Improvised Weapons count as having the Sap mastery property for you.

### Iron Chin (Level 1)

While you are wearing Light or no armor and not wielding a Shield, your base <span title="Player's Handbook (2024)">Armor Class</span> equals 12 plus your Constitution modifier.

### Moxie (Level 2)

Your experiences of beating the odds have given you a moxie you can channel in the midst of battle. This swagger is represented by a number of Moxie Points. Your Pugilist level determines the maximum number of points you have, as shown in the Moxie Points column of the Pugilist Features table.

You can spend these points to enhance or fuel certain Pugilist features. You start knowing three such features: Brace Up, One-Two Punch, and Stick and Move, each of which is detailed below.

When you expend a Moxie Point, it is unavailable until you finish a <span title="Player's Handbook (2024)">Short</span> or <span title="Player's Handbook (2024)">Long Rest</span>, at the end of which you regain all your expended points.

#### Brace Up

You can use a <span title="Player's Handbook (2024)">Bonus Action</span> and expend 1 Moxie Point to brace for attacks. When you do so, roll your Fisticuffs die, and gain a number of <span title="Player's Handbook (2024)">Temporary Hit Points</span> equal to the number rolled plus your Pugilist level and your Constitution modifier. These <span title="Player's Handbook (2024)">Temporary Hit Points</span> vanish if any remain after 10 minutes.

#### One-Two Punch

You can expend 1 Moxie Point to make two <span title="Player's Handbook (2024)">Unarmed Strikes</span> as a <span title="Player's Handbook (2024)">Bonus Action</span>.

#### Stick and Move

You can use a <span title="Player's Handbook (2024)">Bonus Action</span> and expend 1 Moxie Point to make an <span title="Player's Handbook (2024)">Unarmed Strike</span> and take the Dash or Disengage action.

### Bloodied But Unbowed (Level 2)

When you take damage, you can take a <span title="Player's Handbook (2024)">Reaction</span> to regain all your expended [Moxie Points](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Moxie%20(Level%202)). If you are Bloodied when you take this <span title="Player's Handbook (2024)">Reaction</span>, you also gain <span title="Player's Handbook (2024)">Temporary Hit Points</span> equal to four times your Pugilist level. These <span title="Player's Handbook (2024)">Temporary Hit Points</span> vanish if any remain when you finish a <span title="Player's Handbook (2024)">Short Rest</span>.

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Short</span> or <span title="Player's Handbook (2024)">Long Rest</span>.

### Swagger Streak (Level 2)

When you fail a Strength, Dexterity, Constitution, or Charisma check, you can expend a [Moxie Point](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Moxie%20(Level%202)) to attempt to swagger your way to success. Roll your Fisticuffs die and add the number rolled to the ability check, potentially turning it into a success. If the ability check still fails, you regain the expended Moxie Point and can't use this feature again until you finish a <span title="Player's Handbook (2024)">Short</span> or <span title="Player's Handbook (2024)">Long Rest</span>.

### Heavy Hitter (Level 3)

When you hit a creature with an <span title="Player's Handbook (2024)">Unarmed Strike</span>, you can use both the Damage and your choice of the Grapple or Shove option.

### Pugilist Subclass (Level 3)

You gain a Pugilist subclass of your choice. A subclass is a specialization that grants you features at certain Pugilist levels. For the rest of your career, you gain each of your subclass's features that are of your Pugilist level or lower.

### Ability Score Improvement (Level 4)

You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.

### Dig Deep (Level 4)

You can use a <span title="Player's Handbook (2024)">Bonus Action</span> to dig deep. For 10 minutes, you have <span title="Player's Handbook (2024)">Resistance</span> to Bludgeoning, Piercing, and Slashing damage and you ignore the effects of Exhaustion levels less than 6.

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Long Rest</span> unless you gain 1 Exhaustion level (no action required by you) to restore your use of it.

### Extra Attack (Level 5)

You can attack twice instead of once whenever you take the Attack action on your turn.

### Haymaker (Level 5)

When you make an attack with an <span title="Player's Handbook (2024)">Unarmed Strike</span> or Pugilist weapon, you can expend 1 [Moxie Point](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Moxie%20(Level%202)) to swing with wild abandon. On a hit, regain the expended Moxie Point and you deal maximum damage with that attack.

### Moxie-Fueled Fists (Level 6)

Whenever you deal damage with your <span title="Player's Handbook (2024)">Unarmed Strike</span> or an attack with an improvised weapon, it can deal your choice of Force damage or its normal damage type.

### Subclass Feature (Level 6)

You gain a feature from your Pugilist Subclass.

### Down But Not Out (Level 7)

When you use your [Bloodied But Unbowed](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Bloodied%20But%20Unbowed%20(Level%202)) while you are Bloodied, you can add a bonus to the damage of your <span title="Player's Handbook (2024)">Unarmed Strikes</span> and attacks with Pugilist weapons for the next minute. This bonus equals your Constitution modifier plus the number of levels of Exhaustion you have.

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Long Rest</span>.

### Ability Score Improvement (Level 8)

You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.

### School of Hard Knocks (Level 9)

Once per turn, you can deal an extra `dice:1d12|noform|noparens|avg` (`d12`) damage when you hit with an <span title="Player's Handbook (2024)">Unarmed Strike</span> or attack with a Pugilist weapon. This damage is the same type dealt by the weapon or <span title="Player's Handbook (2024)">Unarmed Strike</span>. You can forgo this extra damage to apply one of the following effects.

#### Endanger

The next time the creature is hit by an attack, the attack deals the maximum result of the attack's damage dice rather than rolling.

#### Provoke

The creature has <span title="Player's Handbook (2024)">Disadvantage</span> on attack rolls against creatures other than you until the end of your next turn.

### Herculean (Level 10)

You gain the following benefits.

#### Heavy Lifter

Your Strength score is doubled when determining your carrying capacity.

#### Pillar Breaker

When you hit an object with an <span title="Player's Handbook (2024)">Unarmed Strike</span>, the hit is a <span title="Player's Handbook (2024)">Critical Hit</span>.

#### Unmatched Athlete

Your jump distance is doubled.

### Shake It Off (Level 10)

With unflappable resolve, you can remove one of the following conditions from yourself at the start of each of your turns: Blinded, Charmed, Deafened, one level of Exhaustion, Frightened, Paralyzed, Poisoned, Restrained, or Stunned.

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Long Rest</span> unless you take a level of Exhaustion (no action required by you) to restore your use of it.

### Subclass Feature (Level 11)

You gain a feature from your Pugilist Subclass.

### Ability Score Improvement (Level 12)

You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.

### Dig Deeper (Level 13)

You can use a <span title="Player's Handbook (2024)">Bonus Action</span> to dig deeper. For 1 minute, you have all the benefits of your [Dig Deep](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Dig%20Deep%20(Level%204)) and can use your [School of Hard Knocks](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#School%20of%20Hard%20Knocks%20(Level%209)) twice per turn instead of once.

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Long Rest</span>. Starting at level 20, you can use it twice before a <span title="Player's Handbook (2024)">Long Rest</span>.

### Unbreakable (Level 14)

You have <span title="Player's Handbook (2024)">Advantage</span> on Strength, Dexterity, and Constitution saving throws.

Additionally, whenever you make a saving throw and fail, you can expend 1 [Moxie Point](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Moxie%20(Level%202)) to reroll it, and you must use the new roll.

### Pugnacious (Level 15)

When you roll <span title="Player's Handbook (2024)">Initiative</span>, you can remove one level of Exhaustion on yourself and regain your uses of [Down But Not Out](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Down%20But%20Not%20Out%20(Level%207)), [Dig Deep](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Dig%20Deep%20(Level%204)), and [Shake It Off](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Shake%20It%20Off%20(Level%2010)).

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Long Rest</span>.

### Ability Score Improvement (Level 16)

You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 17)

You gain a feature from your Pugilist Subclass.

### Fighting Spirit (Level 18)

When you are reduced to 0 <span title="Player's Handbook (2024)">Hit Points</span> but not killed outright, you can drop to 1 <span title="Player's Handbook (2024)">Hit Point</span> instead. When you do, you gain <span title="Player's Handbook (2024)">Temporary Hit Points</span> equal to half of your maximum <span title="Player's Handbook (2024)">Hit Points</span>, regain all your expended [Moxie Points](/3-Mechanics/CLI/classes/pugilist-pugilist2024.md#Moxie%20(Level%202)), and have <span title="Player's Handbook (2024)">Resistance</span> to all damage except Force for the next minute.

Once you use this feature, you can't use it again until you finish a <span title="Player's Handbook (2024)">Long Rest</span>.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Combat Prowess is recommended.

### Peak Physical Condition (Level 20)

Your strength and resilience are the stuff of legends. You gain the following benefits.

#### Hale and Hearty

Your Strength and Constitution scores increase by 2, to a maximum of 23.

#### Sleep It Off

When you finish a <span title="Player's Handbook (2024)">Long Rest</span> and you have the Exhaustion condition, you lose all levels of Exhaustion.

#### Vim and Vigor

When you finish a <span title="Player's Handbook (2024)">Short Rest</span>, you regain <span title="Player's Handbook (2024)">Hit Points</span> equal to twice your Pugilist level.