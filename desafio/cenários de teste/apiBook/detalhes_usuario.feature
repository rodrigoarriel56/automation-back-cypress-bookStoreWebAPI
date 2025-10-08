Feature: Consulta de detalhes do usuário

  Scenario: Listar os detalhes do usuário com os livros escolhidos
  
    Given que o usuário alugou dois livros de tecnologia
    When eu envio uma requisição para obter os detalhes do usuário
    Then a resposta deve conter os dados do usuário
    And deve listar os dois livros alugados
