
const numInput = document.querySelector('.num-input')
const warnText = document.querySelector('.warn-text')
const btnClick = document.querySelector('.btn-enter')
const btnValue = document.querySelector('.value')
const numText = document.querySelector('p')

const light = document.querySelector('.light')
const line = document.querySelector('.line')
const again = document.querySelector('.again')

const imgSafe = document.querySelector('.img-safe')
const imgBomb_0 = document.querySelector('.img-bomb-0')
const imgBomb_1 = document.querySelector('.img-bomb-1')
const imgBomb_2 = document.querySelector('.img-bomb-2')
const imgBomb_3 = document.querySelector('.img-bomb-3')
const imgBomb_4 = document.querySelector('.img-bomb-4')
const imgBomb_5 = document.querySelector('.img-bomb-5')
const imgBomb_6 = document.querySelector('.img-bomb-6')

const keyboard = document.querySelector('.keyboard')
const imgBomber = document.querySelector('.img-bomber')
const targetBlank = document.querySelector('.target-blank')
let sectionBomb = document.querySelector('.section-bomb')

let num = numInput.value.text

let max = 100
let min = 0
let errorCount = 0;

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
let btnF5 = document.querySelector('.btn-f5')
btnF5.addEventListener('click', function () {
    history.go(0)
})
again.addEventListener('click', function () {
    history.go(0)
})
// 監聽清除
const btnResult = document.querySelector('.btn-result')
btnResult.addEventListener('click', function () {
    // numText.innerText = ''
    numInput.value = ''
})

// 監聽數字按鈕
let btnNumber = document.querySelectorAll('.btn-number')
btnNumber.forEach(element => {
    element.addEventListener('click', function () {
        numInput.value += element.innerHTML;

    })

});

// 監聽按鈕
btnClick.addEventListener('click', function () {

    let numInputValue = numInput.value
    let isParseInt = parseInt(numInput.value, 10)

    // 限定猜的次數
    errorCount++

    if (errorCount > 6) {
        imgBomb_6.style.display = 'none';
        imgBomber.style.display = 'block';
        sectionBomb.setAttribute('class', 'section-bomb bomber')
        keyboard.style.display = 'none';
        light.style.display = 'none';
        line.style.display = 'none';
        numText.style.display = 'none';
        numInput.style.display = 'none';
        warnText.style.display = 'none';
        again.style.display = 'inline-block';
    }
    else if (errorCount == 6) {
        imgBomb_5.style.display = 'none';
        imgBomb_6.style.display = 'block';
        light.style.background = 'radial-gradient(circle farthest-corner at 10% 20%, rgba(247, 87, 0, 1) 0%, rgba(249, 0, 0, 1) 90.1%)';
    }
    else if (errorCount == 5) {
        imgBomb_4.style.display = 'none';
        imgBomb_5.style.display = 'block';
    }
    else if (errorCount == 4) {
        imgBomb_3.style.display = 'none';
        imgBomb_4.style.display = 'block';
        light.style.background = 'linear-gradient( 112.7deg,  rgba(253,185,83,1) 11.4%, rgba(255,138,0,1) 70.2% )';
    }
    else if (errorCount == 3) {
        imgBomb_2.style.display = 'none';
        imgBomb_3.style.display = 'block';
    }
    else if (errorCount == 2) {
        imgBomb_1.style.display = 'none';
        imgBomb_2.style.display = 'block';
    }
    else if (errorCount == 1) {
        imgBomb_0.style.display = 'none';
        imgBomb_1.style.display = 'block';
    }

    // 判斷輸入是否是數字
    if (isNaN(isParseInt)) {
        warnText.innerText = '你輸入的不是數字'
        numInput.value = ''
    }
    else {
        // 判斷輸入的值範圍
        if (isParseInt == numValue) {
            warnText.innerText = ''
            imgBomb_0.style.display = 'none';
            imgBomb_1.style.display = 'none';
            imgBomb_2.style.display = 'none';
            imgBomb_3.style.display = 'none';
            imgBomb_4.style.display = 'none';
            imgBomb_5.style.display = 'none';
            imgBomb_6.style.display = 'none';
            imgSafe.style.display = 'block';

            light.style.background = 'linear-gradient(117deg, rgba(123, 216, 96, 1) 39.2%, rgba(255, 255, 255, 1) 156.2%)';
            targetBlank.style.display = 'inline-block';
            numText.innerText = `恭喜你猜對了，答案是 ${numValue}`
            numText.style.color = '#00dc7f';
        }
        else if (isParseInt < numValue && isParseInt > min) {
            min = isParseInt
            numText.innerText = `${min} ~ ${max}`
            numInput.value = ''
            warnText.innerText = ''
        }
        else if (isParseInt > numValue && isParseInt < max) {
            max = isParseInt
            numText.innerText = `${min} ~ ${max}`
            numInput.value = ''
            warnText.innerText = ''
        }
        else {
            warnText.innerText = '數字不再範圍內'
            numText.innerText = `${min} ~ ${max}`
            numInput.value = ''
        }
    }
})

