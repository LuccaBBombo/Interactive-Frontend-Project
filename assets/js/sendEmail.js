function sendMail(contactForm) {
   
    emailjs.send("gmail", "interactive_front_end", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "email_content": contactForm.emailcontent.value
        })
        .then(
            function(response) {
                alert("Your message has been sent");
                
                document.getElementById("contact-form").reset();
            },
            function(error) {
                alert("Message has not been sent");
                
                document.getElementById("contact-form").reset();
            }

        );
    //blocks from loading a new page    
 return false;  
}
