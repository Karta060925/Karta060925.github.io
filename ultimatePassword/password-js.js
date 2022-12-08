
const numInput = document.querySelector('.num-input')
const warnText = document.querySelector('span')
const btnClick = document.querySelector('.btn-enter')
const btnValue = document.querySelector('.value')
const btnResult = document.querySelector('.btn-result')
const numText = document.querySelector('p')

let light = document.querySelector('.light')

const imgBomb = document.querySelector('.img-bomb')
const imgBomber = document.querySelector('.img-bomber')
let sectionBomb = document.querySelector('.section-bomb')
let btnNumber = document.querySelectorAll('.btn-number')
let btnF5 = document.querySelector('.btn-f5')

let num = numInput.value.text

let max = 100
let min = 0

// 產生隨機卵數
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let numValue = getRandomIntInclusive(min, max)

// 監聽答案
btnValue.addEventListener('click', function () {
    numText.innerText = `答案是：${numValue}`
    // light.getElementsByClassName('.light').ad
})

// 監聽F5
btnF5.addEventListener('click', function () {
    numText.innerText = '範圍：0 ~ 100'
    numInput.value = ''
    light.removeAttribute('class', 'danger')
    light.setAttribute('class', 'light')
    imgBomb.style.display = 'block';
    imgBomber.style.display = 'none';
    sectionBomb.removeAttribute('class', 'bomber')
    sectionBomb.setAttribute('class', 'section-bomb')
    numValue = getRandomIntInclusive(min, max)


})
// 監聽清除
btnResult.addEventListener('click', function () {
    numText.innerText = ''
    numInput.value = ''
})

// 監聽數字按鈕
btnNumber.forEach(element => {
    element.addEventListener('click', function () {
        numInput.value += element.innerHTML
    })
});

// 監聽按鈕
btnClick.addEventListener('click', function () {

    let numInputValue = numInput.value
    let isParseInt = parseInt(numInput.value, 10)


    // 判斷輸入是否是數字
    if (isNaN(isParseInt)) {
        warnText.innerText = '你輸入的不是數字'
    }
    else {
        // 判斷書輸入的值範圍
        if (numInputValue == numValue) {
            light.setAttribute('class', 'light danger')
            imgBomb.style.display = 'none';
            imgBomber.style.display = 'block';
            sectionBomb.setAttribute('class', 'section-bomb bomber')
            numText.innerText = `恭喜你猜對了，答案是 ${numValue}`
        }
        else if (numInputValue < numValue && numInputValue > min) {
            min = numInputValue
            numText.innerText = `${min} ~ ${max}`
        }
        else if (numInputValue > numValue && numInputValue < max) {
            max = numInputValue
            numText.innerText = `${min} ~ ${max}`
        }
        else {
            warnText.innerText = '整數不再範圍內'
            numText.innerText = `${min} ~ ${max}`
        }
    }
})
