/// <reference Types="Cypress"/>

describe('Funcionalidade Playbook', () => { 

  beforeEach(() => {
    cy.visit('/')
    cy.login('usuariodaempresa33@gmail.com', 'Senha.123')

  })

  it('Validar botão de edição', () => {
    cy.contains('button', 'Conteúdos').click()
    cy.get("[href='/playbook']").click()
    cy.get('.bg-info-mid').click()
    cy.get('.bg-info-mid').click()

  })

  it('Relizar pesquisa por um tópico no Playbook', () => {
    const topico = 'Estratégia'
    cy.contains('button', 'Conteúdos').click()
    cy.get("[href='/playbook']").click()
    cy.wait(3000)
    cy.get('input').should('have.attr', 'placeholder', 'Pesquisar...').type(topico)
    cy.get('button p').contains(topico).click()
    cy.get('h1').contains(topico).should('exist')
  })

  it('Deve atualizar o título do playbook corretamente', () => {
    const novoTitulo = '1.Novo Título do Playbook'
    cy.contains('button', 'Conteúdos').click()
    cy.get("[href='/playbook']").click()
    cy.get('.bg-info-mid').click()
    cy.wait(2000)
    cy.trueclick()
    cy.get('.ProseMirror h1').first().type(novoTitulo)
    cy.get('.bg-info-mid').click()
    cy.get('.ProseMirror h1').first().should('have.text', novoTitulo)

  })

})
        
    

    