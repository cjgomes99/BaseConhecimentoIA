
function extrairCampo(texto, campo) {

    const linhas = texto.split("\n");

    for (let i = 0; i < linhas.length; i++) {

        if (linhas[i].trim().toLowerCase() === `${campo.toLowerCase()}:`) {

            let resposta = "";

            for (let j = i + 1; j < linhas.length; j++) {

                const linha = linhas[j].trim();

                if (linha === "") {
                    break;
                }

                resposta += linha + "\n";

            }

            return resposta.trim();

        }

    }

    return null;

}



const API = {

    async consultar(pergunta) {

        const resposta = await fetch(
            chrome.runtime.getURL("base/indice.json")
        );

        const indice = await resposta.json();

        const documento = Localizador.localizar(indice, pergunta);

        console.log(indice);

        if (documento) {

    const conteudo = await Leitor.ler(documento.arquivo);

    const dadosDocumento = Parser.converter(conteudo);

         console.log(dadosDocumento);

    if (pergunta.toLowerCase().includes("prazo")) {

    return "Prazo:\n\n" + dadosDocumento["Prazo"];

}

return conteudo;

}

return "Não encontrei informações sobre esse procedimento na Base de Conhecimento disponível.";

    }

};