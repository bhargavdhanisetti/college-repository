document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

async function fetchData() {
    try {
        const enrollmentResponse = await fetch('/api/admin/enrollment-trends');
        const enrollmentData = await enrollmentResponse.json();

        const facultyResponse = await fetch('/api/admin/faculty-loads');
        const facultyData = await facultyResponse.json();

        renderEnrollmentChart(enrollmentData);
        renderFacultyChart(facultyData);
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
    }
}

function renderEnrollmentChart(data) {
    const ctx = document.getElementById('enrollmentChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.years,
            datasets: [{
                label: 'Student Enrollment',
                data: data.enrollmentNumbers,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function renderFacultyChart(data) {
    const ctx = document.getElementById('facultyChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.facultyNames,
            datasets: [{
               
