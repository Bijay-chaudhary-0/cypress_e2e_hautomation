describe('post user request', () => {
    var faker = require('faker')
    const name = faker.name.firstName()
    const email = faker.internet.email()
    const web = 'https://gorest.co.in'
    const accessToken = '756cc20c26596f0b0e30ed33cb5de8fe3278ca56d76ddd21e3095c844192a8a1'

    it('create user', () => {
        cy.request({
            method: 'POST',
            url: web + '/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Scarlet johanson",
                "email": "Scar@let.com",
                "status": "active",
                "gender": "female"
            }
        })
            .then((ponse) => {
                cy.log(JSON.stringify(ponse.body.id))
                const ID = ponse.body.id
                expect(ponse.body).has.property('name', "Scarlet")
                expect(ponse.body).has.property('email',"Scar@let.com")
                expect(ponse.status).to.eq(201)
                cy.log(ponse.body.name)
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
            })
    })
})