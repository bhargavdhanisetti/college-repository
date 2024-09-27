const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample users for demonstration (In a real application, this would be a database query)
const users = {
    student: { username: 'student', password: 'student123' },
    faculty: { username: 'faculty', password: 'faculty123' },
    admin: { username: 'admin', password: 'admin123' },
};

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password, role } = req.body;

    const user = users[role];
    
    if (user && user.username === username && user.password === password) {
        return res.json({ success: true });
    } else {
        return res.json({ success: false, message: 'Incorrect credentials' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
