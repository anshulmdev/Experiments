export const Child = (props) => {
    let message  = "Child Component"
    return (
    <div>
        <button onClick={props.changeNewMessage}> { message } </button>
    </div>
        )
}