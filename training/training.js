let currentStep = 0; // Start at -1 to account for 0-based indexing
const totalSteps = 5; // Total number of training steps

function nextTrainingStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateProgress();
        // Optionally, load the next step's content here
        loadNextStepContent();
    }
}

function loadNextStepContent() {
    // Example logic to load next step content
    const trainingContent = document.getElementById('trainingContent');
    const steps = [
        'Step 1: Introduction to StarRez',
        'Step 2: Using WhenToWork',
        'Step 3: Notifii Basics',
        'Step 4: Advanced StarRez Features',
        'Step 5: Final Assessment',
    ];
    trainingContent.innerText = steps[currentStep - 1];
}

function updateProgress() {
    const progressBar = document.getElementById('progress');
    const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Initialize the progress bar
updateProgress();