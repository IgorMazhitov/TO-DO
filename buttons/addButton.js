
let stickerDate, inputText, sticker, checkBoxbool, todayDate
let stickerChecker = []

function done(bttn) {

    const inputValue = document.getElementById('inputText').value

    if (inputValue !== '') {
        
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
    
        document.getElementsByClassName('secondaryAdd')[0].style.display = ''
        document.getElementsByClassName('stickerBox')[0].style.display = ''
    
        document.getElementsByClassName('container')[0].style = ''
    
        dates = []
    
    
        document.getElementsByClassName('addEvent')[0].style.display = 'none'

    } else {
        alert('Empty input!')
    }


}

