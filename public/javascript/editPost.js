const editPost = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const job_title = document.querySelector('input[name="job_title"]').value;
    const about = document.querySelector('input[name="about"]').value;
    const project_name = document.querySelector('input[name="project_name"]').value;
    const project_desc = document.querySelector('input[name="project_desc"]').value;
    const school_name = document.querySelector('input[name="school_name"]').value;
    const graduation = document.querySelector('input[name="graduation"]').value;
    const degree = document.querySelector('input[name="degree"]').value;
    const workExp = document.querySelector('input[name="workExp"]').value;
    const empDate = document.querySelector('input[name="empDate"]').value;
    const jobDesc = document.querySelector('input[name="jobDesc"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const github = document.querySelector('input[name="github"]').value;
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            job_title,
            about,
            project_name,
            project_desc,
            school_name,
            graduation,
            degree,
            workExp,
            empDate,
            jobDesc,
            phone,
            email,
            github,
            
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

document.querySelector('.edit-post').addEventListener('submit', editPost);