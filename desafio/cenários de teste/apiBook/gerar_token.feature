Feature: Autenticação de usuários via API

  Scenario: Gerar um token de acesso
  
    Given que o usuário foi criado com sucesso
    When eu envio uma requisição de autenticação com as credenciais do usuário
    Then um token de acesso deve ser gerado
    And a resposta deve conter o token JWT válido
