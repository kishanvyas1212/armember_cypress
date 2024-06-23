/// <reference types="cypress" />
const username = "armember2206249"
const useremail = "armember2206249@gm.com"
const firstname = "armember2206249"
const lastname = "armember2206249"
const password = "armember2206249"
const description = "This is for testing purposes only and it must works "
const setupurl ="http://localhost/test_lite1/setup/"
const plan_amount ="3.00"
const currency ="USD"
const plan_name ="subscription"
const redirection_url ="http://localhost/test_lite1/thank_you/"


describe("Register functionality testing",()=>{
    it("setup with bank transfer",()=>{
        cy.clearAllCookies()
        cy.wait(500)
        cy.visit(setupurl)
        cy.wait(400)
        cy.get('input[name="user_login"').clear().type(username+'a')
        cy.get('input[name="first_name"').clear().type(firstname+'a')
        cy.get('input[name="last_name"').clear().type(lastname+'a')
        cy.get('input[name="user_email"').clear().type(useremail+'a')
        cy.get('input[name="user_pass"').clear().type(password+'a')
        cy.get('input[type="radio"][value="Female"]').next().click()
        // cy.get('dt[class=arm__dc--head]').click()
        // cy.get('dd[class=arm__dc--items-wrap]>ul>li[data-label="India"]').click()
        cy.get('input[type="checkbox"]').each(($el) => {
            cy.wrap($el).next().click(); // Wrap the element for Cypress chaining
          });
        cy.get('textarea[name=description]').clear().type(description+'1')
    
    // select plan and payment gateway
        cy.get('input[name=subscription_plan][value=4]').next().click()
    // assert the plan name
    cy.get('input[name=subscription_plan][value=4]').next().should('include.text',plan_name)
        cy.get('input[name="arm_payment_mode[bank_transfer]"]').prev().click()
    // fill bank transfer details 
          cy.get('input[name="bank_transfer[transaction_id]"]').clear().type(username)
          cy.get('input[name="bank_transfer[bank_name]"]').clear().type(username)
          cy.get('input[name="bank_transfer[account_name]"]').clear().type(username)
          cy.get('textarea[name="bank_transfer[additional_info]"]').clear().type(username)
        // assert plan value 
    
          cy.get('span[class=arm_plan_amount_text]').should('include.text',plan_amount)
          cy.get('span[class=arm_payable_amount_text]').should('include.text',plan_amount)
          cy.get('span[class=arm_payable_amount_text]').next().should('include.text',currency)
        cy.get('button[name=ARMSETUPSUBMIT]').click()
        cy.wait(10000)
        cy.url().should('eql',redirection_url)
    
    
    
    })


        //describe block obver here
})