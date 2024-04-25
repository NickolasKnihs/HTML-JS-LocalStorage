let pessoas = JSON.parse(localStorage.getItem("pessoasCadastro"));
if (!pessoas) {
    pessoas = [];
}
for (let i = 0; i < pessoas.length; i++) {
    mostraPessoa(pessoas[i], i); // Adicionando o índice como segundo parâmetro
}

function mostraPessoa(parametro, indice) { // Recebendo também o índice
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
        <span> Gênero: ${parametro.genero}</span>
        <br>
        <div class="buttons-container">
            <button onclick="removerUsuario(${indice});">REMOVER</button> <!-- Chama a função removerUsuario passando o índice -->
            <button onclick="window.location.href = './telaApresentacao.html';" target="_blank">EDITAR</button>
        </div>
    `;
    tabelaCadastro.append(paragrafo);
}

function removerUsuario(indice) {
    pessoas.splice(indice, 1); // Remove o usuário da matriz pelo índice
    localStorage.setItem("pessoasCadastro", JSON.stringify(pessoas)); // Atualiza o localStorage
    // Atualiza a exibição removendo todos os elementos filhos de tabelaCadastro
    while (tabelaCadastro.firstChild) {
        tabelaCadastro.removeChild(tabelaCadastro.firstChild);
    }
    // Reexibe todas as pessoas após a remoção
    for (let i = 0; i < pessoas.length; i++) {
        mostraPessoa(pessoas[i], i);
    }
}
