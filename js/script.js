document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlist-form');
    const responseEl = document.getElementById('form-response');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = document.getElementById('email-input');
        const email = emailInput.value;

        if (email) {
            // In a real application, you would send this email to your server
            // For this demo, we'll just simulate a success message.
            console.log('Waitlist signup:', email);

            responseEl.textContent = 'Thank you! You have been added to the waitlist.';
            responseEl.style.color = '#2ecc71';
            emailInput.value = '';

            // You could add code here to post to a serverless function, a Google Sheet, etc.
            // Example using fetch:
            /*
            fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                responseEl.textContent = 'Thank you! You have been added to the waitlist.';
                responseEl.style.color = '#2ecc71';
            })
            .catch(error => {
                responseEl.textContent = 'Something went wrong. Please try again.';
                responseEl.style.color = '#e74c3c';
            });
            */
        }
    });
});
