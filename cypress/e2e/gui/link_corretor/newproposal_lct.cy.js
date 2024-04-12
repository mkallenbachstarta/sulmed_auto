describe('Cria uma proposta como corretor', () => {
    it('Contrata um plano e continua a proposta até o status Proposta Enviada', () => {
      cy.lct_inicial()
      cy.wait(5000)
      cy.at_happyproposal();
      cy.deleteLastProposal()
  });
});
