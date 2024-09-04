// script.js
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const loginPage = document.getElementById('login-page');
    const progressBar = document.querySelector('.progress');

    // Start filling the progress bar over 2 seconds
    progressBar.style.width = '100%';

    // Simulate a delay (2 seconds)
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        splashScreen.addEventListener('transitionend', () => {
            splashScreen.style.display = 'none';
            loginPage.classList.remove('hidden');
            loginPage.style.opacity = '1';
        });
    }, 2000); // 2 second delay before transitioning to login
});

// Form validation and redirection
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    }
});
