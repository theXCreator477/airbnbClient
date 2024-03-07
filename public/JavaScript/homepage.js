document.querySelectorAll('.card-body').forEach((element) => {
    element.addEventListener('click', () => {
        element.querySelector('a').click();
    });
});