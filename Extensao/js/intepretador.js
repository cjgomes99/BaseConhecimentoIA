const Interpretador = {

    responder(pergunta, documento) {

        const pesquisa = pergunta.toLowerCase();

        for (const campo in documento) {

            if (pesquisa.includes(campo.toLowerCase())) {

                return `${campo}:\n\n${documento[campo]}`;

            }

        }

        return null;

    }

};