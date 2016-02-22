// simple user service
function userService() {
    this.getById = function (id) {
        return {id: 123, name: 'peter'};
    };

    this.getAll = function () {
        return [
            {id: 123, name: 'peter'},
            {id: 222, name: 'robbert'}
        ];
    };
}

// expose userService to other modules
module.exports = new userService();