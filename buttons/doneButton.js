
let doneArray = []

function displayDone(bttn) {

    const startPage = document.getElementsByClassName('startPage')[0]
    startPage.style.display = 'none'

    const backButDisplay = document.getElementsByClassName('backBut')[0]
    backButDisplay.style = ''
    backButDisplay.style.display = ''

    const containerDisplay = document.getElementsByClassName('container')[0]
    containerDisplay.style.display = 'none'

    const doneContainerDisplay = document.getElementsByClassName('doneContainer')[0]
    doneContainerDisplay.style.display = ''

    const doneStickerBox = document.getElementsByClassName('doneStickerBox')[0]

    if (doneContainerDisplay.innerHTML == '') {

        for (let keys in doneObj) {

            if (keys !== 'doneDate') {

                doneStickerBox.innerHTML = doneStickerBox.innerHTML + 
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

                    doneStickerBox.innerHTML = doneStickerBox.innerHTML + 
                    `<div class="doneSticker">
                        <div class="doneDate doneDate${keys}">${keys}</div>
                        <div class="doneContent">${doneObj[keys].join(' ')}</div
                    </div>`

                }
            }
        }
    }
}