/// <reference types="cypress" />
// const tempmail = "https://temp-mail.org/"

const username = "armember2805243"
const useremail = "armember2805243@gm.com"
const forgoturl ="http://localhost/test_lite1/forgot_password/"
const success_msg ="We have sent you a password reset link, Please check your mail."
const notexistuser ="There is no user registered with that email address/Username."
describe("Check Forgot password",()=>{


    it("Forgot password with correct username",()=>{
        
        cy.visit(forgoturl)

        cy.get('input[name="user_login"]').clear().type(username)
        cy.get("button[name='armFormSubmitBtn']").click()
        cy.wait(3000)
        cy.get('div[class="arm_success_msg"]').should('be.visible').should('include.text',success_msg)
        
    })
    it("Forgot password with correct email address",()=>{
        cy.visit(forgoturl)

        cy.get('input[name="user_login"]').clear().type(useremail)
        cy.get("button[name='armFormSubmitBtn']").click()
        cy.wait(3000)
        cy.get('div[class="arm_success_msg"]').should('be.visible').should('include.text',success_msg)
        
    })

    it("Forgot password with wrong email address",()=>{
        cy.visit(forgoturl)

        cy.get('input[name="user_login"]').clear().type("testing@gmail.com")
        cy.get("button[name='armFormSubmitBtn']").click()
        cy.wait(3000)
        
        cy.get("div[class='arm-df__fc--validation__wrap']").should("be.visible")
        cy.get("div[class='arm-df__fc--validation__wrap']>ul>li").should('include.text',notexistuser)
    })

    it("Forgot password with wrong username",()=>{
        cy.visit(forgoturl)

        cy.get('input[name="user_login"]').clear().type("test")
        
        cy.get("button[name='armFormSubmitBtn']").click()
        cy.wait(3000)
        cy.get("div[class='arm-df__fc--validation__wrap']").should("be.visible")
        cy.get("div[class='arm-df__fc--validation__wrap']>ul>li").should('include.text',notexistuser)
    })



    // describe block over
})