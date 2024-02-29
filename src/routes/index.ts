import { Router } from 'express';
import * as StockController from '../controllers/stockController';
import * as HomeController from '../controllers/homeController';
import * as SearchController from '../controllers/searchController';
import * as TotalController from '../controllers/totalController';

const router = Router();

router.get('/', HomeController.home);
router.get('/agenda/:id/excluir', HomeController.excluir);
router.post('/novotrabalho', HomeController.novotrabalho);


router.get('/calculadora', HomeController.calculator);

router.get('/estoque', StockController.stock);
router.get('/estoque/:id/excluir', StockController.exclude);
router.post('/novoestoque', StockController.novoestoque);
router.get('/editestoque/:id/estoque', StockController.destroyEdit);
router.get('/editestoque', StockController.edit);

router.get('/search', SearchController.search);


router.get('/total', TotalController.totalSales);
router.post('/novototal', TotalController.novoTotal);
router.get('/total/:id/excluir', TotalController.excluir);

export default router;