import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';


export interface TotalInstance extends Model{
    id: number,
    valor: string,
    data: string
}

export const Total = sequelize.define<TotalInstance>('Total', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },

    valor:{
        type:DataTypes.STRING
    },

    data:{
        type:DataTypes.STRING
    }
},{
    tableName:'total',
    timestamps:false
})