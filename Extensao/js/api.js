
const API = {

    async consultar(pergunta) {

        const respostaIndice  = await fetch(
            chrome.runtime.getURL("base/indice.json")
        );

        const indice = await respostaIndice.json();

        const documento = Localizador.localizar(indice, pergunta);

        console.log(documento);

        if (documento) {

            const conteudo = await Leitor.ler(documento.arquivo);

            const dadosDocumento = Parser.converter(conteudo);

        
            return await IA.responder(pergunta, dadosDocumento);

            }

        return "Não encontrei informações sobre esse procedimento na Base de Conhecimento disponível.";

    }

};