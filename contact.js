function sendMail() {
      var templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
      };
      
      emailjs.send('service_xbpfvvr', 'template_arhnh7m', templateParams).then(
        (response) => {
        alert("Success!");
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            alert("Error");
          console.log('FAILED...', error);
        },
      );
  }