var CalculatorViewModel = function() {
    this.numberOfClicks = ko.observable(0);
    this.result = ko.observable(0);
    this.first = ko.observable(null);
    this.second = ko.observable(null);
    this.operation = ko.observable(null);
    
    this.registerClick = function() {
        this.numberOfClicks(this.numberOfClicks() + 1);
    };

    this.clickNine = function() {
        this.enterNumber(9);
    };

    this.clickEight = function () {
        this.enterNumber(8);
    };

    this.clickSeven = function () {
        this.enterNumber(7);
    };

    this.clickSix = function () {
        this.enterNumber(6);
    };

    this.clickFive = function () {
        this.enterNumber(5);
    };

    this.clickFour = function () {
        this.enterNumber(4);
    };

    this.clickThree = function () {
        this.enterNumber(3);
    };

    this.clickTwo = function () {
        this.enterNumber(2);
    };

    this.clickOne = function () {
        this.enterNumber(1);
    };

    this.clickZero = function () {
        this.enterNumber(0);
    };

    this.clickAdd = function () {
        if (this.operation === "+") {
            this.first(this.first() + this.result());
        } else {
            this.first(this.result());
        }
        this.result(0);
        this.operation = "+";
    };

    this.clickEquals = function () {
        this.second(this.result());
        if (this.operation === "+") {
            this.result(this.first() + this.second());
            this.first = null;
            this.second = null;
            this.operation = null;
        }
    };

    this.enterNumber = function(digit) {
        var allowed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (allowed.indexOf(digit) < 0) {
            throw "must be a single digit";
        }
        this.result(this.result() * 10 + digit);
    };

    this.resetClicks = function() {
        this.numberOfClicks(0);
    };
 
    this.hasClickedTooManyTimes = ko.computed(function() {
        return this.numberOfClicks() >= 3;
    }, this);
};

ko.applyBindings(new CalculatorViewModel());
