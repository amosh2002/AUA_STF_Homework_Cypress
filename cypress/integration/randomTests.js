describe("My first test", () => {
    it("does nothing", () => {
        cy.visit("https://www.playstation.com/en-us/")
        cy.scrollTo(0, 500)
        cy.get("[data-di-id=\"6e8b1a81-58eefacc\"]").click();
        cy.get("[data-uuid=\"9bbaf564-9ca3-3f39-b350-9232667f237e\"]").click();
        cy.url().should('eql', "https://www.playstation.com/en-us/games/vampire-the-masquerade-bloodhunt/")
        cy.scrollTo(0, 800)
        cy.get("[data-mfe-name=\"compatibilityNotices\"]").should('contain.text', "In-game purchases optional");
        cy.get("[data-mfe-name=\"compatibilityNotices\"]").should('contain.text', "Online play required");
        cy.get("[data-mfe-name=\"compatibilityNotices\"]").should('contain.text', "Vibration function required");
        cy.get("[data-mfe-name=\"compatibilityNotices\"]").should('contain.text', "Trigger effect required");
        cy.get("[data-mfe-name=\"compatibilityNotices\"]").should('contain.text', "45 network players");
        cy.get("[data-mfe-name=\"compatibilityNotices\"]").should('contain.text', "Remote Play supported");
        cy.scrollTo(0, 2000)
        cy.get("[data-qa=\"mfeUpsell#productEdition1#editionName\"]").should('contain.text', "Founder’s Ultimate Edition");
        cy.get("[data-qa=\"mfeUpsell#productEdition0#editionName\"]").should('contain.text', "Vampire: The Masquerade - Bloodhunt");
    })

})