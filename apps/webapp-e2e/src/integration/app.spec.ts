import { getGreeting } from '../support/app.po';

describe('fullstack-cnode', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to fullstack-cnode!');
  });
});
