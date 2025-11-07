import "./index.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import "reveal.js/plugin/highlight/monokai.css";

export const makeSlides = (slideContent) => {
  document.querySelector("#root").innerHTML = `
    <div class="reveal">
    <div class="slides">
    <section data-markdown>
    <script type="text/template" id="slide-content">
    </script>
    </section>
    </div>
    </div>
    `.trim(); // Trim to avoid unwanted whitespace around

  document.getElementById("slide-content").textContent = slideContent;

  let deck = new Reveal({
    plugins: [Markdown, Highlight],
  });
  deck.initialize();
};
