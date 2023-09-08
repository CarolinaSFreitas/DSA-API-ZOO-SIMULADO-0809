# DSA-Aula6-SIMULADO-0809
Aula do dia 08/09 - SIMULADO Zoológico 

https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

Simulado do Trabalho #1: Criação de APIs para manipulação de uma tabela do banco de
dados

Utilizando o NodeJS e os pacotes Express, Sequelize e MySQL construir uma API, conforme as indicações a seguir.

### Lembrando que: 
+ **Getters, Setter & Virtuals:** https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/
+ **Agrupamento e ordem:** https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
+ **Finders:** https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  
**Pra iniciar**:
1. `` npm init -y ``
2. `` npm i express sequelize mysql2 ``
3. `` npm i --save-dev nodemon ``
4. `` npx nodemon app ``
5. No VS, criar um "app.js" como o arquivo do repo
6. Alterar o "package.json", adicionando a linha `` "type": "module", `` após a linha de "main": "index.js","

**Banco de Dados**:
1. Criar a pasta "database" com um arquivo chamado "conecta.js" e lá dentro inserir:

```

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('carros', 'aluno', 'senacrs', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    port: 3306 
  });
  
```` 

**No Insomnia**:
1. URL: http://localhost:3000/carros
2. Criar uma pasta pro projeto
3. Criar as HTTP Requests básicas (GET (listagem), POST (criação do registro no banco), PUT (alterações no registro), DEL (exclusão do registro))

-----

1. Criar um novo projeto para cadastrar os animais de um Zoológico a partir da model Animal, contendo os
atributos id, nome, raca, idade e custo_mensal. Ajustar para que o nome da tabela no banco fique
Animais. Não é necessário os atributos createdAt e updatedAt. Armazenar os dados no banco
zoologico_[nome do aluno]
2. Criar os métodos para realizar o CRUD (listagem, inclusão, alteração e exclusão) dos dados.
3. Criar os seguintes métodos de filtro:
   Que a raça seja igual a passada por parâmetro
   Que o custo_mensal seja igual ou superior ao informado como parâmetro
   Que a idade esteja no intervalo passado como parâmetros
4. Criar um método que retorne nome, raça e idade dos animais em ordem crescente de idade.
5. Criar um método que retorne os seguintes dados estatísticos:
   Soma do custo mensal de todos os animais
   Soma do custo mensal dos animais da raça passada como parâmetro
6. Criar um método que retorne raça e quantidade de animais por raça (agrupamento).
7. Alterar a estrutura da model (e da tabela) acrescentando o atributo ambiente – que deve conter o valor
default ‘Terrestre”

Testar todos os métodos a partir do Insomnia.

Conceito:
- Até 7: A✔️
