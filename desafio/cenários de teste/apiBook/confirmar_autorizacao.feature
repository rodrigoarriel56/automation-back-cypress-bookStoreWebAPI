Feature: Verificação de autorização de usuários

  Scenario: Confirmar se o usuário está autorizado
  
    Given que o usuário possui um token de acesso válido
    When eu envio uma requisição autenticada para verificar autorização
    Then a API deve confirmar que o usuário está autorizado
