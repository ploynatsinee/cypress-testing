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
  it('click button signin', () => {
    cy.get('form > button').click()
  })
  it('click add post', () => {
    cy.get('.Nav-ul > :nth-child(2) > a').wait(2000).click()
  })
  it('select sport', () => {
    cy.get('select').select('running')
  })
  it('location', () => {
    cy.get('.locationInput').type('Bangkok')
  })
  
})