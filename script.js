const textBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(textBox.value===''){
        alert('You must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=textBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    textBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagname === "LI"){
        e.target.classList.toggle("Checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();