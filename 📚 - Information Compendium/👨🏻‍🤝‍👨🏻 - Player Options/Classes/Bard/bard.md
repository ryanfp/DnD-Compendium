---
obsidianUIMode: preview
cssclasses: json5e-class
tags:
- ttrpg-cli/class/bard
- ttrpg-cli/compendium/src/5e/phb
aliases:
- Bard
---
# Bard
*Source: Player's Handbook p. 51. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th><th colspan='9'>Spell Slots per Spell Level</th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Cantrips Known</th><th class="value">Spells Known</th><th class="spellSlot">1st</th><th class="spellSlot">2nd</th><th class="spellSlot">3rd</th><th class="spellSlot">4th</th><th class="spellSlot">5th</th><th class="spellSlot">6th</th><th class="spellSlot">7th</th><th class="spellSlot">8th</th><th class="spellSlot">9th</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Bardic Inspiration (Level 1)' class='internal-link'>Bardic Inspiration</a>, <a href='#Spellcasting (Level 1)' class='internal-link'>Spellcasting</a></td><td class="value">2</td><td class="value">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Jack of All Trades (Level 2)' class='internal-link'>Jack of All Trades</a>, <a href='#Song of Rest (d6) (Level 2)' class='internal-link'>Song of Rest (d6)</a>, <a href='#Magical Inspiration (Level 2)' class='internal-link'>Magical Inspiration</a></td><td class="value">2</td><td class="value">5</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Bard College (Level 3)' class='internal-link'>Bard College</a>, <a href='#Expertise (Level 3)' class='internal-link'>Expertise</a></td><td class="value">2</td><td class="value">6</td><td class="spellSlot">4</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a>, <a href='#Bardic Versatility (Level 4)' class='internal-link'>Bardic Versatility</a></td><td class="value">3</td><td class="value">7</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Bardic Inspiration (d8) (Level 5)' class='internal-link'>Bardic Inspiration (d8)</a>, <a href='#Font of Inspiration (Level 5)' class='internal-link'>Font of Inspiration</a></td><td class="value">3</td><td class="value">8</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Countercharm (Level 6)' class='internal-link'>Countercharm</a>, <a href='#Bard College feature (Level 6)' class='internal-link'>Bard College feature</a></td><td class="value">3</td><td class="value">9</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"></td><td class="value">3</td><td class="value">10</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">11</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Song of Rest (d8) (Level 9)' class='internal-link'>Song of Rest (d8)</a></td><td class="value">3</td><td class="value">12</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Bardic Inspiration (d10) (Level 10)' class='internal-link'>Bardic Inspiration (d10)</a>, <a href='#Expertise (Level 10)' class='internal-link'>Expertise</a>, <a href='#Magical Secrets (Level 10)' class='internal-link'>Magical Secrets</a></td><td class="value">4</td><td class="value">14</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"></td><td class="value">4</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">15</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Song of Rest (d10) (Level 13)' class='internal-link'>Song of Rest (d10)</a></td><td class="value">4</td><td class="value">16</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Magical Secrets (Level 14)' class='internal-link'>Magical Secrets</a>, <a href='#Bard College feature (Level 14)' class='internal-link'>Bard College feature</a></td><td class="value">4</td><td class="value">18</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Bardic Inspiration (d12) (Level 15)' class='internal-link'>Bardic Inspiration (d12)</a></td><td class="value">4</td><td class="value">19</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">19</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">⏤</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Song of Rest (d12) (Level 17)' class='internal-link'>Song of Rest (d12)</a></td><td class="value">4</td><td class="value">20</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Magical Secrets (Level 18)' class='internal-link'>Magical Secrets</a></td><td class="value">4</td><td class="value">22</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Ability Score Improvement (Level 19)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">22</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Superior Inspiration (Level 20)' class='internal-link'>Superior Inspiration</a></td><td class="value">4</td><td class="value">22</td><td class="spellSlot">4</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">3</td><td class="spellSlot">2</td><td class="spellSlot">2</td><td class="spellSlot">1</td><td class="spellSlot">1</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Bard level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Bard

- **Saving Throws**: Charisma, Dexterity
- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor)
- **Weapons**: simple weapons, [hand crossbows](/3-Content/Compendiums/items/hand-crossbow.md), [longswords](/3-Content/Compendiums/items/longsword.md), [rapiers](/3-Content/Compendiums/items/rapier.md), [shortswords](/3-Content/Compendiums/items/shortsword.md)
- **Tools**: three [musical instruments](/3-Content/Compendiums/items/musical-instrument-xphb.md) of your choice
- **Skills**: choose any 3 [skills](/3-Content/Rules/skills.md)

You start with the following items, plus anything provided by your background.

- (a) a [rapier](/3-Content/Compendiums/items/rapier.md), (b) a [longsword](/3-Content/Compendiums/items/longsword.md), or (c) any simple weapon
- (a) a [diplomat's pack](/3-Content/Compendiums/items/diplomats-pack-xphb.md) or (b) an [entertainer's pack](/3-Content/Compendiums/items/entertainers-pack-xphb.md)
- (a) a [lute](/3-Content/Compendiums/items/lute.md) or (b) any other musical instrument
- [Leather armor](/3-Content/Compendiums/items/leather-armor.md), and a [dagger](/3-Content/Compendiums/items/dagger.md)

Alternatively, you may start with 5d4 × 10 gp to buy your own equipment.

## Multiclassing Bard

**Ability Score Minimum:** Charisma 13

When you gain a level in a class other than your first, you gain only some of that class's starting proficiencies.

- **Armor**: [light armor](/3-Content/Rules/item-types.md#Light%20Armor)
- **Tools**: one [musical instrument](/3-Content/Compendiums/items/musical-instrument-xphb.md) of your choice
- **Skills**: choose any 1 [skill](/3-Content/Rules/skills.md)

## Bard

Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song—knowledge of the people who constructed the monument and the mythic saga it depicts.

A stern human warrior bangs his sword rhythmically against his scale mail, setting the tempo for his war chant and exhorting his companions to bravery and heroism. The magic of his song fortifies and emboldens them.

Laughing as she tunes her cittern, a gnome weaves her subtle magic over the assembled nobles, ensuring that her companions' words will be well received.

Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.

### Music and Magic

In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.

The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge.

### Learning from Experience

True bards are not common in the world. Not every minstrel singing in a tavern or jester cavorting in a royal court is a bard. Discovering the magic hidden in music requires hard study and some measure of natural talent that most troubadours and jongleurs lack. It can be hard to spot the difference between these performers and true bards, though. A bard's life is spent wandering across the land gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But a depth of knowledge, a level of musical skill, and a touch of magic set bards apart from their fellows.

Only rarely do bards settle in one place for long, and their natural desire to travel—to find new tales to tell, new skills to learn, and new discoveries beyond the horizon—makes an adventuring career a natural calling. Every adventure is an opportunity to learn, practice a variety of skills, enter long-forgotten tombs, discover lost works of magic, decipher old tomes, travel to strange places, or encounter exotic creatures. Bards love to accompany heroes to witness their deeds firsthand. A bard who can tell an awe-inspiring story from personal experience earns renown among other bards. Indeed, after telling so many stories about heroes accomplishing mighty deeds, many bards take these themes to heart and assume heroic roles themselves.

### Creating a Bard

Bards thrive on stories, whether those stories are true or not. Your character's background and motivations are not as important as the stories that he or she tells about them. Perhaps you had a secure and mundane childhood. There's no good story to be told about that, so you might paint yourself as an orphan raised by a hag in a dismal swamp. Or your childhood might be worthy of a story. Some bards acquire their magical music through extraordinary means, including the inspiration of fey or other supernatural creatures.

Did you serve an apprenticeship, studying under a master, following the more experienced bard until you were ready to strike out on your own? Or did you attend a college where you studied bardic lore and practiced your musical magic? Perhaps you were a young runaway or orphan, befriended by a wandering bard who became your mentor. Or you might have been a spoiled noble child tutored by a master. Perhaps you stumbled into the clutches of a hag, making a bargain for a musical gift in addition to your life and freedom, but at what cost?

#### Quick Build

You can make a bard quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Dexterity. Second, choose the [entertainer](/3-Content/Compendiums/backgrounds/entertainer.md) background. Third, choose the [dancing lights](/3-Content/Compendiums/spells/dancing-lights-xphb.md) and [vicious mockery](/3-Content/Compendiums/spells/vicious-mockery-xphb.md) cantrips, along with the following 1st-level spells: [charm person](/3-Content/Compendiums/spells/charm-person-xphb.md), [detect magic](/3-Content/Compendiums/spells/detect-magic-xphb.md), [healing word](/3-Content/Compendiums/spells/healing-word-xphb.md), and [thunderwave](/3-Content/Compendiums/spells/thunderwave-xphb.md).

> [!quote] A quote from Fletcher Danairia, master bard  
> 
> Music is the fruit of the divine tree that vibrates with the Words of Creation. But the question I ask you is, can a bard go to the root of this tree? Can one tap into the source of that power? Ah, then what manner of music they would bring to this world!

Bards bring levity during grave times; they impart wisdom to offset ignorance; and they make the ridiculous seem sublime. Bards are preservers of ancient history, their songs and tales perpetuating the memory of great events down through time—knowledge so important that it is memorized and passed along as oral history, to survive even when no written record remains.

It is also the bard's role to chronicle smaller and more contemporary events—the stories of today's heroes, including their feats of valor as well as their less than impressive failures.

Of course, the world has many people who can carry a tune or tell a good story, and there's much more to any adventuring bard than a glib tongue and a melodious voice. Yet what truly sets bards apart from others—and from one another—are the style and substance of their performances.

To grab and hold the attention of an audience, bards are typically flamboyant and outgoing when they perform. The most famous of them are essentially the D&D world's equivalent of pop stars. If you're playing a bard, consider using one of your favorite musicians as a role model for your character.

You can add some unique aspects to your bard character by considering the suggestions that follow.

> [!quote] A quote from Xanathar  
> 
> Music is stupid. Wait. I changed my mind. Music is fun. Play more music. No, I was right the first time. Music is stupid. But I won't maim you after all, in case I change my mind again.

## Defining Work
_Source: Xanathar's Guide to Everything_

Every successful bard is renowned for at least one piece of performance art, typically a song or a poem that is popular with everyone who hears it. These performances are spoken about for years by those who view them, and some spectators have had their lives forever changed because of the experience.

If your character is just starting out, your ultimate defining work is likely in the future. But in order to make any sort of living at your profession, chances are you already have a piece or two in your repertoire that have proven to be audience pleasers.

**Defining Work**

`dice: [](bard.md#^defining-work)`

| dice: d6 | Defining Work |
|----------|---------------|
| 1 | "The Three Flambinis," a ribald song concerning mistaken identities and unfettered desire |
| 2 | "Waltz of the Myconids," an upbeat tune that children in particular enjoy |
| 3 | "Asmodeus's Golden Arse," a dramatic poem you claim was inspired by your personal visit to Avernus |
| 4 | "The Pirates of Luskan," your firsthand account of being kidnapped by sea reavers as a child |
| 5 | "A Hoop, Two Pigeons, and a Hell Hound," a subtle parody of an incompetent noble |
| 6 | "A Fool in the Abyss," a comedic poem about a jester's travels among demons |
^defining-work

## Instrument
_Source: Xanathar's Guide to Everything_

In a bard's quest for the ultimate performance and the highest acclaim, one's instrument is at least as important as one's vocal ability. The instrument's quality of manufacture is a critical factor, of course; the best ones make the best music, and some bards are continually on the lookout for an improvement. Perhaps just as important, though, is the instrument's own entertainment value; those that are bizarrely constructed or made of exotic materials are likely to leave a lasting impression on an audience.

You might have an "off the rack" instrument, perhaps because it's all you can afford right now. Or, if your first instrument was gifted to you, it might be of a more elaborate sort. Are you satisfied with the instrument you have, or do you aspire to replace it with something truly distinctive?

**Instrument**

`dice: [](bard.md#^instrument)`

| dice: d6 | Instrument |
|----------|------------|
| 1 | A masterfully crafted halfling fiddle |
| 2 | A mithral [horn](/3-Content/Compendiums/items/horn.md) made by elves |
| 3 | A zither made with drow spider silk |
| 4 | An orcish [drum](/3-Content/Compendiums/items/drum.md) |
| 5 | A wooden bullywug croak box |
| 6 | A tinker's harp of gnomish design |
^instrument

## Embarrassment
_Source: Xanathar's Guide to Everything_

Almost every bard has suffered at least one bad experience in front of an audience, and chances are you're no exception. No one becomes famous right away, after all; perhaps you had a few small difficulties early in your career, or maybe it took you a while to restore your reputation after one agonizing night when the fates conspired to bring about your theatrical ruin.

The ways that a performance can go wrong are as varied as the fish in the sea. No matter what sort of disaster might occur, however, a bard has the courage and the confidence to rebound from it—either pressing on with the show (if possible) or promising to come back tomorrow with a new performance that's guaranteed to please.

**Embarrassment**

`dice: [](bard.md#^embarrassment)`

| dice: d6 | Embarrassment |
|----------|---------------|
| 1 | The time when your comedic song, "Big Tom's Hijinks"—which, by the way, you thought was brilliant—did not go over well with Big Tom |
| 2 | The matinee performance when a circus's owlbear got loose and terrorized the crowd |
| 3 | When your opening song was your enthusiastic but universally hated rendition of "Song of the Froghemoth" |
| 4 | The first and last public performance of "Mirt, Man about Town" |
| 5 | The time on stage when your wig caught fire and you threw it down—which set fire to the stage |
| 6 | When you sat on your [lute](/3-Content/Compendiums/items/lute.md) by mistake during the final stanza of "Starlight Serenade" |
^embarrassment

## A Bard's Muse
_Source: Xanathar's Guide to Everything_

Naturally, every bard has a repertoire of songs and stories. Some bards are generalists who can draw from a wide range of topics for each performance, and who take pride in their versatility. Others adopt a more personal approach to their art, driven by their attachment to a muse—a particular concept that inspires much of what those bards do in front of an audience.

A bard who follows a muse generally does so to gain a deeper understanding of what that muse represents and how to best convey that understanding to others through performance.

If your bard character has a muse, it could be one of the three described here, or one of your own devising.

### Nature
_Source: Xanathar's Guide to Everything_

You feel a kinship with the natural world, and its beauty and mystery inspire you. For you, a tree is deeply symbolic, its roots delving into the dark unknown to draw forth the power of the earth, while its branches reach toward the sun to nourish their flowers and fruit. Nature is the ancient witness who has seen every kingdom rise and fall, even those whose names have been forgotten and wait to be rediscovered. The gods of nature share their secrets with druids and sages, opening their hearts and minds to new ways of seeing, and as with those individuals, you find that your creativity blossoms while you wander in an open field of waving grass or walk in silent reverence through a grove of ancient oaks.

### Love
_Source: Xanathar's Guide to Everything_

You are on a quest to identify the essence of true love. Though you do not disdain the superficial love of flesh and form, the deeper form of love that can inspire thousands or bring joy to one's every moment is what you are interested in. Love of this sort takes on many forms, and you can see its presence everywhere—from the sparkling of a beautiful gem to the song of a simple fisher thanking the sea for its bounty. You are on the trail of love, that most precious and mysterious of emotions, and your search fills your stories and your songs with vitality and passion.

### Conflict
_Source: Xanathar's Guide to Everything_

Drama embodies conflict, and the best stories have conflict as a key element. From the morning-after tale of a tavern brawl to the saga of an epic battle, from a lover's spat to a rift between powerful dynasties, conflict is what inspires tale-tellers like you to create your best work. Conflict can bring out the best in some people, causing their heroic nature to shine forth and transform the world, but it can cause others to gravitate toward darkness and fall under the sway of evil. You strive to experience or witness all forms of conflict, great and small, so as to study this eternal aspect of life and immortalize it in your words and music.

## Class Features

### Bardic Inspiration (Level 1)

You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a `d6`.

Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the `d20` before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.

You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.

Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a `d8` at 5th level, a `d10` at 10th level, and a `d12` at 15th level.

### Spellcasting (Level 1)

You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See "chapter 10" for the general rules of spellcasting and "chapter 11" for the bard spell list.

#### Cantrips

You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, learning a 3rd cantrip at 4th level and a 4th at 10th level.

#### Spell Slots

The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.

For example, if you know the 1st-level spell [cure wounds](/3-Content/Compendiums/spells/cure-wounds-xphb.md) and have a 1st-level and a 2nd-level spell slot available, you can cast [cure wounds](/3-Content/Compendiums/spells/cure-wounds-xphb.md) using either slot.

#### Spells Known of 1st Level and Higher

You know four 1st-level spells of your choice from the bard spell list.

You learn an additional bard spell of your choice at each level except 12th, 16th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.

Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.

#### Spellcasting Ability

Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.

<span class='abilityDc'>**Spell save DC**: your proficiency bonus + your Charisma</span>

<span class='abilityAttackMod'>**Spell attack modifier**: your proficiency bonus + your Charisma</span>

#### Ritual Casting

You can cast any bard spell you know as a ritual if that spell has the ritual tag.

#### Spellcasting Focus

You can use a [musical instrument](/3-Content/Compendiums/items/musical-instrument-xphb.md) as a spellcasting focus for your bard spells.

### Jack of All Trades (Level 2)

Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.

### Song of Rest (d6) (Level 2)

Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points by spending Hit Dice at the end of the short rest, each of those creatures regains an extra `d6` hit points.

The extra hit points increase when you reach certain levels in this class: to `d8` at 9th level, to `d10` at 13th level, and to `d12` at 17th level.

### Magical Inspiration (Level 2)
_Source: Tasha's Cauldron of Everything p. 27_

*2nd-level bard [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

If a creature has a Bardic Inspiration die from you and casts a spell that restores hit points or deals damage, the creature can roll that die and choose a target affected by the spell. Add the number rolled as a bonus to the hit points regained or the damage dealt. The Bardic Inspiration die is then lost.

### Bard College (Level 3)

At 3rd level, you delve into the advanced techniques of a bard college of your choice from the list of available colleges. Your choice grants you features at 3rd level and again at 6th and 14th level.

### Expertise (Level 3)

At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

At 10th level, you can choose another two skill proficiencies to gain this benefit.

### Ability Score Improvement (Level 4)

When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Bardic Versatility (Level 4)
_Source: Tasha's Cauldron of Everything p. 27_

*4th-level bard [optional feature](/3-Content/Rules/variant-rules/optional-class-features-tce.md)*

Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing a change in focus as you use your skills and magic:

- Replace one of the skills you chose for the Expertise feature with one of your other skill proficiencies that isn't benefiting from Expertise.  
- Replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the bard spell list.  

### Bardic Inspiration (d8) (Level 5)

At 5th level, your Bardic Inspiration die changes to a `d8`.

### Font of Inspiration (Level 5)

Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.

### Countercharm (Level 6)

At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being [frightened](/3-Content/Rules/conditions.md#Frightened) or [charmed](/3-Content/Rules/conditions.md#Charmed). A creature must be able to hear you to gain this benefit. The performance ends early if you are [incapacitated](/3-Content/Rules/conditions.md#Incapacitated) or silenced or if you voluntarily end it (no action required).

### Bard College feature (Level 6)

At 6th level, you gain a feature from your Bard College.

### Ability Score Improvement (Level 8)

When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Song of Rest (d8) (Level 9)

At 9th level, the extra hit points gained from Song of Rest increases to `d8`.

### Bardic Inspiration (d10) (Level 10)

At 10th level, your Bardic Inspiration die changes to a `d10`.

### Expertise (Level 10)

At 10th level, you can choose another two skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

### Magical Secrets (Level 10)

By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.

You learn two additional spells from any classes at 14th level and again at 18th level.

### Ability Score Improvement (Level 12)

When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Song of Rest (d10) (Level 13)

At 13th level, the extra hit points gained from Song of Rest increases to `d10`.

### Magical Secrets (Level 14)

At 14th level, choose two additional spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.

### Bard College feature (Level 14)

At 14th level, you gain a feature from your Bard College.

### Bardic Inspiration (d12) (Level 15)

At 15th level, your Bardic Inspiration die changes to a `d12`.

### Ability Score Improvement (Level 16)

When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Song of Rest (d12) (Level 17)

At 17th level, the extra hit points gained from Song of Rest increases to `d12`.

### Magical Secrets (Level 18)

At 18th level, choose two additional spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.

### Ability Score Improvement (Level 19)

When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.

If your DM allows the use of feats, you may instead take a feat.

### Superior Inspiration (Level 20)

At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.