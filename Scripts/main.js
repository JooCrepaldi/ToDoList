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

    var isDescOn = 0;

    //checkbox funcionando como  um botão para adicionar a tarefa na lista de tarefas concluídas
    var checkbox = document.createElement("button");

    // Botão que exclui a tarefa referente
    var delButton = document.createElement("button");

    // Botão que adiciona descrições às tarefas
    var descBar = document.createElement("button");



    // Texto da descrição
    var descList = document.createElement("p");

    // Botão que adiciona a descrição
    var addDesc = document.createElement("button");

    // Botão que apaga a descrição referente
    var descDel = document.createElement("button");

    // Input da descrição
    var descText = document.createElement("input");

    // As quatro variáveis acima são declaradas acima, por mais que sejam "feitas" mais abaixo no código,
    // pois para outras funções (sobreposição da checkbox, e outros botões dentro do 'addNewLine()') os
    // objetos necessitavam estar dentro do escopo.
    // Mais adiante eu explico com mais detalhes.

    descBar.classList.add("addDesc", "material-symbols-outlined");
    descBar.id = "addDesc";
    descBar.textContent = "add_notes";
    descBar.onclick = function (){
        
    
        if(descBar.textContent == "add_notes" && (document.getElementById("input")).style.display != "none"){
            taskList.appendChild(document.createElement("p"));

            // Dependendo do loop do código, os itens abaixo continuam não visíveis, então caso sejam de fato
            // definidos, eles reaparecem.
            descDel.style.display = "block";
            descText.style.display = "block";
            descList.style.display = "none";
            addDesc.style.display = "block";
            whatAmIDeleting = 0;

            descText.placeholder = "adicionar descrição...";
            descText.id = "descInput";
            descText.classList.add("descInput");
            descText.maxLength = "27";
            taskList.appendChild(descText);


            descDel.classList.add("trashCan");
            descDel.textContent = "X";
            descDel.onclick = function(){
        
                // Apagam os itens adicionados no taskList, criados dentro da função descBar.onclick()

                descBar.textContent = "add_notes";
                descText.value = '';
                isDescOn = 0;
                descList.textContent = '';
                descList.style.display = "none";


                descText.style.display = "none";
                descDel.style.display = "none";

                addDesc.style.display = "none";

                // Oposto do appendChild(). Usado para remover o item descList, para evitar que o mesmo
                // item fosse adicionado novamente, então ele é apagado por completo, evitando que erros
                // de referência às variáveis e outros semelhantes ocorram.
                taskList.removeChild(descList);
                
            }
            
            taskList.appendChild(descDel);

            
            addDesc.classList.add("checkbox");
            addDesc.textContent = "+";

            taskList.appendChild(addDesc);
            

            addDesc.onclick = function(){
                if((descText.value).trim() != ''){

                    // Adiciona os itens criados a taskList, sem muito segredo.
                    // Também limpa o campo de texto e apaga as outra variáveis, exceto pela descDel.

                    descList.classList.add("descLi");
                    descList.textContent = "Descrição: " + descText.value;
                    descList.style.display = "block";
                    taskList.appendChild(descList);

    
                    descText.value = '';
                    descText.style.display = "none";
                    addDesc.style.display = "none";
                    descBar.textContent = "visibility_off";
                    whatAmIDeleting = 1;
                }
            }
        }
        else if(descBar.textContent == "visibility_off"){
            
            descBar.textContent = "visibility";
            descList.style.display = "none";
            whatAmIDeleting = 0;

        }
        else if(descBar.textContent == "visibility"){
            
            descBar.textContent = "visibility_off";
            descList.style.display = "block";
            whatAmIDeleting = 1;
                 
        }
    }
     
    // Lixeira linda
    var delButton = document.createElement("button"); 
    delButton.classList.add("trashCan", "material-symbols-outlined");
    delButton.textContent = "delete";
    delButton.onclick = function(){
        taskList.style.display = "none";
        isDescOn = 0;
        doesDescListExist = 0;
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

            if(whatAmIDeleting == 0){
                alert("ops");
                descDel.style.display = "none";
            }

            descText.value = '';
            descText.style.display = "none";

            addDesc.style.display = "none";

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

    if(descList.style.display == "none"){
        descDel.style.display = "none";
    }

    descText.style.display = "none";
    addDesc.style.display = "none";
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

    if(descList.style.display == "none"){
        descDel.style.display = "none";
    }

    descText.style.display = "none";
    addDesc.style.display = "none";
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
