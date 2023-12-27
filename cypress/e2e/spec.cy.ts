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

        // cy.get("input[id=':r5:']").invoke('val').then(value => {
        //     cy.log(`Zip Code Value: ${value}`);
        //     expect(/^\d+$/.test(value.toString())).to.be.true;
        // });

        // cy.get("input[id=':r5:']").invoke('val').then(value => {
        //     cy.log(`Zip Code Value: ${value}`);
        //     expect(value).to.match(/^\d+$/);
        //     expect(value.length).to.be.above(0); // Ən az bir rəqəm olmalıdır.
        // });

        // cy.contains("input[id=':r5:']", /^\d+$/)
        // cy.contains('#:r5:', /^\d+$/);
    })

    it("fiil in shipping address and proceed", () => {
        cy.get("Input[name='firstName']").type("Name");
        cy.get("Input[name='lastName']").type("Surname");
        cy.get("Input[name='address']").type("Address");
        cy.get("Input[name='city']").type("Baku");
        cy.get("Input[name='country']").type("Azerbaijan");
        cy.get("Input[name='zip']").type("040");
        cy.get("button[type='button']").click()
    })

    it("user cannot proceed empty payment form", () => {
        cy.get("Input[name='firstName']").type("Name");
        cy.get("Input[name='lastName']").type("Surname");
        cy.get("Input[name='address']").type("Address");
        cy.get("Input[name='city']").type("Baku");
        cy.get("Input[name='country']").type("Azerbaijan");
        cy.get("Input[name='zip']").type("040");
        cy.get("button[type='button']").click();
        cy.get('.MuiButton-contained').click();

        // cy.contains('Payment method').should('not.be.visible')
        cy.get('.MuiTypography-h6').should('have.text', "Payment method");
        cy.get('.MuiTypography-h6').should('not.have.text', "Review your order");

    })

    it('when user submits empty address form, validation messages ae displayed', () => {
        cy.get("Input[name='firstName']").type("Name");
        cy.get("Input[name='lastName']").type("Surname");
        cy.get("Input[name='address']").type("Address");
        cy.get("Input[name='city']").type("Baku");
        cy.get("Input[name='country']").type("Azerbaijan");
        cy.get("Input[name='zip']").type("040");
        cy.get("button[type='button']").click();

        cy.get("Input[name='cardName']").type("CardName");
        cy.get("Input[name='cardNumber']").type("32876481");
        cy.get("Input[name='expDate']").type("2023-12");
        cy.get("Input[name='cvv']").type("000");
        cy.get('.MuiButton-contained').click();

        // cy.get('.MuiList-root').each(($list) => {
        //     // $el is a wrapped jQuery element
        //     let count = 0;
        //     cy.log($list);

        // })

    })
})
