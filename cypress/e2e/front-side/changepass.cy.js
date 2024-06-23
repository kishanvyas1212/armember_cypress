/// <reference types="cypress" />

const username = "armember2805243"
const password ="test123"
const loginurl="http://localhost/test_lite1/login/"
const url_change_psw= "http://localhost/test_lite1/change_password/"
var redirection_url ="http://localhost/test_lite1/edit_profile/"
const new_psw = "test123"
const success_msg="Your password changed successfully."
const wrong_previous_pass ="Please enter valid current password."
const mismatchpass ="Passwords don't match."
const pswlengthcheck= "Please enter at least 6 characters."
describe("Change Password Functionality",()=>{
    beforeEach(()=>{
        cy.clearAllCookies()
        cy.wait(100)
        cy.visit(loginurl)
        cy.wait(400)
        cy.get('input[name="user_login"]').type(username)
        cy.get("input[name='user_pass']").clear().type(password)
        cy.get("button[name='armFormSubmitBtn']").click()
    })

    it("check with wrong previous password",()=>{
        cy.wait(1000)
        cy.visit(url_change_psw)
        cy.wait(500)
        cy.get("input[name=current_user_pass]").clear().type("password")
        cy.get("input[name=user_pass]").clear().type(new_psw)
        cy.get("input[name=repeat_pass]").clear().type(new_psw)
        cy.get("button[name=armFormSubmitBtn]").click()
        cy.get("div[class='arm-df__fc--validation__wrap']").should("be.visible")
        cy.get("div[class='arm-df__fc--validation__wrap']>ul>li").should('include.text',wrong_previous_pass)
    })
   it("check repeat password is not match",()=>{
        cy.wait(1000)
        cy.visit(url_change_psw)
        cy.wait(500)
        cy.get("input[name=current_user_pass]").clear().type("password")
        cy.get("input[name=user_pass]").clear().type(new_psw)
        cy.get("input[name=repeat_pass]").clear().type("new_psw")
        // cy.get("button[name=armFormSubmitBtn]").click()
        cy.get("div[class='arm-df__fc--validation__wrap']").should("be.visible")
        cy.get("div[class='arm-df__fc--validation__wrap']").should('include.text',mismatchpass)

    })
    it("password length testing",()=>{
        cy.wait(1000)
        cy.visit(url_change_psw)
        cy.wait(500)
        cy.get("input[name=current_user_pass]").clear().type("password")
        cy.get("input[name=user_pass]").clear().type("12345")
        cy.get("input[name=repeat_pass]").clear().type("12345")
        // cy.get("button[name=armFormSubmitBtn]").click()
        cy.get("div[class='arm-df__fc--validation__wrap']").should("be.visible")
        cy.get("div[class='arm-df__fc--validation__wrap']").should('include.text',pswlengthcheck)

    })
    it("Change Password with correct previous password",()=>{
        cy.wait(1000)
        cy.visit(url_change_psw)
        cy.wait(500)
        cy.get("input[name=current_user_pass]").clear().type(password)
        cy.get("input[name=user_pass]").clear().type(new_psw)
        cy.get("input[name=repeat_pass]").clear().type(new_psw)
        cy.get("button[name=armFormSubmitBtn]").click()
        cy.wait(2000)
        cy.get("div[class=arm_success_msg]").should('be.visible')
        cy.get("div[class=arm_success_msg]").should('include.text',success_msg)
        cy.clearAllCookies()
        cy.visit(loginurl)     
        cy.wait(400)
        cy.get('input[name="user_login"]').type(username)
        cy.get("input[name='user_pass']").clear().type(new_psw)
        cy.get("button[name='armFormSubmitBtn']").click()   
        cy.wait(800)
        cy.url().should("eql",redirection_url)
    
    })


})