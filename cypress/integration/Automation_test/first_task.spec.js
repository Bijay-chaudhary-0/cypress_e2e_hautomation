describe('autoation_task_E2E_test', () => {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const firstName = generateString(5)
    const lastName = generateString(6)
    let phoneNumber = "9800000000"
    let email = firstName + lastName + "@gmail.com"
    let userName = firstName + lastName

    it('Register', () => {

        cy.visit('http://demo.guru99.com/test/newtours/')

        cy.get('[width="77"] > a')
            .click()

        cy.xpath('//input[@name="firstName"]')
            .type(firstName)

        cy.xpath('//input[@name="lastName"]')
            .type(lastName)

        cy.get("input[name='phone']")
            .type(phoneNumber)

        cy.get('#userName')
            .type(email)

        cy.xpath('//input[@name="address1" and @ maxlength="60"]')
            .type(generateString(10))

        cy.xpath('//input[@name="city" and @ maxlength="60"]')
            .type('chabahil')

        cy.xpath('//input[@name="state" and @ maxlength="40"]')
            .type('bagmati')

        cy.xpath('//input[@name="postalCode" and @ maxlength="20"]')
            .type('44600')

        cy.xpath('//select[@name="country"]')
            .select('NEPAL')

        cy.get('#email')
            .type(userName)

        cy.xpath('//input[@name="password"]')
            .type('Bij@y9876')

        cy.xpath('//input[@name="confirmPassword"]')
            .type('Bij@y9876')

        cy.xpath('//input[@name="submit"]')
            .click()
        cy.title()
            .should('be.equal', 'Register: Mercury Tours')

    })

    it('Login', () => {

        cy.visit('https://demo.guru99.com/test/newtours/')

        cy.xpath('//input[@type="text"]')
            .type(userName, { timeout: 4000 })

        cy.xpath('//input[@type="password"]')
            .type('Bijay@9876')

        cy.wait(500)
        cy.xpath('//input[@value="Submit"]')
            .click()
        cy.wait(600)
        cy.title()
            .should('be.equal','Login: Mercury Tours')

    })

})