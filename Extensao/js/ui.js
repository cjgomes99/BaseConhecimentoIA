const UI = {

    inicializar() {

        const botao = document.getElementById("enviar");

        const campo = document.getElementById("pergunta");

        const botaoConfiguracoes = document.getElementById("configuracoes");

        botao.addEventListener("click", async () => {

            const texto = campo.value.trim();

            if (texto === "") {
                return;
            }

            // Exibe a pergunta do usuário
            Chat.adicionarMensagem(texto, "usuario");

            // Consulta a Base
            const resposta = await API.consultar(texto);

            // Exibe a resposta
            Chat.adicionarMensagem(resposta, "ia");

            // Limpa o campo
            campo.value = "";

            // Volta o foco
            campo.focus();

        });

        botaoConfiguracoes.addEventListener("click", () => {

            window.open(
                chrome.runtime.getURL("pages/configuracoes.html"),
                "_blank"
            );

        });

    }

};