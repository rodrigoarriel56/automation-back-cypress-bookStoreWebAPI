Feature: Exclusão de card de atividades no Trello

  Scenario: Excluir card de atividades
  
    Given que existe um card chamado "Estudar BDD" na lista "A Fazer"
    When eu envio uma requisição para excluir o card "Estudar BDD"
    Then o card deve ser removido com sucesso
    And a resposta deve confirmar a exclusão
