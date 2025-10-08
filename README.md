# automation-back-cypress-bookStoreWebAPI

<img width="257" alt="image" src="https://github.com/user-attachments/assets/437e1f1e-dbbc-4474-9c89-07de3c2c96e1"/>
<h1>Testes Automatizados com Cypress</h1>

Projeto de automação de testes com a ferramenta Cypress.

- Cypress é uma ferramenta NodeJs para automatização de testes em JavaScript e Typescript.
  
- Pode ser utilizando em Linux, Mac e Windows, suporta navegadores de desktop, dispositivos móveis, remotos e na nuvem.

### Instalação
<img width="226" alt="image" src="https://github.com/user-attachments/assets/eaee904f-d74d-4418-85da-579e2a4a3a9e" />

Primeiro vamos instalar o Node.
A instalação do Node no Windows é relativamente bem simples, basta acessar o site oficial e executar download do instalador:
```sh
$ https://nodejs.org/en/download
```
Vamos utilizar a versão Current do Node é 19.9.0. 
Execute a instalação, seguindo as instruções na tela e pronto.

### ATENÇÃO
Na instalação do Node, selecionar(Marcar) a opção de adicionado ao PATH do Windows. Com isto, NÂO teremos que configurar as variavéis de ambiente.

### Após a instalação do NodeJs
Vamos verificar a versão do Node.js digitando no seu terminal o seguinte comando:
```sh
node --version
```
Deverá ser apresento a versão instalada:
```sh
v19.9.0
```

# Configuração do Ambiente Cypress

1 - Configuração do Ambiente Cypress:
```
Instalar Node.js
```
```
Escolher uma IDE de JavaScript para programar
```
2- Clone o projeto desejado
```
git clone https://github.com/rodrigoarriel56/automation-back-cypress-bookStoreWebAPI.git
```
3- Entrar na pasta do projeto
```
cd automation-back-cypress-bookStoreWebAPI
```

4- Instalar o Cypress executando o seguinte comando na raíz da pasta do seu projeto
```
npm install
```
5 - Execução dos testes:
```
5.1 - Para iniciar os testes, execute o seguinte comando no terminal do VS Code:
```
```
Para executar os testes via terminal: npx cypress run
```
```
Para executar os testes via browser: npx cypress run --browser chrome --no-exit
```
```
Para executar os testes via script salvo em package.json: npm run test:chrome    
```
```
Para executar os testes via consele do cypress: npx cypress open    
```