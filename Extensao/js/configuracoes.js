console.log("configuracoes.js carregado");

document.addEventListener("DOMContentLoaded", async () => {

    const campoApi = document.getElementById("apikey");

    const botaoSalvar = document.getElementById("salvar");

    const apiKey = await Storage.obter("apiKey");

    console.log("API armazenada:", apiKey);

    botaoSalvar.addEventListener("click", async () => {

        const apiKey = campoApi.value.trim();

        if (apiKey === "") {

            alert("Informe a chave de acesso da IA.");

            return;

        }

        await Storage.salvar("apiKey", apiKey);

        const teste = await Storage.obter("apiKey");

        console.log("Valor salvo:", teste);

        alert("Chave salva com sucesso.");

        campoApi.value = "";

    });

});