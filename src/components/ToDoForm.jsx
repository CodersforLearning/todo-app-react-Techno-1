export default function TodoForm({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Task...' />
            <input type="submit" value='Submit' onClick={() => {console.log('clicked')}} />
        </form>
    )
}