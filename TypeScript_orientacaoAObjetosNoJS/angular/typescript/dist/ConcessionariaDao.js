"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
class ConcessionariaDao {
    inserir(object) {
        console.log('Logica de insert');
        return true;
    }
    atualizar(object) {
        console.log('Logica update');
        return true;
    }
    remover(id) {
        console.log('Logica delete');
        return new Concessionaria_1.default('', []);
    }
    selecionar(id) {
        console.log('Logica selet');
        return new Concessionaria_1.default('', []);
    }
    selecionarTodos() {
        console.log('Logica getAll');
        return [new Concessionaria_1.default('', [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
