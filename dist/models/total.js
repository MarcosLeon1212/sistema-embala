"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Total = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../instances/pg");
exports.Total = pg_1.sequelize.define('Total', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    valor: {
        type: sequelize_1.DataTypes.STRING
    },
    data: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'total',
    timestamps: false
});
