document.getElementById('update-profile-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const officeHours = document.getElementById('office-hours').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const response = await fetch('/api/faculty/update-profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ officeHours, email, phone }),
    });

    const data = await response.json();

    if (data.success) {
        document.getElementById('success-message').innerText = 'Profile updated successfully!';
        document.getElementById('error-message').innerText = '';
    } else {
        document.getElementById('error-message').innerText = data.message;
        document.getElementById('success-message').innerText = '';
    }
});
