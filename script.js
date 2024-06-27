// Crear un botón de cierre
function createCloseButton() {
    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    button.onclick = closeTask;
    return button;
}

// Función para cerrar la tarea
function closeTask() {
    var li = this.parentElement;
    li.remove();
}

// Añadir símbolo de "checked" cuando se hace clic en un elemento de la lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Crear un nuevo elemento de lista al hacer clic en el botón "Add"
function nElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("add").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("lotta things to do for u to not write anything");
    } else {
        li.className = "";
        document.getElementById("list").appendChild(li);
        var button = createCloseButton();
        li.appendChild(button);
    }
    document.getElementById("add").value = "";
}

document.getElementById("add").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        nElement();
    }
});
