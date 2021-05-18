const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-login').value;
    const password = document.getElementById('login-pw').value;

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ })
        })
    }
}