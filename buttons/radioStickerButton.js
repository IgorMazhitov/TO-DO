
let doneEvent = '', doneDate
const doneObj = {

    doneDate : []

}

function radioCheck(el) {

    const emptyCheck = el.parentNode.parentNode.childElementCount

    console.log(emptyCheck)
    
    let delFromChecks = el.parentNode.parentNode.previousElementSibling.innerHTML

    doneEvent = `<div id="doneEventText">${el.nextElementSibling.innerHTML}</div>`


    if (emptyCheck == 1) {

        let del = dates.splice(dates.indexOf(delFromChecks), 1)
        del = stickerChecker.splice(stickerChecker.indexOf(delFromChecks), 1)

        doneDate = el.parentNode.parentNode.previousElementSibling.innerHTML

        for (let key in doneObj) {

            if (key = doneDate) {

                if (doneObj[key] == undefined) {
                    doneObj[key] = []
                }

                doneObj[key].push(doneEvent)

                break;

            } else {

                key = doneDate
                doneObj[key].push(doneEvent)

                break;

            }
        }

        el.parentNode.parentNode.parentNode.remove()

    } else {

        doneDate = el.parentNode.parentNode.previousElementSibling.innerHTML

        for (let key in doneObj) {

            if (key = doneDate) {

                if (doneObj[key] == undefined) {

                    doneObj[key] = []

                }

                doneObj[key].push(doneEvent)

                break;

            } else {

                key = doneDate
                doneObj[key].push(doneEvent)

                break;

            }
        }

        el.parentNode.remove()

    }

    console.log(doneObj)
}