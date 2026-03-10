<%*
const status  = await tp.system.prompt("Status (Active/Completed/Failed)", "Active")
const patron  = await tp.system.prompt("Patron or requester", "")
-%>
---
type: Quest
status: <% status %>
patron: <% patron %>
created: <% tp.date.now("YYYY-MM-DD") %>
tags: [quest]
---

# <% tp.file.title %>

## Summary
Brief description of the quest objective.

## Reward
Payment, favor, or item offered.

## Steps & Milestones
Outline tasks or stages.

## Complications
Potential twists or obstacles.

## Outcome
Fill in once the quest concludes.

<% tp.file.cursor() %>