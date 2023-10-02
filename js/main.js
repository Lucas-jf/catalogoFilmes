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