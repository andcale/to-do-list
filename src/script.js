const input = document.getElementById('input')
const ul = document.getElementById('items-list')

function adicionar(){
    let tarefa = input.value;
    if(input.value != ''){
        let li = document.createElement('li')
        ul.appendChild(li)
        li.textContent = tarefa;
        input.value = '';
    }
    dele
}

let botao = document.getElementById('button')
botao.addEventListener('click',adicionar)