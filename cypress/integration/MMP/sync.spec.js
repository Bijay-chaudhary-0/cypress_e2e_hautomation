var username = "bjay.chaudhary.01@gmail.com"
var password = "test@123"
var n = "601015"
var m = "000002"
var num = n + m
describe('Automating', () => {
    it('Syncing after being verified by IDEMIA', () => {
        cy.visit('https://mmstaging.mtradeasia.com:2096/login')

        cy.get('input[name="Username"]')
            .click()
            .type(username)

        cy.get('input[name="Password"]')
            .click()
            .type(password)

        cy.get('button[name="submit"]')
            .click()

        cy.wait(6000)

        cy.get('.sidebar-nav > :nth-child(1) > .nav > :nth-child(1) > .nav-link')
            .contains(' Dashboard ')

        cy.xpath('//a[normalize-space()="Compliance"]')
            .click()

        cy.xpath('//a[normalize-space()="Pending Customer"]')
            .click()

        cy.xpath('//button[normalize-space()="eKYC Update Approved/Rejected"]')
            .contains(' eKYC Update Approved/Rejected ')
            .click()

        cy.get('kendo-grid[dir="ltr"]>div.k-grid-aria-root>div.k-grid-header>div > table[role="presentation"] >thead> tr.k-filter-row > :nth-child(3) >  .k-filtercell > .k-filtercell-wrapper > input')
            .click({ force: true })
            .type(num)
            .wait(4000)
            .type('{enter}')
        cy.wait(4000)
        cy.get('tr.k-alt > :nth-child(9) > :nth-child(3) > i.fa-refresh')
            .eq(0)
            .click()

        cy.xpath('//button[normalize-space()="OK"]')
            .click()

        cy.get('div#toast-container')
            .contains('Idemia Data Sync in process')

        cy.wait(6000)

        cy.get('div.box-body >:nth-child(1) >:nth-child(1)')
            .click()
        cy.wait(6000)
        cy.get('kendo-grid[dir="ltr"]>div.k-grid-aria-root>div.k-grid-header>div > table[role="presentation"] >thead> tr.k-filter-row > :nth-child(3) >  .k-filtercell > .k-filtercell-wrapper > input')
            .click({force:true})
            .type(num)
            .wait(2000)
            .type('{enter}')

        cy.get('tr.k-alt > :nth-child(9) > :nth-child(1) > i')
            .eq(0)
            .click()

        cy.get('a.btn-success > i.fa')
            .click()

        cy.xpath('//button[normalize-space()="OK"]')
            .click()

        cy.wait(2000)

        cy.get('#toast-container')
            .contains('User verified successfully.')
    })
})
