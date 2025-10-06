## Week 5: HTML Review

### Create well-structured single page

---

## Today's Mission
<!-- .slide: style="text-align: left;" -->

By the end of today, you'll create a complete, well-structured page about yourself.

**Key Skills:**

- Using semantic HTML elements properly
- Organizing content with headings and paragraphs
- Creating lists (ordered and unordered)
- Basic inline styling

---
 
## Term Outline

| Week | Focus | Milestone |
| ---- | ---- | ---- |
| Sept 13 | HTML | |
| Sept 20 | HTML | |
| Sept 27 | HTML | |
| Oct 4 | HTML | |
| **Oct 11** | **HTML Review** | **Create well-structured single page** |
| Oct 18 | Multi-page sites & CSS | Start Proj 1 |
| Oct 25 | CSS Styling and Layouts | Proj 1 contd. |
| ~~Nov 1~~ | No dojo | |

---


## Semantic HTML - Why It Matters

```html
<!-- ❌ This works, but... -->
<div>My Website</div>
<div>
  <div>Welcome</div>
</div>

<!-- ✅ This is better! -->
<header>My Website</header>
<main>
  <h1>Welcome</h1>
</main>
```

Semantic elements tell us what the content is, not just how it looks.

---

## HTML Review

### What we've learned

- Files – *index.html* 
- Document elements – `<head>`, `<body>`, `<div>` 
- Structure – `<div>` `<section>` `<header>` `<nav>` `<main>` `<footer>`
- Typography – `<h1>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`
- Media – `<img>` `<video>` `<audio>` 

---

## Structure Elements
<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

Think of your page like a house:

- `<header>` – The roof/entrance (title, logo, navigation)
- `<nav>` – The hallway (links to other pages)
- `<main>` – The living room (main content)
- `<section>` – Different rooms (grouped content)
- `<article>` – Individual items (blog posts, products)
- `<footer>` – The foundation (copyright, contact info)

---


## Heading Hierarchy

```html
<h1>Main Title</h1><!-- Only ONE per page -->
    <h2>Major Section</h2><!-- Multiple OK -->
        <h3>Subsection</h3><!-- Multiple OK -->
            <h4>Minor heading</h4>
```

### Rules:

- Start with `<h1>` – never skip levels
- Don't choose headings based on size (use CSS for that!)
- Think: outline of a book

---

## Lists - When to use which

```html
<!-- Unordered - order doesn't matter -->
<ul>
  <li>Pizza</li>
  <li>Tacos</li>
  <li>Sushi</li>
</ul>

<!-- Ordered - sequence matters -->
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Eat breakfast</li>
</ol>
```

---

### Adding Images

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Two critical parts:**

- **src** – where the image is (file path)
- **alt** – description for screen readers and when image fails

**Pro tip**: Keep images in an images folder

```
├─ index.html
├─ images/
   ├─ profile.jpg
   └─ banner.jpg
```

<div class="side">
<div class="col">

```html
<img src="./img/photo.png" alt="My photo">
```

</div>
<div class="col">
<img src="./img/photo.png" alt="My photo" width="100px">
</div>
</div>

---

## HTML Review - Style

- **Inline** - style attribute - `<p style="font-size:40px;">big</p>`
- **CSS** - `<style>` tag in html
- **Files** – *style.css* - `<link rel="stylesheet" href="style.css" />`

---

## Inline Styling Basics

```html
<p style="color: blue;">This text is blue</p>

<p style="color: blue; font-size: 24px;">
  This text is blue AND bigger
</p>
```

**Syntax:**

- property: value;
- Separate multiple styles with semicolons
- Use quotes around the whole style attribute

---

## HTML Review - CSS

```css [1,3|2]
.myStyle {
    font-size: 40px;
}
```

- Selectors - `class` | `element` | `id`
- Properties - `font-size` | `color` | `background-color`
- Values - `40px` | `red`

---

## Common Style Properties

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

```css
color: red;
background-color: yellow; 
font-size: 20px;
font-weight: bold;
font-family: Arial; /* text font */
padding: 10px;  /* space inside element */
margin: 20px;   /* space outside element */
```

**Color options:**

- Named: `red`<!-- .element: style="color:red" -->, `blue`<!-- .element: style="color:blue" -->, `green`<!-- .element: style="color:green" -->
- Hex: `#FF0000`, `#0000FF`
- RGB: `rgb(255, 0, 0)`

---

## Putting it together

```html [1|3-5|6-27|7-9|8,12,16]
<!DOCTYPE html>
<html>
  <head>
    <title>About Me</title>
  </head>
  <body>
    <header>
      <h1>Welcome to My Page</h1>
    </header>
    <main>
      <section>
        <h2>About Me</h2>
        <p>Hi! I'm learning to code.</p>
      </section>
      <section>
        <h2>My Hobbies</h2>
        <ul>
          <li>Gaming</li>
          <li>Drawing</li>
        </ul>
      </section>
    </main>
    
    <footer>
      <p>© 2024 My Name</p>
    </footer>
  </body>
</html>
```


---

## Result

<iframe srcdoc="
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }
      html {
        font: 400 100%/1.25 sans-serif;
        box-sizing: border-box;
        background-color: white;
        color: #222;
      }
      header {
        height: 80px;
        background-color: black;
        color: white;
        padding: 40px;
      }
      main {
        padding: 40px;
      }
      .title {
        font-size: 40px;
      }
    </style>
    <header>
      <h1>Welcome to My Page</h1>
    </header>
    <main>
      <section>
        <h2>About Me</h2>
        <p>Hi! I'm learning to code.</p>
      </section>
      <section>
        <h2>My Hobbies</h2>
        <ul>
          <li>Gaming</li>
          <li>Drawing</li>
        </ul>
      </section>
    </main>
    <footer>
      <p>© 2024 My Name</p>
    </footer>" height="500px" width="100%" style="border:6px solid #ccc;"></iframe>

---

### Task 1: Your Bio Page

<!-- .slide: style="text-align: left; font-size: 0.7em;" -->

Your topic is YOU

Create a file called `index.html` with:

**Required:**

- Proper document structure: `<html>`, `<head>`, `<body>`
- Semantic elements: `<header>`, `<main>`, `<footer>`
- A main heading (`<h1>`) with your name or title
- One section about you with `<h2>` and 2-3 paragraphs (`<p>`)
- Another section with your hobbies using `<ul>` and `<li>`
- A third section with favorite foods using `<ol>` and `<li>`

**Keep it simple:**

- No more than 3 paragraphs in your bio
- 3-5 hobbies, 3-5 foods

---

**Bonus**

- style the page itself with the `html` and `body` elements
  - `font-family`, `padding` `margin`
- style each element you use by its element name `li` `ul` etc.
  - `font-weight` `font-size` etc.

---

### Bonus Challenges

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

If you finish early, try these:

- Add an image of yourself or something you like
  - Remember the alt attribute!
- Style your headings with inline styles
  - Change colors, sizes, or fonts
- Add a fun fact section with `<h2>` and `<p>`
- Style your lists
  - Different colors for different items
  - Make food items bold

---

### Success Checklist
<!-- .slide: style="text-align: left;" -->

Before you're done, check:

- ✅ Valid HTML structure (opening and closing tags match)
- ✅ All three semantic sections (header, main, footer)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Both ordered and unordered lists
- ✅ At least one paragraph of text
- ✅ Page displays correctly in browser

**Test it:** Open your index.html in a web browser!

---

## Common Mistakes to Avoid
<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

```html
<!-- ❌ Missing closing tag -->
<p>This is broken
<p>This is also broken</p>

<!-- ✅ Correct -->
<p>This is right</p>
<p>This is also right</p>

<!-- ❌ Wrong nesting -->
<ul>
  <p>Item one</p>
</ul>

<!-- ✅ Correct -->
<ul>
  <li>Item one</li>
</ul>

<!-- ❌ no closing quote -->
<p style="background-color:red>this is red</p>

```

---

## Getting Help
<!-- .slide: style="text-align: left;" -->

Stuck? Try this order:

- **Check your code** – Are all tags closed?
- **Ask a neighbor** – Two heads are better than one
- **Look at the examples** – Compare to the slides
- **Ask for help** – Raise your hand

**Remember:** Everyone gets stuck. That's part of coding!

---
### Next Week Preview

<!-- .slide: style="text-align: left;" -->

**Week 6**: Multi-page Sites & CSS

We'll learn:

- How to create multiple connected pages
- Building navigation menus
- Using external CSS files
- Starting Project 1: Your Passion Site

Get excited! 🚀

---

## Let's Code!

Time to build your bio page

**Remember:**

- Start with the basic structure
- Add content section by section
- Test frequently in your browser
- Ask for help when needed

**You've got this! 💪**

---

## Next

### [Week 6 - Multi-page sites & CSS](./adv1-week6)
