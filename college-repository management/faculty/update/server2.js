// Endpoint to update profile
app.post('/api/faculty/update-profile', (req, res) => {
    const { officeHours, email, phone } = req.body;

    // Update logic here (save to database)
    // For demonstration, just log the received data
    console.log('Updated Profile:', { officeHours, email, phone });

    // Assume the update is successful
    res.json({ success: true });
});
