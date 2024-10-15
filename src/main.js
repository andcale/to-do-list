const inputTarefa = document.querySelector('.inputTarefa');
const btnAddTarefa = document.querySelector('.btn-addTarefa');
const listaTarefas = document.querySelector('.listaTarefas');


//Função para criar cada tarefa

function criarLi(){
    const li = document.createElement('li');
    return li;
}

function criarTarefa(textoInput){ 
    const li = criarLi();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    apagarTarefa(li);
    salvarTarefas();
}

// Evento de click para criar a tarefa

btnAddTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value){
        return};
    criarTarefa(inputTarefa.value);
    limparInput();

})

// Evento no teclado (enter) para criar tarefa

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value){
            return};
        criarTarefa(inputTarefa.value);
        limparInput();
    }
})

//Limpar input

function limparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Apagar tarefa

function apagarTarefa(li){
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'APAGAR';
    btnApagar.setAttribute('class','apagar');
    li.appendChild(btnApagar);
}


// Evento para click no botão 'Apagar', deleta a tarefa

document.addEventListener('click', function(e) {    
    const el = e.target;
    if(el.classList.contains('apagar')){   // Se ao clicar no elemento especificado (target) tiver a classe 'apagar', é removido o elemento pai.
        el.parentElement.remove();
        salvarTarefas()
    }
    
})

// Função para salvar e armazenar as tarefas no navegador

function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText.replace('APAGAR', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// Função para carregar as tarefas salvas

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    if (!tarefas) return;
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas();