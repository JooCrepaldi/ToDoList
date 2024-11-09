var whichScreen = 0;
var evenOrOdd = 0;
var evenOrOdd2 = 0;
var qCriada = document.getElementById("totalCriado");

var qApagada = document.getElementById("totalApagado");

var qFeita = document.getElementById("totalConcluido");

var normalText = (document.getElementById("regText"));
var impText = (document.getElementById("impText"));
var doneText = (document.getElementById("doneText"));

//Função que troca as cores do documento quando ativada
//function color(){
//if(!(document.getElementById("theme-icon").textContent == "light_mode")){
//    document.getElementById("theme-icon").textContent = "light_mode";

//    (document.body).classList.remove("light_mode");
//   (document.body).classList.toggle("dark_mode");
// }
// else{
//    document.getElementById("theme-icon").textContent = "dark_mode";

//   (document.body).classList.remove("dark_mode");
//    (document.body).classList.toggle('light_mode');
// }
//}



function toggleDarkMode() {
document.body.classList.toggle('dark-mode');
}


/*Função que irá adicionar uma nova linha conforme  o usuário digitar algo no campo de texto*/

function addNewLine() {
    // Variável inputValue captura o texto do input quando o botão "+" é pressionado
    var inputValue = document.getElementById("input").value;
    //Variável taskList é para ir adicionando as tarefas na lista conforme o usuário digita algo no campo de texto

    var taskList;


    //checkbox funcionando como  um botão para adicionar a tarefa na lista de tarefas concluídas
    var checkbox = document.createElement("button");
    var delButton = document.createElement("button");
    delButton.classList.add("trashCan");
    delButton.textContent = "🗑";

    // Botão que exclui a tarefa referente
    delButton.onclick = function () {
        taskList.style.display = "none";
        counterState(document.getElementById("totalApagado"), 1);
    }

    checkbox.classList.add("checkbox");
    checkbox.onclick = function () {

        if (checkbox.textContent == "✔") {
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
        taskList.appendChild(delButton);
        if (whichScreen == 0) {
            evenOrOdd++;
            if (evenOrOdd % 2 == 0) {
                taskList.classList.add("evenTask");
            }
            (document.getElementById("taskList")).appendChild(taskList);

        }
        else {
            evenOrOdd2++;
            taskList.classList.add("importantTask");
            if (evenOrOdd2 % 2 == 0) {
                taskList.style.backgroundColor = "#979797"
            }
            (document.getElementById("importantTaskList")).appendChild(taskList);
        }
    }
    counterState(document.getElementById("totalCriado"), 1);
    document.getElementById("input").value = '';
}

function switchScreen() {
    document.getElementById("input").value = '';
    (document.getElementById("input")).style.display = "block";
    (document.getElementById("botaoadd")).style.display = "block";
    if (whichScreen == 0) {
        (document.getElementById("importantTaskList")).style.display = "flex";
        (document.getElementById("taskList")).style.display = "none";
        whichScreen = 1;
    }
    else {
        (document.getElementById("importantTaskList")).style.display = "none";
        (document.getElementById("taskList")).style.display = "flex";
        whichScreen = 0;
    }
    (document.getElementById("doneTasks")).style.display = "none";
}

function showDoneTasks() {
    (document.getElementById("taskList")).style.display = "none";
    (document.getElementById("importantTaskList")).style.display = "none";

    if ((document.getElementById("doneTasks")).style.display != "flex") {
        (document.getElementById("doneTasks")).style.display = "flex";
        (document.getElementById("input")).style.display = "none";
        (document.getElementById("botaoadd")).style.display = "none";
    }
    else {

        (document.getElementById("input")).style.display = "block";
        (document.getElementById("botaoadd")).style.display = "block";
        (document.getElementById("doneTasks")).style.display = "none";
        if (whichScreen == 1) {
            (document.getElementById("importantTaskList")).style.display = "flex";
        }
        else {
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