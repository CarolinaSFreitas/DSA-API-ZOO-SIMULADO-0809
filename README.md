# DSA-Aula6-SIMULADO-0809
Aula do dia 08/09 - SIMULADO Zoológico 

Simulado do Trabalho #1: Criação de APIs para manipulação de uma tabela do banco de
dados

Utilizando o NodeJS e os pacotes Express, Sequelize e MySQL construir uma API, conforme as indicações a seguir.

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

Conceitos:
- Até 3: C
- Até 5: B
- Até 7: A
