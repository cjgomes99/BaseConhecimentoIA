const API = {

    async consultar(pergunta) {

        const resposta = await fetch(
            chrome.runtime.getURL("base/indice.json")
        );

        const indice = await resposta.json();

        console.log(indice);

        return "Teste realizado.";

    }

};