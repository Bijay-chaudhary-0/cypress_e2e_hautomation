describe('intercept with cypress',()=>{
    it('test api with simple intercept',()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                "body": [
                    {
                        "book_name": "Stubbed Book",
                        "isbn": "SB1",
                        "aisle": "01"
                    }
                ]
            }).as('booklist')

        cy.get('.btn-primary').click()

        cy.wait('@booklist')
    })
})