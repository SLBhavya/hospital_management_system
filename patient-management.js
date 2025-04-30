// Get references to the form and table
const patientForm = document.getElementById('patientForm');
const patientTable = document.getElementById('patientTable').querySelector('tbody');

// Add event listener for form submission
patientForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;

    // Create a new row for the table
    const newRow = document.createElement('tr');
    newRow.classList.add('patient-row');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${contact}</td>
        <td>${email}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Append the new row to the table
    patientTable.appendChild(newRow);

    // Reset the form
    patientForm.reset();

    // Add fade-in effect for the new row
    setTimeout(() => {
        newRow.classList.add('show');
    }, 100);
});

// Event delegation for delete buttons
patientTable.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        patientTable.removeChild(row);
    }
});
