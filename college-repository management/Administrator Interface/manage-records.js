document.addEventListener('DOMContentLoaded', () => {
    fetchRecords();
    document.getElementById('record-form').addEventListener('submit', handleSubmit);
});

async function fetchRecords() {
    try {
        const response = await fetch('/api/admin/records');
        const records = await response.json();
        const recordsBody = document.getElementById('records-body');
        recordsBody.innerHTML = '';

        records.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.role}</td>
                <td>${record.name}</td>
                <td>${record.email}</td>
                <td>${record.phone}</td>
                <td>
                    <button onclick="editRecord('${record.id}')">Edit</button>
                    <button onclick="deleteRecord('${record.id}')">Delete</button>
                </td>
            `;
            recordsBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching records:', error);
    }
}

async function handleSubmit(e) {
    e.preventDefault();

    const role = document.getElementById('role').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const response = await fetch('/api/admin/records', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role, name, email, phone }),
    });

    const data = await response.json();
    document.getElementById('message').innerText = data.message;
    fetchRecords();
}

async function deleteRecord(id) {
    const response = await fetch(`/api/admin/records/${id}`, {
        method: 'DELETE',
    });

    const data = await response.json();
    document.getElementById('message').innerText = data.message;
    fetchRecords();
}

function editRecord(id) {
    // Logic to populate the form for editing
    // For simplicity, this example does not implement the edit function.
}
