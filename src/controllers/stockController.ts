import { Request, Response } from 'express';
import {Stock} from '../models/stock';
import {Op} from 'sequelize';

export const stock = async(req: Request, res: Response) => {
    const stock = await Stock.findAll({order:[
        ['product', 'ASC']
    ]});

   

    res.render('pages/stock', {
        stock
    })
}



export const novoestoque = async(req:Request, res:Response)=>{

    let {product, supplier, amountpaid, salevalue, stockitens, minstockitens} = await req.body;

    if(product){
        const newItemStock = Stock.build({product});

        if(supplier){
            newItemStock.supplier =  (supplier);
        }

        if(amountpaid){
            newItemStock.amountpaid = (amountpaid);
        }

        if(salevalue){
            newItemStock.salevalue = (salevalue);
        }

        if(stockitens){
            newItemStock.stockitens = (stockitens);
        }

        if(minstockitens){
            newItemStock.minstockitens = (minstockitens);
        }

        await newItemStock.save();
    }

    res.redirect('/estoque');
}



export const exclude = async(req: Request, res: Response)=>{
    let id: string = req.params.id;

    await Stock.destroy({where:{id}});

    res.redirect('/estoque');
}



export const edit = async(req:Request, res: Response)=>{
    const id = req.params.id;
    
    const {product, supplier, amountpaid, salevalue, stockitens, minstockitens} = req.body;

    let stockEdit = Stock.update;
    
    
    await Stock.update ({product, supplier, amountpaid, salevalue, stockitens, minstockitens}, ({where:{id}}));
    

    res.render('pages/edit', {
        stockEdit,
    })
}

export const destroyEdit = async(req: Request, res: Response)=> {
    let id = req.params.id;

    await Stock.destroy({where:{id}});
    
    res.redirect('/editestoque')
}