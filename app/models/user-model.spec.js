describe('user model', function () {

    var UserModel;
    var $httpBackend;

    beforeEach(module('myApp'));

    beforeEach(function () {
        angular.mock.inject(function (_UserModel_, _$httpBackend_) {
            UserModel = _UserModel_;
            $httpBackend = _$httpBackend_;
        });
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

    describe('query after request', function () {

        var reply;

        beforeEach(function () {
            reply = {
                total: 100,
                users: [{id: 1, name: 'name1'}]
            };

            $httpBackend
                .when('GET', function () {
                    return true;
                })
                .respond(reply);
        });

        it('adds total to the data', function () {
            UserModel.query()
                .then(function (data) {
                    expect(data.total).to.equal(100);
                });

            $httpBackend.flush();
        });

    });
});
