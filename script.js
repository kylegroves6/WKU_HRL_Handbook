function updateOnCallInfo() {
    const now = new Date();
    const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hour = now.getHours();

    let onCallPerson;

    if (day >= 1 && day <= 5) { // Weekday
        if (hour >= 8 && hour < 18) {
            onCallPerson = "Hall Director";
        } else {
            onCallPerson = "Resident Assistant (RA)";
        }
    } else { // Weekend
        onCallPerson = "Resident Assistant (RA)";
    }

    document.getElementById('onCallIndicator').innerHTML = `
        <p><strong>Current On-Call:</strong> ${onCallPerson}</p>
    `;
}

// Update on-call info every minute
setInterval(updateOnCallInfo, 60000);
updateOnCallInfo(); // Initial call to display on page load
