const Chat = {

    adicionarMensagem(texto, tipo) {

        const chat = document.getElementById("chat");

        const mensagem = document.createElement("div");

        mensagem.className = `mensagem ${tipo}`;

        mensagem.innerHTML = texto.replace(/\n/g, "<br>");

        chat.appendChild(mensagem);

        chat.scrollTop = chat.scrollHeight;

    }

};