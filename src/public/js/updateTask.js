const btn = document.querySelectorAll('.edit');

btn.forEach( btn => {

    btn.addEventListener('click', () => {
        const form = document.getElementById('form');
        const card = btn.parentNode;

        const title = card.childNodes[1].innerText;
        const description = card.childNodes[3].innerText;
        const status = card.childNodes[5].innerText;

        const idTask = card.dataset.idTask;

        form[1].value = idTask;
        form[2].value = title;
        form[3].value = description;
        form[4].value = status; 
        form.action = `/tasks/${idTask}`
    });
    
});
    