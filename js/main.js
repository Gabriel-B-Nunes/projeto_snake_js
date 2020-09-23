/*nessa parte, estamos definindo variáveis baseadas no arquivo html*/
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /*context renderiza o jogo no canvas*/
let box = 32; /*diz quantos pixels terá cada quadrado do jogo*/
let snake = []

/*estamos preenchendo o array*/
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

/*essa função irá desenhar o canvas*/
function criarBG(){
    context.fillStyle = "lightgreen"; /*define a cor*/
    context.fillRect(0, 0, 16 * box, 16 * box); /*define o tamanho do canvas*/
}

/*essa função irá desenhar a cobra*/
function criarCobra(){
    for(i = 0; i < snake.length; i++){
        context.fillRect = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box); /*define o tamanho baseado no array*/
    }
}

criarBG();
criarCobra();