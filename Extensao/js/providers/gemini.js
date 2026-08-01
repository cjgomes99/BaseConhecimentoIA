const Gemini = {

    async responder(contexto) {

        const apiKey = await Storage.obter("apiKey");

        if (!apiKey) {

            return "Nenhuma chave de acesso foi configurada.";

        }

        const resposta = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
        );

        console.log("Status:", resposta.status);

        console.log("OK:", resposta.ok);

        const texto = await resposta.text();

        console.log(texto);

        return "Modelos consultados.";

    }

};