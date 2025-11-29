## Week 9: Introduction to Javascript

### First interactive button

![QR](./img/week9.png)

---

## Today's Mission

<!-- .slide: style="text-align: left;" -->

By the end of today, you'll understand what JavaScript is and create your first interactive button!

**Key Skills:**

- Understanding what JavaScript does
- Variables and functions basics
- Connecting JavaScript to HTML elements
- Making elements respond to clicks

---

<!-- .slide: style="font-size:0.9em;" -->

## Term Outline

<!-- prettier-ignore -->
| Week      | Focus                          | Milestone                          |
| --- | --- | --- |
| ~~Nov 1~~ | No dojo                        |                                    |
| Nov 8 | Advanced CSS & Positioning | Build a styled "card" |
| **Nov 15** | **Introduction to Javascript** | **First interactive button** |
| Nov 22 | Interactive components | Working accordion |

<!-- prettier-ignore-end -->

---

## What Makes Websites Interactive?

<!-- .slide: style="text-align: left;font-size:0.75em" -->

**So far, our websites are:**

- ✅ Beautiful
- ✅ Well-structured
- ✅ Multi-page
- ❌ Static (they don't respond to you)

**Today we add:**

- 🎯 Interactivity
- 🎯 Responsiveness
- 🎯 JavaScript!

---

## Part 2: JavaScript Basics

Let's add some magic! ✨

---

## What is JavaScript?

<!-- .slide: style="text-align: left;" -->

**JavaScript is:**

- A programming language
- Runs in your web browser
- Makes websites interactive
- The "behavior" layer of websites

**Think of it like this:**

- **HTML** = Structure (the skeleton)
- **CSS** = Style (the appearance)
- **JavaScript** = Behavior (the actions)

---

## What Can JavaScript Do?

<!-- .slide: style="text-align: left;" -->

**Common uses:**

- ✅ Change content when you click a button
- ✅ Show/hide elements
- ✅ Validate forms
- ✅ Create animations
- ✅ Respond to user actions
- ✅ Update page content without reloading

**Today:** We'll start simple with buttons that do something!

---

## JavaScript in Your HTML

**Two ways to add JavaScript:**

**1. In a separate file (recommended):**

```html
<script src="script.js" type="module"></script>
```

**2. Inline in HTML:**

```html
<script>
  // Your JavaScript code here
</script>
```

**Pro tip:** Put `<script>` tags just before `</body>`

---

## Follow Along: Interactive Exercises

<!-- .slide: style="text-align: left;" -->

**Today we'll learn by doing!**

Open this page: `interactive-page.html`

We'll work through 5 exercises together:

1. Simple alert button
2. Changing text and colors
3. Your first full button
4. Hover effects (bonus!)
5. Your own creative idea

**Teaching pattern:**

- I'll explain a concept
- You'll practice it in the exercise
- We'll build on what you learned

---

## Variables - Storing Information

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Variables are like labeled boxes that hold information:**

```javascript
let name = "Alice";
let age = 12;
let isHappy = true;
```

**Three types we'll use:**

- `let` - for values that might change
- `const` - for values that won't change
- `var` - older way (we'll avoid this)

**Think:** Variable = a name for a value

---

## Functions - Reusable Code

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Functions are like recipes - they do something:**

```javascript
function sayHello() {
  console.log("Hello!");
}
```

**Parts:**

- `function` - keyword
- `sayHello` - function name
- `()` - parameters (empty for now)
- `{ }` - code that runs

**To use it:** `sayHello();`

---

## The DOM - Your Page as Code

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**DOM = Document Object Model**

**Think of it as:**

- JavaScript's way of seeing your HTML
- A map of all elements on your page
- How JavaScript finds and changes things

**Browser globals:**

- `document` - represents your entire HTML page
- `window` - represents the browser window
- `console` - for debugging (we'll use this!)

---

## Finding Elements - Like CSS Selectors!

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**JavaScript can find elements just like CSS:**

```javascript
// Find by ID (like #myButton in CSS)
document.getElementById("myButton");

// Find by class (like .myClass in CSS)
document.querySelector(".myClass");

// Find first matching element
document.querySelector("button");

// Find all matching elements
document.querySelectorAll("button");
```

**Remember:** CSS uses `#` for ID, `.` for class. JavaScript uses the same!

---

## Attaching JavaScript to Buttons

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Method 1: Inline (quick but not ideal)**

```html
<button onclick="alert('Hello!')">Click Me</button>
```

**Method 2: In JavaScript (better!)**

```html
<button id="myButton">Click Me</button>
```

```javascript
let button = document.getElementById("myButton");
button.onclick = function () {
  alert("Hello!");
};
```

**👉 Now try Exercise 1 in interactive-page.html**

---

## Changing Element Properties

<!-- .slide: style="text-align: left; font-size: 0.85em;" -->

**Once you find an element, you can change it:**

```javascript
let heading = document.querySelector("h1");

// Change text content
heading.textContent = "New Title!";

// Change style
heading.style.color = "red";
heading.style.fontSize = "40px";

// Add/remove classes
heading.classList.add("highlight");
heading.classList.remove("highlight");
```

---

## Your First Interactive Button

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**Let's build it step by step:**

**Step 1:** Create HTML button

```html
<button id="clickMe">Click Me!</button>
<p id="message">Click the button above</p>
```

**Step 2:** Create `script.js` file

```javascript
let button = document.getElementById("clickMe");
let message = document.getElementById("message");

button.onclick = function () {
  message.textContent = "You clicked it! 🎉";
  message.style.color = "green";
};
```

**Step 3:** Link script in HTML

```html
<script src="script.js"></script>
```

---

## Practice Time: Exercise 2

<!-- .slide: style="text-align: left;" -->

**Go to Exercise 2 in interactive-page.html**

Apply what you just learned:

- Find elements by ID
- Change textContent
- Change style.color

**Fill in the blanks!**

---

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

## Example: Interactive Button

<div class="side">
<div class="col">

**HTML:**

```html
<button id="myButton">Change Color!</button>
<h1 id="title">Hello World</h1>
```

</div>
<div class="col">

**JavaScript:**

```javascript
let button = document.getElementById("myButton");
let title = document.getElementById("title");

button.onclick = function () {
  title.style.color = "blue";
  title.textContent = "Color Changed!";
};
```

</div>
</div>

---

## Practice Time: Exercise 3

<!-- .slide: style="text-align: left;" -->

**Go to Exercise 3 in interactive-page.html**

This time with less help! You got this:

- Use getElementById
- Use onclick
- Change properties

**Work independently for 5 minutes**

---

## Task: Add JavaScript to Your Project

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

**Now add interactivity to your Project 1:**

**Required:**

1. Choose one of your Project 1 pages
2. Add at least one interactive button
3. Use what you learned in Exercises 1-3
4. Make the button change something:
   - Change text content
   - Change a color
   - Both!

**Stretch goal:** Add hover effects or a creative feature from Exercise 5

**Keep it simple!** One button, one clear action.

---

## Hover Effects with JavaScript

<!-- .slide: style="text-align: left; font-size: 0.8em;" -->

**You can also respond to hover:**

```javascript
let button = document.getElementById("myButton");

button.onmouseenter = function () {
  button.style.backgroundColor = "yellow";
};

button.onmouseleave = function () {
  button.style.backgroundColor = "white";
};
```

**Note:** CSS `:hover` is usually better for simple hover effects, but JavaScript can do it too.

**👉 Bonus: Try Exercise 4 if you're done with Exercise 3!**

---

## Common Mistakes to Avoid

<!-- .slide: style="text-align: left; font-size: 0.75em;" -->

```javascript
// ❌ Script runs before HTML loads
<script src="script.js"></script>
// ... rest of HTML

// ✅ Script runs after HTML loads
// ... all HTML ...
<script src="script.js"></script>
</body>

// ❌ Wrong selector
document.getElementById(".myClass"); // ID, not class!

// ✅ Correct
document.getElementById("myId");
document.querySelector(".myClass");
```

---

## Debugging JavaScript

<!-- .slide: style="text-align: left;" -->

**Browser Console is your friend:**

- **Open it:** Right-click → Inspect → Console tab
- **Or:** Press F12 (Windows) or Cmd+Option+I (Mac)

**Use `console.log()` to check values:**

```javascript
let button = document.getElementById("myButton");
console.log(button); // See what you found
```

**Check for errors:** Red text in console = something's wrong!

---

## Success Checklist

<!-- .slide: style="text-align: left;" -->

**By end of today:**

- ✅ Understand what JavaScript does
- ✅ Know what variables and functions are
- ✅ Can find elements using `getElementById` or `querySelector`
- ✅ Created at least one interactive button
- ✅ Button changes something when clicked

**Remember:** This is just the beginning! 🚀

---

## What We Learned Today

<!-- .slide: style="text-align: left;" -->

**JavaScript basics:**

- Variables store information
- Functions do things
- The DOM is how JavaScript sees your page
- We can find elements like CSS selectors
- We can attach code to buttons
- We can change element properties

**Next week:** We'll build more interactive components!

---

## Next Week Preview

<!-- .slide: style="text-align: left;" -->

**Week 9: Interactive Components**

We'll learn:

- Building accordions (expand/collapse)
- Creating interactive cards
- More JavaScript patterns
- Making your sites feel alive!

**Keep practicing with buttons!** 💪

---

## Final Challenge: Exercise 5

<!-- .slide: style="text-align: left;" -->

**Create your own interactive button!**

Go to Exercise 5 in interactive-page.html

**Ideas:**

- Click counter
- Color cycler
- Text size changer
- Anything creative!

**Remember to use console.log() for debugging!**

---

## Let's Code!

### Time to make your first button interactive

**Remember:**

- Start simple
- Test in browser frequently
- Use the console to debug
- Ask for help when stuck

**You're adding interactivity to your sites!** ✨

---

## Next

### [Week 10 - Interactive components](./adv1-week10)
