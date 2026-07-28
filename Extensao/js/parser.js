const Parser = {

    converter(texto) {

        const documento = {};

        const linhas = texto.split("\n");

        let campoAtual = null;

        for (const linha of linhas) {

            const valor = linha.trim();

            if (valor.endsWith(":")) {

                campoAtual = valor.slice(0, -1);

                documento[campoAtual] = "";

                continue;

            }

            if (campoAtual && valor !== "") {

                documento[campoAtual] +=
                    (documento[campoAtual] ? "\n" : "") + valor;

            }

        }

        return documento;

    }

};