describe('Testes de Validação Home - Campos Obrigatórios', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.styles_text__8IFh6').eq(0).click();
        cy.get('.iubenda-cs-accept-btn').click();
    });

    it('Deixar CNPJ obrigatório vazio e verifica o erro', () => {
        cy.get('.styles_container__WxexR').eq(1).type('(51) 99508-7130');
        cy.get('.styles_container__WxexR').eq(2).type('teste@example.com');
        cy.contains('.styles_text__8IFh6', 'Continuar').click();
        cy.contains('Campo Obrigatório').should('not.exist');
    });

    it('Deixar Telefone obrigatório vazio e verifica o erro', () => {
        cy.get('.styles_container__WxexR').eq(0).type('29.943.540/0001-90');
        cy.get('.styles_container__WxexR').eq(2).type('teste@example.com');
        cy.contains('.styles_text__8IFh6', 'Continuar').click();
        cy.contains('Campo Obrigatório');
    });

    it('Deixar E-mail obrigatório vazio e verifica o erro', () => {
        cy.get('.styles_container__WxexR').eq(0).type('29.943.540/0001-90');
        cy.get('.styles_container__WxexR').eq(1).type('(51) 99508-7130');
        cy.contains('.styles_text__8IFh6', 'Continuar').click();
        cy.contains('Campo Obrigatório');
    });

    it('Campo de telefone não deve aceitar letras', () => {
        cy.get('.styles_container__WxexR').eq(0).type('29.943.540/0001-90');
        cy.get('.styles_container__WxexR').eq(1).type('ABC');
        cy.get('.styles_container__WxexR').eq(2).type('teste@example.com');
        cy.get('.styles_container__WxexR').eq(1).should('have.value', '');
    });

    it('Preencher o campo CNPJ com valor inválido e verifica o erro', () => {
        cy.get('.styles_text__8IFh6').eq(0).click();
        cy.get('.styles_container__WxexR').eq(0).type('11.111.111/1111-11');
        cy.contains('Atenção!').should('be.visible');
    });
});