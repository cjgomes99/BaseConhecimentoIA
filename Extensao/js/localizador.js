const Localizador = {

    localizar(indice, pergunta) {

        const pesquisa = pergunta.toLowerCase();

        console.log(indice);
        console.log(pesquisa);

        for (const doc of indice) {
        console.log(doc.palavrasChave);
}

        return indice.find(doc =>

            doc.palavrasChave.some(palavra =>
                pesquisa.includes(palavra.toLowerCase())
            )

        ) || null;

    }

};