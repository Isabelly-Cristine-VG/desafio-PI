function corTipo(tipoOficial) {
    let tipo = tipoOficial[0]; // Considerando apenas o primeiro tipo
    let corzinhaLegal = '';
    let corzinhaDesc = '';
    let cores = [];

    switch (tipo) {
        case 'grass':
            corzinhaLegal = 'rgb(81, 228, 81)';
            corzinhaDesc = 'rgb(96, 186, 96)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'fire':
            corzinhaLegal = 'rgb(255, 108, 64)';
            corzinhaDesc = 'rgb(181, 73, 40)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'water':
            corzinhaLegal = 'rgb(64, 128, 255)';
            corzinhaDesc = 'rgb(41, 85, 171)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'electric':
            corzinhaLegal = 'rgb(255, 255, 102)';
            corzinhaDesc = 'rgb(181, 181, 67)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'psychic':
            corzinhaLegal = 'rgb(255, 102, 204)';
            corzinhaDesc = 'rgb(174, 69, 139)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'rock':
            corzinhaLegal = 'rgb(163, 140, 33)';
            corzinhaDesc = 'rgb(118, 105, 46)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'ground':
            corzinhaLegal = 'rgb(222, 184, 135)';
            corzinhaDesc = 'rgb(175, 135, 82)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'poison':
            corzinhaLegal = 'rgb(160, 64, 160)';
            corzinhaDesc = 'rgb(118, 53, 118)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'bug':
            corzinhaLegal = 'rgb(154, 205, 50)';
            corzinhaDesc = 'rgb(118, 156, 42)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'normal':
            corzinhaLegal = 'rgb(200, 200, 200)';
            corzinhaDesc = 'rgb(152, 144, 144)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'fighting':
            corzinhaLegal = 'rgb(255, 132, 0)';
            corzinhaDesc = 'rgb(182, 106, 25)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'ice':
            corzinhaLegal = 'rgb(173, 216, 230)';
            corzinhaDesc = 'rgb(121, 160, 174)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'dragon':
            corzinhaLegal = 'rgb(97, 75, 255)';
            corzinhaDesc = 'rgb(75, 60, 189)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'dark':
            corzinhaLegal = 'rgb(52, 109, 107)';
            corzinhaDesc = 'rgb(32, 69, 68)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'fairy':
            corzinhaLegal = 'rgb(255, 182, 193)';
            corzinhaDesc = 'rgb(197, 143, 151)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'ghost':
            corzinhaLegal = 'rgb(102, 51, 153)';
            corzinhaDesc = 'rgb(75, 41, 108)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'steel':
            corzinhaLegal = 'rgb(192, 192, 192)';
            corzinhaDesc = 'rgb(131, 131, 131)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        case 'flying':
            corzinhaLegal = 'rgb(135, 206, 235)';
            corzinhaDesc = 'rgb(110, 158, 177)';
            cores[0] = corzinhaLegal;
            cores[1] = corzinhaDesc;
            break;
        default:
            corzinhaLegal = 'rgb(200, 200, 200)'; // Cor padrão
    }

    return cores;
}

async function sortearGato(){
    let retorno = await fetch(`https://api.thecatapi.com/v1/images/search`)
            .then((resposta) => resposta.json())
            
    let imagem = retorno[0].url

    gato.innerHTML = `<img src="${imagem}" alt="" width="" height="">`
}