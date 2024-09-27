document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validate inputs (optional additional client-side validation)
    if (!username || !password || !role) {
        document.getElementById('error-message').innerText = "Please fill all fields.";
        return;
    }

    // Send login request to the server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, role })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect based on role
            switch (role) {
                case 'student':
                    window.location.href = '/student-dashboard';
                    break;
                case 'faculty':
                    window.location.href = '/faculty-dashboard';
                    break;
                case 'administrator':
                    window.location.href = '/admin-dashboard';
                    break;
            }
        } else {
            document.getElementById('error-message').innerText = data.message || "Login failed.";
        }
    })
    .catch(error => {
        document.getElementById('error-message').innerText = "An error occurred. Please try again.";
    });
});
