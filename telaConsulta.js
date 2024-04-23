
let pessoas = JSON.parse(localStorage.getItem("pessoasCadastro"));
if (!pessoas) {
    pessoas = [];
}
for (const pessoa of pessoas) {
    mostraPessoa(pessoa);
}

function mostraPessoa(parametro){
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML += `
        <span> Nome: ${parametro.nome}</span>
        <br>
        <img src="${parametro.foto}" alt="Foto de ${parametro.nome}" class="foto-pequena">
        <br>
        <span> Idade: ${parametro.idade}</span>
        <br>
        <span> CPF: ${parametro.cpf}</span>
        <br>
        <span> CNPJ: ${parametro.cnpj}</span>
        <br>
        <span> E-mail: ${parametro.email}</span>
        <br>
        <span> Genero: ${parametro.genero}</span>
        <br>
        <div class="buttons-container">
        <button onclick="window.location.href = './telaConsulta.html';" target="_blank">REMOVER</button>
        <button onclick="window.location.href = './telaApresentacao.html';" target="_blank">EDITAR</button>
        </div>
    `;
    tabelaCadastro.append(paragrafo);
}