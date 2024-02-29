"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyEdit = exports.edit = exports.exclude = exports.novoestoque = exports.stock = void 0;
const stock_1 = require("../models/stock");
const stock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stock = yield stock_1.Stock.findAll({ order: [
            ['product', 'ASC']
        ] });
    res.render('pages/stock', {
        stock
    });
});
exports.stock = stock;
const novoestoque = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { product, supplier, amountpaid, salevalue, stockitens, minstockitens } = yield req.body;
    if (product) {
        const newItemStock = stock_1.Stock.build({ product });
        if (supplier) {
            newItemStock.supplier = (supplier);
        }
        if (amountpaid) {
            newItemStock.amountpaid = (amountpaid);
        }
        if (salevalue) {
            newItemStock.salevalue = (salevalue);
        }
        if (stockitens) {
            newItemStock.stockitens = (stockitens);
        }
        if (minstockitens) {
            newItemStock.minstockitens = (minstockitens);
        }
        yield newItemStock.save();
    }
    res.redirect('/estoque');
});
exports.novoestoque = novoestoque;
const exclude = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    yield stock_1.Stock.destroy({ where: { id } });
    res.redirect('/estoque');
});
exports.exclude = exclude;
const edit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { product, supplier, amountpaid, salevalue, stockitens, minstockitens } = req.body;
    let stockEdit = stock_1.Stock.update;
    yield stock_1.Stock.update({ product, supplier, amountpaid, salevalue, stockitens, minstockitens }, ({ where: { id } }));
    res.render('pages/edit', {
        stockEdit,
    });
});
exports.edit = edit;
const destroyEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    yield stock_1.Stock.destroy({ where: { id } });
    res.redirect('/editestoque');
});
exports.destroyEdit = destroyEdit;
