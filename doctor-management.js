document.addEventListener('DOMContentLoaded', () => {
    const doctorForm = document.getElementById('doctorForm');
    const doctorTableBody = document.querySelector('#doctorTable tbody');

    // Function to update the doctor count in localStorage
    function updateDoctorCount() {
        const count = localStorage.getItem('doctorCount') || 0;
        localStorage.setItem('doctorCount', +count + 1); // Increment doctor count
    }

    // Function to add a new doctor to the table
    function addDoctorToTable(doctor) {
        const row = document.createElement('tr');
        row.classList.add('doctor-row');
        row.innerHTML = `
            <td><img src="${doctor.photoUrl}" alt="Doctor Photo" class="doctor-photo"></td>
            <td>${doctor.name}</td>
            <td>${doctor.specialization}</td>
            <td>${doctor.contact}</td>
            <td>${doctor.email}</td>
            <td>${doctor.availability}</td>
            <td><button class="delete-btn">Remove</button></td>
        `;

        // Add delete functionality
        row.querySelector('.delete-btn').addEventListener('click', () => {
            row.remove();
            let doctorCount = localStorage.getItem('doctorCount') || 0;
            localStorage.setItem('doctorCount', +doctorCount - 1); // Decrement count
            updateDashboardCountDisplay();
        });

        doctorTableBody.appendChild(row);
        updateDoctorCount(); // Update doctor count in localStorage
        updateDashboardCountDisplay(); // Update the dashboard
    }

    // Handle form submission
    doctorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const photoUrl = document.getElementById('photoUrl').value;
        const specialization = document.getElementById('specialization').value;
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;
        const availability = document.getElementById('availability').value;

        const newDoctor = {
            name,
            photoUrl,
            specialization,
            contact,
            email,
            availability
        };

        addDoctorToTable(newDoctor);

        // Reset the form
        doctorForm.reset();
    });

    // Function to update the dashboard count display
    function updateDashboardCountDisplay() {
        const doctorCount = localStorage.getItem('doctorCount') || 0;
        document.getElementById('doctorCount').textContent = doctorCount; // Assuming you have an element to show doctor count
    }

    // Initialize count on page load
    updateDashboardCountDisplay();
});
