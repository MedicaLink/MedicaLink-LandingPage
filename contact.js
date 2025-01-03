// Initialize EmailJS with your User ID
emailjs.init('osUPKzCryHswJyJSF'); // Replace 'your_user_id' with your EmailJS User ID

// Handle Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Send email to admin
  emailjs.send('service_xbpfvvr', 'template_arhnh7m', {
    from_name: name,
    reply_to: email,
    phone: phone,
    message: message,
  }).then(
    function (response) {
      console.log('Admin email sent successfully', response.status, response.text);
    },
    function (error) {
      console.log('Failed to send admin email', error);
    }
  );

  // Send auto-reply to user
  emailjs.send('service_xbpfvvr', 'template_q5abtbf', {
    to_email: email,
    from_name: name,
  }).then(
    function (response) {
      console.log('Auto-reply email sent successfully', response.status, response.text);
    },
    function (error) {
      console.log('Failed to send auto-reply email', error);
    }
  );

  // Reset the form
  document.getElementById('contact-form').reset();
});
