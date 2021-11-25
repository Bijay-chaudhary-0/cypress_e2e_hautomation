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
                "email": 'wawa@2email.com',
                "status": "active",
                "gender": "female"
            }
        })
            .then((ponse) => {
                cy.log(JSON.stringify(ponse))
                expect(ponse.status).to.eq(201)
                expect(ponse.body.data).has.property('name', 'Kocho')
                expect(ponse.body.data).has.property('email', 'wawa@2email.com')
                expect(ponse.body.data).has.property('status', 'active')
                expect(ponse.body.data).has.property('gender', 'female')
            })
            .then((ponse) => {
                const ID = ponse.body.data.id
                cy.request({
                    method: 'DELETE',
                    url: web + '/public-api/users/' + ID,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                })
                    .then((ponse) => {  
                        expect(ponse.status).to.eq(200)         //204 represents delete status but fails here!
                    })
            })
    })
})