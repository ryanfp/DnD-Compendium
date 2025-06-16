---
obsidianUIMode: preview
cssclasses: json5e-class
tags:
- ttrpg-cli/compendium/src/5e/vss
- ttrpg-cli/subclass/warden/soulblood-shaman
aliases:
- Soulblood Shaman
---
# Soulblood Shaman
*[Warden](VSS%20Warden.md): Champion's Call*  
*Source: Valda's Spire of Secrets*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='9'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Cantrips Known</th><th class="value">Spells Known</th><th class="value">1st</th><th class="value">2nd</th><th class="value">3rd</th><th class="value">4th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"></td><td class="value">2</td><td class="value">3</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"></td><td class="value">2</td><td class="value">4</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Soulblood Shaman (Level 3)' class='internal-link'>Soulblood Shaman</a></td><td class="value">2</td><td class="value">4</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"></td><td class="value">2</td><td class="value">4</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"></td><td class="value">2</td><td class="value">5</td><td class="value">4</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Whispers of Beyond (Level 6)' class='internal-link'>Whispers of Beyond</a></td><td class="value">2</td><td class="value">6</td><td class="value">4</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">2</td><td class="value">6</td><td class="value">4</td><td class="value">2</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"></td><td class="value">3</td><td class="value">7</td><td class="value">4</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">8</td><td class="value">4</td><td class="value">3</td><td class="value">⏤</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">9</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"></td><td class="value">3</td><td class="value">10</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Spell Resistance (Level 13)' class='internal-link'>Spell Resistance</a></td><td class="value">3</td><td class="value">10</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"></td><td class="value">3</td><td class="value">10</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"></td><td class="value">3</td><td class="value">11</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"></td><td class="value">3</td><td class="value">11</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"></td><td class="value">3</td><td class="value">11</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"></td><td class="value">3</td><td class="value">11</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">⏤</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"></td><td class="value">3</td><td class="value">12</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Ethereal Watcher (Level 20)' class='internal-link'>Ethereal Watcher</a></td><td class="value">3</td><td class="value">13</td><td class="value">4</td><td class="value">3</td><td class="value">3</td><td class="value">1</td></tr>
> </tbody></table>

^class-progression


## Class Features

### Soulblood Shaman (Level 3)

The ancestral spirits called you by starlight to enact their will on the world, to protect their descendants, and to safeguard their resting places. You are a Soulblood Shaman, a manipulator of soul and ascetic of primal magic. Your community looks to you as a leader as well as a vital connection to the afterlife, for if you play your role, they too will join their ancestors in the great beyond.

### Spellcasting (Level 3)

Starting when you hear this call at 3rd level, you can channel your ancient insights into magic.

#### Cantrips

You learn two cantrips of your choice from the druid spell list. You learn an additional druid cantrip of your choice at 10th level.

#### Spell Slots

The Soulblood Shaman Spellcasting table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

#### Spells Known of 1st-Level and Higher

You know three 1st-level druid spells of your choice, two of which you must choose from the evocation or transmutation spells on the druid spell list.

The Spells Known column of the Soulblood Shaman Spellcasting table shows when you learn more druid spells of 1st level or higher. Each of these spells must be an evocation or transmutation spell of your choice, and must be of a level for which you have spell slots.

The spells you learn at 8th, 14th, and 20th level can come from any school of magic.

Whenever you gain a level in this class, you can replace one of the druid spells you know with another spell of your choice from the druid spell list. The new spell must be of a level for which you have spell slots, and it must be an evocation or transmutation spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.

#### Spellcasting Ability

Wisdom is your spellcasting ability for your druid spells, since you channel your magic through a connection to the great beyond. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: Wisdom + Proficiency Bonus</span>

<span class='abilityAttackMod'>**Spell attack modifier**: Wisdom + Proficiency Bonus</span>

### Soulblood (Level 3)

Also at 3rd level, as a reaction when a creature within 5 feet of you deals damage to you, you can mark that creature.

### Whispers of Beyond (Level 6)

At 6th level, you can hear the small voices of ancient spirits when you need guidance. If you spend one minute in contemplation when you make an Intelligence or Wisdom check, you can consult the spirits to gain advantage on the roll. However, the GM can decline to give you advantage on this check if the spirits would not possess appropriate guidance of knowledge.

### Spell Resistance (Level 13)

Beginning at 13th level, you have advantage on saving throws you make against spells.

### Ethereal Watcher (Level 20)

At 20th level, as an action, you can shrug off your mortal form for a short time to become something spiritual and material, an ethereal watcher. For the next minute, you gain the following benefits:

- As a bonus action on your turn, you can become ethereal, as per the etherealness spell.  
- You can return from being ethereal as a bonus action when you cast a spell, or when you use your Warden's Mark or your Warden's Grasp feature on your turn. When you return from being ethereal, each creature you choose within 10 feet of you takes `4d10` force damage, as they are pulled partially between the planes.  
- You can cast 1st and 2nd-level druid spells you know without expending spell slots.  

Once you use this ability, you can't use it again until you finish a long rest.