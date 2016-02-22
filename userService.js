// userService.js

class UserService {
    constructor() {
    };

    getById(id) {
        return {id: 123, name: 'peter'}
    };

    getAll() {
        return [
            {id: 123, name: 'peter'},
            {id: 222, name: 'robbert'},
            {id: 222, name: 'jan'}
        ]
    };
}

export default new UserService();