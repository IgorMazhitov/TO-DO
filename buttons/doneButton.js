
let doneArray = []

function displayDone(bttn) {

    let startPage = document.getElementsByClassName('startPage')[0]
    startPage.style.display = 'none'

    let backButDisplay = document.getElementsByClassName('backBut')[0]
    backButDisplay.style.display = ''

    let containerDisplay = document.getElementsByClassName('container')[0]
    containerDisplay.style.display = 'none'

    let doneContainerDisplay = document.getElementsByClassName('doneContainer')[0]
    doneContainerDisplay.style.display = ''
    doneContainerDisplay.style.justifyContent = 'flex-start'
    doneContainerDisplay.style.alignItems = 'flex-start'

    if (doneContainerDisplay.innerHTML == '') {

        for (let keys in doneObj) {

            if (keys !== 'doneDate') {

                doneContainerDisplay.innerHTML = doneContainerDisplay.innerHTML + 
                `<div class="doneSticker">
                    <div class="doneDate doneDate${keys}">${keys}</div>
                    <div class="doneContent">${doneObj[keys].join(' ')}</div
                </div>`

            }
        }
     } else {

        for (let keys in doneObj) {

            if (document.getElementsByClassName(`doneDate${keys}`)[0] !== undefined && keys == document.getElementsByClassName(`doneDate${keys}`)[0].innerHTML) {

                document.getElementsByClassName(`doneDate${keys}`)[0].nextElementSibling.innerHTML = doneObj[keys].join(' ')

            } else {

                if (keys !== 'doneDate') {

                    doneContainerDisplay.innerHTML = doneContainerDisplay.innerHTML + 
                    `<div class="doneSticker">
                        <div class="doneDate doneDate${keys}">${keys}</div>
                        <div class="doneContent">${doneObj[keys].join(' ')}</div
                    </div>`

                }
            }
        }
    }
}