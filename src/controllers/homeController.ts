import { Request, Response } from 'express';
import {Sales} from '../models/sales';
import {Op} from 'sequelize';

export const home = async (req: Request, res: Response)=>{
    const sales = await Sales.findAll();





    res.render('pages/home', {
       sales
        
    });
};

export const novotrabalho = async (req: Request, res: Response)=> {

    let{valor, date} = await req.body;

    if(valor){
        const newSales = Sales.build({valor});

        if(date){
            newSales.date = (date);
        }
       
        newSales.save()
} 

    res.redirect("/");
}

export const excluir = async(req: Request, res: Response) => {
    let id: string = req.params.id;

    await Sales.destroy({where:{id}});
    

    res.redirect('/');
}

export const calculator = async(req:Request, res: Response) => {


    res.render('pages/calc', {

    })
}