function sendMail(contactForm) {
   
    emailjs.send("gmail", "interactive_front_end", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "email_content": contactForm.emailcontent.value
        })
        .then(
            function(response) {
                console.log("Sent", response);
                
                alert("Your message has been sent successfully");
                document.getElementById('form').reset();
            },
            function(error) {
                console.log("Error", error);
                
                alert("Message was not sent");
                document.getElementById('form').reset();
            }

        );
// Blocks from loading a new page
     return false; 
}
