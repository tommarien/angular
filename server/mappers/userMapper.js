module.exports = {
    map: function map(user){
        var userResource = {
            id: user._id,
            name: `${user.firstName} ${user.lastName}`,
            age: user.age,
            email: user.email,
            image: user.image,
            address: user.homeAddress.addressLine,
            city: user.homeAddress.city,
            zip: user.homeAddress.zip
        }
        return userResource;
    }
}
