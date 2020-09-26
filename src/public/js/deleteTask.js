function deleteTask(event) {
    

    let cardBody = event.target.parentNode;
    let idTask = cardBody.dataset.idTask;
    const methodHTTP = { method: 'DELETE' };

    fetch(`/tasks/${idTask}`, methodHTTP)
    .then( () => { cardBody.parentNode.remove() })
    .catch( err => exit(err) );

    function exit(err) {
        console.log(`This is the error: ${err}`);
        process.exit(1);
    }
 }