function getTask(){
    let task = document.getElementById("task").value
    console.log("hello")
    let priority = document.getElementById("priority").value
    let category = document.getElementById("category").value
    let due_date = document.getElementById("due_date").value
    let created_at = Date.now()
    let id = category+created_at
    let newtask = {
        task_id: id,
        title: task
    }
}

let button = document.getElementById("save_btn")
button.addEventListener("click", getTask);