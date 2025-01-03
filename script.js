// function sendMail(){
// let parms = {
//     name : document.getElementById("name").value, 
//     email : document.getElementById("email").value,
//     phone : document.getElementById("phone").value,
//     message : document.getElementById("message").value,
// }
// emailjs.send("service_xbpfvvr","template_arhnh7m");
// // emailjs.send("service_xbpfvvr","template_arhnh7m",parms).then(alert("Message Sent!"))
// }

emailjs.init("YOUR_USER_ID"); // Initialize EmailJS

function sendMail() {
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };
  
    // Replace these with your EmailJS service and template IDs
    const serviceID = "service_xbpfvvr";
    const templateID = "template_arhnh7m";
  
    emailjs.send("service_xbpfvvr", "template_arhnh7m", parms)
      .then(function (response) {
        alert("Message Sent Successfully!");
        console.log("SUCCESS!", response.status, response.text);
  
        // Optionally clear the form fields after sending
        document.getElementById("contact-form").reset();
      }, function (error) {
        alert("Failed to Send Message. Please try again later.");
        console.error("FAILED...", error);
      });
  }