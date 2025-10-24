## Week 7: CSS Styling and Layouts

Advanced styling and finishing Project 1

![QR](./img/week7.png)

---

## Today's Mission

<!-- .slide: style="text-align: left;" -->

By the end of today, you'll have a beautifully styled multi-page website ready to showcase!

**Key Skills:**

- Advanced CSS styling techniques
- CSS Grid and Flexbox layouts
- Responsive design basics
- Finishing and polishing Project 1

---

## Term Outline

| Week | Focus | Milestone |
| --- | --- | --- |
| Sept 13 | HTML | |
| Sept 20 | HTML | |
| Sept 27 | HTML | |
| Oct 4 | HTML | |
| Oct 11 | HTML Review | Create well-structured single page |
| Oct 18 | Multi-page sites & CSS | Start Proj 1 |
| **Oct 25** | **CSS Styling and Layouts** | **Proj 1 contd.** |
| ~~Nov 1~~ | No dojo | |

---

## CSS Layout Revolution 🎨

Time to make your websites look professional!

---

## Last week recap

**Last week:**

- ✅ Topic chosen
- ✅ Pages planned (names and content ideas)
- ✅ File structure created
- ✅ Basic HTML structure on all pages
- ✅ Navigation working between pages
- ✅ style.css created and linked

---

## This week

**Level 1 - Basic Enhancement:**

- Add `Flex` to one page
- Improve your color scheme
- Add hover effects to navigation
- Style your images with borders/rounded corners

**Level 2 - Intermediate:**

- Add responsive design (mobile-friendly)
- Implement a consistent color palette
- Add subtle animations/transitions

---

## The Box Model - Foundation of Layout

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

## `Flex` - Flexible Layouts

```css
.navbar {
  display: flex;
  justify-content: space-between; /* spread items apart */
  align-items: center; /* center vertically */
}
```

**Perfect for:**

- Navigation bars
- Button groups
- Centering content

---

## Flex Example - Navigation

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

</div></div>

---

## Responsive Design - Mobile First

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Media queries** make your site work on all devices:

```css
/* Mobile first - default styles */
.card-container {
  grid-template-columns: 1fr; /* 1 column on mobile */
}

/* Tablet and up */
@media (min-width: 768px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}
```

---

## Advanced Styling Techniques

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Shadows and Effects:**

```css
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* subtle shadow */
  transition: transform 0.3s ease; /* smooth animation */
}

.card:hover {
  transform: translateY(-5px); /* lift on hover */
}
```

---

## Color Schemes and Typography

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Choose a color palette:**

- Primary color (main brand color)
- Secondary color (accent)
- Neutral colors (grays, whites)

**Typography hierarchy:**

```css
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}
h2 {
  font-size: 2rem;
  font-weight: 600;
}
h3 {
  font-size: 1.5rem;
  font-weight: 500;
}
p {
  font-size: 1rem;
  line-height: 1.6;
}
```

---

## Task: Enhance Your Project 1

<!-- .slide: style="text-align: left; font-size: 0.7em;" -->

**Level 1 - Basic Enhancement:**

- Add `Flex` to one page
- Improve your color scheme
- Add hover effects to navigation
- Style your images with borders/rounded corners

**Level 2 - Intermediate:**

- Add responsive design (mobile-friendly)
- Implement a consistent color palette
- Add subtle animations/transitions

**Level 3 - Advanced:**

- Advanced hover effects
- Custom fonts from Google Fonts
- Professional spacing and typography

---

## Project 1 Final Checklist

<!-- .slide: style="text-align: left; font-size: 0.7em" -->

<div class="side">
<div class="col">

**Content & Structure:**

- ✅ 3-4 pages with working navigation
- ✅ Consistent header/footer on all pages
- ✅ Images with proper alt text
- ✅ Well-structured headings and content

</div>
<div class="col">

**Styling & Design:**

- ✅ External CSS file with consistent styling
- ✅ Professional color scheme
- ✅ Good typography and spacing
- ✅ Responsive design (works on mobile)

</div>
</div>

**Polish:**

- ✅ All links work correctly
- ✅ Images load properly
- ✅ Clean, readable code
- ✅ Ready to present!

---

## Presentation Preparation

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**What to share:**

1. **Your topic** - What did you choose and why?
2. **Your pages** - What content did you include?
3. **Your design choices** - Colors, layout, styling
4. **One thing you're proud of** - A specific feature or design element
5. **One challenge you overcame** - What was tricky and how you solved it?

**Presentation tips:**

- Show your site live in the browser
- Explain your design decisions
- Be proud of your work!

---

## Common Layout Patterns

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

**Hero Section:**

```css
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("hero.jpg");
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
```

<iframe srcdoc="
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Hero Section</title>
    <style>
      * {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
      .hero {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url('https://unsplash.com/photos/QWutu2BRpOs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8YmFubmVyfGVufDB8fHx8MTc2MTMzMDU1NXww&force=true&w=2400');
        background-size: cover;
        height: 400px;
        max-height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class='hero'>
      <h1>Welcome to my website</h1>
    </div>
    <div class='content'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  </body>
</html>
" width="90%" height="500px" style="background: white;border: 3px solid orange;">

---

## Common Layout Patterns

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

**Card Grid:**

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px;
}
```

---

<iframe srcdoc="<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Card Grid</title>
    <style>
      * {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        padding: 40px;
      }
      .card {
        background-color: white;
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <div class='card-grid'>
      <div class='card'>
        <h2>Card 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div class='card'>
        <h2>Card 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div class='card'>
        <h2>Card 3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  </body>
</html>" height="600px" width="90%" style="background: white;border: 3px solid orange;">

---

## Debugging CSS Issues

<!-- .slide: style="text-align: left;" -->

**Common problems and solutions:**

**Styles not applying?**

- Check CSS syntax (missing semicolons, brackets)
- Verify selectors match your HTML
- Use browser dev tools (F12) to inspect elements

---

## Debugging (more) CSS Issues

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

**Layout not working?**

- Check if you have `display: grid` or `display: flex`
- Verify container has content to display
- Test with simple content first

**Responsive issues?**

- Test on different screen sizes
- Check media query syntax
- Start with mobile-first approach

---

## Project Showcase Guidelines

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

**When presenting:**

1. **Open your site** in a browser
2. **Navigate through pages** to show functionality
3. **Highlight design choices** - "I chose blue because..."
4. **Show responsive design** - resize browser window
5. **Share challenges** - "The hardest part was..."

**Questions to expect:**

- "Why did you choose this topic?"
- "What was the most challenging part?"
- "What would you add next?"

---

## Next Week Preview

<!-- .slide: style="text-align: left;" -->

**Week 8: Introduction to JavaScript**

We'll learn:

- What JavaScript can do
- Variables and basic programming concepts
- Making interactive buttons
- Adding JavaScript to your websites

**Get ready for interactivity!** ⚡

---

## Bonus Challenges

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**If you finish early:**

1. **Add a contact form** (HTML only for now)
2. **Create an image gallery** with CSS Grid
3. **Add smooth scrolling** between sections
4. **Experiment with CSS animations**
5. **Create a dark/light theme toggle** (CSS only)

**Remember:** These are extras - focus on completing your core project first!

---

## Getting Help

<!-- .slide: style="text-align: left;" -->

**Stuck on CSS? Try this order:**

1. **Check your syntax** - Missing semicolons, brackets?
2. **Use browser dev tools** - Right-click → Inspect Element
3. **Ask a neighbor** - Two heads are better than one
4. **Look at examples** - Compare to the slides
5. **Ask for help** - Raise your hand!

**Remember:** CSS can be tricky - everyone struggles with layouts!

---

## Success Criteria for Today

<!-- .slide: style="text-align: left;" -->

**By the end of today, you should have:**

- ✅ **Enhanced Project 1** with advanced CSS
- ✅ **Responsive design** that works on mobile
- ✅ **Professional styling** with good color scheme
- ✅ **Working navigation** and all links functional
- ✅ **Ready to present** your passion site

**Most importantly:** Be proud of what you've built! 🎉

---

## Let's Polish and Present!

### Time to finish your masterpiece

**Remember:**

- Focus on one enhancement at a time
- Test your changes frequently
- Don't forget to save your files!
- Ask for help when needed

**Your passion site is almost ready to shine!** ✨

> 🔗 [More CSS Here](./css-tips) 💅

---

## Next

### [Week 8 - Introduction to JavaScript](./adv1-week8)
