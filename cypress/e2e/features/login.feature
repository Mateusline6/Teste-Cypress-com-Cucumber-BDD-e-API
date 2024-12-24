Feature: Teste de login

  Scenario: Usuário faz login com sucesso
    Given que o usuário acessa a página de login
    When ele insere o usuário e a senha
    Then ele deve ser redirecionado para a página inicial
