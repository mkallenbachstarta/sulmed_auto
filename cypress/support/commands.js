const moment = require('moment');
Cypress.Commands.add('at_inicial', () => {
    // Visita a página inicial
    cy.visit('/');
  
    // Clica em algum elemento com a classe .styles_text__8IFh6 (ajuste conforme necessário)
    cy.get('.styles_text__8IFh6').eq(0).click();
  
    // Preenche o primeiro campo de entrada com o CNPJ
    cy.get('.iubenda-cs-accept-btn').click();
    cy.get('input.styles_start__0G8BB').eq(0).type('35.621.879/0001-73'); // Adiciona um atraso de 100ms
  
    // Aguarda 500 milissegundos entre os preenchimentos (opcional)
    cy.wait(500);
  
    // Preenche o segundo campo de entrada com o telefone
    cy.get('input.styles_start__0G8BB').eq(1).wait(1000).type('51995087130', { delay: 100 });
// Adiciona um atraso de 100ms
  
    // Aguarda 500 milissegundos entre os preenchimentos (opcional)
    cy.wait(500);
  
    // Preenche o terceiro campo de entrada com o e-mail
    cy.get('input.styles_start__0G8BB').eq(2).type('recive.code@mailinator.com');
  
    // Clica no botão 'Continuar'
    cy.contains('.styles_text__8IFh6', 'Continuar').click();
  });
  
  Cypress.Commands.add('at_happyproposal', () => {
    // Verifica se os valores iniciais estão corretos
    cy.get('[data-test-id="cnpj"]').should('have.value', '35.621.879/0001-73');
    cy.get('[data-test-id="enterprise"]').should('have.value', 'LILAS BAR LTDA');
    cy.get('[data-test-id="email"]').should('have.value', 'recive.code@mailinator.com');
    cy.get('[data-test-id="phone"]').should('have.value', '(51) 99508-7130');
  
    // Preenche informações adicionais
    cy.get('[data-test-id="agent"]').type('Test-Matheus').should('have.value', 'Test-Matheus');
    cy.get('[data-test-id="office"]').type('Test-QA').should('have.value', 'Test-QA');
  
    // Verificações do plano selecionado
    cy.get(':nth-child(6) > .styles_content__Qtu9A > .styles_row__dUGZ1 > :nth-child(3) > .styles_field__4JEIy > .styles_container__WxexR > .styles_center__V8miK')
      .type('1')
      .should('have.value', '1');  
    cy.get('.styles_text__SHuZa').eq(0).should('have.text', 'R$ 134,84');
    cy.get('.styles_text__oHiVl').eq(5).should('have.text', 'R$134,84');
  
    // Seleciona o vencimento da fatura e data de vigência
    const moment = require('moment');
    cy.get('[data-test-id="proposal_expiration"]').select('10');
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.css-1uvydh2').type(moment().format('DD/MM/YYYY'));
    
    // Clica no botão 'Continuar'
    cy.contains('.styles_text__8IFh6', 'Continuar').click();

    cy.get('[style="width: 50%; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__ALMLy').should('have.text', '35621879000173')
    cy.get(':nth-child(3) > [style="width: 100%; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__ALMLy').should('have.text','LILAS BAR LTDA')
    cy.get(':nth-child(5) > :nth-child(3) > .styles_text__ALMLy').should('have.text', '51.030-490')
    cy.get('[style="width: 94%; padding: 24px; text-align: center;"] > :nth-child(3) > :nth-child(5) > :nth-child(1) > .styles_text__ALMLy').should('have.text','RECIFE')
    cy.get('[style="width: 99%; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__ALMLy').should('have.text', 'BOA VIAGEM')
    cy.get('[style="width: 94%; padding: 24px; text-align: center;"] > :nth-child(3) > :nth-child(7) > :nth-child(1) > .styles_text__ALMLy').should('have.text', 'Test-Matheus')
    cy.get(':nth-child(7) > [style="width: 100%; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__ALMLy').should('have.text', '(51) 99508-7130')
    cy.get(':nth-child(7) > :nth-child(3) > .styles_text__ALMLy').should('have.text', 'recive.code@mailinator.com')
    cy.get(':nth-child(1) > [style="width: 90px; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__pR2Lp').should('have.text', 'R$ 134,84')
    cy.get(':nth-child(4) > [style="width: 90px; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__pR2Lp').should('have.text', 'R$134,84')
    cy.get('.styles_rightButton__3Jlwa > .styles_container__vqOJJ > .styles_text__8IFh6').click()
    cy.wait(5000)
    cy.contains('Proposta foi enviada para você!')
  });

  Cypress.Commands.add('deleteLastProposal', () => {
    cy.visit('https://homol.backoffice.sulmed.startaideia.dev/admin/auth/login');
    cy.get('[name="username"]').type('admin');
    cy.get('[name="password"]').type('admin');
    cy.get('.btn-primary').click();
    cy.get('[href="https://homol.backoffice.sulmed.startaideia.dev/admin/sulmed/propostas"]').click();
    cy.get('.iCheck-helper').eq(14).click();
    cy.get('.grid-select-all-btn > .dropdown-toggle').click();
    cy.contains('Apagar vários').click();
    cy.get('.swal2-confirm').click();
    cy.wait(2000);
    cy.get('#swal2-title').should('have.text', 'Remoção completada com sucesso!');
  });




  Cypress.Commands.add('ct_happyproposal', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Retorna 'false' para indicar ao Cypress que você deseja ignorar exceções não capturadas
      return false
    })
    cy.visit('https://homol.app.sulmed.startaideia.dev/proposta/home?corretor=consultor-eduardo')
    // Verifica se os valores iniciais estão corretos
    cy.get('[data-test-id="cnpj"]').type('35.621.879/0001-73');
    cy.get('[data-test-id="cnpj"]').should('have.value', '35.621.879/0001-73');
    cy.get('[data-test-id="enterprise"]').should('have.value', 'LILAS BAR LTDA');
    cy.get('[data-test-id="email"]').type('recive.code@mailinator.com');
    cy.get('[data-test-id="email"]').should('have.value', 'recive.code@mailinator.com');
    cy.get('[data-test-id="phone"]').type('(51) 99508-7130');
    cy.get('[data-test-id="phone"]').should('have.value', '(51) 99508-7130');
  
    // Preenche informações adicionais
    cy.get('[data-test-id="agent"]').type('Test-Matheus').should('have.value', 'Test-Matheus');
    cy.get('[data-test-id="office"]').type('Test-QA').should('have.value', 'Test-QA');
  
    // Intercepta a chamada para a API de planos e espera pela resposta 200
    cy.intercept('GET', 'https://homol.backoffice.sulmed.startaideia.dev/api/plans').as('getPlans')

    // Verificações do plano selecionado
    cy.get('#plans').select('Open Global Coparticipação Total');
    cy.get('#add_plan_button > .styles_text__8IFh6 > p').click()

    // Aguarda a resposta da API
    cy.wait('@getPlans').its('response.statusCode').should('eq', 200)

    // Após a resposta 200, prossiga com a ação desejada
    cy.get('input[data-test-id="table_plan_Open Global Coparticipação Total_age_24 - 28_owners"]').eq(1)
      .type('1')

    cy.get('.styles_text__SHuZa').eq(0).should('have.text', 'R$ 134,84');
    cy.get('.styles_text__oHiVl').eq(5).should('have.text', 'R$134,84');
  
    // Seleciona o vencimento da fatura e data de vigência
    const moment = require('moment');
    cy.get('[data-test-id="proposal_expiration"]').select('10');
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.css-1uvydh2').type(moment().format('DD/MM/YYYY'));
    
    // Clica no botão 'Continuar'
    cy.contains('.styles_text__8IFh6', 'Continuar').click();

    cy.get('[style="width: 50%; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__ALMLy').should('have.text', '35621879000173')
    cy.get(':nth-child(3) > [style="width: 100%; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__ALMLy').should('have.text','LILAS BAR LTDA')
    cy.get(':nth-child(5) > :nth-child(3) > .styles_text__ALMLy').should('have.text', '51.030-490')
    cy.get('[style="width: 94%; padding: 24px; text-align: center;"] > :nth-child(3) > :nth-child(5) > :nth-child(1) > .styles_text__ALMLy').should('have.text','RECIFE')
    cy.get('[style="width: 99%; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__ALMLy').should('have.text', 'BOA VIAGEM')
    cy.get('[style="width: 94%; padding: 24px; text-align: center;"] > :nth-child(3) > :nth-child(7) > :nth-child(1) > .styles_text__ALMLy').should('have.text', 'Test-Matheus')
    cy.get(':nth-child(7) > [style="width: 100%; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__ALMLy').should('have.text', '(51) 99508-7130')
    cy.get(':nth-child(7) > :nth-child(3) > .styles_text__ALMLy').should('have.text', 'recive.code@mailinator.com')
    cy.get(':nth-child(1) > [style="width: 90px; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__pR2Lp').should('have.text', 'R$ 134,84')
    cy.get(':nth-child(4) > [style="width: 90px; border-radius: 0px; padding-right: 10px; justify-content: center;"] > .styles_text__pR2Lp').should('have.text', 'R$134,84')
    cy.get('.styles_rightButton__3Jlwa > .styles_container__vqOJJ > .styles_text__8IFh6').click()
    cy.wait(5000)
    cy.contains('Proposta enviada!')
  });


  Cypress.Commands.add('lct_inicial', () => {
    cy.clearCookies(); // Limpa os cookies
    cy.clearLocalStorage(); // Limpa o armazenamento local
    cy.window().then(win => {
      win.sessionStorage.clear(); // Limpa a sessão de armazenamento
    });
  
    // Visita a página inicial
    cy.visit('https://homol.app.sulmed.startaideia.dev/?corretor=consultor-eduardo');
  
    // Clica em algum elemento com a classe .styles_text__8IFh6 (ajuste conforme necessário)
    cy.get('.styles_text__8IFh6').eq(0).click();
  
    // Preenche o primeiro campo de entrada com o CNPJ
    cy.get('.iubenda-cs-accept-btn').click();
    cy.get('input.styles_start__0G8BB').eq(0).type('35.621.879/0001-73');
  
    // Aguarda 500 milissegundos entre os preenchimentos (opcional)
    cy.wait(500);
  
    // Preenche o segundo campo de entrada com o telefone
    cy.get('input.styles_start__0G8BB').eq(1).wait(1000).type('51995087130', { delay: 100 });
  
    // Aguarda 500 milissegundos entre os preenchimentos (opcional)
    cy.wait(500);
  
    // Preenche o terceiro campo de entrada com o e-mail
    cy.get('input.styles_start__0G8BB').eq(2).type('recive.code@mailinator.com');
  
    // Clica no botão 'Continuar'
    cy.contains('.styles_text__8IFh6', 'Continuar').click();
  });
  

  Cypress.Commands.add('aut_code', () => {
    cy.clearCookies(); // Limpa os cookies
    cy.clearLocalStorage(); // Limpa o armazenamento local
    cy.window().then(win => {
      win.sessionStorage.clear(); // Limpa a sessão de armazenamento
    });
  
    // Visita a página inicial
    cy.visit('https://www.mailinator.com/v4/public/inboxes.jsp?to=recive.code');
    cy.contains('Sulmed - Token de Validação').first().click();
  });