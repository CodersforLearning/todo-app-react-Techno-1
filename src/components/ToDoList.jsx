import ToDo from './ToDo'

export default function ToDoList({toDoList}) {
    return (
        <div>
            {toDoList.map(todo => {
                return(
                    <ToDo todo={todo}/>
                )
            })}
        </div>
    )

}