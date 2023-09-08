import express from 'express'
import { sequelize } from './database/conecta.js'
import { Animal } from './models/Animal.js'
import routes from './routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(routes)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem sucedida.');
    await Animal.sync({alter: true})          //vai ciar a tabela no banco(se nao existir já) e permitir alterações de campos 
    console.log("Tabela de Animais: Ok!")
  } catch (error) {
    console.error('Impossível conectar ao banco de dados:', error);
  }
}
conecta_db()

app.listen(port, () => {
  console.log(`API do Zoológico Rodando na Porta ${port}`)
})

app.get('/', (req, res) => {
  res.send('Sistema do Zoológico')
})