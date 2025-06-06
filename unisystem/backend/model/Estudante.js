import Pessoa from './Pessoa.js'

class Estudante extends Pessoa{
    constructor(matricula, nome, dataNascimento, cpf, codDepartamento, codTipoCurso){
        super(matricula, nome, dataNascimento, cpf)
        this.codDepartamento = codDepartamento
        this.tipoCurso = codTipoCurso
    }

    setAconselhador(codAconselhador){
        this.aconselhador = codAconselhador
    }
}

export default Estudante