var faker = require('faker');
var User = require('../models/user');

module.exports = {
    fillDb: function fillDb(){
        var data = [];
        for(var i = 0; i < 100; i++) {

            var firstName, imageUrl;
            var random = faker.Helpers.randomNumber(2);
            console.log(random);
            if (random === 1) {
                firstName = faker.Name.firstNameFemale();
                imageUrl = `http://api.randomuser.me/portraits/women/${faker.Helpers.randomNumber(100)}.jpg`;
            }
            else {
                firstName = faker.Name.firstNameMale();
                imageUrl = `http://api.randomuser.me/portraits/men/${faker.Helpers.randomNumber(100)}.jpg`;
            }
            data.push({
                firstName: firstName,
                lastName: faker.Name.lastName(),
                age: faker.Helpers.randomNumber(100),
                email: faker.Internet.email(),
                image: imageUrl,
                homeAddress: {
                    addressLine: faker.Address.streetAddress(),
                    city: faker.Address.city(),
                    zip: faker.Address.zipCode()
                }
            });
        }
        User.collection.insert(data, function(err){
            if(err){
                console.log("error: " + err);
            }
            console.log("Data inserted");
        });
    }
};
