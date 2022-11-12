const signup = async (event) => {
    event.preventDefault();

    const fullName = document.querySelector('#full-name-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (fullName && email && password && github) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                fullName,
                github,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signup)