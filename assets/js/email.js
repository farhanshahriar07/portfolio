async function sendEmail() {
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('text').value;
    const senderEmail = document.getElementById('senderEmail').value;
    const senderName = document.getElementById('senderName').value;

    const data = { subject, text, senderEmail, senderName };

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
