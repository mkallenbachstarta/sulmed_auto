describe('Cria uma proposta como corretor', () => {
    it('Contrata um plano e continua a proposta até o status Proposta Enviada', () => {
    cy.ct_happyproposal();
    cy.deleteLastProposal()
  });
});
