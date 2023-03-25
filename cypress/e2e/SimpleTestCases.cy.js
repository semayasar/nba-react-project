/// <reference types = "cypress" />
describe('Search Area Function is working', () => {
  beforeEach(()=>{
    cy.viewport(1920 , 1080)
    cy.visit('http://localhost:3000/') 
  })
   it('Kullanici arama yaptiginda sadece arama yerindeki basketbolcu gelmelidir', () => {
    cy.get('.w-50').type('Kobe Bryant')
    cy.get('.card-title').should('have.text' , 'Kobe Bryant')
  }) 
   it('Kullanici olmayan bir oyuncu yazdiginda herhangi bir basketbolcu gelmemelidir', () => {
    cy.get('.w-50').type('Fatih ATAS')
    cy.get('card-title').should('have.length' , 0)
  }); 
   it('Kullanici oyuncu resminin üzerine tiklayip oyuncuya ait bilgileri gorebilmelidir', () => {
    cy.get('img.player-logo').each(($player)=>{
      cy.wrap($player).click()
    })
    cy.get('div.player-card').each(($playerCard)=>{
      cy.wrap($playerCard).should('be.visible')
    }) 
  }); 
  it('kullanici bilgilerinde basket topu resmi gormelidir', () => {
    cy.get('.w-50').type('Kareem')
    cy.get('img.player-logo').click()
    cy.get('.player-card').should('be.visible')
    cy.get('li.text-start').each(($info)=>{
      cy.wrap($info).contains(' 🏀 ').should('be.visible')
    })
  });

})