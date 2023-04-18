/// <reference types="cypress" />


it('test #6', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/');
  cy.get('.new-todo').type("Clean room{enter}");
  
  //cy.get('.clear-completed').click();
  //cy.get('label').contains('Clean room');
  cy.get('label').should('have.text', 'Clean room'); //Assertion
  cy.get('.toggle').should('not.to.be.checked');
  cy.get('.toggle').click();
  cy.get('.toggle').should('to.be.checked')
  //.should('have.css', 'text-decoration-line', 'line-through');
})