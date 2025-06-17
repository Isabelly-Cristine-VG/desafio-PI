var database = require("../database/config");

function buscarUltimasMedidas(idEstufa, limite_linhas) {

    var instrucaoSql = `SELECT 
        luminosidade, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_estufa = ${idEstufa}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas
}
