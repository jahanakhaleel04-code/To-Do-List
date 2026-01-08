let userForm = document.getElementById('userForm')

let taskArr = [];

//function to clear input
const clearInput = () => {
    task.value = ''
}

//function to create a task
const createTask = (e) => {
    e.preventDefault();
    let task = document.getElementById('task').value;
    if (!task) {
        alert('Enter a task')
        return;
    }
    taskArr.push(task);
    // console.log(taskArr)
    clearInput();
    listTasks();
}

//function to read tasks
const listTasks = () => {
    let ul = document.getElementById('taskList')
    // console.log(ul);
    ul.innerHTML = '';
    for (let i = 0; i < taskArr.length; i++) {
        // console.log(taskArr[i])

        //using innerHtml 

        // ul.innerHTML += `<li class="list-group-item d-flex">${taskArr[i]}
        //                     <button class="btn btn-sm btn-danger ms-auto">Delete</button>
        //                     <button class="btn btn-sm btn-success ms-auto">Completed</button>
        //                 </li>`

        let li = document.createElement('li')
        let delBtn = document.createElement('button')
        let completeBtn = document.createElement('button')

        const textSpan = document.createElement('span')
        textSpan.textContent = taskArr[i]; //li created and added content using DOM (createElement) methods 
        li.classList.add('list-group-item', 'd-flex')

        //del btn
        delBtn.textContent = 'Delete'
        delBtn.classList.add('btn', 'btn-sm', 'btn-danger', 'ms-2')

        //completed btn
        completeBtn.textContent = 'Completed'
        completeBtn.classList.add('btn', 'btn-sm', 'btn-success', 'ms-auto')

        li.append(textSpan,completeBtn,delBtn)

        ul.append(li)

        delBtn.addEventListener('click', () => delTask(i))
        completeBtn.addEventListener('click',() => completedTask(textSpan))

    }
}

//function to delete task
const delTask = (index) => {
    // console.log(index);
    taskArr.splice(index,1)
    listTasks()         //tasks listed after deletion
}

//function to strike data when completed button is clicked
const completedTask = (texSpan) => {
    texSpan.classList.toggle('strikethrough')
    // console.log(li.style.textDecoration);
}


//user input form submit for add task
userForm.addEventListener('submit', createTask);