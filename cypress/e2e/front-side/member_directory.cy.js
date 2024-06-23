/// <reference types="cypress" />

const searchname = "armember2206249a"
const directory_url = "http://localhost/test_lite1/member-directory/"
const nosearchfound ="No Search Result Found."
describe("Member directory module",()=>{

    it("Without login check member directory module",()=>{
        
        cy.visit(directory_url)
        cy.get('input[name="search"]').clear().type(searchname)
        cy.wait(500)
        cy.get('a[class="arm_directory_search_btn"]').click()
        cy.wait(3000)
        cy.get('div[class="arm_user_block_right"]>a').should('contain.text',searchname)
        cy.get('div[class="arm_user_block_left"]').click()
        
        cy.url().should('include',searchname)
        cy.wait(1000)
        cy.get('a[class="arm_profile_link"]').should('contain.text',searchname)
        cy.get('table[class="arm_profile_detail_tbl"]>tbody>tr').should("contain.text",searchname)

        // case without login check member directory module over
    })
    it("No search result found",()=>{
        cy.visit(directory_url)
        cy.get('input[name="search"]').clear().type("searchname")
        cy.get('a[class="arm_directory_search_btn"]').click()
        cy.wait(3000)
        cy.get('div[class="arm_directory_paging_container arm_directory_empty_list"]').should("contain.text",nosearchfound)
    })




    


    //Member Directory module over 
})


