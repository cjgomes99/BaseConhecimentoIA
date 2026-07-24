const UI = {

    inicializar() {

        const botao = document.getElementById("enviar");

        const campo = document.getElementById("pergunta");

        botao.addEventListener("click", () => {

            const texto = campo.value.trim();

            if (texto === "") {
                return;
            }

            Chat.adicionarMensagem(texto, "usuario");

            campo.value = "";

            campo.focus();

        });

    }

};