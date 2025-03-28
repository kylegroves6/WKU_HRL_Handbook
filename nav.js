function loadNavigation() {
    const navHTML = `
        <nav>
            <a href="../index.html">Home</a> |
            <a href="../about/about.html">About</a> |
            <a href="../faq/faq.html">FAQ</a> |
            <a href="../training/training.html">Training</a>
        </nav>
    `;
    document.getElementById('navContainer').innerHTML = navHTML;
}

loadNavigation();