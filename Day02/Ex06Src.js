let todo = []

let items = (content, dueDate) => {
    return {
        dueDate: dueDate ? {
            year: new Date(dueDate).getFullYear(),
            month: new Date(dueDate).getMonth() + 1,
            date: new Date(dueDate).getDate()
        } : `0000-00-00`, content: content
    }
}

let addItem = () => {
    let inputElement = document.getElementById('todo')
    let dateElement = document.getElementById('due-date')
    let content = inputElement.value.trim();

    if(!content){
        alert("내용을 입력하세요")
        return
    }

    let item = items(content, dateElement.value)

    todo.push(item)
    todo.sort((i1, i2) =>{
        if(i1.dueDate === undefined || i2.dueDate === undefined) return 0
        const date1 = new Date(i1.dueDate.year, i1.dueDate.month - 1, i1.dueDate.date)
        const date2 = new Date(i2.dueDate.year, i2.dueDate.month - 1, i2.dueDate.date)
        return date1 - date2
    })

    inputElement.value = ""
    dateElement.value = ""

    console.log(todo)
    appendListItem(item)
}

let appendListItem = (item) =>{
    let list = document.getElementById('todo-list')
    list.innerHTML = ''
    for(let it of todo){
        let node = document.createElement('li')
        let dueDate = it.dueDate;
        node.textContent = `${it.content} ${(it.dueDate) ? `(${dueDate.year}년 ${dueDate.month}월 ${dueDate.date}일까지)` : ''}`
        list.appendChild(node)
    }
}

let getMinDate = () => new Date().toISOString().split('T')[0]