describe('user model', function () {

    var UserModel;

    beforeEach(module('myApp'));

    beforeEach(function () {
        angular.mock.inject(function (_UserModel_) {
            UserModel = _UserModel_;
        })
    });

    describe('isNew', function () {
        var user;

        beforeEach(function () {
            user = new UserModel();
        });

        it('returns true when id is undefined', function () {
            expect(user.isNew()).to.be.true;
        });

        it('returns false when id is set', function () {
            user.id = 'kjsdkslj==';

            expect(user.isNew()).to.be.false;
        });
    });

    describe('fullAddress', function () {
        beforeEach(function () {
            user = new UserModel({
                address: 'address',
                city: 'city',
                zip: 'zip'
            });
        });

        it('returns address, zip, city concatenated', function () {
            expect(user.fullAddress()).to.equal('address zip city');
        });
    });
});
