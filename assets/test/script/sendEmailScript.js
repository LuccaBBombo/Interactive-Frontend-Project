sendMail = function(message) {
    
    if(message === "Sent") {
        return "Your message has been sent";
    }
    else if(message === "Error") {
        return "Message was not sent";
    }
};