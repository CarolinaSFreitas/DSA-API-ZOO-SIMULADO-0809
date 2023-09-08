import { Sequelize } from 'sequelize';
import { Animal } from "../models/Animal.js"
import { Op } from "sequelize";

//função de get - vai listar os animais no insomnia
export async function animalIndex(req, res) {
    try {
        const animais = await Animal.findAll()
        res.status(200).json(animais)
    } catch (error) {
        res.status(400).send(animais)
    }
}

// função de create - vai criar um novo registro no insomnia
export async function animalCreate(req, res) {
    const { nome, raca, idade, custo_mensal } = req.body

    if (!nome || !raca || !idade || !custo_mensal) {
        res.status(400).json("Erro... Informe todos os atributos.")
        return
    }

    try {
        const animais = await Animal.create({
            nome, raca, idade, custo_mensal
        })
        res.status(201).json(animais)
    } catch (error) {
        res.status(400).send(animais)
    }
}

// função de update/alterar registro no insomnia
export async function animalUpdate(req, res) {
    const { id } = req.params

    const { nome, raca, idade, custo_mensal } = req.body

    if (!nome || !raca || !idade || !custo_mensal) {
        res.status(400).json("Erro... Informe todos os atributos.")
        return
    }

    try {
        const animais = await Animal.update({
            nome, raca, idade, custo_mensal
        }, {
            where: { id }
        })
        res.status(200).json(animais)
    } catch (error) {
        res.status(400).send(animais)
    }
}

//função de deletar registro no insomnia
export async function animalDelete(req, res) {
    const { id } = req.params

    try {
        await Animal.destroy({
            where: { id }
        })
        res.status(200).json({ msg: "Ok! Removido com sucesso :)" })
    } catch (error) {
        res.status(400).send(error)
    }
}

// função finder pra achar pela palavra chave (raça do animal)
export async function animalRaca(req, res) {
    try {
        const { raca } = req.params;

        const animais = await Animal.findAll({
            where: {
                raca: raca
            }
        });

        res.status(200).json(animais);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocorreu um erro ao buscar animais por raça." });
    }
}

// função de custo mensal igual ou superior ao informado como parâmetro

export async function animalCustoMensal(req, res) {
    const { minCustoMensal } = req.params;

    try {
        const animais = await Animal.findAll({
            where: {
                custo_mensal: {
                    [Op.gte]: minCustoMensal,
                },
            },
        });

        res.status(200).json(animais);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: "Ocorreu um erro ao buscar animais por custo mensal." });
    }
}

//função que retorna os animais com o intervalo de idades na url (idade1-idade2)
export async function animalIntervaloIdade(req, res) {

    const { idade1, idade2 } = req.params

    try {
        const animais = await Animal.findAll({
            where: {
                idade: {
                    [Op.between]: [idade1, idade2]
                }
            }
        })
        res.status(200).json(animais)
    } catch (error) {
        res.status(400).send(error)
    }
}

//função de retornar os animais por ordem de idade em ordem ASC 
export async function animalOrdem(req, res) {

    try {
        const animais = await Animal.findAll({
            attributes: ['nome', 'raca', 'idade'],
            order: [
                // Will escape title and validate ASC against a list of valid direction parameters
                ['idade', 'ASC']

            ]
        })
        res.status(200).json(animais)
    } catch (error) {
        res.status(400).send(error)
    }
}

//função de soma do custo mensal de todos os animais
export async function custosTotais(req, res) {
    try {
        const somaTotal = await Animal.sum('custo_mensal');

        res.status(200).json({ somaTotal });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao calcular os custos mensais totais dos animais.' });
    }
}

//função de soma do custo mensal dos animais POR RAÇA passada como parâmetro
export async function custoTotalRaca(req, res) {
    const { raca } = req.params; //

    try {
        const totalPorRaca = await Animal.sum('custo_mensal', {
            where: {
                raca: raca,
            },
        });

        res.status(200).json({ totalPorRaca });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao calcular os custos totais dos animais da raça especificada.' });
    }
}

//função que retorna raça e quantidade de animais por raça (agrupamento)

export async function racaEQuantia(req, res) {
    try {
        const animais = await Animal.findAll({
            attributes: ['raca', [Sequelize.fn('count', Sequelize.col('*')), 'quantidade']],
            group: ['raca'],
        });

        res.status(200).json(animais);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao buscar a quantidade de animais por raça.' });
    }
}
