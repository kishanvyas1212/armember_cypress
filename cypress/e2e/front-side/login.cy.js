/// <reference types="cypress" />

var username = "armember2805243"
var password ="armember2805243"
var redirection_url ="http://localhost/test_lite1/edit_profile/"
var wrong_pass ="The password you entered is invalid."
var wrong_username = "No such user exists in the system."
describe("Login functionality",()=>{
beforeEach(()=>{
    cy.visit("http://localhost/test_lite1/login/")
})

it("login with right credantials",
    ()=>{
        cy.wait(4)
        cy.get('input[name="user_login"]').type(username)
        cy.get("input[name='user_pass']").clear().type(password)
        cy.get("button[name='armFormSubmitBtn']").click()
        cy.wait(800)
        cy.url().should("eql",redirection_url)
    }
)
it("login with wrong password",
    ()=>{
        cy.wait(4)
        cy.get('input[name="user_login"]').type(username)
        cy.get("input[name='user_pass']").clear().type("test")
        cy.get("button[name='armFormSubmitBtn']").click()
        cy.get("div[class='arm-df__fc--validation__wrap']").should("be.visible")
        cy.get("div[class='arm-df__fc--validation__wrap']>ul>li").should('include.text',wrong_pass)

    }
)

it("login with wrong credantials",
    ()=>{
        cy.wait(4)
        cy.get('input[name="user_login"]').type("test")
        cy.get("input[name='user_pass']").clear().type("test")
        cy.get("button[name='armFormSubmitBtn']").click()
        cy.get("div[class='arm-df__fc--validation__wrap']").should("be.visible")
        cy.get("div[class='arm-df__fc--validation__wrap']>ul>li").should('include.text',wrong_username)

    }
)
// describe block complete here
})