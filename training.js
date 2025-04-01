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
const totalSteps = 5; // Total number of training steps

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
function loadNextStepContent() {
    const trainingContent = document.getElementById('trainingContent'); // Get the training content container
    const steps = [
        'Step 1: Introduction to StarRez',
        'Step 2: Using WhenToWork',
        'Step 3: Notifii Basics',
        'Step 4: Advanced StarRez Features',
        'Step 5: Final Assessment'
    ];
    trainingContent.innerText = steps[currentStep - 1]; // Display content for the current step
}

/**
 * TODO: progress bar to reflect the user's current position in the training.
 */