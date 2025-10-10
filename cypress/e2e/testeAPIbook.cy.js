describe('Criar usuário dinâmico a cada execução', () => {
  const timestamp = Date.now();
  const novoUsuario = {
    userName: `usuario_${timestamp}`,
    password: '@A#erriel2024'
  };

  it('Deve criar um novo usuário com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/User',
      body: novoUsuario,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('userID').and.to.be.a('string');
      expect(response.body).to.have.property('username').and.to.eq(novoUsuario.userName);

      // Opcional: salvar o userID e username para uso em outros testes
      Cypress.env('userID', response.body.userID);
      Cypress.env('username', response.body.username);
    });
  });
});

describe('Verificar se o usuário está autorizado', () => {
  const usuario = {
    userName: 'rodrigo.arriel',
    password: '@A#erriel2024'
  };

  it('Deve confirmar que o usuário está autorizado', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',
      body: usuario,
      failOnStatusCode: false, // Evita falha automática em caso de status 4xx/5xx
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq(true); // A resposta é um booleano: true se autorizado
    });
  });
});

describe('Listar livros disponíveis na livraria', () => {
  it('Deve retornar uma lista de livros com seus detalhes', () => {
    cy.request({
      method: 'GET',
      url: 'https://demoqa.com/BookStore/v1/Books',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('books').and.to.be.an('array');

      // Validação dos campos de cada livro
      response.body.books.forEach((book) => {
        expect(book).to.have.property('isbn').and.to.be.a('string');
        expect(book).to.have.property('title').and.to.be.a('string');
        expect(book).to.have.property('subTitle').and.to.be.a('string');
        expect(book).to.have.property('author').and.to.be.a('string');
        expect(book).to.have.property('publish_date').and.to.be.a('string');
        expect(book).to.have.property('publisher').and.to.be.a('string');
        expect(book).to.have.property('pages').and.to.be.a('number');
        expect(book).to.have.property('description').and.to.be.a('string');
        expect(book).to.have.property('website').and.to.be.a('string');
      });
    });
  });
});

describe('Alugar dois livros de livre escolha', () => {
  const token = Cypress.env('authToken');
  const userId = 'rodrigo.arriel';

  const livrosParaAlugar = [
    { isbn: '9781449325862' }, 
    { isbn: '9781449331818' }
  ];

  it('Deve alugar dois livros para o usuário', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/BookStore/v1/Books',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      },
      body: {
        userId: userId,
        collectionOfIsbns: livrosParaAlugar
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('books');
      expect(response.body.books).to.be.an('array').and.have.length(2);
    });
  });
});