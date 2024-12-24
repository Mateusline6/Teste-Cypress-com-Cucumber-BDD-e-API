Feature: Busca e Selecao de Produtos

    Background: 
    Given Usuário realiza o login

  Scenario: Realizar busca de produto
    Given acessar aba de produtos
    When pesquisar produto
    Then os resultados de busca devem exibir produtos relacionados

  Scenario: Incluir produto no carrinho
    Given acessar aba de produtos
    When pesquisar produto
    Then seleciono o produto que deve aparecer no carrinho

  Scenario: Validar os produtos no carrinho na tela de pagamento
    Given que o usuário está logado
    When ele acessa o carrinho
    Then os produtos no carrinho devem corresponder aos produtos selecionados