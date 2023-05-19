function adicionarItem() {
    let novoItem = document.createElement("li");
    contador++;
    novoItem.innerText = "Item " + contador + " ";
    let botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";
    botaoRemover.onclick = function() { removerItem(botaoRemover.parentNode) };
    novoItem.appendChild(botaoRemover);
    document.getElementById("lista").appendChild(novoItem);
}

function removerItem(item) {
    item.parentNode.removeChild(item);
}

function removerTodosItens() {
    let lista = document.getElementById("lista");
    while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
    }
    contador = 0;
}

let contador = 0;
