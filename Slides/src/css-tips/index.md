## Week 7: CSS Styling and Layouts

### (advanced tips)

---

## Today's Mission

<!-- .slide: style="text-align: left;" -->

This is an optional additional resource for week7's CSS

**Key Skills:**

-

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

</div></div>

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

**Gradients:**

```css
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

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

## Google Fonts Integration

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Step 1:** Go to [fonts.google.com](https://fonts.google.com)

**Step 2:** Choose fonts and get the link:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
  rel="stylesheet"
/>
```

**Step 3:** Use in your CSS:

```css
body {
  font-family: "Roboto", sans-serif;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
```

---

## Advanced CSS Properties

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Border radius for rounded corners:**

```css
.card {
  border-radius: 10px; /* rounded corners */
}
```

**Transform for effects:**

```css
.button:hover {
  transform: scale(1.05); /* grow slightly */
}
```

**Opacity for transparency:**

```css
.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent */
}
```

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
