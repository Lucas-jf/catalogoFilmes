const content = document.getElementById("comFilmes");

let filmes = getObjectLocalStorage("filmes");

if (filmes === null) {
    filmes = [];
    setObjectLocalStorage("filmes", filmes);
}

window.addEventListener("load", () => {
    for (let filme of filmes){
        content.appendChild(
            criaSection(
                filme.nome, 
                filme.diretor,
                filme.faixaE,
                filme.sintese,
                filme.nota,
                filme.imagem,
            )
        )
    }
})

const cadastraFilme = () => {
    const nome = document.getElementsByName("nome")[0];
    const diretor = document.getElementsByName("diretor")[0];
    const faixaE = document.getElementsByName("faixaE")[0];
    const sintese = document.getElementsByName("sintese")[0];
    const nota = document.getElementsByName("nota")[0];
    const imagem = document.getElementsByName("imagem")[0];
    
    const filme = {
        nome: nome.value,
        diretor: diretor.value,       
        faixaE: faixaE.value,       
        sintese: sintese.value,       
        nota: nota.value,       
        imagem: imagem.value,       
    }

    nome.value = "";
    diretor.value = "";
    faixaE.value = "";
    sintese.value = "";
    nota.value = "";
    imagem.value = "";

    filmes.push(filme);
    setObjectLocalStorage("filmes", filmes);

    content.appendChild(
        criaSection(
            filme.nome, 
            filme.diretor,
            filme.faixaE,
            filme.sintese,
            filme.nota,
            filme.imagem,
        )
    )
}

window.addEventListener("load", () => {
    let quantidade = filmes.length;
    if (quantidade == 0) {
        document.getElementById("comFilme").style.display = "none";
        document.getElementById("semFilme").style.display = "";
    } else {
        document.getElementById("comFilme").style.display = "";
        document.getElementById("semFilme").style.display = "none";
    }
});

function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}