# Guia de Deploy da Aplicação

Este documento descreve o processo de deploy da aplicação utilizando GitHub e Vercel como provedores de hospedagem.

## Pré-requisitos:

- Conta no GitHub
- Conta no Vercel
- Acesso ao repositório da aplicação no GitHub

## Commit e Push para o GitHub:

Este guia ja está considerando que o a branch main não será utilizada para desenvolvimento.

- Ao finalizar as alterações no projeto:

      - git diff

  Verifique se as suas alterações exibidas foram as que você trabalhou antes de passar seus arquivos para a staging area.

- Após verificar e com tudo correto, iremos enviar as alterações para a staging area

  para adicionar todos os arquivos que sofreram alterações:

        - git add -A

  para adicionar um arquivo específico:

        - git add arquivo.js

Os arquivos que sofreram esse processo agora estão disponíveis para a realização do `commit`:

        - git commit -m "msg: mensagem de commit"

Após seu commit ser realizado com sucesso basta executar o `push` para o repositório:

se for o primeiro push para essa branch é necessario criar a branch no repositório de origem que o projeto foi clonado.

         - git push -u origin myBranch

Se a branch já existir no repositório basta:

        - git push

## Preview e Production:

Ao finalizar o push os arquivos já estarão disponíveis no repositório do Github, e você verá uma mensagem avisando que uma `pull request` pode ser solicitada.

Como estamos utilizando a Vercel qualquer branch fora da main por padrão ja irá gerar um deploy em ambiente de Preview(Homologação) que pode ser consultado antes de enviarmos os arquivos para produção.

### CI

Ao enviar um `pull request` automaticamente será iniciando os scripts do nosso CI para fins de demostração estamos executando apenas a verificação de testes automatizados de integração e a verificação da formatação de código (lint) através do Github actions, ambas estão com Rulesets configuradas para liberar o pull request apenas se todos os processos de integraram obtiverem sucesso.

Para enviar as atualizações para produção agora basta realizar o merge ao final do processo de CI.
