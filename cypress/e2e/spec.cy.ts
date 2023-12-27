import { should } from "chai"
import { forEach } from "cypress/types/lodash"

describe('test suit', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.config('baseUrl')}`)
        cy.contains('Checkout').should('be.visible')
        cy.viewport(1500, 1000)
    })

    // Tasks
    // Prepare tests for checking that:
    //
    // 1) zip code doesn't accept text
    // 2) user cannot proceed empty payment form, any other validations shouldn't be checked
    // 3) check order total counting

    it("zip code doesn't accept text", () => {
        cy.get("input[id=':r5:']").type("5ase").invoke('val').then(value => {
            cy.log(`Zip Code Value: ${value}`)
        })

        cy.get("input[id=':r5:']").should('not.match', /^[A-Za-z]+$/);
    })

    it("fiil in shipping address and proceed", () => {
        cy.fiil();
    })

    it("user cannot proceed empty payment form", () => {
        cy.fiil();
        cy.get('.MuiButton-contained').click();

        cy.get('.MuiTypography-h6').should('have.text', "Payment method");
        cy.get('.MuiTypography-h6').should('not.have.text', "Review your order");
    })

    it('when user submits empty address form, validation messages ae displayed', () => {
        cy.fiil();
        cy.fiilPayment();

        let totalPrice;
        cy.get('.css-1isisa7-MuiTypography-root').each(($li) => {
            totalPrice = $li.text().match(/\d+\.\d+/)[0];
        });

        let price = 0;
        cy.get('.css-e784if-MuiTypography-root').each(($li) => {
            const numericPart = $li.text().match(/\d+\.\d+/)[0];
            price += parseFloat(numericPart);
        }).then(() => {
            cy.wrap(parseFloat(totalPrice)).should('eq', price)
        })
    })
})
