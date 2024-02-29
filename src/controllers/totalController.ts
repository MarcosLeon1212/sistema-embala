import { Request, Response } from 'express';
import {Total} from '../models/total';
import {Op} from 'sequelize';

export const totalSales = async(req: Request, res: Response)=>{
    const sales = await Total.findAll();

    res.render('pages/total', {
        sales
    })
}

export const novoTotal = async(req: Request, res: Response)=>{
    let{valor, data} = await req.body;

    if(valor){
        const novoTotal = Total.build({valor});

        if(data){
            novoTotal.data = (data);
        }

        novoTotal.save();
    }

    res.redirect('/total');
}

export const excluir = async(req: Request, res: Response)=>{
    let id: string = req.params.id;

    await Total.destroy({where:{id}});
    

    res.redirect('/total');
}