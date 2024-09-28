// Pegando o texto
const input = document.getElementById('input');              

// Pegando a ul
const ul = document.getElementById('items-list');

// Função para adicionar o texto
function adicionar(){
    let tarefa = input.value;
    if(input.value != ''){
        let li = document.createElement('li')
        ul.appendChild(li)
        li.textContent = tarefa;
        input.value = '';
    }
    
}
// Pegando o botão e adicionando o evento de click
let botao = document.getElementById('button')
botao.addEventListener('click',adicionar)

//Vericando se a tecla enter foi apertada para adicionar o texto
function enter(event){
    if(event.key === 'Enter'){
        adicionar();
    }
}
input.addEventListener('keyup', enter)