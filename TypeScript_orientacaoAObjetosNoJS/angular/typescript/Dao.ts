import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {
    nomeTabela!: ''

    inserir(object: T): boolean {
        console.log('Logica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('Logica update')
        return true
    }
    
    remover(id: number): T {
        console.log('Logica delete')
        return Object()
    }

    selecionar(id: number): T {
        console.log('Logica selet')
        return Object()
    }
    selecionarTodos(): [T] {
        console.log('Logica getAll')
        return [Object()]
    }
}