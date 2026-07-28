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

        return "Teste realizado.";

    }

};