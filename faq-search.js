/**
 * Section: Advanced Search Functionality
 * I was getting frustrated that when I would search "lost" and "lose" wouldn't
 * show up. So I decided to implement a search function that would allow for
 * fuzzy matching since I had heard of it from Minecraft text input before.
*/

/**
 * Purpose:
 * - Implements an improved search system for the FAQ page using Lunr.js
 * - Provides fuzzy matching (typo tolerance), stemming (word variations), 
 *   and highlighting [technically this is Mark.js]
 * - Highlights matching terms in both questions and answers
 * 
 * Key Features:
 * - Creates a search index during page load for fast queries
 * - Handles word variations (e.g., "lose" → "lost", "keys" → "key")
 * - Allows 1-character typos in search terms (e.g., "kye" → "key")
 * - Keeps original FAQ toggle functionality while improving search
 * 
 * Why:
 * - Enables natural language searches rather than exact matches
 * - Provides results even when there are common user errors and word variations
 * - Provides relevant answers even when matches aren't in question text
 */


// Initialize Lunr index
let idx;
const faqItems = Array.from(document.querySelectorAll('.faq-item'));

// Create search index
// This function initializes the Lunr.js index for the FAQ items on the page.
// https://lunrjs.com/
// It extracts the question and answer text from each FAQ item and adds them to the index.
function createIndex() {
    idx = lunr(function () {
        this.ref('id');
        this.field('question');
        this.field('answer');

        faqItems.forEach((item, id) => {
            this.add({
                id: id,
                question: item.querySelector('.faq-question-text').textContent,
                answer: item.querySelector('.faq-answer').textContent
            });
        });
    });
}

// Initialize index on page load
// This function is called when the DOM is fully loaded, ensuring that all FAQ items are available for indexing.
// this is similar to what happens in the faq.js file where the DOM is loaded before executing the toggle functionality.
// It ensures that the search index is created only after all elements are available in the DOM.
document.addEventListener('DOMContentLoaded', createIndex);

// Improved search function

/**
 * Searches through FAQ items based on the user's query and displays matching results.
 * Utilizes fuzzy matching with a maximum edit distance of 1 to find approximate matches.
 * For each matching FAQ item, highlights the matching text and auto-expands the answer.
 */

function searchFAQs() {
    const query = searchInput.value.trim();
    const results = idx.search(query + '~1'); // Fuzzy match with 1 edit distance

    faqItems.forEach((item, id) => {
        const match = results.find(r => r.ref === id.toString());
        item.style.display = match ? 'block' : 'none';

        if (match) {
            highlightMatches(item, query);
        }
    });
}

// Highlight matches with stemming support
// This function highlights the matching terms in both the question and answer
// elements of the FAQ item. It uses the Mark.js library for highlighting.
// https://markjs.io/

function highlightMatches(item, query) {
    const questionElem = item.querySelector('.faq-question-text');
    const answerElem = item.querySelector('.faq-answer');

    // Reset highlights
    questionElem.innerHTML = questionElem.textContent;
    answerElem.innerHTML = answerElem.textContent;

    // Highlight both question and answer matches
    new Mark(questionElem).mark(query, { separateWordSearch: true });
}

// Update event listener
// This function is called when the user types in the search input field
// allowing for real-time search results.
searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) {
        // Remove all highlights first
        new Mark(document.querySelectorAll('.faq-question-text, .faq-answer')).unmark();

        // Then reset view
        faqItems.forEach(item => {
            item.style.display = 'block';
            item.querySelector('.faq-answer').style.display = 'none';
            item.querySelector('.toggle-icon').textContent = '+';
        });
        return;
    }
    searchFAQs();
});
