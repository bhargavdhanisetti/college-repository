// Sample data for demonstration (replace with a database query in a real app)
const classList = [
    { name: 'Alice Smith', photo: 'https://example.com/alice.jpg', email: 'alice@example.com', phone: '123-456-7890' },
    { name: 'Bob Johnson', photo: 'https://example.com/bob.jpg', email: 'bob@example.com', phone: '098-765-4321' },
];

// Endpoint to get class list
app.get('/api/faculty/class-list', (req, res) => {
    res.json(classList);
});
