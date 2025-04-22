// Makes sure that the DOM (Document Object Model) "page" is fully loaded before executing the script
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

});