Feature: Exclusão de quadro no Trello

  Scenario: Excluir quadro
  
    Given que existe um quadro chamado "Projetos 2025" criado no Trello
    When eu envio uma requisição para excluir o quadro
    Then o quadro deve ser excluído com sucesso
    And a resposta deve confirmar a exclusão do quadro
