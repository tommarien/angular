var userService = require('./userService');
var users = userService.getAll();
users.forEach(function (user) {
    console.log(user.id, user.name);
});