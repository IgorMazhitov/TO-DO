
let doneEvent = '', doneDate
const doneObj = {

    doneDate : []

}

function radioCheck(el) {

    const emptyCheck = el.parentNode.parentNode.childElementCount
    let delFromChecks = el.parentNode.parentNode.previousElementSibling.innerHTML

    if (emptyCheck == 1) {

        let del = dates.splice(dates.indexOf(delFromChecks), 1)
        del = stickerChecker.splice(stickerChecker.indexOf(delFromChecks), 1)

        doneEvent = `<div id="doneEventText">${el.nextElementSibling.innerHTML}</div>`
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

                break

            }
        }

        el.parentNode.parentNode.parentNode.remove()

    } else {

        doneEvent = el.nextElementSibling.innerHTML
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
}