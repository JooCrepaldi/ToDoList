function toggleDarkMode() {
  
    var body = document.body;
    var darkModeToggle = document.getElementById("dark-mode-toggle");
  
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️";
    } else {
        darkModeToggle.textContent = "🌙";
    }
}

function addNewLine(){
    var inputValue = document.getElementById("input").value;
    // Variável inputValue captura o texto do input quando o botão "+" é pressionado
    var taskList = document.getElementById("taskList");
    var checkbox = document.createElement("button");
    checkbox.classList.add("checkbox");
    checkbox.onclick = function(){
        if(checkbox.textContent == "✅"){
            checkbox.textContent = '';
        }
        else{
            checkbox.textContent = "✅";
        }
    }
    
    if(inputValue.trim() != ''){
        taskList = document.createElement("li");
        taskList.appendChild(checkbox);
        taskList.appendChild(document.createTextNode(inputValue));
        
        (document.getElementById("taskList")).appendChild(taskList);
    }
    document.getElementById("input").value = '';
}