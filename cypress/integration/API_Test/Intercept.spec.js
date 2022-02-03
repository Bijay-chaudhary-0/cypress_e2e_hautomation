describe('intercept with cypress', () => {
    it('test api with simple intercept', () => {
        cy.visit("https://jsonplaceholder.typicode.com/")

        cy.intercept({
            path: " /posts"
        }).as("posts")

        cy.get('table:nth-of-type(2) a[href="/posts"]').click()

        cy.wait("@posts").then(func => {
            cy.log(JSON.stringify(func))
            console.log(JSON.stringify(func))
        })
    })
})