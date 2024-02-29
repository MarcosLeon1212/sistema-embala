import { Request, Response } from 'express';
import {Stock} from '../models/stock';
import {Op} from 'sequelize';

export const search = async(req:Request, res: Response)=>{
    let query: string = req.query.q as string;
    let stock = await Stock.findAll(
        {where:{
            product: query
        }}
    )

    res.render('pages/stock', {
        stock
    })
}