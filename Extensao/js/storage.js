const Storage = {

    async salvar(chave, valor) {

        await chrome.storage.local.set({

            [chave]: valor

        });

    },

    async obter(chave) {

        const dados = await chrome.storage.local.get(chave);

        return dados[chave];

    }

};