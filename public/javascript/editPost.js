const editPost = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const job_title = document.querySelector('input[name="job_title"]').value;
    const about = document.querySelector('input[name="about"]').value;
    const github = document.querySelector('input[name="github"]').value;
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            job_title,
            about,
            github
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