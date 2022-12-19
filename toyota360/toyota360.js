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

let color = 18;

window.onload = function () {

    // 呼叫 GenCarArray
    GenCarArray();

    let btnLeft = document.querySelector('.btn-left');
    let x = 0;


    let tid;





    // 左鍵
    btnLeft.addEventListener('click', function () {

        if (x == 59) {
            x = 0;
        }
        else {
            x++;
        }
        img.setAttribute('src', carArray[x]);

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

// GenCarArray 方法 讀取60張圖片
function GenCarArray() {
    if (color == 18) {
        for (let x = 1; x <= 60; x++) {

            let urlTemplate = `https://hotaicdn.azureedge.net/toyotaweb/360EXT_1_${color}_${x}.png`;
            // push 存入 carArray 陣列
            carArray.push(urlTemplate);
        }
        dotBlueGray.setAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    else if (color == 19) {
        for (let x = 1; x <= 60; x++) {

            let urlTemplate = `https://hotaicdn.azureedge.net/toyotaweb/360EXT_1_${color}_${x}.png`;
            // push 存入 carArray 陣列
            carArray.push(urlTemplate);
        }
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.setAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    else if (color == 20) {
        for (let x = 1; x <= 60; x++) {

            let urlTemplate = `https://hotaicdn.azureedge.net/toyotaweb/360EXT_1_${color}_${x}.png`;
            // push 存入 carArray 陣列
            carArray.push(urlTemplate);
        }
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.setAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    else if (color == 21) {
        for (let x = 1; x <= 60; x++) {

            let urlTemplate = `https://hotaicdn.azureedge.net/toyotaweb/360EXT_1_${color}_${x}.png`;
            // push 存入 carArray 陣列
            carArray.push(urlTemplate);
        }
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.setAttribute('class', 'WhiteGray active');
    }
    else if (color == 22) {
        for (let x = 1; x <= 60; x++) {

            let urlTemplate = `https://hotaicdn.azureedge.net/toyotaweb/360EXT_1_${color}_${x}.png`;
            // push 存入 carArray 陣列
            carArray.push(urlTemplate);
        }
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.setAttribute('class', 'red active');
        dotWhite.removeAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
    else if (color == 23) {
        for (let x = 1; x <= 60; x++) {

            let urlTemplate = `https://hotaicdn.azureedge.net/toyotaweb/360EXT_1_${color}_${x}.png`;
            // push 存入 carArray 陣列
            carArray.push(urlTemplate);
        }
        dotBlueGray.removeAttribute('class', 'blueGray active');
        dotBlack.removeAttribute('class', 'black active');
        dotGray.removeAttribute('class', 'gray active');
        dotRed.removeAttribute('class', 'red active');
        dotWhite.setAttribute('class', 'White active');
        dotWhiteGray.removeAttribute('class', 'WhiteGray active');
    }
}