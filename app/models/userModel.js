(function () {
    angular
        .module('myApp')
        .factory('UserModel', function ($modelFactory) {
            return $modelFactory('/api/users', {

                actions: {
                    query: {
                        afterRequest: function (data) {
                            var users = data.users;
                            users.total = data.total;
                            return users;
                        }
                    }
                },

                instance: {
                    isNew: function () {
                        return (!this.id);
                    },
                    fullAddress: function () {
                        return this.address + ' ' + this.zip + ' ' + this.city;
                    }
                },

                queryPaged: function (page, pageSize) {
                    return this.query({
                        page: page,
                        pageSize: pageSize
                    })
                }

            });
        });
})();
