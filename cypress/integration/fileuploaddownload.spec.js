describe('file upload test', function(){

    it('upload file', function(){
        cy.visit('https://filebin.net/')
        // cySubject.attachFile(fixture, optionalProcessingConfig);
        cy.get('[id="fileField"]').attachFile('photo.png');
    })

    it('downlaod file', function(){
        cy.downloadFile('https://filebin.net/2y2rg9wen7vkwxd6/PhotoWithNoBackground.png?t=eyxuyfxq','fixtures','photo123.png')
    })
})