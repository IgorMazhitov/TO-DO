let dates = []
function chosen(bttn) {
    let dateNow = bttn.innerHTML
    let dateRow = bttn.parentNode.children
    if (bttn.style.backgroundColor == 'rgb(248, 249, 252)') {
        bttn.style.backgroundColor = '#5B67A2'
        bttn.style.color = '#F8F9FC'
    } else {
        bttn.style.backgroundColor = '#F8F9FC'
        bttn.style.color = '#5B67A2'
    }
    for (let el in dateRow) {
        if (dateRow[el].innerHTML == dateNow) {
            let inter = 
            document.getElementsByClassName('days')[0]
            .childNodes[el]
            .innerHTML 
            + '-' 
            + dateNow 
            + '-' 
            + document.querySelector('#yearMonth')
            .innerHTML
            .split(' ')
            .join('-')
            if (!dates.includes(inter)) {
                dates.push(inter)
            } else {
                let del = dates.splice(dates.indexOf(inter), 1)
            }
        }
    }
    dates = dates.sort((a, b) => (a.split('-')[1] + a.split('-')[3]) - (b.split('-')[1] + b.split('-')[3]))
}
