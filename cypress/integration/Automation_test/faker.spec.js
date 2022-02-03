//install using npm i faker
var faker = require('faker')
const name = faker.name.firstName()
describe('first faker program', () => {
    it('testing', () => {
        cy.visit('https://nest.testbirds.com/home/tester')

        cy.xpath('//input[@name="firstname"]').type(name)

        cy.xpath('//input[@name="lastname"]')
            .type(faker.name.lastName())

        cy.get('div:nth-child(3) > div:nth-child(1) > div:nth-child(2) >input[name="username"]')
            .type(faker.internet.userName())

        cy.xpath('//input[@name="email"]')
            .type(faker.internet.email())
        cy.xpath('//input[@name="plainPassword"]')
            .type(faker.internet.password())


        cy.get('.Select-placeholder')
            .type(faker.address.country() + '{downarrow}{enter}')

        cy.get('#mui-component-select-birthDay')
            .type('03' + '{downarrow}{enter}')
        cy.get('#mui-component-select-birthMonth')
            .type('11' + '{downarrow}{enter}')

        cy.get('#mui-component-select-birthYear')
            .type('1999' + '{downarrow}{enter}')

        cy.get('#privacy')
            .click()

        /* cy.get('form.hZOxMD > :nth-child(5)')
            .click() */
        cy.get("form.hZOxMD > :nth-child(5)").wait(4000).then((object) => {
            if (object.find('form.hZOxMD > :nth-child(5)').is('available'))
                cy.get("form.hZOxMD > :nth-child(5)").dblclick()
            else {
                cy.log("not clickable")
                cy.end()
            }
        })

        cy.get('#page-header')
            .contains('Check your email')

        /* cy.get('div.sc-ipXKqB > button[type="submit"]')
        .click() */



    })
})
