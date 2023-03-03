const key = 'todoListVueKey'
let data = {
    // key: 'todoList',
    checked: false,
    todoInput: '',
    disabled: false,
    todoListArray: [],
}

let vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        btnPlus() {
            bootstrap.Modal.getOrCreateInstance(addModal).show()
            this.todoInput = ''
        },
        addTodoItem() {
            this.todoListArray.push({
                checked: false,
                disabled: true,
                todoInput: this.todoInput,
            })
            this.todoInput = ''
            localStorage.setItem(key, JSON.stringify(this.todoListArray))
            bootstrap.Modal.getOrCreateInstance(addModal).hide()
        },
        editTodoItem(index) {
            // 編輯
            this.todoListArray[index].disabled = false

            localStorage.setItem(key, JSON.stringify(this.todoListArray))

        },
        saveTodoItem(index) {
            this.todoListArray[index].disabled = true
            localStorage.setItem(key, JSON.stringify(this.todoListArray))

        },
        removeTodoItem(index) {
            this.todoListArray.splice(index, 1)
            localStorage.setItem(key, JSON.stringify(this.todoListArray))
        },
        checkValue(index) {
            this.todoListArray[index].checked = !this.todoListArray[index].checked
            localStorage.setItem(key, JSON.stringify(this.todoListArray))
        }
    },
    mounted() {
        this.todoListArray = JSON.parse(localStorage.getItem(key)) || [];
    },

})