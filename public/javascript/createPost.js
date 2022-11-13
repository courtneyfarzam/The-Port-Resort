const createPost = async (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const job_title = document.querySelector('input[name="job_title"]').value;
    const about = document.querySelector('input[name="about"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            name,
            job_title,
            about
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