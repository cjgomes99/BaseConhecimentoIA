document.addEventListener("DOMContentLoaded", () => {

    const campoApi = document.getElementById("apikey");

    const botaoSalvar = document.getElementById("salvar");

    botaoSalvar.addEventListener("click", async () => {

        const apiKey = campoApi.value.trim();

        if (apiKey === "") {

            alert("Informe a API Key.");

            return;

        }

        await Storage.salvar("apiKey", apiKey);

        alert("API Key salva com sucesso.");

        campoApi.value = "";

    });

});