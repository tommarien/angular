// main.js
var userService = require('./userService');
var $ = require('jquery');

var users = userService.getAll();
users.forEach(function (user) {
    $('#list').append('<li>' + user.name + '</li>');
});