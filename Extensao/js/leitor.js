const Leitor = {

    async ler(caminhoArquivo) {

        const resposta = await fetch(
            chrome.runtime.getURL("base/" + caminhoArquivo)
        );

        return await resposta.text();

    }

};