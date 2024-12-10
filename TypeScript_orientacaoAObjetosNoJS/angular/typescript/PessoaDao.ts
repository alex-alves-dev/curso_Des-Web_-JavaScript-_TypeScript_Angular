import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {
    
    nomeTabela!: 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('Logica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('Logica update')
        return true
    }
    
    remover(id: number): Pessoa {
        console.log('Logica delete')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('Logica selet')
        return new Pessoa('', '')
    }
    selecionarTodos(): [Pessoa] {
        console.log('Logica getAll')
        return [new Pessoa('', '')]
    }
}