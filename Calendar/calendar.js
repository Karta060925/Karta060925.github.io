// 宣告 --------------------------------------

const today = new Date(); // 今天的日期
let year = today.getFullYear() // 年分
let month = today.getMonth() // 月份

// DOM --------------------------------------
const yearMonthText = document.querySelector('.year-month')
const dateArea = document.querySelector('.cal-body')
const addTitle = document.querySelector('.add-title')
const editTitle = document.querySelector('.edit-title')
const modalPDdate = document.querySelector('.modal-p-date')
const btnAdd = document.querySelector('.btn-add')
const modalDate = document.querySelector('.modal-date')

const addModal = document.querySelector('#add-modal')
const editModal = document.querySelector('#edit-modal')
const detailsModal = document.querySelector('#details-modal')

const addDateInput = document.querySelector('#add-date')
const addTextInput = document.querySelector('#add-text')
const editDateInput = document.querySelector('#edit-date')
const editTextInput = document.querySelector('#edit-text')

// function --------------------------------------

// 渲染日期
function renderDate() {
    dateArea.innerHTML = ' '
    yearMonthText.innerText = ` ${year}年 ${month + 1}月`

    // 這個月的第一天是禮拜幾
    let firstDay = new Date(year, month, 1).getDay()
    // 這個月有幾天
    let dayOfMonth = new Date(year, month + 1, 0).getDate()

    // 算出這個月宇顯示的格子數量
    // Math.ceil 無條件進位    這個月的天數 + 這個月的第一天是禮拜幾 / 7
    let rows = Math.ceil((dayOfMonth + firstDay) / 7)
    let day = 1

    // 動態產生日期
    for (let row = 0; row < rows; row++) { // 產生有幾個 .row
        let divRow = document.createElement('div')
        divRow.classList.add('row')

        for (let col = 0; col < 7; col++) { // 產生一個禮拜的日期
            let divCol = document.createElement('div')
            divCol.classList.add('col', 'border-top')

            let pDate = document.createElement('p')
            pDate.classList.add('date')

            if (row == 0 && col < firstDay) {
                // 上個月

            }
            else {
                if (day <= dayOfMonth) {
                    //這個月
                    let d = day
                    pDate.classList.add('hover')
                    pDate.innerText = day

                    // if (day == today.getDate()) {
                    if (year == today.getFullYear() && month == today.getMonth() && day == today.getDate()) {
                        pDate.classList.add('today')
                    }

                    // 行程判斷顯示
                    if (localStorage.getItem(`${year}-${month + 1}-${day}`) != null) {
                        let spanList = document.createElement('span')
                        spanList.classList.add('list-item')

                        // console.log(spanList)
                        let todoList = JSON.parse(localStorage.getItem(`${year}-${month + 1}-${day}`))

                        // let divDateContent = document.createElement('div')
                        // divDateContent.classList.add('row', 'date-content')

                        // let divCol8 = document.createElement('div')
                        // divCol8.classList.add('col-8')
                        // let divCol4 = document.createElement('div')

                        // divCol4.classList.add('col-4')
                        // divCol4.innerHTML = '<button onclick="editTodoItem()" type="button" class="btn "><i class="fa-regular fa-pen-to-square"></i></button><button onclick="removeTodoItem()" type="button" class="btn "><i class="fa-solid fa-minus"></i></button>'

                        todoList.forEach((item, index) => {
                            let spanListTitle = document.createElement('span')
                            spanListTitle.classList.add('list-title')
                            spanListTitle.innerText = item.title

                            // let pModalPDate = document.createElement('p')
                            // pModalPDate.classList.add('modal-p-date')
                            // pModalPDate.innerText = item.title

                            // 編輯行程(事件冒泡)
                            spanListTitle.onclick = function (e) {
                                editDateInput.value = `${year}-${month + 1}-${d}`
                                editTextInput.value = item.title
                                // editTitle.innerText = `${month + 1}月${d}日`

                                currentIndex = index

                                bootstrap.Modal.getOrCreateInstance(editModal).show()
                                e.stopPropagation()
                            }
                            spanList.appendChild(spanListTitle)

                            // divCol8.appendChild(pModalPDate)
                        });
                        // divDateContent.appendChild(divCol8)
                        // divDateContent.appendChild(divCol4)

                        pDate.appendChild(spanList)
                        // modalDate.appendChild(divDateContent)

                    }

                    // pDate.onclick = function () {
                    //     bootstrap.Modal.getOrCreateInstance(detailsModal).show()
                    //     addDateInput.value = `${year}-${month + 1}-${d}`
                    //     addTitle.innerText = `${month + 1}月${d}日`

                    // }
                    // btnAdd.onclick = function () {
                    //     // addDateInput.value = `${year}-${month + 1}-${d}`
                    //     bootstrap.Modal.getOrCreateInstance(detailsModal).hide()
                    //     bootstrap.Modal.getOrCreateInstance(addModal).show()

                    // }
                    pDate.onclick = function () {
                        addDateInput.value = `${year}-${month + 1}-${d}`
                        addTitle.innerText = `${month + 1}月${d}日`
                        bootstrap.Modal.getOrCreateInstance(addModal).show()
                    }

                    // spanListTitle.onclick = function () {
                    //     addDateInput.value = `${year}-${month + 1}-${d}`
                    //     bootstrap.Modal.getOrCreateInstance(addModal).show()
                    // }

                }
                else {
                    //下個月

                }
                day++
            }
            divCol.appendChild(pDate)
            divRow.appendChild(divCol)
        }
        dateArea.appendChild(divRow)
    }


}

// 下個月
function nextMonth() {
    month++
    if (month == 12) {
        year++
        month = 0
    }
    renderDate()
}

// 上個月
function prevMonth() {
    month--
    if (month == -1) {
        year--
        month = 11
    }
    renderDate()
}

// 新增行程
function addTodoItem() {
    let date = addDateInput.value
    let todoItem = addTextInput.value

    let todoObj = {
        title: todoItem
    }
    let todoList = []
    // let todoArr =[
    //     {
    //         title: '吃早餐',
    //         startTime: '06:00',
    //         endTime: '08:00',
    //     }
    // ]

    if (localStorage.getItem(date) == null) {
        todoList.push(todoObj)
    } else {
        todoList = JSON.parse(localStorage.getItem(date))
        todoList.push(todoObj)
    }
    // 設定一個 localStorage key = date, 
    localStorage.setItem(date, JSON.stringify(todoList))
    bootstrap.Modal.getOrCreateInstance(addModal).hide()

    renderDate()
}

// 編輯行程
function editTodoItem() {
    let date = editDateInput.value
    let todoItem = editTextInput.value

    let todoList = JSON.parse(localStorage.getItem(date))

    todoList[currentIndex] = {
        title: todoItem
    }

    localStorage.setItem(date, JSON.stringify(todoList))
    bootstrap.Modal.getOrCreateInstance(editModal).hide()
    renderDate()
}

// 刪除行程
function removeTodoItem() {
    let date = editDateInput.value

    let todoList = JSON.parse(localStorage.getItem(date))
    todoList.splice(currentIndex, 1)

    localStorage.setItem(date, JSON.stringify(todoList))

    bootstrap.Modal.getOrCreateInstance(editModal).hide()

    renderDate()
}
// window.onload --------------------------------------

window.onload = function () {
    renderDate()
}