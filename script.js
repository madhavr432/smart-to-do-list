let tasks = [];
let curr_filter = "all";
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
    rendertask(tasks)
    document.getElementById("task").value = ""
}

function rendertask(task){
    document.getElementById("task_list").innerHTML = ""
    task.forEach(element => {
        let showtasks = document.createElement("div")
        let taskpri =document.createElement("button")
        taskpri.textContent = element.priority
        let taskcat =document.createElement("button")
        taskcat.textContent = element.category
        let taskdate =document.createElement("button")
        taskdate.textContent = element.due_date
        document.getElementById("task_list").appendChild(showtasks)
        showtasks.textContent = element.title;
        let status = document.createElement("button")
        if(element.completed == false){
            status.textContent = "Active";
        }
        else{
            status.textContent = "Completed";
        }
        showtasks.append(taskpri)
        showtasks.append(taskcat)
        showtasks.append(taskdate)
        showtasks.append(status)
        status.addEventListener("click", ()=>{
        element.completed= !element.completed
        if(element.completed == false){
            status.textContent = "Active";
            
        }
        else{
            status.textContent = "Completed";
        }
        rendertask(task)
        
    });
    }
)
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
let active_button = document.getElementById("active_tasks")
active_button.addEventListener("click", ()=>{
    let activetask = tasks.filter((task)=>{
        if(task.completed==false){
            
            return true
        }
    })
    rendertask(activetask)
})
let completed_button = document.getElementById("completed_tasks")
completed_button.addEventListener("click", ()=>{
    let completedtask = tasks.filter((task)=>{
        if(task.completed==true){
            
            return true
        }
    })
    rendertask(completedtask)
})



