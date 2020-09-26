function card(task) {
    return `
        <div class="card" data-id-task="${task.id}">
            <h1 class="title">${task.title}</h1>
            <p class="description">${task.description}</p>

            <div class="bottom-card">
                <p class="status">${task.status}</p>

                <div class="icon-group">
                    <button type="submit" class="icon"><img src="../static/img/pencil.svg" alt="To edit"></button>
                    <button type="submit" class="icon" onclick="deleteTask(event)"><img src="../static/img/trash.svg" alt="To delete"></button>
                </div>
            </div>
        </div> `;    
}

module.exports = card;