const IA = {

    async responder(pergunta, documento) {

        const configuracao = await Config.obterIA();

        switch (configuracao.provedor) {

            case "gemini":

                return await Gemini.responder(
                    pergunta,
                    documento,
                    configuracao
                );

            default:

                throw new Error(
                    "Provedor de IA não suportado."
                );

        }

    }

};