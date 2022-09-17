// first add action 

let inputBox = `<div class="inputBox"> 
                    <div class="inputLeft">
                        <div class="calendar-wrapper">
                            <button id="btnPrev" type="button">Prev</button>
                            <div id="yearMonth"> year/month </div>
                            <button id="btnNext" type="button">Next</button>
                            <div id="divCal"></div>
                        </div>
                    </div> 
                    <div class="inputRight"> 
                        <input id="inputText" type="text" placeholder="What to do?"> 
                        <button class="inputBttn" onclick="done(this); return false">&#8594</button> 
                    </div> 
                </div>`

function add() {

    let container = document.getElementsByClassName('container')[0]

    if (container.innerHTML.match('inputBox')) {

        document.getElementsByClassName('inputBox')[0].style.display = ''
        document.getElementById('inputText').value = ''

    } else {

        document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + inputBox
        document.getElementsByClassName('addEvent')[0].style.display = 'none'
        document.getElementsByClassName('addButtonDiv')[0].style.display = 'none'

        calendarStart()

    }
}

function rightAdd() {

    document.getElementsByClassName('inputBox')[0].style.display = '' // show inputBox
    document.getElementById('inputText').value = '' // input text field empty

    calendarStart() 

    document.getElementsByClassName('addButtonDiv')[0].style.display = 'none' // hide right add button

    let inputBoxStyle = document.getElementsByClassName('inputBox')[0]
    inputBoxStyle.style.position = 'absolute'
    inputBoxStyle.style.top = '23,06666666666667%'
    inputBoxStyle.style.left = '32,37359550561798%'

    let hideBox = document.getElementsByClassName('stickerBox')[0]
    hideBox.style.display = 'none'
    
}