function deleteTask(event) {
    

    let cardBody = event.target.parentNode.parentNode.parentNode.parentNode;
    console.log(cardBody)
    let idTask = cardBody.dataset.idTask;
    const methodHTTP = { method: 'DELETE' };

    fetch(`/tasks/${idTask}`, methodHTTP)
    .then( () => { cardBody.remove() })
    .catch( err => exit(err) );

    function exit(err) {
        console.log(`This is the error: ${err}`);
        process.exit(1);
    }
 }