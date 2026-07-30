const Config = {

    async obterIA() {

        const resposta = await fetch(
            chrome.runtime.getURL("config/ia.json")
        );

        return await resposta.json();

    }

};