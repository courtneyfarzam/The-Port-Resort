const { text } = require("express");

const createPort = async (event) => {
    event.preventDefualt();

    const full_name = document.querySelector('input[name="full_name"]').value;
    const job_title = document.querySelector('input[name="job_title"]').value;
    const about = document.querySelector('input[name="about"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const country = document.querySelector('input[name="country"]').value;
    const city = document.querySelector('input[name="city"]').value;
    const linkedin = document.querySelector('input[name="linkedin"]').value;
    const github = document.querySelector('input[name="github"]').value;
    const school = document.querySelector('input[name="school"]').value;
    const course = document.querySelector('input[name="course"]').value;
    const graduation_date = document.querySelector('input[name="graduation_date"]').value;
    const role = document.querySelector('input[name="role"]').value;
    const company = document.querySelector('input[name="company"]').value;
    const location = document.querySelector('input[name="location"]').value;
    const job_starting = document.querySelector('input[name="job_starting"]').value;
    const job_ending = document.querySelector('input[name="job_ending"]').value;
    const job_description = document.querySelector('input[name="job_description"]').value;
    const project_name = document.querySelector('input[name="project_name"]').value;
    const repository = document.querySelector('input[name="respository"]').value;
    const project_description = document.querySelector('input[name="project_description"]').value;

    const response = await fetch('/api/profile', {
        method: 'POST',
        body: JSON.stringify({
            full_name,
            job_title,
            about,
            phone,
            country,
            city,
            linkedin,
            github,
            school,
            course,
            graduation_date,
            role,
            company,
            location,
            job_starting,
            job_ending,
            job_description,
            project_name,
            repository,
            project_description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok){
        document.location.replace('/portfolio');
    } else {
        alert(response.status.text);
    }
}
document.querySelector('.create-about-form').addEventListener('submit', createPort)
document.querySelector('.create-education-form').addEventListener('submit', createPort)
document.querySelector('.create-work-form').addEventListener('submit', createPort)
document.querySelector('.create-project-form').addEventListener('submit', createPort)