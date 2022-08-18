const listFood = document.getElementById("list-food")

function rendererList(data) {
    for(item of data) {
        processItem(item)
    }
}

function processItem(item) {
    const container = document.createElement("div")
    const nameElement = document.createElement("p")
    const btnAction = document.createElement("button")

    nameElement.innerHTML = item.name
    btnAction.innerText = 'View'

    // Asignación de evento a un elemento desde DOM
    btnAction.onclick = event => {
        showDetails(item)
        btnAction.classList.remove('item-round')
    }

    btnAction.classList.add('item-round')

    container.append(nameElement)
    container.append(btnAction)

    listFood.append(container)
}

function showDetails(item) {
    // TODO IMPLEMENT SHOW ITEM LOGIC
    alert(JSON.stringify(item))
}

rendererList(data)