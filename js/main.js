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

const criaSection = (nome, diretor, faixaE, sintese, nota, imagem,) => {
    const section = document.createElement("section");
    const aImg = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const pDiretor = document.createElement("p");
    const pFaixa = document.createElement("p");
    const pSintese = document.createElement("p");
    const pNota = document.createElement("p");
    
    aImg.setAttribute("href", "/html/informacoes.html");
    img.setAttribute("src", imagem);
    img.setAttribute("alt", `Capa do filme ${nome}`);
    section.setAttribute("id", nome);

    aImg.appendChild(img);
    section.appendChild(aImg);
    section.appendChild(h2);
    section.appendChild(pDiretor);
    section.appendChild(pFaixa);
    section.appendChild(pSintese);
    section.appendChild(pNota);

    h2.innerText = "Nome: " + nome;
    pDiretor.innerText = "Diretor:" + diretor;
    pFaixa.innerText = "Faixa etária:" + faixaE;
    pSintese.innerText = "Síntese:" + sintese;
    pNota.innerText = "Nota:" + nota;

    return section;
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