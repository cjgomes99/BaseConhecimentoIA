const Localizador = {

    localizar(indice, pergunta) {

        const pesquisa = pergunta.toLowerCase();

        return indice.find(doc =>

            doc.palavrasChave.some(palavra =>
                pesquisa.includes(palavra.toLowerCase())
            )

        ) || null;

    }

};