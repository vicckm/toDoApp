const card = require("./templateCard");

 function createPage(tasks) {

    const card = require('./templateCard');

    let cardTasks = '';

    tasks.forEach( task => cardTasks += card(task));

            
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../static/css/style.css">
        <title>To Do App</title>
    </head>
    <body>
        <header class="header">
            <div class="logo">
                <img src="../static/img/arrow.svg" alt=">">
                <h1>To Do</h1>
            </div>
        </header>
    
        <section>
            <div class="container">
                <form class="form" id="form" action="/tasks" method='POST'>
                    <input type="hidden" name="_method" value="PUT">
                    <input type="hidden" name="idTask" value="null">
                    
                    <fieldset>
                        <legend>What's your task today?</legend>
                        <span class="border"></span>

                        <div class="items">
                            <label for="titleTask">Title:</label>
                            <input type="text" name='titleTask' id="titleTask" placeholder="Task Title">
                        </div>
                    
                        <div class="items">
                            <label for="descriptionTask">Description:</label>
                            <textarea name='descriptionTask' id="descriptionTask" placeholder="Enter the task description"></textarea>
                        </div>
                    
                        <div class="items">
                            <label for="statusTask">Status:</label>
                            <input type="text" name='statusTask' id="statusTask" placeholder="Status">
                        </div>
    
                        <div class="button">
                            <button class="button-add" type='submit'>Add task!</button>   
                        </div>        
                    </fieldset>
                </form>
    
                <hr>
                
                <div class="list-cards" >
                    ${cardTasks}
                </div>
    
            </div>
        </section>  
        <script src="/static/js/deleteTask.js"></script>
        <script src="/static/js/updateTask.js"></script> 
    </body>
    </html>`;
 };
 

module.exports = createPage;

/*
 <input type="hidden" name="_method" value="PUT">
<input type="hidden" name="idTask" value="null">
*/ 