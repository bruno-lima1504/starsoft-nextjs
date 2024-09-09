# Teste Starsfot - NextJS

<img src="./public/home.png" alt="signup screen">
<br />
<br />

<img src="https://img.shields.io/static/v1?label=Docker&message=Container&color=2496ED&style=for-the-badge&logo=docker"/>
<img src="https://img.shields.io/static/v1?label=next.js&message=Framework&color=black&style=for-the-badge&logo=next.js"/>
<img src="https://img.shields.io/static/v1?label=Redux&message=State%20Management&color=764ABC&style=for-the-badge&logo=redux"/>
<img src="https://img.shields.io/static/v1?label=scss&message=CSS&color=cc6699&style=for-the-badge&logo=sass"/>
<img src="https://img.shields.io/static/v1?label=React%20Query&message=State%20Management&color=FF4154&style=for-the-badge&logo=reactquery"/>

## Scripts

Iniciar serviços web (Docker):

    - npm run services:up

Parar serviços web (Docker):

    - npm run services:down

Executar os testes(Jest):

    - npm run test

Executar verificação de formatação de código:

    - npm run lint:prettier:check

Executar correção de formatação de código:

    - npm run lint:prettier:fix

## Continuous Integration

Apenas para fins de demonstração deixei rodando 2 scripts no Github actions realizando CI do projeto, é um script que executado os testes e a verificação da formatação do código

Ambos estão com rules no github e o pullrequest só pode ser executado com o retorno positivo dos scripts

os arquivos estão em ./github/workflows.
