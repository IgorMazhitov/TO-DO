
function back() {

    const container = document.getElementsByClassName('container')[0]
    const startPage = document.getElementsByClassName('startPage')[0]
    const backButDisplay = document.getElementsByClassName('backBut')[0]

    container.style.display = 'none'
    startPage.style.display = ''
    backButDisplay.style.display = 'none'

    const doneContainerDisplay = document.getElementsByClassName('doneContainer')[0]
    doneContainerDisplay.style.display = 'none'

    const infoContainerDisplay = document.getElementsByClassName('infoContainer')[0]
    infoContainerDisplay.style.display = 'none'
    
    const addButtonDivDisplay = document.getElementsByClassName('addButtonDiv')[0]
    addButtonDivDisplay.style.display = 'none'
}