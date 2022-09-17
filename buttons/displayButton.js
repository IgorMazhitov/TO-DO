
function displayDo(bttn) {

    let container = document.getElementsByClassName('container')[0]
    let startPage = document.getElementsByClassName('startPage')[0]
    let backButDisplay = document.getElementsByClassName('backBut')[0]
    let box4 = document.getElementsByClassName('stickerBox')[0]
    let centerAddButton = document.getElementsByClassName('addEvent')[0]
    let rightAddButton = document.getElementsByClassName('addButtonDiv')[0]
    let doneContainerDisplay = document.getElementsByClassName('doneContainer')[0]

    doneContainerDisplay.style.display = 'none'
    container.style.display = ''
    startPage.style.display = 'none'

    if (box4.innerHTML !== '') {

        box4.style.justifyContent = 'flex-start'
        box4.style.alignItems = 'flex-start'
        centerAddButton.style.display = 'none'
        rightAddButton.style.display = ''

    } else {

        box4.style.justifyContent = 'center'
        box4.style.alignItems = 'center'
        centerAddButton.style.display = ''
        rightAddButton.style.display = 'none'

    }
    
    backButDisplay.style.display = ''
    
}