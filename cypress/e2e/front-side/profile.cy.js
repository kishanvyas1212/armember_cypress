/// <reference types="cypress" />
const username = "armember2206245a"
const password = "armember2206245a"
const baseurl ="http://localhost/test_lite1/"
const profilelink ="http://localhost/test_lite1/arm_member_profile/"

describe("profile module",()=>{
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
    it("check the profile module works",()=>{
        cy.visit(profilelink)
        cy.reload()
        cy.wait(2000)
        cy.get('a[class="arm_profile_link"]').should('contain.text',username)
        cy.get('table[class="arm_profile_detail_tbl"]>tbody>tr').should("contain.text",username)


    })



    // profile module over here
})