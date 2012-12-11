var CalculatorViewModel = function(calculator) {
    var self = this;
    self.calculator = calculator;
    self.result = ko.observable(0);
    
    self.propertyChanged = ko.observable(1);
    self.calculator.displayChanged(
        function() {
            self.updateResult();
        });

    self.updateResult = function() {
        self.result(self.calculator.display());
    };

  
    self.clickNine = function() {
        self.calculator.nine();
    };

    self.clickEight = function () {
        self.calculator.eight();
    };

    self.clickSeven = function () {
        self.calculator.seven();
    };

    self.clickSix = function () {
        self.calculator.six();
    };

    self.clickFive = function () {
        self.calculator.five();
    };

    self.clickFour = function () {
        self.calculator.four();
    };

    self.clickThree = function () {
        self.calculator.three();
    };

    self.clickTwo = function () {
        self.calculator.two();
    };

    self.clickOne = function () {
        self.calculator.one();
        
    };

    self.clickZero = function () {
        self.calculator.zero();
    };

    self.clickAdd = function () {
        self.calculator.add();
    };

    self.clickSubtract = function () {
        self.calculator.subtract();
    };

    self.clickEquals = function () {
        self.calculator.equals();
    };

    self.resetClicks = function() {
        self.numberOfClicks(0);
    };
};

ko.applyBindings(new CalculatorViewModel(new Calculator()));
