---
title: Class Builder Version Comparison
created: 2026/01/28 at 00:00
updated: 2026/01/29 at 00:04
aliases:
  - Class Builder Version Comparison
---

# Class Builder Version Comparison

## Quick Summary

| Feature | Original | Refined | V2 (Production) |
|---------|----------|---------|-----------------|
| Schema Coverage | ~60% | ~95% | ~98% |
| Field Ordering | Alphabetical | Mixed | Schema-defined |
| Item Tagging | Manual | Manual | Automatic |
| defaultData | ❌ | ❌ | ✅ |
| Skills with Abilities | ❌ | ❌ | ✅ |
| Homebrew Skills | ❌ | ❌ | ✅ (Engineering, Streetwise) |
| Prepared Spells Formula | ❌ | Partial | ✅ (Dropdown) |
| Optional Feature Progression | ❌ | ❌ | ✅ (Object format) |
| Table Builder Integration | ❌ | Placeholder | ✅ (Full builder) |
| Equipment Selection | Basic | Basic | Comprehensive UI |
| 2024 Edition Support | ❌ | ✅ | ✅ |

## When to Use Each

### Original Builder (`5etools.buildClass`)

**Use for:**

- Quick prototypes

- Simple classes without spellcasting

- When you'll manually edit everything anyway

**Limitations:**

- Missing many schema fields

- No 2024 edition support

- Basic equipment input

- No automatic item tagging

### Refined Builder (`5etools.buildClassRefined`)

**Use for:**

- Complex spellcasting classes

- 2024 edition classes

- When you need comprehensive schema coverage

**Limitations:**

- Field order doesn't match production examples

- No automatic item tagging

- No defaultData generation

- Skills don't show abilities

- Manual optional feature progression

### V2 Builder (`5etools.buildClassV2`)

**Use for:**

- Production-ready homebrew

- Matching official format exactly

- VTT compatibility (defaultData)

- Publishing to 5etools homebrew repo

**Advantages:**

- ✅ Exact field ordering from production examples

- ✅ Automatic item tag conversion

- ✅ defaultData generation for VTT import

- ✅ Skills display with abilities

- ✅ Homebrew skills (Engineering, Streetwise)

- ✅ Prepared spells formula dropdown

- ✅ Optional feature progression (object format)

- ✅ Table builder integration

- ✅ Comprehensive equipment selection UI

## Feature Comparison

### Field Ordering

**Original/Refined:**

```json

{

  "name": "Fighter",

  "source": "HOMEBREW",

  "classFeatures": […],

  "hd": {…},

  "proficiency": […],

  "startingProficiencies": {…}

  // Random order

}

```

**V2 (matches production):**

```json

{

  "name": "Fighter",

  "source": "HOMEBREW",

  "page": 1,

  "edition": "one",

  "hd": {…},

  "proficiency": […],

  "classGroup": ["warrior"],

  "primaryAbility": ["str"],

  "featProgression": [4, 8, 12, 16, 19],

  "startingProficiencies": {…},

  "startingEquipment": {…},

  "optionalfeatureProgression": {…},

  "multiclassing": {…},

  "classTableGroups": […],

  "classFeatures": […]

  // Schema-defined order

}

```

### Item Tagging

**Original/Refined:**

```json

"default": [

  "quarterstaff",

  "leather armor",

  "explorer's pack"

]

// ❌ No proper tags, won't render correctly

```

**V2:**

```json

"default": [

  "{@item quarterstaff|PHB}",

  "{@item leather armor|PHB}",

  "{@item explorer's pack|PHB}"

],

"defaultData": [

  {"equipmentType": "weaponSimple", "item": "quarterstaff|phb"},

  {"equipmentType": "armor", "item": "leather armor|phb"},

  {"equipmentType": "startingEquipment", "item": "explorer's pack|phb"}

]

// ✅ Proper tags + VTT data

```

### Skills

**Original/Refined:**

```json

"skills": [

  "Athletics",

  "Acrobatics"

]

// ❌ No ability shown, no "choose from" format

```

**V2:**

```

Skills displayed as:

[x] Athletics (Strength)

[x] Acrobatics (Dexterity)

[ ] Engineering (Intelligence) [Homebrew]

[ ] Streetwise (Charisma) [Homebrew]

```

```json

"skills": {

  "choose": {

    "from": ["athletics", "acrobatics", "engineering"],

    "count": 2

  }

}

// ✅ Proper format, abilities shown, homebrew skills available

```

### Optional Features

**Refined:**

```json

// Manual array input, no helper

```

**V2:**

```

Interactive prompts:

- Level when features are gained? 2

- How many features at level 2? 2

- Level when features are gained? 3

- How many features at level 3? 3

```

```json

"optionalfeatureProgression": {

  "2": 2,

  "3": 3,

  "5": 4

}

// ✅ Object format matching production

```

### Prepared Spells

**Refined:**

```json

// Manual formula entry, no guidance

```

**V2:**

```

Dropdown options:

- Ability Modifier (Cleric, Druid)

- Level + Ability Modifier (Paladin)

- Half Level + Ability Modifier (Artificer)

- Custom Formula

```

```json

"preparedSpells": {

  "int": "<$level$> / 2 + <$int_mod$>"

}

// ✅ Common formulas + custom option

```

### Equipment Selection

**Refined:**

```

Simple input box, manual entry

```

**V2:**

```

Interactive workflow:

1. Select equipment type (Single, Choice, Pack, Custom)

2. If single: category → item → quantity

3. If choice: option (a) → option (b)

4. Automatic tag conversion

5. Automatic defaultData generation

```

## Migration Path

### From Original to V2

1. Keep using Original for quick tests

2. Switch to V2 for any production homebrew

3. V2 output can be imported to 5etools directly

### From Refined to V2

1. Refined is good for learning schema

2. V2 adds production polish

3. Use Refined if you prefer manual control

4. Use V2 if you want automation + format compliance

### Using Multiple Versions

All three builders coexist:

- **Original**: Quick prototypes

- **Refined**: Full schema exploration

- **V2**: Production publishing

Choose based on your needs for each class.

## Output Compatibility

### 5etools Renderer

- **Original**: Partial (missing tags won't render)

- **Refined**: Good (has structure, lacks tags)

- **V2**: Excellent (proper tags + structure)

### VTT Import (Foundry, etc.)

- **Original**: Poor (no defaultData)

- **Refined**: Poor (no defaultData)

- **V2**: Excellent (full defaultData support)

### 5etools Homebrew Repo

- **Original**: Needs significant editing

- **Refined**: Needs tag editing

- **V2**: Ready to submit (with content filled in)

## Recommendations

### For Learning

Start with **Refined** to understand schema structure, then move to **V2** for production.

### For Speed

Use **Original** for throwaway prototypes, **V2** for anything you'll keep.

### For Publishing

Always use **V2** - it matches official format and includes all VTT data.

### For Complex Classes

**V2** handles spellcasting, optional features, and multiclassing better than others.

## Command Reference

```

Ctrl+Shift+P (Cmd+Shift+P on Mac)

  

5etools: Build Class                    → Original

5etools: Build Class (Refined)          → Refined

5etools: Build Class V2 (Production)    → V2 ⭐ RECOMMENDED

5etools: Build Class Table              → Table builder (standalone)

```

## Future Development

### Planned for V3

- [ ] Subclass builder with same production format

- [ ] Race builder with proper field ordering

- [ ] Spell builder with automatic tagging

- [ ] Item builder with proper typing

- [ ] Background builder

- [ ] Feat builder

### Community Contributions

If you want to contribute:

1. Follow V2 pattern for field ordering

2. Use item-data.js for item tagging

3. Include defaultData generation

4. Match production examples from test-files/