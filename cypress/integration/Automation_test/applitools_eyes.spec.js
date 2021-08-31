import * as fnctn from '../../support/POM'

describe('using apitools eyes', () => {

    before(() => cy.visit('https://www.tutorialspoint.com/index.htm'))


    it('should look same', () => {
        cy.eyesOpen({
            appName: 'Demo App',
            testName: 'Demo Test',
        })

        cy.eyesCheckWindow('first')

        cy.xpath('//div[@class="mui-container"]/ul //li/a[@title="Coding Ground - Free Online IDE and Terminal"]')
            .invoke('removeAttr', 'target')
            .click()

        cy.eyesCheckWindow('finish')

        cy.eyesClose()
    })
})