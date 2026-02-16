---
title: ""
created: 2026/02/03 at 23:06
updated: 2026/02/16 at 18:35
aliases:
  - Announcement
  - Better Write-Up
  - Untitled 2
tags:
  - stage/cancelled
  - stage/completed
  - stage/in-progress
  - stage/not-started
  - stage/on-hold
  - stage/planning
---

## Website

- [ ] Implement IndexedDB sitewide to increase performance #stage/planning
- [ ] Design a “Which Class Are You?” style quiz for help with picking a class on the site 
	- [ ] Create questions #stage/in-progress
	- [ ] Map questions and answer values to existing Classes #stage/in-progress 
	- [ ] Create .json file with content #stage/planning
	- [ ] Create survey.js form for the questions? #stage/not-started
	- [ ] Create new webpage and add to index #stage/not-started 
- [ ] Redesign website’s color palette and aesthetic appearance
	- [ ] Dark Mode
		- [ ] Delineate each heading and subheading, both in and out of tables to target with colors #stage/in-progress 
		- [ ] Correct issues with `background-image` and any overlays not loading #stage/in-progress s
		- [ ] Change button and highlight colors #stage/not-started 
		- [ ] Change general site heading? #stage/planning
	- [ ] Light Mode
		- [ ] Get background texture or color for the reading areas (parchment/dark parchment) and implement #stage/in-progress 
		- [ ] Recolor the background and text to reflect the light mode changes #stage/in-progress
		- [ ] Change button and highlight colors #stage/not-started
		- [ ] Change general site heading? #stage/planning
- [ ] Modernize certain parts of the website 
	- [ ] Header #stage/not-started 
		- [ ] Light/Dark toggle button in header #stage/planning 
	- [ ] Settings Modal #stage/not-started 
	- [ ] Navigation? #stage/not-started 
	- [ ] 
- [x] Add visual indicators for loading progress #stage/completed
	- [x] Loading bar at the top #stage/completed 
	- [-] Spinning d20 somewhere on the page #stage/cancelled
- [ ] Fix/Change layout in certain parts of the website
	- [x] Change table column order for multiple pages to have “Name” first #stage/completed 
	- [ ] Fix those same tables now having very long widths #stage/not-started 
	- [ ] Make adventure book covers smaller to fit more on screen #stage/not-started 
	- [ ] Make currently transparent or solid colored tables have alternating color rows #stage/not-started 
- [ ] Implement 3D Dice functionality & change dice rolltray icon
	- [ ] Grab 3d dice files from *DungeonChurch* website for use, find out more about it #stage/completed 
	- [ ] Grab dice library files from GitHub and add to repo #stage/completed 
	- [ ] Implement files and .js #stage/completed 
	- [x] Change chevron icon of dice roll tray
		- [x] Get d20 svg for use as replacement icon #stage/completed 
		- [x] Implement the svg for the rolltray icon #stage/on-hold
			- [?] Possibly just use basic dice emoji or glyph to mirror the inline icon use I want to implement for dice rolls #stage/in-progress 
	- [ ] 

## General Media

- [ ] Create matching media
	- [ ] Discord Server
		- [ ] Templates from Firefox
		- [ ] Add useful bots/configuarations
	- [ ] Patreon
	- [ ] Ko-Fi
	- [ ] BlueSky
- [ ] Contract a Graphic Designer for multiple projects
	- [ ] Site/Brand Logo
		- [ ] SVG
		- [ ] PNG
	- [ ] Class Icons/Emblems
		- [ ] SVG

## Homebrew

- [ ] Finish designing/creating all fully homebrewed classes
	- [ ] Aegis
	- [ ] Cipher
	- [ ] Oracle/Cardcaster
	- [ ] Null
- [ ] Do overhaul of base class progression
	- [ ] Decide if going to standardized 5.5e progression or leave as-is
	- [ ] Incorporate KibblesTasty’s *Alternate Martial Progression* into system (maybe change the levels around a bit)
	- [ ] Organize all exploits from all sources (LL Exploit Compendium, A5e, KT AMF)
		- [ ] List out
		- [ ] Tag for traits and classes
		- [ ] Mark out dupes, OP options, etc
		- [ ] Categorize into rough buckets (“Savage” for Barbs, “Devious” for Rogues)
		- [ ] Combine remaining LL and A5e exploits into one, keep KT AMF in other
	- [ ] Go through each base class, and compare using (LaserLlama, KT 5e++, 5e/5.5e, A5e, Treatmonk, other 5e updates like SweCky, Project Excelsior, etc)
		- [ ] Compare # of abiltiies, and power
		- [ ] Decide what is good to keep, what should stay or be rebalanced
		- [ ] Map remaining features to levels
		- [ ] Go through levels, add social/exploration options to combat-only ones
		- [ ] Classes
			- [ ] Artificer
			- [ ] Barbarian
			- [ ] Bard
			- [ ] Cleric
			- [ ] Druid
			- [ ] Fighter
			- [ ] Monk
			- [ ] Paladin
			- [ ] Ranger #stage/in-progress 
				- [ ] Gather abilities from different sources (LL, KT, 5e/5.5e, etc) ***Get A5e, KT 5e++, Treatmonk and DungeonDudes abilities too***
				- [ ] Decide what is to be kept, rebalanced or removed #stage/in-progress 
				- [ ] Map remaining features to levels #stage/planning 
			- [ ] Rogue #stage/planning 
			- [ ] Sorcerer
			- [ ] Warlock
			- [ ] Wizard
- [ ] Add multiple new conditions and interactions between them with existing mechanics/spells (Condition)
	- [ ] Immobilized = Your speed becomes zero, and you can’t benefit from any bonuses to your speed. If you’re flying when you become immobilized, you fall. You have Disadvantage on Reflex Saving Throws and Ability Checks using Dexterity. 
	- [ ] Slowed = Your movement speed is halved. 
	- [ ] Defenseless = Attack rolls against you have advantage
	- [ ] Helpless = Attack rolls against you are critical hits
	- [ ] Distracted = You cannot take Reactions
	- [ ] Dazed = Alternative to Stunned. *Possibly makes them vulnerable to Thunder damage?* Normally, this just makes it so they cannot take reactions, and must take either an Action or a Bonus Action. Movement speed is halved. 
	- [ ] Burning/Burned = take 1d4 Fire damage at the start of each turn, unless a feature or ability says otherwise (can give higher die, like d6). Anyone can spend an Action or Bonus Action to clear the condition. When a creature that is Burning successfully grapples another creature, they obtain the Burning condition as well. A creature who is Burning has Disadvantage on Stealth (Dexterity) checks and sheds Dim light in a 10 ft radius
	- [ ] Shocking/Shocked = cannot take Reactions, disadvantage on Dexterity checks and Reflex Saving Throws. Drop one item you are holding. 
	- [ ] Frostbite/Frostbitten = take 1d4 + # of stacks Cold damage when you attack with a weapon or attempt to cast a spell with somatic components. Cannot take Bonus Actions. Max 10 stacks, lose 1 stack per turn if doing nothing. Most sources inflict 1 stack.
	- [ ] Frozen/Freezing = at 10 stacks of Frostbite, lose all stacks and gain the Frozen condition. You become Immobilized. You take 1d4+4 Cold damage every turn and when you attempt to cast a spell with Somatic components or attack with a weapon. You become vulnerable to Bludgeoning, Thunder, Force, and Fire damage. When you take any of those damage types, lose this condition. You can also attempt to break out of the ice with a DC X Athletics check or inflict 15 Bludgeoning or Fire damage to the ice. 
	- [ ] Wet/Soaked = Last for 10 rounds or until you move your full movement speed in one turn. Clears the Burning or Corroded conditions. Gain Resistance to Fire damage. Tier of Susceptibility for Lightning and Cold damage decreased by 1 (Immunity–>Resistance–>Neutral–>Vulnerable). Attacks that use Lightning or Cold damage have advantage, and you have Disadvantage on saving throws to resist the effects of Lightning or Lightning Damage. Take double the amount of stacks of Frostbite when receiving Cold damage. 
	- [ ] Withered = (Necrotic) Healing you receive is halved. Disadvantage on Will and Fortitude Saving Throws. Lasts until the end of your next turn. Lesser or Greater Restoration, Remove Curse, etc. remove this condition. If you drop to 0 HP with this condition, gain one extra stack of the Wounded condition upon going down, and start with one extra failed death save (max 2). 
	- [ ] Corroded = Take 1d4 Acid damage at the start of your turns. -2 AC for duration. You can also spend an action to clear the condition, or clear the condition when gaining the Wet condition. Taking damage refreshes the duration and increases the die size one step. 
	- [ ] Wounded = gain 1 stack upon dropping to 0 HP. Each rolled death saving throw adds a stack, successes add 1, fails add 2. They last until you are healed to full and complete a Short/Long Rest, or when certain spells or effects remove all stacks. When you reach 0 HP, your current stacks are converted to failed death saves at a rate of 2:1, and then you gain another stack for the act of dropping to 0. E.g. You have 3 stacks of Wounded –> drop to 0 HP, convert to 1 failed death save, with one stack left over –> add +1 stack for going down –> continue as normal. When combat ends, stacks of Wounded are converted to stacks of Exhaustion at a 2:1 ratio. 
	- [ ] Dying/Downed = alternative condition when dropping to 0 HP. You can take a very limited number of actions, such as crawling 5 ft, shouting for help within 15 ft, or bracing yourself to prevent hits becoming crits. You have up to 3 uses, at which point you can spend a failed save to use another action per turn. Gain a stack of Wounded whenever you gain this condition. 
	- [ ] Silenced/Disrupted/Stupefied = some kind of condition that doesn’t let you cast spells period, or gives you a debuff to all spells. You have disadvantage on Will Saving Throws and Spell Attack rolls. If you critically fail a Fortitude Saving Throw to maintain Concentration, you gain this condition until the start of your next turn. *Your thoughts and instincts are clouded. Stupefied always includes a value. You take a status penalty equal to this value on Intelligence-, Wisdom-, and Charisma-based checks and DCs, including Will saving throws, spell attack rolls, spell DCs, and skill checks that use these ability scores. Any time you attempt to [Cast a Spell](https://pf2etools.com/actions.html#cast%20a%20spell_crb) while stupefied, the spell is disrupted unless you succeed at a flat check with a DC equal to 5 + your stupefied value*
	- [ ] Weakened = You deal half damage
	- [ ] Bewildered = You can only take a Magic action to cast a Cantrip you know. You have Disadvantage on Fortitude Saving Throws to maintain concentration on spells. 
	- [ ] Bleeding = You take 1d4 Slashing damage at the start of your turn and you have disadvantage on Fortitude Saving Throws. Slashing and Piercing damage does an additional 1d4 of damage. You can take an Action to 
	- [ ] Baned = You suffer a -1d4 penalty to all d20 tests. 
- [ ] Druids can change into Chalenge rating zero creatures for free. It encourages them to get creative and it doesnt give them an advantage in combat. Also you can talk to animals regardless of what kind of druid you are but only if you can turn into it. So a level 3 Druid can't talk to fish, but a level 10 Druid can
