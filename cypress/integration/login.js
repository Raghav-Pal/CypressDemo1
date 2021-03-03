import {LoginPage} from "../pages/login_page"
describe('login test',  () => {
    const loginPage = new LoginPage()

    it.only('login with valid credentials', () => {
        let url = 'https://trytestingthis.netlify.app/';
        let msg = 'Login Successful'
        loginPage.loginWithValidCredentials(url, 'test', 'test', msg)
        // cy.contains('here').click()
        cy.clickLink('here')
        // loginPage.navigate('https://trytestingthis.netlify.app/')
        // loginPage.enterUsername('test')
        // loginPage.enterPassword('test')
        // loginPage.clickLogin()
        // loginPage.verifyMessage('Login Successful')

        /* ==== Generated with Cypress Studio ==== */
        // cy.get('.pop-up-alert > button').click();
        // cy.get('#fname').type('Raghav');
        // cy.get('#lname').type('Pal');
        // cy.get('[for="male"]').click();
        // cy.get('#male').check();
        // cy.get('#option').select('option 2');
        // cy.get('#owc').select(['option 1']);
        // cy.get('#owc').select(['option 2']);
        // cy.get('#owc').select(['option 1', 'option 2']);
        // cy.get('[name="option1"]').check();
        // cy.get('[name="option2"]').check();
        // cy.get('[name="option3"]').check();
        // cy.get('[list="datalists"]').type('Vani');
        // cy.get('#favcolor').click();
        // cy.get('form > fieldset').click();
        // cy.get('#day').click();
        // cy.get('#a').click();
        // cy.get('#myfile').click();
        // cy.get('.btn').click();
         /* ==== End Cypress Studio ==== */
    })
    it('login with invalid credentials', () => {

        let url = 'https://trytestingthis.netlify.app/';
        let msg = 'Wrong Credentials!'
        loginPage.loginWithInvalidCredentials(url, 'test123', 'test321', msg)

    })

    /* === Test Created with Cypress Studio === */
    it('loginTestNew', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#uname').type('test');
        cy.get('#pwd').type('test');
        cy.get('[type="submit"]').click();
        cy.get('h2').click();
        cy.get('h2').click();
        cy.get('h4 > a').click();
        /* ==== End Cypress Studio ==== */
    });
})