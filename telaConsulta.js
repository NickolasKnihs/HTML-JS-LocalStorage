let pessoas = JSON.parse(localStorage.getItem("pessoasCadastro"));
if (!pessoas) {
    pessoas = [];
}
for (let i = 0; i < pessoas.length; i++) {
    mostraPessoa(pessoas[i], i); // Adicionando o índice como segundo parâmetro
}

function mostraPessoa(parametro, indice) {
    const linha = document.createElement('tr');
    // Adiciona classe 'linha-impar' ou 'linha-par' dependendo do índice
    linha.classList.add(indice % 2 === 0 ? 'linha-impar' : 'linha-par');
    linha.innerHTML += `
        <td><span> Nome: ${parametro.nome}</span></td>
        <td><img src="${parametro.foto}" alt="Foto de ${parametro.nome}" class="foto-pequena"></td>
        <td><span> Idade: ${parametro.idade}</span></td>
        <td><span> CPF: ${parametro.cpf}</span></td>
        <td><span> CNPJ: ${parametro.cnpj}</span></td>
        <td><span> E-mail: ${parametro.email}</span></td>
        <td><span> Gênero: ${parametro.genero}</span></td>
        <td class="buttons-container">
            <button onclick="removerUsuario(${indice});">REMOVER</button>
            <button onclick="editarUsuario(${indice});">EDITAR</button>
        </td>
    `;
    tabelaCadastro.append(linha);
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
