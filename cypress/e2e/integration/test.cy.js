describe('empty spec', () => {
  it('visit website', () => {
    cy.visit('https://fitfriends.vercel.app')
  })
  it('username input', () => {
    cy.get(':nth-child(1) > input').type('ploynatsinee')
  })
  it('password input', () => {
    cy.get(':nth-child(2) > input').type('1234')
  })
})