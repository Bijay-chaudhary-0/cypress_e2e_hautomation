export function visit() {
    cy.visit('https://testsheepnz.github.io/BasicCalculator.html')
}
export function Input_forums(num1,num2) {
    cy.get('#number1Field')
        .click()
        .type(num1)

    cy.get('#number2Field')
        .click()
        .type(num2)
}
export function Add(){
    cy.get('#selectOperationDropdown')
        .select('0')
}

export function Subtract(){
    cy.get('#selectOperationDropdown')
        .select('1')
}

export function Multiply(){
    cy.get('#selectOperationDropdown')
        .select('2')
}

export function Divide(){
    cy.get('#selectOperationDropdown')
        .select('3')
}

export function concatinate(){
    cy.get('#selectOperationDropdown')
        .select('4')
}

export function Operation(operation){
    cy.get('#selectOperationDropdown')
    //.should('contain.text',"Subtract")
    //.each(function($el,index,$listofElements){cy.log($el.text()) }) // supposed to list all the items present
    .select(operation)
    //.select('1')
}

export function Calculate(){
    cy.get('#calculateButton')
    //cy.get('[value="Calculate"]')
    .click()
}