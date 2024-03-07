document.getElementById('delete-btn').addEventListener('click', (event) => {
    if (!confirm('Are You Sure ? This page will be deleted permanently.')) event.preventDefault();
});