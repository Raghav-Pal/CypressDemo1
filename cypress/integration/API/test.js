it('GET', function(){
    cy.request('GET', 'https://reqres.in/api/users?page=2')
    .then((response) => {
        expect(response).to.have.property('status', 200);

    })
})

it('GET 2', function(){
    cy.request('GET', 'https://reqres.in/api/users?page=2').as('user_list')
    cy.get('@user_list')
    .should((response) => {
        expect(response).to.have.property('status', 200);
    })
})

it('GET 3', function(){
    cy.request({
        'method' : 'GET',
        'url' : 'https://reqres.in/api/users?page=2',
        headers:{
            'key' : 'value'
        },
        auth: {
            'username' : 'user1',
            'password' : 'pass1'
        }
    })
    .then((response) => {
        expect(response).to.have.property('status', 200);
    })
})



it('create user', function(){

    const reqBody = {
        "name": "morpheus",
        "job": "leader"
    };
    cy.request('POST', 'https://reqres.in/api/users', reqBody)

})