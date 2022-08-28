let dates = []
function chosen(bttn) {
    let dateNow = bttn.innerHTML
    let dateRow = bttn.parentNode.children
    if (bttn.style.backgroundColor == '#fff') {
        bttn.style.backgroundColor = '#1095c1'
        bttn.style.color = '#fff'
    } else {
        bttn.style.backgroundColor = '#fff'
        bttn.style.color = '#1095c1'
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
