export default function ToDo({todo}) {
    return (
        <div className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    )
}