describe('Handle Alerts', () => {

    //1)Java script alert it will have some text and an 'OK' button
    it('Javascript alerts', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

      cy.get("button[onclick='jsAlert()']").click()
      cy.on('window:alert',(t) =>{
        expect(t).to.contain('I am a JS Alert')
        
    })
      //alert window will automatically close the alert window
      cy.get('p#result').should('have.text','You successfully clicked an alert')

    })

    //2)Java script confirm alert it will have some text and with 'OK' and 'cancel' button
    it('Javascript alerts with click on OK button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t) =>{
          expect(t).to.contain('I am a JS Confirm')
          
      })
        //alert window will automatically close the alert window
        cy.get('p#result').should('have.text','You clicked: Ok')
  
      })

      //3)Java script confirm alert it will have some text and with 'OK' and 'cancel' button
    it('Javascript alerts with click on cancel button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t) =>{
          expect(t).to.contain('I am a JS Confirm')
          
        })
        cy.on('window:confirm',() => false)

        //alert window will automatically close the alert window
        cy.get('p#result').should('have.text','You clicked: Cancel')
        
    })

    //4)Java script prompt alert : it will have some text with a text box for user input along with 'OK' button
    it('Javascript prompt alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome')

        })
        cy.get("button[onclick='jsPrompt()']").click()

        cy.on('window:',(t) =>{
          expect(t).to.contain('I am a JS prompt')
        
        })
        //alert window will automatically close the alert window
        cy.get('p#result').should('have.text','You entered: welcome')
  
    })

    //5)Authenticated alert
    it('Javascript authenticated alert', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth :{username:"admin", password:"admin"} })
  
        cy.get('.example').should('contain','Congratulations')
    })
})