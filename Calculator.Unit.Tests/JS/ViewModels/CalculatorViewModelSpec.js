describe("CalculatorViewModel", function () {
    var viewModel;
    

    beforeEach(function () {
        viewModel = new CalculatorViewModel();
    });

    it("should be zero when created", function () {
        expect(viewModel.result()).toEqual(0);
    });

    describe("when entering a number", function () {
        beforeEach(function () {
            
        });

        it("entering 0 should show 0", function () {
            viewModel.enterNumber(0);
            expect(viewModel.result()).toEqual(0);
        });


        it("entering 1 should show 1", function () {
            viewModel.enterNumber(1);
            expect(viewModel.result()).toEqual(1);
        });


        it("entering 2 should show 2", function () {
            viewModel.enterNumber(2);
            expect(viewModel.result()).toEqual(2);
        });


        it("entering 3 should show 3", function () {
            viewModel.enterNumber(3);
            expect(viewModel.result()).toEqual(3);
        });


        it("entering 4 should show 4", function () {
            viewModel.enterNumber(4);
            expect(viewModel.result()).toEqual(4);
        });


        it("entering 5 should show 5", function () {
            viewModel.enterNumber(5);
            expect(viewModel.result()).toEqual(5);
        });


        it("entering 6 should show 6", function () {
            viewModel.enterNumber(6);
            expect(viewModel.result()).toEqual(6);
        });

        it("entering 7 should show 7", function () {
            viewModel.enterNumber(7);
            expect(viewModel.result()).toEqual(7);
        });

        it("entering 8 should show 8", function () {
            viewModel.enterNumber(8);
            expect(viewModel.result()).toEqual(8);
        });

        it("entering 9 should show 9", function () {
            viewModel.enterNumber(9);
            expect(viewModel.result()).toEqual(9);
        });

        it("entering 0 1 2 3 4 5 6 7 8 9 0 should show 1234567890", function () {
            viewModel.enterNumber(1);
            viewModel.enterNumber(2);
            viewModel.enterNumber(3);
            viewModel.enterNumber(4);
            viewModel.enterNumber(5);
            viewModel.enterNumber(6);
            viewModel.enterNumber(7);
            viewModel.enterNumber(8);
            viewModel.enterNumber(9);
            viewModel.enterNumber(0);
            expect(viewModel.result()).toEqual(1234567890);
        });
        
        it("entering 12 should throw exception because it is not a single digit", function () {
            expect(function () { viewModel.enterNumber(12); }).toThrow("must be a single digit");
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