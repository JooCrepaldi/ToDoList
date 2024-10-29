var whichScreen = 0;
//Função que troca as cores do documento quando ativada
function color(){
    if(document.getElementById("theme-icon").textContent == "dark_mode"){
        document.getElementById("theme-icon").textContent = "light_mode";
    }
    else{
        document.getElementById("theme-icon").textContent = "dark_mode";
    }
    
}

/*Função que irá adicionar uma nova linha conforme  o usuário digitar algo no campo de texto*/

function addNewLine(){
    // Variável inputValue captura o texto do input quando o botão "+" é pressionado
    var inputValue = document.getElementById("input").value;
    //Variável taskList é para ir adicionando as tarefas na lista conforme o usuário digita algo no campo de texto
    
    var taskList;
    

    //checkbox funcionando como  um botão para marcar a tarefa como concluída
    var checkbox = document.createElement("button");
    var delButton = document.createElement("button");
    delButton.classList.add("trashCan");
    delButton.textContent = "🗑";

    delButton.onclick = function(){
        taskList.style.display = "none";
    }

    checkbox.classList.add("checkbox");
    checkbox.onclick = function(){
       
        if(checkbox.textContent == "✅"){
            checkbox.textContent = '';

            if(taskList.classList.contains("importantTask")){
                (document.getElementById("importantTaskList")).appendChild(taskList);
            }
            else{
                (document.getElementById("taskList")).appendChild(taskList);
            }
        }

        //se não, ele permanece  como está
        else{
            checkbox.textContent = "✅";
            (document.getElementById("doneTasks")).appendChild(taskList);
        }
    }
    //se o valor do input for diferente de um espaço em branco, vai adicionar uma linha, com uma checkbox  e o texto do input
    if(inputValue.trim() != ''){
        taskList = document.createElement("li");
        taskList.appendChild(checkbox);
        taskList.appendChild(document.createTextNode(inputValue));
        taskList.appendChild(delButton);
        if(whichScreen == 0){
            (document.getElementById("taskList")).appendChild(taskList);
        }
        else{
            taskList.classList.add("importantTask");
            (document.getElementById("importantTaskList")).appendChild(taskList);
        }
    }
    document.getElementById("input").value = '';
}

function switchScreen(){
    (document.getElementById("input")).style.display = "block";
    (document.getElementById("botaoadd")).style.display = "block";
    if(whichScreen == 0){
        (document.getElementById("importantTaskList")).style.display = "block";
        (document.getElementById("taskList")).style.display = "none";
        whichScreen = 1;
    }
    else{
        (document.getElementById("importantTaskList")).style.display = "none";
        (document.getElementById("taskList")).style.display = "block";
        whichScreen = 0;
    }
    (document.getElementById("doneTasks")).style.display = "none";
}

function showDoneTasks(){
    (document.getElementById("taskList")).style.display = "none";
    (document.getElementById("importantTaskList")).style.display = "none";
    if((document.getElementById("doneTasks")).style.display != "block"){
       
        (document.getElementById("doneTasks")).style.display = "block";
        (document.getElementById("input")).style.display = "none";
        (document.getElementById("botaoadd")).style.display = "none";
    }
    else{
        (document.getElementById("input")).style.display = "block";
        (document.getElementById("botaoadd")).style.display = "block";
        (document.getElementById("doneTasks")).style.display = "none";
        if(taskList.classList.contains("importantTask")){
            whichScreen = 1;
            (document.getElementById("importantTaskList")).style.display = "block";
        }
        else{
            whichScreen = 0;
            (document.getElementById("taskList")).style.display = "block";
        }
        }
    }
