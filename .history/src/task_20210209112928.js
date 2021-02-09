class Task {

    constructor(task){
        this.id = task.id
        this.content = task.content
        this.category = task.category
        this.date = task.date
        Task.all.push(this);
        debugger
    }

    renderTaskCard(){
        return `
        <div data-id=${this.id}>
        <div data-id=${this.content}>
        <div data-id=${this.category}>
        <div data-id=${this.date}>
        </div></div></div></div>
        `;

    }
}
Task.all = [];