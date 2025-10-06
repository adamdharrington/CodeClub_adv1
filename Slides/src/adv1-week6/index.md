## Week 6: Websites

### Create a multipage app with CSS

---

## Today's Mission
<!-- .slide: style="text-align: left;" -->

By the end of today, you'll have multiple connected pages sharing a common style.

**Key Skills:**

- Creating and linking multiple HTML pages
- Building navigation menus
- Using external CSS files
- Starting Project 1: Your Passion Site

---
 
## Term Outline

| Week | Focus | Milestone |
| ---- | ---- | ---- |
| Sept 13 | HTML | |
| Sept 20 | HTML | |
| Sept 27 | HTML | |
| Oct 4 | HTML | |
| Oct 11 | HTML Review | Create well-structured single page |
| **Oct 18** | **Multi-page sites & CSS** | **Start Proj 1** |
| Oct 25 | CSS Styling and Layouts | Proj 1 contd. |
| ~~Nov 1~~ | No dojo | |

---

## Welcome to Multi-page-verse

Time to connect your pages together! 🌐

---

## Why Multiple Pages?

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Real websites have multiple pages:**

- Home page (landing/welcome)
- About page (information)
- Contact page (get in touch)
- Gallery/Blog/Projects pages

**Each page does one job well**

Better than one super-long scrolling page!

---

## File Organization

``` []
  ├─ index.html
  ├─ about.html
  ├─ contact.html
  ├─ styles.css
```

```html []
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About me</a>
    <a href="blog.html">Blog</a>
</nav>
```

**Pro tip:** `index.html` is special - it loads automatically when you visit a folder

---

## Creating Your First Multi-Page Site

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Step 1:** Create three HTML files

```html
├─ index.html
├─ about.html
└─ blog.html
```

Each file needs the full HTML structure:
- `<!DOCTYPE html>`
- `<html>`, `<head>`, `<body>`
- Semantic elements

---

## The `<a>` Tag - Anchor Links

```html
<a href="about.html">About Me</a>
```

---

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Parts of a link:**
- `<a>` = anchor tag
- `href` = where to go (file path or URL)
- Text between tags = what user clicks

**Examples:**

```html
<a href="index.html">Home</a>
<a href="blog.html">Blog</a>
<a href="https://google.com">Google</a>
```

---

## Building Navigation

```html
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About me</a>
    <a href="blog.html">Blog</a>
</nav>
```

**Key points:**
- Put navigation in `<nav>` element
- Same navigation on every page
- Users can jump between pages

---

## Practice: Create 3 Pages

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

**Make three files:**

1. **index.html** - Home page with welcome message
2. **about.html** - About you (reuse last week's content!)
3. **hobbies.html** - Your hobbies or interests

**Each page needs:**
- Full HTML structure
- `<header>` with page title
- `<nav>` with links to all three pages
- `<main>` with unique content
- `<footer>` with your name

**Test:** Click links - do they work?

---

## The Problem: Repeating Styles

<!-- .slide: style="text-align: left;" -->

```html
<!-- index.html -->
<style>
  body { background: lightblue; }
</style>

<!-- about.html -->
<style>
  body { background: lightblue; }
</style>

<!-- hobbies.html -->
<style>
  body { background: lightblue; }
</style>
```

**This is tedious!** There's a better way... 🤔

---

## Solution: External CSS Files

<!-- .slide: style="text-align: left;" -->

**One file, all pages styled!**

```
my-website/
  ├─ style.css       ← all styles here!
  ├─ index.html
  ├─ about.html
  └─ hobbies.html
```

Each HTML page links to the same CSS file

---

## Creating style.css

**Step 1:** Create a new file called `style.css`

**Step 2:** Add your CSS rules (no `<style>` tags!)

```css
body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
}

header {
  background-color: navy;
  color: white;
  padding: 20px;
}
```

---

## Linking CSS to HTML

**In each HTML file's `<head>`:**

```html
<head>
  <title>My Page</title>
  <link rel="stylesheet" href="style.css">
</head>
```

**The `<link>` tag:**
- `rel="stylesheet"` = it's a CSS file
- `href="style.css"` = path to your CSS file

---

## CSS Reset - Clean Slate

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Browsers add default spacing. Let's remove it:**

```css
/* At the top of style.css */
html,
body {
  margin: 0;
  padding: 0;
}

html {
  font: 400 100%/1.25 sans-serif;
  box-sizing: border-box;
}
```

**Why?**
- Consistent starting point across all browsers
- More control over spacing
- Professional look

---

## Benefits of External CSS

<!-- .slide: style="text-align: left;" -->

✅ **Write once, style everywhere**
- Change one file, update whole site

✅ **Easier to maintain**
- All styles in one place

✅ **Cleaner HTML**
- Separation of content and style

✅ **Faster loading**
- Browser caches the CSS file

---

## Styling Navigation

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

```css
nav {
  background-color: #333;
  padding: 15px;
}

nav a {
  color: white;
  text-decoration: none;  /* removes underline */
  margin-right: 20px;
}

nav a:hover {
  color: #ffd700;  /* changes color on hover */
}
```

**Result:** Professional-looking navigation bar!

---

## Task: Style Your Multi-Page Site

<!-- .slide: style="text-align: left; font-size: 0.7em;" -->

**Create and style your 3-page website:**

**Required:**
1. Create `style.css` with reset code
2. Link CSS to all three HTML pages
3. Style these elements:
   - `body` (background, font-family)
   - `header` (background-color, color, padding)
   - `nav` (background-color, padding)
   - `nav a` (color, text-decoration, margin)
   - `main` (padding)

**Test:** Changes in `style.css` should appear on all pages!

---

## Bonus Challenges

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**If you finish early:**

1. Add hover effects to navigation links
2. Style your `<footer>` consistently
3. Add a different background color for each page's `<main>` (hint: use classes or IDs)
4. Create a fourth page and add it to navigation
5. Experiment with fonts from different font families

---

## PROJECT 1 LAUNCH! 🚀

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

### "My Passion Site"

**Your mission:** Create a multi-page website about something you love

**Topics to choose from:**
- Holiday destination you want to visit
- Favorite musician/band
- Sports team or athlete
- Hobby or interest
- Book series or author
- Video game or movie franchise

---

## Project 1 Requirements

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Core Level (Everyone must do):**
- 3-4 pages with working navigation
- Consistent header/footer on all pages
- Images with alt text
- Headings, paragraphs, lists
- External CSS file with basic styling

---

## Project 1 Requirements
<!-- .slide: style="text-align: left; font-size: 0.7em;" -->

**Extended Level:**
- 4+ pages with more detailed content
- Styled navigation with hover effects
- Custom color scheme
- Multiple images per page

**Advanced Level:**
- 5+ pages with rich content
- Advanced CSS layouts
- Unique styling per page section
- Image gallery or timeline

---

## Project 1 Timeline

<!-- .slide: style="text-align: left;" -->

**This Week (Oct 18):**
- Choose your topic
- Plan your pages (what will each page be about?)
- Create file structure
- Start building page structure and navigation

**Next Week (Oct 25):**
- Complete content
- Polish CSS styling
- Test all links and images
- Prepare to present!

---

## Planning Your Project

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Answer these questions:**

1. What's your topic?
2. What pages will you need? (3-4 minimum)
   - Example: Band site = Home, Biography, Albums, Tour Dates
3. What images do you need?
4. What color scheme fits your topic?

**Sketch it out on paper first!**

---

## Common Questions

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

**Q: Can I change topics?**
A: Yes, but decide by end of today!

**Q: Where do I get images?**
A: Free sources (with permission), your own photos, or Creative Commons

**Q: What if my CSS isn't working?**
A: Check: Is `<link>` tag in `<head>`? Is filename spelled exactly right? Are there typos in CSS?

**Q: Can I add more than 4 pages?**
A: Absolutely! That's the advanced level.

---

## Success Checklist

<!-- .slide: style="text-align: left;" -->

**By end of today:**
- ✅ Topic chosen
- ✅ Pages planned (names and content ideas)
- ✅ File structure created
- ✅ Basic HTML structure on all pages
- ✅ Navigation working between pages
- ✅ style.css created and linked

**Don't worry about perfect styling yet - structure first!**

---

## Getting Unstuck

<!-- .slide: style="text-align: left;" -->

**Link not working?**
- Check spelling of filename
- Check file is in same folder
- Use browser's developer tools (F12)

**CSS not applying?**
- Check `<link>` tag is in `<head>`
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check for typos in property names

---

## Next Week Preview

<!-- .slide: style="text-align: left;" -->

**Week 7: CSS Styling and Layouts**

We'll learn:
- CSS Grid and Flexbox
- Advanced styling techniques
- Finishing Project 1
- Presenting your work!

**Keep building!** 🎨

---

## Let's Build!

### Time to create your multi-page site

**Remember:**
- Plan before you code
- Test your links frequently
- Keep navigation consistent
- Ask for help when stuck

**Your passion site awaits!** ✨

---

## Next

### [Week 7 - CSS Styling and Layouts](./adv1-week7)
