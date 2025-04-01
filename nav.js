// This JavaScript file dynamically loads the nav bar HTML into the specified container.
// Styling is handled through CSS file defined in the head of each .html file.

function loadNavigation() {
    const navHTML = `
        <nav>
            <a href="index.html">Home</a> |
            <a href="about.html">About</a> |
            <a href="faq.html">FAQ</a> |
            <a href="training.html">Training</a>
        </nav>
    `;
    document.getElementById('navContainer').innerHTML = navHTML;
}

loadNavigation();