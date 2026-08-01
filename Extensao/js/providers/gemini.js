const Gemini = {

    async responder(contexto) {

        const apiKey = await Storage.obter("apiKey");

        if (!apiKey) {

            return "Nenhuma chave de acesso foi configurada.";

        }

        const resposta = await fetch(

            `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`

        );

        const dados = await resposta.json();

        console.log(dados);

        return "Modelos consultados.";

    }

};