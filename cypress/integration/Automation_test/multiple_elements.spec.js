var faker = require('faker')
const userName = "Oppa"
const passWord = "Senpa!9876"
describe('Working with multiple elements', () => {
    beforeEach(() => { cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators') })

    it('Home', () => {
        cy.get('div#navbarExample > ul> :nth-child(n)')
            .should('have.length', 8)

        cy.get('div#navbarExample > ul> :nth-child(1)').click()

        cy.get('div.list-group >:nth-child(n)')
            .should('have.length', 4)
            .should('contain.text', 'Phones')
            .should('contain.text', 'Laptops')
            .should('contain.text', 'Monitors')
            .each(function ($el, index, $listofElements) { cy.log($el.text()) })
    })
    it('Contact', () => {
        cy.get('div#navbarExample > ul> :nth-child(n)')
            .should('have.length', '3')

        cy.get('#recipient-email').type(faker.internet.email())

        cy.get('#recipient-name').type(faker.internet.userName())

        cy.get('#message-text').type("We are the chamion and we will keep on fighting till the end")

        cy.xpath('//div[@class="modal-footer"]/button[@onclick="send()"]')
            .click()

    })
    it('About Us', () => {
        cy.get('a.nav-link[data-target$="#videoModal"]')
            .click()

        cy.get('video#example-video_html5_api')
            .should('exist')
    })
    it('Cart', () => {
        cy.get('#cartur')
            .click()

        cy.get('div.col-lg-8>h2')
            //cy.get('//h[starts-with(text(),"Products")]')
            .should('have.text', 'Products')
    })
    it('Signup', () => {
        cy.get('#signin2')
            .click()

        cy.xpath('//input[@id="sign-username"]')
            .type(userName)

        cy.get('#sign-password')
            .type(passWord)

        cy.get('//div[@class="modal-footer"] /button[@onclick="register()"]')
            .should('have.text', 'Sign up')
            .clear()


    })
    it.only('Login', () => {
              
            cy.get('#login2').click()

            cy.get('#loginusername').type(userName)

            cy.get('#loginpassword').type(passWord)

            cy.get('[onclick="logIn()"]').click()
   
    })
})