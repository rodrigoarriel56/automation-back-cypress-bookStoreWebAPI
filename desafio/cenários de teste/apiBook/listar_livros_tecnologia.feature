Feature: Listagem de livros de tecnologia

  Scenario: Listar livros disponíveis de tecnologia
  
    Given que o usuário está autorizado
    When eu envio uma requisição para listar livros da categoria "tecnologia"
    Then a API deve retornar uma lista de livros disponíveis dessa categoria
