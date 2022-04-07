type ContactName = String;                                   // Type Alias
type ContactBirthDate = Date | String | Number;              // Multiple Types
type ContactStatus = "active" | "in-progress" | "inactive"   // Enum Alternative (less Code)


interface ContactExample {
    id: Number;
    name: ContactName;
    status: ContactStatus;
    birthDate: ContactBirthDate;
}

interface Address {
    country: String;
}

type ContactWithAddress = ContactExample & Address;          // Extend Alternative


// Example
const sampleContact:ContactWithAddress = {
    id: 1,
    name: "John",
    status: "active",
    birthDate: "17/10/1997",
    country: "India"
}