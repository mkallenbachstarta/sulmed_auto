describe('Cria uma proposta no autoatendimento', () => {
    it('Acessa a homepage, contrata um plano e continua a proposta até o status Proposta Enviada', () => {
    // Acessa a homepage e preenche as informações iniciais
    cy.at_inicial();  
    cy.wait(5000)
    // Continua com a criação da proposta
    cy.at_happyproposal();
    cy.deleteLastProposal()
  });
});
