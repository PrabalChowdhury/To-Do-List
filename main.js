let addToDoButton = document.getElementById('add');
let todoCon = document.getElementById('todocon');
let input = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    todoCon.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todoCon.removeChild(paragraph);
    })
})
