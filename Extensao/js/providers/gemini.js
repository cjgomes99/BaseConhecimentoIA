const Gemini = {

    async responder(contexto, tentativa = 1) {

        const apiKey = await Storage.obter("apiKey");

        if (!apiKey) {
            return "Nenhuma chave de acesso foi configurada.";
        }

        const resposta = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: contexto
                                }
                            ]
                        }
                    ]
                })
            }
        );

        console.log("Status:", resposta.status);

        // Retry com backoff exponencial em caso de 429
        if (resposta.status === 429 && tentativa <= 3) {
            const espera = tentativa * 1000; // 1s, 2s, 3s
            console.log(`429 recebido. Tentando novamente em ${espera}ms (tentativa ${tentativa})`);
            await new Promise(resolve => setTimeout(resolve, espera));
            return this.responder(contexto, tentativa + 1);
        }

        const dados = await resposta.json();
        console.log(dados);

        if (!resposta.ok) {
            return dados.error?.message || "Erro ao consultar o Gemini.";
        }

        // Protege contra respostas sem candidates (ex: bloqueio por safety)
        const texto = dados.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!texto) {
            console.warn("Resposta sem texto:", dados);
            return "Não foi possível gerar uma resposta para essa pergunta.";
        }

        return texto;
    }
};