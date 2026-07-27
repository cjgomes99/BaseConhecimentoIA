const fs = require("fs");
const path = require("path");


function extrairCampo(texto, campo) {

    const linhas = texto.split("\n");

    for (let i = 0; i < linhas.length; i++) {

        if (linhas[i].trim() === `${campo}:`) {
            return linhas[i + 1]?.trim() || "";
        }

    }

    return "";

}

function extrairLista(texto, campo) {

    const linhas = texto.split("\n");

    const lista = [];

    let encontrouCampo = false;

    for (const linha of linhas) {

        const valor = linha.trim();

        if (valor === `${campo}:`) {
            encontrouCampo = true;
            continue;
        }

        if (!encontrouCampo) continue;

        if (valor === "") break;

        if (valor.startsWith("-")) {
            lista.push(valor.substring(1).trim());
        }

    }

    return lista;

}

// Pasta onde está a Base de Conhecimento
const pastaDocs = path.join(__dirname, "..", "Docs");
const pastaBase = path.join(__dirname, "..", "Extensao", "base");

// Lista que armazenará todos os arquivos encontrados
const arquivos = [];
const indice = [];

/**
 * Percorre recursivamente todas as pastas
 */
function listarArquivos(pastaAtual) {

    const itens = fs.readdirSync(pastaAtual);

    for (const item of itens) {

        const caminhoCompleto = path.join(pastaAtual, item);

        const estatisticas = fs.statSync(caminhoCompleto);

        if (estatisticas.isDirectory()) {

            listarArquivos(caminhoCompleto);

        } else if (item.endsWith(".txt")) {

            arquivos.push(caminhoCompleto);

        }

    }

}

listarArquivos(pastaDocs);

for (const arquivo of arquivos) {

    const conteudo = fs.readFileSync(arquivo, "utf8");

const documento = {

    id: extrairCampo(conteudo, "ID"),

    sistema: extrairCampo(conteudo, "Sistema"),

    categoria: extrairCampo(conteudo, "Categoria"),

    procedimento: extrairCampo(conteudo, "Procedimento"),

    arquivo: path.relative(pastaDocs, arquivo),

    palavrasChave: extrairLista(conteudo, "Palavras-chave")

};

indice.push(documento);

}

if (fs.existsSync(pastaBase)) {
    fs.rmSync(pastaBase, { recursive: true, force: true });
}

fs.cpSync(pastaDocs, pastaBase, { recursive: true });
const caminhoIndice = path.join(pastaDocs, "indice.json");

fs.writeFileSync(
    caminhoIndice,
    JSON.stringify(indice, null, 4),
    "utf8"
);

console.log("Índice criado com sucesso!");