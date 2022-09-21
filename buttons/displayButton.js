
function displayDo(bttn) {

    let container = document.getElementsByClassName('container')[0]
    let startPage = document.getElementsByClassName('startPage')[0]
    let backButDisplay = document.getElementsByClassName('backBut')[0]
    let stickerCheckbox = document.getElementsByClassName('stickerBox')[0]
    let centerAddButton = document.getElementsByClassName('addEvent')[0]
    let rightAddButton = document.getElementsByClassName('secondaryAdd')[0]
    let doneContainerDisplay = document.getElementsByClassName('doneContainer')[0]

    doneContainerDisplay.style.display = 'none'
    container.style.display = ''
    startPage.style.display = 'none'

    if (stickerCheckbox.innerHTML !== '') {

        stickerCheckbox.style.justifyContent = 'flex-start'
        stickerCheckbox.style.alignItems = 'flex-start'
        stickerCheckbox.style.display = ''
        centerAddButton.style.display = 'none'
        rightAddButton.style.display = ''

    } else {

        centerAddButton.style.display = ''
        rightAddButton.style.display = 'none'

    }
    
    backButDisplay.style.display = ''
    
}