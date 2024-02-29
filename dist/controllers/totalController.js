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
exports.excluir = exports.novoTotal = exports.totalSales = void 0;
const total_1 = require("../models/total");
const totalSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sales = yield total_1.Total.findAll();
    res.render('pages/total', {
        sales
    });
});
exports.totalSales = totalSales;
const novoTotal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { valor, data } = yield req.body;
    if (valor) {
        const novoTotal = total_1.Total.build({ valor });
        if (data) {
            novoTotal.data = (data);
        }
        novoTotal.save();
    }
    res.redirect('/total');
});
exports.novoTotal = novoTotal;
const excluir = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    yield total_1.Total.destroy({ where: { id } });
    res.redirect('/total');
});
exports.excluir = excluir;
