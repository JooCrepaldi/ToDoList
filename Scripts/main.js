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
    var inputValue = document.getElementById("inputText").value;
    var taskList = document.getElementById("taskList");
    var checkbox = document.createElement("button");
    
    
    
    taskList = document.createElement("li");
    taskList.appendChild(checkbox);
    taskList.appendChild(document.createTextNode(inputValue));
    
}