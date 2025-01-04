// function sendMail() {
//       var templateParams = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       phone: document.getElementById("phone").value,
//       message: document.getElementById("message").value,
//       };
      
//       emailjs.send('service_xbpfvvr', 'template_arhnh7m', templateParams).then(
//         (response) => {
//         alert("Success!");
//           console.log('SUCCESS!', response.status, response.text);
//         },
//         (error) => {
//             alert("Error");
//           console.log('FAILED...', error);
//         },
//       );
//   }



//   function sendMail() { 
//     // Retrieve input values
//     var name = document.getElementById("name").value.trim();
//     var email = document.getElementById("email").value.trim();
//     var phone = document.getElementById("phone").value.trim();
//     var message = document.getElementById("message").value.trim();

//     // Validation: Check if all fields are filled
//     if (!name || !email || !phone || !message) {
//         alert("Please fill in all fields before submitting.");
//         return; // Stop execution if validation fails
//     }

//     // Email Validation
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return; // Stop execution if email is invalid
//     }

//     // Phone Validation: Must start with 0 and have exactly 10 digits
//     var phoneRegex = /^0\d{9}$/;
//     if (!phoneRegex.test(phone)) {
//         alert("Please enter a valid phone number (starting with 0 and followed by 9 digits).");
//         return; // Stop execution if phone is invalid
//     }

//     // Prepare the template parameters
//     var templateParams = {
//         name: name,
//         email: email,
//         phone: phone,
//         message: message,
//     };
    
//     // Send email using emailjs
//     emailjs.send('service_xbpfvvr', 'template_arhnh7m', templateParams).then(
//         (response) => {
//             alert("Success!");
//             console.log('SUCCESS!', response.status, response.text);
//         },
//         (error) => {
//             alert("Error");
//             console.log('FAILED...', error);
//         }
//     );
// }

function sendMail() { 
  // Retrieve input values
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validation: Check if all fields are filled
  if (!name) {
      alert("Please enter your name.");
      return; // Stop execution if the name field is empty
  }
  if (!email) {
      alert("Please enter your email.");
      return; // Stop execution if the email field is empty
  }
  if (!phone) {
      alert("Please enter your phone number.");
      return; // Stop execution if the phone field is empty
  }
  if (!message) {
      alert("Please enter your message.");
      return; // Stop execution if the message field is empty
  }

  // Email Validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return; // Stop execution if email is invalid
  }

  // Phone Validation: Must start with 0 and have exactly 10 digits
  var phoneRegex = /^0\d{9}$/;
  if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (starting with 0 and followed by 9 digits).");
      return; // Stop execution if phone is invalid
  }

  // If all validations pass, prepare template parameters
  var templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
  };

  // Send email using emailjs
  emailjs.send('service_xbpfvvr', 'template_arhnh7m', templateParams)
  .then(
      (response) => {
          alert("Success! Your message has been sent.");
          console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
          alert("Error! Failed to send your message.");
          console.log('FAILED...', error);
      }
  );
}