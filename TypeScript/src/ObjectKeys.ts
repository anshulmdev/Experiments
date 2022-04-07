interface ContactExample2 {
    id: Number;
    name: ContactName;
    status: ContactStatus;
    birthDate: ContactBirthDate;
}

type contactKeys = keyof ContactExample2;

let sample3: contactKeys = "name";