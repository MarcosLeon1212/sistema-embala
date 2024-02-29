"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StockController = __importStar(require("../controllers/stockController"));
const HomeController = __importStar(require("../controllers/homeController"));
const SearchController = __importStar(require("../controllers/searchController"));
const TotalController = __importStar(require("../controllers/totalController"));
const router = (0, express_1.Router)();
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
exports.default = router;
