var inputBox = document.getElementById("input-task");
var ListContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something!");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
}

ListContainer.onclick = function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
};