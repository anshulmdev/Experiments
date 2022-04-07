interface Todo {
    id: Number;
    title: String;
    status?: Status;
    completedOn?: Date;
}

enum Status {
    "Done" = "done",
    "Progress" = "in-progress",
    "Todo" = "todo"
}

const todoItems: Array<Todo> = [
    { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.Progress },
    { id: 3, title: "Write the best app in the world", status: Status.Todo },
]

function addTodoItem(todo) {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: Status.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))