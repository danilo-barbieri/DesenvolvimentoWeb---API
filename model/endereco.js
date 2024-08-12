const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {};

Endereco.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cep: {
        type: Sequelize.STRING,
         allowNull: false,
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    complemento:{
        type: Sequelize.STRING,
         allowNull: false,
    },
    bairro: {
        type: Sequelize.STRING,
         allowNull: false,
    },
    cidade: {
        type: Sequelize.STRING,
         allowNull: false,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    municipioIBGE: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
},{
    sequelize,
     modelName: 'Endereco',
     tableName: 'enderecos',
     timestamps: true,
});

module.exports = Endereco;