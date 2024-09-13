async function sendEmail() {
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('text').value;
    const senderEmail = document.getElementById('senderEmail').value;
    const senderName = document.getElementById('senderName').value;

    // Client-side validation: Check if senderEmail or senderName is missing
    if (!senderEmail || !senderName) {
        if (!senderEmail) {
            alert('Error: Sender email is missing. Please provide a valid email.');
        }
        if (!senderName) {
            alert('Error: Sender name is missing. Please provide a valid name.');
        }
        return; // Exit the function if validation fails
    }

    const data = { subject, text, senderEmail, senderName };
    console.log(data);

    try {
        const response = await fetch('https://express-mail-api.vercel.app/send-email', {
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
