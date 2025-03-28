function loadHeader() {
    const headerHTML = `
        <header>
            <a href="../index.html" class="logo">
                <img src="../images/wku_logo.png" alt="WKU Logo" class="wku-logo">
                <h1>WKU HRL Handbook</h1>
            </a>
        </header>
    `;
    document.getElementById('headerContainer').innerHTML = headerHTML;
}

loadHeader();