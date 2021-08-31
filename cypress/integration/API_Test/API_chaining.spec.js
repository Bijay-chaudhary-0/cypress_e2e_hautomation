describe('post user request', () => {
    var faker = require('faker')
    const name = faker.name.firstName()
    const email = faker.internet.email()
    const web = 'https://gorest.co.in'
    const accessToken = 'ca3f5a91ab46e8484acfa6a3c678a162ac8edd08037a3a69d04f23493b54346f'
    it('create user', () => {
        cy.request({
            method: 'POST',
            url: web + '/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": name,
                "email": email,
                "status": "active",
                "gender": "female"
            }
        })
            .then((ponse) => {
                cy.log(JSON.stringify(ponse))
                expect(ponse.status).to.eq(201)
                expect(ponse.body.data).has.property('name', name)
                expect(ponse.body.data).has.property('email', email)
            })
            //here we have done POST and GET to check whether provided data is stored in server or not
            .then((ponse) => {
                const ID = ponse.body.data.id
                cy.log('user ID is ' + name)
                cy.request({
                    method: 'GET',
                    url: web + '/public-api/users/'+ID,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                })
                    .then((ponse) => {
                        expect(ponse.status).to.eq(200)
                        expect(ponse.body.data).has.property('name', name)
                        expect(ponse.body.data).has.property('email', email)
                    })
            })
    })
})