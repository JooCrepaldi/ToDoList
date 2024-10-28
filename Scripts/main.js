function toggleDarkMode() {
    var body = document.body;
    var darkModeToggle = document.getElementById("dark-mode-toggle");
    body.classList.toggle("dark-mode");
}

/*Função que irá adicionar uma nova linha conforme  o usuário digitar algo no campo de texto*/

function addNewLine(){
    // Variável inputValue captura o texto do input quando o botão "+" é pressionado
    var inputValue = document.getElementById("input").value;
    //Variável taskList é para ir adicionando as tarefas na lista conforme o usuário digita algo no campo de texto
    var taskList = document.getElementById("taskList");
    //checkbox funcionando como  um botão para marcar a tarefa como concluída
    var checkbox = document.createElement("button");
    checkbox.classList.add("checkbox");
    checkbox.onclick = function(){
        //se a checkbox (que está pressionada) for igual a 1 (ou ao simbolo do vetor certo),  a tarefa é concluída e o simbolo some

        if(checkbox.textContent == "✅"){
            checkbox.textContent = '';
        }
        //se não, ele permanece  como está
        else{
            checkbox.textContent = "✅";
        }
    }
    //se o valor do input for diferente de um espaço em branco, vai adicionar uma linha, com uma checkbox  e o texto do input
    if(inputValue.trim() != ''){
        taskList = document.createElement("li");
        taskList.appendChild(checkbox);
        taskList.appendChild(document.createTextNode(inputValue));
        
        (document.getElementById("taskList")).appendChild(taskList);
    }
    document.getElementById("input").value = '';
}
