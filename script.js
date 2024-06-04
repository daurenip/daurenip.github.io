function disableRightClick(event) {
    event.preventDefault(); 
}
document.addEventListener('contextmenu', disableRightClick);

function handleClipboardChange(event) {
    var clipboardData = event.clipboardData || window.clipboardData;
    var clipboardItems = clipboardData.items;
    
    for (var i = 0; i < clipboardItems.length; i++) {
        var item = clipboardItems[i];
        
        if (item.type.indexOf('image') !== -1) {
            alert("Обнаружена попытка создания скриншота страницы.");
            break;
        }
    }
}

document.addEventListener('paste', handleClipboardChange);

