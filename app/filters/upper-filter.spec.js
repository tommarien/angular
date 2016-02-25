describe('upper filter', function () {

    var filter;

    beforeEach(module('myApp'));

    beforeEach(function () {
        angular.mock.inject(function (upperFilter) {
            filter = upperFilter;
        })
    });

    it('it returns the value when undefined', function () {
        var result = filter(undefined);

        expect(result).to.be.undefined;
    });

    it('it returns the value when not a string', function () {
        var result = filter(3);
        expect(result).to.equal(3)
    });

    it('it converts the value to uppercase', function () {
        var result = filter('hello');
        expect(result).to.equal('HELLO');
    });

});
