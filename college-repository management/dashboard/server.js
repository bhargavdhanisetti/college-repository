// Sample data for demonstration
const enrollmentTrends = {
    years: ['2021', '2022', '2023'],
    enrollmentNumbers: [200, 250, 300]
};

const facultyLoads = {
    facultyNames: ['Alice Smith', 'Bob Johnson'],
    courseLoads: [3, 4]
};

// Endpoint to get enrollment trends
app.get('/api/admin/enrollment-trends', (req, res) => {
    res.json(enrollmentTrends);
});

// Endpoint to get faculty course loads
app.get('/api/admin/faculty-loads', (req, res) => {
    res.json(facultyLoads);
});
