function back() {
    let container = document.getElementsByClassName('container')[0]
    let startPage = document.getElementsByClassName('startPage')[0]
    let backButDisplay = document.getElementsByClassName('backBut')[0]
    container.style.display = 'none'
    startPage.style.display = ''
    backButDisplay.style.display = 'none'
    let doneContainerDisplay = document.getElementsByClassName('doneContainer')[0]
    doneContainerDisplay.style.display = 'none'
    let infoContainerDisplay = document.getElementsByClassName('infoContainer')[0]
    infoContainerDisplay.style.display = 'none'
    let addButtonDivDisplay = document.getElementsByClassName('addButtonDiv')[0]
    addButtonDivDisplay.style.display = 'none'
}