function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if(taskText==="")
{
    alert("please enter a task!");
    return;
}
const li = document.createElement("li");
const span =
document.createElement("span");
span.textContent =taskText;

const deleteBtn = document.createElement("button");
deleteBtn.textContent ="Delete";
deleteBtn.onclick =()=> li.remove();

li.appendChild(span);
li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);
taskInput.value ="";

}