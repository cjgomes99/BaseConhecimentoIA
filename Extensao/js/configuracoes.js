console.log("configuracoes.js carregado");

document.addEventListener("DOMContentLoaded", async () => {

    console.log("1");

    const campoApi = document.getElementById("apikey");

    console.log("2");

    const botaoSalvar = document.getElementById("salvar");

    console.log("3");

    const apiKey = await Storage.obter("apiKey");

    console.log("4");

    console.log(apiKey);

});