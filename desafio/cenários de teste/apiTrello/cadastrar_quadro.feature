Feature: Cadastro de novo quadro no Trello

  Scenario: Cadastrar quadro novo no Trello
  
    Given que estou autenticado na API do Trello
    When eu envio uma requisição para criar um quadro com o nome "Projetos 2025"
    Then o quadro deve ser criado com sucesso
    And o nome do quadro deve ser "Projetos 2025"
