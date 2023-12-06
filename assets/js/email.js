async function sendEmail() {
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('text').value;

    const data = { to, subject, text };
    console.log(data)

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        alert(result.message); // Display the result message
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again.');
    }
}