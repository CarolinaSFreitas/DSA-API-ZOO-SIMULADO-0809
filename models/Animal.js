import { DataTypes } from "sequelize";
import { sequelize } from '../database/conecta.js'

export const Animal = sequelize.define('Animais', { // nome da tabela
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    custo_mensal: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false
    },
    ambiente: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "Terrestre"
    }
}, {
    timestamps: false
});

