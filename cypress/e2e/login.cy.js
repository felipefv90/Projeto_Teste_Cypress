/// <reference types="Cypress"/>


describe ('Funcinalidade Login', () =>{
    const mensagem = '*E-mail ou senha inválidos'

    beforeEach(() => {
        cy.visit('/')
    })

    it('Realizar login com sucesso', () => {
        cy.login('usuariodaempresa33@gmail.com', 'Senha.123')
    })

    it('Não deverá realizar login com senha inválida', () => {
        cy.login('usuariodaempresa33@gmail.com', 'Senha')
        cy.verificaMensagem(mensagem)
    })

    it('Não deverá realizar login com email não cadastrado', () => {
        cy.login('usuario@gmail.com', 'Senha.123')
        cy.verificaMensagem(mensagem)
    })

    it('Não deverá realizar login com formatação de email inválido', () => {
        cy.login('usuariodaempresa33@gmail', 'Senha.123')
        cy.verificaMensagem(mensagem)
    })

    it('Não deverá realizar login com campo email em branco', () => {
        cy.login(' ', 'Senha.123')
        cy.verificaMensagem(mensagem)
    })

    it('Não deverá realizar login com campo senha em branco', () => {
        cy.login('usuariodaempresa33@gmail', ' ')
        cy.verificaMensagem(mensagem)
    })


})
