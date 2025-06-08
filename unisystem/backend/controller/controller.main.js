const searchRegistryButton = document.querySelector('.search-register-button')
const form = document.querySelector('.register-form')
const registryOption = form.querySelector('#tipo-registro')

function loadForm(option) {
    const registerForm = document.querySelector('.register-form');
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