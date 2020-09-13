function card(task) {
    return `<div class="card m-5" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${task.title}</h5>
        <p class="card-text">${task.description}</p>
        <p class="card-text">${task.status}</p>
        <a href="#" class="card-link">To Edit</a>
        <a href="#" class="card-link">To Archive</a>
    </div>
</div> 
`;    
}

module.exports = card;