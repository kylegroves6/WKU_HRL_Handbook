/**
 * Handles training step progression and updates the progress bar dynamically.
 * 
 * Purpose:
 * - This section allows users to progress through training steps one at a time.
 * - Each step displays specific training content and updates the progress bar accordingly.
 * 
 * Why:
 * - To provide a structured and interactive training experience for users.
 */
let currentStep = 0; // Start at step 0 (first step)
const totalSteps = 4; // Total number of training steps

/**
 * Moves to the next training step, updates progress, and loads new content.
 */
function nextTrainingStep() {
    if (currentStep < totalSteps) {
        currentStep++; // Increment the current step

        // TODO: Update the progress bar (not implemented in this snippet)
        // Assume updateProgress is a function that updates the progress bar
        // updateProgress(); 
        // Update the progress bar


        loadNextStepContent(); // Load content for the next step
    }
}

/**
 * Loads content for the current training step based on predefined steps.
 */
loadNextStepContent(); // Load first step content

function loadNextStepContent() {
    const trainingContent = document.getElementById('trainingContent'); // Get the training content container
    const steps = [
        'Step 1: HRL Card Access Flowchart',
        'Step 2: Notifii101 - How to Log Packages In & Out',
        'Step 3: SR101 - How to Issue a Spare Key',
        'Step 4: SR101 - Visitation & Guests',
    ];
    trainingContent.innerText = steps[currentStep]; // Display content for the current step
}

/**
 * TODO: progress bar to reflect the user's current position in the training.
 */

const pdfs = [
    'https://drive.google.com/file/d/1Q0U2B6SwOsDcZeyyHQV5VBMINlYcd6cp/preview',
    'https://drive.google.com/file/d/1HmjA4WDM_PqWJqQwMZX6QIwpBTfe-5Td/preview',
    'https://drive.google.com/file/d/1GrkkPALxoUixspVseGE38QO2-tdFg2IM/preview',
    'https://drive.google.com/file/d/1B9v4eScjEm-kucAgt46XMVxHoHhHrWJU/preview'
];
let currentIndex = 0;

const pdfViewer = document.getElementById('pdfViewer');
const progressBar = document.getElementById('pdfProgressBar');
const nextBtn = document.getElementById('nextBtn');

function showPDF(index) {
    pdfViewer.src = pdfs[index];
    progressBar.value = index + 1;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < pdfs.length - 1) {
        currentIndex++;
        showPDF(currentIndex);
    }
    if (currentIndex === pdfs.length - 1) {
        nextBtn.disabled = true;
    }
});

progressBar.max = pdfs.length;
showPDF(currentIndex);