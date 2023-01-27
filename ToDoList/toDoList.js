// 宣告 --------------------------------------
const today = new Date(); // 今天的日期
let year = today.getFullYear() // 年分
let month = today.getMonth() // 月份
let checkValue = false



// DOM --------------------------------------
const btnPlus = document.querySelector('#btn-plus')
const listBox = document.querySelector('.list-box')

const addModal = document.querySelector('#add-modal')
let addTextInput = document.querySelector('#add-text')
let number = document.querySelector('.number')

// function --------------------------------------
function renderDate() {
    // 初始化
    listBox.innerHTML = ' '
    number.innerHTML = '0'

    // 讀取 localStorage
    let todoList = JSON.parse(localStorage.getItem('todolist')) || []

    // 動態長 HTML
    todoList.forEach((item, index) => {
        // 顯示多少清單事項
        number.innerHTML = index + 1

        console.log('xx')
        let divListItem = document.createElement('div')
        divListItem.classList.add('list-item')

        let divListInput = document.createElement('div')
        divListInput.classList.add('list-input')

        // checkbox
        let inputCheck = document.createElement('input')
        inputCheck.classList.add('form-check-input')
        inputCheck.type = 'checkbox'
        inputCheck.checked = item.check

        // 輸入框
        let divContent = document.createElement('div')
        divContent.classList.add('list-content')
        let inputValue = document.createElement('input')
        inputValue.classList.add('form-control')
        inputValue.setAttribute('type', 'text')
        inputValue.setAttribute('value', `${item.title}`)
        inputValue.setAttribute('disabled', 'true')

        let divListBtn = document.createElement('div')
        divListBtn.classList.add('list-btn')

        // 編輯按鈕
        let btnEdit = document.createElement('button')
        btnEdit.classList.add('btn')
        btnEdit.setAttribute('id', 'btn-edit')
        btnEdit.innerHTML = '<i class="fa-solid fa-edit"></i>'

        let btnCheck = document.createElement('button')
        btnCheck.classList.add('btn', 'd-none')
        btnCheck.setAttribute('id', 'btn-check')
        btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
        currentIndex = index


        // 編輯按鈕 & 刪除按鈕
        let btnRemove = document.createElement('button')
        btnRemove.classList.add('btn')
        // btnRemove.setAttribute('onclick', 'removeTodoItem()')
        btnRemove.innerHTML = '<i class="fa-solid fa-minus"></i>'

        divListInput.appendChild(inputCheck)
        divContent.appendChild(inputValue)
        divListBtn.appendChild(btnEdit)
        divListBtn.appendChild(btnCheck)
        divListBtn.appendChild(btnRemove)
        // spanList.appendChild(spanListTitle)
        divListItem.appendChild(divListInput)
        divListItem.appendChild(divContent)
        divListItem.appendChild(divListBtn)
        listBox.appendChild(divListItem)

        if (item.check) {
            divListItem.classList.add('done');
            btnEdit.disabled = true

        }

        // 監聽checkbox 要使用change事件
        inputCheck.addEventListener('change', (e) => {
            // console.log(e.target.checked)
            checkValue = e.target.checked;
            item.check = checkValue
            localStorage.setItem('todolist', JSON.stringify(todoList))

            if (item.check) {
                divListItem.classList.add('done')
                btnEdit.disabled = true

            } else {
                divListItem.classList.remove('done')
                btnEdit.disabled = false


            }
        })

        btnEdit.addEventListener('click', () => {

            // let btnCheck = document.querySelector('#btn-check');
            inputCheck.disabled = true
            inputValue.disabled = false
            btnEdit.classList.add('d-none')
            btnCheck.classList.remove('d-none')
            btnCheck.addEventListener('click', () => {
                inputValue.disabled = true
                item.title = inputValue.value
                localStorage.setItem('todolist', JSON.stringify(todoList))
                btnEdit.classList.remove('d-none')
                btnCheck.classList.add('d-none')
                inputCheck.disabled = false

            })

        })

        btnRemove.addEventListener('click', () => {

            todoList.splice(currentIndex, 1)
            localStorage.setItem('todolist', JSON.stringify(todoList))
            renderDate()

        })

    })


    btnPlus.onclick = function () {
        bootstrap.Modal.getOrCreateInstance(addModal).show()
        addTextInput.value = ''
    }

}

// 新增事項
function addTodoItem() {
    // let date = addDateInput.value
    let todoItem = addTextInput.value
    // 行程的物件
    let todoObj = {
        title: todoItem,
        check: checkValue
    }
    // 行程的陣列 => 陣列包物件
    let todoList = []

    if (localStorage.getItem('todolist') == null) {
        todoList.push(todoObj)
    } else {
        // 重複加行程
        todoList = JSON.parse(localStorage.getItem('todolist'))
        todoList.push(todoObj)
    }
    // 設定一個 localStorage key = date,  value = json的字串
    localStorage.setItem('todolist', JSON.stringify(todoList))
    bootstrap.Modal.getOrCreateInstance(addModal).hide()
    renderDate()
}
// window.onload --------------------------------------
window.onload = function () {
    renderDate()


}