import { Router } from "express"
import { animalCreate, animalIndex, animalUpdate, animalDelete, animalRaca, animalCustoMensal, animalOrdem, animalIntervaloIdade, custosTotais, custoTotalRaca, racaEQuantia } from "./controllers/animalController.js"

const router = Router()

router.get("/animal", animalIndex) //rota pra listagem
      .post("/animal", animalCreate) //rota pra criação de registro
      .put("/animal/:id", animalUpdate) //rota pra alteração do registro
      .delete("/animal/:id", animalDelete) //rota pra deletar registro de animal
      .get("/animal/raca/:raca", animalRaca) //rota pra buscar animals pela raça definida na url ex: localhost:3000/animal/raca/Orangotango
      .get("/animal/custo_mensal/:minCustoMensal", animalCustoMensal) //mostra custo mensal baseado em valor minimo como parametro igual ou superior
      .get("/animal/idade/:idade1-:idade2", animalIntervaloIdade) //rota pro metodo q a idade esteja no intervalo passado como parâmetros
      .get("/animal/ordem", animalOrdem) //rota pra listar por ordem de idade crescente, o get é sempre pra listagem/pesquisar
      .get("/animal/totais", custosTotais) //rota pra mostrar os custos totais dos custos mensais
      .get("/animal/total-raca/:raca", custoTotalRaca) //rota pra mostrar os custos totais POR RAÇA
      .get("/animal/raca-e-quantia", racaEQuantia) //rota pra mostrar raça e a quantia de animais da raça
      





export default router