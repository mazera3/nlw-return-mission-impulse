# Rodar o servidor
- Modo desenvolvimento: `npm run dev`

# Stage 3 – Novas Habilidades

- github [Front-end - stage1](https://github.com/mazera3/nlw-return-mission-impulse/tree/stage1)
- github [Front-end - stage2](https://github.com/mazera3/nlw-return-mission-impulse/tree/stage2)
- Nessa aula vamos construir o back-end da aplicação utilizando Node.js e TypeScript. Você vai conhecer conceitos importantes do back-end como SOLID e testes automatizados, além de aprender como persistir informações no banco de dados com Prisma.

# GitHub
- git init
- git add .
- git commit -m "stage 3"
- git branch -M stage3
- git remote add origin git@github.com:mazera3/nlw-return-mission-impulse.git
- git push -u origin stage3

# Comandos

- npm init -y
- npm i typescript @types/node ts-node-dev -D
- npx tsc --init
- npm i express
- npm i @types/express -D

# Banco de Dados

- SQLite, Prisma, 
- [prisma.io](https://www.prisma.io/): Next-generation Node.js and TypeScript ORM - Suporte a PostgreSQL, MySQL, SQL Server, SQLite, MongoDB and CockroachDB.
- npm i prisma -D (desenvolvimento)
- npm i @prisma/client (produção)
- npx prisma init
* Esquema Prisma foi criado em prisma/schema.prisma
* Próximos passos:
1. Configure o DATABASE_URL no arquivo .env para apontar para seu banco de dados existente
2. Defina o provedor do bloco datasource em schema.prisma para corresponder ao seu banco de dados: postgresql, mysql, sqlite, sqlserver, mongodb ou cockroachdb (Preview).
3. Execute prisma db pull para transformar seu esquema de banco de dados em um esquema Prisma.
4. Execute prisma generate para gerar o Prisma Client. Você pode então começar a consultar seu banco de dados.
* https://www.prisma.io/docs/concepts/components/prisma-schema
- npx prisma migrate dev (ou deploy): cria a tabela no banco de dados.
- npx prisma studio (abre uma interface de navegação)

# Email

- npm i nodemailer
- npm i @types/nodemailer -D
- [mailtrap](https://mailtrap.io/): Email Sandbox Service