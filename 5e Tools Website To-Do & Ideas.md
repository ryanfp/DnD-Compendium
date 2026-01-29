---
title: 5eTools Website Guide/Goals
created: 2025/11/29 at 21:58
updated: 2026/01/24 at 01:55
aliases:
  - 5eTools Website Guide/Goals
tags:
  - ffa03c
---

# 5eTools Website Guide/Goals

Currently building a personal mirror to the popular and useful [5etools](https://5e.tools/index.html) website. 

## In-Progress

- Class Design
	- [?] Cipher
	- [?] Oracle
	- [ ] Aegis
	- [?] Cardcaster
	- [?] Ranger Revision
- [ ] Implementing IndexedDB sitewide to improve performance
- [ ?] Designing a “Which Class are You?” quiz to implement on the website
- Redesigning the color palette of the whole site’s light and dark modes
	- [!] Dark Mode (mostly done)
	- [?] Light Mode
- [ ] Changing the site header to be more modern
- [ ] Integrating UI icons before keywords in text
	- [!] get either SVG or PNGs of all files (if PNGs, multiple sizes are needed)
- [ ] Include a “Class Emblem” on every class page
	- [x] Have a mockup or sketches of desired class icons ready
	- [ ] Hire someone to commission some svgs
- [?] Integrate DungeonChurch’s index page button highlights
- BG3 wiki UI colors
	- link text - #ffa03c
	- link hover/visited rgb(190 120 40);
	- link new - rgb(220 70 70);
	- header/bold - rgb(238, 85, 0)

## Website Development

### UI & Design Updates

- [ ] Change site color palette to match Obsidian’s, possibly tweak link colors and fonts
    - [ ] Figure out a better color palette for UI; base mostly on *5etools* but change highlights
        - [ ] Add button highlights from *Dungeon Church*’s fork
        - [x] See if there’s anything else from *Dungeon Church*’s fork to incorporate
    - [ ] Use color palette generator website and research contrast/readability
    - [ ] Decide if font should be updated
    - [ ] Add icons before certain callouts or as part of tags in text
	    - [ ] ![[image-2.png]]Action - ![[image-1.png]]Bonus Action - ![[image-3.png]]Reaction - ![[image-11.png]]Movement Speed
	    - [ ] ![[image-23.png]]Hit Points - Blue Heart for Temp HP - ![[image-25.png]]![[image-51.png]]![[image-57.png]]![[image-26.png]]Armor Class - ![[image-26.png]] or ![[image-28.png]]Saving Throws - ![[image-27.png]]Attack Rolls
	    - [ ] Generic Actions
		    - [ ] ![[image-52.png]]![[image-56.png|20x20]]![[image-58.png]]![[image-59.png]]![[image-60.png]]![[image-61.png]]
		    - [ ] ![[image-53.png]] [Dash](https://bg3.wiki/wiki/Dash_\(bonus_action\) "Dash (bonus action)")
		    - [ ] ![[image-54.png]][Disengage](https://bg3.wiki/wiki/Disengage:_Bonus_Action "Disengage: Bonus Action")
		    - [ ] ![[image-55.png]] [Help](https://bg3.wiki/wiki/Help_\(bonus_action\) "Help (bonus action)")
	    - [ ] ![[image-15.png]]Advantage - ![[image-14.png]]Disadvantage - ![[image-16.png]]Difficulty Class (DC)
	    - [ ] **- Damage Types -** 
		    - [ ] ![[image-19.png]]Healing (HexCode# 30bbbb)
		    - [ ] ![[image-43.png]]Bludgeoning (HexCode# 8c8c8c)
		    - [ ] ![[image-44.png]]Piercing (HexCode# 8c8c8c)
		    - [ ] ![[image-45.png]]Slashing (HexCode# 8c8c8c)
		    - [ ] ![[image-33.png]]Acid (HexCode# 80b000)
		    - [ ] ![[image-34.png]]Cold (HexCode# 3399cc)
		    - [ ] ![[image-35.png]]Fire (HexCode# ee5500)
		    - [ ] ![[image-36.png]]Force (HexCode# cc3333)
		    - [ ] ![[image-37.png]]Lightning (HexCode# 3366cc)
		    - [ ] ![[image-38.png]]Necrotic (HexCode# 40b050)
		    - [ ] ![[image-39.png]]Poison (HexCode# 44bb00)
		    - [ ] ![[image-40.png]]Psychic (HexCode# cc77aa)
		    - [ ] ![[image-41.png]]Radiant (HexCode# ccaa00)
		    - [ ] ![[image-42.png]]Thunder (HexCode# 8844bb)
	    - [ ] ![[image-50.png]]Inspiration - ![[image-21.png]]Resting - ![[image-31.png|25x25]]Recharge - ![[image-32.png]]Difficult Terrain - ![[image-47.png]]Duration
	    - [ ] ![[image-49.png]]Spell Slots - ![[image-7.png]]Spell Points - ![[image-48.png]]Psionics? - ![[image-8.png]]Ritual - ![[image-24.png]]Concentration - ![[image-20.png]]Exploit Die
- [ ] Themes
	- [ ] Obsidian Themes
		- [ ] Light
			- [ ] ITS Pathfinder Remastered
			- [ ] Atom
- [ ] Add “Show Subclasses” collapse button near the top of the classes page to hide them like filters”
- [ ] Change the Filter “collapse and expand” buttons from the current glyphicon to either a +/- or a differne tone

### Layout & Functionality

- [ ] Potentially change layout or add more functionality to improve flow with planned site changes
	- [ ] have a very rough draft of a color palette and .css file
	- [ ] show screenshot of what it makes obsidian look like, it’s pretty rough
- [x] Add loading animations and bars
    - [-] Spinning d20 animation
    - [x] Low profile loading bar at top
    - [ ] can make it so it only appears on pages that take 150ms or longer to load
- [ ] Implement light/dark mode toggle
- [ ] Redo navigation for a more modern look; consult other forks for inspiration
- [x] ~~Ability to drag and reorder table columns like Google Sheets~~ Changed table column order for many pages to now have *Name* first. 
	- [ ] ❌ Some pages have a large gap between the first and second column, maybe something to do with how I moved the columns around?
- [ ] Integrate scheduling functionality (*DungeonChurch* may have this)
- [ ] Implement content preloading for main list or page sections
- [ ] Make adventure book covers smaller (or increase screen density)
- [ ] Make tables have slightly alternating colors every other row
- [ ] Make background two-toned
- [ ] Make inline table borders a different color to make it more outlined
- [x] make sure 3D dice functionality is working
- [ ] Change the Chevron icon to a d20
- [ ] See how much a commissin for site assets would be
- [ ] 

### Content Management

- [x] Properly delete unwanted content (actual file removal, not blacklist)
- [x] Delete “JoeyJoestar Good and Evil json file”
- [ ] Go back through classes/subclasses on Obsidian and update with new sources
- [ ] Add missing subclasses to site
- [ ] See what discrepancies there are between Obsidian and 5etools database/jsons
	- [ ] somanyrobots; Songs of the Spellbound Sea
	- [ ] GMBinder; The Cipher
	- [ ] MCDM’s Draw Steel; The Null
	- [ ] Paths of Power; The Aegis
	- [ ] ???

### Integration

- [ ] Create Discord server with desired roles, templates, bots, and community settings
    - [ ] Use templates from Firefox tabs
    - [ ] Make it look nice and add useful bots/configurations
    - [ ] Change Discord link in files to new one
- [ ] Create matching Patreon, Ko-fi, Bluesky pages for OverTheMoonDND
- [ ] Contract a graphic designer for site logo in various sizes/forms

---

## Homebrewing 5e Mechanics

### Rules & Options

- [x] Implement 2014 rules as a side grade, referencing [[#2014 Options]]
- [ ] Implement Homebrew options from [[#Homebrew To-Add]]
- [ ] Make the 3-save change site wide (schema validation, etc.)
    - [ ] Apply to extra skills “Mechanics” and “Streetwise”
    - [ ] Figure out saving throw scaling (proficiency, half-PB, etc.)
    - [ ] Decide on “bad” saving throws at high level (is it fine, or tweak/provide compensation?)
        - [ ] Consider fixing “Stunned” via Dazed condition (see [[#Homebrew To-Add]])
- [ ] Finish creating full suite of “builder" files for homebrew creation
- [ ] **Flavor WISE** how can I work a spiritual “song of creation” into the world? It would be so cool if when someone swan songs I can narrate the song of creation changing it’s tune, with a building crescendo of a violin etc etc or narrate it at other times during the campaign
- [ ] Add MCDM Draw Steel’s *Negotiation* system

### Subclasses & Classes

- [ ] Create cardcaster class
    - [ ] Research Fiverr contract for game designer help
    - [ ] Use references: Harbinger (Reddit), Cardcaster (MASTERCLASS CODEX), additional warlock subclasses from Reddit, other cardcaster/oracle class sources
    - [ ] Brainstorm new class names (Oracle, Sage, Emissary, Diviner, Thaumaturge)
- [ ] Add Patreon content to homebrew base classes
    - [ ] Move Patreon Pugilist classes from SVM to UAH edition
    - [ ] Add any LaserLlama, KibblesTasty, somanyrobots content
- [ ] For weaker or less interesting classes, integrate some of their “X but just more X” subclasses into the base kit. 
	- [ ] Ranger
		- [ ] Two main things are proficiency in exploration and the environment and choosing a hunt, a target
		- [ ] Keep Hunter’s Quarry changes
			- [ ] create new ways to flavor the ability, maybe different effects that can be chosen upon marking
				- [ ] sneaky mark
				- [ ] bounty mark
				- [ ] based on animals or mythical creatures
					- [ ] pack tactics for wolves quarry
					- [ ] poison damage on viper’s quarry
					- [ ] dragons breath on dragons quarry
					- [ ] owlbear temp HP
			- [ ] Add way to mark a creature that you can’t see, like studying its tracks or something. Maybe it takes a Ritual spell or just 10 mins?
		- [ ] General
		- [ ] Difficult terrain doesn't slow your group's travel times. - Your group can't become lost except by magical means. - You always know which direction is north. - Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger (your passive perception doesn't get penalties). - If you are traveling alone, you can move stealthily at a normal pace. - When you forage, you find twice as much food as you normally would. - While tracking other creatures by close range (within 1 mile), you also learn their exact number, their sizes, and how long ago they passed through the area by studying the area (floor tracks, trees or the like). - Your group can travel longer distances and faster per day without getting any disadvantages, regardless of their Travel Pace, and can travel up to double the distances of each Pace per day without getting tired. When you reach level 5th you become an expert at traveling stealthily and helping others move in stealth. You always have the Pass without Trace spell prepared. You can cast it twice without expending a spell slot if you are on your favored terrain, and you regain all expended uses of to cast it with this ability when you finish a Long Rest. When you reach level 14th, you no longer need concentration on that spell while you are in your favored terrain.
		- [ ] The big change I would rather see is that 'hunter's mark' actually weakens the enemy or makes the more vulnerable to your party.
		- [ ] where you get proficiencies or resistances based on what you chose. Personally, I like how Larian Studios fixed the ranger.
		- [ ] The feywanderer get a fairy or a unicorn, the Gloomstalker gets a shadow or a phase spider, Horizen Walker gets an Aboleth or a Flumph,
			- [ ] [Land's Stride - bg3.wiki](https://bg3.wiki/wiki/Land%27s_Stride)
			- [ ] [Natural Explorer - bg3.wiki](https://bg3.wiki/wiki/Natural_Explorer)
			- [ ] [Favoured Enemy - bg3.wiki](https://bg3.wiki/wiki/Favoured_Enemy)
			- [ ] [Exceptional Training - bg3.wiki](https://bg3.wiki/wiki/Exceptional_Training)
			- [ ] [Escape the Horde - bg3.wiki](https://bg3.wiki/wiki/Escape_the_Horde)
			- [ ] [Companion's Bond - bg3.wiki](https://bg3.wiki/wiki/Companion%27s_Bond)
			- [ ] [Multiattack Defence - bg3.wiki](https://bg3.wiki/wiki/Multiattack_Defence)
			- [ ] [Horde Breaker - bg3.wiki](https://bg3.wiki/wiki/Horde_Breaker)
		- [ ] Hunter
			- [ ] [Whirlwind](https://bg3.wiki/wiki/Whirlwind_Attack)[Whirlwind Attack - bg3.wiki](https://bg3.wiki/wiki/Whirlwind_Attack) 
			- [ ] [Volley](https://bg3.wiki/wiki/Volley)[Volley - bg3.wiki](https://bg3.wiki/wiki/Volley) 
		- [ ] [Fast Hands - bg3.wiki](https://bg3.wiki/wiki/Fast_Hands)
		- [ ] [Second-Story Work - bg3.wiki](https://bg3.wiki/wiki/Second-Story_Work)
		- [ ] [Assassinate: Ambush - bg3.wiki](https://bg3.wiki/wiki/Assassinate:_Ambush)
		- [ ] [Assassinate: Initiative - bg3.wiki](https://bg3.wiki/wiki/Assassinate:_Initiative)
		- [ ] [Berserker - bg3.wiki](https://bg3.wiki/wiki/Berserker)

### Mechanics, Skills & Rules Balancing

- [ ] Figure out many balancing and rules changes
    - [ ] Weapon masteries—whether to backport, overlap with maneuvers, masteries for all martials, or make weapons have intrinsic properties
    - [ ] Crit threshold/damage multiplier variance per weapon
- [ ] Ability Scores
    - [ ] Make character creation offer max flexibility and still include flaws
    - [ ] Maintain/improve bounded accuracy (err on weaker side to balance buffs)
    - [ ] Figure out what Strength does, and how it’s buffed (compile ideas)
- [ ] Skills and Rebalancing
    - [ ] [Interesting TTRPG mechanics - Fork My Brain](https://notes.nicolevanderhoeven.com/Interesting+TTRPG+mechanics)
    - [ ] Add Mechanics skill (non-arcane engineering/tinkering)
    - [ ] Add Streetwise skill (social know-how, local info, blending in, etc.)
    - [ ] Buff/rebalance Medicine (see Google Drive/email for ideas)
        - [ ] Maximize healing
        - [ ] Useful for death saves/dying mechanics
        - [ ] Resurrection: 3 checks (Mind/Body/Soul = Arcana/Medicine/Religion)
    - [ ] Death/dying mechanics
        - [ ] Rebalance Swan Song (see recent emails)
        - [ ] Decide on death moves, swan song inclusion/exclusion
        - [ ] Dying condition and alternatives for mobility/dying
        - [ ] Rework resurrection spells and revival prevalence
- [ ] General Rebalancing
    - [ ] Use resources/threads: Discord of Many Things “5e Rebuilds”, SwEcky, KibblesTasty, LevelUpA5e, UA Reddit, other rebuilds
- [ ] Refactor stacking Advantage system 
    - [ ] Use offset stacking (e.g. 2 adv vs 1 disadv = net adv, never fully cancels except at parity)
- [ ] If a party member takes damage that reduces their Wild Shape form's Hit Points below 0, the remaining damage is applied to their original form. If the remaining damage is also enough to reduce their original form to 0 Hit Points, they die instantly, skipping the usual death saving throws.
- [ ] [Rampage (Condition) - bg3.wiki](https://bg3.wiki/wiki/Rampage_(Condition))
- [ ] [[damage-type-interactions|New Damage Type Interactions & Conditions]]
- [ ] [D&D 5e rule changes - bg3.wiki](https://bg3.wiki/wiki/D%26D_5e_rule_changes)
- [ ] PB Short Rests per Long Rest
	- [ ] Past 

### Source & Homebrew Management

- [ ] Update homebrew files (e.g. Zaman’s, Ryoko’s Guide, Loot Taverns, etc.)
- [ ] Check which homebrew/Obsidian sources are missing from 5etools
    - [ ] Kibbles Generic Elemental Spells?

### Economy & Currency

- [ ] Finish currency conversion system
    - [ ] Standard and custom conversion rates (copper/silver/gold, etc.)
    - [ ] Formula for curve consistency
    - [ ] Research and integrate ideas from external links:
        - [Paizo forum thread](https://paizo.com/threads/rzs2khtr?Overly-Complex-Economy-Rebalance-Proposal)
        - [Methods & Madness: The WEIGHT of GOLD](https://methodsetmadness.blogspot.com/2019/08/the-weight-of-gold-is-od-right-again.html)
        - [Delta's D&D Hotspot: On Money](https://deltasdnd.blogspot.com/2010/03/on-money.html?m=1)
        - [Delta's D&D Hotspot: Money Results](https://deltasdnd.blogspot.com/2010/05/money-results.html?m=1)

---

## General Game Management & Running the Game

- [ ] Add website and Discord features for running sessions
- [ ] Scheduling: Integrate any existing modules (DungeonChurch fork)
- [ ] Make Discord server as a community (Q&A channels, open bot configs, etc.)
- [ ] Regularly update, refine, and balance rules and content

## Ideas/Goals

- Have a list of very common/useful D&D websites
- maybe have a UI option to have all three tabs show at once like (traits, info and images)
- [x] ]When combining Monster Hunter with Ranger, also generalize the monster types to allow more flexibility
1. **Eternals:** Celestials, Fiends
2. **Nightmares:** Aberrations, Monstrosities
3. **Primordials:** Dragons, Giants, Elementals
4. **Naturals:** Beasts, Plants
5. **Unnaturals:** Undead, Constructs, Oozes
	- finish finding out if merging the *Monster Hunter* class with Ranger steps too much on the Bloodhunter’s toes

## Misc

- see if it’s possible to have the races and subraces be a drop down list instead of separate entries (it is but it’s very complex and would take a long time)
- [x] see if it’s possible to have the top row of the table view freeze or stay at the top

- - - 

## Issues

### Homebrew To-Add

- Add/Change conditions 
	- Dazed as an alternative to stunned or paralyzed (maybe make alternative to deafened too? Maybe thunder damage could use a buff idk)
	- Burning = clear the Frostbite or Frozen condition, take 
	- Shocked (use Electrocuted condition icon) = cannot take Reactions, and has Disadvantage on Ability Checks and Saving Throws that use Dexterity
	- Frostbite = take 1d4 Cold damage when you attack with a weapon + 1 extra cold damage (lose 1 stack per turn, any cold damage only inflicts 1 stack. 10 stacks max). 
	- Frozen = (at 10 stacks of Frostbite) become vulnerable to Bludgeoning, Thunder, and Fire damage, movement speed halved rounded up. When taking that kind of damage, lose this condition.
	- Corroded = has -2 to AC for duration, loses effect when hit with a melee attack/spell or gets the Wet condition
	- Caustic = takes 1d4 Poison if they have not moved on their turn
	- Make Surprised give you Disadvantage on Initiative rolls AND unable to take reactions
	- Necrotic damage disrupts healing? Maybe it just decreases the amount gained
	- Wet = (Lasts until the end of your next turn) Clear the Burning or Corroded condition. Gain Resistance to Fire Damage. Tier of Resistance to Lightning and Cold Damage decreases by one (Immunity –> Resistance –> Neutral –> Vulnerable)Attacks that use Lightning or Cold damage have advantage, and you have Disadvantage on saving throws to resist the effects of Lightning or Lightning Damage. Take double the amount of stacks of Frostbite

### GitHub Repo Ideas

- README Formatting
	- Title at the top centered
		- Short description under it with horizontal line
		- then logo
	- Buttons under all this
		- WEBSITE STUFF
			- license
			- release version
			- obsidian
			- main site
		- SOCIAL MEDIA
			- patreon
			- discord
			- kofi
			- twitter
			- bluesky