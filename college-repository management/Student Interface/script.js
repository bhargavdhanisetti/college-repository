document.addEventListener('DOMContentLoaded', () => {
    fetchProfileData();
});

async function fetchProfileData() {
    try {
        const response = await fetch('/api/student/profile');
        const data = await response.json();

        document.getElementById('student-name').innerText = data.name;
        document.getElementById('profile-photo').src = data.photo;
        document.getElementById('student-email').href = `mailto:${data.email}`;
        document.getElementById('student-email').innerText = data.email;
        document.getElementById('student-phone').href = `tel:${data.phone}`;
        document.getElementById('student-phone').innerText = data.phone;

        const courseList = document.getElementById('course-list');
        data.courses.forEach(course => {
            const li = document.createElement('li');
            li.innerText = course.name;
            courseList.appendChild(li);
        });

        const gradeList = document.getElementById('grade-list');
        data.grades.forEach(grade => {
            const li = document.createElement('li');
            li.innerText = `${grade.course}: ${grade.grade}`;
            gradeList.appendChild(li);
        });

        document.getElementById('attendance-info').innerText = `Overall Attendance: ${data.attendance}%`;

    } catch (error) {
        console.error('Error fetching profile data:', error);
    }
}
