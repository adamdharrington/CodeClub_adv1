// Immediately Invoked Function Expression (IIFE) are used to avoid polluting the global namespace
// and to create a private scope for the code inside.
// You can read more about IIFEs here:
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// an alternative to using IIFEs is to use ES6 modules, which have their own scope by default (but they do require being served from a server).
(function () {
    /**
     * We will control the theme using CSS variables by toggling a class on the body element
     *
     * This is a simple implementation. In a real-world scenario, you might want to save the user's preference.
     */
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
    }
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    /**
     * PUZZLE CARD FLIP FUNCTIONALITY
     *
     * This code makes puzzle cards flip when clicked to reveal the answer.
     */

    // Find all puzzle cards on the page
    // querySelectorAll returns a list of all elements that match the selector
    const puzzleCards = document.querySelectorAll('.puzzle-card');

    // Loop through each puzzle card
    puzzleCards.forEach(function(card) {
        // Add a click event listener to each card
        // When the card is clicked, run the flipCard function
        card.addEventListener('click', function() {
            // Toggle the 'flipped' class on this card
            // If it has the class, remove it. If it doesn't have it, add it.
            // The CSS will handle the actual flip animation
            card.classList.toggle('flipped');
        });
    });

})();
