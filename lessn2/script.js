var grassArr = []; // խոտերի զանգված
var eatersArr = []; // խոտակերների զանգված
var predatorArr = [];// գիշատչի զանգված
var menArr = [];// մարդու զանգված
var mahArr = []; // մահի զանգված

var side = 20;
var matrix = [
    [0,0,0,0,1,0,1,0,4,0,1,0,0,1,0,1,0,0,0,1,2,0,1,0,1,0,0],
    [0,0,2,0,0,0,1,0,0,0,0,2,0,1,0,0,4,0,0,1,2,1,0,0,1,0,0],
    [0,1,3,0,1,0,1,0,0,0,0,0,0,2,0,1,0,0,0,1,0,0,1,0,0,0,0],
    [0,0,2,0,1,1,0,0,0,0,1,3,0,1,0,4,0,0,0,1,2,0,2,0,1,3,0],
    [0,2,0,0,0,0,0,0,0,2,0,2,5,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
    [1,0,2,0,1,0,2,0,0,2,1,2,1,0,0,0,4,0,1,1,0,0,1,0,2,0,0],
    [0,1,0,0,1,1,0,4,0,2,1,0,0,1,0,1,0,0,0,0,2,0,0,0,1,0,1],
    [0,2,1,0,0,0,0,0,3,0,2,2,0,1,0,1,0,0,2,1,0,1,4,0,0,0,0],
    [0,1,2,3,0,0,1,0,0,0,0,0,4,0,0,1,0,0,0,1,2,0,1,0,1,0,0],
    [0,2,0,0,2,0,1,0,5,2,0,2,2,0,3,0,0,0,3,2,0,2,0,0,1,0,0],
    [0,1,0,0,2,0,0,0,3,0,0,0,0,1,0,1,0,0,1,0,4,0,1,3,0,0,0],
    [0,1,2,0,0,0,1,0,0,0,1,0,0,2,0,1,0,0,0,1,2,0,0,2,0,1,0],
    [0,1,0,0,1,0,2,0,0,0,1,2,0,3,0,0,0,0,5,1,2,0,1,0,2,0,3],
    [0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,2,0,1,0,1,0,0],
    [0,0,2,0,0,2,1,0,0,0,0,2,0,1,0,0,4,0,2,1,2,1,4,0,1,0,0],
    [0,1,3,0,1,0,1,0,0,2,0,2,0,2,0,1,0,0,0,1,0,0,1,0,0,0,0],
    [0,0,2,0,1,1,0,0,0,0,1,3,0,1,0,0,0,0,0,1,2,0,2,0,1,3,0],
    [0,2,0,0,0,0,0,0,0,2,0,2,0,2,0,1,5,0,0,1,0,0,0,0,0,0,0],
    [1,0,2,0,1,0,2,0,0,0,1,2,1,0,4,0,0,0,1,1,0,0,1,0,2,0,0],
    [0,1,0,0,1,1,0,0,0,2,1,0,0,1,0,1,0,0,0,0,2,0,0,0,1,0,1],
    [0,1,0,0,2,4,0,0,3,0,0,0,0,1,0,1,2,0,1,0,0,0,1,3,0,0,0],
    [0,1,2,0,2,0,1,0,2,0,1,0,0,2,0,1,0,2,0,1,2,0,0,2,0,1,0],
    [0,1,0,0,1,0,2,0,0,0,1,2,0,3,0,0,4,0,0,1,2,0,1,0,2,0,3]
]

function setup() {
    noStroke();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); //կանվասի չափերը դնել մատրիցի չափերին համապատասխան
    background('#acacac');

    //մատրիցի վրա կրկնակի ցիկլը լցնում է խոտերի, խոտակերների զանգվածները օբյեկտներով
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }

            else if (matrix[y][x] == 2) {
                var eater = new GrassEater(x, y);
                eatersArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                var men = new Men(x, y);
                menArr.push(men);
            }
            else if (matrix[y][x] == 5) {
                var Mah = new mah(x, y);
                mahArr.push(Mah);
            }
        }
    }
}

function draw() {
    //գծում է աշխարհը
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
             else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
             else if (matrix[i][j] == 4) {
                fill("#F7D4A6");
                rect(j * side, i * side, side, side);
            }
             else if (matrix[i][j] == 5) {
                fill("black");
                rect(j * side, i * side, side, side);
            }
        }
    }
    //խոտը բազմանում է
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    //խոտակերը ուտում է խոտ
    for (var i in eatersArr) {
        eatersArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in menArr) {
        menArr[i].eat();
    }
    for (var i in mahArr) {
        mahArr[i].go();
    }
}