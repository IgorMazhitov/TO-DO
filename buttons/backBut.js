
function back() {

    const container = document.getElementsByClassName('container')[0]
    const startPage = document.getElementsByClassName('startPage')[0]
    const backButDisplay = document.getElementsByClassName('backBut')[0]
    const inputBox = document.getElementsByClassName('inputBox')[0]

    const addCenterBut = document.getElementsByClassName('addEvent')[0]
    addCenterBut.style.display = 'none'

    container.style = ''
    container.style.display = 'none'
    startPage.style.display = ''
    backButDisplay.style.display = 'none'
    if (inputBox) {
        inputBox.style.display = 'none'
    }


    const doneContainerDisplay = document.getElementsByClassName('doneContainer')[0]
    doneContainerDisplay.style.display = 'none'

    const infoContainerDisplay = document.getElementsByClassName('infoContainer')[0]
    infoContainerDisplay.style.display = 'none'
    
    const secondaryAddDisplay = document.getElementsByClassName('secondaryAdd')[0]
    secondaryAddDisplay.style.display = 'none'
}