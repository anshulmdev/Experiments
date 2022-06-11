
interface User {
    name: string;
    id: string;
    email?: string;
}

type OptionalUser = Partial<User> 
type RequiredUser = Required<User>
type CustomUser = Pick<User, "email" | "id">
type CustomOmitUser = Omit<User, "id">

const user = (user:User, opt: OptionalUser, req: RequiredUser): User => {
    return {
        ...user,
        ...opt,
        ...req
    }
}