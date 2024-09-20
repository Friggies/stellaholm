const openButton = document.querySelector('#openGlobalSearch');
const closeButtons = document.querySelectorAll('.globalSearch__closeOnClick');
const dialog = document.querySelector('#globalSearch');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        dialog.close();
    });
});

/*
dialog.addEventListener('click', ({ target: dialog }) => {
    if (dialog.nodeName === 'DIALOG') {
        dialog.close();
    }
});
*/
