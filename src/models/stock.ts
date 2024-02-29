import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface StockInstance extends Model {
    id: number,
    product: string,
    supplier: string,
    amountpaid: string,
    salevalue: string,
    stockitens: string,
    minstockitens: string
}

export const Stock = sequelize.define<StockInstance>('Stock', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    product: {
        type: DataTypes.STRING
    },

    supplier: {
        type: DataTypes.STRING
    },

    amountpaid:{
        type: DataTypes.STRING
    },

    salevalue: {
        type: DataTypes.STRING
    },

    stockitens: {
        type: DataTypes.STRING
    },

    minstockitens: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'stock',
    timestamps: false
})