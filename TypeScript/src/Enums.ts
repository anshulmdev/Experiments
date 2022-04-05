enum Type {
    "active" = "Active",
    "inactive" = "Inactive",
    "nan" = "Not Assigned"
}


interface ContactInfo {
    id: Number;
    name: String;
    birthDate?: Date;
    status: Type
}


let sample2: String = "Example";


let contactExample2: ContactInfo = {
    id: 11,
    name: "John",
    birthDate: new Date('11/11/1997'),
    status: Type.active
}