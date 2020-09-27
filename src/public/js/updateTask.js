const btn = document.querySelectorAll('.edit');

btn.forEach( btn => {

    btn.addEventListener('click', () => {
        const form = document.getElementById('form');
        const card = btn.parentNode.parentNode.parentNode;
        const divIcons = btn.parentNode.parentNode;

        const title = card.childNodes[1].innerText;
        const description = card.childNodes[3].innerText;
        const status = divIcons.childNodes[1].innerText;

        const idTask = card.dataset.idTask;

        form[1].value = idTask;
        form[3].value = title;
        form[4].value = description;
        form[5].value = status; 
        form.action = `/tasks/${idTask}`
    });
    
});
    