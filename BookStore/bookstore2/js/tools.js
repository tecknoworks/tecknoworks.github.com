function saveToStorage(name,value){
    if (($('html')).hasClass('newBrowser')) {
        localStorage.setItem(name, value);
    }
}

function getFromStorage(name){
    if (($('html')).hasClass('newBrowser')) {
        return localStorage.getItem(name);
    }
}

function removeFromStorage(name){
    if (($('html')).hasClass('newBrowser')) {
        return localStorage.removeItem(name);
    }
}