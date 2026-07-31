const Gemini = {

    async responder(contexto) {

        const apiKey = await Storage.obter("apiKey");

        if (!apiKey) {

            return "Nenhuma chave de acesso foi configurada.";

        }

        console.log("API Key encontrada.");

        console.log(apiKey);

        console.log(contexto);

        return "Conexão preparada.";

    }

};