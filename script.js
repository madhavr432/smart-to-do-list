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
    getFilteredTasks(curr_filter)
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
        getFilteredTasks(curr_filter)
            
    });
    }
)
}
function getFilteredTasks(curr_filter){
    
    if(curr_filter=="all"){
        let all_count = tasks.length;
        document.getElementById("task_counter").textContent = "Total tasks: "+all_count;
        rendertask(tasks)
    }
    
    else if(curr_filter == "active"){
        let activetask = tasks.filter((task)=>{
            
            
            if(task.completed==false){
                return true
            }
        })
        let active_count = activetask.length;
        document.getElementById("task_counter").textContent = "Task Remaining: "+active_count;
        rendertask(activetask)
    }
    else{
        let completedtask = tasks.filter((task)=>{
            
            if(task.completed==true){
                
                return true
            }
        })
        let completed_count = completedtask.length;
        document.getElementById("task_counter").textContent = "Task completed: "+completed_count;
        rendertask(completedtask)
    }
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
    curr_filter = "active"
    getFilteredTasks(curr_filter)
})
let completed_button = document.getElementById("completed_tasks")
completed_button.addEventListener("click", ()=>{
    curr_filter = "completed"
    getFilteredTasks(curr_filter)
})
let all_button = document.getElementById("all_tasks")
all_button.addEventListener("click", ()=>{
    curr_filter = "all"
    
    getFilteredTasks(curr_filter)
})



