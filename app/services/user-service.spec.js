describe('userService', function () {

    var userService;
    var $httpBackend;
    var users = [];

    beforeEach(module('myApp'));

    beforeEach(function () {
        angular.mock.inject(function (_userService_, _$httpBackend_) {
            userService = _userService_; // _ name _ trick to have same name injected
            $httpBackend = _$httpBackend_;
        })
    });

    afterEach(function () {
        $httpBackend.flush()
    });

    beforeEach(function () {
        $httpBackend
            .when('GET', function () {
                return true;
            })
            .respond(users);
    });

    it('it performs a get request to api/users', function () {

        act(0, 10);

        $httpBackend.expectGET('api/users?page=0&pageSize=10');
    });

    it('it returns the users', function () {

        act(0, 10)
            .then(function (resources) {
                expect(resources).to.eql(users);
            });
    });

    function act(page, pageSize) {
        return userService.getUsers(page, pageSize);
    }

});
