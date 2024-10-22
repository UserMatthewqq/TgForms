document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const token = '7860086065:AAHZWgmuCyBoqS9rukRj5klzznQIqWBj3dQ';
    const chatId = '1027825542'; 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const text = `New message from Velocity Web Studio contact form:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Your message has been sent successfully!');
        document.getElementById('contactForm').reset();
      } else {
        alert('There was an error sending your message.');
      }
    })
    .catch(error => {
      alert('An error occurred. Please try again.');
    });
  });
  