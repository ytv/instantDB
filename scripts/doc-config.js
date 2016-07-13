var faker = require('faker');

module.exports = {
    generateUser: function() {
        return {
            name: faker.name.findName(),
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(),
            phone: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            username: faker.internet.userName(),
            img: faker.image.imageUrl()
        }
    },

    generatePost: function() {
        return {
            username: faker.internet.userName(),
            date: faker.date.recent(),
            img: faker.image.imageUrl(),
            comment: faker.lorem.paragraph()
        }
    }
}
