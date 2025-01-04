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

function sendMail(event) { 
// Prevent page refresh
event.preventDefault();

  // Retrieve input values and trim them
  var nameField = document.getElementById("name");
  var emailField = document.getElementById("email");
  var phoneField = document.getElementById("phone");
  var messageField = document.getElementById("message");

  var name = nameField.value.trim();
  var email = emailField.value.trim();
  var phone = phoneField.value.trim();
  var message = messageField.value.trim();

  // Initialize validation flag
  var isValid = true;

  // Validation: Check if all fields are filled
  if (!name) {
      alert("Please enter your name.");
      nameField.value = ""; // Clear the name field
      isValid = false;
  }
  if (!email) {
      alert("Please enter your email.");
      emailField.value = ""; // Clear the email field
      isValid = false;
  }
  if (!phone) {
      alert("Please enter your phone number.");
      phoneField.value = ""; // Clear the phone field
      isValid = false;
  }
  if (!message) {
      alert("Please enter your message.");
      messageField.value = ""; // Clear the message field
      isValid = false;
  }

  // Email Validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      emailField.value = ""; // Clear the email field
      isValid = false;
  }

  // Phone Validation: Must start with 0 and have exactly 10 digits
  var phoneRegex = /^0\d{9}$/;
  if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (starting with 0 and followed by 9 digits).");
      phoneField.value = ""; // Clear the phone field
      isValid = false;
  }

  // Only proceed if all validations pass
  if (isValid) {
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
              alert("Success! We will get back to you shortly.");
              console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
              alert("Error! Please try again later.");
              console.log('FAILED...', error);
          }
      );
  } else {
      console.log("Form submission halted due to validation errors.");
  }
}