import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {
    
    nomeTabela!: 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('Logica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('Logica update')
        return true
    }
    
    remover(id: number): Concessionaria {
        console.log('Logica delete')
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('Logica selet')
        return new Concessionaria('' , [])
    }
    selecionarTodos(): [Concessionaria] {
        console.log('Logica getAll')
        return [new Concessionaria('', [])]
    }
}