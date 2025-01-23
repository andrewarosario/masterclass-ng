describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');

    // submit post form
    cy.get('input[name="title"]').type('Post title');
    cy.get('textarea[name="body"]').type('Post body');
    cy.get('button[type="submit"]').click();

    // check the post card
    cy.get('.post-title').should('contain', 'Post title');
    cy.get('.post-body').should('contain', 'Post body');
  });
});
