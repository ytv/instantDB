var faker = require('faker');

var randomNumber = function(n) {
    return Math.floor(Math.random()*n);
}

var randomEventType = function() {
    var eventType = ['Social', 'Meeting', 'Task'];
    return  eventType[randomNumber(3)];
}

var randomResponse = function() {
    var response = ['Yes', 'No', ''];
    return  response[randomNumber(3)];
}

module.exports = {
    generateData: function() {
        var id = faker.random.number(10);
        return {
            id: id,
            type: randomEventType(),
            name: faker.lorem.words(),
            date: faker.date.future(),
            image: faker.image.image(),
            description: faker.lorem.paragraph(),
            link: id,
            response: randomResponse(),
            guestName: 'Ying',
            extraGuests: randomNumber(2),
            excuse: faker.lorem.sentence()
        }
    }

    /*  SAMPLES FOR generateData():

    **USERS**
    generateData: function() {
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

    **POSTS**
    generateData: function() {
        return {
            username: faker.internet.userName(),
            date: faker.date.recent(),
            img: faker.image.imageUrl(),
            comment: faker.lorem.paragraph()
        }
    },

    **EVENTS**
    generateData: function() {
        var id = faker.random.number(10);
        return {
            id: id,
            type: randomEventType(),
            name: faker.lorem.words(),
            description: faker.lorem.paragraph(),
            link: id,
            response: randomResponse(),
            guestName: 'Ying',
            extraGuests: randomNumber(2),
            excuse: faker.lorem.sentence()
        }
    }
    */
}
