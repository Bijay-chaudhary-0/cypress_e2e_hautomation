describe('Using postman functions here', () => {
    const accessToken = '756cc20c26596f0b0e30ed33cb5de8fe3278ca56d76ddd21e3095c844192a8a1'
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
            expect(ponse.body.data.name).to.eq('Monkey D. Luffy')
        })
    })
})
