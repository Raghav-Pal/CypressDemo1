/// <reference types = 'cypress' />

it('google test', function(){

    cy.visit('https://google.com')
    cy.get('[name="q"]')
        .type('Raghav Pal')
        .type('{enter}');
});