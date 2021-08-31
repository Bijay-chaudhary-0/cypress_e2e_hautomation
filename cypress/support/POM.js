class contactpage { //export helps to use this class all over the parent 
    visit() {
        cy.visit('https://www.tutorialspoint.com/index.htm')
    }
    coding_ground() {
        cy.xpath('//div[@class="mui-container"]/ul //li/a[@title="Coding Ground - Free Online IDE and Terminal"]')
            .invoke('removeAttr', 'target')
            .click()
    }
    jav_script() {
        cy.xpath('//li[@class="javascript greyout"]/a/div[@class="imgs-title"]')
            .click()
    }
}

export default contactpage
