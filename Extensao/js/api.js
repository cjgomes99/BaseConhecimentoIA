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

    return conteudo;

}

return "Não encontrei informações sobre esse procedimento na Base de Conhecimento disponível.";

    }

};