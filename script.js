// Запрет правого клика
function disableRightClick(event) {
    event.preventDefault(); 
}
document.addEventListener('contextmenu', disableRightClick);

// Запрет использования клавиш для копирования и разработчика
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) { // Ctrl+S
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+C
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)) { // Ctrl+V
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'X'.charCodeAt(0)) { // Ctrl+X
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) { // Ctrl+A
        return false;
    }
};

// Запрет перетаскивания изображений
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName.toUpperCase() === 'IMG') {
        e.preventDefault();
    }
});

// Динамическая загрузка контента
window.onload = function() {
    fetch('https://yourapi.com/content')
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamic-content').innerHTML = data;
        });
};

// Проверка наличия инструментов разработчика
(function() {
    var devtools = function() {};
    devtools.toString = function() {
        if (new Error().stack.indexOf('toString') === -1) {
            window.location.href = 'about:blank';
        }
    };
    setInterval(function() {
        console.log('%c', devtools);
    }, 1000);
})();

// Пример шифрования содержимого
function decryptContent(encryptedContent) {
    return atob(encryptedContent);
}

document.addEventListener('DOMContentLoaded', function() {
    var encryptedContent = 'U29tZSBzZWNyZXQgY29udGVudA=='; // Закодированный контент
    var content = decryptContent(encryptedContent);
    document.getElementById('encrypted-content').innerHTML = content;
});

