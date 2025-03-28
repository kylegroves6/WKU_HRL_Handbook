document.addEventListener('DOMContentLoaded', () => {

    /**
     * Section: Collapsible FAQ Functionality
     * 
     * Purpose:
     * - This section enables collapsible functionality for FAQ items.
     * - Clicking on a question toggles the visibility of its corresponding answer.
     * - A "+" icon changes to "-" when the answer is expanded, providing visual feedback to the user.
     * 
     * Why:
     * - To improve user experience by allowing users to focus on one FAQ at a time.
     */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggleIcon = item.querySelector('.toggle-icon');

        question.addEventListener('click', () => {
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
            toggleIcon.textContent = isVisible ? '+' : '-';
        });
    });

    /**
     * Section: Search Functionality
     * 
     * Purpose:
     * - This section implements a search feature for the FAQ page.
     * - Users can type a query in the search bar and click the "Search" button.
     * - The script filters FAQ items, displaying only those that match the query.
     * 
     * Why:
     * - To help users quickly find answers to specific questions without manually scrolling through all FAQs.
     */
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        faqItems.forEach(item => {
            const questionText = item.querySelector('.faq-question').textContent.toLowerCase();
            if (questionText.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

});