
function deleteDone(sticker) {

    const verify = confirm('Are you sure?')

    if (verify) {
        
        const dateDelete = sticker.parentNode.firstChild.nextSibling.innerHTML
    
        for (let key in doneObj) {
    
            if (dateDelete == key) {
    
                delete doneObj[key]
                break;
    
            }
        }
    
        sticker.parentNode.remove()
        
    }

}