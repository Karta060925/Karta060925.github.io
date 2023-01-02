
let numInput = document.querySelector('.num-input')
let warnText = document.querySelector('.warn-text')
const btnEnter = document.querySelector('.btn-enter')
let text = document.querySelector('p')
const again = document.querySelector('.again')
const keyboard = document.querySelector('.keyboard')

const node = document.querySelector('.node')
const btnAnswer = document.querySelector('.btn-answer')
const btnF5 = document.querySelector('.btn-f5')
const content = document.querySelector('.content')

const btnStart = document.querySelector('.btn-start')
const bgStart = document.querySelector('.bg-start')
const nodeTitle = document.querySelector('.node-title')
let num = numInput.value.text
let randomArray = []; // 隨機亂數
let answer; // 答案
let numArr = []; // 紀錄猜密碼歷史的陣列
let answerArr = [];
let nodeText = document.createElement('div'); // 產生放紀錄文字的 div
nodeText.setAttribute('class', 'text');

window.onload = function () {

    btnStart.addEventListener('click', function () {
        answer = randomNum()
        console.log(answer)
        bgStart.style.display = 'none';

    });

    // 監聽 顯示答案
    btnAnswer.addEventListener('click', function () {
        nodeText.innerHTML = `Answer：${answer}`;
        content.append(nodeText);
    })

    // 監聽 重整
    again.addEventListener('click', function () {
        history.go(0);
    })
    btnF5.addEventListener('click', function () {
        // 清除猜密碼歷史紀錄
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        warnText.innerText = ''
        bgStart.style.display = 'flex';
        answer = randomNum()
    })

    // 監聽 Enter按鈕
    btnEnter.addEventListener('click', function () {
        gameLog()
    });
    // 監聽 清除
    const btnResult = document.querySelector('.btn-result')
    btnResult.addEventListener('click', function () {
        numInput.value = ''
    })

    // 監聽 密碼按鈕
    let btnNumber = document.querySelectorAll('.btn-number')
    btnNumber.forEach(num => {
        num.addEventListener('click', function () {
            numInput.value += num.innerHTML;
        })
    });

}

// 方法 產生亂數 
function randomNum() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let num3 = Math.floor(Math.random() * 10);
    let num4 = Math.floor(Math.random() * 10);

    // 建立一個陣列 存放 四個亂數
    let randomArray = [num1, num2, num3, num4];
    // 判斷亂數 不會重複 且最終陣列程度為 4  
    //                            filter 判斷完會組成新陣列  indexOf 找陣列中是否等於 索引的密碼
    let randomCheck = randomArray.filter((num, index) => randomArray.indexOf(num) === index);

    // 判斷完後回傳 四個亂數
    if (randomCheck.length === 4) {
        return `${num1}${num2}${num3}${num4}`;
    }
    else {
        return randomNum()
    }
}
// 方法 遊戲邏輯 
function gameLog() {
    let A = 0;
    let B = 0;
    let nodeText = document.createElement('div'); // 產生放紀錄文字的 div

    numArr = []; // 輸入數字的陣列
    answerArr = []; // 答案的陣列

    let inputValue = numInput.value;
    let set = new Set(inputValue); // set一個新陣列
    let checkRepeat = set.size; // 檢查密碼 的長度
    console.log(set)
    console.log(checkRepeat)

    // let isParseInt = parseInt(numInput.value, 10)
    // 猜對
    if (inputValue == answer) {
        nodeText.innerHTML = `<span class="success">4A0B </span>${inputValue}`;
        numInput.value = '';
        warnText.innerText = ''
        content.append(nodeText);
        keyboard.style.display = 'none';
        again.style.display = 'inline-block';
        node.setAttribute('class', 'node bg')
        nodeTitle.innerText = 'welcome';
        return
    }
    // 防呆 只能輸入四個密碼 
    else if (inputValue.length !== 4 || checkRepeat !== 4) {
        warnText.innerText = '密碼不再範圍內，請重新輸入'
        numInput.value = '';
        return;
    }

    for (let i = 0; i < inputValue.length; i++) {
        let number = inputValue.charAt(i); // charAt 檢查陣列中是的數字
        numArr.push(number); // 輸入的數字 推進去 輸入數字的陣列裡
        answerArr.push(answer.charAt(i)); // 四個亂數 推進去 達進去答案的陣列裡
    }

    for (let i = 0; i < answerArr.length; i++) {
        // 比較兩個陣列裡的數字
        if (numArr[i] === answerArr[i]) { // 位置與數字都正確 A++
            A++;
        }
        else if (answerArr.includes(numArr[i])) { // includes 尋找陣列是否有此數字 數字正確位置不正確 B++
            B++;
        }
    }
    nodeText.innerHTML = `<span class="danger">${A}A${B}B </span>${inputValue}`;
    content.append(nodeText);
    warnText.innerText = '';
    numInput.value = '';
}



