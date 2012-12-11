describe("Calculator", function() {
    var calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it("Should display zero when created", function() {
        expect(calculator.display()).toEqual(0);
    });

    describe("1 + 2 + 3 =", function() {
        it("should show 6", function () {
            calculator.one();
            calculator.add();
            calculator.two();
            calculator.add();
            calculator.three();
            calculator.equals();

            expect(calculator.display()).toEqual(6);
        });
    });

    describe("1 + 2 +", function() {
        it("should show 3", function () {
            calculator.one();
            calculator.add();
            calculator.two();
            calculator.add();

            expect(calculator.display()).toEqual(3);
        });

    });

    describe("1 + 2 =", function () {
        it("should show 3", function () {
            calculator.one();
            calculator.add();
            calculator.two();
            calculator.equals();

            expect(calculator.display()).toEqual(3);
        });

    });
    

});