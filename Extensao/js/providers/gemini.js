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

        const dados = await resposta.json();

        console.log(dados);

        return "Consulta enviada.";

    }

};