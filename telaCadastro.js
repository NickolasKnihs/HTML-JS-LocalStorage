const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const cpfInput = document.getElementById('cpf');
const cnpjInput = document.getElementById('cnpj');
const emailInput = document.getElementById('email');
const generoInput = document.getElementById('genero');
const fotoInput = document.getElementById('foto');
const tabelaCadastro = document.getElementById('tabelaCadastro');


// let pessoas = JSON.parse(localStorage.getItem("pessoasCadastro"));
// if (!pessoas) {
//     pessoas = [];
// }
// for (const pessoa of pessoas) {
//     mostraPessoa(pessoa);
// }

function salvar (){
    console.log(nomeInput);
    console.log(idadeInput);
    console.log(cpfInput);
    console.log(cnpjInput);
    console.log(emailInput);
    console.log(generoInput);
    console.log(fotoInput);

    const pessoa = {};
    pessoa.nome = nomeInput.value;
    pessoa.idade = idadeInput.value; 
    pessoa.cpf = cpfInput.value;
    pessoa.cnpj = cnpjInput.value;
    pessoa.email = emailInput.value;
    pessoa.genero = generoInput.value;
    pessoa.foto = fotoInput.value
    console.log(pessoa);

    let pessoasCadastradas = JSON.parse(localStorage.getItem("pessoasCadastro"));
    if (!pessoasCadastradas) {
        pessoasCadastradas = [];
    }


    // base para remover
    pessoasCadastradas.push(pessoa);
    localStorage.setItem("pessoasCadastro", JSON.stringify(pessoasCadastradas));
    mostraPessoa(pessoa);
    return false;
}

function pegaPessoasCadastradas(){
    let pessoasCadastradas = JSON.parse(localStorage.getItem("pessoasCadastro"));
    if (!pessoasCadastradas) {
        pessoasCadastradas = [];
    }
    return pessoasCadastradas;
}

