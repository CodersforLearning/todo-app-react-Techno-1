import ToDo from './ToDo'

export default function ToDoList({toDoList, handleToggle, handleFilter, removeTask}) {
    return (
        <div>
            {toDoList.map(todo => {
                return(
                    <ToDo todo={todo} handleToggle={handleToggle} removeTask={removeTask}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )

}