const input_text = document.querySelector("#input-text");
const input_mensagem = document.querySelector("#input-mensagem");

let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnCriptofrafar(){


}

function criptografar(string) {
    const resultado = string.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    return resultado;
}

function descriptografar(string) {
    const resultado = string.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    return resultado;
}


let test = "texto de teste";

console.log(criptografar(test));
console.log(descriptografar(test));



function substituirDiv() {
    // Seleciona ambas as divs
    const divAparece = document.getElementById("div-aparece");
    const divResultado = document.getElementById("div-resultado");

    // Oculta a div-resultado
    divResultado.style.display = "none";
    // Exibe a div-aparece
    divAparece.style.display = "block";
}

function btnCriptofrafar() {
    // Pegar o texto do textarea
    var texto = document.querySelector('.Decodificador__conteudo__textarea').value;

    // Criptografar o texto
    var textoCriptografado = criptografar(texto)

    // Selecionar o elemento onde queremos colocar o texto
    var inputMensagem = document.getElementById('input-mensagem');

    // Verificar se o elemento existe e se o texto não está vazio
    if (inputMensagem && texto.trim() !== '') {
        // Inserir o texto dentro do elemento
        inputMensagem.textContent = textoCriptografado;
    }
}

function btnDescriptofrafar() {
    // Pegar o texto do textarea
    var texto = document.querySelector('.Decodificador__conteudo__textarea').value;

    // Criptografar o texto
    var textoDescriptografado = descriptografar(texto)

    // Selecionar o elemento onde queremos colocar o texto
    var inputMensagem = document.getElementById('input-mensagem');

    // Verificar se o elemento existe e se o texto não está vazio
    if (inputMensagem && texto.trim() !== '') {
        // Inserir o texto dentro do elemento
        inputMensagem.textContent = textoDescriptografado;
    }
}

function copiarTexto() {
    // Seleciona o elemento <p> pelo ID
    let textoParaCopiar = document.getElementById("input-mensagem");
    
    // Cria um elemento de texto temporário para copiar o conteúdo
    let tempInput = document.createElement("textarea");
    tempInput.value = textoParaCopiar.innerText;
    
    // Adiciona o elemento temporário ao corpo do documento
    document.body.appendChild(tempInput);
    
    // Seleciona e copia o texto dentro do elemento temporário
    tempInput.select();
    document.execCommand("copy");
    
    // Remove o elemento temporário
    document.body.removeChild(tempInput);
}
