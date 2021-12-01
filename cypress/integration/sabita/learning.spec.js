/// <reference types="cypress" />

var firstname = "sabita"
var lastname = "guragain"
var username = "sabi@123"
var email = "sabi.01@gmail.com"
var passcode = "Passw0rd123"
var location = "Nepa"

describe('Visiting the website', () => {
    it('register', () => {
        cy.visit('https://nest.testbirds.com/home/tester')

        cy.get('input.nest-MuiInputBase-input[name="firstname"]')
            .type(firstname)

        cy.get('input[name="lastname"]')
            .type(lastname)

        cy.get('div.nest-MuiInputBase-adornedEnd > input[name="username"]')
            .type(username)

        cy.get('input[name="email"]')
            .type(email)

        cy.get('input[name="plainPassword"]')
            .type(passcode)

        cy.get('div.Select-placeholder')
            .type(location + '{downarrow}{enter}')

        cy.get('#mui-component-select-birthDay')
            .type('03' + '{downarrow}{enter}')
        cy.get('#mui-component-select-birthMonth')
            .type('11' + '{downarrow}{enter}')

        cy.get('#mui-component-select-birthYear')
            .type('1999' + '{downarrow}{enter}')

        cy.get('input#privacy')
            .click()

        cy.get('div.sc-ipXKqB > button[type="submit"]')
            .click()

        cy.get('#page-header')
            .contains('Check your email')
    })
})