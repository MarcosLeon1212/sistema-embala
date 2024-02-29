import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface SalesInstances extends Model{
    id: number,
    valor: string,
    date: string
}

export const Sales = sequelize.define<SalesInstances>('Sales', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    valor: {
        type: DataTypes.STRING
    },

    date:{
        type: DataTypes.STRING
    }
}, {
    tableName: 'sales',
    timestamps: false
})