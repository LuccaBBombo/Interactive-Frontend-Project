describe("sendMail function", function() {

    beforeEach(function() {
        let sendmail = new sendMail();
    });
    describe("sendMail tests", function() {
        it("should exist", function() {
            expect(sendMail).toBeDefined();
        });
    });
    it("should return Your message has been sent ", function() {
        let result = sendMail("Sent");
        expect(result).toBe("Your message has been sent successfully");
    });
    it("should return Message was not sent", function() {
        let result = sendMail("Error");
        expect(result).toBe("Message was not sent");
    });
});