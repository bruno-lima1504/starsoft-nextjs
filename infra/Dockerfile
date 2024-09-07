FROM node:18.20.4-alpine3.19 AS base

WORKDIR /src

COPY ../package.json ../package-lock.json* ./

RUN npm ci

COPY .. .

CMD ["npm", "run", "dev"]