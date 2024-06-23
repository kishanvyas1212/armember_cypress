/// <reference types="cypress" />
const username = "armember2206245a"
const password = "armember2206245a"
const baseurl ="http://localhost/test_lite1/"
const currentmebershipurl = baseurl+"current-membership/"
const plan_amount ="3.00"
const currency ="USD"
const plan_name ="subscription"
const planstart="June 23, 2024"
const expireson ="Never Expires"
const cycledate="June 24, 2024"
const paymenthistoryurl = baseurl+"payment-history/"
const plan_type ="Subscription"
const redirection_url ="http://localhost/test_lite1/thank_you/"
const Payment_gateway="Bank Transfer"
const payment_status ="Pending"
const payment_date ='June 23, 2024'
const cancel_plan_text ="Your Subscription will be canceled on June 24, 2024"
const no_plan_assigned ="There is no membership found."
const cancel_plan_text_immidetly ="Your subscription has been cancelled."

describe("current membership testing",()=>{
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
/*
    it("Current membership details check",()=>{
        cy.wait(5000)
        cy.visit(currentmebershipurl)
        cy.screenshot()
        cy.get("td[data-label='Membership Plan']").should('contain.text',plan_name)
        cy.get('td[data-label="Plan Type"]').should('contain.text',plan_amount)
        cy.get('td[data-label="Starts On"]').should('contain.text',planstart) 
        cy.get('td[data-label="Expires On"]').should('contain.text',expireson)
        cy.get('td[data-label="Cycle Date"]').should('contain.text',cycledate)
    })
    it("Current membership Make Payment with Bank Transfer",()=>{
        cy.wait(5000)
        cy.visit(currentmebershipurl)
        
        cy.get("button[class=arm_renew_subscription_button]").click()
        cy.wait(3000)
        cy.get('div[class=arm_current_user_plan_info]').should('contain.text',plan_name)
        cy.get('input[name="arm_payment_mode[bank_transfer]"]').prev().click()
        cy.wait(2000)  
        cy.get('input[name="bank_transfer[transaction_id]"]').clear().type(username)
        cy.get('input[name="bank_transfer[bank_name]"]').clear().type(username)
        cy.get('input[name="bank_transfer[account_name]"]').clear().type(username)
        cy.get('textarea[name="bank_transfer[additional_info]"]').clear().type(username)
        //asserting payment summery 
        cy.get('span[class=arm_plan_amount_text]').should('include.text',plan_amount)
        cy.get('span[class=arm_payable_amount_text]').should('include.text',plan_amount)
        cy.get('span[class=arm_payable_amount_text]').next().should('include.text',currency)
        cy.get('button[name=ARMSETUPSUBMIT]').click()
        cy.wait(10000)
        cy.url().should('eql',redirection_url)                
    })
    it("check payment history",()=>{
        cy.wait(600)
        cy.visit(paymenthistoryurl)
        cy.screenshot()
        cy.get("td[data-label='Transaction ID']").first().should('contain.text',username)
        cy.get('td[data-label="Plan"]').first().should('contain.text',plan_name)
        cy.get('td[data-label="Payment Gateway"]').first().should('contain.text',Payment_gateway)
        cy.get('td[data-label="Payment Type"]').first().should('contain.text',plan_type)
        cy.get('td[data-label="Transaction Status"]').first().should('contain.text',payment_status)
        cy.get('td[data-label="Amount"]').first().should('contain.text',plan_amount)
        cy.get('td[data-label="Payment Date"]').first().should('contain.text',payment_date)
    })

    //this is for checking plan after plan over
    it("Cancel member subscription plan, and plan will not cancel befor plan over ",()=>{
        cy.wait(700)
        cy.visit(currentmebershipurl)
        cy.get('button[class="arm_cancel_subscription_button arm_cancel_membership_link"]').click()
        cy.wait(1000)
        cy.get('td[class="arm_current_membership_cancelled_row"]').should('contain.text',cancel_plan_text)
        cy.reload()
        cy.get('td[data-label="Action"]').should('contain.text',"Cancelled")
        cy.screenshot()
    })

*/
    //this is for checking plan immedietly cancel 
    it("Cancel member subscription plan, and plan will cancel immedietly ",()=>{
        cy.wait(700)
        cy.visit(currentmebershipurl)
        cy.get('button[class="arm_cancel_subscription_button arm_cancel_membership_link"]').click()
        cy.wait(1000)
        cy.get('td[class="arm_current_membership_cancelled_row"]').should('contain.text',cancel_plan_text_immidetly)
        cy.reload()
        cy.get('td[class="arm_no_plan"]').should('contain.text',no_plan_assigned)

    })
})