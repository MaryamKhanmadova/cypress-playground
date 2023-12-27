/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('fiil', () => {
    cy.get("Input[name='firstName']").type("Name");
    cy.get("Input[name='lastName']").type("Surname");
    cy.get("Input[name='address']").type("Address");
    cy.get("Input[name='city']").type("Baku");
    cy.get("Input[name='country']").type("Azerbaijan");
    cy.get("Input[name='zip']").type("040");
    cy.get("button[type='button']").click()
})

Cypress.Commands.add('fiilPayment', () => {
    cy.get("Input[name='cardName']").type("CardName");
    cy.get("Input[name='cardNumber']").type("32876481");
    cy.get("Input[name='expDate']").type("2023-12");
    cy.get("Input[name='cvv']").type("000");
    cy.get('.MuiButton-contained').click();
})