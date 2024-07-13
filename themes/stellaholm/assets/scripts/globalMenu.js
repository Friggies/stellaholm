const openButton = document.querySelector('#openGlobalMenu');
const closeButtons = document.querySelectorAll('.globalMenu__closeOnClick');
const dialog = document.querySelector('#globalMenu');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        dialog.close();
    });
});

dialog.addEventListener('click', ({ target: dialog }) => {
    if (dialog.nodeName === 'DIALOG') {
        dialog.close();
    }
});
