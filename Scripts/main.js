var whichScreen = 0;
var evenOrOdd = 0;
var evenOrOdd2 = 0;




// Aprendi fazendo. Essa seção está pegando o 'root:' do CSS e o tornando variável do JavaScript
// Esta variável está mudando o valor de acordo com o código sendo rodado.
const rootStyles = getComputedStyle(document.documentElement);


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if((document.getElementById("theme-icon")).textContent != "light_mode"){
        (document.getElementById("theme-icon")).style.color = "var(--cortextoI)";
        (document.getElementById("theme-icon")).textContent = "light_mode";
    }
    else{
        (document.getElementById("theme-icon")).textContent = "dark_mode";
        (document.getElementById("theme-icon")).style.color = "var(--cortextoII)";
    }
}


/*Função que irá adicionar uma nova linha conforme  o usuário digitar algo no campo de texto*/

function addNewLine() {
    // Variável inputValue captura o texto do input quando o botão "+" é pressionado
    var inputValue = document.getElementById("input").value;
    //Variável taskList é para ir adicionando as tarefas na lista conforme o usuário digita algo no campo de texto

    var taskList;


    //checkbox funcionando como  um botão para adicionar a tarefa na lista de tarefas concluídas
    var checkbox = document.createElement("button");
    // Botão que exclui a tarefa referente
    var delButton = document.createElement("button");
    // Botão que adiciona descrições às tarefas
    var descBar = document.createElement("button");
    // Texto da descrição
    var descList = document.createElement("text");

    descBar.classList.add("addDesc", "material-symbols-outlined");
    descBar.id = "addDesc";
    descBar.textContent = "add_notes";
    descBar.onclick = function (){
    
        if(descBar.textContent == "add_notes" && (document.getElementById("input")).style.display != "none"){
            descBar.textContent = " add_notes ";
            taskList.appendChild(document.createElement("p"));
            var descText = document.createElement("input");
            descText.placeholder = "adicionar descrição...";
            descText.id = "descInput";
            descText.classList.add("descInput");
            descText.maxLength = "27";
            taskList.appendChild(descText);

            var descDel = document.createElement("button");
            descDel.classList.add("trashCan");
            descDel.textContent = "X";
            descDel.onclick = function(){
                descDel.style.display = "none";
                descBar.textContent = "add_notes";
                descList.value = '';
                descText.style.display = "none";
                descList.style.display = "none";
                addDesc.style.display = "none";
                
            }
            
            taskList.appendChild(descDel);

            var addDesc = document.createElement("button");
            addDesc.classList.add("checkbox");
            addDesc.textContent = "+";

            taskList.appendChild(addDesc);
            

            addDesc.onclick = function(){
                if((descText.value).trim() != ''){
                    
                    descList.classList.add("descLi");
                    descList.textContent = "Descrição: " + descText.value;
                    descList.style.display = "block";
                    taskList.appendChild(descList);
                    taskList.appendChild(document.createElement('br'));
    
                    descList.value = '';
                    descText.style.display = "none";
                    addDesc.style.display = "none";
                    descBar.textContent = "visibility_off";
                }
            }
        }
        else if(descBar.textContent == "visibility_off"){

            descBar.textContent = "visibility";
            descList.style.display = "none";
                        
        }
        else if(descBar.textContent == "visibility"){
            
                descBar.textContent = "visibility_off";
                descList.style.display = "block";
                 
        }
    }
     
    //---seu código original---
    //delButton.classList.add("trashCan"); delButton.textContent = "🗑"; delButton.onclick = function(){ taskList.style.display = "none"; counterState(document.getElementById("totalApagado"), 1); }

//fabras eu tive que fazer isso para ver se ia o ícone... mas agora tá funcionando!! 
// crepas, dessa vez ficou realmente muito bom, meu parabas!   
    var delButton = document.createElement("button"); 
    delButton.classList.add("trashCan", "material-symbols-outlined");
    delButton.textContent = "delete";
    delButton.onclick = function(){
        taskList.style.display = "none";
        counterState(document.getElementById("totalApagado"), 1);
    }
    checkbox.classList.add("checkbox");
    checkbox.onclick = function(){
       
        if(checkbox.textContent == "✔"){
            checkbox.textContent = '';
            counterState(document.getElementById("totalConcluido"), -1);
            //  Se a tarefa referente tiver a classe importantTask ela é adicionada na seção de tarefas importantes
            if (taskList.classList.contains("importantTask")) {
                (document.getElementById("importantTaskList")).appendChild(taskList);
            }
            // Caso contrário é adicionada na seção de tarefas normais
            else {
                (document.getElementById("taskList")).appendChild(taskList);
            }
        }

        else {
            checkbox.textContent = "✔";
            counterState(document.getElementById("totalConcluido"), 1);
            (document.getElementById("doneTasks")).appendChild(taskList);
        }
    }

    
    //se o valor do input for diferente de um espaço em branco, vai adicionar uma linha, com uma checkbox  e o texto do input
    if (inputValue.trim() != '') {

        taskList = document.createElement("li");
        taskList.appendChild(checkbox);
        taskList.appendChild(document.createTextNode(inputValue));
        taskList.appendChild(descBar);
        taskList.appendChild(delButton);
        var signal = document.createElement("span");
        signal.id = "signal";
        signal.classList.add("material-icons");
        signal.textContent = "radio_button_checked";
        

        if (whichScreen == 0) {
            evenOrOdd++;
            if (evenOrOdd % 2 == 0) {
                // Tarefas pares e ímpares inativadas por agora
            }
            (document.getElementById("taskList")).appendChild(taskList);
            signal.style.color = "var(--tarefas)";

        }
        else {
            evenOrOdd2++;
            taskList.classList.add("importantTask");
            if (evenOrOdd2 % 2 == 0) {
                
            }
            
            (document.getElementById("importantTaskList")).appendChild(taskList);
            signal.style.color = "var(--importante)";

        }
    }


    taskList.appendChild(signal);
    
    counterState(document.getElementById("totalCriado"), 1);
    document.getElementById("input").value = '';
}

function switchScreen() {
    
    document.getElementById("input").value = '';
    (document.getElementById("input")).style.display = "block";
    (document.getElementById("botaoadd")).style.display = "block";
    if (whichScreen == 0) {

        // Mudando a cor para a de tarefas importantes
        (document.getElementById("status")).style.borderColor = rootStyles.getPropertyValue('--importante');
        (document.getElementById("status")).style.color = rootStyles.getPropertyValue('--importante');
        
        // Mudando ícone
        (document.getElementById("switchScreenButton")).textContent = "window";
        (document.getElementById("textTarefas")).textContent = "Importantes";
        (document.getElementById("importantTaskList")).style.display = "flex";
        (document.getElementById("taskList")).style.display = "none";
        whichScreen = 1;
    }
    else {
        (document.getElementById("status")).style.borderColor = rootStyles.getPropertyValue('--tarefas');
        (document.getElementById("status")).style.color = rootStyles.getPropertyValue('--tarefas');

        (document.getElementById("switchScreenButton")).textContent = "bolt";

        (document.getElementById("textTarefas")).textContent = "Tarefas";
        (document.getElementById("importantTaskList")).style.display = "none";
        (document.getElementById("taskList")).style.display = "flex";
        whichScreen = 0;
    }
    (document.getElementById("showDoneButton")).textContent = "check_circle";
    (document.getElementById("doneTasks")).style.display = "none";
}

function showDoneTasks() {


    (document.getElementById("status")).style.borderColor = rootStyles.getPropertyValue('--concluido');
    (document.getElementById("status")).style.color = rootStyles.getPropertyValue('--concluido');


    (document.getElementById("taskList")).style.display = "none";
    (document.getElementById("importantTaskList")).style.display = "none";

    if ((document.getElementById("doneTasks")).style.display != "flex"){

        (document.getElementById("showDoneButton")).textContent = "view_list";

        (document.getElementById("textTarefas")).textContent = "Concluídas";
        (document.getElementById("doneTasks")).style.display = "flex";
        (document.getElementById("input")).style.display = "none";
        (document.getElementById("botaoadd")).style.display = "none";
    }
    else {

        (document.getElementById("showDoneButton")).textContent = "check_circle";
        (document.getElementById("input")).style.display = "block";
        (document.getElementById("botaoadd")).style.display = "block";
        (document.getElementById("doneTasks")).style.display = "none";
        if (whichScreen == 1) {

            (document.getElementById("status")).style.borderColor = rootStyles.getPropertyValue('--importante');
            (document.getElementById("status")).style.color = rootStyles.getPropertyValue('--importante');
            (document.getElementById("textTarefas")).textContent = "Importantes";
            (document.getElementById("importantTaskList")).style.display = "flex";
        }
        else {

            (document.getElementById("status")).style.borderColor = rootStyles.getPropertyValue('--tarefas');
            (document.getElementById("status")).style.color = rootStyles.getPropertyValue('--tarefas');
            (document.getElementById("textTarefas")).textContent = "Tarefas";
            (document.getElementById("taskList")).style.display = "flex";
        }
    }
}

function counterState(pointedElement, number) {
    if (number != 0) {
        if ((parseInt(pointedElement.innerText) + number) >= 0) {
            pointedElement.innerText = parseInt(pointedElement.innerText) + number;
        }
    }
    else {
        document.getElementById("totalCriado").innerText = 0;
        document.getElementById("totalApagado").innerText = 0;
        document.getElementById("totalConcluido").innerText = 0;
    }
}
