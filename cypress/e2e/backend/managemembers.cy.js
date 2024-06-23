/// <reference types="cypress" />
const baseurl="http://localhost/test_lite1/"
describe("Manage Mebers",()=>{

    beforeEach(()=>{
        cy.clearAllCookies()
        cy.wait(1000)
        cy.visit(baseurl+"login/")
        cy.wait(4)
        cy.get('input[name="user_login"]').type(username)
        cy.get("input[name='user_pass']").clear().type(password)
        cy.get("button[name='armFormSubmitBtn']").click()
        cy.wait(1000)
    })
    it("test Manage Member filters",()=>{

        
    })


    // manage members block over here 
})
