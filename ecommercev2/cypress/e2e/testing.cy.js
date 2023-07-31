describe('Home Component Tests', () => {
    beforeEach(() => {
      cy.visit('/home'); 
    });
  
    it('renders Home component without errors', () => {
      cy.get('Home').should('exist');
    });
  
    it('displays all features with titles and descriptions', () => {
      cy.contains('FREE SHIPPING');
      cy.contains('Free shipping on all orders.');
  
      cy.contains('30 DAY RETURN');
      cy.contains('Easy to return, and refund within 14 days.');
  
      cy.contains('GIFT CARDS');
      cy.contains('Buy gift cards, and use coupons easily.');
  
      cy.contains('CONTACT US');
      cy.contains('Keep in touch via email and support system.');
    });
  
    it('contact us feature links to the correct destination', () => {
      cy.contains('CONTACT US').should('have.attr', 'href', '/contact');
    });
  
    it('renders Slideshow component within Home component', () => {
      cy.get('Slideshow').should('exist');
    });
  });
  