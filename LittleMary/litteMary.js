//宣告 ---------------------------------------------
// 格子資料
// 每個格子是一筆資料 一筆物件
let brickData = [
    {
        id: '1', // box-id
        img: 'img/little-maryb6.png',
        fraction: 10,
        target: function () { // target 踩到做事情
            return 10 * 2
        }
    },
    {
        id: '2',
        img: 'img/little-maryb4.png',
        fraction: 20,
        target: function () { // target 踩到做事情
            return 20 * 2
        }
    },
    {
        id: '3',
        img: 'img/little-mary100.png',
        fraction: 100,
        target: function () { // target 踩到做事情
            return 100
        }
    },
    {
        id: '4',
        img: 'img/little-mary500.png',
        fraction: 500,
        target: function () { // target 踩到做事情
            return 500
        }
    },
    {
        id: '5',
        img: 'img/little-maryb5.png',
        fraction: 5,
        target: function () { // target 踩到做事情
            return 5 * 2
        }
    },
    {
        id: '6',
        img: 'img/little-mary5.png',
        fraction: 5,
        target: function () { // target 踩到做事情
            return 5
        }
    },
    {
        id: '7',
        img: 'img/little-maryb7.png',
        fraction: 15,
        target: function () { // target 踩到做事情
            return 15 * 2
        }
    },
    {
        id: '8',
        img: 'img/little-maryb3.png',
        fraction: 20,
        target: function () { // target 踩到做事情
            return 20 * 2
        }
    },
    {
        id: '9',
        img: 'img/little-mary3.png',
        fraction: 20,
        target: function () { // target 踩到做事情
            return 20
        }
    },
    {
        id: '10',
        img: 'img/little-maryb5.png',
        fraction: 5,
        target: function () { // target 踩到做事情
            return 5 * 2
        }
        // img: 'img/little-mary-once.png',
        // fraction: null,
        // target: function () { // target 踩到做事情
        //     return null
        // }
    },
    {
        id: '11',
        img: 'img/little-mary5.png',
        fraction: 5,
        target: function () { // target 踩到做事情
            return 5
        }
    },
    {
        id: '12',
        img: 'img/little-mary6.png',
        fraction: 10,
        target: function () { // target 踩到做事情
            return 10
        }
    },
    {
        id: '13',
        img: 'img/little-maryb7.png',
        fraction: 15,
        target: function () { // target 踩到做事情
            return 15 * 2
        }
    },
    {
        id: '14',
        img: 'img/little-mary7.png',
        fraction: 15,
        target: function () { // target 踩到做事情
            return 15
        }
    },
    {
        id: '15',
        img: 'img/little-maryb5.png',
        fraction: 5,
        target: function () { // target 踩到做事情
            return 5 * 2
        }
    },
    {
        id: '16',
        img: 'img/little-mary1.png',
        fraction: 40,
        target: function () { // target 踩到做事情
            return 40
        }
    },
    {
        id: '17',
        img: 'img/little-maryb1.png',
        fraction: 40,
        target: function () { // target 踩到做事情
            return 40 * 2
        }
    },
    {
        id: '18',
        img: 'img/little-maryb4.png',
        fraction: 20,
        target: function () { // target 踩到做事情
            return 20 * 2
        }
    },
    {
        id: '19',
        img: 'img/little-maryb6.png',
        fraction: 10,
        target: function () { // target 踩到做事情
            return 10 * 2
        }
    },
    {
        id: '20',
        img: 'img/little-maryb4.png',
        fraction: 20,
        target: function () { // target 踩到做事情
            return 20 * 2
        }
    },
    {
        id: '21',
        img: 'img/little-maryb5.png',
        fraction: 5,
        target: function () { // target 踩到做事情
            return 5 * 2
        }
    },
    {
        id: '22',
        img: 'img/little-mary5.png',
        fraction: 5,
        target: function () { // target 踩到做事情
            return 5
        }
        // img: 'img/little-mary-once.png',
        // fraction: 0,
        // target: function () { // target 踩到做事情
        //     return 0
        // }
    },
    {
        id: '23',
        img: 'img/little-mary2.png',
        fraction: 30,
        target: function () { // target 踩到做事情
            return 30
        }
    },
    {
        id: '24',
        img: 'img/little-maryb2.png',
        fraction: 30,
        target: function () { // target 踩到做事情
            return 30 * 2
        }
    }
]
let numItemData = [
    // {
    //     id: '1',
    //     img: 'img/little-mary-bar.png',
    //     fraction: 100
    // },
    {
        id: '2',
        img: 'img/little-mary2.png',
        fraction: 30
    },
    {
        id: '3',
        img: 'img/little-mary4.png',
        fraction: 20
    },
    {
        id: '4',
        img: 'img/little-mary6.png',
        fraction: 10
    },
    {
        id: '5',
        img: 'img/little-mary1.png',
        fraction: 40
    },
    {
        id: '6',
        img: 'img/little-mary3.png',
        fraction: 20
    },
    {
        id: '7',
        img: 'img/little-mary7.png',
        fraction: 15
    },
    // {
    //     id: '8',
    //     img: 'img/little-mary5.png',
    //     fraction: 5
    // }
]

let steps = 0 // 剩餘要走幾步
let allSteps = 0 // 全部的步數
let current = 0 // 目前走到哪一格

let stepsNum = 0 // 剩餘要走幾步
let allStepsNum = 0 // 全部的步數
let currentNum = 0 // 目前走到哪一格

let speed; // 速率 (越大走越慢)

let credit = 100
let numArray = []
let radioNum
// let btnMarry = document.querySelector('#btn-marry')
// let btnMarry1 = document.querySelector('#btn-marry1')
// let btnMarry2 = document.querySelector('#btn-marry2')
// let btnMarry3 = document.querySelector('#btn-marry3')
// let btnMarry4 = document.querySelector('#btn-marry4')
// let btnMarry5 = document.querySelector('#btn-marry5')
// let btnMarry6 = document.querySelector('#btn-marry6')
// let btnMarry7 = document.querySelector('#btn-marry7')

// let numberMarry = document.querySelector('#number-marry')
// let numberMarry1 = document.querySelector('#number-marry1')
// let numberMarry2 = document.querySelector('#number-marry2')
// let numberMarry3 = document.querySelector('#number-marry3')
// let numberMarry4 = document.querySelector('#number-marry4')
// let numberMarry5 = document.querySelector('#number-marry5')
// let numberMarry6 = document.querySelector('#number-marry6')
// let numberMarry7 = document.querySelector('#number-marry7')

// let a = 1
// let b = 1
// let c = 1
// let d = 1
// let e = 1
// let f = 1
// let g = 1
// let h = 1
// DOM -----------------------------------------------
const startBtn = document.querySelector('button')
const msgBox = document.querySelector('#msg')
const textBox = document.querySelector('.text-box')
let bricks;
let numItems;
// let fraction;

let radioFalse = document.querySelector('#radio-false')
let radioTrue = document.querySelector('#radio-true')
let creditNumber = document.querySelector('#credit-number')
let bonusNumber = document.querySelector('#bonus-number')
// let btnCheckNum = document.querySelectorAll('.btn-check-num')
// function ------------------------------------------
function renderBrick() {
    bricks = document.querySelectorAll('[box-id]');

    // 重新排序 按照 box-id 1 - 32
    bricks = Array.from(bricks).sort((a, b) => {
        return a.getAttributeNode('box-id').value - b.getAttributeNode('box-id').value
    })
    // console.log(bricks)

    bricks.forEach(x => {
        let id = x.getAttributeNode('box-id').value
        let data = brickData.find(x => x.id == id)

        let img = document.createElement('img')
        // img.classList.add('w-100')
        img.setAttribute('src', data.img)

        // let icon = document.createElement('i');
        // icon.setAttribute('class', data.icon);

        x.appendChild(img);
    })
}

function go() {
    speed = 50;
    let random = Math.floor(Math.random() * brickData.length) + 1
    // console.log(random)

    // steps = random; // lv1
    steps = random + (2 * bricks.length) // 多跑三圈 再停下 lv2
    allSteps = steps;
    turnAround();
}

function turnAround() {
    // 目前亮起來的先關掉
    bricks[current].classList.remove('active');
    current++

    // 到 32 後變回 0
    if (current >= bricks.length) current = 0;

    bricks[current].classList.add('active');
    steps-- // 走一步 剩多少步

    if (steps > 0) // 未走完
    {
        setTimeout(turnAround, speed) // 重複執行

        // 剩餘步數 剩下 3/1時 減速 加速-=
        if (steps < Math.floor((allSteps / 3))) speed += 7
    } else { // 走完
        // textBox.innerText = brickData[current].target()
    }

}

// 底下分數
function renderNumItems() {
    numItems = document.querySelectorAll('[num-item-id]');

    // 重新排序 按照 num-item-id 1 - 32
    numItems = Array.from(numItems).sort((a, b) => {
        return a.getAttributeNode('num-item-id').value - b.getAttributeNode('num-item-id').value
    })
    // console.log(numItems)

    // fraction = document.querySelector('.fraction')
    // let divCol
    // numItems.forEach(y => {
    //     let id = y.getAttributeNode('num-item-id').value
    //     let data = numItemData.find(y => y.id == id)

    //     divCol = document.createElement('div')
    //     divCol.classList.add('col')

    //     let divNumItem = document.createElement('div')
    //     divNumItem.classList.add('num-item')
    //     divNumItem.setAttribute('num-item-id', data.id)


    //     let p = document.createElement('p')
    //     p.classList.add('b-green')
    //     p.innerText = data.fraction

    //     let img = document.createElement('img')
    //     // // img.classList.add('w-100')
    //     img.setAttribute('src', data.img)

    //     let div = document.createElement('div')
    //     div.classList.add('num-box', 'number')

    //     divNumItem.appendChild(p)
    //     divNumItem.appendChild(img)
    //     divNumItem.appendChild(div)
    //     divCol.appendChild(divNumItem)
    //     // let icon = document.createElement('i');
    //     // icon.setAttribute('class', data.icon);

    //     // y.appendChild(img);
    // })
    // fraction.appendChild(divCol)
}

function goNum() {
    speedNum = 100;
    let randomNum = Math.floor(Math.random() * numItemData.length) + 1
    // console.log(random)

    // steps = random; // lv1
    stepsNum = randomNum + (5 * numItems.length) // 多跑三圈 再停下 lv2
    allStepsNum = steps;
    turnAroundNum();
}

function turnAroundNum() {

    // 目前亮起來的先關掉
    numItems[currentNum].classList.remove('active');
    currentNum++

    // 到 32 後變回 0
    if (currentNum >= numItems.length) currentNum = 0;

    numItems[currentNum].classList.add('active');
    stepsNum-- // 走一步 剩多少步

    if (stepsNum > 0) // 未走完
    {
        setTimeout(turnAroundNum, speedNum) // 重複執行

        // 剩餘步數 剩下 3/1時 減速 加速-=
        if (stepsNum < Math.floor((allStepsNum / 3))) speedNum += 7
    }
    else { // 走完
        if (brickData[current].target() == numItemData[currentNum].fraction) {
            textBox.innerText = brickData[current].target() * numItemData[currentNum].fraction
        }
        numArray.push(brickData[current].target() + numItemData[currentNum].fraction)
        textBox.innerHTML = `Fraction：${brickData[current].target()} <br> Bonus：${numItemData[currentNum].fraction} <br> Total：${SumData(numArray)}`
    }

}

function deductCredit() {
    creditNumber.innerText = `$${credit}`
}


let max = 100
let min = 0

// 產生隨機亂數
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 加總
function SumData(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
}

// function radio() {
//     let radio = document.querySelectorAll('.radio');
//     let Str = "";
//     for (let i = 0; i < radio.length; i++) {
//         if (radio[i].type == "radio") {
//             if (radio[i].checked) {
//                 if (radioNum == radio[i].value) {
//                     Str = 'true'
//                 }
//                 if (Str == "") {
//                     console.log(radioNum)
//                     Str = "您勾選的項目 : " + radio[i].value;
//                 } else {
//                     Str += "\n您勾選的項目 : " + radio[i].value;
//                 }
//             }
//         }
//     }
//     alert(Str);
// }


// window.load
window.onload = function () {
    // btnMarry.addEventListener('click', function () {
    //     if (numberMarry.value < 10) {
    //         numberMarry.value = a++
    //     }
    // })

    // btnMarry1.addEventListener('click', function () {
    //     if (numberMarry1.value < 10) {
    //         numberMarry1.value = b++
    //     }
    // })
    // btnMarry2.addEventListener('click', function () {
    //     if (numberMarry2.value < 10) {
    //         numberMarry2.value = c++
    //     }
    // })
    // btnMarry3.addEventListener('click', function () {
    //     if (numberMarry3.value < 10) {
    //         numberMarry3.value = d++
    //     }
    // })
    // btnMarry4.addEventListener('click', function () {
    //     if (numberMarry4.value < 10) {
    //         numberMarry4.value = e++
    //     }
    // })
    // btnMarry5.addEventListener('click', function () {
    //     if (numberMarry5.value < 10) {
    //         numberMarry5.value = f++
    //     }
    // })
    // btnMarry6.addEventListener('click', function () {
    //     if (numberMarry6.value < 10) {
    //         numberMarry6.value = g++
    //     }
    // })
    // btnMarry7.addEventListener('click', function () {
    //     if (numberMarry7.value < 10) {
    //         numberMarry7.value = h++
    //     }
    // })
    deductCredit()
    renderBrick();
    renderNumItems();


    startBtn.onclick = function () {
        if (credit > 0) {
            // let numValue = getRandomIntInclusive(min, max)
            // bonusNumber.innerText = numValue
            credit = credit - 25
            go();
            goNum();
            creditNumber.innerText = `$${credit}`
            // if (radioFalse.value == false) {
            //     creditNumber.innerText = `$${credit}333333`
            // }
            // if (numValue > 50) {
            //     radioNum = true
            // }
            // else {
            //     radioNum = false
            // }
            // radio()
        }
        // else {

        // }

    }
}