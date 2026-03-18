describe('Teste da página inicial, site faculdade', () =>{
  it ('Acessar página inicial', () =>{
    cy.visit('http://localhost:5500/index.html')
    cy.contains('Faculdade Tech')
  })

  it ('Abrir página Cursos', () =>{
    cy.visit('http://localhost:5500/index.html')
    cy.get('[href="cursos.html"]').click()
  })
})

