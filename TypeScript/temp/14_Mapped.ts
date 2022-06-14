type FlexibleClass = {
    name: string
    [key: string]: string | number
}

const User: FlexibleClass = {
    name: "John",
    age: 44
}

type OptionalFlag<T> = {
    [Propery in keyof T]: boolean;
}

type example = OptionalFlag<FlexibleClass>