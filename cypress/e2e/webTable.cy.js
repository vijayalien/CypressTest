
describe('Handling Tables', () => {

    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click()
        cy.get("#menu-customer >a").click()
        cy.get('#collapse-5>li:first-child ').click()

    })

    
    it('Check number rows and columns', () => {
    
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')

      cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
     
    })

    it('Check cell data from, specific rows and columns', () => {
       cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('princytrainings4@gmail.com')
         
       cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(8)>td:nth-child(3)").contains('neha@gmail.com')
    })

    it('Read all the rows and columns from first page', () => {
       cy.get("table[class='table table-bordered table-hover']>tbody>tr")
       .each(($row,index,$rows)=>{
        cy.wrap($row).within( () =>{

            cy.get("td").each( ($col,index, $cols) =>{
                cy.log($col.text())

            })
        })

       })
       
    })

    it('Pagination', () => {
        let totalPages
        //to find total number of pages
        cy.get("div[class='col-sm-6 text-end']").then((e)  =>{
            let myText=e.text() 
            totalPages = myText.substring(myText.indexOf("(")+1 , myText.indexOf("Pages")-1)
            cy.log("Total number of pages in a table  == "+totalPages)

        })
  
        let loopPages=5
        for(let p=1 ;p<5;p++){  
            if(loopPages>1){
                cy.log("Active page number is ===" +p)
                cy.get(".pagination>li:nth-child("+p+")").click()
                cy.wait(3000)


                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within( () =>{

                        cy.get("td:nth-child(3)").then((e) =>{
                        cy.log(e.text())  // email log
                        })
                    })

                })

            }
        }
       
    })

})