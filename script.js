// This script handles the FAQ functionality and on-call information display for a housing website.
// More will be added here in the future but currently it just handles the dynamic things for the main page

function updateOnCallInfo() {
    const now = new Date(); // Get the current date and time
    const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hour = now.getHours(); // 0 to 23

    let onCallPerson;


    /**
 * Determines the on-call staff based on the current time and day of the week.
 *
 * Logic:
 * - Weekdays (Monday to Friday):
 *   - Between 8:00 AM and 6:00 PM: The Hall Director is on call.
 *   - Between 6:00 PM and 8:00 AM: The Resident Assistants (RAs) are on call.
 *
 * - Weekends (Friday 6:00 PM to Monday 8:00 AM):
 *   - The Resident Assistants (RAs) are on call for the entire weekend.
 *
 * Purpose:
 * - This logic ensures that the correct staff member is displayed as on-call based on the time of day and day of the week.
 */


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
