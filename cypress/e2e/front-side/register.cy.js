
/// <reference types="cypress" />
const username = "armember2206247"
const useremail = "armember2206247@gm.com"
const firstname = "armember2206247"
const lastname = "armember2206247"
const password = "armember2206247"
const description = "This is for testing purposes only and it must works "
const redirection_url = "http://localhost/test_lite1/edit_profile/"
const specialurl ="http://localhost/test_lite1/armember2206247a"
const referredurl="http://localhost/test_lite1/forgot_password/"
const registerurl = "http://localhost/test_lite1/register/"
const emailwarnig ="This email is already registered, please choose another one."
const userwarning ="This username is already registered, please choose another one."
describe("Register functionality testing",()=>{
    
 /*   it("register successfully and redirect to selected page ",()=>{
        cy.visit(registerurl)
        cy.wait(400)
        cy.get('input[name="user_login"').clear().type(username)
        cy.get('input[name="first_name"').clear().type(firstname)
        cy.get('input[name="last_name"').clear().type(lastname)
        cy.get('input[name="user_email"').clear().type(useremail)
        cy.get('input[name="user_pass"').clear().type(password)
        cy.get('input[type="radio"][value="Female"]').next().click()
        cy.get('dt[class=arm__dc--head]').click()
        cy.get('dd[class=arm__dc--items-wrap]>ul>li[data-label="India"]').click()
        cy.get('input[type="checkbox"]').each(($el) => {
            cy.wrap($el).next().click(); // Wrap the element for Cypress chaining
          });
        cy.get('textarea[name=description]').clear().type(description)
        cy.get('button[name=armFormSubmitBtn]').click()

        cy.wait(5000)
        cy.url().should("eql",redirection_url)
    
    })
    it("register successfully and redirect to special url ",()=>{
        cy.visit(registerurl)
        cy.wait(400)
        cy.get('input[name="user_login"').clear().type(username+'a')
        cy.get('input[name="first_name"').clear().type(firstname+'a')
        cy.get('input[name="last_name"').clear().type(lastname+'a')
        cy.get('input[name="user_email"').clear().type(useremail+'a')
        cy.get('input[name="user_pass"').clear().type(password+'a')
        cy.get('input[type="radio"][value="Female"]').next().click()
        cy.get('dt[class=arm__dc--head]').click()
        cy.get('dd[class=arm__dc--items-wrap]>ul>li[data-label="India"]').click()
        cy.get('input[type="checkbox"]').each(($el) => {
            cy.wrap($el).next().click(); // Wrap the element for Cypress chaining
          });
        cy.get('textarea[name=description]').clear().type(description+'1')
        cy.get('button[name=armFormSubmitBtn]').click()

        cy.wait(5000)
        cy.url().should("eql",specialurl)
    
    })
*/

/*it("register successfully and redirect to special url ",()=>{
    cy.visit(referredurl)
    cy.wait(1000)
    cy.visit(registerurl)
    cy.wait(400)
    cy.get('input[name="user_login"').clear().type(username+'a')
    cy.get('input[name="first_name"').clear().type(firstname+'a')
    cy.get('input[name="last_name"').clear().type(lastname+'a')
    cy.get('input[name="user_email"').clear().type(useremail+'a')
    cy.get('input[name="user_pass"').clear().type(password+'a')
    cy.get('input[type="radio"][value="Female"]').next().click()
    cy.get('dt[class=arm__dc--head]').click()
    cy.get('dd[class=arm__dc--items-wrap]>ul>li[data-label="India"]').click()
    cy.get('input[type="checkbox"]').each(($el) => {
        cy.wrap($el).next().click(); // Wrap the element for Cypress chaining
      });
    cy.get('textarea[name=description]').clear().type(description+'1')
    cy.get('button[name=armFormSubmitBtn]').click()

    cy.wait(5000)
    cy.url().should("eql",referredurl)

})
*/


it("check existing username and useremail",()=>{

    cy.visit(registerurl)
    cy.wait(400)
    cy.get('input[name="user_login"').clear().type(username+'a')
    cy.get('input[name="first_name"').clear().type(firstname+'a')
    cy.get('div[class="arm-df__fc--validation__wrap"]').should("be.visible")
    cy.get('div[class="arm-df__fc--validation__wrap"]').should('include.text',userwarning)
    cy.get('input[name="user_email"').clear().type(useremail+'a')
    cy.get('input[name="first_name"').clear().type(firstname+'a')
    cy.get('div[class="arm-df__fc--validation__wrap"]').should("be.visible")
    cy.get('div[class="arm-df__fc--validation__wrap"]').should('include.text',emailwarnig)
      

})

    //describe block obver here
})