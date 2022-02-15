describe('post user request', () => {
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
                "name": 'Kocho',
                "email": 'wawa@2email.com',
                "status": "active",
                "gender": "female"
            }
        })
            .then((ponse) => {
                cy.log(JSON.stringify(ponse))
                cy.log(ponse.body.id)
                expect(ponse.status).to.eq(201)
                expect(ponse.body).has.property('name', 'Kocho')
                expect(ponse.body).has.property('email', 'wawa@2email.com')
                expect(ponse.body).has.property('status', 'active')
                expect(ponse.body).has.property('gender', 'female')

                const ID = ponse.body.id
                cy.request({
                    method: 'DELETE',
                    url: web + '/public/v2/users/' + ID,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                })
                        expect(ponse.status).to.eq(201)         //204 represents delete status but fails here!
            })
    })
})