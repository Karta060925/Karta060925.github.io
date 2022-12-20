// 圖片陣列
let carArray = [];

let btnRight = document.querySelector('.btn-right');
let btnLeft = document.querySelector('.btn-left');
let img = document.querySelector('img');

let dotBlueGray = document.querySelector('.blueGray');
let dotBlack = document.querySelector('.black');
let dotGray = document.querySelector('.gray');
let dotRed = document.querySelector('.red');
let dotWhite = document.querySelector('.white');
let dotWhiteGray = document.querySelector('.whiteGray');
let colorName = document.querySelector('.color-name');
let range = document.querySelector('input');

let color = 18;

let rangeBool = false;
let min = 0;

const num = 1;



window.onload = function () {

    // 呼叫 GenCarArray
    GenCarArray();

    let x = 0; // 索引
    let time;

    // 左鍵
    btnLeft.addEventListener('click', function () {

        if (x == 59) {
            x = 0;
        }
        else {
            x++;
        }
        img.setAttribute('src', carArray[x]);

        // 連續觸發
        btnLeft.onmousedown = function (e) {
            time = setInterval(function () {

                if (x == 59) {
                    x = 0;
                }
                else {
                    x++;
                }

                img.setAttribute('src', carArray[x]);

            }, 40);
        };
        btnLeft.onmouseup = function (e) {
            clearInterval(time);
        }
        btnLeft.onmouseout = function (e) {
            clearInterval(time);
        }

    });
    // 右鍵
    btnRight.addEventListener('click', function () {

        if (x == 0) {
            x = 59;
        }
        else {
            x--;
        }
        img.setAttribute('src', carArray[x]);


        // 連續觸發
        btnRight.onmousedown = function (e) {
            time = setInterval(function () {
                if (x == 0) {
                    x = 59;
                }
                else {
                    x--;
                }
                img.setAttribute('src', carArray[x]);
            }, 40);
        };
        btnRight.onmouseup = function (e) {
            clearInterval(time);
        }
        btnRight.onmouseout = function (e) {
            clearInterval(time);
        }
    });


    // 拖移旋轉 判斷滑鼠
    function rotatePole(e) {

        let isParseInt = parseInt(range.value, 10)

        // 右轉
        if (isParseInt > 2) {
            if (rangeBool) {
                (e.range > 0) ? min += num : min -= num;
                if (x == 0) {
                    x = 59;
                }
                else {
                    x--;
                }

                img.setAttribute('src', carArray[x]);
            }

        }
        // 左轉
        if (isParseInt < 2) {
            if (rangeBool) {
                (e.range > 0) ? min += num : min -= num;
                if (x == 59) {
                    x = 0;
                }
                else {
                    x++;
                }
                img.setAttribute('src', carArray[x]);
            }
        }
    }
    range.addEventListener('mousemove', rotatePole);
    window.addEventListener('mousedown', function () {
        return rangeBool = true;
    });
    window.addEventListener('mouseup', function () {
        return rangeBool = false;
    });


    // 換顏色
    dotBlueGray.addEventListener('click', function () {
        color = 18;
        carArray = [];
        GenCarArray();
        img.setAttribute('src', carArray[x]);
        colorName.innerHTML = "藍曜灰";

    });
    dotBlack.addEventListener('click', function () {
        color = 19;
        carArray = [];
        GenCarArray();
        img.setAttribute('src', carArray[x]);
        colorName.innerHTML = "檀木黑";
    });
    dotGray.addEventListener('click', function () {
        color = 20;
        carArray = [];
        GenCarArray();
        img.setAttribute('src', carArray[x]);
        colorName.innerHTML = "雲河灰";

    });
    dotWhiteGray.addEventListener('click', function () {
        color = 21;
        carArray = [];
        GenCarArray();
        img.setAttribute('src', carArray[x]);
        colorName.innerHTML = "極光銀";

    });
    dotRed.addEventListener('click', function () {
        color = 22;
        carArray = [];
        GenCarArray();
        img.setAttribute('src', carArray[x]);
        colorName.innerHTML = "炫魅紅";


    });
    dotWhite.addEventListener('click', function () {
        color = 23;
        carArray = [];
        GenCarArray();
        img.setAttribute('src', carArray[x]);
        colorName.innerHTML = "雪貂白";

    });
}

// GenCarArray 方法 讀取圖片
function GenCarArray() {
    if (color == 18) {
        dotBlueGray.setAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    else if (color == 19) {
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.setAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    else if (color == 20) {
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.setAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    else if (color == 21) {
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.setAttribute('class', 'WhiteGray active');
    }
    else if (color == 22) {
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.setAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    else if (color == 23) {
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.setAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    for (let x = 1; x <= 60; x++) {

        // let urlTemplate = `https://hotaicdn.azureedge.net/toyotaweb/360EXT_1_${color}_${x}.png`;
        let urlTemplate = `./img/toyota-img/360EXT_1_${color}_${x}.png`;
        // push 存入 carArray 陣列
        carArray.push(urlTemplate);
    }
}