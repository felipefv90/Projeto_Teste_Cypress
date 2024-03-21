Cypress.Commands.add('login',(email, senha) => {
    cy.get("input[type=email]").type(email);
    cy.get("input[type=password]").type(senha);
    cy.get("button[type=button]").contains('Entrar').click();
})

Cypress.Commands.add('verificaMensagem',(mensagem) => {
    cy.get("form span").should('have.text', mensagem);
})

Cypress.Commands.add('trueclick',() => {
    cy.get('.ProseMirror h1').first().click()
    cy.get('.ProseMirror h1').first().click()
    cy.get('.ProseMirror h1').first().click()
})