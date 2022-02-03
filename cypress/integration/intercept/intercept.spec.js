describe('intercept with cypress', () => {
    it.only('test api with simple intercept', () => {
        cy.visit("https://courses.rahulshettyacademy.com/")

        /* cy.intercept({
            path: "/courses"
        }).as("posts")

        cy.get('ul.navigation > li:nth-child(2)').click()

        cy.wait("@posts").then(func => {
            cy.log(JSON.stringify(func))
            console.log(JSON.stringify(func))
        }) */
        cy.get('ul.navigation > li:nth-child(2)').click()
        cy.intercept("GET", "/courses","what is ther")
    })
    it("mocking with intercept test", () => {
        cy.visit("https://courses.rahulshettyacademy.com/")
        cy.intercept("GET", "/posts", { totalpost:5}).as("her")
        cy.get('ul.navigation > li:nth-child(2)').click()
        cy.wait("@her")
    })
})
