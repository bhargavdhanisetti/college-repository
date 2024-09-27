// Sample data (in a real application, this should be in a database)
let records = [
    { id: '1', role: 'student', name: 'Alice Smith', email: 'alice@example.com', phone: '123-456-7890' },
    { id: '2', role: 'faculty', name: 'Bob Johnson', email: 'bob@example.com', phone: '098-765-4321' },
];

// Endpoint to get all records
app.get('/api/admin/records', (req, res) => {
    res.json(records);
});

// Endpoint to add/update records
app.post('/api/admin/records', (req, res) => {
    const { role, name, email, phone } = req.body;
    const id = Date.now().toString(); // Use timestamp as a simple unique ID

    records.push({ id, role, name, email, phone });
    res.json({ success: true, message: 'Record added/updated successfully' });
});

// Endpoint to delete a record
app.delete('/api/admin/records/:id', (req, res) => {
    const { id } = req.params;
    records = records.filter(record => record.id !== id);
    res.json({ success: true, message: 'Record deleted successfully' });
});
