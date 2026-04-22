let alunos = []

function cadastrarAlunos() {
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const curso = document.getElementById('curso').value

    if (!nome || !idade || !curso) {
        alert('Todos os campos devem ser preenchidos!')
        return
    }

    const nomeMaiusculo = nome.toLowerCase()

    const validaNome = alunos.some(aluno => aluno.nome.toLowerCase() === nomeMaiusculo)

    if (validaNome) {
        alert('Nome já cadastrado!')
        document.getElementById('nome').value = ''
        return
    }

    const aluno = { nome, idade, curso }
    alunos.push(aluno)

    atualizarTabela()
    limparTabela()
}

function atualizarTabela() {
    const tabela = document.getElementById('listaAlunos')
    tabela.innerHTML = ''

    alunos.forEach((aluno, index) => {
        const linha = `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.curso}</td>
                <td>
                    <button onclick="editarAluno(${index})">Editar</button>
                    <button onclick="excluirAluno(${index})">Excluir</button>
                </td>
            </tr>
        `

        tabela.innerHTML += linha
    });
}

function limparTabela() {
    document.getElementById('nome').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('curso').value = ''
}

function excluirAluno(index) {

    if (confirm('Realmente deseja excluir?')) {
        alunos.splice(index, 1);
        atualizarTabela();
    }

}

function editarAluno(index) {

    const aluno = alunos[index]

    document.getElementById('nome').value = aluno.nome
    document.getElementById('idade').value = aluno.idade
    document.getElementById('curso').value = aluno.curso

    alunos.splice(index, 1);
}