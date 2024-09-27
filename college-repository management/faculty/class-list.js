document.addEventListener('DOMContentLoaded', () => {
    fetchClassList();
});

async function fetchClassList() {
    try {
        const response = await fetch('/api/faculty/class-list');
        const students = await response.json();

        const studentList = document.getElementById('student-list');
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${student.photo}" alt="${student.name}" width="50"></td>
                <td>${student.name}</td>
                <td><a href="mailto:${student.email}">${student.email}</a></td>
                <td><a href="tel:${student.phone}">${student.phone}</a></td>
            `;
            studentList.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching class list:', error);
    }
}
