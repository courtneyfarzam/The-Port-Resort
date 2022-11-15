const createPost = async (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const job_title = document.querySelector('input[name="job_title"]').value;
    const about = document.querySelector('input[name="about"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const github = document.querySelector('input[name="github"]').value;
    const linkedin = document.querySelector('input[name="linkedin"]').value;
    const role = document.querySelector('input[name="role"]').value;
    const company = document.querySelector('input[name="company"]').value;
    const job_starting = document.querySelector('input[name="job_starting"]').value;
    const job_ending = document.querySelector('input[name="job_ending"]').value;
    const job_desc = document.querySelector('input[name="job_desc"]').value;
    const school_name = document.querySelector('input[name="school_name"]').value;
    const graduation_date = document.querySelector('input[name="graduation_date"]').value;
    const degree = document.querySelector('input[name="degree"]').value;
    const project1_name = document.querySelector('input[name="project1_name"]').value;
    const project1_desc = document.querySelector('input[name="project1_desc"]').value;
    const repository1 = document.querySelector('input[name="repository1"]').value;
    const project2_name = document.querySelector('input[name="project2_name"]').value;
    const project2_desc = document.querySelector('input[name="project2_desc"]').value;
    const repository2 = document.querySelector('input[name="repository2"]').value;
    const project3_name = document.querySelector('input[name="project3_name"]').value;
    const project3_desc = document.querySelector('input[name="project3_desc"]').value;
    const repository3 = document.querySelector('input[name="repository3"]').value;
    
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            name,
            job_title,
            about,
            phone,
            email,
            github,
            linkedin,
            role,
            company,
            job_starting,
            job_ending,
            job_desc,
            school_name,
            graduation_date,
            degree,
            project1_name,
            project1_desc,
            repository1,
            project2_name,
            project2_desc,
            repository2,
            project3_name,
            project3_desc,
            repository3
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.create-form').addEventListener('submit', createPost);