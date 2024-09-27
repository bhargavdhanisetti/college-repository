const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (In a real application, you would fetch this from a database)
const studentProfile = {
    name: "John Doe",
    photo: "https://example.com/photo.jpg", // Replace with an actual URL
    email: "john.doe@example.com",
    phone: "123-456-7890",
    courses: [
        { name: "Introduction to Biology" },
        { name: "Data Structures" },
    ],
    grades: [
        { course: "Introduction to Biology", grade: "A" },
        { course: "Data Structures", grade: "B+" },
    ],
    attendance: 95,
};

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.get('/api/student/profile', (req, res) => {
    res.json(studentProfile);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
