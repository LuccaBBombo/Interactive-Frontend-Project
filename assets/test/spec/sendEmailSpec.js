describe("sendMail", function() {

    beforeEach(function() { spyOn(window, 'alert');
        let sendmail = new sendMail();
    });
    describe("sendMail tests", function() {
        it("should exist", function() {
            expect(sendMail).toBeDefined();
        });
    });
    it("should return Your message has been sent ", function() {
        let result = sendMail("Sent");
        expect(window.alert).toHaveBeenCalledWith('Your message has been sent');
    });
    it("should return Message was not sent", function() {
        let result = sendMail("Error");
         expect(window.alert).toHaveBeenCalledWith("Your message has not been sent");
    });
});





