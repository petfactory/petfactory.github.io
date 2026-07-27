---
title: "Markdown - Examples"
date: 2026-07-27T00:00:00+01:00
description: "Some notes on learning to fly drones. In Swedish :)"
template: "notes.html"
tags:
    - Drone
---

#  Heading 1 (Page Title)
##  Heading 2 (Section)
###  Heading 3 (Subsection)

---


!!! important  "Optional Title"
    This is a standard note block. 
    Content must be indented with four spaces.

!!! note "Optional Title"
    This is a standard note block. 
    Content must be indented with four spaces.

??? info "Collapsible Block"
    This block is closed by default but can be expanded by the user.

!!! info "Collapsible Block"
    This block is closed by default but can be expanded by the user.

!!! warning
    This is a warning block without a custom title.

!!! danger
    This is a warning block without a custom title.




## 📝 Core Text & Formatting

This is a standard paragraph showing basic typography. You can use **bold text** for emphasis, *italicized text* for styling, or ***bold and italicized*** formatting combined. 

Need to cross out an item? Use ~~strikethrough~~ text. If you are documenting keys or keyboard shortcuts, use the custom key extension: ++ctrl+alt+del++.

You can also use custom tooltips[^1] or include internal anchors to navigate somewhere else.

[^1]: This text will automatically render as an interactive tooltip or footnote!

---

## 📋 Lists & Tasks

### Unordered List
*   First bullet item
*   Second bullet item
    *   Nested sub-bullet item

### Ordered List
1.  Step number one
2.  Step number two

### Task Checklist
- [x] Complete the core framework configuration
- [x] Author all technical documentation pages
- [ ] Deploy the static build folder to production

---

## 💻 Code Blocks & Execution

### Standard Inline Code
To display a quick command, wrap it like this: `pip install zensical`.

### Enhanced Fenced Code Block
Zensical features rich syntax highlighting and line targeting out of the box:

```python hl_lines="2"
def greet_user(name):
    # This specific line will be highlighted visually
    return f"Welcome to Zensical, {name}!"
```

### Executable Code (markdown-exec)
If you have code execution enabled, you can run scripts natively to embed terminal outputs dynamically:

```python exec="on"
print("This output was generated dynamically during compilation!")
```

---

## 🗂️ Interactive Layout Elements

### Content Tabs
Use tabs to toggle between alternative languages, package managers, or environments:

=== "Python"

    ```python
    import zensical
    print("Running Python native code")
    ```

=== "Bash"

    ```bash
    zensical build --clean
    ```

### Admonitions (Callout Boxes)
Zensical supports standard PyMdown admonitions as well as GitHub-Flavored Markdown (GFM) blockquotes:

!!! note "Standard Admonition"
    This is a standard note callout box. You can use types like `info`, `warning`, `danger`, or `success`.

> [!TIP]
> This is a GFM-style tip block, fully supported natively within Zensical workflows.

### Collapsible Blocks
Hide deeply technical sections or FAQs behind an expandable dropdown interface:

???+ example "Click to Expand/Collapse!"
    This block is open by default due to the `+` sign. Remove the `+` (`???`) to keep it closed until clicked.

---

## 📊 Data & Structural Elements

### Data Tables
Tables automatically adjust to fit content layouts neatly:

| Framework Feature | MkDocs Support | Zensical Engine |
| :--- | :---: | :---: |
| Build Performance | Baseline Speed | 4x-5x Faster |
| Search Engine | Standard lunr | "Disco" Engine |
| Mixed Content Types | Limited | Fully Supported |

### Custom Block Attributes
Attach classes, IDs, or specific styling parameters directly to text blocks natively using attribute lists:

[Launch Live Demo Layout](#){ .md-button .md-button--primary }

---

## 🧮 Advanced Mathematical Notation

Render equations inline like $a^2 + b^2 = c^2$, or format major multi-line mathematical proofs as an isolated center-aligned display block:

$$
\frac{n!}{r!(n-r)!} = \binom{n}{r}
$$


