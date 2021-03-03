/// <reference types="cypress-downloadfile"/>

describe('file upload test', function(){

    it('upload file', function(){
        cy.visit('https://filebin.net/')
        cy.get('[id="fileField"]').attachFile('photo.png');
    })

    it('downlaod file', function(){
        
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','photo123.png')
       
    })
})