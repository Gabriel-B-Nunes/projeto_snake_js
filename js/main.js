/*nessa parte, estamos definindo variáveis baseadas no arquivo html*/
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /*context renderiza o jogo no canvas*/
let box = 32; /*diz quantos pixels terá cada quadrado do jogo*/
let snake = []

snake[0] = { /*estamos preenchendo o array*/
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG(){ /*essa função irá desenhar o canvas*/
    context.fillStyle = "lightgreen"; /*define a cor*/
    context.fillRect(0, 0, 16 * box, 16 * box); /*define o tamanho do canvas*/
}

/*essa função irá desenhar a cobrinha*/
function criarCobra(){
    for(i = 0; i < snake.length; i++){
        context.fillRect = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box); /*define o tamanho baseado no array*/
    }
}

function iniciarJogo(){
    criarBG();
    criarCobra();

    let snakeX = snake[0].x; /*estamos referenciando a posição inicial baseada no array*/
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; /*movimento eixo x*/
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box; /*movimento eixo y*/
    if(direction == "down") snakeY += box;

    snake.pop(); /*apaga o último quadrado da cobrinha*/

    let newHead = { /*variável geração da nova cabeça da cobrinha*/
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); /*unshift coloca o valor no primeiro slot do array*/
}

let jogo = setInterval(iniciarJogo, 100); /*faz com que a cada 100 milisegundos o jogo atualize*/