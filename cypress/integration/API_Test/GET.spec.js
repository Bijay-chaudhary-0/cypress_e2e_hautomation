describe('Using postman functions here', () => {
    const accessToken = 'ca3f5a91ab46e8484acfa6a3c678a162ac8edd08037a3a69d04f23493b54346f'
    const web = 'https://gorest.co.in'
    it('get users', () => {                         //describe and it comes from mocha
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users'

        }).then((ponse) => {
            expect(ponse.status).to.eq(200)             //expect comes from chai assertion
            expect(ponse.body.meta.pagination.limit).to.eq(20)
            expect(ponse.body.meta.pagination.pages).to.eq(76)
        })
    })
    it('get users by ID', () => {
        cy.request({
            method: 'GET',
            url: web +'/public-api/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }

        }).then((ponse) => {
            expect(ponse.status).to.eq(200)
            expect(ponse.body.data.name).to.eq('Goswami Sinha')
        })
    })
})
