/// <reference types="cypress" />

describe("Get user api test", () => {
    it("Get user with id : 2", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/2"
        }).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.name).to.eq("Adinath Nair VM")
        })
    })
})