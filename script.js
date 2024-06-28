function createCloseButton() {
    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    button.onclick = closeTask;
    return button;
}

function closeTask() {
    var li = this.parentElement;
    li.remove();
}

// símbolo de "checked" cuando se hace clic en un elemento de la lista
var list = document.querySelector('#list');
var doneList = document.querySelector('#doneList');

function toggleTask(ev) {
    if (ev.target.tagName === 'LI' || ev.target.classList.contains('liTexto')) {
        var li = ev.target.closest('li');
        li.classList.toggle('checked');
        if (li.classList.contains('checked')) {
            doneList.appendChild(li);
        } else {
            list.appendChild(li);
        }
    }
}

list.addEventListener('click', toggleTask, false);
doneList.addEventListener('click', toggleTask, false);

function nElement() {
    var li = document.createElement("li");
    li.className = "list-group-item"; // Añade clase de Bootstrap para estilo
    var div = document.createElement("div");
    var inputValue = document.getElementById("add").value;
    var t = document.createTextNode(inputValue);

    if (inputValue === '') {
        alert("Please write something!");
    } else {
        div.className = "liTexto";
        div.appendChild(t);
        li.appendChild(div);
        var button = createCloseButton();
        li.appendChild(button);
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("add").value = ""; // Clear input field after adding
}

document.getElementById("add").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        nElement();
    }
});
