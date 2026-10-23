let tasks = [];
function getTask(){
    
    let task = document.getElementById("task").value
    task = task.trim()
    if(task == ""){
        return
    }
    
    let priority = document.getElementById("priority").value
    let category = document.getElementById("category").value
    let due_date = document.getElementById("due_date").value
    let created_at = Date.now()
    let id = category+created_at
    let newtask = {
        task_id: id,
        title: task,
        priority: priority,
        category: category,
        due_date:due_date,
        created_time: created_at,
        completed: false
        
    }
    tasks.push(newtask);
    console.log(tasks);
    let showtasks = document.createElement("div")
    
    document.getElementById("task_list").appendChild(showtasks)
    showtasks.textContent = newtask.title;
    document.getElementById("task").value = ""
    let status = document.createElement("button")
    if(newtask.completed == false){
        status.textContent = "Active";
    }
    else{
        status.textContent = "Completed";
    }
    showtasks.appendChild(status)
    status.addEventListener("click", ()=>{
        newtask.completed= !newtask.completed
        if(newtask.completed == false){
            status.textContent = "Active";
        }
        else{
            status.textContent = "Completed";
        }
    });
}

let button = document.getElementById("save_btn")
button.addEventListener("click", getTask);
let press_enter = document.getElementById("task")
const check =(keydown)=>{
    if(keydown.key=="Enter"){
        getTask();
    }
}
press_enter.addEventListener("keydown",check)


