# WKU HRL Handbook

## Project Overview

The WKU HRL Handbook is a centralized online resource designed to improve training and communication for Desk Assistants (DAs) and Resident Assistants (RAs) within WKU Housing and Residence Life (HRL). This project addresses the shortcomings of current training methods by providing a comprehensive, easily accessible platform for essential information, tools, and updates.

---

## Problem Statement

Current training and information dissemination for DAs and RAs is fragmented and inadequate. Important resources are scattered across multiple platforms (PDFs, websites, etc.), leading to confusion, inefficiencies, and a lack of awareness among staff members.

---

## Proposed Solution

This project aims to create a user-friendly website that serves as a single source of truth for all information relevant to DAs and RAs. The website includes:

- **Searchable FAQ:** A comprehensive database of common questions and answers.
- **Quick Access Links:** Direct links to essential tools like StarRez, WhenToWork, and Notifii.
- **On-Call Information:** Dynamic display of on-call staff contact information.
- **Training Resources:** Targeted training modules page for key systems and procedures.
- **Announcement Board:** A centralized location for important updates and policy changes from HRL management.
- **Quick Tips:**  Important information to keep on top-of-mind.

---

## Features Implemented

### 1. **Homepage**
   - A welcoming homepage with links to essential resources (StarRez, WhenToWork, Notifii).
   - Contact information for emergency services, hall front desks, and on-call staff.
   - Announcements section for policy updates.
   - Quick Tip section for frequently missed details.

### 2. **Searchable FAQ Page**
   - A collapsible FAQ section styled to match modern designs.
   - Includes search functionality to quickly find answers to specific questions.

### 3. **Training Page**
   - Training page with next button ready for step-by-step instructions for using StarRez, WhenToWork, and Notifii.

### 4. **Dynamic On-Call Information**
   - JavaScript dynamically updates the current on-call staff based on the time of day and day of the week.

### 5. **Styling**
   - Consistent styling across all pages using CSS:
     - Rounded corners for dropdowns and boxes.
     - Compact `<details>` dropdowns for contact information.

### 6. **Favicon**
   - Added a favicon (`favicon.ico`).

---

## Technologies Used

- **HTML:** For structuring the website content.
- **CSS:** For styling and visual presentation.
- **JavaScript:** For interactive elements and dynamic functionality.

---

## Project Structure

wku-hrl-handbook/
├── README.md # Project documentation
├── index.html # Main homepage
├── about/ # About page folder
│ ├── about.html # About page
│ ├── about.js # About page script
├── faq.html # FAQ page
├── questionboard/ # Question Board folder
│ ├── questionboard.html # Question Board page
│ ├── questionboard.js # Question Board script
├── training/ # Training page folder
│ ├── training.html # Training page
│ ├── training.js # Training page script
├── images/ # Images folder
│ ├── kyle_groves.jpg # Profile image
│ ├── wku_logo.png # WKU logo
│ ├── favicon.ico # Favicon file
│ ├── favicon-16x16.png # Favicon (16x16)
│ ├── favicon-32x32.png # Favicon (32x32)
│ ├── android-chrome-192x192.png # Favicon (Android)
│ ├── android-chrome-512x512.png # Favicon (Android)
│ └── site.webmanifest # Web manifest file for favicons
├── css/ # CSS folder
│ └── style.css # Main stylesheet
├── js/ # JavaScript folder
│ ├── header.js # Shared header script
│ ├── nav.js # Shared navigation script
│ ├── script.js # General JavaScript file
└── me.csv # CSV file containing About Me data

---

## Getting Started

1. Clone the repository: `git clone [repository URL]`.
2. Open `index.html` in your web browser.

---

## Contributing

We welcome contributions to improve the WKU HRL Handbook! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository: `git push origin feature/your-feature-name`.
5. Submit a pull request to the main repository.

---

## License

[Choose a license, e.g., MIT License]

---

## Contact

Kyle Groves  
Email: kyle.groves889@topper.wku.edu  

---

## Acknowledgements

- Western Kentucky University  
- WKU Housing and Residence Life  