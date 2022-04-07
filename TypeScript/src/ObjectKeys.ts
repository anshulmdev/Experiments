interface ContactExample2 {
    id: Number;
    name: ContactName;
    status: ContactStatus;
    birthDate: ContactBirthDate;
}

type contactKeys = keyof ContactExample2;

// Example
let sample3: contactKeys = "name";
const genericExample1 = <T>(objectExample: T, propertyName: keyof T) => {
    return objectExample[propertyName]
}