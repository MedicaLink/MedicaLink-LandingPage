function sendMail(){
let parms = {
    name : document.getElementById("name").value, 
    email : document.getElementById("email").value,
    phone : document.getElementById("phone").value,
    message : document.getElementById("message").value,
}
emailjs.send("service_xbpfvvr","template_arhnh7m",parms).then(alert("Message Sent!"))
}