var typed = new Typed(".text", {
    strings: ["Web Developer", "Mobile App Developer", "Desktop App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("msg").value,
    };
  
    const serviceID = "service_mbfbdl5";
    const templateID = "template_u3ja01p";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("msg").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error sending your message. Please try again later.");
    });
    
  
  }