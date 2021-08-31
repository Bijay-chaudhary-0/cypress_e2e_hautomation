describe('Using Query', () => {
    it('Taking particular object only', () => {
        //first request
        cy.request({
            method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=San'

        })
            /*  .then((ponse)=>{             //yaha k bhako bhujhenw, just below ko ponse ma city use garda kaam garcha IDK how
                 const city = ponse.body[0].title
                 return city
             }) */
            .then((ponse) => {
                const city = ponse.body[0].title
                //2nd Request
                cy.request({
                    method: 'GET',
                    url: 'https://www.metaweather.com/api/location/search/?query=' + city
                })
                    .then((ponse) => {
                        expect(ponse.status).to.eq(200)
                        expect(ponse.body[0]).to.have.property('title', city)
                    })
            })
    })
    it('Going through each element from the obtained array of searched Objects', () => {
        //first request
        cy.request({
            method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=Am'

        })
            .then((ponse) => {
                const location = ponse.body
                for (let i=0;i<location.length;i++) {
                    const city = ponse.body[i].title
                    //2nd Request
                    cy.request({
                        method: 'GET',
                        url: 'https://www.metaweather.com/api/location/search/?query=' + city
                    })
                        .then((ponse) => {
                            cy.log(city)
                            expect(ponse.status).to.eq(200)
                            expect(ponse.body[0]).to.have.property('title', city)
                        })
                }
            })
    })
})