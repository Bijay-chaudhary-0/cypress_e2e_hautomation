describe('post user request', () => {
    const web = 'https://gorest.co.in'
    var faker = require('faker')
    var firstname = faker.name.firstName
    var lastname = faker.name.lastName
    var email = faker.internet.email
    var ID
    const accessToken = '756cc20c26596f0b0e30ed33cb5de8fe3278ca56d76ddd21e3095c844192a8a1'
    it('create user', () => {
        cy.request({
            method: 'POST',
            url: web + '/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Sophia Hater",
                "email": "something@gmail.com",
                "status": "active",
                "gender": "female"
            }
        })
            .then((ponse) => {
                cy.log(JSON.stringify(ponse))
                ID = ponse.body.data.id
                expect(ponse.status).to.eq(201)
                expect(ponse.body).has.property('name', "Sophia Hater")
                expect(ponse.body).has.property('email', "something@gmail.com")
                expect(ponse.body).has.property('status', 'active')
                expect(ponse.body).has.property('gender', 'female')
            })
            //update user by using PUT
            .then((ponse) => {
                cy.request({
                    method: 'PUT',
                    url: web + '/public-api/users/' + ID,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    },
                    body: {
                        "name": 'Calcifer',
                        "email": 'homie@email.com',
                        "status": "inactive",
                        "gender": "male"
                    }
                })
                /*  .then((ponse) => {
                     expect(ponse.status).to.eq(200)
                     expect(ponse.body.data).has.property('name', 'Calcifer')
                     expect(ponse.body.data).has.property('email', 'homie@email.com')
                     expect(ponse.body.data).has.property('status', 'inactive')
                     expect(ponse.body.data).has.property('gender', 'male')
                 }) */
            })
    })
})