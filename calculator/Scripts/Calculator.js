var Calculator = function() {
    var self = this;
    self.display = 0;
    self.result = 0;
    self.first = 0;
    self.second = 0;
    self.operation = null;
    self.callbacks = [];

    self.display = function() {
        return self.result;
    };

    self.displayChanged = function(fn) {
        self.callbacks.push(fn);
    };

    self.zero = function() {
        self.enterNumber(0);
    };

    self.one = function() {
        self.enterNumber(1);
    };

    self.two = function() {
        self.enterNumber(2);
    };

    self.three = function() {
        self.enterNumber(3);
    };

    self.four = function() {
        self.enterNumber(4);
    };

    self.five = function() {
        self.enterNumber(5);
    };

    self.six = function() {
        self.enterNumber(6);
    };

    self.seven = function() {
        self.enterNumber(7);
    };

    self.eight = function() {
        self.enterNumber(8);
    };

    self.nine = function() {
        self.enterNumber(9);
    };
    
    self.displayHasChanged = function () {
        for(var i=0;i<self.callbacks.length;i++) {
            self.callbacks[i]();
        }
    };

    self.add = function() {
        if (self.operation === "+") {
            var calc = self.result + self.first;
            self.first = calc;
            self.result = calc;
        } else {
            self.first = self.result;
            self.result = 0;
        }

        self.operation = "+";
        self.last = '+';
        self.displayHasChanged();
    };

    self.equals = function() {
        self.second = self.result;
        if (self.operation === "+") {
            self.result = self.first + self.second;
            self.first = null;
            self.second = null;
            self.operation = null;
        }
        self.last = '=';
        self.displayHasChanged();
    };

    self.enterNumber = function(digit) {
        if (self.last === '+') {
            self.result = 0;
        }

        var allowed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (allowed.indexOf(digit) < 0) {
            throw "must be a single digit";
        }
        self.result = self.result * 10 + digit;
        self.last = digit;
        self.displayHasChanged();

    };

    

}