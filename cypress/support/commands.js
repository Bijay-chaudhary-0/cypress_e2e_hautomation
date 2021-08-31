// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-iframe');

Cypress.Commands.add('generateString', (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
})

Cypress.Commands.add('goBack', () => {
    cy.go('back')
})

Cypress.Commands.add('iteration', () => {
    cy.get('#cat')
        .each(($el, index, $list) => {
            cy.wrap($el).click()
        })
})

Cypress.Commands.add('login', (email,password) => {
    cy.session([email,password], () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a.login').click()
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
        /* cy.get('span.tojvnm2t > div.rq0escxv > div.oajrlxb2[aria-label="Messenger"]')
            .eq('1')
            .should('exist') */
    })
})

