document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Fetch JWT Token
        fetch('https://e39e-182-0-201-143.ngrok-free.app/api/Auth/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('jwtToken', data.token); // Store token
                window.location.href = 'dashboard.html'; // Redirect to dashboard
            } else {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Login failed!';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
