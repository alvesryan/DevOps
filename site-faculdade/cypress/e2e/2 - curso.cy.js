describe('Teste referente a página cursos', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5500/cursos.html')
    })
    it('Validar ordenação cursos', () => {
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('table tbody tr:first-child td:first-child').should('contain', 'Administração')
    })

    it('validar Filtro de Cursos',() =>{
      cy.get('input[type=search').type('Ciencia da computação')
      cy.get('table tbody tr').should('have.length', 1)
    })

    it('Validar filtro por semestre', () =>{
        cy.get('input[type=search').type('Ciencia da computação')
        cy.get('table tbody tr').should('have.length', 1)
    })
})