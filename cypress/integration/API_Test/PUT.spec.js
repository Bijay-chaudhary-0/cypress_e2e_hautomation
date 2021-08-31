describe('post user request', () => {
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
                "name": 'Kocho',
                "email": 'Kocho@2email.com',
                "status": "active",
                "gender": "female"
            }
        })
            .then((ponse) => {
                cy.log(JSON.stringify(ponse))
                expect(ponse.status).to.eq(201)
                expect(ponse.body.data).has.property('name', 'Kocho')
                expect(ponse.body.data).has.property('email', 'Kocho@2email.com')
                expect(ponse.body.data).has.property('status', 'active')
                expect(ponse.body.data).has.property('gender', 'female')
            })
            //update user by using PUT
            .then((ponse) => {
                const ID = ponse.body.data.id
                cy.request({
                    method: 'PUT',
                    url: web + '/public-api/users/'+ID,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    },
                    body: {
                        "name": 'moikoi',
                        "email": 'boi@email.com',
                        "status": "inactive",
                        "gender": "female"
                    }
                })
                    .then((ponse) => {
                        expect(ponse.status).to. eq(200)
                        expect(ponse.body.data).has.property('name', 'moikoi')
                        expect(ponse.body.data).has.property('email', 'boi@email.com')
                        expect(ponse.body.data).has.property('status', 'inactive')
                        expect(ponse.body.data).has.property('gender', 'female')
                    })
            })
    })
})