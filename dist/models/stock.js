"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../instances/pg");
exports.Stock = pg_1.sequelize.define('Stock', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product: {
        type: sequelize_1.DataTypes.STRING
    },
    supplier: {
        type: sequelize_1.DataTypes.STRING
    },
    amountpaid: {
        type: sequelize_1.DataTypes.STRING
    },
    salevalue: {
        type: sequelize_1.DataTypes.STRING
    },
    stockitens: {
        type: sequelize_1.DataTypes.STRING
    },
    minstockitens: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'stock',
    timestamps: false
});
