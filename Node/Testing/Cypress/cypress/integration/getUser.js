/// <reference types="cypress" />

describe("Get user api test", () => {
    it("Get user with id : 2", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users"
        }).then(res => {
            cy.log(res.body[0].id)
            expect(res.status).to.eq(200)
            //expect(res.body.name).to.eq("John Doe")
        })
    })
})