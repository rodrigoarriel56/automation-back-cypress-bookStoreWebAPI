Feature: Aluguel de livros de tecnologia

  Scenario: Alugar dois livros de tecnologia
  
    Given que o usuário está autorizado
    And existem livros de tecnologia disponíveis
    When eu envio uma requisição para alugar dois livros específicos
    Then os livros devem ser alugados com sucesso
    And a resposta deve confirmar o aluguel dos dois livros
