const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");
const form = document.querySelector("form");
const input = document.querySelector("input");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; //adding text inside li
        todoList.appendChild(li); //displaying the li under todo-List
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

////to clear input field after adding text
inputBox.value = "";
saveData();
}


todoList.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){ 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

 ///store task in browser
 function saveData(){
    localStorage.setItem("data", todoList.innerHTML)
 }

 function showTask(){
    todoList.innerHTML = localStorage.getItem("data");
 }
 showTask();