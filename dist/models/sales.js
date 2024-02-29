"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../instances/pg");
exports.Sales = pg_1.sequelize.define('Sales', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    valor: {
        type: sequelize_1.DataTypes.STRING
    },
    date: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'sales',
    timestamps: false
});
