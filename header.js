// This JavaScript file dynamically loads the header HTML into a specified container.
// Styling is handled through CSS classes defined in the head of each .html file.

function loadHeader() {
    const headerHTML = `
        <header>
            <a href="index.html" class="logo">
                <img src="wku_logo.png" alt="WKU Logo" class="wku-logo">
                <h1>HRL Handbook</h1>
            </a>
        </header>
    `;
    document.getElementById('headerContainer').innerHTML = headerHTML;
}

// Call the function to load the header when the document is ready
loadHeader();