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
exports.calculator = exports.excluir = exports.novotrabalho = exports.home = void 0;
const sales_1 = require("../models/sales");
const home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sales = yield sales_1.Sales.findAll();
    res.render('pages/home', {
        sales
    });
});
exports.home = home;
const novotrabalho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { valor, date } = yield req.body;
    if (valor) {
        const newSales = sales_1.Sales.build({ valor });
        if (date) {
            newSales.date = (date);
        }
        newSales.save();
    }
    res.redirect("/");
});
exports.novotrabalho = novotrabalho;
const excluir = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    yield sales_1.Sales.destroy({ where: { id } });
    res.redirect('/');
});
exports.excluir = excluir;
const calculator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('pages/calc', {});
});
exports.calculator = calculator;
