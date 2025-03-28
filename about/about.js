function loadCSV() {
    fetch('../me.csv')
        .then(response => response.text())
        .then(csvText => {
            const csvData = csvText.split('\n').slice(1); // Skip header row
            const aboutContent = document.getElementById('aboutContent');

            csvData.forEach(row => {
                const parts = parseCSVRow(row);
                const category = parts[0];
                const data = parts[1];
                const formattedRow = document.createElement('div');
                formattedRow.innerHTML = `
                    <p><strong>${category}</strong>: ${data}</p>
                `;
                aboutContent.appendChild(formattedRow);
            });
        })
        .catch(error => console.error('Error loading CSV:', error));
}

function parseCSVRow(row) {
    const parts = [];
    let currentPart = '';
    let inQuotes = false;

    for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            parts.push(currentPart);
            currentPart = '';
        } else {
            currentPart += char;
        }
    }

    parts.push(currentPart);
    return parts;
}

loadCSV();