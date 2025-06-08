const searchRegistryButton = document.querySelector('.search-register-button')
const insertRegistryButton = document.querySelector('.add-register-button')
const registerForm = document.querySelector('.register-form')
const registryOption = registerForm.querySelector('#tipo-registro')

function loadForm(option) {
    const todasFormRows = registerForm.querySelectorAll('.form-row');

    todasFormRows.forEach(div => {
        if (!div.querySelector('#tipo-registro')) {
            div.remove();
        }
    });

    let novosCampos = '';

    switch(option) {
        case 'projeto':
            novosCampos = `
                <div class="form-row">
                    <label for="nome-projeto">Nome do projeto</label>
                    <input type="text" name="nome-projeto" id="nome-projeto">
                </div>
                <div class="form-row">
                    <label for="professor-responsavel">Professor responsável</label>
                    <input type="text" name="professor-responsavel" id="professor-responsavel">
                </div>
                <div class="form-row">
                    <label for="matricula-responsavel">Matrícula responsável</label>
                    <input type="text" name="matricula-responsavel" id="matricula-responsavel">
                </div>
                <div class="form-row">
                    <label for="orgao-financiador">Órgão financiador</label>
                    <input type="text" name="orgao-financiador" id="orgao-financiador">
                </div>
                <div class="form-row">
                    <label for="valor-minimo">Orçamento mínimo</label>
                    <input type="number" min=0 name="valor-minimo" id="valor-minimo">
                </div>
                <div class="form-row">
                    <label for="valor-maximo">Orçamento máximo</label>
                    <input type="number" min=0 name="valor-maximo" id="valor-maximo">
                </div>
                `
            break;
        case 'professor':
            novosCampos = `
                <div class="form-row">
                    <label for="nome-professor">Nome</label>
                    <input type="text" name="nome-professor" id="nome-professor">
                    </div>
                <div class="form-row">
                    <label for="matricula">Mátricula</label>
                    <input type="text" name="matricula" id="matricula"></input>
                </div>
                <div class="form-row">
                    <label for="especialidade-professor">Especialidade</label>
                    <input type="text" name="especialidade-professor" id="especialidade-professor">
                </div>
                <div class="form-row">
                    <label for="idade-professor">Idade</label>
                    <input type="text" name="idade-professor" id="idade-professor">
                </div>
                <div class="form-row">
                    <label for="sala-professor">Sala</label>
                    <input type="text" name="sala-professor" id="sala-professor">
                </div>
                `
            break;
        case 'departamento':
                novosCampos = `<div class="form-row">
                    <label for="nome-departamento">Nome do departamento</label>
                    <input type="text" name="nome-departamento" id="nome-departamento">
                </div>
                <div class="form-row">
                    <label for="numero-departamento">Número do departamento</label>
                    <input type="number" name="numero-departamento" id="numero-departamento"></input>
                </div>
                <div class="form-row">
                    <label for="endereco-escritorio">Endereço</label>
                    <input type="text" name="endereco-escritorio" id="endereco-escritorio">
                </div>
                <div class="form-row">
                    <label for="professor-responsavel">Professor Responsável</label>
                    <input type="text" name="professor-responsavel" id="professor-responsavel">
                </div>
                <div class="form-row">
                    <label for="matricula-professor-responsavel">Mátricula Responsável</label>
                    <input type="text" name="matricula-professor-responsavel" id="matricula-professor-responsavel">
                </div>`
        break;
        case 'orgao-financiador':
            case 'departamento':
                novosCampos = `<div class="form-row">
                    <label for="nome-orgao">Nome</label>
                    <input type="text" name="nome-orgao" id="nome-orgao">
                </div>
                <div class="form-row">
                    <label for="numero-orgao">Código do orgão</label>
                    <input type="number" name="numero-orgao" id="numero-orgao"></input>
                </div>`
        break;
        case 'estudante':
            novosCampos = `
                <div class="form-row">
                    <label for="nome-estudante">Nome</label>
                    <input type="text" name="nome-estudante" id="nome-estudante">
                </div>
                <div class="form-row">
                    <label for="idade-estudante">Idade</label>
                    <input type="text" name="idade-estudante" id="idade-estudante">
                </div>
                <div class="form-row">
                    <label for="matricula">Mátricula</label>
                    <input type="text" name="matricula" id="matricula"></input>
                </div>
                <div class="form-row">
                    <label for="matricula-supervisor">Mátricula Supervisor</label>
                    <input type="text" name="matricula-supervisor" id="matricula-supervisor"></input>
                </div>
                <div class="form-row">
                    <label for="tipo-curso">Grau cursando</label>
                    <input type="text" name="tipo-curso" id="tipo-curso"></input>
                </div>
                <div class="form-row">
                    <label for="departamento-estudante">Departamento</label>
                    <input type="text" name="departamento-estudante" id="departamento-estudante"></input>
                </div>
                `
        break;
    }

    registerForm.insertAdjacentHTML('beforeend', novosCampos);
}

registryOption.addEventListener('change', () => {
    loadForm(registryOption.value) 
    }
)

function createCardsList(arrayDados){
    const formContainer = document.querySelector('.form-container')
    const filhos = Array.from(formContainer.children);

    filhos.forEach((el) => el.remove());

    const botaoVoltar = `
    <div class="btn" style="background-color: rgb(0, 0, 205); color: white; margin-bottom: 10px;" onclick="voltarPesquisa()">Voltar <i class="bi bi-arrow-left-circle botao-voltar"></i></div>
    `

    formContainer.insertAdjacentHTML("beforeend", botaoVoltar)

    for(dados of arrayDados){
        console.log(dados)
        createCard(dados, formContainer)
    }

}

function createCard(dados, parentDiv){
    parentDiv.insertAdjacentHTML('beforeend', `
        <div class="card-campo" style="border: 1px solid lightgrey; border-radius: 10px; padding: 16px; margin-bottom: 10px;">
        </div>
    `);

    // Seleciona a última div.card-campo adicionada
    const cardCampo = parentDiv.querySelector('.card-campo:last-of-type');
    
    for (const chave in dados) {
        const valor = dados[chave];
        const chaveFormatada = chave
            .replace('  -', ' ')         
            .replace(/^./, letra => letra.toUpperCase());

        if(chave == 'id' || chave == 'matricula'){
            const cardCampoLinha = `
                    <div class="form-row">
                        <label for="${chave}">${chaveFormatada}</label>
                        <input type="text" name="${chave}" id="${chave}" value="${valor}" readonly>
                        <div class="btn" style="margin-left: 16px; background-color: rgb(0, 0, 205); color: white;" onclick="excluirRegistro()"><i class="bi bi-trash3 botao-excluir"</i></div>
                    </div>
                        `
            cardCampo.insertAdjacentHTML('beforeend', cardCampoLinha);
        }else {
            const cardCampoLinha = `
                    <div class="form-row">
                        <label for="${chave}">${chaveFormatada}</label>
                        <input type="text" name="${chave}" id="${chave}" value="${valor}" readonly>
                    </div>
                        `
            cardCampo.insertAdjacentHTML('beforeend', cardCampoLinha);
        }
    }

}

searchRegistryButton.addEventListener('click', async() => {
    const formData = new FormData(registerForm);
    const dados = {};
    for (const [chave, valor] of formData.entries()) {
        dados[chave] = valor;
    }

    try {
        const response = await fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const resultado = await response.json();
        console.log('Resultado da busca:', resultado);
        createCardsList(resultado)

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
})

function voltarPesquisa() {
    location.reload()
}

function loadInsertScreen(){

}

insertRegistryButton.addEventListener('click', async () => {
    const formContainer = document.querySelector('.form-container')
    const todasFormRows = registerForm.querySelectorAll('.form-row');

    todasFormRows.forEach(div => {
        div.remove();
        });
    searchRegistryButton.remove();
    const botaoVoltar = `
    <div class="btn" style="background-color: rgb(0, 0, 205); color: white; margin-bottom: 10px;" onclick="voltarPesquisa()">Voltar <i class="bi bi-arrow-left-circle botao-voltar"></i></div>
    `
    
    const selectDiv = `
    <div class="form-row">
        <label for="tipo-registro-add">Tipo do Registro</label>
        <select name="tipo-registro-add" id="tipo-registro-add">
        <option value="aconselhador" selected>Aconselhamentos</option>
        <option value="assistencia" selected>Alocação de Assistências Estudantis</option>
        <option value="departamento" selected>Departamentos</option>
        <option value="escritorio" selected>Escritórios</option>
        <option value="especialidade" selected>Especialidades</option>
        <option value="estudante" selected>Estudantes</option>
        <option value="professor" selected>Professores</option>
        <option value="professordepartamento" selected>Alocação de Professores à Departamentos</option>
        <option value="professorprojeto" selected>Alocação de Professores à Projetos</option>
        <option value="projeto" selected>Projetos</option>
        <option value="sala" selected>Salas</option>
        </select>
    </div>
    `
    formContainer.insertAdjacentHTML("afterbegin", selectDiv)
    formContainer.insertAdjacentHTML("afterbegin", botaoVoltar)

    const camposPessoa = [
    ["matricula", "number"],
    ["nome", "text"],
    ["idade", "number"]
    ];

    const camposPorTipo = {
    "pessoa": camposPessoa,

    "professor": [
        ...camposPessoa,
        ["especialidade", "number"],
        ["cod_sala", "text"],
        ["horas_semanais", "number"]
    ],

    "estudante": [
        ...camposPessoa,
        ["id_departamento", "number"],
        ["aconselhador", "number"],
        ["tipo_curso", "number"]
    ],

    "projeto": [
        ["id", "number"],
        ["nome", "text"],
        ["gerente", "number"],
        ["data_inicio", "date"],
        ["data_fim", "date"],
        ["orcamento", "number"],
        ["orgao", "number"]
    ],

    "especialidade": [
        ["id", "number"],
        ["nome", "text"]
    ],
    "sala": [
        ["cod_sala", "text"]
    ],
    "escritorio": [
        ["id", "number"],
        ["endereco", "text"]
    ],
    "departamento": [
        ["id", "number"],
        ["nome", "text"],
        ["lider", "number"],
        ["escritorio", "number"]
    ],
    "professordepartamento": [
        ["matricula", "number"],
        ["id_departamento", "number"],
        ["horas_dedicadas", "number"]
    ],
    "tipo_curso": [
        ["id", "number"],
        ["nome", "text"]
    ],
    "aconselhador": [
        ["matricula_aconselhador", "number"],
        ["matricula_aconselhado", "number"]
    ],
    "orgao": [
        ["id", "number"],
        ["nome", "text"]
    ],
    "professorprojeto": [
        ["matricula", "number"],
        ["id_projeto", "number"]
    ],
    "assistencia": [
        ["supervisor", "number"],
        ["matricula_estudante", "number"],
        ["id_projeto", "number"]
    ],
    "usuarios_teste": [
        ["id", "number"],
        ["nickname", "text"],
        ["password", "text"]
    ],
    "usuarios": [
        ["nickname", "text"],
        ["email", "text"],
        ["user_password", "text"]
    ]
    };

})