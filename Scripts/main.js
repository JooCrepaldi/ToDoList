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
    alert("log 1");
    var inputValue = document.getElementById("input").value;
    // Variável inputValue captura o texto do input quando o botão "+" é pressionado
    var taskList = document.getElementById("idUL");
    var checkbox = document.createElement("button");
    
    
    
    taskList = document.createElement("li");
    taskList.appendChild(checkbox);
    taskList.appendChild(document.createTextNode(inputValue));
    (document.getElementById("idUL")).appendChild(taskList);
}