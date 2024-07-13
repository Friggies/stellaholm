OPEN_BTN = document.querySelector('#openGlobalMenu');
MENU = document.querySelector('#globalMenu');

OPEN_BTN.addEventListener('click', () => {
    MENU.showModal();
    MENU.addEventListener('click', function (event) {
        var rect = MENU.getBoundingClientRect();
        var isInMenu =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
        if (!isInMenu) {
            MENU.close();
        }
    });
});
