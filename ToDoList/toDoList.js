// 宣告 --------------------------------------
let checkValue = false
const key = 'todoListKey'

// DOM --------------------------------------
const btnPlus = document.querySelector('#btn-plus')
const listBox = document.querySelector('.list-box')
const addModal = document.querySelector('#add-modal')
const addTextInput = document.querySelector('#add-text')
const number = document.querySelector('.number')

// function --------------------------------------
function renderToDo() {
    // 初始化
    listBox.innerHTML = ''
    number.innerHTML = '0'

    // 讀取 localStorage
    let todoList = JSON.parse(localStorage.getItem(key)) || []

    // 動態長 HTML
    todoList.forEach((item, index) => {
        // 顯示多少清單事項
        number.innerHTML = index + 1

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

        // 編輯確認按鈕
        let btnCheck = document.createElement('button')
        btnCheck.classList.add('btn', 'd-none')
        btnCheck.setAttribute('id', 'btn-check')
        btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'
        currentIndex = index


        // 編輯按鈕 & 刪除按鈕
        let btnRemove = document.createElement('button')
        btnRemove.classList.add('btn')
        btnRemove.innerHTML = '<i class="fa-solid fa-minus"></i>'

        divListInput.appendChild(inputCheck)
        divContent.appendChild(inputValue)
        divListBtn.appendChild(btnEdit)
        divListBtn.appendChild(btnCheck)
        divListBtn.appendChild(btnRemove)
        divListItem.appendChild(divListInput)
        divListItem.appendChild(divContent)
        divListItem.appendChild(divListBtn)
        listBox.appendChild(divListItem)

        // 檢查是否有 check
        if (item.check) {
            divListItem.classList.add('done');
            btnEdit.disabled = true
        }

        // 監聽 checkbox 要使用change事件
        inputCheck.addEventListener('change', (e) => {
            checkValue = e.target.checked;
            item.check = checkValue
            localStorage.setItem(key, JSON.stringify(todoList))
            if (item.check) {
                divListItem.classList.add('done')
                btnEdit.disabled = true
            } else {
                divListItem.classList.remove('done')
                btnEdit.disabled = false
            }
        })

        // 監聽 編輯
        btnEdit.addEventListener('click', () => {
            inputCheck.disabled = true
            inputValue.disabled = false
            btnEdit.classList.add('d-none')
            btnCheck.classList.remove('d-none')

            // 確認編輯
            btnCheck.addEventListener('click', () => {
                inputValue.disabled = true
                item.title = inputValue.value
                // 儲存修改後的 localStorage
                localStorage.setItem(key, JSON.stringify(todoList))
                btnEdit.classList.remove('d-none')
                btnCheck.classList.add('d-none')
                inputCheck.disabled = false
            })
        })

        // 監聽 刪除
        btnRemove.addEventListener('click', () => {
            todoList.splice(currentIndex, 1)
            localStorage.setItem(key, JSON.stringify(todoList))
            renderToDo()
        })
    })

    // 監聽 新增事項
    btnPlus.onclick = function () {
        bootstrap.Modal.getOrCreateInstance(addModal).show()
        addTextInput.value = ''
    }

}

// 新增事項
function addTodoItem() {
    let todoItem = addTextInput.value
    // 行程的物件
    let todoObj = {
        title: todoItem,
        check: checkValue
    }
    // 行程的陣列 => 陣列包物件
    let todoList = []
    checkValue = false
    if (localStorage.getItem(key) == null) {
        todoList.push(todoObj)
    } else {
        // 重複加行程
        todoList = JSON.parse(localStorage.getItem(key))
        todoList.push(todoObj)
    }
    // 設定一個 localStorage
    localStorage.setItem(key, JSON.stringify(todoList))
    bootstrap.Modal.getOrCreateInstance(addModal).hide()
    renderToDo()
}
// window.onload --------------------------------------
window.onload = function () {
    renderToDo()
}