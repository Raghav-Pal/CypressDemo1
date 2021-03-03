
it('create user', function(){

    const reqBody = {
        "name": "morpheus",
        "job": "leader"
    };
    cy.request('POST', 'https://reqres.in/api/users', reqBody)
    .its('body')
            .should('eq', reqBody) 
})
