var ClickCounterViewModel = function() {
    this.numberOfClicks = ko.observable(0);
    this.result = ko.observable(0);

    this.registerClick = function() {
        this.numberOfClicks(this.numberOfClicks() + 1);
    };

    this.clickEight = function() {
        this.enterNumber(8);
    };

    this.enterNumber = function(digit) {
        this.result(this.result() * 10 + digit);
    };

    this.resetClicks = function() {
        this.numberOfClicks(0);
    };
 
    this.hasClickedTooManyTimes = ko.computed(function() {
        return this.numberOfClicks() >= 3;
    }, this);
};

ko.applyBindings(new ClickCounterViewModel());
