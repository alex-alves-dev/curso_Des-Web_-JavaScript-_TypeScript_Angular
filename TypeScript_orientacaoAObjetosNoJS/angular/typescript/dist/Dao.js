"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
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
        return Object();
    }
    selecionar(id) {
        console.log('Logica selet');
        return Object();
    }
    selecionarTodos() {
        console.log('Logica getAll');
        return [Object()];
    }
}
exports.Dao = Dao;
