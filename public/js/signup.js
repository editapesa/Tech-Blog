const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-signup').value;
    const password = document.getElementById('signup-pw').value;

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Unable to sign up.')
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
}