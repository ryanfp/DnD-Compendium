# Death, Dying, Death Moves, and Swan Song (Integrated Rules v1)

This document finalizes a **private death save** procedure, a table-facing **Dying** condition with **Desperate Actions**, optional **Dying Deeds** (costing failed saves), **Death Moves**, and the finalized **Swan Song** death move.

---

## Design Goals

- Keep **death saving throws private** (between DM and the dying player) while maintaining tension and verisimilitude.
- Give downed characters **meaningful, cinematic choices** that do not leak the hidden death-save count.
- Make **Swan Song** a rare, heroic, irreversible “last stand” that can plausibly swing a fight without becoming a default “win button.”

---

## Private Death Saves Procedure

**Default:** Death saving throws are rolled **privately** (player → DM). The DM narrates a brief cue but does not disclose numbers.

### Narrative cues (DM-facing)
Use cues that imply deterioration without revealing the exact count:
- **No failures:** steady breath, clenched jaw, tracking eyes.
- **One failure:** shallow breath, wavering focus, blood loss worsening.
- **Two failures:** fading pulse, failing grip, glassy eyes, frantic breathing.

---

## Dying (Condition)

A creature becomes **Dying** when it is reduced to **0 hit points** and isn’t killed outright.

While **Dying**, you are:
- **Prone**.
- **Incapacitated**.
- **Unable to move** (except via Desperate Actions).
- **Barely conscious**: you can speak only in a whisper and only in short phrases.
- You **automatically fail Strength and Dexterity saving throws**.
- **Attack rolls** against you have **advantage**.
- If an attacker is within **5 feet** of you, any hit is a **critical hit**.

### Death Saves (private)
At the start of each of your turns while Dying, you make a **death saving throw** (rolled privately). Standard rules for successes/failures apply unless replaced by an explicit rule below.

### Stable at 0 Hit Points
A Dying creature can become **Stable** (e.g., via a Medicine check, Spare the Dying, or similar effects). While **Stable**:
- You stop making death saves.
- You remain **Dying** (prone, incapacitated, etc.).
- You cannot take Desperate Actions (see below).

**Breaking stability (optional rule):**
- If you take a Desperate Action while Stable, you immediately become unstable, gain **1 failed death save**, and resume death saves on your next turn.

---

## Desperate Actions (Dying Moves)

After you roll your (private) death save on your turn, you may take **one** Desperate Action.

### Desperate Actions

- You have 3 uses of **Dying Actions** per time you become Dying.
- Each Desperate Action costs **1 use.**
- If you have **0  uses left**, you can still take a Desperate Action, but it costs **1 failed death save** (in addition to any failures you already have).

**Desperate Actions:**
- **Crawl.** Move up to **5 feet** (no opportunity attacks). You remain prone.
- **Brace.** Until the start of your next turn, you gain **half cover**.
- **Call for Help.** Choose one creature you can see/hear within 15 ft. It gains **advantage** on its next Medicine check to stabilize you, and gains an **Inspiration Die**.


---

## Dying Deeds (Optional: “cost-a-failure” heroics)

A Dying Deed is a stronger, more explicit contribution that costs you time on the death clock.

**Limit:** You can use **one** Dying Deed per time you become Dying.

**Cost:** When you use a Dying Deed, you immediately take **1 failed death save** (in addition to any existing failures).

### Final Command
You bark a final order to one ally you can see/hear. That ally can immediately use its reaction to do one of the following:
- Move up to its speed (no opportunity attacks), or
- Make one weapon attack, or
- Cast a cantrip.

### Last Bastion
Until the start of your next turn, choose one:
- **Cover.** Allies within 10 feet of you gain **half cover** from creatures you can see.
- **Anchor.** The next time an ally within 30 feet of you would be knocked prone, grappled, or shoved, it can ignore that effect.

---

## Death Moves

A Death Move is a dramatic option that occurs at the edge of death.

### Trigger
When you would die due to:
- accumulating **3 failed death saves**, or
- an effect that kills you at **0 hit points**,

you may choose **one** Death Move (if you have any available).

### Death Move: Avoid Death (Scar)
You do not die. Instead:
- You become **Stable** at 0 hit points.
- You are removed from the fight narratively (incapacitated, unable to meaningfully act).
- You gain a **permanent Scar**.

**Scar types (choose one):**
- **Physical Scar:** lasting wound, impairment, or disfigurement with a concrete narrative/mechanical hook.
- **Psychological Scar:** recurring fear, fixation, nightmares, or changed bond; use as a roleplay lever and (optionally) a mechanical complication tied to a specific trigger.

> // NOTE: If you want scars to matter mechanically, tie them to specific triggers (certain monsters, environments, or moral choices) rather than constant penalties.

### Death Move: Blaze of Glory (Optional)
You immediately take **one full turn** (as if it were your turn now). After that turn ends, you die.

---

## Swan Song (Final)

**Swan Song** is a rare Death Move that turns a dying character into a short-lived legend.

### Prerequisite
You can declare Swan Song only if:
- You are **Dying**, and
- you have **2 failed death saves**.

### Timing
At the **start of your turn**, before rolling any death save, you may declare Swan Song.

### Finality
When Swan Song ends, your death is **permanent**:
- You cannot regain hit points.
- Normal resurrection magic fails.
- Only **wish**, direct **divine intervention**, or reclaiming your soul through extraordinary means can restore you.

### Duration
Swan Song lasts a number of rounds equal to:
- **2 rounds**, or
- **3 rounds** if your **Proficiency Bonus is 5 or 6**.

The turn you activate Swan Song counts as the first round.

### On Activation
When you declare Swan Song:
- You stand up and end prone.
- You end **all conditions** affecting you.
- You **ignore all levels of exhaustion** for the duration (treat your exhaustion level as 0 for all effects).
- You gain **temporary hit points equal to half your maximum hit points**.
- You gain **resistance to all damage**.
- Swan Song does **not stack** with **Haste** or similar effects that grant extra actions:
  - If you are under Haste, it ends when Swan Song begins.
  - You cannot benefit from Haste’s extra action while Swan Song is active.

### Extra Actions
On each of your turns during Swan Song, you gain a number of **extra actions** equal to:
- **floor(Proficiency Bonus ÷ 2)**

These actions can be used to take any action. You can take the **Attack** action multiple times on your turn, subject to the attack cap below.

### Weapon and Unarmed Attack Cap
During your turn, the total number of **weapon attacks and unarmed strikes** you can make is limited to:

**Attack Cap = ceil( A × 2.5 )**

Where **A** is the maximum number of attacks you can normally make **with one Attack action** (for example, via Extra Attack).

This cap applies to attacks made using actions, bonus actions, and any other source during your turn.

> // NOTE: This cap will reduce very bonus-attack-heavy builds (for example, some Monk and PAM/TWF patterns). If that’s unwanted, replace the cap with an “extra attacks above baseline” cap instead.

### Perfect Execution
While Swan Song is active:
- You cannot roll lower than **10** on a d20 Test (treat 1–9 as 10).
- Your critical hit range **expands by 2**, to a maximum of **16–20**.
  - If you already have an expanded crit range, apply this bonus, but it cannot expand beyond 16–20.

### Mythic Resistance (Action Cost)
When you fail a saving throw, you can choose to succeed instead by **expending one action**.

**How it works at the table:**
- You choose this immediately after you fail, before resolving the effect.
- If it is not your turn, you still can use it, but you **lose one action** at the start of your next turn (including one of your extra Swan Song actions, if any remain).

### Song Verses (Actions)
While Swan Song is active, you can take the following special actions. Each costs **1 action**.

#### Verse of Wrath
Make one weapon attack or unarmed strike. On a hit, add extra damage equal to **your Proficiency Bonus in d6s** (damage type matches the attack).

#### Verse of Shelter
Choose a number of allies you can see within 30 feet up to your Proficiency Bonus. Each chosen ally gains **temporary hit points equal to your Proficiency Bonus** and can immediately move **10 feet** (no opportunity attacks).

#### Verse of Passage (Draw Them Off)
Choose a number of allies you can see within 30 feet up to your Proficiency Bonus. Each chosen ally can immediately move up to **half its speed** (no opportunity attacks).

Until the start of your next turn, the first time each enemy you can see targets a creature other than you with an attack, it takes **psychic damage equal to your Proficiency Bonus** (no save).

### Multiple Leveled Spells
During Swan Song, you may cast more than one spell of 1st level or higher on your turn:

- The first leveled spell you cast on your turn costs its normal casting time.
- Each additional leveled spell you cast on that same turn costs **2 actions** (and must have a casting time of **1 action**).
- You can’t cast more than **2 leveled spells** per turn.
- If you cast a leveled spell as a **bonus action**, it counts as your **first** leveled spell for the turn.

### Action-to–Bonus Action Conversion
On your turn during Swan Song, you can exchange **2 actions** to gain **1 bonus action**.

- This conversion is **not reversible** (you cannot exchange bonus actions for actions).

### Swan Song Burnout (When You “Go Down” During Swan Song)
If your Swan Song temporary hit points are reduced to **0**, you do not immediately fall unconscious. Instead:
- Your Swan Song temporary hit points refresh to **half the previous value** (½ max → ¼ max → ⅛ max → …).
- You apply the next Burnout step below.

**Burnout Step 1 (first time you hit 0 temp HP):**
- Lose **1 extra action** from your total each turn (minimum 0).
- Lose the **Swan Song crit-range expansion** (you return to your normal crit range).

**Burnout Step 2 (second time you hit 0 temp HP):**
- Lose **1 additional extra action** (if you still have any).
- Lose **resistance to all damage**.

**Burnout Step 3 (third time you hit 0 temp HP):**
- Lose the last remaining extra action (if any).
- Lose the **minimum-10** d20 floor.
- You can no longer use **Song Verses**.

### End of Swan Song (The Last Words)
At the end of Swan Song’s final round:
- You immediately drop back to **Dying**, but you are **Stable**.
- You cannot regain hit points.
- You can choose to **pass on at any moment**.
- Otherwise, you can cling to life until the **end of the encounter**, at which point you die.
  - If combat does not end within **1 minute**, you die at that time.

While lingering, you can speak in short phrases (a last word, a name, a request), at the DM’s discretion.

---

## Optional Gate: Vow of Songs

To make Swan Song feel “earned,” each character writes a **Vow of Songs** trigger (one sentence) at character creation or between arcs.

Example triggers:
- “If my death can buy the party’s escape, I will take it.”
- “If the relic is about to be lost, I will burn my life to keep it.”
- “If an ally is about to die to save me, I will take their place.”

**Rule:** Swan Song can be declared only when the trigger is clearly relevant in the current scene.
