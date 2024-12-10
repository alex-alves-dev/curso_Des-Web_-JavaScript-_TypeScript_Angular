"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
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
        return new Pessoa_1.default('', '');
    }
    selecionar(id) {
        console.log('Logica selet');
        return new Pessoa_1.default('', '');
    }
    selecionarTodos() {
        console.log('Logica getAll');
        return [new Pessoa_1.default('', '')];
    }
}
exports.PessoaDao = PessoaDao;
