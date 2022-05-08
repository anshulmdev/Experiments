import { Child } from './Child';


export const Parent = () => {
    const changeMessage = () => {
        alert("New Message")
        return "New Message"
    }
    return <Child changeNewMessage = { changeMessage }/>
}