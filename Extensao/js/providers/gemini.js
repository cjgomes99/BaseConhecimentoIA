const Gemini = {

    async responder(contexto) {

        const apiKey = await Storage.obter("apiKey");

        if (!apiKey) {

            return "Nenhuma chave de acesso foi configurada.";

        }

        const resposta = await fetch(

            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,

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

                                    text: "Olá"

                                }

                            ]

                        }

                    ]

                })

            }

        );

        console.log("Status:", resposta.status);

        const dados = await resposta.json();

        console.log(dados);

        if (!resposta.ok) {

            return dados.error?.message || "Erro ao consultar o Gemini.";

        }

        return dados.candidates[0].content.parts[0].text;

    }

};