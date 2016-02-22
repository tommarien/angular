// main.js
import userService from './userService';
import $ from 'jquery';

const users = userService.getAll();

users.forEach(function (user) {
    $('#list').append('<li>' + user.name + '</li>');
});