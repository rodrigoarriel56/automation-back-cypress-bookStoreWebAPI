Feature: Gerenciamento de usuários via API

  Scenario: Criar um novo usuário
  
    Given que a API de usuários está disponível
    When eu envio uma requisição para criar um novo usuário com dados válidos
    Then o usuário deve ser criado com sucesso
    And a resposta deve conter o ID do usuário
