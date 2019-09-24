function ready(eventHandler) {
    if (document.readyState !== 'loading') {
        eventHandler();
    } else {
        document.addEventListener('DOMContentLoaded', eventHandler);
    }
}

ready(function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status !== 200)
            return;

        var style = document.createElement('style');
        style.innerHTML = xhr.responseText;
        document.head.appendChild(style);

    }; // Load the latest version of the style.css
    xhr.open("GET", 'https://raw.githubusercontent.com/Vinetos/Xsinoi/master/style.css', true);
    xhr.send();
});