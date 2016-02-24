(function () {
})(
    angular.module('myApp')
        .factory('UserModel', ['$modelFactory', function ($modelFactory) {
            return $modelFactory('api/users', {
                queryPaged: function (page, pageSize) {
                    return this.query({
                        page,
                        pageSize
                    })
                }
            });
        }])
);