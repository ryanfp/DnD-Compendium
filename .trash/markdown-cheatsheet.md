# Markdown Formatting Cheatsheet

Preview this page after switching themes to review font, color, and style differences for every Markdown element.

---

## Headings

# Heading 1  
## Heading 2  
### Heading 3  
#### Heading 4  
##### Heading 5  
###### Heading 6  

---

## Font Styles

- *Italic*  
- **Bold**  
- ***Bold & Italic***  
- ~~Strikethrough~~  
- <u>Underline (HTML only)</u>  
- ==Highlight (Unsupported in vanilla Markdown, works in some apps like Obsidian)==

---

## Links

- [Inline Link](https://example.com)
- <https://example.com>
- [Reference Link][ref]

[ref]: https://example.com

---

## Images

![Alt text](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=350&q=80 "Sample image")

---

## Lists

- Unordered list item 1
    - Nested item
        - Double nest
- Unordered item 2

1. Ordered list item 1
2. Ordered list item 2
   1. Nested ordered item

---

## Blockquotes

> This is a blockquote.  
> With a second line.

---

## Code

Inline code: `const thing = true;`  

Fenced code block (with JavaScript):
```js
function hello() {
  console.log('Hello!');
}
```

Indented code block:
    Indented code line

---

## Tables

| Syntax      | Description | Example           |
| ----------- | ----------- | ---------------- |
| Header      | Title       | Text             |
| *Italic*    | **Bold**    | `Code`           |

---

## Horizontal Rule

---

## Task Lists

- [x] Completed task
- [ ] Incomplete task

---

## HTML in Markdown

<p style="color:orange; font-size:1.2em;">This is raw HTML (sometimes allowed in Markdown)</p>
<details>
  <summary>Expandable Section</summary>
  You can use HTML details for hidden content.
</details>

---

## Callouts (Obsidian, some Markdown flavors)
> [!note] Note callout
> This is a note callout block.

> [!warning] Warning callout
> This is a warning!

> [!tip] Tip
> Useful tip here.

---

## Footnotes[^1]

[^1]: This is a footnote

---

## Wiki-style/Internal Links (Obsidian, Notion, etc)

- [[Internal Page]]
- [[folder/Page Name|Custom Text]]

---

## Miscellaneous

Superscript: X^2^  
Subscript: H~2~O  
Emoji: :smile: :dragon:

---

## Parentheses & Brackets

- Inline: (parentheses) [brackets] {braces}
- [Link Text](url)
- `Code [with] (symbols) {included}`

---

## Citation/References (Obsidian, advanced Markdown)

[^citation]: Example reference

---

> **Tip**: Paste this into your app and preview it with different Markdown themes to spot every possible difference in font, color, link/heading style, etc.