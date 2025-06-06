import Pessoa from './Pessoa.js'

class Professor extends Pessoa{
    constructor(matricula, nome, dataNascimento, cpf, enderecoSala, codEspecialidade, horasSemanais){
        super(matricula, nome, dataNascimento, cpf)
        this.sala = enderecoSala
        this.especialidade = codEspecialidade
        this.horasSemanais = horasSemanais
    }
}

export default Professor