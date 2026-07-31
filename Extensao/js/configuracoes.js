document.addEventListener("DOMContentLoaded", async () => {

    const campoApi = document.getElementById("apikey");

    const botaoSalvar = document.getElementById("salvar");

    botaoSalvar.addEventListener("click", async () => {

        const apiKey = campoApi.value.trim();

        if (apiKey === "") {

            alert("Informe a chave de acesso da IA.");

            return;

        }

        await Storage.salvar("apiKey", apiKey);

        alert("Chave salva com sucesso.");

        campoApi.value = "";

    });

});