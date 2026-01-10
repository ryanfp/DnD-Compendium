---
title: 5eTools Website Guide/Goals
created: 2025/11/29 at 21:58
updated: 2026/01/09 at 21:25
aliases:
  - 5eTools Website Guide/Goals
tags:
  - bg3
---

# 5eTools Website Guide/Goals

Currently building a personal mirror to the popular and useful [5etools](https://5e.tools/index.html) website. 

## Website Development

### UI & Design Updates

- [ ] Change site color palette to match Obsidian’s, possibly tweak link colors and fonts
    - [ ] Figure out a better color palette for UI; base mostly on *5etools* but change highlights
        - [ ] Add button highlights from *Dungeon Church*’s fork
        - [ ] See if there’s anything else from *Dungeon Church*’s fork to incorporate
    - [ ] Use color palette generator website and research contrast/readability
    - [ ] Decide if font should be updated
    - [ ] Add icons before certain callouts or as part of tags in text
	    - [ ] ![[image-2.png]]Action - ![[image-1.png]]Bonus Action - ![[image-3.png]]Reaction - ![[image-11.png]]Movement Speed
	    - [ ] ![[image-23.png]]Hit Points -  Blue Heart for Temp HP  or ![[image-29.png]]![[image-30.png]]- ![[image-25.png]]Armor Class - ![[image-26.png]] or ![[image-28.png]]Saving Throws - ![[image-27.png]]Attack Rolls
	    - [ ] Generic Actions
	    - [ ] ![[image-15.png]]Advantage - ![[image-14.png]]Disadvantage - ![[image-16.png]]Difficulty Class (DC)
	    - [ ] Damage Types
		    - [ ] ![[image-19.png]]Healing
		    - [ ] ![[image-33.png]]
		    - [ ] ![[image-18.png]]Psychic
	    - [ ] ![[image-22.png]]Inspiration - ![[image-21.png]]Resting - ![[image-31.png]]Recharge - ![[image-32.png]]Difficult Terrain
	    - [ ] ![[image-6.png]]Spell Slots - ![[image-7.png]]Spell Points - ![[image-12.png]]Psionics? - ![[image-8.png]]Ritual - ![[image-24.png]]Concentration - ![[image-20.png]]Exploit Die

### Layout & Functionality

- [ ] Potentially change layout or add more functionality to improve flow with planned site changes
- [ ] Add loading animations and bars
    - [ ] Spinning d20 animation
    - [ ] Low profile loading bar at top
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

### Content Management

- [x] Properly delete unwanted content (actual file removal, not blacklist)
- [x] Delete “JoeyJoestar Good and Evil json file”
- [ ] Go back through classes/subclasses on Obsidian and update with new sources
- [ ] Add missing subclasses to site

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
		- [ ] General
			- [ ] [Land's Stride - bg3.wiki](https://bg3.wiki/wiki/Land%27s_Stride)
			- [ ] [Natural Explorer - bg3.wiki](https://bg3.wiki/wiki/Natural_Explorer)
			- [ ] [Favoured Enemy - bg3.wiki](https://bg3.wiki/wiki/Favoured_Enemy)
		- [ ] Hunter
			- [ ] [Whirlwind](https://bg3.wiki/wiki/Whirlwind_Attack)[Whirlwind Attack - bg3.wiki](https://bg3.wiki/wiki/Whirlwind_Attack) #bg3 
			- [ ] [Volley](https://bg3.wiki/wiki/Volley)[Volley - bg3.wiki](https://bg3.wiki/wiki/Volley) #bg3

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

- rename Halflings to “Hobbits”
- remove the GH:PP maneuvers options, they seem OP
- see if it’s possible to have the races and subraces be a drop down list instead of separate entries (it is but it’s very complex and would take a long time)
- [x] see if it’s possible to have the top row of the table view freeze or stay at the top

- - - 

## Issues

### Homebrew To-Add

- Add “Dazed” condition as an alternative to stunned or paralyzed

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