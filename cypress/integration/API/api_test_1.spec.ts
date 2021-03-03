import { isTypedArray } from "cypress/types/lodash";

describe('API Testing with Cypress', function(){

    Cypress.config('baseUrl','https://reqres.in/api/');
    it('GET ', function(){

        cy.request('GET','users?page=2')
            .then((response) => {
                expect(response).to.have.property('status',200);
                expect(response.status).to.eq(200);
                expect(response.body).not.to.be.null;
                expect(response.body).to.have.property('page',2);
                expect(response.body.data).to.have.length(6);
            })
    })

    it('GET 2 ', function(){
        console.log(Cypress.browser);
        cy.request({
            method: 'GET',
            url: 'users?page=2'
        }).then((response) => {
            expect(response).to.have.property('status',200);
            expect(response.status).to.eq(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('page',2);
            expect(response.body.data).to.have.length(6);
        })
    })

    it('POST 4'), function(){

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body:{
                "title": "json-server",
                "author": "typicode"
              }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // expect(response.body).has.property("name","Raghav");
            
        })
    }


    it('POST'), function(){

        cy.request({
            method: 'POST',
            url: 'users/',
            body:{
                "name": "Raghav",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.property("name","Raghav");
            
        })
    }


    it('POST 2'), function(){

        let bodyData = {
            "name": "Raghav",
            "job": "leader"
        };
        cy.request('POST', 'users/', bodyData)
            .its('body')
            .should('eq', bodyData) 
    }

    it('POST 3'), function(){

        let bodyData = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        };
        cy.request('POST', 'register', bodyData)
            .its('body')
            .should('eq', bodyData) 
    }

    it('PUT', function(){

        cy.request({
            method: 'PUT',
            url: 'users/2',
            body: {
                "name": "Raghav",
                "job": "Teacher"
            }
        }).then((response) => {
            expect(response.body).has.property("job","Teacher");
            expect(response.status).to.eq(200);
        })
    })

    it('DELETE', function(){
        cy.request({
            method: "DELETE",
            url: "users/2"
        }).then((response) => {
            expect(response.body).to.be.empty;
            expect(response.status).to.eq(204);
        })
    })
})