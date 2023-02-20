import 'cypress-file-upload'

describe('Handling file uploads', () => {
    it('Single File upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Test Cypress.txt')
        cy.get('#file-submit').click()
        cy.wait(5000)

        cy.get('.example > h3').should('have.text',"File Uploaded!")

    })

    it('File upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Test Cypress.txt', fileName:'NewTestCypress.txt'})
        cy.get('#file-submit').click()
        cy.wait(5000)

        cy.get('.example > h3').should('have.text',"File Uploaded!")
        

    })

    
    it('File upload -Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get(' #drag-drop-upload').attachFile("Test Cypress.txt",{subjectType:'drag-n-drop'})
            

    })

    
    it('Multiple File uploads', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        cy.get('#filesToUpload').attachFile(["Test Cypress.txt", "TestWordDoc.docx"])
        cy.wait(5000)

        cy.get(':nth-child(6) > strong').should("contain.text","Files You Selected")
    })

    
    it.only('File upload - Shadow DOm', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')

        cy.get('.smart-browse-input' ,{includeShadowDom:true}).attachFile('Test Cypress.txt')
        cy.wait(5000)

        cy.get('.smart-item-name',{includeShadowDom:true}).should('contain.text','Test Cypress')
        
    })

})