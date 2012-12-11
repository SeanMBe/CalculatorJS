/// <reference path="../../../calculator/scripts/knockout-2.2.0.js" />
/// <reference path="../../../calculator/scripts/Calculator.js" />
/// <reference path="../../../calculator/scripts/CalculatorViewModel.js" />


describe("CalculatorViewModel", function () {
    var viewModel;
    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
        viewModel = new CalculatorViewModel(calculator);
    });

    it("should be zero when created", function () {
        expect(viewModel.result()).toEqual(0);
    });

    describe("when entering a number", function () {
        beforeEach(function () {
            
        });

        it("entering 0 should show 0", function () {
            viewModel.clickZero();
            expect(viewModel.result()).toEqual(0);
        });


        it("entering 1 should show 1", function () {
            viewModel.clickOne();
            expect(viewModel.result()).toEqual(1);
        });


        it("entering 2 should show 2", function () {
            viewModel.clickTwo();
            expect(viewModel.result()).toEqual(2);
        });


        it("entering 3 should show 3", function () {
            viewModel.clickThree();
            expect(viewModel.result()).toEqual(3);
        });


        it("entering 4 should show 4", function () {
            viewModel.clickFour();
            expect(viewModel.result()).toEqual(4);
        });


        it("entering 5 should show 5", function () {
            viewModel.clickFive();
            expect(viewModel.result()).toEqual(5);
        });


        it("entering 6 should show 6", function () {
            viewModel.clickSix();
            expect(viewModel.result()).toEqual(6);
        });

        it("entering 7 should show 7", function () {
            viewModel.clickSeven();
            expect(viewModel.result()).toEqual(7);
        });

        it("entering 8 should show 8", function () {
            viewModel.clickEight();
            expect(viewModel.result()).toEqual(8);
        });

        it("entering 9 should show 9", function () {
            viewModel.clickNine();
            expect(viewModel.result()).toEqual(9);
        });


        it("subtract handler should call calcualator subtract", function () {
            spyOn(calculator, 'subtract');
            viewModel.clickSubtract();
            expect(calculator.subtract).toHaveBeenCalled();
        });

        it("entering 1 2 3 should show 123", function () {
            viewModel.clickOne();
            viewModel.clickTwo();
            viewModel.clickThree();
            expect(viewModel.result()).toEqual(123);
        });
        
    });

    //// demonstrates use of spies to intercept and test method calls
    //it("tells the current song if the user has made it a favorite", function () {
    //    spyOn(song, 'persistFavoriteStatus');

    //    player.play(song);
    //    player.makeFavorite();

    //    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    //});

    ////demonstrates use of expected exceptions
    //describe("#resume", function () {
    //    it("should throw an exception if song is already playing", function () {
    //        player.play(song);

    //        expect(function () {
    //            player.resume();
    //        }).toThrow("song is already playing");
    //    });
    //});
});