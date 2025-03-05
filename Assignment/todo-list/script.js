function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if (task.trim() === "") return;
    
    let li = document.createElement("li");
    li.textContent = task;
    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();
    
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}