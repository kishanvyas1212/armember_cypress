/// <reference types="cypress" />

var username = "armember2805243"
var password ="armember2805243"
var firstname = "test1"
var lastname ="test2"
var file_path = "C:\\Users\\91635\\Pictures\\Default.jpg"
var success_msg = "Your profile has been updated successfully."
var edit_profile_url = "http://localhost/test_lite1/edit_profile"
var useremail= "armember1@gmail.com"
var emailwarnig ="This email is already registered, please choose another one."
describe("edit profile functionality",()=>{
    beforeEach(()=>{
        cy.clearAllCookies()
        cy.wait(1)
        cy.visit("http://localhost/test_lite1/login/")
        cy.wait(4)
        cy.get('input[name="user_login"]').type(username)
        cy.get("input[name='user_pass']").clear().type(password)
        cy.get("button[name='armFormSubmitBtn']").click()
    })

    it("check edit profile success message",()=>{
        cy.wait(2000)
        cy.visit(edit_profile_url)
        cy.wait(1000)
        cy.get('input[name="first_name"]').clear().type(firstname)
        cy.get('input[name="last_name"]').clear().type(lastname)
       
        // cy.get('input[type="file"][ name="avatar"]').selectFile(file_path)  
        cy.get('button[name="armFormSubmitBtn"]').click()
        cy.wait(10000)
        
        cy.get("div[class='arm_success_msg']").should("be.visible")
        cy.get("div[class='arm_success_msg']>ul>li").should('include.text',success_msg)
        cy.reload()
        cy.wait(1000)
        cy.get('input[name="first_name"]').should('have.value',firstname)
        cy.get('input[name="last_name"]').should('have.value',lastname)
    })
    it("check duplicate email address validation",()=>{
        cy.wait(2000)
        cy.visit(edit_profile_url)
        cy.wait(1000)
        cy.get('input[name="user_email"]').clear().type(useremail)
        cy.get('input[name="user_pass"]').clear().type("test")
        cy.get('div[class="arm-df__fc--validation__wrap"]').should("be.visible")
        cy.get('div[class="arm-df__fc--validation__wrap"]').should('include.text',emailwarnig)
    })
      
    
})