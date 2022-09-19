
let stickerDate, inputText, sticker, checkBoxbool, todayDate
let stickerChecker = []

const innerInbox = `<div class="inputLeft">
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
                </div> `


function done(bttn) {

    inputText = `<div class="checkBox">
                    <input type="radio" id="done" name="stickerCheckbox" value="done" onclick="radioCheck(this); return false;">
                    <div id="eventText"">${document.getElementById('inputText').value}</div>
                </div>`

    if (dates.length !== 0) {

        for (let el in dates) {

            if (stickerChecker.includes(dates[el])) {

                document.getElementsByClassName(`stickerDate${dates[el]}`)[0].nextElementSibling.innerHTML += '\n' + inputText

            } else {

            sticker =  `<div class="stickerContainer">
                            <div class="stickerDate stickerDate${dates[el]}">${dates[el]}</div>
                            <div class="stickerContent">${inputText}</div
                        </div>`

            document.getElementsByClassName('stickerBox')[0].innerHTML = document.getElementsByClassName('stickerBox')[0].innerHTML + sticker

            stickerChecker.push(dates[el])

            }
        }
    } else {

        todayDate = document
        .getElementsByClassName('days')[0]
        .cells[document.getElementsByClassName('today')[0].cellIndex]
        .innerHTML 
        + '-'
        + document
        .getElementsByClassName('today')[0]
        .innerHTML
        + '-'
        + document.getElementById('yearMonth').innerHTML.split(' ').join('-')

        if (stickerChecker.includes(todayDate)) {

            document.getElementsByClassName(`stickerDate${todayDate}`)[0].nextElementSibling.innerHTML += '\n' + inputText

        } else {

        sticker =  `<div class="stickerContainer">
                        <div class="stickerDate stickerDate${todayDate}">${todayDate}</div>
                        <div class="stickerContent">${inputText}</div
                    </div>`

        document
        .getElementsByClassName('stickerBox')[0]
        .innerHTML = document
                    .getElementsByClassName('stickerBox')[0]
                    .innerHTML 
                    + sticker

        stickerChecker.push(todayDate)

        }
    }

    document.getElementsByClassName('inputBox')[0].style.display = 'none'
    document.getElementsByClassName('inputBox')[0].innerHTML = innerInbox

    calendarStart()

    document.getElementsByClassName('addButtonDiv')[0].style.display = ''
    document.getElementsByClassName('stickerBox')[0].style.display = ''

    dates = []

    const box4 = document.getElementsByClassName('stickerBox')[0]
    box4.style.justifyContent = 'flex-start'
    box4.style.alignItems = 'flex-start'

    document.getElementsByClassName('addEvent')[0].style.display = 'none'

}

