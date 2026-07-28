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

        const pesquisa = pergunta.toLowerCase();

const documento = indice.find(doc => {

    return doc.palavrasChave.some(palavra =>
        pesquisa.includes(palavra.toLowerCase())
    );

});

        console.log(indice);

        if (documento) {

    const respostaArquivo = await fetch(
        chrome.runtime.getURL("base/" + documento.arquivo)
    );

    const conteudo = await respostaArquivo.text();

    if (pesquisa.includes("prazo")) {

    return "Prazo:\n\n" + extrairCampo(conteudo, "Prazo");

}

return conteudo;

}

return "Não encontrei informações sobre esse procedimento na Base de Conhecimento disponível.";

    }

};