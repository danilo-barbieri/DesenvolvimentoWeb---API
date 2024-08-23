const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class Endereco extends Model {};

Endereco.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    complemento: {
        type: DataTypes.STRING,
        allowNull: true, // Alterei para true pois complemento pode ser opcional
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    municipioIBGE: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize, // Instância do sequelize deve ser passada aqui
    modelName: 'Endereco',
    tableName: 'enderecos',
    timestamps: true,
    underscored: true, // Converte camelCase para snake_case
});

module.exports = Endereco;
