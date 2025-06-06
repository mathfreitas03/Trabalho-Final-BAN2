class Projeto {
    constructor(codProjeto, nome, dataInicio, dataFinal, orcamento, orgaoFinanciador, professorResponsavel, professoresParticipantes, estudantesParticipantes){
        this.codProjeto = codProjeto
        this.nome = nome
        this.dataInicio = dataInicio
        this.dataFinal = dataFinal
        this.orcamento = orcamento
        this.orgaoFinanciador = orgaoFinanciador
        this.responsavel = professorResponsavel
        this.professoresParticipantes = professoresParticipantes
        this.estudantesParticipantes = estudantesParticipantes
    }

    adicionarProfessorParticipante(professor) {
        this.participantes.push(professor);
    }

    removerProfessorParticipante(professor) {
        this.participantes = this.participantes.filter(p => p !== professor);
    }

    adicionarEstudanteParticipante(codEstudante, codProfessor) {
        const assistencia = {
            estudante : codEstudante,
            supervisor : codProfessor
        }
        this.estudantesParticipantes.push(assistencia)
    }

    removerEstudanteParticipante(assistencia) {
        this.estudantesParticipantes = this.estudantesParticipantes.filter(assist => assist != assistencia)
    }
}

export default Projeto