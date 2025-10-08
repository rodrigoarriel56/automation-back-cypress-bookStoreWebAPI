Feature: Cadastro de lista de atividades em um quadro do Trello

  Scenario: Cadastrar lista de atividades
  
    Given que um quadro válido foi criado no Trello
    When eu envio uma requisição para adicionar uma lista chamada "A Fazer" ao quadro
    Then a lista deve ser criada com sucesso
    And a resposta deve conter o ID e o nome da lista
