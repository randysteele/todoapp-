class Task{

    constructor(task){
        this.id = Task.id
        this.content = Task.content
        this.category = Task.category
        this.date = Task.date
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