export default function ToDo({todo, handleToggle, removeTask}) {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div>
            <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
            </div>
            <input id={todo.id} type='button' value='X' onClick={removeTask} />
        </div>  
    )
}