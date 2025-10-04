document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlist-form');
    const responseEl = document.getElementById('form-response');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = document.getElementById('email-input');
        const email = emailInput.value;

        if (email) {
            // Replace 'YOUR_WEB_APP_URL' with the actual URL of your Google Apps Script Web App
            const webAppUrl = 'YOUR_WEB_APP_URL';

            fetch(webAppUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        responseEl.textContent = 'Thank you! You have been added to the waitlist.';
                        responseEl.style.color = '#2ecc71';
                        emailInput.value = '';
                    } else {
                        throw new Error('Submission failed');
                    }
                })
                .catch(error => {
                    responseEl.textContent = 'Something went wrong. Please try again.';
                    responseEl.style.color = '#e74c3c';
                });
        }
    });
});
