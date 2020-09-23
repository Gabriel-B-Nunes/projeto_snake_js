/*nessa parte, estamos definindo variáveis baseadas no arquivo html*/
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /*context renderiza o jogo no canvas*/
let box = 32; /*diz quantos pixels terá cada quadrado do jogo*/

/*essa função irá desenhar o canvas*/
function criarBG(){
    context.fillStyle= "lightgreen"; /*define a cor*/
    context.fillRect(0, 0, 16 * box, 16 * box); /*define o tamanho do canvas*/
}

criarBG();