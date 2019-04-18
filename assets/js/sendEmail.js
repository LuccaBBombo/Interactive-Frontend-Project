function sendMail(contactForm) {
    emailjs.send("gmail", "interactive_front_end", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "email_content": contactForm.emailcontent.value
        })
        .then(
            function(response) {
                console.log("Sent", response);
            },
            function(error) {
                console.log("Error", error);
            }

        );

}
