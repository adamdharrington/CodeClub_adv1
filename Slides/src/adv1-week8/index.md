## Week 8: Advanced CSS & Positioning

### Build a styled "card"

![QR](./img/week8.png)

---

## Today's Mission

<!-- .slide: style="text-align: left;" -->

By the end of today, you'll master CSS positioning and build a beautiful styled card!

**Key Skills:**

- Understanding CSS positioning
- Flexbox and Grid fundamentals
- Building styled card components
- Using interactive learning games

---

<!-- .slide: style="font-size:0.9em;" -->

## Term Outline

<!-- prettier-ignore -->
| Week      | Focus                          | Milestone                          |
| --- | --- | --- |
| ~~Nov 1~~ | No dojo                        |                                    |
| **Nov 8** | **Advanced CSS & Positioning** | **Build a styled "card"** |
| Nov 15 | Introduction to Javascript | First interactive button |
| Nov 22 | Interactive components | Working accordion |

<!-- prettier-ignore-end -->

---

## Part 1: Review & Showcase 🎉

Let's celebrate what we've built so far!

---

## What We've Learned So Far

<!-- .slide: style="text-align: left;" -->

<div class="side">
<div class="col">

**HTML - Structure:**

- Semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Links between pages
- Images and media
- Lists and headings

**CSS - Styling:**

- External stylesheets
- Colors, fonts, spacing
- Flexbox basics
- Responsive design

</div>
<div class="col">

**Projects:**

- Well-structured single pages
- Multi-page websites with navigation
- Project 1: Your Passion Site!

</div>
</div>

---

## Project 1 Showcase

<!-- .slide: style="text-align: left;" -->

**Let's see your passion sites!**

**Share:**

- Your topic and why you chose it
- Your favorite page or feature
- One thing you're proud of
- One challenge you overcame

**Remember:** Every website is unique and awesome! 🚀

---

## Part 2: CSS Positioning Deep Dive

Time to master layouts! 🎨

---

## The Box Model - Quick Recap

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

Every HTML element is a box with:

- **Content** - The actual text/image
- **Padding** - Space inside the box
- **Border** - The box's edge
- **Margin** - Space outside the box

```css
.my-box {
  padding: 20px; /* inside space */
  border: 2px solid black; /* edge */
  margin: 10px; /* outside space */
}
```

---

> **Think:** Padding = cushion inside
> Margin = space outside

### Tip: box-sizing

- The traditional `box model` frustrated everyone!
- Most modern websites will set an alternative

```css
* {
  box-sizing: border-box;
}
```

`width` now includes content, padding, and border

---

## CSS Positioning - The Basics

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Four main positioning types:**

```css
.static {
  position: static; /* default - normal flow */
}

.relative {
  position: relative; /* relative to itself */
}

.absolute {
  position: absolute; /* relative to parent */
}

.fixed {
  position: fixed; /* relative to viewport */
}
```

**Today we focus on:** Layout with Flexbox and Grid!

---

## Flexbox - The Flexible Layout Tool

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Flexbox is perfect for:**

- Navigation bars
- Centering content
- Button groups
- One-dimensional layouts (row OR column)

**Key properties:**

```css
.container {
  display: flex;
  justify-content: space-between; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  gap: 20px; /* space between items */
}
```

---

## Flexbox Example - Navigation

<div class="side">
<div class="col">

```html
<nav class="navbar">
  <div class="logo">My Site</div>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>
```

</div>
<div class="col">

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 15px 30px;
}

.nav-links {
  display: flex;
  gap: 20px;
}
```

</div>
</div>

---

## CSS Grid - The Modern Layout System

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Grid is perfect for:**

- Card layouts
- Image galleries
- Complex page layouts
- Two-dimensional layouts (rows AND columns)

**Key properties:**

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

---

## Grid Example - Card Layout

<div class="side">
<div class="col">

```html
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

</div>
<div class="col">

```css
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
}
```

</div>
</div>

---

## 🎮 Learning Games - The Fun Way to Learn!

**Best way to master Flexbox and Grid:**

---

## Flexbox Froggy 🐸

**Learn Flexbox by helping frogs get to their lily pads!**

🔗 **[flexboxfroggy.com](https://flexboxfroggy.com)**

**What you'll learn:**

- `justify-content` - horizontal alignment
- `align-items` - vertical alignment
- `flex-direction` - row vs column
- `gap` - spacing between items

**Try it now!** Start with level 1 and work your way up.

---

## Grid Garden 🌱

**Learn CSS Grid by watering your carrot garden!**

🔗 **[cssgridgarden.com](https://cssgridgarden.com)**

**What you'll learn:**

- `grid-template-columns` - column sizing
- `grid-column-start` / `grid-column-end` - spanning columns
- `grid-template-rows` - row sizing
- `grid-area` - named grid areas

**Try it now!** Complete all 28 levels!

---

## Let's Play! 🎮

**Spend time on these games:**

1. **Flexbox Froggy** - Complete at least 10 levels
2. **Grid Garden** - Complete at least 10 levels

**Why games?**

- Visual learning
- Immediate feedback
- Fun way to practice
- Builds muscle memory

**Take your time!** Understanding these concepts will make everything easier.

---

## Building a Styled Card

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**A card is a common UI pattern:**

<div class="side">
<div class="col">

- Image at the top
- Title and description
- Maybe a button
- Clean, contained design

**We'll use Flexbox inside the card for internal layout!**

</div>
<div class="col">

<iframe srcdoc="
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Card</title>
    <style>
      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        max-width: 300px;
        font-family: sans-serif;
      }
      button {
        background: #2c2c2c;
        color: white;
      }
      .card img {
        aspect-ratio: 3;
        object-fit: cover;
      }
      .card-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    </style>
  </head>
  <body>
    <div class='card'>
      <img src='./img/kittens-1.png' alt='Card image' />
      <div class='card-content'>
        <h3>Card Title</h3>
        <p>Card description text</p>
        <button>Learn More</button>
      </div>
    </div>
  </body>
</html>
" width="100%" height="500px" style="background: white;border: 3px solid orange;">

</div>
</div>

---

## Card Structure

<div class="side">
<div class="col">

**HTML:**

```html
<div class="card">
  <img src="image.jpg" alt="Card image" />
  <div class="card-content">
    <h3>Card Title</h3>
    <p>Card description text</p>
    <button>Learn More</button>
  </div>
</div>
```

</div>
<div class="col">

**CSS:**

```css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
```

</div>
</div>

---

## Enhanced Card with Styling

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

```css
.card {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 350px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```

---

## Task: Build Your Styled Card

<!-- .slide: style="text-align: left; font-size: 0.7em;" -->

**Create a beautiful card component:**

<div class="side">
<div class="col">

**Required:**

1. HTML structure with image, title, description
2. Use Flexbox for internal layout
3. Add styling:
   - Border radius
   - Box shadow
   - Hover effect
   - Proper spacing

**Level 1 - Basic Card:**

- Simple card with image and text
- Basic flexbox layout

</div>
<div class="col">

**Level 2 - Enhanced Card:**

- Hover effects
- Better shadows
- Rounded corners

**Level 3 - Card Grid:**

- Multiple cards in a grid
- Responsive layout

</div>
</div>

---

## Card Grid Layout

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Once you have one card, make a grid:**

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px;
}
```

**This creates:**

- Responsive grid
- Cards that fit automatically
- Minimum 300px per card
- Equal spacing

---

## Responsive Cards

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Make cards work on all screen sizes:**

```css
/* Mobile first - default styles */
.card-grid {
  grid-template-columns: 1fr; /* 1 column on mobile */
}

/* Tablet and up */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}
```

---

## Common Card Patterns

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

**Different card styles:**

<div class="side">
<div class="col">

**1. Image Card:**

- Large image
- Title overlay
- Minimal text

**2. Content Card:**

- Small image
- Title and description
- Call-to-action button

</div>
<div class="col">

**3. Profile Card:**

- Avatar image
- Name and bio
- Social links

</div>
</div>

**Choose one style and perfect it!**

---

## Flexbox vs Grid - When to Use What?

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

<div class="side">
<div class="col">

**Use Flexbox when:**

- ✅ One-dimensional layout (row OR column)
- ✅ Navigation bars
- ✅ Centering content
- ✅ Spacing items evenly
- ✅ Aligning items

</div>
<div class="col">

**Use Grid when:**

- ✅ Two-dimensional layout (rows AND columns)
- ✅ Card layouts
- ✅ Complex page structures
- ✅ Precise positioning
- ✅ Overlapping elements

</div>
</div>

**Pro tip:** You can use both! Grid for the page, Flexbox for components.

---

## Debugging Layout Issues

<!-- .slide: style="text-align: left;font-size:0.7em" -->

**Layout not working?**

- Check if you have `display: flex` or `display: grid`
- Verify container has content
- Use browser dev tools (F12) to inspect

**Items not aligning?**

- Check `justify-content` and `align-items`
- Verify flex direction
- Check for conflicting styles

**Spacing issues?**

- Use `gap` property (modern way)
- Or use `margin` on items
- Check for box-sizing issues

---

## Success Checklist

<!-- .slide: style="text-align: left;" -->

**By end of today:**

- ✅ Played Flexbox Froggy (at least 10 levels)
- ✅ Played Grid Garden (at least 10 levels)
- ✅ Understand the difference between Flexbox and Grid
- ✅ Built at least one styled card
- ✅ Card uses Flexbox for internal layout
- ✅ Card has hover effects and styling

**Remember:** Practice makes perfect! 🎯

---

## What We Learned Today

<!-- .slide: style="text-align: left;" -->

**CSS Positioning:**

- Box model recap
- Flexbox for one-dimensional layouts
- Grid for two-dimensional layouts
- When to use each tool
- Building styled card components

**Next week:** We'll add JavaScript interactivity!

---

## Next Week Preview

<!-- .slide: style="text-align: left;" -->

**Week 9: Introduction to JavaScript**

We'll learn:

- What JavaScript can do
- Variables and functions
- Making interactive buttons
- Connecting JavaScript to HTML

**Get ready for interactivity!** ⚡

---

## Bonus Challenges

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**If you finish early:**

1. **Complete all Flexbox Froggy levels** 🐸
2. **Complete all Grid Garden levels** 🌱
3. **Create a card gallery** with multiple cards
4. **Add animations** to your cards
5. **Try other positioning** - `position: absolute` or `relative`

**Remember:** Master the basics first!

---

## Getting Help

<!-- .slide: style="text-align: left;" -->

**Stuck on layouts? Try this order:**

1. **Check your syntax** - Missing semicolons, brackets?
2. **Use browser dev tools** - Right-click → Inspect Element
3. **Play the games** - Flexbox Froggy and Grid Garden
4. **Ask a neighbor** - Two heads are better than one
5. **Ask for help** - Raise your hand!

**Remember:** Layouts can be tricky - everyone struggles at first!

---

## Let's Build!

### Time to master positioning and build your card

**Remember:**

- Start with the learning games
- Build one card first
- Test in browser frequently
- Ask for help when stuck

**You're mastering professional layouts!** ✨

---

## Next

### [Week 9 - Javascript](./adv1-week9)
