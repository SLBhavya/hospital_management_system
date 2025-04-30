// index_script.js

document.addEventListener('DOMContentLoaded', () => {
    animateCount('doctorCount', 50); // Example count
    animateCount('patientCount', 120); // Example count
    animateCount('appointmentCount', 300); // Example count
});

// Function to animate count up
function animateCount(elementId, target) {
    const element = document.getElementById(elementId);
    let count = 0;
    const increment = target / 200; // Adjust this value for speed

    const updateCount = () => {
        count += increment;
        if (count < target) {
            element.innerText = Math.floor(count);
            requestAnimationFrame(updateCount);
        } else {
            element.innerText = target;
        }
    };

    updateCount();
}
