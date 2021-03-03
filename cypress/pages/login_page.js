export class LoginPage{

    login_username = '#uname';
    login_password = '#pwd';
    login_loginButton = '[type="submit"]';

    navigate(url){
        cy.visit(url)
    }
    enterUsername(username){
        cy.get(this.login_username).type(username)
    }
    enterPassword(password){
        cy.get(this.login_password).type(password)
    }
    clickLogin(){
        cy.get(this.login_loginButton).click()
    }
    verifyMessage(msg){
        cy.contains(msg)
    }
    verifyWrongCredsMsg(msg){
        cy.on('window:alert', (txt) => {
            expect(txt).to.be.equal(msg)
        })
    }

    loginWithValidCredentials(url, username, password, msg){
        this.navigate(url)
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogin()
        this.verifyMessage(msg)
    }
    loginWithInvalidCredentials(url, username, password, msg){
        this.navigate(url)
        this.enterUsername(username)
        this.enterPassword(password)
        cy.wait(4000)
        this.clickLogin()
        cy.wait(4000)
        this.verifyWrongCredsMsg(msg)
    }
}